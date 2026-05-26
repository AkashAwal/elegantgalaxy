"use client";

/**
 * ProductShowcase — reusable 4-section animated product showcase.
 *
 * Usage:
 *   import ProductShowcase, { type ProductShowcaseConfig } from "@/components/ProductShowcase";
 *
 *   const MY_CONFIG: ProductShowcaseConfig = { ... };
 *   <ProductShowcase config={MY_CONFIG} />
 *
 * See TVShowcase.tsx for a full worked example.
 */

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// ─── Public types ─────────────────────────────────────────────────────────────

/** One of the three angle views shown in the sticky scroll section. */
export type ShowcaseView = {
  /** Path to image (e.g. "/my-product-front.webp"). Must be in /public. */
  src:   string;
  /** Large heading, e.g. "The Full Picture." */
  title: string;
  /** One-line description shown below the heading. */
  desc:  string;
  /** Small all-caps label, e.g. "FRONT VIEW". */
  tag:   string;
  /** Background colour for the sticky section. Default: near-black. */
  bg?:   string;
  /** CSS colour for the ambient radial glow. Default: blue-ish. */
  glow?: string;
};

/** A single feature callout (Section 3). */
export type ShowcaseFeature = {
  label: string;
  sub:   string;
};

/** Full configuration object passed to <ProductShowcase>. */
export type ProductShowcaseConfig = {
  // ── Section 1: sticky angles ──────────────────────────────────────────────
  /** Exactly three views: [front, side, detail] or any three angles. */
  views: [ShowcaseView, ShowcaseView, ShowcaseView];

  // ── Section 2: parallax ───────────────────────────────────────────────────
  /** Large headline, e.g. "4K QLED." */
  parallaxTitle:    string;
  /** Smaller styled subtitle, e.g. "Brilliant at any size." */
  parallaxSubtitle: string;
  /** Optional descriptive line below the subtitle. */
  parallaxDesc?:    string;

  // ── Section 3: feature callouts ───────────────────────────────────────────
  /** Features shown to the left of the product image (1–3 items). */
  featuresLeft:  ShowcaseFeature[];
  /** Features shown to the right of the product image (1–3 items). */
  featuresRight: ShowcaseFeature[];
  /** Override section heading. Default: "Every feature, thoughtfully placed." */
  featuresHeading?: string;

  // ── Section 4: specs ──────────────────────────────────────────────────────
  /** Array of [label, value] pairs for the spec table. */
  specs: [string, string][];
  /** Override specs heading. Default: "Numbers that matter." */
  specsHeading?: string;

  // ── Shared product info ───────────────────────────────────────────────────
  /** Product name shown below the image in Section 4. */
  name:         string;
  /** Formatted price, e.g. "₹49,999". */
  price:        string;
  /** href for the "Shop Now" button. */
  href:         string;
  /** href for the "Enquire" button. Defaults to "/contact". */
  enquireHref?: string;
};

// ─── Internal hooks ───────────────────────────────────────────────────────────

function useScrollProgress(ref: React.RefObject<HTMLDivElement | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = ref.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      setP(Math.max(0, Math.min(1, -el.getBoundingClientRect().top / scrollable)));
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [ref]);
  return p;
}

function useInView(ref: React.RefObject<HTMLDivElement | null>, threshold = 0.2) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return v;
}

function useParallaxY(ref: React.RefObject<HTMLDivElement | null>, speed = 0.22) {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = ref.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      setY((top + height / 2 - window.innerHeight / 2) * speed);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [ref, speed]);
  return y;
}

// ─── Default values ───────────────────────────────────────────────────────────

const DEFAULT_BGS   = ["#08090e", "#070f1d", "#090d10"] as const;
const DEFAULT_GLOWS = [
  "rgba(96, 165, 250, 0.11)",
  "rgba(129, 140, 248, 0.11)",
  "rgba(52, 211, 153, 0.10)",
] as const;

// ─── Section 1: Sticky angle crossfade ───────────────────────────────────────

function StickyAnglesSection({ views }: { views: ProductShowcaseConfig["views"] }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const prog     = useScrollProgress(outerRef);

  const t     = Math.min(prog * 2, 2 - 1e-9);
  const fromI = Math.floor(t);
  const toI   = fromI + 1;
  const blend = t - fromI;

  const opacities = views.map((_, i) => {
    if (i === fromI) return 1 - blend;
    if (i === toI)   return blend;
    return 0;
  });

  const activeI = blend > 0.5 ? toI : fromI;
  const view    = views[activeI];
  const bg      = view.bg   ?? DEFAULT_BGS[activeI];
  const glow    = view.glow ?? DEFAULT_GLOWS[activeI];

  return (
    <div ref={outerRef} style={{ position: "relative", height: "300vh" }}>
      <div style={{
        position:   "sticky",
        top:        0,
        height:     "100vh",
        overflow:   "hidden",
        background: bg,
        transition: "background 1s ease",
      }}>

        {/* Ambient glow */}
        <div style={{
          position:      "absolute",
          inset:         0,
          background:    `radial-gradient(ellipse 72% 62% at 50% 56%, ${glow} 0%, transparent 68%)`,
          transition:    "background 1s ease",
          pointerEvents: "none",
        }} />

        {/* Crossfading images */}
        <div style={{
          position:       "absolute",
          inset:          0,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
        }}>
          {views.map((v, i) => (
            <div
              key={v.src}
              style={{
                position:   "absolute",
                width:      "min(720px, 65vw)",
                height:     "min(450px, 40vw)",
                opacity:    opacities[i],
                transition: "opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Image
                src={v.src}
                alt={v.tag}
                fill
                style={{ objectFit: "contain" }}
                priority={i === 0}
                sizes="65vw"
              />
            </div>
          ))}
        </div>

        {/* Left text */}
        <div style={{
          position:  "absolute",
          left:      "clamp(24px, 5vw, 80px)",
          top:       "50%",
          transform: "translateY(-50%)",
          maxWidth:  300,
          zIndex:    2,
        }}>
          <p
            key={`tag-${activeI}`}
            className="tv-fadein"
            style={{
              fontSize:      10,
              fontWeight:    600,
              letterSpacing: "0.12em",
              color:         "rgba(255,255,255,0.35)",
              marginBottom:  14,
              textTransform: "uppercase",
            }}
          >
            {view.tag}
          </p>
          <h2
            key={`title-${activeI}`}
            className="tv-fadein-d1"
            style={{
              fontSize:      "clamp(26px, 2.8vw, 48px)",
              fontWeight:    700,
              color:         "#f5f5f7",
              lineHeight:    1.1,
              letterSpacing: "-0.023em",
              marginBottom:  16,
            }}
          >
            {view.title}
          </h2>
          <p
            key={`desc-${activeI}`}
            className="tv-fadein-d2"
            style={{
              fontSize:   14,
              color:      "rgba(245,245,247,0.58)",
              lineHeight: 1.68,
            }}
          >
            {view.desc}
          </p>
        </div>

        {/* Dot nav */}
        <div style={{
          position:      "absolute",
          right:         "clamp(20px, 4.5vw, 64px)",
          top:           "50%",
          transform:     "translateY(-50%)",
          display:       "flex",
          flexDirection: "column",
          gap:           10,
          alignItems:    "center",
          zIndex:        2,
        }}>
          {views.map((_, i) => (
            <div
              key={i}
              style={{
                width:        4,
                height:       i === activeI ? 28 : 4,
                borderRadius: 3,
                background:   i === activeI ? "#f5f5f7" : "rgba(255,255,255,0.2)",
                transition:   "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{
          position:      "absolute",
          bottom:        38,
          left:          "50%",
          transform:     "translateX(-50%)",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           8,
          opacity:       Math.max(0, 1 - prog * 14),
          pointerEvents: "none",
          zIndex:        2,
        }}>
          <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.32)", letterSpacing: "0.14em" }}>
            SCROLL
          </span>
          <div
            className="tv-scroll-pulse"
            style={{
              width:      1,
              height:     38,
              background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
            }}
          />
        </div>

        {/* Progress bar */}
        <div style={{
          position:   "absolute",
          bottom:     0,
          left:       0,
          height:     2,
          width:      `${prog * 100}%`,
          background: "linear-gradient(to right, #60a5fa, #818cf8)",
          transition: "width 0.06s linear",
        }} />

      </div>
    </div>
  );
}

// ─── Section 2: Parallax presence ────────────────────────────────────────────

function ParallaxSection({
  views,
  parallaxTitle,
  parallaxSubtitle,
  parallaxDesc,
  price,
  href,
}: Pick<ProductShowcaseConfig, "views" | "parallaxTitle" | "parallaxSubtitle" | "parallaxDesc" | "price" | "href">) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);
  const imgY       = useParallaxY(imgRef, 0.18);
  const inView     = useInView(sectionRef, 0.1);

  return (
    <div
      ref={sectionRef}
      style={{
        background:     "#f5f5f7",
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        position:       "relative",
        overflow:       "hidden",
        padding:        "96px 40px",
      }}
    >
      {/* Orbs */}
      <div style={{
        position:      "absolute",
        width:          680, height: 680,
        borderRadius:  "50%",
        background:    "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)",
        top:  "4%", left: "6%", pointerEvents: "none",
      }} />
      <div style={{
        position:      "absolute",
        width:          500, height: 500,
        borderRadius:  "50%",
        background:    "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
        bottom: "8%", right: "8%", pointerEvents: "none",
      }} />

      {/* Headline */}
      <h2 style={{
        fontSize:      "clamp(40px, 6vw, 88px)",
        fontWeight:    700,
        letterSpacing: "-0.032em",
        color:         "#1d1d1f",
        textAlign:     "center",
        lineHeight:    1.06,
        marginBottom:  14,
        position:      "relative",
        zIndex:        2,
        opacity:       inView ? 1 : 0,
        transform:     inView ? "translateY(0)" : "translateY(22px)",
        transition:    "opacity 0.85s ease, transform 0.85s ease",
      }}>
        {parallaxTitle}
        <br />
        <span style={{ color: "#6e6e73", fontWeight: 400 }}>{parallaxSubtitle}</span>
      </h2>

      {parallaxDesc && (
        <p style={{
          fontSize:      16,
          color:         "#6e6e73",
          textAlign:     "center",
          marginBottom:  60,
          position:      "relative",
          zIndex:        2,
          opacity:       inView ? 1 : 0,
          transition:    "opacity 0.8s ease 0.18s",
        }}>
          {parallaxDesc}
        </p>
      )}

      {/* Parallax image */}
      <div
        ref={imgRef}
        style={{
          position:   "relative",
          width:      "min(780px, 80vw)",
          height:     "min(488px, 50vw)",
          transform:  `translateY(${imgY}px)`,
          filter:     "drop-shadow(0 52px 90px rgba(0,0,0,0.14)) drop-shadow(0 14px 32px rgba(0,0,0,0.09))",
          zIndex:     2,
          opacity:    inView ? 1 : 0,
          transition: "opacity 0.95s ease 0.22s",
          marginTop:  parallaxDesc ? 0 : 60,
        }}
      >
        <Image
          src={views[0].src}
          alt={parallaxTitle}
          fill
          style={{ objectFit: "contain" }}
          sizes="80vw"
        />
      </div>

      {/* Price + CTA */}
      <div style={{
        position:   "relative",
        zIndex:     2,
        marginTop:  56,
        display:    "flex",
        alignItems: "center",
        gap:        24,
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.72s ease 0.42s, transform 0.72s ease 0.42s",
      }}>
        <div>
          <p style={{ fontSize: 12, color: "#aeaeb2", marginBottom: 3, letterSpacing: "0.03em" }}>From</p>
          <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.026em", color: "#1d1d1f" }}>
            {price}
          </p>
        </div>
        <Link href={href} style={{
          padding:        "13px 30px",
          background:     "#0071e3",
          color:          "#fff",
          borderRadius:   "50px",
          fontSize:       15,
          fontWeight:     500,
          textDecoration: "none",
          letterSpacing:  "-0.01em",
        }}>
          Shop Now →
        </Link>
      </div>
    </div>
  );
}

// ─── Section 3: Feature callouts ─────────────────────────────────────────────

function FeaturesSection({
  views,
  featuresLeft,
  featuresRight,
  featuresHeading,
}: Pick<ProductShowcaseConfig, "views" | "featuresLeft" | "featuresRight" | "featuresHeading">) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <div
      ref={ref}
      style={{
        background:     "#08090e",
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "92px 40px",
        position:       "relative",
        overflow:       "hidden",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position:        "absolute",
        inset:           0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize:  "32px 32px",
        pointerEvents:   "none",
      }} />

      <p style={{
        fontSize:      10,
        fontWeight:    600,
        letterSpacing: "0.12em",
        color:         "rgba(255,255,255,0.3)",
        marginBottom:  10,
        textTransform: "uppercase",
        position:      "relative",
        zIndex:        2,
        opacity:       inView ? 1 : 0,
        transition:    "opacity 0.6s ease",
      }}>
        Engineered to Impress
      </p>

      <h2 style={{
        fontSize:      "clamp(26px, 3.2vw, 52px)",
        fontWeight:    700,
        color:         "#f5f5f7",
        letterSpacing: "-0.022em",
        textAlign:     "center",
        lineHeight:    1.1,
        marginBottom:  72,
        position:      "relative",
        zIndex:        2,
        opacity:       inView ? 1 : 0,
        transform:     inView ? "translateY(0)" : "translateY(16px)",
        transition:    "opacity 0.7s ease 0.09s, transform 0.7s ease 0.09s",
      }}>
        {featuresHeading ?? "Every feature, thoughtfully placed."}
      </h2>

      <div style={{
        display:             "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap:                 "0 clamp(24px, 4vw, 64px)",
        alignItems:          "center",
        width:               "100%",
        maxWidth:            1140,
        position:            "relative",
        zIndex:              2,
      }}>

        {/* Left features */}
        <div style={{ display: "flex", flexDirection: "column", gap: 52, alignItems: "flex-end" }}>
          {featuresLeft.map((f, i) => (
            <div
              key={f.label}
              style={{
                textAlign:  "right",
                opacity:    inView ? 1 : 0,
                transform:  inView ? "translateX(0)" : "translateX(-52px)",
                transition: `opacity 0.65s ease ${0.18 + i * 0.2}s, transform 0.65s ease ${0.18 + i * 0.2}s`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10, marginBottom: 5 }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#f5f5f7", margin: 0 }}>{f.label}</p>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", flexShrink: 0 }} />
              </div>
              <p style={{ fontSize: 12, color: "rgba(245,245,247,0.42)", margin: 0 }}>{f.sub}</p>
            </div>
          ))}
        </div>

        {/* Centre TV */}
        <div style={{
          position:   "relative",
          width:      "min(480px, 36vw)",
          height:     "min(300px, 22.5vw)",
          opacity:    inView ? 1 : 0,
          transform:  inView ? "scale(1)" : "scale(0.92)",
          transition: "opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s",
          filter:     "drop-shadow(0 0 64px rgba(96,165,250,0.15))",
        }}>
          <Image
            src={views[0].src}
            alt="Feature callout view"
            fill
            style={{ objectFit: "contain" }}
            sizes="36vw"
          />
        </div>

        {/* Right features */}
        <div style={{ display: "flex", flexDirection: "column", gap: 52, alignItems: "flex-start" }}>
          {featuresRight.map((f, i) => (
            <div
              key={f.label}
              style={{
                opacity:    inView ? 1 : 0,
                transform:  inView ? "translateX(0)" : "translateX(52px)",
                transition: `opacity 0.65s ease ${0.22 + i * 0.2}s, transform 0.65s ease ${0.22 + i * 0.2}s`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8", flexShrink: 0 }} />
                <p style={{ fontSize: 15, fontWeight: 600, color: "#f5f5f7", margin: 0 }}>{f.label}</p>
              </div>
              <p style={{ fontSize: 12, color: "rgba(245,245,247,0.42)", margin: 0, paddingLeft: 16 }}>{f.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// ─── Section 4: Specs entrance ────────────────────────────────────────────────

function SpecsSection({
  views,
  specs,
  specsHeading,
  name,
  price,
  href,
  enquireHref,
}: Pick<ProductShowcaseConfig, "views" | "specs" | "specsHeading" | "name" | "price" | "href" | "enquireHref">) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <div
      ref={ref}
      style={{
        background:     "#ffffff",
        minHeight:      "100vh",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "80px 40px",
        overflow:       "hidden",
      }}
    >
      <div style={{
        display:             "grid",
        gridTemplateColumns: "1fr 1fr",
        gap:                 "clamp(48px, 7vw, 96px)",
        alignItems:          "center",
        maxWidth:            1120,
        width:               "100%",
      }}>

        {/* Left: image + CTA */}
        <div>
          <div style={{
            opacity:    inView ? 1 : 0,
            transform:  inView ? "translateX(0)" : "translateX(-60px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "63%" }}>
              <Image
                src={views[0].src}
                alt={name}
                fill
                style={{ objectFit: "contain" }}
                sizes="50vw"
              />
            </div>
          </div>

          <div style={{
            marginTop:  30,
            opacity:    inView ? 1 : 0,
            transform:  inView ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.72s ease 0.3s, transform 0.72s ease 0.3s",
          }}>
            <p style={{ fontSize: 12, color: "#aeaeb2", marginBottom: 4, letterSpacing: "0.03em" }}>
              {name}
            </p>
            <p style={{
              fontSize:      36,
              fontWeight:    700,
              letterSpacing: "-0.027em",
              color:         "#1d1d1f",
              marginBottom:  22,
            }}>
              {price}
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <Link href={href} style={{
                padding:        "11px 26px",
                background:     "#0071e3",
                color:          "#fff",
                borderRadius:   "50px",
                fontSize:       14,
                fontWeight:     500,
                textDecoration: "none",
                letterSpacing:  "-0.01em",
              }}>
                Shop Now
              </Link>
              <Link href={enquireHref ?? "/contact"} style={{
                padding:        "10px 26px",
                border:         "1.5px solid #0071e3",
                color:          "#0071e3",
                borderRadius:   "50px",
                fontSize:       14,
                fontWeight:     500,
                textDecoration: "none",
                letterSpacing:  "-0.01em",
              }}>
                Enquire
              </Link>
            </div>
          </div>
        </div>

        {/* Right: specs */}
        <div>
          <p style={{
            fontSize:      10,
            fontWeight:    600,
            letterSpacing: "0.12em",
            color:         "#aeaeb2",
            marginBottom:  8,
            textTransform: "uppercase",
            opacity:       inView ? 1 : 0,
            transition:    "opacity 0.6s ease 0.12s",
          }}>
            Specifications
          </p>
          <h2 style={{
            fontSize:      "clamp(24px, 2.6vw, 44px)",
            fontWeight:    700,
            letterSpacing: "-0.022em",
            color:         "#1d1d1f",
            marginBottom:  40,
            lineHeight:    1.16,
            opacity:       inView ? 1 : 0,
            transform:     inView ? "translateY(0)" : "translateY(14px)",
            transition:    "opacity 0.65s ease 0.18s, transform 0.65s ease 0.18s",
          }}>
            {specsHeading ?? "Numbers that matter."}
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {specs.map(([label, value], i) => (
              <div
                key={label}
                style={{
                  display:        "flex",
                  justifyContent: "space-between",
                  alignItems:     "center",
                  padding:        "13px 0",
                  borderBottom:   "1px solid rgba(0,0,0,0.07)",
                  gap:            16,
                  opacity:        inView ? 1 : 0,
                  transform:      inView ? "translateX(0)" : "translateX(36px)",
                  transition:     `opacity 0.55s ease ${0.22 + i * 0.07}s, transform 0.55s ease ${0.22 + i * 0.07}s`,
                }}
              >
                <span style={{ fontSize: 13, color: "#6e6e73", fontWeight: 500, flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 13.5, color: "#1d1d1f", fontWeight: 600, textAlign: "right" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/** Which sections to render. Defaults to all four. */
export type ShowcaseSection = "angles" | "parallax" | "features" | "specs";

export default function ProductShowcase({
  config,
  sections = ["angles", "parallax", "features", "specs"],
}: {
  config:     ProductShowcaseConfig;
  sections?:  ShowcaseSection[];
}) {
  const { views, featuresLeft, featuresRight, featuresHeading,
          specs, specsHeading, name, price, href, enquireHref,
          parallaxTitle, parallaxSubtitle, parallaxDesc } = config;

  const show = (s: ShowcaseSection) => sections.includes(s);

  return (
    <>
      {show("angles")   && <StickyAnglesSection views={views} />}
      {show("parallax") && (
        <ParallaxSection
          views={views}
          parallaxTitle={parallaxTitle}
          parallaxSubtitle={parallaxSubtitle}
          parallaxDesc={parallaxDesc}
          price={price}
          href={href}
        />
      )}
      {show("features") && (
        <FeaturesSection
          views={views}
          featuresLeft={featuresLeft}
          featuresRight={featuresRight}
          featuresHeading={featuresHeading}
        />
      )}
      {show("specs")    && (
        <SpecsSection
          views={views}
          specs={specs}
          specsHeading={specsHeading}
          name={name}
          price={price}
          href={href}
          enquireHref={enquireHref}
        />
      )}
    </>
  );
}

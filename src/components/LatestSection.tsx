"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

// ── SVG illustrations ──────────────────────────────────────────────────────────

function HeroTV() {
  return (
    <svg viewBox="0 0 360 240" width="340" height="227" fill="none">
      <rect x="20" y="10" width="320" height="196" rx="10" fill="#111" />
      <rect x="30" y="20" width="300" height="176" rx="6" fill="#1a1a1a" />
      <rect x="36" y="26" width="288" height="164" rx="4" fill="#222" />
      <defs>
        <radialGradient id="tvglow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#C8A951" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#111" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="36" y="26" width="288" height="164" rx="4" fill="url(#tvglow)" />
      <rect x="158" y="208" width="44" height="16" rx="3" fill="#1c1c1e" />
      <rect x="130" y="224" width="100" height="7" rx="3.5" fill="#1c1c1e" />
    </svg>
  );
}

function TV43() {
  return (
    <svg viewBox="0 0 240 160" width="260" height="173" fill="none">
      <rect x="10" y="8" width="220" height="132" rx="7" fill="#1d1d1f" />
      <rect x="18" y="16" width="204" height="116" rx="4" fill="#2c2c2e" />
      <rect x="24" y="22" width="192" height="104" rx="3" fill="#3a3a3c" opacity="0.5" />
      <rect x="98" y="142" width="44" height="10" rx="2" fill="#6e6e73" />
      <rect x="82" y="152" width="76" height="5" rx="2.5" fill="#6e6e73" />
    </svg>
  );
}

function FrontLoadWM() {
  return (
    <svg viewBox="0 0 160 200" width="180" height="225" fill="none">
      <rect x="8" y="8" width="144" height="184" rx="12" fill="#ececec" />
      <rect x="16" y="16" width="128" height="168" rx="8" fill="#e2e2e7" />
      <rect x="26" y="26" width="56" height="10" rx="5" fill="#c7c7cc" />
      <circle cx="122" cy="31" r="7" fill="#c7c7cc" />
      <circle cx="80" cy="112" r="48" fill="#d1d1d6" />
      <circle cx="80" cy="112" r="40" fill="#aeaeb2" />
      <circle cx="80" cy="112" r="28" fill="#8e8e93" />
      <circle cx="80" cy="112" r="16" fill="#636366" />
      <circle cx="73" cy="105" r="5" fill="#48484a" opacity="0.5" />
      <rect x="26" y="168" width="108" height="8" rx="4" fill="#c7c7cc" />
    </svg>
  );
}

function DesertCooler() {
  return (
    <svg viewBox="0 0 180 200" width="200" height="222" fill="none">
      <rect x="16" y="16" width="148" height="168" rx="12" fill="#dbeafe" />
      <rect x="26" y="26" width="128" height="118" rx="8" fill="#bfdbfe" />
      {[0,1,2,3,4].map((i) => (
        <rect key={i} x="34" y={36 + i * 22} width="112" height="11" rx="5.5" fill="#93c5fd" />
      ))}
      <rect x="16" y="184" width="148" height="8" rx="4" fill="#93c5fd" />
      <circle cx="90" cy="164" r="16" fill="#60a5fa" />
      <circle cx="90" cy="164" r="8" fill="#3b82f6" />
    </svg>
  );
}

function DoubleBurner() {
  return (
    <svg viewBox="0 0 240 150" width="280" height="175" fill="none">
      <rect x="10" y="18" width="220" height="114" rx="14" fill="#1c1c1e" />
      <rect x="20" y="28" width="200" height="94" rx="9" fill="#2c2c2e" />
      <circle cx="80" cy="75" r="30" fill="none" stroke="#ff6b35" strokeWidth="4.5" />
      <circle cx="80" cy="75" r="20" fill="none" stroke="#ff9a5c" strokeWidth="3" />
      <circle cx="80" cy="75" r="8" fill="#ff6b35" />
      <circle cx="162" cy="75" r="30" fill="none" stroke="#ff6b35" strokeWidth="4.5" />
      <circle cx="162" cy="75" r="20" fill="none" stroke="#ff9a5c" strokeWidth="3" />
      <circle cx="162" cy="75" r="8" fill="#ff6b35" />
    </svg>
  );
}

function TowerCooler() {
  return (
    <svg viewBox="0 0 110 210" width="120" height="229" fill="none">
      <rect x="15" y="10" width="80" height="188" rx="20" fill="#dbeafe" />
      <rect x="25" y="20" width="60" height="140" rx="12" fill="#bfdbfe" />
      {[0,1,2,3,4,5].map((i) => (
        <rect key={i} x="31" y={28 + i * 22} width="48" height="10" rx="5" fill="#93c5fd" />
      ))}
      <circle cx="55" cy="180" r="16" fill="#60a5fa" />
      <circle cx="55" cy="180" r="8" fill="#3b82f6" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

type Product = {
  category: string;
  label:    string;
  tagline:  string;
  price:    string;
  href:     string;
  image:    ReactNode;
  imageBg:  string;
};

const PRODUCTS: Product[] = [
  {
    category: "LED TV",
    label:    'EG Galaxy Pro 65"',
    tagline:  "The ultimate home cinema experience.",
    price:    "From ₹89,990",
    href:     "/products/led-tvs",
    image:    <HeroTV />,
    imageBg:  "#111",
  },
  {
    category: "LED TV",
    label:    '43" Smart LED TV',
    tagline:  "Brilliant colour. Smart features.",
    price:    "From ₹32,990",
    href:     "/products/led-tvs",
    image:    <TV43 />,
    imageBg:  "#1d1d1f",
  },
  {
    category: "Washing Machine",
    label:    "WashPro Front Load",
    tagline:  "Gentle on clothes. Tough on stains.",
    price:    "From ₹38,490",
    href:     "/products/washing-machines",
    image:    <FrontLoadWM />,
    imageBg:  "#f0f4ff",
  },
  {
    category: "Air Cooler",
    label:    "CoolBreeze Desert 50L",
    tagline:  "Beat the heat all summer long.",
    price:    "From ₹12,990",
    href:     "/products/air-coolers",
    image:    <DesertCooler />,
    imageBg:  "#eff6ff",
  },
  {
    category: "Infrared Cooktop",
    label:    "InfraChef Double Burner",
    tagline:  "Precision heat. Zero emissions.",
    price:    "From ₹4,990",
    href:     "/products/infrared-cooktops",
    image:    <DoubleBurner />,
    imageBg:  "#1c1c1e",
  },
  {
    category: "Air Cooler",
    label:    "CoolTower Pro",
    tagline:  "360° airflow for every corner.",
    price:    "From ₹18,490",
    href:     "/products/air-coolers",
    image:    <TowerCooler />,
    imageBg:  "#e0f2fe",
  },
];

const INTERVAL = 5000;

// ── Component ──────────────────────────────────────────────────────────────────

export default function LatestSection() {
  const [active, setActive] = useState(0);

  const goTo = (i: number) => setActive(i);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % PRODUCTS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const p = PRODUCTS[active];

  return (
    <section style={{ background: "#fff", width: "100%" }}>
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 80, paddingBottom: 64 }}>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* ── Left: switching text ───────────────────────────────────── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <p
              key={`cat-${active}`}
              className="tv-fadein"
              style={{
                fontSize:      11,
                fontWeight:    700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         "#0071e3",
                marginBottom:  14,
              }}
            >
              {p.category}
            </p>
            <h2
              key={`label-${active}`}
              className="tv-fadein-d1"
              style={{
                fontSize:      "clamp(30px, 3.6vw, 52px)",
                fontWeight:    700,
                letterSpacing: "-0.028em",
                lineHeight:    1.08,
                color:         "#1d1d1f",
                marginBottom:  16,
              }}
            >
              {p.label}
            </h2>
            <p
              key={`tag-${active}`}
              className="tv-fadein-d2"
              style={{
                fontSize:      17,
                color:         "#6e6e73",
                lineHeight:    1.6,
                marginBottom:  28,
              }}
            >
              {p.tagline}
            </p>
            <div
              key={`cta-${active}`}
              className="tv-fadein-d2"
              style={{ display: "flex", alignItems: "center", gap: 20 }}
            >
              <Link
                href={p.href}
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  padding:        "12px 28px",
                  borderRadius:   "50px",
                  background:     "#0071e3",
                  color:          "#fff",
                  fontSize:       15,
                  fontWeight:     600,
                  textDecoration: "none",
                  letterSpacing:  "-0.01em",
                  whiteSpace:     "nowrap",
                }}
              >
                Shop Now
              </Link>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.01em" }}>
                {p.price}
              </span>
            </div>
          </div>

          {/* ── Right: switching image ─────────────────────────────────── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              position:     "relative",
              borderRadius: 24,
              overflow:     "hidden",
              height:       480,
              background:   p.imageBg,
              transition:   "background 0.5s ease",
            }}>
              {PRODUCTS.map((prod, i) => (
                <div
                  key={i}
                  style={{
                    position:       "absolute",
                    inset:          0,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    opacity:        i === active ? 1 : 0,
                    transform:      i === active ? "scale(1)" : "scale(0.96)",
                    transition:     "opacity 0.5s ease, transform 0.5s ease",
                    pointerEvents:  i === active ? "auto" : "none",
                  }}
                >
                  {prod.image}
                </div>
              ))}

              {/* Dot nav */}
              <div style={{
                position:       "absolute",
                bottom:         20,
                left:           "50%",
                transform:      "translateX(-50%)",
                display:        "flex",
                gap:            7,
                alignItems:     "center",
              }}>
                {PRODUCTS.map((_, i) => {
                  const isDarkBg = PRODUCTS[active].imageBg.startsWith("#1") || PRODUCTS[active].imageBg === "#111";
                  return (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to product ${i + 1}`}
                      style={{
                        width:        i === active ? 28 : 7,
                        height:       7,
                        borderRadius: 4,
                        background:   i === active
                          ? (isDarkBg ? "#f5f5f7" : "#1d1d1f")
                          : (isDarkBg ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.18)"),
                        border:       "none",
                        cursor:       "pointer",
                        padding:      0,
                        transition:   "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

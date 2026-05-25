"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode, MouseEvent, CSSProperties } from "react";

// ── SVG product illustrations ──────────────────────────────────────────────────

function HeroTV() {
  return (
    <svg viewBox="0 0 360 240" width="360" height="240" fill="none">
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
    <svg viewBox="0 0 240 160" width="224" height="150" fill="none">
      <rect x="10" y="8" width="220" height="132" rx="7" fill="#1d1d1f" />
      <rect x="18" y="16" width="204" height="116" rx="4" fill="#2c2c2e" />
      <rect x="24" y="22" width="192" height="104" rx="3" fill="#3a3a3c" opacity="0.5" />
      <rect x="98" y="142" width="44" height="10" rx="2" fill="#6e6e73" />
      <rect x="82" y="152" width="76" height="5" rx="2.5" fill="#6e6e73" />
    </svg>
  );
}
function TV32() {
  return (
    <svg viewBox="0 0 200 140" width="190" height="133" fill="none">
      <rect x="8" y="6" width="184" height="112" rx="6" fill="#1d1d1f" />
      <rect x="16" y="14" width="168" height="96" rx="4" fill="#2c2c2e" />
      <rect x="22" y="20" width="156" height="84" rx="3" fill="#3a3a3c" opacity="0.5" />
      <rect x="82" y="120" width="36" height="8" rx="2" fill="#6e6e73" />
      <rect x="68" y="128" width="64" height="4" rx="2" fill="#6e6e73" />
    </svg>
  );
}
function TV55() {
  return (
    <svg viewBox="0 0 290 185" width="270" height="172" fill="none">
      <rect x="12" y="8" width="266" height="162" rx="8" fill="#1d1d1f" />
      <rect x="20" y="16" width="250" height="146" rx="5" fill="#2c2c2e" />
      <rect x="26" y="22" width="238" height="134" rx="4" fill="#3a3a3c" opacity="0.5" />
      <rect x="125" y="172" width="40" height="10" rx="2" fill="#6e6e73" />
      <rect x="108" y="182" width="74" height="5" rx="2.5" fill="#6e6e73" />
    </svg>
  );
}
function FrontLoadWM() {
  return (
    <svg viewBox="0 0 160 200" width="150" height="188" fill="none">
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
function TopLoadWM() {
  return (
    <svg viewBox="0 0 160 200" width="150" height="188" fill="none">
      <rect x="8" y="36" width="144" height="156" rx="12" fill="#ececec" />
      <rect x="16" y="44" width="128" height="140" rx="8" fill="#e2e2e7" />
      <rect x="8" y="10" width="144" height="34" rx="12" fill="#e2e2e7" />
      <rect x="38" y="20" width="84" height="14" rx="7" fill="#d1d1d6" />
      <rect x="26" y="62" width="108" height="88" rx="54" fill="#d1d1d6" />
      <circle cx="80" cy="106" r="32" fill="#aeaeb2" />
      <circle cx="80" cy="106" r="18" fill="#8e8e93" />
      <circle cx="80" cy="106" r="8" fill="#636366" />
    </svg>
  );
}
function DesertCooler() {
  return (
    <svg viewBox="0 0 180 200" width="168" height="187" fill="none">
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
function TowerCooler() {
  return (
    <svg viewBox="0 0 110 210" width="100" height="191" fill="none">
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
function DoubleBurner() {
  return (
    <svg viewBox="0 0 240 150" width="224" height="140" fill="none">
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
function SingleBurner() {
  return (
    <svg viewBox="0 0 190 130" width="176" height="121" fill="none">
      <rect x="10" y="16" width="170" height="98" rx="14" fill="#1c1c1e" />
      <rect x="20" y="26" width="150" height="78" rx="9" fill="#2c2c2e" />
      <circle cx="95" cy="65" r="30" fill="none" stroke="#ff6b35" strokeWidth="4.5" />
      <circle cx="95" cy="65" r="20" fill="none" stroke="#ff9a5c" strokeWidth="3" />
      <circle cx="95" cy="65" r="8" fill="#ff6b35" />
    </svg>
  );
}

// ── Types & data ───────────────────────────────────────────────────────────────

type Card = {
  type:    "featured" | "new";
  label:   string;
  tagline: string;
  price:   string;
  href:    string;
  image:   ReactNode;
};

const CARDS: Card[] = [
  { type:"featured", label:'EG Galaxy Pro 65"',       tagline:"The ultimate home cinema experience.", price:"From ₹89,990",  href:"/products/led-tvs/65-inch",                    image:<HeroTV />      },
  { type:"new",      label:'43" Smart LED TV',         tagline:"Brilliant colour. Smart features.",    price:"From ₹32,990",  href:"/products/led-tvs/43-inch",                    image:<TV43 />        },
  { type:"new",      label:"WashPro Front Load",       tagline:"Gentle on clothes. Tough on stains.",  price:"From ₹38,490",  href:"/products/washing-machines/front-load",         image:<FrontLoadWM /> },
  { type:"new",      label:"CoolBreeze Desert 50L",    tagline:"Beat the heat all summer long.",        price:"From ₹12,990",  href:"/products/air-coolers/desert",                  image:<DesertCooler />},
  { type:"new",      label:"InfraChef Double Burner",  tagline:"Precision heat. Zero emissions.",       price:"From ₹4,990",   href:"/products/infrared-cooktops/double-burner",     image:<DoubleBurner />},
  { type:"new",      label:'32" HD LED TV',            tagline:"Crystal clear. Every room.",            price:"From ₹14,990",  href:"/products/led-tvs/32-inch",                    image:<TV32 />        },
  { type:"new",      label:"WashPro Top Load",         tagline:"More capacity. More convenience.",      price:"From ₹22,990",  href:"/products/washing-machines/top-load",           image:<TopLoadWM />   },
  { type:"new",      label:"CoolTower Pro",            tagline:"360° airflow for every corner.",        price:"From ₹18,490",  href:"/products/air-coolers/tower",                   image:<TowerCooler /> },
  { type:"new",      label:"InfraChef Single Burner",  tagline:"Compact. Powerful. Efficient.",         price:"From ₹2,990",   href:"/products/infrared-cooktops/single-burner",     image:<SingleBurner />},
  { type:"new",      label:'55" 4K LED TV',            tagline:"Stunning 4K. Cinematic sound.",         price:"From ₹54,990",  href:"/products/led-tvs/55-inch",                    image:<TV55 />        },
];

// Duplicate for seamless loop
const LOOPED = [...CARDS, ...CARDS];

// ── 3D tilt card ───────────────────────────────────────────────────────────────

function TiltCard({
  href,
  children,
  style,
}: {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number | null>(null);

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el   = cardRef.current;
      const gl   = glossRef.current;
      if (!el || !gl) return;
      const rect = el.getBoundingClientRect();
      const x    = (e.clientX - rect.left) / rect.width;   // 0→1
      const y    = (e.clientY - rect.top)  / rect.height;  // 0→1
      const rx   = -(y - 0.5) * 14;   // tilt up/down  ±7°
      const ry   =  (x - 0.5) * 14;   // tilt left/right ±7°
      el.style.transform  = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-16px) scale(1.02)`;
      el.style.boxShadow  = "0 32px 64px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12)";
      gl.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(255,255,255,0.22) 0%, transparent 58%)`;
      gl.style.opacity    = "1";
    });
  };

  const onMouseEnter = () => {
    const el = cardRef.current;
    if (el) el.style.transition = "transform 0.1s ease-out, box-shadow 0.1s ease-out";
  };

  const onMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const el = cardRef.current;
    const gl = glossRef.current;
    if (el) {
      el.style.transition = "transform 0.65s cubic-bezier(0.23,1,0.32,1), box-shadow 0.65s ease";
      el.style.transform  = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
      el.style.boxShadow  = "0 2px 12px rgba(0,0,0,0.08)";
    }
    if (gl) gl.style.opacity = "0";
  };

  return (
    <Link
      ref={cardRef}
      href={href}
      className="relative flex-shrink-0 overflow-hidden rounded-[20px]"
      style={{
        willChange: "transform",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        ...style,
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {/* Gloss reflection — updated directly via ref, zero React re-renders */}
      <div
        ref={glossRef}
        className="absolute inset-0 pointer-events-none rounded-[20px]"
        style={{ opacity: 0, transition: "opacity 0.35s ease" }}
      />
    </Link>
  );
}

// ── Card layouts ───────────────────────────────────────────────────────────────

function FeaturedCard({ card }: { card: Card }) {
  return (
    <TiltCard href={card.href} style={{ minWidth: 440, height: 500, background: "#1d1d1f" }}>
      <div className="absolute top-8 left-8 right-8 z-10">
        <p className="text-white font-semibold leading-tight mb-2"
           style={{ fontSize: 26, letterSpacing: "-0.02em" }}>
          {card.label}
        </p>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)" }} className="mb-1">
          {card.tagline}
        </p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.50)" }}>
          {card.price}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-6">
        {card.image}
      </div>
    </TiltCard>
  );
}

function NewCard({ card }: { card: Card }) {
  return (
    <TiltCard href={card.href} style={{ minWidth: 340, height: 500, background: "#fff" }}>
      <div className="px-8 pt-8 pb-4">
        <p className="mb-3 font-semibold" style={{ fontSize: 11, letterSpacing: "0.09em", color: "#ff6b00" }}>
          NEW
        </p>
        <p className="text-[#1d1d1f] font-semibold leading-tight mb-2"
           style={{ fontSize: 22, letterSpacing: "-0.02em" }}>
          {card.label}
        </p>
        <p style={{ fontSize: 14, color: "rgba(29,29,31,0.75)" }} className="mb-1">
          {card.tagline}
        </p>
        <p style={{ fontSize: 13, color: "rgba(29,29,31,0.50)" }}>
          {card.price}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8 px-6">
        {card.image}
      </div>
    </TiltCard>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function LatestSection() {
  const scrollRef  = useRef<HTMLDivElement>(null);

  // ── Infinite loop: when we've scrolled past the first clone set, snap back ──
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const half = el.scrollWidth / 2;
      // Forward wrap
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      // Backward wrap (shouldn't normally occur, but just in case)
      if (el.scrollLeft <= 0 && half > 0) {
        // already at start — nothing to do
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollRight = () => scrollRef.current?.scrollBy({ left:  370, behavior: "smooth" });
  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -370, behavior: "smooth" });

  return (
    <section className="w-full pb-16">

      {/* Heading stays inside the content grid */}
      <div className="mx-auto max-w-[1440px] px-8 mb-7">
        <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span className="text-[#1d1d1f]">The latest.&nbsp;</span>
          <span className="text-[#6e6e73]">Take a look at what&apos;s new right now.</span>
        </h2>
      </div>

      {/* Full-width carousel */}
      <div className="relative w-full">
        {/* Cards track
            Left padding aligns the first card with the heading on every screen width.
            calc(max((100vw - 1440px) / 2, 0px) + 2rem) = auto margin + px-8
            paddingTop/Bottom give raised cards and shadows room inside the clip zone. */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto"
          style={{
            scrollbarWidth:    "none",
            msOverflowStyle:   "none",
            paddingLeft:       "calc(max((100vw - 1440px) / 2, 0px) + 2rem)",
            paddingRight:      "2rem",
            paddingTop:        "24px",
            paddingBottom:     "52px",
            marginTop:         "-24px",
            marginBottom:      "-52px",
          }}
        >
          {LOOPED.map((card, i) =>
            card.type === "featured"
              ? <FeaturedCard key={i} card={card} />
              : <NewCard      key={i} card={card} />
          )}
        </div>

        {/* Left arrow — sits in the left gutter */}
        <button
          onClick={scrollLeft}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full flex items-center justify-center
                     bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                     transition-colors duration-150 shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* Right arrow — sits in the right gutter */}
        <button
          onClick={scrollRight}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full flex items-center justify-center
                     bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                     transition-colors duration-150 shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>

    </section>
  );
}

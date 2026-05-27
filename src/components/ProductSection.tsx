"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { ReactNode } from "react";

// ── Product SVG illustrations ──────────────────────────────────────────────────

function TV55() {
  return (
    <svg viewBox="0 0 220 160" width="176" height="128" fill="none">
      <rect x="10" y="6" width="200" height="120" rx="8" fill="#1d1d1f" />
      <rect x="18" y="14" width="184" height="104" rx="4" fill="#2c2c2e" />
      <rect x="23" y="19" width="174" height="94" rx="3" fill="#3a3a3c" opacity=".65" />
      <rect x="98" y="126" width="24" height="14" rx="2" fill="#6e6e73" />
      <rect x="76" y="140" width="68" height="6" rx="3" fill="#6e6e73" />
    </svg>
  );
}
function TV43() {
  return (
    <svg viewBox="0 0 180 136" width="160" height="120" fill="none">
      <rect x="8" y="5" width="164" height="100" rx="7" fill="#1d1d1f" />
      <rect x="15" y="12" width="150" height="86" rx="4" fill="#2c2c2e" />
      <rect x="19" y="16" width="142" height="78" rx="3" fill="#3a3a3c" opacity=".6" />
      <rect x="80" y="105" width="20" height="12" rx="2" fill="#6e6e73" />
      <rect x="62" y="117" width="56" height="5" rx="2.5" fill="#6e6e73" />
    </svg>
  );
}
function FrontLoader() {
  return (
    <svg viewBox="0 0 140 180" width="112" height="144" fill="none">
      <rect x="8" y="8" width="124" height="164" rx="10" fill="#e5e5ea" />
      <rect x="14" y="14" width="112" height="152" rx="8" fill="#d1d1d6" />
      <rect x="22" y="22" width="48" height="8" rx="4" fill="#aeaeb2" />
      <circle cx="104" cy="26" r="6" fill="#aeaeb2" />
      <circle cx="118" cy="26" r="6" fill="#aeaeb2" />
      <circle cx="70" cy="104" r="44" fill="#8e8e93" />
      <circle cx="70" cy="104" r="36" fill="#636366" />
      <circle cx="70" cy="104" r="26" fill="#48484a" />
      <circle cx="70" cy="104" r="18" fill="#2c2c2e" />
      <circle cx="63" cy="97" r="5" fill="#3a3a3c" opacity=".8" />
    </svg>
  );
}
function TopLoader() {
  return (
    <svg viewBox="0 0 140 180" width="112" height="144" fill="none">
      <rect x="8" y="8" width="124" height="164" rx="10" fill="#e5e5ea" />
      <rect x="14" y="14" width="112" height="152" rx="8" fill="#d1d1d6" />
      <rect x="22" y="22" width="96" height="28" rx="6" fill="#c7c7cc" />
      <rect x="30" y="30" width="40" height="12" rx="4" fill="#aeaeb2" />
      <circle cx="104" cy="36" r="8" fill="#aeaeb2" />
      <rect x="22" y="62" width="96" height="90" rx="6" fill="#aeaeb2" />
      <circle cx="70" cy="107" r="36" fill="#8e8e93" />
      <circle cx="70" cy="107" r="24" fill="#636366" />
    </svg>
  );
}
function TowerCooler() {
  return (
    <svg viewBox="0 0 100 200" width="80" height="160" fill="none">
      <rect x="18" y="8" width="64" height="168" rx="16" fill="#dbeafe" />
      <rect x="26" y="16" width="48" height="116" rx="10" fill="#bfdbfe" />
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x="32" y={26 + i*18} width="36" height="7" rx="3.5" fill="#93c5fd" />
      ))}
      <circle cx="50" cy="155" r="16" fill="#93c5fd" />
      <circle cx="50" cy="155" r="9" fill="#60a5fa" />
      <circle cx="50" cy="155" r="3.5" fill="#3b82f6" />
      <rect x="20" y="173" width="60" height="8" rx="4" fill="#93c5fd" />
    </svg>
  );
}
function DesertCooler() {
  return (
    <svg viewBox="0 0 160 160" width="140" height="140" fill="none">
      <rect x="10" y="30" width="140" height="110" rx="10" fill="#dbeafe" />
      <rect x="18" y="38" width="70" height="94" rx="6" fill="#bfdbfe" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="24" y={46 + i*17} width="58" height="8" rx="4" fill="#93c5fd" />
      ))}
      <circle cx="118" cy="85" r="34" fill="#93c5fd" />
      <circle cx="118" cy="85" r="22" fill="#60a5fa" />
      <circle cx="118" cy="85" r="10" fill="#3b82f6" />
      <rect x="10" y="140" width="140" height="10" rx="5" fill="#bfdbfe" />
      <rect x="30" y="8" width="20" height="22" rx="3" fill="#93c5fd" />
      <rect x="110" y="8" width="20" height="22" rx="3" fill="#93c5fd" />
    </svg>
  );
}
function Cooktop2() {
  return (
    <svg viewBox="0 0 200 120" width="180" height="108" fill="none">
      <rect x="10" y="14" width="180" height="92" rx="10" fill="#1c1c1e" />
      <rect x="18" y="22" width="164" height="76" rx="6" fill="#2c2c2e" />
      <circle cx="74" cy="60" r="24" fill="none" stroke="#ff6b35" strokeWidth="3" />
      <circle cx="74" cy="60" r="14" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="74" cy="60" r="5" fill="#ff6b35" />
      <circle cx="134" cy="60" r="24" fill="none" stroke="#ff6b35" strokeWidth="3" />
      <circle cx="134" cy="60" r="14" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="134" cy="60" r="5" fill="#ff6b35" />
    </svg>
  );
}
function Cooktop4() {
  return (
    <svg viewBox="0 0 260 140" width="220" height="118" fill="none">
      <rect x="8" y="12" width="244" height="116" rx="10" fill="#1c1c1e" />
      <rect x="16" y="20" width="228" height="100" rx="6" fill="#2c2c2e" />
      <circle cx="66" cy="56" r="20" fill="none" stroke="#ff6b35" strokeWidth="2.5" />
      <circle cx="66" cy="56" r="11" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="66" cy="56" r="4" fill="#ff6b35" />
      <circle cx="130" cy="56" r="20" fill="none" stroke="#ff6b35" strokeWidth="2.5" />
      <circle cx="130" cy="56" r="11" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="130" cy="56" r="4" fill="#ff6b35" />
      <circle cx="66" cy="100" r="20" fill="none" stroke="#ff6b35" strokeWidth="2.5" />
      <circle cx="66" cy="100" r="11" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="66" cy="100" r="4" fill="#ff6b35" />
      <circle cx="130" cy="100" r="20" fill="none" stroke="#ff6b35" strokeWidth="2.5" />
      <circle cx="130" cy="100" r="11" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="130" cy="100" r="4" fill="#ff6b35" />
      <circle cx="200" cy="78" r="28" fill="none" stroke="#ff6b35" strokeWidth="3" />
      <circle cx="200" cy="78" r="16" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="200" cy="78" r="6" fill="#ff6b35" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

type Slide = { bg: string; node: ReactNode };
type Product = {
  id:       string;
  name:     string;
  subtitle: string;
  price:    string;
  slides:   Slide[];
  href:     string;
  badge?:   string;
};

const PRODUCTS: Product[] = [
  {
    id: "tv-55",
    name: "Elegant 55\" 4K QLED TV",
    subtitle: "LED TVs · 55 INCH",
    price: "₹49,999",
    badge: "NEW",
    href: "/products/led-tvs",
    slides: [
      { bg: "#1a1a1a", node: <TV55 /> },
      { bg: "#0a1628", node: <TV55 /> },
      { bg: "#1a0a0a", node: <TV55 /> },
    ],
  },
  {
    id: "tv-43",
    name: "Elegant 43\" Full HD Smart TV",
    subtitle: "LED TVs · 43 INCH",
    price: "₹27,999",
    href: "/products/led-tvs",
    slides: [
      { bg: "#1d1d1f", node: <TV43 /> },
      { bg: "#0f172a", node: <TV43 /> },
      { bg: "#18181b", node: <TV43 /> },
    ],
  },
  {
    id: "wm-front",
    name: "Elegant 7kg Front Load Washer",
    subtitle: "WASHING MACHINES · FRONT LOAD",
    price: "₹32,999",
    badge: "BESTSELLER",
    href: "/products/washing-machines",
    slides: [
      { bg: "#f0f0f5", node: <FrontLoader /> },
      { bg: "#e8eaf6", node: <FrontLoader /> },
      { bg: "#e8f4ff", node: <FrontLoader /> },
    ],
  },
  {
    id: "wm-top",
    name: "Elegant 8kg Top Load Washer",
    subtitle: "WASHING MACHINES · TOP LOAD",
    price: "₹24,499",
    href: "/products/washing-machines",
    slides: [
      { bg: "#f5f5f7", node: <TopLoader /> },
      { bg: "#eff6ff", node: <TopLoader /> },
      { bg: "#f0fdf4", node: <TopLoader /> },
    ],
  },
  {
    id: "cooler-tower",
    name: "Elegant 50L Tower Air Cooler",
    subtitle: "AIR COOLERS · TOWER",
    price: "₹12,999",
    badge: "NEW",
    href: "/products/air-coolers",
    slides: [
      { bg: "#eff6ff", node: <TowerCooler /> },
      { bg: "#e0f2fe", node: <TowerCooler /> },
      { bg: "#f0f9ff", node: <TowerCooler /> },
    ],
  },
  {
    id: "cooler-desert",
    name: "Elegant 80L Desert Cooler",
    subtitle: "AIR COOLERS · DESERT",
    price: "₹9,499",
    href: "/products/air-coolers",
    slides: [
      { bg: "#e0f2fe", node: <DesertCooler /> },
      { bg: "#bae6fd", node: <DesertCooler /> },
      { bg: "#eff6ff", node: <DesertCooler /> },
    ],
  },
  {
    id: "cooktop-2",
    name: "Elegant 2-Burner Infrared Cooktop",
    subtitle: "INFRARED COOKTOPS · 2 BURNER",
    price: "₹6,999",
    href: "/products/infrared-cooktops",
    slides: [
      { bg: "#1c1c1e", node: <Cooktop2 /> },
      { bg: "#0f0f10", node: <Cooktop2 /> },
      { bg: "#111827", node: <Cooktop2 /> },
    ],
  },
  {
    id: "cooktop-4",
    name: "Elegant 4-Burner Infrared Cooktop",
    subtitle: "INFRARED COOKTOPS · 4 BURNER",
    price: "₹11,999",
    badge: "BESTSELLER",
    href: "/products/infrared-cooktops",
    slides: [
      { bg: "#18181b", node: <Cooktop4 /> },
      { bg: "#0a0a0a", node: <Cooktop4 /> },
      { bg: "#111827", node: <Cooktop4 /> },
    ],
  },
];

// ── Single tile ────────────────────────────────────────────────────────────────

function ProductTile({ product }: { product: Product }) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onEnter = () => {
    setHovered(true);
    timerRef.current = setInterval(() => {
      setIdx(prev => (prev + 1) % product.slides.length);
    }, 700);
  };

  const onLeave = () => {
    setHovered(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setIdx(0);
  };

  const slide = product.slides[idx];

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        background:    "#ffffff",
        borderRadius:  16,
        overflow:      "hidden",
        boxShadow:  "0 2px 12px rgba(0,0,0,0.07)",
        display:       "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Image area ─────────────────────────────────────────────────────── */}
      <div style={{ height: 220, position: "relative", overflow: "hidden" }}>

        {/* Sliding strip */}
        <div
          style={{
            display:    "flex",
            height:     "100%",
            transform:  `translateX(-${idx * 100}%)`,
            transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {product.slides.map((s, i) => (
            <div
              key={i}
              style={{
                minWidth:       "100%",
                height:         "100%",
                background:     s.bg,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                transition:     "background 0.55s ease",
              }}
            >
              {s.node}
            </div>
          ))}
        </div>


        {/* Slide dots */}
        <div style={{
          position:       "absolute",
          bottom:          10,
          left:            0,
          right:           0,
          display:         "flex",
          justifyContent:  "center",
          alignItems:      "center",
          gap:             5,
          opacity:         hovered ? 1 : 0,
          transition:      "opacity 0.25s ease",
        }}>
          {product.slides.map((_, i) => (
            <div key={i} style={{
              width:       i === idx ? 18 : 5,
              height:      5,
              borderRadius: 3,
              background:  i === idx
                ? (typeof slide.bg === "string" && slide.bg.startsWith("#1") ? "#fff" : "#1d1d1f")
                : "rgba(128,128,128,0.5)",
              transition:  "width 0.3s ease, background 0.3s ease",
            }} />
          ))}
        </div>
      </div>

      {/* ── Info ───────────────────────────────────────────────────────────── */}
      <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>

        <p style={{
          fontSize:      10.5,
          fontWeight:     600,
          color:          "#6e6e73",
          letterSpacing:  "0.07em",
          marginBottom:   5,
        }}>
          {product.subtitle}
        </p>

        <p style={{
          fontSize:      15,
          fontWeight:     600,
          color:          "#1d1d1f",
          letterSpacing:  "-0.01em",
          lineHeight:     1.3,
          marginBottom:   6,
          flex:           1,
        }}>
          {product.name}
        </p>

        <p style={{
          fontSize:    16,
          fontWeight:   700,
          color:        "#1d1d1f",
          marginBottom: 16,
          letterSpacing: "-0.01em",
        }}>
          {product.price}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <Link
            href={product.href}
            style={{
              flex:           1,
              textAlign:      "center",
              padding:        "9px 0",
              borderRadius:   8,
              background:     "#0071e3",
              color:          "#fff",
              fontSize:        13,
              fontWeight:      500,
              letterSpacing:   "-0.01em",
              textDecoration: "none",
              display:        "block",
            }}
          >
            View Now
          </Link>
          <Link
            href="/contact"
            style={{
              flex:           1,
              textAlign:      "center",
              padding:        "8px 0",
              borderRadius:   8,
              border:         "1.5px solid #0071e3",
              color:          "#0071e3",
              fontSize:        13,
              fontWeight:      500,
              letterSpacing:   "-0.01em",
              textDecoration: "none",
              display:        "block",
            }}
          >
            Enquire
          </Link>
        </div>

      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function ProductSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-14">

      <div className="mb-8">
        <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span className="text-[#1d1d1f]">Accessories.&nbsp;</span>
          <span className="text-[#6e6e73]">To make your life easy.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {PRODUCTS.map(p => <ProductTile key={p.id} product={p} />)}
      </div>

    </section>
  );
}

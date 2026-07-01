"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import type { ReactNode } from "react";

// ─── SVG Illustrations ────────────────────────────────────────────────────────

function TV65() {
  return (
    <svg viewBox="0 0 260 175" width="200" height="135" fill="none">
      <rect x="10" y="6" width="240" height="132" rx="8" fill="#1d1d1f" />
      <rect x="18" y="14" width="224" height="116" rx="4" fill="#2c2c2e" />
      <rect x="23" y="19" width="214" height="106" rx="3" fill="#3a3a3c" opacity=".65" />
      <rect x="118" y="138" width="24" height="14" rx="2" fill="#6e6e73" />
      <rect x="96" y="152" width="68" height="6" rx="3" fill="#6e6e73" />
    </svg>
  );
}
function TV55() {
  return (
    <svg viewBox="0 0 220 160" width="178" height="128" fill="none">
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
    <svg viewBox="0 0 180 136" width="158" height="119" fill="none">
      <rect x="8" y="5" width="164" height="100" rx="7" fill="#1d1d1f" />
      <rect x="15" y="12" width="150" height="86" rx="4" fill="#2c2c2e" />
      <rect x="19" y="16" width="142" height="78" rx="3" fill="#3a3a3c" opacity=".6" />
      <rect x="80" y="105" width="20" height="12" rx="2" fill="#6e6e73" />
      <rect x="62" y="117" width="56" height="5" rx="2.5" fill="#6e6e73" />
    </svg>
  );
}
function TV32() {
  return (
    <svg viewBox="0 0 150 115" width="136" height="104" fill="none">
      <rect x="6" y="4" width="138" height="84" rx="6" fill="#1d1d1f" />
      <rect x="12" y="10" width="126" height="72" rx="3" fill="#2c2c2e" />
      <rect x="16" y="14" width="118" height="64" rx="2" fill="#3a3a3c" opacity=".6" />
      <rect x="67" y="88" width="16" height="10" rx="2" fill="#6e6e73" />
      <rect x="51" y="98" width="48" height="4" rx="2" fill="#6e6e73" />
    </svg>
  );
}
function FrontLoader7() {
  return (
    <svg viewBox="0 0 140 180" width="110" height="141" fill="none">
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
function FrontLoader6() {
  return (
    <svg viewBox="0 0 140 180" width="110" height="141" fill="none">
      <rect x="8" y="8" width="124" height="164" rx="10" fill="#eae8f5" />
      <rect x="14" y="14" width="112" height="152" rx="8" fill="#d8d5f0" />
      <rect x="22" y="22" width="48" height="8" rx="4" fill="#b8b4d8" />
      <circle cx="104" cy="26" r="6" fill="#b8b4d8" />
      <circle cx="118" cy="26" r="6" fill="#b8b4d8" />
      <circle cx="70" cy="104" r="44" fill="#9e99c8" />
      <circle cx="70" cy="104" r="36" fill="#7b75b0" />
      <circle cx="70" cy="104" r="26" fill="#5a5490" />
      <circle cx="70" cy="104" r="18" fill="#3d3870" />
      <circle cx="63" cy="97" r="5" fill="#2d2960" opacity=".8" />
    </svg>
  );
}
function TopLoader8() {
  return (
    <svg viewBox="0 0 140 180" width="110" height="141" fill="none">
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
function TopLoader10() {
  return (
    <svg viewBox="0 0 140 180" width="110" height="141" fill="none">
      <rect x="8" y="8" width="124" height="164" rx="10" fill="#e8f4ff" />
      <rect x="14" y="14" width="112" height="152" rx="8" fill="#d0e8ff" />
      <rect x="22" y="22" width="96" height="28" rx="6" fill="#b8d8f8" />
      <rect x="30" y="30" width="40" height="12" rx="4" fill="#90bce8" />
      <circle cx="104" cy="36" r="8" fill="#90bce8" />
      <rect x="22" y="62" width="96" height="90" rx="6" fill="#90bce8" />
      <circle cx="70" cy="107" r="36" fill="#5a9fd4" />
      <circle cx="70" cy="107" r="24" fill="#2d7ab8" />
    </svg>
  );
}
function TowerCooler() {
  return (
    <svg viewBox="0 0 100 200" width="78" height="156" fill="none">
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
function PersonalCooler() {
  return (
    <svg viewBox="0 0 120 150" width="96" height="120" fill="none">
      <rect x="12" y="10" width="96" height="120" rx="12" fill="#e0f2fe" />
      <rect x="20" y="18" width="80" height="80" rx="8" fill="#bae6fd" />
      {[0,1,2,3].map(i => (
        <rect key={i} x="26" y={26 + i*18} width="68" height="7" rx="3.5" fill="#7dd3fc" />
      ))}
      <circle cx="60" cy="118" r="14" fill="#7dd3fc" />
      <circle cx="60" cy="118" r="8" fill="#38bdf8" />
      <circle cx="60" cy="118" r="3" fill="#0284c7" />
    </svg>
  );
}
function DesertCooler() {
  return (
    <svg viewBox="0 0 160 160" width="138" height="138" fill="none">
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
function WindowCooler() {
  return (
    <svg viewBox="0 0 160 130" width="138" height="112" fill="none">
      <rect x="8" y="8" width="144" height="114" rx="10" fill="#ccfbf1" />
      <rect x="16" y="16" width="64" height="98" rx="6" fill="#99f6e4" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="22" y={24 + i*17} width="52" height="7" rx="3.5" fill="#5eead4" />
      ))}
      <rect x="88" y="16" width="56" height="98" rx="6" fill="#99f6e4" />
      <circle cx="116" cy="65" r="30" fill="#5eead4" />
      <circle cx="116" cy="65" r="18" fill="#2dd4bf" />
      <circle cx="116" cy="65" r="8" fill="#0d9488" />
    </svg>
  );
}
function Cooktop1() {
  return (
    <svg viewBox="0 0 140 100" width="126" height="90" fill="none">
      <rect x="8" y="10" width="124" height="80" rx="10" fill="#1c1c1e" />
      <rect x="16" y="18" width="108" height="64" rx="6" fill="#2c2c2e" />
      <circle cx="70" cy="50" r="24" fill="none" stroke="#ff6b35" strokeWidth="3" />
      <circle cx="70" cy="50" r="14" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="70" cy="50" r="5" fill="#ff6b35" />
    </svg>
  );
}
function Cooktop2() {
  return (
    <svg viewBox="0 0 200 120" width="178" height="107" fill="none">
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
function Cooktop3() {
  return (
    <svg viewBox="0 0 240 130" width="200" height="108" fill="none">
      <rect x="8" y="10" width="224" height="110" rx="10" fill="#1c1c1e" />
      <rect x="16" y="18" width="208" height="94" rx="6" fill="#2c2c2e" />
      <circle cx="60" cy="65" r="22" fill="none" stroke="#ff6b35" strokeWidth="2.5" />
      <circle cx="60" cy="65" r="13" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="60" cy="65" r="4.5" fill="#ff6b35" />
      <circle cx="124" cy="65" r="22" fill="none" stroke="#ff6b35" strokeWidth="2.5" />
      <circle cx="124" cy="65" r="13" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="124" cy="65" r="4.5" fill="#ff6b35" />
      <circle cx="188" cy="65" r="22" fill="none" stroke="#ff6b35" strokeWidth="2.5" />
      <circle cx="188" cy="65" r="13" fill="none" stroke="#ff9a5c" strokeWidth="2" />
      <circle cx="188" cy="65" r="4.5" fill="#ff6b35" />
    </svg>
  );
}
function Cooktop4() {
  return (
    <svg viewBox="0 0 260 140" width="218" height="117" fill="none">
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

// ─── Data ─────────────────────────────────────────────────────────────────────

type Product = {
  id:           string;
  name:         string;
  subtitle:     string;
  price:        string;
  badge?:       string;
  href:         string;
  bg:           string;
  illustration: ReactNode;
  /**
   * Path to a real product image under /public, e.g. "/images/products/tv-65.webp".
   * When provided, next/image is rendered instead of the SVG illustration.
   * Convention: /public/images/products/{id}.webp (400 × 400 px, transparent bg).
   */
  imageSrc?:    string;
};

type Shelf = {
  category:     string;
  categoryHref: string;
  products:     Product[];
};

const SHELVES: Shelf[] = [
  {
    category:     "LED TVs",
    categoryHref: "/products/led-tvs",
    products: [
      { id: "tv-65", name: 'Elegant 65" 4K QLED TV',        subtitle: '65" · 4K QLED',   price: "₹74,999", badge: "PREMIUM", href: "/products/led-tvs", bg: "#0f0f10", illustration: <TV65 /> },
      { id: "tv-55", name: 'Elegant 55" 4K QLED TV',        subtitle: '55" · 4K QLED',   price: "₹49,999", badge: "NEW",     href: "/products/led-tvs", bg: "#1a1a1a", illustration: <TV55 /> },
      { id: "tv-43", name: 'Elegant 43" Full HD Smart TV',   subtitle: '43" · FULL HD',   price: "₹27,999",                   href: "/products/led-tvs", bg: "#1d1d1f", illustration: <TV43 /> },
      { id: "tv-32", name: 'Elegant 32" HD Ready Smart TV',  subtitle: '32" · HD READY',  price: "₹18,999",                   href: "/products/led-tvs", bg: "#0a1628", illustration: <TV32 /> },
    ],
  },
  {
    category:     "Washing Machines",
    categoryHref: "/products/washing-machines",
    products: [
      { id: "wm-fl7",  name: "Elegant 7kg Front Load Washer",  subtitle: "FRONT LOAD · 7KG",  price: "₹32,999", badge: "BESTSELLER", href: "/products/washing-machines", bg: "#f0f0f5", illustration: <FrontLoader7 /> },
      { id: "wm-fl6",  name: "Elegant 6kg Front Load Washer",  subtitle: "FRONT LOAD · 6KG",  price: "₹28,999",                      href: "/products/washing-machines", bg: "#f0eff8", illustration: <FrontLoader6 /> },
      { id: "wm-tl8",  name: "Elegant 8kg Top Load Washer",    subtitle: "TOP LOAD · 8KG",    price: "₹24,499",                      href: "/products/washing-machines", bg: "#f5f5f7", illustration: <TopLoader8 /> },
      { id: "wm-tl10", name: "Elegant 10kg Top Load Washer",   subtitle: "TOP LOAD · 10KG",   price: "₹29,999", badge: "NEW",        href: "/products/washing-machines", bg: "#e8f4ff", illustration: <TopLoader10 /> },
    ],
  },
  {
    category:     "Air Coolers",
    categoryHref: "/products/air-coolers",
    products: [
      { id: "ac-tower",    name: "Elegant 50L Tower Air Cooler",   subtitle: "TOWER · 50 LITRES",    price: "₹12,999", badge: "NEW", href: "/products/air-coolers", bg: "#eff6ff", illustration: <TowerCooler /> },
      { id: "ac-desert",   name: "Elegant 80L Desert Cooler",      subtitle: "DESERT · 80 LITRES",   price: "₹9,499",              href: "/products/air-coolers", bg: "#e0f2fe", illustration: <DesertCooler /> },
      { id: "ac-personal", name: "Elegant 20L Personal Cooler",    subtitle: "PERSONAL · 20 LITRES", price: "₹6,499",              href: "/products/air-coolers", bg: "#e0f2fe", illustration: <PersonalCooler /> },
      { id: "ac-window",   name: "Elegant 60L Window Cooler",      subtitle: "WINDOW · 60 LITRES",   price: "₹10,999",             href: "/products/air-coolers", bg: "#ccfbf1", illustration: <WindowCooler /> },
    ],
  },
  {
    category:     "Infrared Cooktops",
    categoryHref: "/products/infrared-cooktops",
    products: [
      { id: "ct-1", name: "Elegant Single Burner Cooktop",      subtitle: "INFRARED · 1 BURNER", price: "₹3,999",              href: "/products/infrared-cooktops", bg: "#18181b", illustration: <Cooktop1 /> },
      { id: "ct-2", name: "Elegant 2-Burner Infrared Cooktop",  subtitle: "INFRARED · 2 BURNER", price: "₹6,999",              href: "/products/infrared-cooktops", bg: "#1c1c1e", illustration: <Cooktop2 /> },
      { id: "ct-3", name: "Elegant 3-Burner Infrared Cooktop",  subtitle: "INFRARED · 3 BURNER", price: "₹8,999", badge: "NEW", href: "/products/infrared-cooktops", bg: "#111827", illustration: <Cooktop3 /> },
      { id: "ct-4", name: "Elegant 4-Burner Infrared Cooktop",  subtitle: "INFRARED · 4 BURNER", price: "₹11,999", badge: "BESTSELLER", href: "/products/infrared-cooktops", bg: "#18181b", illustration: <Cooktop4 /> },
    ],
  },
];

// ─── Illustration switcher ────────────────────────────────────────────────────
// Renders a real product image (next/image) when `imageSrc` is set on the
// product, and falls back to the SVG placeholder otherwise.
// Drop images into /public/images/products/{id}.webp (400 × 400 px,
// transparent background) and add `imageSrc: "/images/products/{id}.webp"`
// to the product entry in SHELVES to activate them one at a time.

function ProductIllustration({ product }: { product: Product }) {
  if (product.imageSrc) {
    return (
      <Image
        src={product.imageSrc}
        alt={product.name}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        style={{ objectFit: "contain", padding: 24 }}
      />
    );
  }
  return <>{product.illustration}</>;
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  isCompared,
  onToggleCompare,
  maxReached,
}: {
  product:         Product;
  isCompared:      boolean;
  onToggleCompare: () => void;
  maxReached:      boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const isDark = product.bg.startsWith("#0") || product.bg.startsWith("#1");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:   "#fff",
        borderRadius: 16,
        overflow:     "hidden",
        boxShadow:    hovered
          ? "0 12px 32px rgba(0,0,0,0.12), 0 3px 10px rgba(0,0,0,0.07)"
          : "0 2px 10px rgba(0,0,0,0.07)",
        outline:      isCompared ? "2px solid #0071e3" : "2px solid transparent",
        outlineOffset: "-1px",
        transition:   "box-shadow 0.25s ease, outline-color 0.15s ease",
        display:      "flex",
        flexDirection:"column",
        flex:         1,
        minWidth:     0,
      }}
    >
      {/* Illustration area */}
      <div style={{
        background:     product.bg,
        height:         192,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        position:       "relative",
        flexShrink:     0,
      }}>
        {product.badge && (
          <span style={{
            position:      "absolute",
            top:           12,
            left:          12,
            fontSize:      9.5,
            fontWeight:    700,
            letterSpacing: "0.08em",
            color:         isDark ? "#f5f5f7" : "#1d1d1f",
            background:    isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)",
            padding:       "3px 8px",
            borderRadius:  20,
          }}>
            {product.badge}
          </span>
        )}
        <ProductIllustration product={product} />
      </div>

      {/* Info */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{
          fontSize:      9.5,
          fontWeight:    600,
          color:         "#6e6e73",
          letterSpacing: "0.07em",
          marginBottom:  4,
        }}>
          {product.subtitle}
        </p>
        <p style={{
          fontSize:      13.5,
          fontWeight:    600,
          color:         "#1d1d1f",
          letterSpacing: "-0.01em",
          lineHeight:    1.3,
          marginBottom:  8,
          flex:          1,
        }}>
          {product.name}
        </p>
        <p style={{
          fontSize:      15,
          fontWeight:    700,
          color:         "#1d1d1f",
          letterSpacing: "-0.01em",
          marginBottom:  12,
        }}>
          {product.price}
        </p>
        <div style={{ display: "flex", gap: 7 }}>
          <Link
            href={product.href}
            style={{
              flex:           1,
              textAlign:      "center",
              padding:        "8px 0",
              borderRadius:   7,
              background:     "#0071e3",
              color:          "#fff",
              fontSize:       12,
              fontWeight:     500,
              textDecoration: "none",
              display:        "block",
            }}
          >
            View Now
          </Link>
          <Link
            href={`/contact?enquire=${encodeURIComponent(product.name)}`}
            style={{
              flex:           1,
              textAlign:      "center",
              padding:        "7px 0",
              borderRadius:   7,
              border:         "1.5px solid #0071e3",
              color:          "#0071e3",
              fontSize:       12,
              fontWeight:     500,
              textDecoration: "none",
              display:        "block",
            }}
          >
            Enquire
          </Link>
        </div>

        {/* Compare toggle */}
        <button
          onClick={onToggleCompare}
          disabled={maxReached && !isCompared}
          aria-label={isCompared
            ? `Remove ${product.name} from comparison`
            : `Add ${product.name} to comparison`}
          aria-pressed={isCompared}
          style={{
            marginTop:      8,
            width:          "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            5,
            padding:        "5px 0",
            border:         "none",
            background:     "none",
            cursor:         maxReached && !isCompared ? "not-allowed" : "pointer",
            opacity:        maxReached && !isCompared ? 0.38 : 1,
            color:          isCompared ? "#0071e3" : "#6e6e73",
            fontSize:       12,
            fontWeight:     500,
            transition:     "color 0.15s ease, opacity 0.15s ease",
          }}
        >
          <span style={{
            width:          14,
            height:         14,
            borderRadius:   3,
            border:         `1.5px solid ${isCompared ? "#0071e3" : "#8e8e93"}`,
            background:     isCompared ? "#0071e3" : "transparent",
            display:        "inline-flex",
            alignItems:     "center",
            justifyContent: "center",
            transition:     "background 0.15s ease, border-color 0.15s ease",
            flexShrink:     0,
          }}>
            {isCompared && <Check size={9} color="#fff" strokeWidth={3} />}
          </span>
          Compare
        </button>
      </div>
    </div>
  );
}

// ─── Compare bar (appears below the grid when ≥ 2 selected) ──────────────────

function CompareBar({
  products,
  onRemove,
  onClear,
  onCompare,
}: {
  products:  Product[];
  onRemove:  (id: string) => void;
  onClear:   () => void;
  onCompare: () => void;
}) {
  return (
    <div style={{
      marginTop:  16,
      padding:    "12px 18px",
      background: "#fff",
      border:     "1.5px solid #0071e3",
      borderRadius: 14,
      display:    "flex",
      alignItems: "center",
      gap:        14,
      boxShadow:  "0 4px 16px rgba(0,113,227,0.1)",
    }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "#6e6e73", flexShrink: 0, letterSpacing: "0.04em" }}>
        COMPARING
      </span>

      {/* Product chips */}
      <div style={{ display: "flex", gap: 8, flex: 1, alignItems: "center", flexWrap: "wrap" }}>
        {products.map(p => (
          <div key={p.id} style={{
            display:    "flex",
            alignItems: "center",
            gap:        6,
            padding:    "5px 8px 5px 10px",
            background: "#eff6ff",
            borderRadius: 7,
            border:     "1px solid #bfdbfe",
          }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#1d1d1f" }}>
              {p.name}
            </span>
            <button
              onClick={() => onRemove(p.id)}
              aria-label={`Remove ${p.name} from comparison`}
              style={{
                border:     "none",
                background: "none",
                cursor:     "pointer",
                padding:    0,
                display:    "flex",
                alignItems: "center",
                color:      "#6e6e73",
                lineHeight: 1,
              }}
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          </div>
        ))}
        {products.length < 3 && (
          <span style={{ fontSize: 12, color: "#6e6e73", fontStyle: "italic" }}>
            Add 1 more to compare
          </span>
        )}
      </div>

      <button
        onClick={onClear}
        style={{
          border:     "none",
          background: "none",
          cursor:     "pointer",
          fontSize:   12,
          color:      "#6e6e73",
          fontWeight: 500,
          flexShrink: 0,
          padding:    "0 4px",
        }}
      >
        Clear
      </button>

      <button
        onClick={onCompare}
        style={{
          padding:      "9px 18px",
          borderRadius: 8,
          background:   "#0071e3",
          color:        "#fff",
          border:       "none",
          cursor:       "pointer",
          fontSize:     13,
          fontWeight:   500,
          flexShrink:   0,
          letterSpacing: "-0.01em",
        }}
      >
        Compare {products.length}
      </button>
    </div>
  );
}

// ─── Compare modal ────────────────────────────────────────────────────────────

function CompareModal({
  products,
  category,
  onClose,
}: {
  products: Product[];
  category: string;
  onClose:  () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef  = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const TITLE_ID  = "compare-modal-title";

  // On mount: remember where focus came from, move it to the close button.
  // On unmount: give focus back to the opener.
  useEffect(() => {
    returnRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    return () => { returnRef.current?.focus(); };
  }, []);

  // Escape key → close (document-level so it fires even if nothing inside is focused)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Tab focus trap — keep keyboard focus cycling within the dialog
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position:       "fixed",
        inset:          0,
        background:     "rgba(0,0,0,0.48)",
        zIndex:         9000,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        24,
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        style={{
          background:   "#fff",
          borderRadius: 20,
          padding:      "28px 28px 32px",
          width:        "100%",
          maxWidth:     860,
          maxHeight:    "88vh",
          overflowY:    "auto",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h2
              id={TITLE_ID}
              style={{ fontSize: 21, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.015em" }}
            >
              Compare {category}
            </h2>
            <p style={{ fontSize: 12, color: "#6e6e73", marginTop: 2 }}>
              {products.length} products selected
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close comparison"
            style={{
              width:       36,
              height:      36,
              borderRadius:"50%",
              border:      "none",
              background:  "#f2f2f7",
              cursor:      "pointer",
              display:     "flex",
              alignItems:  "center",
              justifyContent: "center",
              flexShrink:  0,
            }}
          >
            <X size={17} color="#1d1d1f" />
          </button>
        </div>

        {/* Comparison columns */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: `repeat(${products.length}, 1fr)`,
          gap:                 16,
        }}>
          {products.map(p => (
            <div key={p.id} style={{ borderRadius: 14, border: "1.5px solid #e8e8ed", overflow: "hidden" }}>
              {/* Illustration */}
              <div style={{
                background: p.bg,
                height:     160,
                position:   "relative",
                display:    "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <ProductIllustration product={p} />
              </div>

              {/* Details */}
              <div style={{ padding: "16px" }}>
                {p.badge && (
                  <span style={{
                    fontSize:      9.5,
                    fontWeight:    700,
                    letterSpacing: "0.07em",
                    color:         "#6e6e73",
                    background:    "#f2f2f7",
                    padding:       "2px 7px",
                    borderRadius:  20,
                    display:       "inline-block",
                    marginBottom:  6,
                  }}>
                    {p.badge}
                  </span>
                )}
                <p style={{ fontSize: 9.5, fontWeight: 600, color: "#6e6e73", letterSpacing: "0.07em", marginBottom: 4 }}>
                  {p.subtitle}
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 10, lineHeight: 1.3 }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 16 }}>
                  {p.price}
                </p>
                <Link
                  href={p.href}
                  style={{
                    display:        "block",
                    textAlign:      "center",
                    padding:        "9px 0",
                    borderRadius:   8,
                    background:     "#0071e3",
                    color:          "#fff",
                    fontSize:       13,
                    fontWeight:     500,
                    textDecoration: "none",
                  }}
                >
                  View Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Single shelf row ─────────────────────────────────────────────────────────

function ShelfRow({ shelf }: { shelf: Shelf }) {
  const [btnHovered,  setBtnHovered]  = useState(false);
  const [compareIds,  setCompareIds]  = useState<string[]>([]);
  const [showModal,   setShowModal]   = useState(false);

  const toggleCompare = (id: string) =>
    setCompareIds(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : prev.length >= 3 ? prev : [...prev, id]
    );

  const maxReached     = compareIds.length >= 3;
  const compareProducts = shelf.products.filter(p => compareIds.includes(p.id));

  return (
    <div>
      {/* Shelf header */}
      <div style={{ marginBottom: 16 }}>
        <h3 style={{
          fontSize:      22,
          fontWeight:    600,
          color:         "#1d1d1f",
          letterSpacing: "-0.015em",
        }}>
          {shelf.category}
        </h3>
      </div>

      {/* Cards row — 4 equal-width cards filling the full row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {shelf.products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            isCompared={compareIds.includes(p.id)}
            onToggleCompare={() => toggleCompare(p.id)}
            maxReached={maxReached}
          />
        ))}
      </div>

      {/* Compare bar — shown when ≥ 2 selected */}
      {compareIds.length >= 2 && (
        <CompareBar
          products={compareProducts}
          onRemove={id => setCompareIds(prev => prev.filter(x => x !== id))}
          onClear={() => setCompareIds([])}
          onCompare={() => setShowModal(true)}
        />
      )}

      {/* View All button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Link
          href={shelf.categoryHref}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            6,
            padding:        "10px 22px",
            borderRadius:   980,
            border:         `1.5px solid ${btnHovered ? "#0071e3" : "#c7c7cc"}`,
            color:          btnHovered ? "#0071e3" : "#1d1d1f",
            background:     btnHovered ? "#f0f7ff" : "transparent",
            fontSize:       13,
            fontWeight:     500,
            letterSpacing:  "-0.01em",
            textDecoration: "none",
            transition:     "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
          }}
        >
          View all {shelf.category}
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>

      {/* Compare modal */}
      {showModal && (
        <CompareModal
          products={compareProducts}
          category={shelf.category}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProductShelves() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-14">

      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span className="text-[#1d1d1f]">Our Products.&nbsp;</span>
          <span className="text-[#6e6e73]">Something for every home.</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
        {SHELVES.map(shelf => (
          <ShelfRow key={shelf.category} shelf={shelf} />
        ))}
      </div>

    </section>
  );
}

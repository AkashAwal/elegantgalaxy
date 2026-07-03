"use client";

import Link from "next/link";
import type { ReactNode } from "react";

// ── SVG illustration ───────────────────────────────────────────────────────────

function SmartBoard() {
  return (
    <svg viewBox="0 0 360 240" width="340" height="227" fill="none">
      <rect x="20" y="10" width="320" height="196" rx="10" fill="#111" />
      <rect x="30" y="20" width="300" height="176" rx="6" fill="#1a1a1a" />
      <rect x="36" y="26" width="288" height="164" rx="4" fill="#222" />
      <defs>
        <radialGradient id="boardglow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#111" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="36" y="26" width="288" height="164" rx="4" fill="url(#boardglow)" />
      <path d="M100 150 L150 90 L190 120 L260 60" stroke="#0071e3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="260" cy="60" r="7" fill="#0071e3" />
      <rect x="158" y="208" width="44" height="16" rx="3" fill="#1c1c1e" />
      <rect x="130" y="224" width="100" height="7" rx="3.5" fill="#1c1c1e" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

type Product = {
  category: string;
  label:    string;
  tagline:  string;
  href:     string;
  image:    ReactNode;
  imageBg:  string;
};

const PRODUCT: Product = {
  category: "Interactive Smart Board",
  label:    'EG 65" Interactive Smart Teaching Board',
  tagline:  '65" screen · 4K Ultra HD',
  href:     "/contact",
  image:    <SmartBoard />,
  imageBg:  "#111",
};

// ── Component ──────────────────────────────────────────────────────────────────

export default function LatestSection() {
  const p = PRODUCT;

  return (
    <section style={{ background: "#fff", width: "100%" }}>
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 80, paddingBottom: 64 }}>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* ── Left: text ─────────────────────────────────────────────── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <p
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
                Enquire Now
              </Link>
            </div>
          </div>

          {/* ── Right: image ───────────────────────────────────────────── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              position:       "relative",
              borderRadius:   24,
              overflow:       "hidden",
              height:         480,
              background:     p.imageBg,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
            }}>
              {p.image}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

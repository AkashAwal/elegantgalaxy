"use client";

import Link from "next/link";
import Image from "next/image";

// ── Data ───────────────────────────────────────────────────────────────────────

type Product = {
  category: string;
  label:    string;
  tagline:  string;
  href:     string;
  imageSrc: string;
  imageBg:  string;
};

const PRODUCT: Product = {
  category: "Interactive Smart Board",
  label:    'EG 65" Interactive Smart Teaching Board',
  tagline:  '65" screen · 4K Ultra HD',
  href:     "/products/led-tvs/smart-board",
  imageSrc: "/images/tvs/smart-board-front.webp",
  imageBg:  "#fff",
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
              }}
            >
              {p.tagline}
            </p>
          </div>

          {/* ── Right: image ───────────────────────────────────────────── */}
          {/*
            aspectRatio (not a fixed height) so the photo fills the box at any
            width — a fixed 480px height left illustrations floating tiny
            inside a mostly-empty box on narrow mobile screens.
          */}
          <div className="w-full" style={{ flex: 1.3, minWidth: 0 }}>
            <div
              className="w-full lg:max-w-none"
              style={{
                position:     "relative",
                borderRadius: 24,
                overflow:     "hidden",
                aspectRatio:  "360 / 300",
                maxHeight:    720,
                background:   p.imageBg,
              }}>
              <Image
                src={p.imageSrc}
                alt={p.label}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <div
              className="tv-fadein-d2"
              style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
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
                View Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

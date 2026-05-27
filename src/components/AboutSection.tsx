"use client";

import Link from "next/link";
import { useState } from "react";

// ── Stat tile ──────────────────────────────────────────────────────────────────

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      padding:      "28px 24px",
      borderRadius: 16,
      background:   "rgba(255,255,255,0.05)",
      border:       "1px solid rgba(255,255,255,0.08)",
    }}>
      <p style={{
        fontSize:      40,
        fontWeight:    700,
        color:         "#f5f5f7",
        letterSpacing: "-0.03em",
        lineHeight:    1,
        marginBottom:  6,
      }}>
        {value}
      </p>
      <p style={{
        fontSize:  13,
        color:     "rgba(245,245,247,0.5)",
        fontWeight: 500,
        lineHeight: 1.4,
      }}>
        {label}
      </p>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function AboutSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ background: "#1d1d1f", width: "100%" }}>
      <div
        className="mx-auto max-w-[1440px] px-8"
        style={{ paddingTop: 80, paddingBottom: 88 }}
      >
        <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>

          {/* ── Left: copy ─────────────────────────────────────────────── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>

            {/* Eyebrow */}
            <p style={{
              fontSize:      11,
              fontWeight:    600,
              letterSpacing: "0.1em",
              color:         "rgba(245,245,247,0.45)",
              marginBottom:  20,
              textTransform: "uppercase",
            }}>
              About Elegant Galaxy
            </p>

            {/* Headline */}
            <h2 style={{
              fontSize:      48,
              fontWeight:    700,
              letterSpacing: "-0.03em",
              lineHeight:    1.08,
              marginBottom:  24,
              color:         "#f5f5f7",
            }}>
              Powering Indian homes.{" "}
              <span style={{ color: "rgba(245,245,247,0.38)" }}>
                Since 2012.
              </span>
            </h2>

            {/* Body */}
            <p style={{
              fontSize:   16,
              lineHeight: 1.7,
              color:      "rgba(245,245,247,0.55)",
              maxWidth:   480,
              marginBottom: 12,
            }}>
              We started with a single belief: that every Indian household deserves
              appliances that are thoughtfully engineered, beautifully made, and built
              to last a decade.
            </p>
            <p style={{
              fontSize:   16,
              lineHeight: 1.7,
              color:      "rgba(245,245,247,0.55)",
              maxWidth:   480,
              marginBottom: 40,
            }}>
              Today, Elegant Galaxy serves millions of families across 500+ cities,
              with a service network that ensures help is always close at hand.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            6,
                padding:        "11px 24px",
                borderRadius:   980,
                border:         `1.5px solid ${hovered ? "#f5f5f7" : "rgba(245,245,247,0.25)"}`,
                color:          hovered ? "#1d1d1f" : "#f5f5f7",
                background:     hovered ? "#f5f5f7" : "transparent",
                fontSize:       14,
                fontWeight:     500,
                letterSpacing:  "-0.01em",
                textDecoration: "none",
                transition:     "all 0.2s ease",
              }}
            >
              Our story →
            </Link>
          </div>

          {/* ── Right: stats 2×2 ──────────────────────────────────────── */}
          <div style={{
            flexShrink: 0,
            width:      420,
            display:    "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:        12,
            paddingTop: 8,
          }}>
            <Stat value="12+"  label="Years of engineering excellence" />
            <Stat value="2M+"  label="Appliances in Indian homes"      />
            <Stat value="500+" label="Cities served pan-India"         />
            <Stat value="200+" label="Authorised service centres"      />
          </div>

        </div>
      </div>
    </section>
  );
}

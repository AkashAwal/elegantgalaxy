import Link from "next/link";

export default function AboutSection() {
  return (
    <section style={{ background: "#1d1d1f", width: "100%" }}>
      <div
        className="mx-auto max-w-[1440px] px-8"
        style={{ paddingTop: 96, paddingBottom: 96 }}
      >

        {/* ── Top: eyebrow + headline + copy ────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start" style={{ marginBottom: 80 }}>

          {/* Left: headline */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <h2
              className="text-[36px] sm:text-[44px] lg:text-[54px]"
              style={{
                fontWeight:    700,
                letterSpacing: "-0.03em",
                lineHeight:    1.06,
                color:         "#f5f5f7",
              }}
            >
              Powering Indian homes.{" "}
              <span style={{ color: "rgba(245,245,247,0.3)" }}>Since 2012.</span>
            </h2>
          </div>

          {/* Right: copy + CTA */}
          <div style={{ flex: "1 1 0", minWidth: 0, paddingTop: 8 }}>
            <p style={{
              fontSize:     16,
              lineHeight:   1.75,
              color:        "rgba(245,245,247,0.52)",
              marginBottom: 16,
            }}>
              We started with a single belief: that every Indian household deserves
              appliances that are thoughtfully engineered, beautifully made, and built
              to last a decade.
            </p>
            <p style={{
              fontSize:     16,
              lineHeight:   1.75,
              color:        "rgba(245,245,247,0.52)",
              marginBottom: 36,
            }}>
              Today, Elegant Galaxy serves millions of families across 500+ cities,
              with a service network that ensures help is always close at hand.
            </p>
            <Link
              href="/about"
              className="about-cta-btn"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                padding:        "11px 26px",
                borderRadius:   980,
                border:         "1.5px solid #0071e3",
                color:          "#fff",
                background:     "#0071e3",
                fontSize:       14,
                fontWeight:     500,
                letterSpacing:  "-0.01em",
                textDecoration: "none",
                transition:     "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
              }}
            >
              Our story
            </Link>
          </div>

        </div>

        {/* ── Divider ────────────────────────────────────────────────────── */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 64 }} />

        {/* ── Stats row ──────────────────────────────────────────────────── */}
        {/*
          2x2 grid on mobile — the value font is smaller here than on lg
          (where it's a single row of 4) so "In-House" fits on one line
          instead of wrapping mid-word inside a narrow column.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: "12+",  label: "Years of engineering excellence" },
            { value: "2M+",  label: "Appliances in Indian homes"      },
            { value: "500+", label: "Cities served pan-India"         },
            { value: "In-House", label: "Factory-repaired products"    },
          ].map(({ value, label }, i) => (
            <div
              key={i}
              className={[
                "px-4 sm:px-8 pb-8 lg:pb-0",
                // Left column of the 2-up grid (i=0 and i=2) is flush left; at
                // lg (4-up single row) only i=0 is leftmost, so i=2 needs its
                // padding restored.
                i % 2 === 0 ? "pl-0" : "",
                i === 2      ? "lg:pl-8" : "",
                i >= 2               ? "border-t border-t-white/[0.08] pt-8" : "",
                i >= 1 && i <= 3     ? "lg:border-l lg:border-l-white/[0.08]" : "",
                i >= 2               ? "lg:border-t-0 lg:pt-0"              : "",
              ].filter(Boolean).join(" ")}
            >
              <p
                className="text-[22px] sm:text-[36px] lg:text-[clamp(40px,4.5vw,60px)] whitespace-nowrap"
                style={{
                  fontWeight:    700,
                  letterSpacing: "-0.04em",
                  lineHeight:    1,
                  color:         "#f5f5f7",
                  marginBottom:  10,
                }}>
                {value}
              </p>
              <p style={{
                fontSize:   13,
                color:      "rgba(245,245,247,0.42)",
                fontWeight: 500,
                lineHeight: 1.5,
                maxWidth:   160,
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-cta-btn:hover {
          background:    #0077ed !important;
          border-color:  #0077ed !important;
        }
      `}</style>
    </section>
  );
}

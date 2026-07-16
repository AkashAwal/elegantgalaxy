import Link from "next/link";
import Image from "next/image";
import { MODELS, TYPE_IMAGES, type CoolerType } from "@/data/air-coolers";

const CATEGORIES: Array<{ type: CoolerType; label: string; blurb: string }> = [
  { type: "commercial", label: "Commercial", blurb: "100L–160L high-capacity coolers for large spaces and long run hours." },
  { type: "domestic",   label: "Domestic",   blurb: "90L–110L compact coolers built for homes and everyday use." },
];

/** Category-browsing landing view - the default at /products/air-coolers with no query params. */
export default function AirCoolersGrid() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>Air Coolers</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Stay Cool, Work Smart.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 540 }}>
            Choose a category to explore models, capacities, and specs.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 24, maxWidth: 900, margin: "0 auto" }}>
            {CATEGORIES.map(({ type, label, blurb }) => {
              const count = MODELS.filter((m) => m.type === type).length;
              return (
                <Link
                  key={type}
                  href={`/products/air-coolers?type=${type}`}
                  style={{
                    display:      "block",
                    background:   "#fff",
                    borderRadius: 18,
                    overflow:     "hidden",
                    boxShadow:    "0 2px 16px rgba(0,0,0,0.07)",
                    textDecoration: "none",
                  }}
                >
                  <div style={{
                    background: type === "commercial" ? "#1d1d1f" : "#e0f2fe",
                    padding: "32px 24px 24px",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    aspectRatio: "16 / 10",
                  }}>
                    <div style={{ width: "100%", maxWidth: 220 }}>
                      <Image
                        src={TYPE_IMAGES[type]}
                        alt={`${label} Air Coolers`}
                        width={476}
                        height={761}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div style={{ padding: "24px 24px 28px", textAlign: "center" }}>
                    <p style={{ fontSize: 24, fontWeight: 700, color: "#1d1d1f", marginBottom: 8, letterSpacing: "-0.01em" }}>
                      {label}
                    </p>
                    <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.5, marginBottom: 10 }}>
                      {blurb}
                    </p>
                    <p style={{ fontSize: 13, color: "#0071e3", fontWeight: 600 }}>
                      {count} model{count === 1 ? "" : "s"}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}

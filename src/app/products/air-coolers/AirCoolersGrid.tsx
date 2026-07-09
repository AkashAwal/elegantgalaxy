import Link from "next/link";
import { MODELS } from "@/data/air-coolers";
import { CoolerIllustration } from "./AirCoolersClient";

/** Plain category-browsing landing view - the default at /products/air-coolers with no query params. */
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
            Choose a model to explore capacities, specs, and pricing details.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ rowGap: 40, columnGap: 20 }}>
            {MODELS.map((model) => (
              <Link
                key={model.id}
                href={`/products/air-coolers/${model.id}`}
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
                  background: model.type === "commercial" ? "#1d1d1f" : "#e0f2fe",
                  padding: "28px 24px 20px",
                  display: "flex", justifyContent: "center", alignItems: "center",
                  aspectRatio: "16 / 9",
                }}>
                  <CoolerIllustration model={model} />
                </div>
                <div style={{ padding: "18px 20px 20px", textAlign: "center" }}>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.01em" }}>
                    {model.name}
                  </p>
                  <p style={{ fontSize: 13, color: "#6e6e73" }}>
                    {model.type === "commercial" ? "Commercial" : "Domestic"} &middot; {model.capacities.length > 1
                      ? `${model.capacities[0]}L–${model.capacities[model.capacities.length - 1]}L`
                      : `${model.capacities[0]}L`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

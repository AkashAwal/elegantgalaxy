import Image from "next/image";
import Link from "next/link";
import { MODELS, TYPE_IMAGES, type CoolerType } from "@/data/air-coolers";

const SECTIONS: { type: CoolerType; label: string }[] = [
  { type: "domestic",   label: "Domestic Cooler" },
  { type: "commercial", label: "Commercial Cooler" },
];

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
            Choose Domestic or Commercial to explore capacities, specs, and pricing details.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ rowGap: 40, columnGap: 20 }}>
            {SECTIONS.map(({ type, label }) => {
              const models     = MODELS.filter((m) => m.type === type);
              const capacities = models.flatMap((m) => m.capacities);
              const minCap     = Math.min(...capacities);
              const maxCap     = Math.max(...capacities);

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
                    background: "#fff",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    padding: "28px 24px 20px",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    minHeight: 260,
                  }}>
                    <Image
                      src={TYPE_IMAGES[type]}
                      alt={label}
                      width={476}
                      height={761}
                      style={{ width: "100%", maxWidth: 220, height: "auto" }}
                    />
                  </div>
                  <div style={{ padding: "18px 20px 20px", textAlign: "center" }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.01em" }}>
                      {label}
                    </p>
                    <p style={{ fontSize: 13, color: "#6e6e73" }}>
                      {models.length} model{models.length !== 1 ? "s" : ""} available &middot; {minCap}L–{maxCap}L
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

import Link from "next/link";
import { Zap } from "lucide-react";

interface EnergyRow {
  model: string;
  value: string;
}

export default function CategoryEnergyPage({
  category,
  shopHref,
  intro,
  ratingLabel,
  rows,
  note,
}: {
  category:    string;
  shopHref:    string;
  intro:       string;
  ratingLabel: string;
  rows:        EnergyRow[];
  note:        string;
}) {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#1d1d1f" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Zap size={20} color="#16a34a" strokeWidth={2} fill="#16a34a" />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,247,0.45)" }}>
              {category} Energy Ratings
            </p>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#f5f5f7", lineHeight: 1.1, marginBottom: 14, maxWidth: 620 }}>
            Built to save you money on electricity.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.55)", lineHeight: 1.65, maxWidth: 560 }}>
            {intro}
          </p>
        </div>
      </section>

      {/* Ratings table */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 24 }}>
          {ratingLabel}
        </h2>
        <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
          {rows.map((r, i) => (
            <div
              key={r.model}
              style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "space-between",
                gap:            16,
                padding:        "16px 22px",
                borderBottom:   i < rows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                flexWrap:       "wrap",
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f" }}>{r.model}</p>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#16a34a", flexShrink: 0 }}>{r.value}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#6e6e73", marginTop: 16, lineHeight: 1.6, maxWidth: 640 }}>{note}</p>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56, textAlign: "center" }}>
          <Link
            href={shopHref}
            style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff", background: "#0071e3", textDecoration: "none" }}
          >
            Browse {category}
          </Link>
        </div>
      </section>

    </main>
  );
}

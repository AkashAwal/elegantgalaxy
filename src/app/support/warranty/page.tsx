import Link from "next/link";
import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/support/warranty" },
  title:       "Warranty",
  description: "Details on Elegant Galaxy's 1-year warranty coverage for LED TVs, washing machines, air coolers, and infrared cooktops.",
};

const COVERAGE = [
  { category: "LED TVs",             term: "1 year", note: "Covers panel, mainboard, and power supply defects" },
  { category: "Washing Machines",    term: "1 year", note: "Covers motor, drum, and electronics defects" },
  { category: "Air Coolers",         term: "1 year", note: "Covers motor, pump, and body defects" },
  { category: "Infrared Cooktops",   term: "1 year", note: "Covers heating element and control panel defects" },
];

const EXCLUSIONS = [
  "Physical damage, liquid damage, or damage from unauthorised repairs",
  "Normal wear and tear on consumables (honeycomb pads, remote batteries, filters)",
  "Products used outside recommended voltage or operating conditions",
  "Products without a valid proof of purchase",
];

export default function WarrantyPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#1d1d1f" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Shield size={22} color="#C8A951" strokeWidth={2} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,247,0.45)" }}>
              Warranty
            </p>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#f5f5f7", lineHeight: 1.1, marginBottom: 14, maxWidth: 620 }}>
            Every product, backed for years to come.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.55)", lineHeight: 1.65, maxWidth: 560 }}>
            All Elegant Galaxy appliances come with a manufacturer warranty covering manufacturing
            defects in materials and workmanship, honoured in-house by our own factory technicians.
          </p>
        </div>
      </section>

      {/* Coverage table */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 24 }}>
          Coverage by category
        </h2>
        <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
          {COVERAGE.map((c, i) => (
            <div
              key={c.category}
              style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "space-between",
                gap:            16,
                padding:        "18px 22px",
                borderBottom:   i < COVERAGE.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                flexWrap:       "wrap",
              }}
            >
              <div>
                <p style={{ fontSize: 15.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 2 }}>{c.category}</p>
                <p style={{ fontSize: 13, color: "#6e6e73" }}>{c.note}</p>
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#0071e3", flexShrink: 0 }}>{c.term}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusions */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 20 }}>
            What&apos;s not covered
          </h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 640 }}>
            {EXCLUSIONS.map((e) => (
              <li key={e} style={{ fontSize: 14.5, color: "#3a3a3c", lineHeight: 1.6, paddingLeft: 18, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "#8e8e93" }}>—</span>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 72, textAlign: "center" }}>
        <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 20 }}>
          Need to file a warranty claim or get a repair started?
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff", background: "#0071e3", textDecoration: "none" }}
          >
            Contact Support
          </Link>
        </div>
      </section>

    </main>
  );
}

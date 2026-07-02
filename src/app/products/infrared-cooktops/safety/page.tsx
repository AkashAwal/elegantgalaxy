import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title:       "Safety Certifications",
  description: "ISI certification and safety features across Elegant Galaxy infrared cooktops.",
};

const FEATURES = [
  { title: "ISI Certified",             desc: "Every cooktop is certified by the Bureau of Indian Standards for electrical safety." },
  { title: "Auto Shut-Off",             desc: "Cooktops automatically power down if a pan is removed or left unattended past the set timer." },
  { title: "Residual Heat Indicator",   desc: "A visual indicator shows when the ceramic surface is still hot after use." },
  { title: "Overheat Protection",       desc: "Built-in thermal cutoffs prevent damage from prolonged high-heat use or blocked ventilation." },
  { title: "Child Lock",                desc: "Lock the control panel to prevent accidental changes to heat settings or timers." },
  { title: "Low-EMF Design",            desc: "Infrared heating elements emit substantially lower electromagnetic fields than induction cooktops." },
];

export default function CooktopSafetyPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <ShieldCheck size={22} color="#0071e3" strokeWidth={2} />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73" }}>
              Safety Certifications
            </p>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: 14, maxWidth: 620 }}>
            Certified safe, by design.
          </h1>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.65, maxWidth: 560 }}>
            Every Elegant Galaxy infrared cooktop is ISI certified and built with multiple layers
            of protection for everyday kitchen use.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
          {FEATURES.map((f) => (
            <div key={f.title} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 15.5, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{f.title}</p>
              <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56, textAlign: "center" }}>
          <Link
            href="/products/infrared-cooktops"
            style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff", background: "#0071e3", textDecoration: "none" }}
          >
            Browse Infrared Cooktops
          </Link>
        </div>
      </section>

    </main>
  );
}

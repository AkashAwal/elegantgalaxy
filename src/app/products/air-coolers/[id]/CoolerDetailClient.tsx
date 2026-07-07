"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { MODELS, PHONE, PHONE_DISPLAY, WA_BASE, coolerName, type CoolerModel } from "@/data/air-coolers";
import { CoolerIllustration, EnquireModal, getSpecRows } from "../AirCoolersClient";

export default function CoolerDetailClient({ model, initialCap }: { model: CoolerModel; initialCap: number | null }) {
  const [capacity, setCapacity] = useState<number>(
    initialCap && model.capacities.includes(initialCap) ? initialCap : model.capacities[0]
  );
  const [showEnquire, setShowEnquire] = useState(false);

  const cap     = model.capacitySpecs[capacity];
  const name    = coolerName(model, capacity);
  const waText  = `Hi, I'm interested in the ${name}${cap ? ` - model ${cap.modelNumber}` : ""}. Could you share more details?`;
  const waUrl   = `${WA_BASE}?text=${encodeURIComponent(waText)}`;
  const isDark  = model.type === "commercial";
  const specRows = getSpecRows(model, capacity);

  const otherModels = MODELS.filter((m) => m.id !== model.id && m.type === model.type).slice(0, 4);

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 20, paddingBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6e6e73" }}>
          <Link href="/" style={{ color: "#6e6e73", textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <Link href="/products/air-coolers" style={{ color: "#6e6e73", textDecoration: "none" }}>Air Coolers</Link>
          <ChevronRight size={13} />
          <span style={{ color: "#1d1d1f", fontWeight: 500 }}>{name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 24, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48 }}>

          {/* Image */}
          <div style={{
            background: isDark ? "#1d1d1f" : "#e0f2fe",
            borderRadius: 20,
            minHeight: 380,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 32,
            border: "1px solid rgba(0,0,0,0.06)",
          }}>
            <CoolerIllustration model={model} />
          </div>

          {/* Details */}
          <div>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
              background: "rgba(0,113,227,0.1)", color: "#0071e3", padding: "4px 10px", borderRadius: 20, marginBottom: 14,
            }}>
              {model.type === "commercial" ? "Commercial Air Cooler" : "Domestic Cooler"}
            </span>
            <h1 style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", lineHeight: 1.15, marginBottom: 10 }}>
              {name}
            </h1>
            <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 28 }}>
              {cap?.modelNumber} &middot; <span style={{ color: "#0071e3", fontWeight: 600 }}>{capacity}L</span>
            </p>

            {/* Capacity picker */}
            {model.capacities.length > 1 && (
              <>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f", marginBottom: 12 }}>Capacity</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                  {model.capacities.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCapacity(c)}
                      aria-pressed={capacity === c}
                      style={{
                        height: 42,
                        minWidth: 58,
                        padding: "0 14px",
                        borderRadius: 10,
                        border: capacity === c ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)",
                        background: capacity === c ? "#0071e3" : "#fff",
                        color: capacity === c ? "#fff" : "#1d1d1f",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {c}L
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Key stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 16px", marginBottom: 32 }}>
              {[
                { label: "Air Delivery", value: `${model.airDelivery} CMH` },
                { label: "Air Throw",    value: `${cap?.airThrow} ft` },
                { label: "Fan Size",     value: model.fanSize },
                { label: "Motor",        value: model.motor },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: "#fff", borderRadius: 10, padding: "10px 14px", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontSize: 10, fontWeight: 600, color: "#8e8e93", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f" }}>{value}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
              <button
                onClick={() => setShowEnquire(true)}
                style={{ flex: "1 1 160px", height: 48, borderRadius: 980, background: "#0071e3", color: "#fff", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 600 }}
              >
                Enquire Now
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: "1 1 160px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 48, borderRadius: 980, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600 }}
              >
                <WhatsAppIcon size={17} /> WhatsApp
              </a>
            </div>
            <a
              href={`tel:${PHONE}`}
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#6e6e73", textDecoration: "none", marginBottom: 32 }}
            >
              <Phone size={14} /> Or call us at {PHONE_DISPLAY}
            </a>

            <Link href="/products/air-coolers" style={{ fontSize: 14, color: "#0071e3", fontWeight: 500 }}>
              Browse other air coolers →
            </Link>
          </div>
        </div>

        {/* Full spec table */}
        <div style={{ marginTop: 56, maxWidth: 720 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 16 }}>
            Full Specifications - {capacity}L
          </h2>
          <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", background: "#fff" }}>
            {specRows.map(({ label, value }, i) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", background: i % 2 === 0 ? "#fafafa" : "#fff", borderBottom: i < specRows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{label}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other models */}
      {otherModels.length > 0 && (
        <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 20 }}>
              More {model.type === "commercial" ? "Commercial" : "Domestic"} Coolers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
              {otherModels.map((m) => (
                <Link
                  key={m.id}
                  href={`/products/air-coolers/${m.id}`}
                  style={{ display: "block", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none" }}
                >
                  <div style={{ background: m.type === "commercial" ? "#1d1d1f" : "#e0f2fe", height: 140, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                    <CoolerIllustration model={m} />
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{coolerName(m, m.capacities[0])}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {showEnquire && (
        <EnquireModal model={model} capacity={capacity} onClose={() => setShowEnquire(false)} />
      )}
    </main>
  );
}

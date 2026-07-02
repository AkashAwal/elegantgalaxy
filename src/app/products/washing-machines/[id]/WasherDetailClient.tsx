"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import { MODELS, PHONE, PHONE_DISPLAY, WA_BASE, TYPE_LABEL, type WasherModel } from "@/data/washing-machines";
import { WasherIllustration, EnquireModal, SPEC_ROWS, formatSpecValue } from "../WashingMachinesClient";

export default function WasherDetailClient({ model }: { model: WasherModel }) {
  const [showEnquire, setShowEnquire] = useState(false);

  const waText = `Hi, I'm interested in the ${model.name} — model ${model.modelNumber}. Could you share more details?`;
  const waUrl  = `${WA_BASE}?text=${encodeURIComponent(waText)}`;

  const otherModels = MODELS.filter((m) => m.id !== model.id && m.type === model.type).slice(0, 4);

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 20, paddingBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6e6e73" }}>
          <Link href="/" style={{ color: "#6e6e73", textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <Link href="/products/washing-machines" style={{ color: "#6e6e73", textDecoration: "none" }}>Washing Machines</Link>
          <ChevronRight size={13} />
          <span style={{ color: "#1d1d1f", fontWeight: 500 }}>{model.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 24, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48 }}>

          {/* Image */}
          <div style={{
            background: "#f0f0f5",
            borderRadius: 20,
            minHeight: 380,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 32,
            border: "1px solid rgba(0,0,0,0.06)",
          }}>
            <WasherIllustration model={model} />
          </div>

          {/* Details */}
          <div>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
              background: "rgba(0,113,227,0.1)", color: "#0071e3", padding: "4px 10px", borderRadius: 20, marginBottom: 14,
            }}>
              {TYPE_LABEL[model.type]}
            </span>
            <h1 style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", lineHeight: 1.15, marginBottom: 10 }}>
              {model.name}
            </h1>
            <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 28 }}>
              {model.modelNumber} &middot; <span style={{ color: "#0071e3", fontWeight: 600 }}>{model.capacity}kg</span>
            </p>

            {/* Key stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 16px", marginBottom: 32 }}>
              {[
                { label: "Spin Speed",    value: `${model.spinSpeed} RPM` },
                { label: "Energy Rating", value: model.energyRating },
                { label: "Wash Programs", value: `${model.washPrograms}` },
                { label: "Motor",         value: model.motor },
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
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
            <a
              href={`tel:${PHONE}`}
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#6e6e73", textDecoration: "none", marginBottom: 32 }}
            >
              <Phone size={14} /> Or call us at {PHONE_DISPLAY}
            </a>

            <Link href="/products/washing-machines/compare" style={{ fontSize: 14, color: "#0071e3", fontWeight: 500 }}>
              Compare with other washing machines →
            </Link>
          </div>
        </div>

        {/* Full spec table */}
        <div style={{ marginTop: 56, maxWidth: 720 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 16 }}>Full Specifications</h2>
          <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", background: "#fff" }}>
            {SPEC_ROWS.map(({ label, key }, i) => (
              <div key={key} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", background: i % 2 === 0 ? "#fafafa" : "#fff", borderBottom: i < SPEC_ROWS.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{label}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{formatSpecValue(model, key)}</span>
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
              More {TYPE_LABEL[model.type]} Washers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
              {otherModels.map((m) => (
                <Link
                  key={m.id}
                  href={`/products/washing-machines/${m.id}`}
                  style={{ display: "block", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none" }}
                >
                  <div style={{ background: "#f0f0f5", height: 140, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                    <WasherIllustration model={m} />
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{m.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {showEnquire && (
        <EnquireModal model={model} onClose={() => setShowEnquire(false)} />
      )}
    </main>
  );
}

"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, X, ChevronDown, ChevronUp } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SearchParamSync from "@/components/SearchParamSync";

// ── SVG Illustrations ─────────────────────────────────────────────────────────

function SpiralCooler() {
  return (
    <svg viewBox="0 0 110 210" width={88} height={168} fill="none" aria-hidden>
      <rect x="4" y="140" width="102" height="48" rx="7" fill="#111113" />
      <rect x="10" y="8" width="90" height="138" rx="6" fill="#2c2c2e" />
      <rect x="16" y="14" width="78" height="126" rx="4" fill="#3a3a3c" />
      <rect x="10" y="14" width="6" height="126" fill="#252527" />
      <rect x="94" y="14" width="6" height="126" fill="#252527" />
      {/* Top control panel */}
      <rect x="16" y="14" width="78" height="18" rx="4" fill="#2a2a2c" />
      <circle cx="36" cy="23" r="3" fill="#636366" />
      <circle cx="48" cy="23" r="3" fill="#636366" />
      <circle cx="60" cy="23" r="3" fill="#636366" />
      <rect x="70" y="19" width="18" height="8" rx="4" fill="#444" />
      {/* Circular fan grill */}
      <circle cx="55" cy="80" r="38" fill="#1d1d1f" />
      <circle cx="55" cy="80" r="33" fill="none" stroke="#555" strokeWidth="1.5" />
      <circle cx="55" cy="80" r="25" fill="none" stroke="#555" strokeWidth="1.5" />
      <circle cx="55" cy="80" r="17" fill="none" stroke="#555" strokeWidth="1.5" />
      <circle cx="55" cy="80" r="9" fill="none" stroke="#555" strokeWidth="1.5" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (Math.PI * deg) / 180;
        return (
          <line
            key={deg}
            x1={55} y1={80}
            x2={55 + Math.cos(rad) * 33}
            y2={80 + Math.sin(rad) * 33}
            stroke="#555" strokeWidth="0.8"
          />
        );
      })}
      <circle cx="55" cy="80" r="4" fill="#666" />
      <circle cx="55" cy="80" r="38" fill="none" stroke="#666" strokeWidth="2.5" />
      {/* Brand strip */}
      <rect x="20" y="124" width="70" height="10" rx="2" fill="#1d1d1f" />
      <rect x="26" y="126" width="28" height="6" rx="2" fill="#555" />
      {/* Handle hooks */}
      <rect x="97" y="40" width="7" height="22" rx="3.5" fill="#444" />
      <rect x="97" y="72" width="7" height="22" rx="3.5" fill="#444" />
      {/* Wheels */}
      <circle cx="22" cy="181" r="6" fill="#555" />
      <circle cx="88" cy="181" r="6" fill="#555" />
      <circle cx="22" cy="181" r="3" fill="#333" />
      <circle cx="88" cy="181" r="3" fill="#333" />
    </svg>
  );
}

function LouverCooler() {
  return (
    <svg viewBox="0 0 110 210" width={88} height={168} fill="none" aria-hidden>
      <rect x="4" y="140" width="102" height="48" rx="7" fill="#111113" />
      <rect x="10" y="8" width="90" height="138" rx="6" fill="#2c2c2e" />
      <rect x="16" y="14" width="78" height="126" rx="4" fill="#3a3a3c" />
      <rect x="10" y="14" width="6" height="126" fill="#252527" />
      <rect x="94" y="14" width="6" height="126" fill="#252527" />
      {/* Top control panel */}
      <rect x="16" y="14" width="78" height="18" rx="4" fill="#2a2a2c" />
      <circle cx="36" cy="23" r="3" fill="#636366" />
      <circle cx="48" cy="23" r="3" fill="#636366" />
      <circle cx="60" cy="23" r="3" fill="#636366" />
      <rect x="70" y="19" width="18" height="8" rx="4" fill="#444" />
      {/* Louver slats panel */}
      <rect x="22" y="36" width="66" height="90" rx="3" fill="#1d1d1f" />
      {Array.from({ length: 11 }, (_, i) => (
        <rect key={i} x="22" y={36 + i * 8} width="66" height="5" rx="2" fill="#444" />
      ))}
      {/* Fan hub hint */}
      <circle cx="55" cy="81" r="7" fill="#555" />
      {/* Handle hooks */}
      <rect x="97" y="40" width="7" height="22" rx="3.5" fill="#444" />
      <rect x="97" y="72" width="7" height="22" rx="3.5" fill="#444" />
      {/* Brand strip */}
      <rect x="20" y="130" width="70" height="8" rx="2" fill="#1d1d1f" />
      <rect x="26" y="132" width="28" height="4" rx="2" fill="#555" />
      {/* Wheels */}
      <circle cx="22" cy="181" r="6" fill="#555" />
      <circle cx="88" cy="181" r="6" fill="#555" />
      <circle cx="22" cy="181" r="3" fill="#333" />
      <circle cx="88" cy="181" r="3" fill="#333" />
    </svg>
  );
}

function DomesticCoolerSvg() {
  return (
    <svg viewBox="0 0 200 172" width={160} height={138} fill="none" aria-hidden>
      <rect x="8" y="16" width="184" height="130" rx="12" fill="#e5e5ea" />
      <rect x="8" y="16" width="184" height="28" rx="12" fill="#d1d1d6" />
      <circle cx="96" cy="30" r="4" fill="#8e8e93" />
      <circle cx="110" cy="30" r="4" fill="#8e8e93" />
      <circle cx="124" cy="30" r="4" fill="#8e8e93" />
      {/* Louver panel */}
      <rect x="16" y="50" width="74" height="88" rx="6" fill="#d1d1d6" />
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x="20" y={56 + i * 10} width="66" height="6" rx="3" fill="#bcbcc2" />
      ))}
      {/* Fan grill */}
      <circle cx="148" cy="94" r="42" fill="#c7c7cc" />
      <circle cx="148" cy="94" r="34" fill="none" stroke="#aaa" strokeWidth="1.5" />
      <circle cx="148" cy="94" r="24" fill="none" stroke="#aaa" strokeWidth="1.5" />
      <circle cx="148" cy="94" r="14" fill="none" stroke="#aaa" strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (Math.PI * deg) / 180;
        return (
          <line
            key={deg}
            x1={148} y1={94}
            x2={148 + Math.cos(rad) * 42}
            y2={94 + Math.sin(rad) * 42}
            stroke="#aaa" strokeWidth="1.5"
          />
        );
      })}
      <circle cx="148" cy="94" r="5" fill="#8e8e93" />
      <circle cx="148" cy="94" r="42" fill="none" stroke="#aaa" strokeWidth="2.5" />
      <rect x="8" y="144" width="184" height="8" rx="4" fill="#c7c7cc" />
      {/* Wheels */}
      <circle cx="36" cy="158" r="8" fill="#8e8e93" />
      <circle cx="164" cy="158" r="8" fill="#8e8e93" />
      <circle cx="36" cy="158" r="4" fill="#aeaeb2" />
      <circle cx="164" cy="158" r="4" fill="#aeaeb2" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

import {
  MODELS, CAPACITIES, PHONE, PHONE_DISPLAY, WA_BASE, TYPE_IMAGES,
  coolerName,
  type FrontGrill, type CoolerType, type CoolerModel,
} from "@/data/air-coolers";
export { MODELS, CAPACITIES, PHONE, PHONE_DISPLAY, WA_BASE, TYPE_IMAGES, coolerName };
export type { FrontGrill, CoolerType, CoolerModel };

// ── Illustration ──────────────────────────────────────────────────────────────

export function CoolerIllustration({ model }: { model: CoolerModel }) {
  if (model.images) {
    return (
      <div style={{ width: "100%", maxWidth: 100 }}>
        <Image
          src={model.images.front}
          alt={`${model.name} Air Cooler`}
          width={476}
          height={761}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }
  if (model.type !== "commercial") return <DomesticCoolerSvg />;
  return model.frontGrill === "spiral" ? <SpiralCooler /> : <LouverCooler />;
}

// ── Spec rows ─────────────────────────────────────────────────────────────────

export function getSpecRows(model: CoolerModel, capacity: number): Array<{ label: string; value: string }> {
  const cap = model.capacitySpecs[capacity];
  if (!cap) return [];
  return [
    { label: "Model Number",       value: cap.modelNumber },
    { label: "Type",               value: model.type === "commercial" ? "Commercial Air Cooler" : "Domestic Cooler" },
    { label: "Capacity",           value: `${capacity} L` },
    { label: "Body Material",      value: model.bodyMaterial },
    { label: "Motor",              value: model.motor },
    { label: "Motor Rotation",     value: model.motorRotation },
    { label: "Pump Wattage",       value: `${cap.pumpWattage} W` },
    { label: "Fan / Blower Size",  value: model.fanSize },
    { label: "RPM",                value: `${model.rpm} RPM` },
    { label: "Air Delivery (CMH)", value: `${model.airDelivery} CMH` },
    { label: "Air Throw (ft)",     value: `${cap.airThrow} ft` },
    { label: "Honeycomb Type",     value: model.honeycombSpec },
    { label: "Honeycomb Sides",    value: `${model.honeycombSides} Side${model.honeycombSides > 1 ? "s" : ""}` },
    { label: "Power Cord",         value: model.cordLength },
    { label: "Blade Material",     value: model.bladeMaterial },
    { label: "Motor Mounting",     value: model.motorMount },
    { label: "Dimensions (W×L×H)", value: cap.dimensions },
    { label: "Packaging (W×L×H)", value: cap.packDimensions },
  ];
}

// ── Enquire Modal ─────────────────────────────────────────────────────────────

export function EnquireModal({ model, capacity, onClose }: { model: CoolerModel; capacity: number; onClose: () => void }) {
  const cap    = model.capacitySpecs[capacity];
  const name   = coolerName(model, capacity);
  const text   = `Hi, I'm interested in the ${name}${cap ? ` - model ${cap.modelNumber}` : ""}. Could you share more details?`;
  const waUrl  = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  const formUrl = `/contact?enquire=${encodeURIComponent(name)}&product=air-cooler&model=${encodeURIComponent(model.id)}&cap=${capacity}`;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.52)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={onClose}
    >
      <div
        style={{ background: "#fff", borderRadius: 20, padding: "32px 28px 28px", width: "100%", maxWidth: 400, position: "relative" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: "none", cursor: "pointer", color: "#6e6e73", padding: 4, lineHeight: 0 }}>
          <X size={18} strokeWidth={1.75} />
        </button>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 8 }}>Enquire About</p>
        <p style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.02em" }}>
          {name}
        </p>
        <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 28 }}>{cap?.modelNumber} &middot; {model.type === "commercial" ? "Commercial" : "Domestic"} Cooler</p>

        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: "#25D366", color: "#fff", textDecoration: "none", marginBottom: 10 }}>
          <WhatsAppIcon size={20} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>WhatsApp Us</div>
            <div style={{ fontSize: 12, opacity: 0.88, marginTop: 1 }}>Quick reply during business hours</div>
          </div>
        </a>

        <a href={`tel:${PHONE}`} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: "#0071e3", color: "#fff", textDecoration: "none", marginBottom: 10 }}>
          <Phone size={20} strokeWidth={2} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Call Us</div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 1 }}>{PHONE_DISPLAY} &middot; Mon–Sat, 9 AM–6 PM</div>
          </div>
        </a>

        <Link href={formUrl} onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, border: "1.5px solid rgba(0,0,0,0.12)", color: "#1d1d1f", textDecoration: "none" }}>
          <FileText size={20} strokeWidth={1.75} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Contact Form</div>
            <div style={{ fontSize: 12, color: "#6e6e73", marginTop: 1 }}>Send us a detailed message</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

// ── Cooler Card ───────────────────────────────────────────────────────────────

type Entry = { model: CoolerModel; capacity: number };

function CoolerCard({
  model,
  capacity,
  onEnquire,
}: {
  model:     CoolerModel;
  capacity:  number;
  onEnquire: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isDark = model.type === "commercial";
  const cap    = model.capacitySpecs[capacity];
  const specRows = getSpecRows(model, capacity);

  return (
    <div
      style={{
        background:   "#fff",
        borderRadius: 18,
        position:     "relative",
        zIndex:       expanded ? 20 : 1,
        boxShadow:    "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      {/* Illustration — clips top corners independently */}
      <div style={{
        background:     isDark ? "#1d1d1f" : "#e0f2fe",
        borderRadius:   "18px 18px 0 0",
        overflow:       "hidden",
        padding:        "28px 24px 20px",
        display:        "flex",
        justifyContent: "center",
        alignItems:     "center",
        minHeight:      200,
        position:       "relative",
      }}>
        {/* Honeycomb sides badge */}
        <span style={{
          position:      "absolute",
          top:           12,
          left:          12,
          fontSize:      10,
          fontWeight:    700,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          background:    isDark ? "rgba(255,255,255,0.1)" : "rgba(0,113,227,0.12)",
          color:         isDark ? "rgba(255,255,255,0.8)" : "#0071e3",
          padding:       "3px 8px",
          borderRadius:  20,
        }}>
          {model.honeycombSides} Side
        </span>
        {/* Front grill type badge */}
        <span style={{
          position:      "absolute",
          top:           12,
          right:         12,
          fontSize:      10,
          fontWeight:    700,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          background:    isDark ? "rgba(255,255,255,0.1)" : "rgba(0,113,227,0.12)",
          color:         isDark ? "rgba(255,255,255,0.8)" : "#0071e3",
          padding:       "3px 8px",
          borderRadius:  20,
        }}>
          {model.frontGrill === "spiral" ? "Spiral Grill" : "Louver Grill"}
        </span>

        {model.type === "commercial"
          ? model.frontGrill === "spiral" ? <SpiralCooler /> : <LouverCooler />
          : <DomesticCoolerSvg />
        }
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 16px" }}>
        <p style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 4 }}>
          {model.type === "commercial" ? "Commercial Air Cooler" : "Domestic Cooler"}
          {" · "}
          <span style={{ color: "#0071e3", fontWeight: 600 }}>{capacity}L</span>
        </p>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 2, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
          {coolerName(model, capacity)}
        </p>
        <p style={{ fontSize: 12, color: "#8e8e93", marginBottom: 14 }}>{cap?.modelNumber}</p>

        {/* Key stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px", marginBottom: 16 }}>
          {[
            { label: "Air Delivery", value: `${model.airDelivery} CMH` },
            { label: "Air Throw",    value: `${cap?.airThrow} ft` },
            { label: "Fan Size",     value: model.fanSize },
            { label: "Motor",        value: model.motor },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#8e8e93", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 1 }}>{label}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Capacity picker (when this line ships in more than one size) */}
        {model.capacities.length > 1 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
            {model.capacities.map((c) => (
              <Link
                key={c}
                href={`/products/air-coolers/${model.id}?cap=${c}`}
                style={{
                  height: 30, minWidth: 44, padding: "0 10px", borderRadius: 8,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  border: c === capacity ? "2px solid #0071e3" : "1.5px solid rgba(0,0,0,0.12)",
                  background: c === capacity ? "#0071e3" : "#fff",
                  color: c === capacity ? "#fff" : "#1d1d1f",
                  fontSize: 12.5, fontWeight: 600, textDecoration: "none",
                }}
              >
                {c}L
              </Link>
            ))}
          </div>
        )}

        {/* Expand specs — overlay anchor */}
        <div style={{ position: "relative", marginBottom: 12 }}>
          <button
            onClick={() => setExpanded((p) => !p)}
            style={{
              width:          "100%",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "space-between",
              padding:        "8px 12px",
              borderRadius:   10,
              border:         "1.5px solid rgba(0,0,0,0.1)",
              background:     "#f5f5f7",
              cursor:         "pointer",
              fontSize:       13,
              fontWeight:     500,
              color:          "#1d1d1f",
            }}
          >
            <span>{expanded ? "Hide Specifications" : "View Full Specifications"}</span>
            {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          {/* Full spec table — always in DOM, animated with opacity + transform */}
          <div style={{
            position:      "absolute",
            top:           "calc(100% + 4px)",
            left:          0,
            right:         0,
            zIndex:        30,
            background:    "#fff",
            borderRadius:  10,
            border:        "1px solid rgba(0,0,0,0.1)",
            boxShadow:     "0 8px 28px rgba(0,0,0,0.14)",
            opacity:       expanded ? 1 : 0,
            transform:     expanded ? "translateY(0)" : "translateY(-6px)",
            visibility:    expanded ? "visible" : "hidden",
            transition:    "opacity 0.22s ease, transform 0.22s ease, visibility 0.22s",
            pointerEvents: expanded ? "auto" : "none",
          }}>
            {specRows.map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  display:        "flex",
                  justifyContent: "space-between",
                  alignItems:     "center",
                  padding:        "7px 12px",
                  background:     i % 2 === 0 ? "#fafafa" : "#fff",
                  borderBottom:   i < specRows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                  gap:            8,
                }}
              >
                <span style={{ fontSize: 12, color: "#6e6e73", flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#1d1d1f", textAlign: "right" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <Link
            href={`/products/air-coolers/${model.id}?cap=${capacity}`}
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: 42, borderRadius: 980, background: "#0071e3", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 600 }}
          >
            View Now
          </Link>
          <button
            onClick={onEnquire}
            style={{
              flex:           1,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              height:         42,
              borderRadius:   980,
              background:     "transparent",
              color:          "#0071e3",
              border:         "1.5px solid #0071e3",
              cursor:         "pointer",
              fontSize:       14,
              fontWeight:     600,
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AirCoolersClient() {
  const [typeFilter,    setTypeFilter]    = useState<CoolerType | null>(null);
  const [capFilter,     setCapFilter]     = useState<number | null>(null);
  const [modelFilter,   setModelFilter]   = useState<string | null>(null);
  const [enquireTarget, setEnquireTarget] = useState<Entry | null>(null);

  const syncFilters = useCallback((params: URLSearchParams) => {
    const type = params.get("type");
    if (type === "commercial" || type === "domestic") setTypeFilter(type);
    const cap = parseInt(params.get("cap") ?? "", 10);
    if (!Number.isNaN(cap)) setCapFilter(cap);
  }, []);

  const allEntries: Entry[] = [];
  for (const model of MODELS) {
    for (const capacity of model.capacities) {
      allEntries.push({ model, capacity });
    }
  }

  const visible = allEntries.filter(({ model, capacity }) => {
    if (typeFilter  && model.type !== typeFilter) return false;
    if (capFilter    && capacity !== capFilter)   return false;
    if (modelFilter  && model.id !== modelFilter) return false;
    return true;
  });

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>
      <SearchParamSync onParams={syncFilters} />

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>Air Coolers</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Stay Cool, Work Smart.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 540 }}>
            Commercial and domestic coolers built for Indian summers - high air delivery, honeycomb cooling pads, and durable PPCP bodies.
          </p>
        </div>
      </section>

      {/* Capacity + Model selector */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingBottom: 36 }}>
          <div className="flex flex-col lg:flex-row lg:gap-10">

            {/* Capacities */}
            <div style={{ flex: "1 1 0%", minWidth: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16 }}>Select a Capacity</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <button onClick={() => setCapFilter(null)} aria-pressed={capFilter === null} style={{ height: 46, minWidth: 60, padding: "0 16px", borderRadius: 12, border: capFilter === null ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: capFilter === null ? "#0071e3" : "#fff", color: capFilter === null ? "#fff" : "#1d1d1f", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.15s ease" }}>
                  All
                </button>
                {CAPACITIES.map((cap) => {
                  const isSelected = capFilter === cap;
                  return (
                    <button key={cap} onClick={() => setCapFilter(isSelected ? null : cap)} aria-pressed={isSelected}
                      style={{ height: 46, minWidth: 60, padding: "0 16px", borderRadius: 12, border: isSelected ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: isSelected ? "#0071e3" : "#fff", color: isSelected ? "#fff" : "#1d1d1f", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.15s ease" }}
                    >
                      {cap}L
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:block" style={{ width: 1, background: "rgba(0,0,0,0.08)", alignSelf: "stretch", flexShrink: 0 }} />

            {/* Model filter */}
            <div style={{ flex: "1 1 0%", minWidth: 0 }} className="mt-6 lg:mt-0">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16 }}>Filter by Model</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <button onClick={() => setModelFilter(null)} aria-pressed={modelFilter === null} style={{ height: 40, padding: "0 16px", borderRadius: 980, border: modelFilter === null ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: modelFilter === null ? "#0071e3" : "#fff", color: modelFilter === null ? "#fff" : "#1d1d1f", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s ease" }}>
                  All Models
                </button>
                {MODELS.map((m) => {
                  const isActive = modelFilter === m.id;
                  return (
                    <button key={m.id} onClick={() => setModelFilter(isActive ? null : m.id)} aria-pressed={isActive}
                      style={{ height: 40, padding: "0 16px", borderRadius: 980, border: isActive ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: isActive ? "#0071e3" : "#fff", color: isActive ? "#fff" : "#1d1d1f", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s ease", whiteSpace: "nowrap" }}
                    >
                      {m.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          {visible.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: 56, paddingBottom: 56 }}>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1d1d1f", marginBottom: 10, letterSpacing: "-0.02em" }}>
                No models match this selection
              </p>
              <p style={{ fontSize: 16, color: "#6e6e73" }}>Try a different capacity or model.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: 20 }}>
              {visible.map(({ model, capacity }) => (
                <CoolerCard
                  key={`${model.id}::${capacity}`}
                  model={model}
                  capacity={capacity}
                  onEnquire={() => setEnquireTarget({ model, capacity })}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {enquireTarget && (
        <EnquireModal
          model={enquireTarget.model}
          capacity={enquireTarget.capacity}
          onClose={() => setEnquireTarget(null)}
        />
      )}
    </main>
  );
}

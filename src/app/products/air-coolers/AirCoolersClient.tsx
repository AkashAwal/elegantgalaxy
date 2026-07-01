"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText, X, ChevronDown, ChevronUp } from "lucide-react";

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

function DesertCoolerSvg() {
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

type FrontGrill = "spiral" | "louver";
type CoolerType = "commercial" | "desert";

interface CoolerModel {
  id: string;
  modelNumber: string;
  name: string;
  type: CoolerType;
  frontGrill: FrontGrill;
  honeycombSides: 1 | 3;
  capacity: number;
  bodyMaterial: string;
  motor: string;
  motorRotation: string;
  pumpWattage: number;
  fanSize: string;
  rpm: number;
  airDelivery: number;
  airThrow: number;
  honeycombSpec: string;
  cordLength: string;
  bladeMaterial: string;
  motorMount: string;
  dimensions: string;
  packDimensions: string;
}

const COMMERCIAL_BASE = {
  type: "commercial" as CoolerType,
  bodyMaterial: "PPCP",
  motor: "120W Nirosha",
  motorRotation: "ACW (Load 300W)",
  rpm: 1350,
  honeycombSpec: "7090",
  cordLength: "2.5M",
  bladeMaterial: "Aluminium",
  motorMount: "CLAMP",
};

const DESERT_BASE = {
  type: "desert" as CoolerType,
  honeycombSides: 3 as const,
  bodyMaterial: "PPCP",
  motor: "93W Nirosha",
  motorRotation: "CW (Load 180W)",
  pumpWattage: 18,
  fanSize: '16"',
  rpm: 1350,
  airDelivery: 5000,
  honeycombSpec: "7090",
  cordLength: "2.5M",
  bladeMaterial: "Plastic ABS",
  motorMount: "PP CP",
};

const MODELS: CoolerModel[] = [
  // ── 100L Commercial ───────────────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-100-1",
    modelNumber: "SFGM32-H1-100L DG",
    name: "ICE COOL",
    frontGrill: "spiral",
    honeycombSides: 1,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-plus-100",
    modelNumber: "SFGM32-H3-100L-DG",
    name: "ICE COOL+",
    frontGrill: "spiral",
    honeycombSides: 3,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-100-1",
    modelNumber: "LFGM32-H1-100L-DG",
    name: "ICE STORM",
    frontGrill: "louver",
    honeycombSides: 1,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-plus-100",
    modelNumber: "LFGM32-H3-100L-DG",
    name: "ICE STORM+",
    frontGrill: "louver",
    honeycombSides: 3,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  // ── 130L Commercial ───────────────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-130-1",
    modelNumber: "SFGM35-H1-130L DG",
    name: "ICE COOL",
    frontGrill: "spiral",
    honeycombSides: 1,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-plus-130",
    modelNumber: "SFGM35-H3-130L-DG",
    name: "ICE COOL+",
    frontGrill: "spiral",
    honeycombSides: 3,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-130-1",
    modelNumber: "LFGM35-H1-130L-DG",
    name: "ICE STORM",
    frontGrill: "louver",
    honeycombSides: 1,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-plus-130",
    modelNumber: "LFGM35-H3-130L-DG",
    name: "ICE STORM+",
    frontGrill: "louver",
    honeycombSides: 3,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  // ── 160L Commercial ───────────────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-160-1",
    modelNumber: "SFGM35-H1-160L DG",
    name: "ICE COOL",
    frontGrill: "spiral",
    honeycombSides: 1,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-plus-160",
    modelNumber: "SFGM35-H3-160L-DG",
    name: "ICE COOL+",
    frontGrill: "spiral",
    honeycombSides: 3,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-160-1",
    modelNumber: "LFGM35-H1-160L-DG",
    name: "ICE STORM",
    frontGrill: "louver",
    honeycombSides: 1,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 50,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-plus-160",
    modelNumber: "LFGM35-H3-160L-DG",
    name: "ICE STORM+",
    frontGrill: "louver",
    honeycombSides: 3,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  // ── Desert Coolers ────────────────────────────────────────────────────────
  {
    ...DESERT_BASE,
    id: "d-ice-wind-90",
    modelNumber: "PP90H",
    name: "ICE WIND",
    frontGrill: "louver",
    capacity: 90,
    airThrow: 50,
    dimensions: "660 × 520 × 1200 mm",
    packDimensions: "735 × 565 × 1225 mm",
  },
  {
    ...DESERT_BASE,
    id: "d-ice-wind-plus-110",
    modelNumber: "GL90H",
    name: "ICE WIND+",
    frontGrill: "louver",
    capacity: 110,
    airThrow: 50,
    dimensions: "660 × 520 × 1260 mm",
    packDimensions: "735 × 565 × 1285 mm",
  },
  {
    ...DESERT_BASE,
    id: "d-wind-storm-90",
    modelNumber: "PP90F",
    name: "WIND STORM",
    frontGrill: "louver",
    capacity: 90,
    airThrow: 55,
    dimensions: "660 × 520 × 1200 mm",
    packDimensions: "735 × 565 × 1225 mm",
  },
  {
    ...DESERT_BASE,
    id: "d-wind-storm-plus",
    modelNumber: "GL90F",
    name: "WIND STORM+",
    frontGrill: "louver",
    capacity: 110,
    airThrow: 55,
    dimensions: "660 × 520 × 1260 mm",
    packDimensions: "735 × 565 × 1285 mm",
  },
];

const CAPACITIES = [100, 130, 160, 90, 110];
const PHONE         = "+919540699333";
const PHONE_DISPLAY = "+91 95406 99333";
const WA_BASE       = `https://wa.me/${PHONE}`;

// ── Enquire Modal ─────────────────────────────────────────────────────────────

function EnquireModal({ model, onClose }: { model: CoolerModel; onClose: () => void }) {
  const text   = `Hi, I'm interested in the Elegant Galaxy ${model.name} (${model.capacity}L) Air Cooler — model ${model.modelNumber}. Could you share more details?`;
  const waUrl  = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  const formUrl = `/contact?product=air-cooler&model=${encodeURIComponent(model.id)}`;

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
          {model.name} · {model.capacity}L
        </p>
        <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 28 }}>{model.modelNumber} &middot; {model.type === "commercial" ? "Commercial" : "Desert"} Cooler</p>

        <a href={`tel:${PHONE}`} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: "#0071e3", color: "#fff", textDecoration: "none", marginBottom: 10 }}>
          <Phone size={20} strokeWidth={2} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Call Us</div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 1 }}>{PHONE_DISPLAY} &middot; Mon–Sat, 9 AM–6 PM</div>
          </div>
        </a>

        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: "#25D366", color: "#fff", textDecoration: "none", marginBottom: 10 }}>
          <MessageCircle size={20} strokeWidth={2} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>WhatsApp Us</div>
            <div style={{ fontSize: 12, opacity: 0.88, marginTop: 1 }}>Quick reply during business hours</div>
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

// ── Spec Table ────────────────────────────────────────────────────────────────

const SPEC_ROWS: Array<{ label: string; key: keyof CoolerModel }> = [
  { label: "Model Number",       key: "modelNumber" },
  { label: "Type",               key: "type" },
  { label: "Capacity",           key: "capacity" },
  { label: "Body Material",      key: "bodyMaterial" },
  { label: "Motor",              key: "motor" },
  { label: "Motor Rotation",     key: "motorRotation" },
  { label: "Pump Wattage",       key: "pumpWattage" },
  { label: "Fan / Blower Size",  key: "fanSize" },
  { label: "RPM",                key: "rpm" },
  { label: "Air Delivery (CMH)", key: "airDelivery" },
  { label: "Air Throw (ft)",     key: "airThrow" },
  { label: "Honeycomb Type",     key: "honeycombSpec" },
  { label: "Honeycomb Sides",    key: "honeycombSides" },
  { label: "Power Cord",         key: "cordLength" },
  { label: "Blade Material",     key: "bladeMaterial" },
  { label: "Motor Mounting",     key: "motorMount" },
  { label: "Dimensions (W×L×H)", key: "dimensions" },
  { label: "Packaging (W×L×H)", key: "packDimensions" },
];

function formatSpecValue(model: CoolerModel, key: keyof CoolerModel): string {
  const v = model[key];
  if (key === "type") return model.type === "commercial" ? "Commercial Air Cooler" : "Desert Cooler";
  if (key === "capacity") return `${v} L`;
  if (key === "pumpWattage") return `${v} W`;
  if (key === "rpm") return `${v} RPM`;
  if (key === "airDelivery") return `${v} CMH`;
  if (key === "airThrow") return `${v} ft`;
  if (key === "honeycombSides") return `${v} Side${Number(v) > 1 ? "s" : ""}`;
  return String(v);
}

// ── Cooler Card ───────────────────────────────────────────────────────────────

function CoolerCard({ model, onEnquire }: { model: CoolerModel; onEnquire: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const isDark = model.type === "commercial";

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
          : <DesertCoolerSvg />
        }
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 16px" }}>
        <p style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 4 }}>
          {model.type === "commercial" ? "Commercial Air Cooler" : "Desert Cooler"}
          {" · "}
          <span style={{ color: "#0071e3", fontWeight: 600 }}>{model.capacity}L</span>
        </p>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 2, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
          {model.name}
        </p>
        <p style={{ fontSize: 12, color: "#8e8e93", marginBottom: 14 }}>{model.modelNumber}</p>

        {/* Key stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px", marginBottom: 16 }}>
          {[
            { label: "Air Delivery", value: `${model.airDelivery} CMH` },
            { label: "Air Throw",    value: `${model.airThrow} ft` },
            { label: "Fan Size",     value: model.fanSize },
            { label: "Motor",        value: model.motor },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#8e8e93", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 1 }}>{label}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{value}</p>
            </div>
          ))}
        </div>

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
            {SPEC_ROWS.map(({ label, key }, i) => (
              <div
                key={key}
                style={{
                  display:        "flex",
                  justifyContent: "space-between",
                  alignItems:     "center",
                  padding:        "7px 12px",
                  background:     i % 2 === 0 ? "#fafafa" : "#fff",
                  borderBottom:   i < SPEC_ROWS.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                  gap:            8,
                }}
              >
                <span style={{ fontSize: 12, color: "#6e6e73", flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#1d1d1f", textAlign: "right" }}>
                  {formatSpecValue(model, key)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onEnquire}
          style={{
            width:          "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            height:         42,
            borderRadius:   980,
            background:     "#0071e3",
            color:          "#fff",
            border:         "none",
            cursor:         "pointer",
            fontSize:       14,
            fontWeight:     600,
          }}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AirCoolersClient({
  initialType = null,
  initialCap  = null,
}: {
  initialType?: string | null;
  initialCap?:  number | null;
}) {
  const [typeFilter, setTypeFilter] = useState<CoolerType | null>(
    initialType === "commercial" || initialType === "desert" ? initialType : null
  );
  const [capFilter,  setCapFilter]  = useState<number | null>(initialCap);
  const [enquireTarget, setEnquireTarget] = useState<CoolerModel | null>(null);

  const visible = MODELS.filter((m) => {
    if (typeFilter && m.type !== typeFilter) return false;
    if (capFilter  && m.capacity !== capFilter) return false;
    return true;
  });

  const pillBase: React.CSSProperties = {
    height:    40,
    padding:   "0 18px",
    borderRadius: 980,
    border:    "2px solid rgba(0,0,0,0.12)",
    background: "#fff",
    color:     "#1d1d1f",
    fontSize:  13,
    fontWeight: 600,
    cursor:    "pointer",
    transition: "all 0.15s ease",
    whiteSpace: "nowrap",
  };
  const pillActive: React.CSSProperties = {
    ...pillBase,
    border:     "2px solid #0071e3",
    background: "#0071e3",
    color:      "#fff",
  };

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
            Commercial and desert coolers built for Indian summers — high air delivery, honeycomb cooling pads, and durable PPCP bodies.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingBottom: 36 }}>
          <div className="flex flex-col lg:flex-row lg:gap-10">

            {/* Type filter */}
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16 }}>Cooler Type</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {([null, "commercial", "desert"] as const).map((t) => (
                  <button
                    key={String(t)}
                    onClick={() => setTypeFilter(t)}
                    aria-pressed={typeFilter === t}
                    style={typeFilter === t ? pillActive : pillBase}
                  >
                    {t === null ? "All Types" : t === "commercial" ? "Commercial" : "Desert"}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden lg:block" style={{ width: 1, background: "rgba(0,0,0,0.08)", alignSelf: "stretch", flexShrink: 0 }} />

            {/* Capacity filter */}
            <div className="mt-6 lg:mt-0">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16 }}>Capacity</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <button onClick={() => setCapFilter(null)} aria-pressed={capFilter === null} style={capFilter === null ? pillActive : pillBase}>
                  All
                </button>
                {CAPACITIES.map((cap) => {
                  const available = MODELS.some(
                    (m) => m.capacity === cap && (!typeFilter || m.type === typeFilter)
                  );
                  const isSelected = capFilter === cap;
                  return (
                    <button
                      key={cap}
                      onClick={() => setCapFilter(isSelected ? null : cap)}
                      disabled={!available}
                      aria-pressed={isSelected}
                      style={{
                        ...(isSelected ? pillActive : pillBase),
                        opacity:       !available && !isSelected ? 0.38 : 1,
                        cursor:        available ? "pointer" : "not-allowed",
                        color:         !available && !isSelected ? "#aaa" : isSelected ? "#fff" : "#1d1d1f",
                      }}
                    >
                      {cap}L
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {visible.length > 0 && (
            <p style={{ fontSize: 13, color: "#6e6e73", marginTop: 16 }}>
              {visible.length} model{visible.length !== 1 ? "s" : ""} shown
            </p>
          )}
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
              <p style={{ fontSize: 16, color: "#6e6e73" }}>Try adjusting your filters above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: 20 }}>
              {visible.map((model) => (
                <CoolerCard
                  key={model.id}
                  model={model}
                  onEnquire={() => setEnquireTarget(model)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {enquireTarget && (
        <EnquireModal
          model={enquireTarget}
          onClose={() => setEnquireTarget(null)}
        />
      )}
    </main>
  );
}

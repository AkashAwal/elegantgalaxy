"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, FileText, X, ChevronDown, ChevronUp, Check } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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

import {
  MODELS, CAPACITIES, PHONE, PHONE_DISPLAY, WA_BASE,
  type FrontGrill, type CoolerType, type CoolerModel,
} from "@/data/air-coolers";
export { MODELS, CAPACITIES, PHONE, PHONE_DISPLAY, WA_BASE };
export type { FrontGrill, CoolerType, CoolerModel };

// ── Enquire Modal ─────────────────────────────────────────────────────────────

export function EnquireModal({ model, onClose }: { model: CoolerModel; onClose: () => void }) {
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
          <WhatsAppIcon size={20} />
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

export const SPEC_ROWS: Array<{ label: string; key: keyof CoolerModel }> = [
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

export function formatSpecValue(model: CoolerModel, key: keyof CoolerModel): string {
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

export function CoolerIllustration({ model }: { model: CoolerModel }) {
  if (model.type !== "commercial") return <DesertCoolerSvg />;
  return model.frontGrill === "spiral" ? <SpiralCooler /> : <LouverCooler />;
}

// ── Compare bar (fixed at viewport bottom) ─────────────────────────────────────

function CompareBar({
  models,
  onRemove,
  onClear,
  onCompare,
}: {
  models:    CoolerModel[];
  onRemove:  (id: string) => void;
  onClear:   () => void;
  onCompare: () => void;
}) {
  return (
    <div style={{
      padding:      "12px 18px",
      background:   "#fff",
      border:       "1.5px solid #0071e3",
      borderRadius: 14,
      display:      "flex",
      alignItems:   "center",
      gap:          14,
      boxShadow:    "0 4px 16px rgba(0,113,227,0.1)",
      flexWrap:     "wrap",
    }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "#6e6e73", flexShrink: 0, letterSpacing: "0.04em" }}>
        COMPARING
      </span>

      <div style={{ display: "flex", gap: 8, flex: 1, alignItems: "center", flexWrap: "wrap" }}>
        {models.map((m) => (
          <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px 5px 10px", background: "#eff6ff", borderRadius: 7, border: "1px solid #bfdbfe" }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#1d1d1f" }}>
              {m.name} · {m.capacity}L
            </span>
            <button
              onClick={() => onRemove(m.id)}
              aria-label={`Remove ${m.name} from comparison`}
              style={{ border: "none", background: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", color: "#6e6e73", lineHeight: 1 }}
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          </div>
        ))}
        {models.length < 3 && (
          <span style={{ fontSize: 12, color: "#6e6e73", fontStyle: "italic" }}>
            Add {3 - models.length} more to compare
          </span>
        )}
      </div>

      <button onClick={onClear} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 12, color: "#6e6e73", fontWeight: 500, flexShrink: 0, padding: "0 4px" }}>
        Clear
      </button>
      <button
        onClick={onCompare}
        style={{ padding: "9px 18px", borderRadius: 8, background: "#0071e3", color: "#fff", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 500, flexShrink: 0, letterSpacing: "-0.01em" }}
      >
        Compare {models.length}
      </button>
    </div>
  );
}

// ── Compare modal ─────────────────────────────────────────────────────────────

function CompareModal({
  models,
  onClose,
  onEnquire,
}: {
  models:    CoolerModel[];
  onClose:   () => void;
  onEnquire: (model: CoolerModel) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef  = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const TITLE_ID  = "cooler-compare-modal-title";

  useEffect(() => {
    returnRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    return () => { returnRef.current?.focus(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  };

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.48)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        style={{ background: "#fff", borderRadius: 20, padding: "28px 28px 32px", width: "100%", maxWidth: 900, maxHeight: "88vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h2 id={TITLE_ID} style={{ fontSize: 21, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.015em" }}>
              Compare Air Coolers
            </h2>
            <p style={{ fontSize: 12, color: "#6e6e73", marginTop: 2 }}>{models.length} products selected</p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close comparison"
            style={{ width: 36, height: 36, borderRadius: "50%", border: "none", background: "#f2f2f7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
          >
            <X size={17} color="#1d1d1f" />
          </button>
        </div>

        {/* Columns + spec rows scroll together horizontally on mobile */}
        <div className="overflow-x-auto -mx-1 px-1">
        <div style={{ minWidth: models.length > 1 ? models.length * 200 : undefined }}>
        {/* Columns */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${models.length}, 1fr)`, gap: 16, marginBottom: 24 }}>
          {models.map((m) => (
            <div key={m.id} style={{ borderRadius: 14, border: "1.5px solid #e8e8ed", overflow: "hidden" }}>
              <div style={{
                background:     m.type === "commercial" ? "#1d1d1f" : "#e0f2fe",
                height:         160,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
              }}>
                <CoolerIllustration model={m} />
              </div>
              <div style={{ padding: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#6e6e73", marginBottom: 4 }}>
                  {m.type === "commercial" ? "Commercial" : "Desert"} · <span style={{ color: "#0071e3" }}>{m.capacity}L</span>
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16, lineHeight: 1.3 }}>
                  {m.name}
                </p>
                <button
                  onClick={() => { onClose(); onEnquire(m); }}
                  style={{ display: "block", width: "100%", textAlign: "center", padding: "9px 0", borderRadius: 8, border: "1.5px solid #0071e3", background: "transparent", color: "#0071e3", fontSize: 13, fontWeight: 500, cursor: "pointer" }}
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Spec rows */}
        <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
          {SPEC_ROWS.map(({ label, key }, i) => (
            <div
              key={key}
              style={{
                display:             "grid",
                gridTemplateColumns: `160px repeat(${models.length}, 1fr)`,
                gap:                 8,
                padding:             "9px 14px",
                background:          i % 2 === 0 ? "#fafafa" : "#fff",
                borderBottom:        i < SPEC_ROWS.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "#6e6e73", flexShrink: 0, textAlign: "center" }}>{label}</span>
              {models.map((m) => (
                <span key={m.id} style={{ fontSize: 12, fontWeight: 600, color: "#1d1d1f", textAlign: "center" }}>
                  {formatSpecValue(m, key)}
                </span>
              ))}
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

// ── Cooler Card ───────────────────────────────────────────────────────────────

function CoolerCard({
  model,
  isCompared,
  maxReached,
  onToggleCompare,
  onEnquire,
}: {
  model:           CoolerModel;
  isCompared:      boolean;
  maxReached:      boolean;
  onToggleCompare: () => void;
  onEnquire:       () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isDark = model.type === "commercial";

  return (
    <div
      style={{
        background:   "#fff",
        borderRadius: 18,
        position:     "relative",
        zIndex:       expanded ? 20 : 1,
        outline:      isCompared ? "2px solid #0071e3" : "2px solid transparent",
        outlineOffset: "-1px",
        boxShadow:    "0 2px 16px rgba(0,0,0,0.07)",
        transition:   "outline-color 0.15s ease",
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

        <div style={{ display: "flex", gap: 8 }}>
          <Link
            href={`/products/air-coolers/${model.id}`}
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

        {/* Compare toggle — matches ProductShelves/LED TVs style */}
        <button
          onClick={onToggleCompare}
          disabled={maxReached && !isCompared}
          aria-label={isCompared ? `Remove ${model.name} from comparison` : `Add ${model.name} to comparison`}
          aria-pressed={isCompared}
          style={{
            marginTop:      8,
            width:          "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            5,
            padding:        "6px 0",
            border:         "none",
            background:     "none",
            cursor:         maxReached && !isCompared ? "not-allowed" : "pointer",
            opacity:        maxReached && !isCompared ? 0.38 : 1,
            color:          isCompared ? "#0071e3" : "#6e6e73",
            fontSize:       13,
            fontWeight:     500,
            transition:     "color 0.15s ease, opacity 0.15s ease",
          }}
        >
          <span style={{ width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${isCompared ? "#0071e3" : "#8e8e93"}`, background: isCompared ? "#0071e3" : "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s ease, border-color 0.15s ease", flexShrink: 0 }}>
            {isCompared && <Check size={9} color="#fff" strokeWidth={3} />}
          </span>
          Compare
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
  const [compared,        setCompared]        = useState<Set<string>>(new Set());
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = useCallback((id: string) => {
    setCompared((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); }
      else if (next.size < 3) { next.add(id); }
      return next;
    });
  }, []);

  const maxReached = compared.size >= 3;
  const comparedModels = MODELS.filter((m) => compared.has(m.id));

  const visible = MODELS.filter((m) => {
    if (typeFilter && m.type !== typeFilter) return false;
    if (capFilter  && m.capacity !== capFilter) return false;
    return true;
  });

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

      {/* Grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: comparedModels.length >= 2 ? 140 : 80 }}>
          {visible.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: 56, paddingBottom: 56 }}>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1d1d1f", marginBottom: 10, letterSpacing: "-0.02em" }}>
                No models match this selection
              </p>
              <p style={{ fontSize: 16, color: "#6e6e73" }}>Try a different cooler type or capacity.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: 20 }}>
              {visible.map((model) => (
                <CoolerCard
                  key={model.id}
                  model={model}
                  isCompared={compared.has(model.id)}
                  maxReached={maxReached}
                  onToggleCompare={() => toggleCompare(model.id)}
                  onEnquire={() => setEnquireTarget(model)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Compare bar — fixed at viewport bottom ────────────────────────────── */}
      {comparedModels.length >= 2 && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, padding: "0 24px 20px" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto" }}>
            <CompareBar
              models={comparedModels}
              onRemove={(id) => setCompared((prev) => { const next = new Set(prev); next.delete(id); return next; })}
              onClear={() => setCompared(new Set())}
              onCompare={() => setShowCompareModal(true)}
            />
          </div>
        </div>
      )}

      {/* ── Compare modal ────────────────────────────────────────────────────── */}
      {showCompareModal && (
        <CompareModal
          models={comparedModels}
          onClose={() => setShowCompareModal(false)}
          onEnquire={(model) => setEnquireTarget(model)}
        />
      )}

      {enquireTarget && (
        <EnquireModal
          model={enquireTarget}
          onClose={() => setEnquireTarget(null)}
        />
      )}
    </main>
  );
}

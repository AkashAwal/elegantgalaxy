"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, FileText, X, ChevronDown, ChevronUp, Check } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// ── SVG Illustrations ─────────────────────────────────────────────────────────

function FrontLoadSvg() {
  return (
    <svg viewBox="0 0 150 190" width={120} height={152} fill="none" aria-hidden>
      <rect x="10" y="10" width="130" height="170" rx="10" fill="#e5e5ea" />
      <rect x="16" y="16" width="118" height="158" rx="8" fill="#d1d1d6" />
      <rect x="24" y="24" width="50" height="8" rx="4" fill="#aeaeb2" />
      <circle cx="106" cy="28" r="6" fill="#aeaeb2" />
      <circle cx="122" cy="28" r="6" fill="#aeaeb2" />
      <circle cx="75" cy="108" r="46" fill="#8e8e93" />
      <circle cx="75" cy="108" r="38" fill="#636366" />
      <circle cx="75" cy="108" r="28" fill="#48484a" />
      <circle cx="75" cy="108" r="20" fill="#2c2c2e" />
      <circle cx="68" cy="101" r="5" fill="#3a3a3c" opacity="0.8" />
    </svg>
  );
}

function TopLoadSvg() {
  return (
    <svg viewBox="0 0 150 180" width={120} height={144} fill="none" aria-hidden>
      <rect x="10" y="10" width="130" height="160" rx="10" fill="#e5e5ea" />
      <rect x="16" y="16" width="118" height="18" rx="6" fill="#d1d1d6" />
      <circle cx="36" cy="25" r="4" fill="#aeaeb2" />
      <rect x="52" y="20" width="60" height="10" rx="5" fill="#aeaeb2" />
      <rect x="24" y="44" width="102" height="112" rx="8" fill="#d1d1d6" />
      <circle cx="75" cy="100" r="42" fill="#8e8e93" />
      <circle cx="75" cy="100" r="34" fill="#636366" />
      <circle cx="75" cy="100" r="22" fill="#48484a" />
    </svg>
  );
}

function SemiAutoSvg() {
  return (
    <svg viewBox="0 0 170 170" width={130} height={130} fill="none" aria-hidden>
      <rect x="8" y="30" width="74" height="130" rx="8" fill="#e5e5ea" />
      <rect x="14" y="36" width="62" height="118" rx="6" fill="#d1d1d6" />
      <circle cx="45" cy="70" r="24" fill="#8e8e93" />
      <circle cx="45" cy="70" r="16" fill="#636366" />
      <rect x="88" y="30" width="74" height="130" rx="8" fill="#dbeafe" />
      <rect x="94" y="36" width="62" height="118" rx="6" fill="#bfdbfe" />
      <circle cx="125" cy="70" r="24" fill="#60a5fa" />
      <circle cx="125" cy="70" r="16" fill="#3b82f6" />
      <rect x="16" y="140" width="46" height="8" rx="4" fill="#aeaeb2" />
      <rect x="96" y="140" width="46" height="8" rx="4" fill="#93c5fd" />
    </svg>
  );
}

export function WasherIllustration({ model }: { model: WasherModel }) {
  if (model.type === "front-load") return <FrontLoadSvg />;
  if (model.type === "top-load")    return <TopLoadSvg />;
  return <SemiAutoSvg />;
}

// ── Data ──────────────────────────────────────────────────────────────────────

import {
  MODELS, CAPACITIES, PHONE, PHONE_DISPLAY, WA_BASE, TYPE_LABEL,
  type WasherType, type WasherModel,
} from "@/data/washing-machines";
export { MODELS, CAPACITIES, PHONE, PHONE_DISPLAY, WA_BASE, TYPE_LABEL };
export type { WasherType, WasherModel };

// ── Enquire Modal ─────────────────────────────────────────────────────────────

export function EnquireModal({ model, onClose }: { model: WasherModel; onClose: () => void }) {
  const text    = `Hi, I'm interested in the ${model.name} — model ${model.modelNumber}. Could you share more details?`;
  const waUrl   = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  const formUrl = `/contact?product=washing-machine&model=${encodeURIComponent(model.id)}`;

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
          {model.name}
        </p>
        <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 28 }}>{model.modelNumber} &middot; {TYPE_LABEL[model.type]}</p>

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

export const SPEC_ROWS: Array<{ label: string; key: keyof WasherModel }> = [
  { label: "Model Number",  key: "modelNumber" },
  { label: "Type",          key: "type" },
  { label: "Capacity",      key: "capacity" },
  { label: "Spin Speed",    key: "spinSpeed" },
  { label: "Energy Rating", key: "energyRating" },
  { label: "Wash Programs", key: "washPrograms" },
  { label: "Motor",         key: "motor" },
  { label: "Body Material", key: "bodyMaterial" },
  { label: "Warranty",      key: "warranty" },
  { label: "Dimensions",    key: "dimensions" },
];

export function formatSpecValue(model: WasherModel, key: keyof WasherModel): string {
  const v = model[key];
  if (key === "type") return TYPE_LABEL[model.type];
  if (key === "capacity") return `${v} kg`;
  if (key === "spinSpeed") return `${v} RPM`;
  if (key === "washPrograms") return `${v} Programs`;
  return String(v);
}

// ── Compare bar (fixed at viewport bottom) ─────────────────────────────────────

function CompareBar({
  models,
  onRemove,
  onClear,
  onCompare,
}: {
  models:    WasherModel[];
  onRemove:  (id: string) => void;
  onClear:   () => void;
  onCompare: () => void;
}) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3.5"
      style={{
        padding:      "14px 16px",
        background:   "#fff",
        border:       "1.5px solid #0071e3",
        borderRadius: 14,
        boxShadow:    "0 4px 16px rgba(0,113,227,0.1)",
      }}
    >
      <div className="flex items-start sm:items-center gap-3 sm:flex-1 min-w-0">
        <span style={{ fontSize: 12, fontWeight: 600, color: "#6e6e73", flexShrink: 0, letterSpacing: "0.04em", paddingTop: 6 }}>
          COMPARING
        </span>
        <div style={{ display: "flex", gap: 8, flex: 1, alignItems: "center", flexWrap: "wrap" }}>
          {models.map((m) => (
            <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px 5px 10px", background: "#eff6ff", borderRadius: 7, border: "1px solid #bfdbfe" }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#1d1d1f" }}>{m.name}</span>
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
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-3 sm:flex-shrink-0">
        <button onClick={onClear} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 12, color: "#6e6e73", fontWeight: 500, flexShrink: 0, padding: "0 4px" }}>
          Clear
        </button>
        <button
          onClick={onCompare}
          className="flex-1 sm:flex-none"
          style={{ padding: "9px 18px", borderRadius: 8, background: "#0071e3", color: "#fff", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 500, letterSpacing: "-0.01em" }}
        >
          Compare {models.length}
        </button>
      </div>
    </div>
  );
}

// ── Compare modal ─────────────────────────────────────────────────────────────

function CompareModal({
  models,
  onClose,
  onEnquire,
}: {
  models:    WasherModel[];
  onClose:   () => void;
  onEnquire: (model: WasherModel) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef  = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const TITLE_ID  = "washer-compare-modal-title";

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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h2 id={TITLE_ID} style={{ fontSize: 21, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.015em" }}>
              Compare Washing Machines
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

        <div className="overflow-x-auto -mx-1 px-1">
        <div style={{ minWidth: models.length > 1 ? models.length * 200 : undefined }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${models.length}, 1fr)`, gap: 16, marginBottom: 24 }}>
          {models.map((m) => (
            <div key={m.id} style={{ borderRadius: 14, border: "1.5px solid #e8e8ed", overflow: "hidden" }}>
              <div style={{ background: "#f0f0f5", height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WasherIllustration model={m} />
              </div>
              <div style={{ padding: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#6e6e73", marginBottom: 4 }}>
                  {TYPE_LABEL[m.type]} · <span style={{ color: "#0071e3" }}>{m.capacity}kg</span>
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

// ── Washer Card ───────────────────────────────────────────────────────────────

function WasherCard({
  model,
  isCompared,
  maxReached,
  onToggleCompare,
  onEnquire,
}: {
  model:           WasherModel;
  isCompared:      boolean;
  maxReached:      boolean;
  onToggleCompare: () => void;
  onEnquire:       () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background:    "#fff",
        borderRadius:  18,
        position:      "relative",
        zIndex:        expanded ? 20 : 1,
        outline:       isCompared ? "2px solid #0071e3" : "2px solid transparent",
        outlineOffset: "-1px",
        boxShadow:     "0 2px 16px rgba(0,0,0,0.07)",
        transition:    "outline-color 0.15s ease",
      }}
    >
      <div style={{
        background:     "#f0f0f5",
        borderRadius:   "18px 18px 0 0",
        overflow:       "hidden",
        padding:        "28px 24px 20px",
        display:        "flex",
        justifyContent: "center",
        alignItems:     "center",
        minHeight:      200,
        position:       "relative",
      }}>
        <span style={{
          position:      "absolute",
          top:           12,
          left:          12,
          fontSize:      10,
          fontWeight:    700,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          background:    "rgba(0,113,227,0.12)",
          color:         "#0071e3",
          padding:       "3px 8px",
          borderRadius:  20,
        }}>
          {TYPE_LABEL[model.type]}
        </span>
        <WasherIllustration model={model} />
      </div>

      <div style={{ padding: "18px 20px 16px" }}>
        <p style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 4 }}>
          {TYPE_LABEL[model.type]} · <span style={{ color: "#0071e3", fontWeight: 600 }}>{model.capacity}kg</span>
        </p>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 2, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
          {model.name}
        </p>
        <p style={{ fontSize: 12, color: "#8e8e93", marginBottom: 14 }}>{model.modelNumber}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px", marginBottom: 16 }}>
          {[
            { label: "Spin Speed",     value: `${model.spinSpeed} RPM` },
            { label: "Energy Rating",  value: model.energyRating },
            { label: "Wash Programs",  value: `${model.washPrograms}` },
            { label: "Motor",          value: model.motor },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#8e8e93", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 1 }}>{label}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{value}</p>
            </div>
          ))}
        </div>

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
            href={`/products/washing-machines/${model.id}`}
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

export default function WashingMachinesClient({
  initialType = null,
  initialCap  = null,
}: {
  initialType?: string | null;
  initialCap?:  number | null;
}) {
  const [typeFilter, setTypeFilter] = useState<WasherType | null>(
    initialType === "front-load" || initialType === "top-load" || initialType === "semi-automatic" ? initialType : null
  );
  const [capFilter,  setCapFilter]  = useState<number | null>(initialCap);
  const [enquireTarget, setEnquireTarget] = useState<WasherModel | null>(null);
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
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>Washing Machines</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Cleaner Clothes, Less Effort.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 540 }}>
            Front load, top load, and semi-automatic washers built for Indian homes — energy-efficient
            motors, durable drums, and fast wash cycles.
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
              <p style={{ fontSize: 16, color: "#6e6e73" }}>Try a different washer type or capacity.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: 20 }}>
              {visible.map((model) => (
                <WasherCard
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

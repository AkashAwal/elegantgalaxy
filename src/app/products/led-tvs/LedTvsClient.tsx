"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText, X, Check } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const SIZES = [24, 32, 40, 42, 43, 50, 55, 58, 65, 75, 85, 100];

interface TvModel {
  id:         string;
  type:       string;
  platform:   string;
  sizes:      number[];
  resolution: Record<number, string>;
}

const MODELS: TvModel[] = [
  {
    id:         "android",
    type:       "Android TV",
    platform:   "Android TV",
    sizes:      [32, 43, 50, 55, 65, 75],
    resolution: { 32: "Full HD", 43: "4K Ultra HD", 50: "4K Ultra HD", 55: "4K Ultra HD", 65: "4K Ultra HD", 75: "4K Ultra HD" },
  },
  {
    id:         "webos-4k",
    type:       "WebOS 4K",
    platform:   "webOS 4K",
    sizes:      [43, 50, 55, 58, 65, 75, 85, 100],
    resolution: { 43: "4K Ultra HD", 50: "4K Ultra HD", 55: "4K Ultra HD", 58: "4K Ultra HD", 65: "4K Ultra HD", 75: "4K Ultra HD", 85: "4K Ultra HD", 100: "4K Ultra HD" },
  },
  {
    id:         "webos-2k",
    type:       "WebOS 2K",
    platform:   "webOS 2K",
    sizes:      [32, 40, 43],
    resolution: { 32: "Full HD", 40: "Full HD", 43: "Full HD" },
  },
  {
    id:         "google",
    type:       "Google TV",
    platform:   "Google TV",
    sizes:      [32, 43, 50, 55, 65, 75, 85, 100],
    resolution: { 32: "Full HD", 43: "4K Ultra HD", 50: "4K Ultra HD", 55: "4K Ultra HD", 65: "4K Ultra HD", 75: "4K Ultra HD", 85: "4K Ultra HD", 100: "4K Ultra HD" },
  },
  {
    id:         "distro",
    type:       "Distro",
    platform:   "Distro OS",
    sizes:      [32, 40, 43],
    resolution: { 32: "Full HD", 40: "Full HD", 43: "Full HD" },
  },
  {
    id:         "frameless-smart",
    type:       "Frameless Smart",
    platform:   "Frameless Smart",
    sizes:      [24, 32, 40, 42, 43],
    resolution: { 24: "Full HD", 32: "Full HD", 40: "Full HD", 42: "Full HD", 43: "Full HD" },
  },
  {
    id:         "frameless-normal",
    type:       "Frameless Normal",
    platform:   "Frameless Normal",
    sizes:      [24],
    resolution: { 24: "Full HD" },
  },
];

const PHONE         = "+919540699333";
const PHONE_DISPLAY = "+91 95406 99333";
const WA_BASE       = `https://wa.me/${PHONE}`;

const tvName    = (model: TvModel, size: number) => `EG ${model.type} ${size}" Smart LED`;
const entryKey  = (modelId: string, size: number) => `${modelId}::${size}`;
const parseKey  = (key: string) => {
  const [modelId, sizeStr] = key.split("::");
  return { modelId, size: Number(sizeStr) };
};

// ── TV silhouette ─────────────────────────────────────────────────────────────

function TvIcon() {
  return (
    <svg
      viewBox="0 0 200 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 172 }}
      aria-hidden
    >
      <rect x="8"  y="6"  width="184" height="108" rx="9" fill="#2c2c2e" />
      <rect x="16" y="14" width="168" height="92"  rx="5" fill="#111113" />
      <rect x="93" y="114" width="14" height="12"  rx="3" fill="#2c2c2e" />
      <rect x="70" y="124" width="60" height="7"   rx="3.5" fill="#2c2c2e" />
    </svg>
  );
}

// ── Enquire modal ─────────────────────────────────────────────────────────────

interface EnquireModalProps {
  model:   TvModel;
  size:    number;
  onClose: () => void;
}

function EnquireModal({ model, size, onClose }: EnquireModalProps) {
  const name    = tvName(model, size);
  const res     = model.resolution[size] ?? "Full HD";
  const text    = `Hi, I'm interested in the ${name}. Could you share more details?`;
  const waUrl   = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  const formUrl = `/contact?product=led-tv&model=${model.id}&size=${size}`;

  return (
    <div
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         300,
        background:     "rgba(0,0,0,0.52)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background:   "#fff",
          borderRadius: 20,
          padding:      "32px 28px 28px",
          width:        "100%",
          maxWidth:     400,
          position:     "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: "none", cursor: "pointer", color: "#6e6e73", padding: 4, lineHeight: 0 }}>
          <X size={18} strokeWidth={1.75} />
        </button>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 8 }}>Enquire About</p>
        <p style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{name}</p>
        <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 28 }}>{size} Inch &middot; {res}</p>

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

// ── Compare bar (inline, below the grid) ──────────────────────────────────────

interface CompareEntry { model: TvModel; size: number; key: string }

function CompareBar({
  entries,
  onRemove,
  onClear,
  onCompare,
}: {
  entries:   CompareEntry[];
  onRemove:  (key: string) => void;
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
        {entries.map((e) => (
          <div key={e.key} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px 5px 10px", background: "#eff6ff", borderRadius: 7, border: "1px solid #bfdbfe" }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#1d1d1f" }}>
              {tvName(e.model, e.size)}
            </span>
            <button
              onClick={() => onRemove(e.key)}
              aria-label={`Remove ${tvName(e.model, e.size)} from comparison`}
              style={{ border: "none", background: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", color: "#6e6e73", lineHeight: 1 }}
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          </div>
        ))}
        {entries.length < 3 && (
          <span style={{ fontSize: 12, color: "#6e6e73", fontStyle: "italic" }}>
            Add {3 - entries.length} more to compare
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
        Compare {entries.length}
      </button>
    </div>
  );
}

// ── Compare modal ─────────────────────────────────────────────────────────────

function CompareModal({
  entries,
  onClose,
  onEnquire,
}: {
  entries:   CompareEntry[];
  onClose:   () => void;
  onEnquire: (model: TvModel, size: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef  = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const TITLE_ID  = "led-compare-modal-title";

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
              Compare LED TVs
            </h2>
            <p style={{ fontSize: 12, color: "#6e6e73", marginTop: 2 }}>{entries.length} products selected</p>
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

        {/* Columns */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${entries.length}, 1fr)`, gap: 16 }}>
          {entries.map(({ model, size, key }) => {
            const name = tvName(model, size);
            const res  = model.resolution[size] ?? "Full HD";
            return (
              <div key={key} style={{ borderRadius: 14, border: "1.5px solid #e8e8ed", overflow: "hidden" }}>
                {/* Illustration */}
                <div style={{ background: "#1d1d1f", height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ position: "absolute", top: 10, right: 10, fontSize: 9, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", background: "rgba(255,255,255,0.11)", color: "rgba(255,255,255,0.8)", padding: "2px 7px", borderRadius: 20 }}>
                    {model.platform}
                  </span>
                  <TvIcon />
                </div>

                {/* Details */}
                <div style={{ padding: 16 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#6e6e73", marginBottom: 4 }}>
                    {size}&quot; &middot; <span style={{ color: "#0071e3" }}>{res}</span>
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16, lineHeight: 1.3 }}>
                    {name}
                  </p>
                  <Link
                    href={`/products/led-tvs/${model.id}?size=${size}`}
                    style={{ display: "block", textAlign: "center", padding: "9px 0", borderRadius: 8, background: "#0071e3", color: "#fff", fontSize: 13, fontWeight: 500, textDecoration: "none", marginBottom: 8 }}
                  >
                    View Now
                  </Link>
                  <button
                    onClick={() => { onClose(); onEnquire(model, size); }}
                    style={{ display: "block", width: "100%", textAlign: "center", padding: "8px 0", borderRadius: 8, border: "1.5px solid #0071e3", background: "transparent", color: "#0071e3", fontSize: 13, fontWeight: 500, cursor: "pointer" }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Model card ────────────────────────────────────────────────────────────────

interface ModelCardProps {
  model:           TvModel;
  size:            number;
  isCompared:      boolean;
  maxReached:      boolean;
  onToggleCompare: () => void;
  onEnquire:       () => void;
}

function ModelCard({ model, size, isCompared, maxReached, onToggleCompare, onEnquire }: ModelCardProps) {
  const resolution  = model.resolution[size] ?? "Full HD";
  const displayName = tvName(model, size);

  return (
    <div
      style={{
        background:   "#fff",
        borderRadius: 18,
        overflow:     "hidden",
        outline:      isCompared ? "2px solid #0071e3" : "2px solid transparent",
        outlineOffset: "-1px",
        boxShadow:    "0 2px 16px rgba(0,0,0,0.07)",
        transition:   "outline-color 0.15s ease",
      }}
    >
      {/* Image */}
      <div style={{ background: "#1d1d1f", padding: "28px 24px 20px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 168, position: "relative" }}>
        <span style={{ position: "absolute", top: 12, right: 12, fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", background: "rgba(255,255,255,0.11)", color: "rgba(255,255,255,0.8)", padding: "3px 8px", borderRadius: 20 }}>
          {model.platform}
        </span>
        <TvIcon />
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 16px" }}>
        <p style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 5 }}>
          {size}&quot; &middot; <span style={{ color: "#0071e3", fontWeight: 600 }}>{resolution}</span>
        </p>
        <p style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 16, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          {displayName}
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <Link href={`/products/led-tvs/${model.id}?size=${size}`} style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", height: 40, borderRadius: 980, background: "#0071e3", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            View Now
          </Link>
          <button onClick={onEnquire} style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", height: 40, borderRadius: 980, border: "1.5px solid #0071e3", background: "transparent", color: "#0071e3", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            Enquire
          </button>
        </div>

        {/* Compare toggle — matches ProductShelves style */}
        <button
          onClick={onToggleCompare}
          disabled={maxReached && !isCompared}
          aria-label={isCompared ? `Remove ${displayName} from comparison` : `Add ${displayName} to comparison`}
          aria-pressed={isCompared}
          style={{
            marginTop:      0,
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

export default function LedTvsClient({
  initialSize    = null,
  initialModelId = null,
}: {
  initialSize?:    number | null;
  initialModelId?: string | null;
}) {
  const [selectedSize,    setSelectedSize]    = useState<number | null>(initialSize);
  const [selectedModelId, setSelectedModelId] = useState<string | null>(initialModelId);
  const [compared,        setCompared]        = useState<Set<string>>(new Set());
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [enquireTarget,   setEnquireTarget]   = useState<{ model: TvModel; size: number } | null>(null);

  const toggleCompare = useCallback((key: string) => {
    setCompared((prev) => {
      const next = new Set(prev);
      if (next.has(key)) { next.delete(key); }
      else if (next.size < 3) { next.add(key); }
      return next;
    });
  }, []);

  const filteredModel = selectedModelId ? MODELS.find((m) => m.id === selectedModelId) ?? null : null;
  const allowedSizes  = filteredModel ? new Set(filteredModel.sizes) : null;

  const visibleEntries: Array<{ model: TvModel; size: number }> = [];
  for (const model of MODELS) {
    if (selectedModelId !== null && model.id !== selectedModelId) continue;
    for (const size of model.sizes) {
      if (selectedSize !== null && size !== selectedSize) continue;
      visibleEntries.push({ model, size });
    }
  }

  const maxReached = compared.size >= 3;

  const compareEntries: CompareEntry[] = [...compared].map((key) => {
    const { modelId, size } = parseKey(key);
    const model = MODELS.find((m) => m.id === modelId)!;
    return { model, size, key };
  });

  const statusText = (() => {
    if (selectedSize !== null && selectedModelId !== null && visibleEntries.length === 0)
      return `${filteredModel ? `EG ${filteredModel.type}` : ""} is not available in ${selectedSize} Inch.`;
    if (selectedSize !== null && visibleEntries.length > 0)
      return `${visibleEntries.length} model${visibleEntries.length > 1 ? "s" : ""} available in ${selectedSize} Inch`;
    if (selectedModelId !== null && filteredModel && selectedSize === null)
      return `Available in: ${filteredModel.sizes.map((s) => `${s}"`).join(", ")}`;
    return null;
  })();

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>LED Televisions</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            {initialModelId ? (MODELS.find((m) => m.id === initialModelId)?.platform ?? "LED TVs") : "Find Your Perfect TV."}
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 520 }}>
            {initialModelId
              ? `Browse our full range of ${MODELS.find((m) => m.id === initialModelId)?.platform ?? ""} smart televisions. Not sure what size to pick? Our team is happy to guide you.`
              : "Filter by size or model below to find the right TV for your home. Not sure what to pick? Our team is happy to guide you."}
          </p>
        </div>
      </section>

      {/* ── Size + Model selector — hidden when coming from a nav category link ── */}
      {!initialModelId && (
        <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="mx-auto max-w-[1440px] px-8" style={{ paddingBottom: 36 }}>
            <div className="flex flex-col lg:flex-row lg:gap-10">

              {/* Sizes */}
              <div style={{ flex: "1 1 0%", minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16 }}>Select a Size</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <button onClick={() => setSelectedSize(null)} aria-pressed={selectedSize === null} style={{ height: 50, minWidth: 72, padding: "0 18px", borderRadius: 12, border: selectedSize === null ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: selectedSize === null ? "#0071e3" : "#fff", color: selectedSize === null ? "#fff" : "#1d1d1f", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.15s ease" }}>
                    All
                  </button>
                  {SIZES.map((size) => {
                    const globallyAvailable  = MODELS.some((m) => m.sizes.includes(size));
                    const availableForFilter = allowedSizes ? allowedSizes.has(size) : globallyAvailable;
                    const isSelected         = selectedSize === size;
                    const dimmed             = !availableForFilter && !isSelected;
                    return (
                      <button key={size} onClick={() => setSelectedSize(isSelected ? null : size)} disabled={!availableForFilter} aria-pressed={isSelected}
                        style={{ height: 50, minWidth: 72, padding: "0 18px", borderRadius: 12, border: isSelected ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: isSelected ? "#0071e3" : "#fff", color: isSelected ? "#fff" : dimmed ? "#aaaaaa" : "#1d1d1f", fontSize: 15, fontWeight: 600, cursor: availableForFilter ? "pointer" : "not-allowed", opacity: dimmed ? 0.38 : 1, transition: "all 0.15s ease" }}
                      >
                        {size}&quot;
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
                  <button onClick={() => setSelectedModelId(null)} aria-pressed={selectedModelId === null} style={{ height: 40, padding: "0 16px", borderRadius: 980, border: selectedModelId === null ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: selectedModelId === null ? "#0071e3" : "#fff", color: selectedModelId === null ? "#fff" : "#1d1d1f", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s ease" }}>
                    All Models
                  </button>
                  {MODELS.map((m) => {
                    const isActive = selectedModelId === m.id;
                    return (
                      <button key={m.id} onClick={() => setSelectedModelId(isActive ? null : m.id)} aria-pressed={isActive}
                        style={{ height: 40, padding: "0 16px", borderRadius: 980, border: isActive ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)", background: isActive ? "#0071e3" : "#fff", color: isActive ? "#fff" : "#1d1d1f", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s ease", whiteSpace: "nowrap" }}
                      >
                        {m.platform}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {statusText && <p style={{ fontSize: 13, color: "#6e6e73", marginTop: 16 }}>{statusText}</p>}
          </div>
        </section>
      )}

      {/* ── Card grid ────────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: compareEntries.length >= 2 ? 140 : 80 }}>
          {visibleEntries.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: 56, paddingBottom: 56 }}>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1d1d1f", marginBottom: 10, letterSpacing: "-0.02em" }}>No models match this selection</p>
              <p style={{ fontSize: 16, color: "#6e6e73" }}>Try adjusting your size or model filter above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: 20 }}>
              {visibleEntries.map(({ model, size }) => {
                const key = entryKey(model.id, size);
                return (
                  <ModelCard
                    key={key}
                    model={model}
                    size={size}
                    isCompared={compared.has(key)}
                    maxReached={maxReached}
                    onToggleCompare={() => toggleCompare(key)}
                    onEnquire={() => setEnquireTarget({ model, size })}
                  />
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* ── Compare bar — fixed at viewport bottom ────────────────────────────── */}
      {compareEntries.length >= 2 && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, padding: "0 24px 20px" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto" }}>
            <CompareBar
              entries={compareEntries}
              onRemove={(key) => setCompared((prev) => { const next = new Set(prev); next.delete(key); return next; })}
              onClear={() => setCompared(new Set())}
              onCompare={() => setShowCompareModal(true)}
            />
          </div>
        </div>
      )}

      {/* ── Compare modal ────────────────────────────────────────────────────── */}
      {showCompareModal && (
        <CompareModal
          entries={compareEntries}
          onClose={() => setShowCompareModal(false)}
          onEnquire={(model, size) => setEnquireTarget({ model, size })}
        />
      )}

      {/* ── Enquire modal ────────────────────────────────────────────────────── */}
      {enquireTarget && (
        <EnquireModal
          model={enquireTarget.model}
          size={enquireTarget.size}
          onClose={() => setEnquireTarget(null)}
        />
      )}
    </main>
  );
}

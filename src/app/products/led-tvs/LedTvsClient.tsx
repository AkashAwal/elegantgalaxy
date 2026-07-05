"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, FileText, X } from "lucide-react";
import { SIZES, MODELS, PHONE, PHONE_DISPLAY, WA_BASE, tvName, entryKey, type TvModel } from "@/data/led-tvs";

export type { TvModel };
export { SIZES, MODELS, PHONE, PHONE_DISPLAY, WA_BASE, tvName };

// ── TV silhouette ─────────────────────────────────────────────────────────────

export function TvIcon() {
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

function TvCardIllustration({ model }: { model: TvModel }) {
  if (!model.images) return <TvIcon />;

  return (
    <div style={{ width: "100%", maxWidth: 360 }}>
      <Image
        src={model.images.front}
        alt={`${model.platform} TV`}
        width={400}
        height={283}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

// ── Enquire modal ─────────────────────────────────────────────────────────────

export interface EnquireModalProps {
  model:   TvModel;
  size:    number;
  onClose: () => void;
}

export function EnquireModal({ model, size, onClose }: EnquireModalProps) {
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

// ── Model card ────────────────────────────────────────────────────────────────

interface ModelCardProps {
  model:     TvModel;
  size:      number;
  onEnquire: () => void;
}

function ModelCard({ model, size, onEnquire }: ModelCardProps) {
  const resolution  = model.resolution[size] ?? "Full HD";
  const displayName = tvName(model, size);

  return (
    <div
      style={{
        background:   "#fff",
        borderRadius: 18,
        overflow:     "hidden",
        boxShadow:    "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      {/* Image */}
      <div style={{ background: model.images ? "#fff" : "#1d1d1f", padding: "18px 14px 12px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 220, position: "relative" }}>
        <span style={{
          position: "absolute", top: 12, right: 12, fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
          background: model.images ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.11)",
          color:      model.images ? "#1d1d1f" : "rgba(255,255,255,0.8)",
          padding: "3px 8px", borderRadius: 20,
        }}>
          {model.platform}
        </span>
        <TvCardIllustration model={model} />
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
  const [enquireTarget,   setEnquireTarget]   = useState<{ model: TvModel; size: number } | null>(null);

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
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
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
                    onEnquire={() => setEnquireTarget({ model, size })}
                  />
                );
              })}
            </div>
          )}

        </div>
      </section>

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

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, X, ChevronLeft, ChevronRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// ── Data ──────────────────────────────────────────────────────────────────────

import {
  CAPACITIES, CAPACITY_SPECS, COMMON_SPECS, PHONE, PHONE_DISPLAY, WA_BASE, washerName,
} from "@/data/washing-machines";
export { CAPACITIES, CAPACITY_SPECS, COMMON_SPECS, PHONE, PHONE_DISPLAY, WA_BASE, washerName };

// ── Enquire Modal ─────────────────────────────────────────────────────────────

export function EnquireModal({ capacity, onClose }: { capacity: number; onClose: () => void }) {
  const spec    = CAPACITY_SPECS[capacity];
  const name    = washerName(capacity);
  const text    = `Hi, I'm interested in the ${name} - model ${spec.modelNumber}. Could you share more details?`;
  const waUrl   = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  const formUrl = `/contact?product=washing-machine&capacity=${capacity}`;

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
        <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 28 }}>{spec.modelNumber} &middot; {capacity}kg</p>

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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WashingMachinesClient({
  initialCap = null,
}: {
  initialCap?: number | null;
}) {
  const [capacity, setCapacity] = useState<number>(
    initialCap && CAPACITIES.includes(initialCap) ? initialCap : CAPACITIES[0]
  );
  // The design on display — independent of capacity. Clicking a gallery thumbnail
  // only swaps this; it does not change the selected capacity/size.
  const [previewDesignCap, setPreviewDesignCap] = useState<number>(capacity);
  const [previewAngle,     setPreviewAngle]     = useState<"front" | "angle">("front");
  const [showEnquire, setShowEnquire] = useState(false);
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const previewImage = previewAngle === "front"
    ? CAPACITY_SPECS[previewDesignCap].image
    : CAPACITY_SPECS[previewDesignCap].imageAngle;

  // Some capacities share the same lid design/color — only show each design once.
  const uniqueDesigns = CAPACITIES.filter((cap, i, arr) =>
    arr.findIndex((c) => CAPACITY_SPECS[c].designId === CAPACITY_SPECS[cap].designId) === i
  );

  // Single flat gallery — every design's front + angled photo, in one grid.
  const galleryItems = uniqueDesigns.flatMap((cap) => [
    { cap, angle: "front" as const, src: CAPACITY_SPECS[cap].image },
    { cap, angle: "angle" as const, src: CAPACITY_SPECS[cap].imageAngle },
  ]);
  const galleryIndex = galleryItems.findIndex(
    (g) => g.cap === previewDesignCap && g.angle === previewAngle
  );
  const stepGallery = (dir: 1 | -1) => {
    const next = (galleryIndex + dir + galleryItems.length) % galleryItems.length;
    setPreviewDesignCap(galleryItems[next].cap);
    setPreviewAngle(galleryItems[next].angle);
  };

  const spec = CAPACITY_SPECS[capacity];
  const name = washerName(capacity);

  const rows: Array<[string, string]> = [
    ["Model Number",  spec.modelNumber],
    ["Capacity",      `${capacity} kg`],
    ["Motor",         spec.motor],
    ["Wash Programs", `${spec.washPrograms} Programs`],
    ["Filter Type",   spec.filterType],
    ["Pulsator",      COMMON_SPECS.pulsator],
    ["Body Material", COMMON_SPECS.bodyMaterial],
    ["Spin Tub",      COMMON_SPECS.spinTub],
    ["Buzzer",        COMMON_SPECS.buzzer ? "Yes" : "No"],
  ];

  const waText = `Hi, I'm interested in the ${name} - model ${spec.modelNumber}. Could you share more details?`;
  const waUrl  = `${WA_BASE}?text=${encodeURIComponent(waText)}`;

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
            Semi-automatic washers built for Indian homes, from 7kg to 12kg - heavy wash pulsators,
            diamond steel drums, and durable ABS bodies.
          </p>
        </div>
      </section>

      {/* Selected capacity — image + details */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48 }}>

          {/* Image + Designs picker */}
          <div>
            <div style={{
              background: "#f0f0f5",
              borderRadius: 20,
              minHeight: 380,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 32,
              marginBottom: 10,
              border: "1px solid rgba(0,0,0,0.06)",
              position: "relative",
            }}>
              <button
                onClick={() => stepGallery(-1)}
                aria-label="Previous photo"
                style={{
                  position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                  width: 36, height: 36, borderRadius: "50%", border: "none",
                  background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.14)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#1d1d1f", zIndex: 1,
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <div style={{ width: "100%", maxWidth: 320 }}>
                <Image
                  src={previewImage}
                  alt={name}
                  width={700}
                  height={700}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>

              <button
                onClick={() => stepGallery(1)}
                aria-label="Next photo"
                style={{
                  position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                  width: 36, height: 36, borderRadius: "50%", border: "none",
                  background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.14)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#1d1d1f", zIndex: 1,
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* One gallery — every design's front + angled photo together, single row */}
            <div className="grid grid-cols-8" style={{ gap: 6 }}>
              {galleryItems.map((item, i) => {
                const isSelected = i === galleryIndex;
                const isHovered  = hoveredThumb === i;
                return (
                  <button
                    key={`${item.cap}-${item.angle}`}
                    onClick={() => { setPreviewDesignCap(item.cap); setPreviewAngle(item.angle); }}
                    onMouseEnter={() => setHoveredThumb(i)}
                    onMouseLeave={() => setHoveredThumb(null)}
                    aria-pressed={isSelected}
                    aria-label={`Show ${washerName(item.cap)} - ${item.angle === "front" ? "front" : "angled"} view`}
                    style={{
                      background:   "#f0f0f5",
                      borderRadius: 8,
                      padding:      3,
                      border:       isSelected ? "2px solid #0071e3" : "2px solid transparent",
                      boxShadow:    isSelected
                        ? "0 3px 10px rgba(0,113,227,0.22)"
                        : isHovered
                          ? "0 3px 8px rgba(0,0,0,0.1)"
                          : "none",
                      cursor:       "pointer",
                      transform:    isHovered && !isSelected ? "translateY(-2px)" : "translateY(0)",
                      transition:   "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    <div style={{ width: "100%", position: "relative", aspectRatio: "1 / 1" }}>
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="60px"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details */}
          <div>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
              background: "rgba(0,113,227,0.1)", color: "#0071e3", padding: "4px 10px", borderRadius: 20, marginBottom: 14,
            }}>
              Semi-Automatic
            </span>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", lineHeight: 1.15, marginBottom: 10 }}>
              {name}
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 28 }}>
              {spec.modelNumber} &middot; <span style={{ color: "#0071e3", fontWeight: 600 }}>{capacity}kg</span>
            </p>

            {/* Capacity picker */}
            <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f", marginBottom: 12 }}>Select a Capacity</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {CAPACITIES.map((cap) => (
                <button
                  key={cap}
                  onClick={() => setCapacity(cap)}
                  aria-pressed={capacity === cap}
                  style={{
                    height: 42,
                    minWidth: 58,
                    padding: "0 14px",
                    borderRadius: 10,
                    border: capacity === cap ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)",
                    background: capacity === cap ? "#0071e3" : "#fff",
                    color: capacity === cap ? "#fff" : "#1d1d1f",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {cap}kg
                </button>
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
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#6e6e73", textDecoration: "none" }}
            >
              <Phone size={14} /> Or call us at {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Full spec table — swaps with selected capacity */}
        <div style={{ marginTop: 56, maxWidth: 720 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 16 }}>
            Full Specifications - {capacity}kg
          </h2>
          <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", background: "#fff" }}>
            {rows.map(([label, value], i) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", background: i % 2 === 0 ? "#fafafa" : "#fff", borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{label}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showEnquire && (
        <EnquireModal capacity={capacity} onClose={() => setShowEnquire(false)} />
      )}
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, X, ChevronLeft, ChevronRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// ── Data ──────────────────────────────────────────────────────────────────────

import {
  NAME, MODEL_NUMBER, WATTS, COMMON_SPECS, IMAGES, PHONE, PHONE_DISPLAY, WA_BASE,
} from "@/data/infrared-cooktops";
export { NAME, MODEL_NUMBER, WATTS, COMMON_SPECS, IMAGES, PHONE, PHONE_DISPLAY, WA_BASE };

// ── Enquire Modal ─────────────────────────────────────────────────────────────

export function EnquireModal({ onClose }: { onClose: () => void }) {
  const text    = `Hi, I'm interested in the ${NAME} - model ${MODEL_NUMBER}. Could you share more details?`;
  const waUrl   = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  const formUrl = `/contact?enquire=${encodeURIComponent(NAME)}&product=infrared-cooktop`;

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
          {NAME}
        </p>
        <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 28 }}>{MODEL_NUMBER} &middot; {WATTS}W</p>

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

const GALLERY: Array<{ angle: "front" | "top" | "box"; src: string }> = [
  { angle: "front", src: IMAGES.front },
  { angle: "top",   src: IMAGES.top },
  { angle: "box",   src: IMAGES.box },
];

export default function InfraredCooktopsClient() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showEnquire, setShowEnquire]   = useState(false);
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const stepGallery = (dir: 1 | -1) => {
    setGalleryIndex((prev) => (prev + dir + GALLERY.length) % GALLERY.length);
  };

  const rows: Array<[string, string]> = [
    ["Model Number",  MODEL_NUMBER],
    ["Burners",       "Single Burner"],
    ["Wattage",       `${WATTS} W`],
    ["Surface",       COMMON_SPECS.surface],
    ["Controls",      COMMON_SPECS.controls],
    ["Timer",         `${COMMON_SPECS.timerMinutes} min`],
    ["Body Material", COMMON_SPECS.bodyMaterial],
    ["Warranty",      COMMON_SPECS.warranty],
    ["Dimensions",    COMMON_SPECS.dimensions],
  ];

  const waText = `Hi, I'm interested in the ${NAME} - model ${MODEL_NUMBER}. Could you share more details?`;
  const waUrl  = `${WA_BASE}?text=${encodeURIComponent(waText)}`;

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>Infrared Cooktops</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Faster Heat, Safer Cooking.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 540 }}>
            A single burner infrared cooktop with a ceramic glass surface that heats faster
            than gas and stays cool to the touch around the cooking zone.
          </p>
        </div>
      </section>

      {/* Image + details */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48 }}>

          {/* Image + gallery */}
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
                  src={GALLERY[galleryIndex].src}
                  alt={NAME}
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

            <div className="grid grid-cols-8" style={{ gap: 6 }}>
              {GALLERY.map((item, i) => {
                const isSelected = i === galleryIndex;
                const isHovered  = hoveredThumb === i;
                return (
                  <button
                    key={item.angle}
                    onClick={() => setGalleryIndex(i)}
                    onMouseEnter={() => setHoveredThumb(i)}
                    onMouseLeave={() => setHoveredThumb(null)}
                    aria-pressed={isSelected}
                    aria-label={`Show ${item.angle} view`}
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
              Single Burner
            </span>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", lineHeight: 1.15, marginBottom: 10 }}>
              {NAME}
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 28 }}>
              {MODEL_NUMBER} &middot; <span style={{ color: "#0071e3", fontWeight: 600 }}>{WATTS}W</span>
            </p>

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

        {/* Full spec table */}
        <div style={{ marginTop: 56, maxWidth: 720 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 16 }}>
            Full Specifications
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
        <EnquireModal onClose={() => setShowEnquire(false)} />
      )}
    </main>
  );
}

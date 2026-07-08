"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import RemotesSection from "@/components/RemotesSection";
import { MODELS, PHONE, PHONE_DISPLAY, WA_BASE, tvName, type TvModel } from "@/data/led-tvs";
import { TvIcon, EnquireModal } from "../LedTvsClient";

export default function TvDetailClient({ model, initialSize }: { model: TvModel; initialSize: number | null }) {
  const [size, setSize] = useState<number>(
    initialSize && model.sizes.includes(initialSize) ? initialSize : model.sizes[0]
  );
  const [showEnquire, setShowEnquire] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const gallery = model.gallery;
  const stepGallery = (dir: 1 | -1) => {
    if (!gallery) return;
    setGalleryIndex((i) => (i + dir + gallery.length) % gallery.length);
  };

  const displayName = tvName(model, size);
  const resolution   = model.resolution[size] ?? "Full HD";
  const waText  = `Hi, I'm interested in the ${displayName}. Could you share more details?`;
  const waUrl   = `${WA_BASE}?text=${encodeURIComponent(waText)}`;

  const otherModels = MODELS.filter((m) => m.id !== model.id).slice(0, 4);

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 20, paddingBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6e6e73" }}>
          <Link href="/" style={{ color: "#6e6e73", textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <Link href="/products/led-tvs" style={{ color: "#6e6e73", textDecoration: "none" }}>LED TVs</Link>
          <ChevronRight size={13} />
          <span style={{ color: "#1d1d1f", fontWeight: 500 }}>{model.platform}</span>
        </div>
      </div>

      {/* Product */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 24, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48 }}>

          {/* Gallery */}
          <div>
            <div style={{
              background: model.images ? "#fff" : "#1d1d1f",
              borderRadius: 20,
              minHeight: 380,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 32,
              marginBottom: 14,
              border: "1px solid rgba(0,0,0,0.06)",
              position: "relative",
            }}>
              {gallery ? (
                <>
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

                  <div style={{ width: "100%", maxWidth: 440 }}>
                    <Image
                      src={gallery[galleryIndex]}
                      alt={`${model.platform} - photo ${galleryIndex + 1}`}
                      width={500}
                      height={354}
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
                </>
              ) : model.images ? (
                <Image
                  src={model.images.front}
                  alt={`${model.platform} TV`}
                  width={500}
                  height={354}
                  style={{ width: "100%", maxWidth: 440, height: "auto" }}
                  priority
                />
              ) : (
                <TvIcon />
              )}
            </div>

            {gallery && (
              <div className="grid grid-cols-6" style={{ gap: 6 }}>
                {gallery.map((src, i) => {
                  const isSelected = i === galleryIndex;
                  const isHovered  = hoveredThumb === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setGalleryIndex(i)}
                      onMouseEnter={() => setHoveredThumb(i)}
                      onMouseLeave={() => setHoveredThumb(null)}
                      aria-pressed={isSelected}
                      aria-label={`Show photo ${i + 1}`}
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
                        <Image src={src} alt="" fill style={{ objectFit: "contain" }} sizes="60px" />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
              background: "rgba(0,113,227,0.1)", color: "#0071e3", padding: "4px 10px", borderRadius: 20, marginBottom: 14,
            }}>
              {model.platform}
            </span>
            <h1 style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", lineHeight: 1.15, marginBottom: 10 }}>
              {displayName}
            </h1>
            <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 28 }}>
              {size}&quot; screen &middot; <span style={{ color: "#0071e3", fontWeight: 600 }}>{resolution}</span>
            </p>

            {/* Size picker */}
            <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f", marginBottom: 12 }}>Screen Size</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {model.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  style={{
                    height: 42,
                    minWidth: 58,
                    padding: "0 14px",
                    borderRadius: 10,
                    border: size === s ? "2px solid #0071e3" : "2px solid rgba(0,0,0,0.12)",
                    background: size === s ? "#0071e3" : "#fff",
                    color: size === s ? "#fff" : "#1d1d1f",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {s}&quot;
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
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#6e6e73", textDecoration: "none", marginBottom: 32 }}
            >
              <Phone size={14} /> Or call us at {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Full spec table — Interactive Smart Board only, updates with selected size */}
        {model.panelSpecs && model.commonSpecs && (() => {
          const sizeSpec = model.panelSpecs[size];
          const common   = model.commonSpecs;
          if (!sizeSpec) return null;
          const rows: Array<[string, string]> = [
            ["Model Number",       sizeSpec.modelNumber],
            ["Screen Size",        `${size}"`],
            ["Panel Type",         common.panelType],
            ["Resolution",         resolution],
            ["Aspect Ratio",       sizeSpec.aspectRatio],
            ["Refresh Rate",       sizeSpec.refreshRate],
            ["Brightness",         common.brightness],
            ["Contrast Ratio",     common.contrastRatio],
            ["Display Color",      common.displayColor],
            ["Power Consumption",  `${sizeSpec.powerConsumption}W (max)`],
            ["Touch System",       common.touchPoints],
            ["Touch Response",     common.touchResponseTime],
            ["Surface Protection", common.surfaceProtection],
            ["Operating System",   common.os],
            ["RAM",                common.ram],
            ["Storage",            common.rom],
            ["Connectivity",       common.internet],
            ["Speakers",           common.speaker],
            ["Dimensions",         sizeSpec.dimensions],
            ["Package Dimensions", sizeSpec.packDimensions],
            ["Net Weight",         `${sizeSpec.netWeight} kg`],
            ["Gross Weight",       `${sizeSpec.grossWeight} kg`],
          ];
          return (
            <div style={{ marginTop: 56, maxWidth: 720 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 16 }}>
                Full Specifications - {size}&quot;
              </h2>
              <div style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", background: "#fff" }}>
                {rows.map(([label, value], i) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", background: i % 2 === 0 ? "#fafafa" : "#fff", borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                    <span style={{ fontSize: 13, color: "#6e6e73" }}>{label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f", textAlign: "right" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Other models */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 20 }}>
            Explore other TVs
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
            {otherModels.map((m) => (
              <Link
                key={m.id}
                href={`/products/led-tvs/${m.id}`}
                style={{ display: "block", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none" }}
              >
                <div style={{ background: m.images ? "#fff" : "#1d1d1f", height: 140, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                  {m.images ? (
                    <Image src={m.images.front} alt={m.platform} width={220} height={155} style={{ width: "100%", maxWidth: 180, height: "auto" }} />
                  ) : (
                    <TvIcon />
                  )}
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>{m.platform}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingTop: 40 }}>
        <RemotesSection />
      </div>

      {showEnquire && (
        <EnquireModal model={model} size={size} onClose={() => setShowEnquire(false)} />
      )}
    </main>
  );
}

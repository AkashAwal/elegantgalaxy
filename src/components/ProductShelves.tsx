"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import type { ReactNode } from "react";

// ─── Real product data & illustrations (shared with the category pages) ──────

import { MODELS as TV_MODELS, tvName } from "@/data/led-tvs";
import { MODELS as WASHER_MODELS, TYPE_LABEL as WASHER_TYPE_LABEL } from "@/data/washing-machines";
import { WasherIllustration } from "@/app/products/washing-machines/WashingMachinesClient";
import { MODELS as COOLER_MODELS } from "@/data/air-coolers";
import { CoolerIllustration } from "@/app/products/air-coolers/AirCoolersClient";
import { MODELS as COOKTOP_MODELS, burnerLabel } from "@/data/infrared-cooktops";
import { CooktopSvg } from "@/app/products/infrared-cooktops/InfraredCooktopsClient";

// ─── Featured picks — real models pulled from each category page ─────────────

const androidTv = TV_MODELS.find((m) => m.id === "android")!;
const webos4kTv  = TV_MODELS.find((m) => m.id === "webos-4k")!;
const webos2kTv  = TV_MODELS.find((m) => m.id === "webos-2k")!;
const googleTv   = TV_MODELS.find((m) => m.id === "google")!;

const flWasher7  = WASHER_MODELS.find((m) => m.id === "fl-7")!;
const flWasher8  = WASHER_MODELS.find((m) => m.id === "fl-8")!;
const tlWasher10 = WASHER_MODELS.find((m) => m.id === "tl-10")!;
const saWasher8  = WASHER_MODELS.find((m) => m.id === "sa-8")!;

const iceCool100    = COOLER_MODELS.find((m) => m.id === "c-ice-cool-100-1")!;
const iceStorm160   = COOLER_MODELS.find((m) => m.id === "c-ice-storm-160-1")!;
const iceWind90     = COOLER_MODELS.find((m) => m.id === "d-ice-wind-90")!;
const windStormPlus = COOLER_MODELS.find((m) => m.id === "d-wind-storm-plus")!;

const cooktop1 = COOKTOP_MODELS.find((m) => m.id === "ct-1a")!;
const cooktop2 = COOKTOP_MODELS.find((m) => m.id === "ct-2a")!;
const cooktop3 = COOKTOP_MODELS.find((m) => m.id === "ct-3a")!;
const cooktop4 = COOKTOP_MODELS.find((m) => m.id === "ct-4a")!;

// ─── Data ─────────────────────────────────────────────────────────────────────

type Product = {
  id:           string;
  name:         string;
  subtitle:     string;
  href:         string;
  bg:           string;
  illustration?: ReactNode;
  /** Real product photo — when set, next/image is rendered instead of `illustration`. */
  imageSrc?:    string;
};

type Shelf = {
  category:     string;
  categoryHref: string;
  products:     Product[];
};

const SHELVES: Shelf[] = [
  {
    category:     "LED TVs",
    categoryHref: "/products/led-tvs",
    products: [
      { id: androidTv.id,  name: tvName(androidTv, 65),  subtitle: `65" · ${androidTv.resolution[65]}`,  href: `/products/led-tvs/${androidTv.id}?size=65`,  bg: "#fff", imageSrc: androidTv.images!.front },
      { id: webos4kTv.id,  name: tvName(webos4kTv, 55),  subtitle: `55" · ${webos4kTv.resolution[55]}`,  href: `/products/led-tvs/${webos4kTv.id}?size=55`,  bg: "#fff", imageSrc: webos4kTv.images!.front },
      { id: webos2kTv.id,  name: tvName(webos2kTv, 43),  subtitle: `43" · ${webos2kTv.resolution[43]}`,  href: `/products/led-tvs/${webos2kTv.id}?size=43`,  bg: "#fff", imageSrc: webos2kTv.images!.front },
      { id: googleTv.id,   name: tvName(googleTv, 75),   subtitle: `75" · ${googleTv.resolution[75]}`,   href: `/products/led-tvs/${googleTv.id}?size=75`,   bg: "#fff", imageSrc: googleTv.images!.front },
    ],
  },
  {
    category:     "Washing Machines",
    categoryHref: "/products/washing-machines",
    products: [
      { id: flWasher7.id,  name: flWasher7.name,  subtitle: `${WASHER_TYPE_LABEL[flWasher7.type]} · ${flWasher7.capacity}kg`,   href: `/products/washing-machines/${flWasher7.id}`,  bg: "#f0f0f5", illustration: <WasherIllustration model={flWasher7} /> },
      { id: flWasher8.id,  name: flWasher8.name,  subtitle: `${WASHER_TYPE_LABEL[flWasher8.type]} · ${flWasher8.capacity}kg`,   href: `/products/washing-machines/${flWasher8.id}`,  bg: "#f0f0f5", illustration: <WasherIllustration model={flWasher8} /> },
      { id: tlWasher10.id, name: tlWasher10.name, subtitle: `${WASHER_TYPE_LABEL[tlWasher10.type]} · ${tlWasher10.capacity}kg`, href: `/products/washing-machines/${tlWasher10.id}`, bg: "#f0f0f5", illustration: <WasherIllustration model={tlWasher10} /> },
      { id: saWasher8.id,  name: saWasher8.name,  subtitle: `${WASHER_TYPE_LABEL[saWasher8.type]} · ${saWasher8.capacity}kg`,   href: `/products/washing-machines/${saWasher8.id}`,  bg: "#f0f0f5", illustration: <WasherIllustration model={saWasher8} /> },
    ],
  },
  {
    category:     "Air Coolers",
    categoryHref: "/products/air-coolers",
    products: [
      { id: iceCool100.id,    name: iceCool100.name,    subtitle: `Commercial · ${iceCool100.capacity}L`,    href: `/products/air-coolers/${iceCool100.id}`,    bg: "#1d1d1f", illustration: <CoolerIllustration model={iceCool100} /> },
      { id: iceStorm160.id,   name: iceStorm160.name,   subtitle: `Commercial · ${iceStorm160.capacity}L`,   href: `/products/air-coolers/${iceStorm160.id}`,   bg: "#1d1d1f", illustration: <CoolerIllustration model={iceStorm160} /> },
      { id: iceWind90.id,     name: iceWind90.name,     subtitle: `Desert · ${iceWind90.capacity}L`,         href: `/products/air-coolers/${iceWind90.id}`,     bg: "#e0f2fe", illustration: <CoolerIllustration model={iceWind90} /> },
      { id: windStormPlus.id, name: windStormPlus.name, subtitle: `Desert · ${windStormPlus.capacity}L`,     href: `/products/air-coolers/${windStormPlus.id}`, bg: "#e0f2fe", illustration: <CoolerIllustration model={windStormPlus} /> },
    ],
  },
  {
    category:     "Infrared Cooktops",
    categoryHref: "/products/infrared-cooktops",
    products: [
      { id: cooktop1.id, name: cooktop1.name, subtitle: `${burnerLabel(cooktop1.burners)} · ${cooktop1.totalWattage}W`, href: `/products/infrared-cooktops/${cooktop1.id}`, bg: "#18181b", illustration: <CooktopSvg burners={cooktop1.burners} /> },
      { id: cooktop2.id, name: cooktop2.name, subtitle: `${burnerLabel(cooktop2.burners)} · ${cooktop2.totalWattage}W`, href: `/products/infrared-cooktops/${cooktop2.id}`, bg: "#18181b", illustration: <CooktopSvg burners={cooktop2.burners} /> },
      { id: cooktop3.id, name: cooktop3.name, subtitle: `${burnerLabel(cooktop3.burners)} · ${cooktop3.totalWattage}W`, href: `/products/infrared-cooktops/${cooktop3.id}`, bg: "#18181b", illustration: <CooktopSvg burners={cooktop3.burners} /> },
      { id: cooktop4.id, name: cooktop4.name, subtitle: `${burnerLabel(cooktop4.burners)} · ${cooktop4.totalWattage}W`, href: `/products/infrared-cooktops/${cooktop4.id}`, bg: "#18181b", illustration: <CooktopSvg burners={cooktop4.burners} /> },
    ],
  },
];

// ─── Illustration switcher ────────────────────────────────────────────────────
// Renders a real product image (next/image) when `imageSrc` is set on the
// product, and falls back to the SVG placeholder otherwise.
// Drop images into /public/images/products/{id}.webp (400 × 400 px,
// transparent background) and add `imageSrc: "/images/products/{id}.webp"`
// to the product entry in SHELVES to activate them one at a time.

function ProductIllustration({ product }: { product: Product }) {
  if (product.imageSrc) {
    return (
      <Image
        src={product.imageSrc}
        alt={product.name}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        style={{ objectFit: "contain", padding: 10 }}
      />
    );
  }
  return <>{product.illustration}</>;
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  isCompared,
  onToggleCompare,
  maxReached,
}: {
  product:         Product;
  isCompared:      boolean;
  onToggleCompare: () => void;
  maxReached:      boolean;
}) {
  return (
    <div
      style={{
        background:   "#fff",
        borderRadius: 16,
        overflow:     "hidden",
        boxShadow:    "0 2px 10px rgba(0,0,0,0.07)",
        outline:      isCompared ? "2px solid #0071e3" : "2px solid transparent",
        outlineOffset: "-1px",
        transition:   "outline-color 0.15s ease",
        display:      "flex",
        flexDirection:"column",
        flex:         1,
        minWidth:     0,
      }}
    >
      {/* Illustration area — real photos hug their own aspect ratio so there's
          no dead space above/below; SVG icon illustrations keep the fixed
          height they were drawn for. */}
      <div style={{
        background:     product.bg,
        ...(product.imageSrc ? { aspectRatio: "4 / 3" } : { height: 192 }),
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        position:       "relative",
        flexShrink:     0,
      }}>
        <ProductIllustration product={product} />
      </div>

      {/* Info */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{
          fontSize:      9.5,
          fontWeight:    600,
          color:         "#6e6e73",
          letterSpacing: "0.07em",
          marginBottom:  4,
        }}>
          {product.subtitle}
        </p>
        <p style={{
          fontSize:      13.5,
          fontWeight:    600,
          color:         "#1d1d1f",
          letterSpacing: "-0.01em",
          lineHeight:    1.3,
          marginBottom:  8,
          flex:          1,
        }}>
          {product.name}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 4 }}>
          <Link
            href={product.href}
            style={{
              textAlign:      "center",
              padding:        "8px 0",
              borderRadius:   7,
              background:     "#0071e3",
              color:          "#fff",
              fontSize:       12,
              fontWeight:     500,
              textDecoration: "none",
              display:        "block",
            }}
          >
            View Now
          </Link>
          <Link
            href={`/contact?enquire=${encodeURIComponent(product.name)}`}
            style={{
              textAlign:      "center",
              padding:        "7px 0",
              borderRadius:   7,
              border:         "1.5px solid #0071e3",
              color:          "#0071e3",
              fontSize:       12,
              fontWeight:     500,
              textDecoration: "none",
              display:        "block",
            }}
          >
            Enquire
          </Link>
        </div>

        {/* Compare toggle */}
        <button
          onClick={onToggleCompare}
          disabled={maxReached && !isCompared}
          aria-label={isCompared
            ? `Remove ${product.name} from comparison`
            : `Add ${product.name} to comparison`}
          aria-pressed={isCompared}
          style={{
            marginTop:      8,
            width:          "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            5,
            padding:        "5px 0",
            border:         "none",
            background:     "none",
            cursor:         maxReached && !isCompared ? "not-allowed" : "pointer",
            opacity:        maxReached && !isCompared ? 0.38 : 1,
            color:          isCompared ? "#0071e3" : "#6e6e73",
            fontSize:       12,
            fontWeight:     500,
            transition:     "color 0.15s ease, opacity 0.15s ease",
          }}
        >
          <span style={{
            width:          14,
            height:         14,
            borderRadius:   3,
            border:         `1.5px solid ${isCompared ? "#0071e3" : "#8e8e93"}`,
            background:     isCompared ? "#0071e3" : "transparent",
            display:        "inline-flex",
            alignItems:     "center",
            justifyContent: "center",
            transition:     "background 0.15s ease, border-color 0.15s ease",
            flexShrink:     0,
          }}>
            {isCompared && <Check size={9} color="#fff" strokeWidth={3} />}
          </span>
          Compare
        </button>
      </div>
    </div>
  );
}

// ─── Compare bar (appears below the grid when ≥ 2 selected) ──────────────────

function CompareBar({
  products,
  onRemove,
  onClear,
  onCompare,
}: {
  products:  Product[];
  onRemove:  (id: string) => void;
  onClear:   () => void;
  onCompare: () => void;
}) {
  return (
    <div style={{
      marginTop:  16,
      padding:    "12px 18px",
      background: "#fff",
      border:     "1.5px solid #0071e3",
      borderRadius: 14,
      display:    "flex",
      alignItems: "center",
      gap:        14,
      boxShadow:  "0 4px 16px rgba(0,113,227,0.1)",
    }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "#6e6e73", flexShrink: 0, letterSpacing: "0.04em" }}>
        COMPARING
      </span>

      {/* Product chips */}
      <div style={{ display: "flex", gap: 8, flex: 1, alignItems: "center", flexWrap: "wrap" }}>
        {products.map(p => (
          <div key={p.id} style={{
            display:    "flex",
            alignItems: "center",
            gap:        6,
            padding:    "5px 8px 5px 10px",
            background: "#eff6ff",
            borderRadius: 7,
            border:     "1px solid #bfdbfe",
          }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#1d1d1f" }}>
              {p.name}
            </span>
            <button
              onClick={() => onRemove(p.id)}
              aria-label={`Remove ${p.name} from comparison`}
              style={{
                border:     "none",
                background: "none",
                cursor:     "pointer",
                padding:    0,
                display:    "flex",
                alignItems: "center",
                color:      "#6e6e73",
                lineHeight: 1,
              }}
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          </div>
        ))}
        {products.length < 3 && (
          <span style={{ fontSize: 12, color: "#6e6e73", fontStyle: "italic" }}>
            Add 1 more to compare
          </span>
        )}
      </div>

      <button
        onClick={onClear}
        style={{
          border:     "none",
          background: "none",
          cursor:     "pointer",
          fontSize:   12,
          color:      "#6e6e73",
          fontWeight: 500,
          flexShrink: 0,
          padding:    "0 4px",
        }}
      >
        Clear
      </button>

      <button
        onClick={onCompare}
        style={{
          padding:      "9px 18px",
          borderRadius: 8,
          background:   "#0071e3",
          color:        "#fff",
          border:       "none",
          cursor:       "pointer",
          fontSize:     13,
          fontWeight:   500,
          flexShrink:   0,
          letterSpacing: "-0.01em",
        }}
      >
        Compare {products.length}
      </button>
    </div>
  );
}

// ─── Compare modal ────────────────────────────────────────────────────────────

function CompareModal({
  products,
  category,
  onClose,
}: {
  products: Product[];
  category: string;
  onClose:  () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef  = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const TITLE_ID  = "compare-modal-title";

  // On mount: remember where focus came from, move it to the close button.
  // On unmount: give focus back to the opener.
  useEffect(() => {
    returnRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    return () => { returnRef.current?.focus(); };
  }, []);

  // Escape key → close (document-level so it fires even if nothing inside is focused)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Tab focus trap — keep keyboard focus cycling within the dialog
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
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
      style={{
        position:       "fixed",
        inset:          0,
        background:     "rgba(0,0,0,0.48)",
        zIndex:         9000,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        24,
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        style={{
          background:   "#fff",
          borderRadius: 20,
          padding:      "28px 28px 32px",
          width:        "100%",
          maxWidth:     860,
          maxHeight:    "88vh",
          overflowY:    "auto",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h2
              id={TITLE_ID}
              style={{ fontSize: 21, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.015em" }}
            >
              Compare {category}
            </h2>
            <p style={{ fontSize: 12, color: "#6e6e73", marginTop: 2 }}>
              {products.length} products selected
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close comparison"
            style={{
              width:       36,
              height:      36,
              borderRadius:"50%",
              border:      "none",
              background:  "#f2f2f7",
              cursor:      "pointer",
              display:     "flex",
              alignItems:  "center",
              justifyContent: "center",
              flexShrink:  0,
            }}
          >
            <X size={17} color="#1d1d1f" />
          </button>
        </div>

        {/* Comparison columns — horizontal scroll on mobile, even grid from sm+ */}
        <div
          className="grid grid-flow-col auto-cols-[75%] overflow-x-auto pb-2 sm:grid-flow-row sm:auto-cols-auto sm:overflow-visible sm:pb-0 sm:[grid-template-columns:repeat(var(--cols),1fr)]"
          style={{ gap: 16, ["--cols" as string]: products.length }}
        >
          {products.map(p => (
            <div key={p.id} style={{ borderRadius: 14, border: "1.5px solid #e8e8ed", overflow: "hidden" }}>
              {/* Illustration */}
              <div style={{
                background: p.bg,
                height:     160,
                position:   "relative",
                display:    "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <ProductIllustration product={p} />
              </div>

              {/* Details */}
              <div style={{ padding: "16px" }}>
                <p style={{ fontSize: 9.5, fontWeight: 600, color: "#6e6e73", letterSpacing: "0.07em", marginBottom: 4 }}>
                  {p.subtitle}
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 16, lineHeight: 1.3 }}>
                  {p.name}
                </p>
                <Link
                  href={p.href}
                  style={{
                    display:        "block",
                    textAlign:      "center",
                    padding:        "9px 0",
                    borderRadius:   8,
                    background:     "#0071e3",
                    color:          "#fff",
                    fontSize:       13,
                    fontWeight:     500,
                    textDecoration: "none",
                  }}
                >
                  View Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Single shelf row ─────────────────────────────────────────────────────────

function ShelfRow({ shelf }: { shelf: Shelf }) {
  const [btnHovered,  setBtnHovered]  = useState(false);
  const [compareIds,  setCompareIds]  = useState<string[]>([]);
  const [showModal,   setShowModal]   = useState(false);

  const toggleCompare = (id: string) =>
    setCompareIds(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : prev.length >= 3 ? prev : [...prev, id]
    );

  const maxReached     = compareIds.length >= 3;
  const compareProducts = shelf.products.filter(p => compareIds.includes(p.id));

  return (
    <div>
      {/* Shelf header */}
      <div style={{ marginBottom: 16 }}>
        <h3 style={{
          fontSize:      22,
          fontWeight:    600,
          color:         "#1d1d1f",
          letterSpacing: "-0.015em",
        }}>
          {shelf.category}
        </h3>
      </div>

      {/* Cards row — 4 equal-width cards filling the full row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {shelf.products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            isCompared={compareIds.includes(p.id)}
            onToggleCompare={() => toggleCompare(p.id)}
            maxReached={maxReached}
          />
        ))}
      </div>

      {/* Compare bar — shown when ≥ 2 selected */}
      {compareIds.length >= 2 && (
        <CompareBar
          products={compareProducts}
          onRemove={id => setCompareIds(prev => prev.filter(x => x !== id))}
          onClear={() => setCompareIds([])}
          onCompare={() => setShowModal(true)}
        />
      )}

      {/* View All button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Link
          href={shelf.categoryHref}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            6,
            padding:        "10px 22px",
            borderRadius:   980,
            border:         `1.5px solid ${btnHovered ? "#0071e3" : "#c7c7cc"}`,
            color:          btnHovered ? "#0071e3" : "#1d1d1f",
            background:     btnHovered ? "#f0f7ff" : "transparent",
            fontSize:       13,
            fontWeight:     500,
            letterSpacing:  "-0.01em",
            textDecoration: "none",
            transition:     "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
          }}
        >
          View all {shelf.category}
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>

      {/* Compare modal */}
      {showModal && (
        <CompareModal
          products={compareProducts}
          category={shelf.category}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProductShelves() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-14">

      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span className="text-[#1d1d1f]">Our Products.&nbsp;</span>
          <span className="text-[#6e6e73]">Something for every home.</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
        {SHELVES.map(shelf => (
          <ShelfRow key={shelf.category} shelf={shelf} />
        ))}
      </div>

    </section>
  );
}

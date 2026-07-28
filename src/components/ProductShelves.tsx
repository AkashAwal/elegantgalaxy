"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import EnquireButton from "@/components/EnquireButton";

// ─── Real product data & illustrations (shared with the category pages) ──────

import { MODELS as TV_MODELS, tvName } from "@/data/led-tvs";
import { CAPACITY_SPECS as WASHER_SPECS, washerName } from "@/data/washing-machines";
import { MODELS as COOLER_MODELS, coolerName } from "@/data/air-coolers";
import { CoolerIllustration } from "@/app/products/air-coolers/AirCoolersClient";
import { NAME as COOKTOP_NAME, WATTS as COOKTOP_WATTS, IMAGES as COOKTOP_IMAGES } from "@/data/infrared-cooktops";

// ─── Featured picks — real models pulled from each category page ─────────────

const androidTv = TV_MODELS.find((m) => m.id === "android")!;
const webos4kTv  = TV_MODELS.find((m) => m.id === "webos-4k")!;
const webos2kTv  = TV_MODELS.find((m) => m.id === "webos-2k")!;
const googleTv   = TV_MODELS.find((m) => m.id === "google")!;


const iceCool100    = COOLER_MODELS.find((m) => m.id === "c-ice-cool")!;
const iceStorm160   = COOLER_MODELS.find((m) => m.id === "c-ice-storm")!;
const iceWind90     = COOLER_MODELS.find((m) => m.id === "d-ice-wind")!;
const windStormPlus = COOLER_MODELS.find((m) => m.id === "d-wind-storm-plus")!;

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
      { id: "washer-7",  name: washerName(7),  subtitle: `Semi-Automatic · 7kg`,  href: `/products/washing-machines?cap=7`,  bg: "#f0f0f5", imageSrc: WASHER_SPECS[7].image },
      { id: "washer-9",  name: washerName(9),  subtitle: `Semi-Automatic · 9kg`,  href: `/products/washing-machines?cap=9`,  bg: "#f0f0f5", imageSrc: WASHER_SPECS[9].image },
      { id: "washer-10", name: washerName(10), subtitle: `Semi-Automatic · 10kg`, href: `/products/washing-machines?cap=10`, bg: "#f0f0f5", imageSrc: WASHER_SPECS[10].image },
      { id: "washer-12", name: washerName(12), subtitle: `Semi-Automatic · 12kg`, href: `/products/washing-machines?cap=12`, bg: "#f0f0f5", imageSrc: WASHER_SPECS[12].image },
    ],
  },
  {
    category:     "Air Coolers",
    categoryHref: "/products/air-coolers",
    products: [
      { id: iceCool100.id,    name: coolerName(iceCool100, 100),    subtitle: `Commercial · 100L`,  href: `/products/air-coolers/${iceCool100.id}?cap=100`,    bg: "#fff", illustration: <CoolerIllustration model={iceCool100} /> },
      { id: iceStorm160.id,   name: coolerName(iceStorm160, 160),   subtitle: `Commercial · 160L`,  href: `/products/air-coolers/${iceStorm160.id}?cap=160`,   bg: "#fff", illustration: <CoolerIllustration model={iceStorm160} /> },
      { id: iceWind90.id,     name: coolerName(iceWind90, 90),      subtitle: `Domestic · 90L`,     href: `/products/air-coolers/${iceWind90.id}`,     bg: "#fff", illustration: <CoolerIllustration model={iceWind90} /> },
      { id: windStormPlus.id, name: coolerName(windStormPlus, 110), subtitle: `Domestic · 110L`,    href: `/products/air-coolers/${windStormPlus.id}`, bg: "#fff", illustration: <CoolerIllustration model={windStormPlus} /> },
    ],
  },
  {
    category:     "Infrared Cooktops",
    categoryHref: "/products/infrared-cooktops",
    products: [
      { id: "cooktop", name: COOKTOP_NAME, subtitle: `Single Burner · ${COOKTOP_WATTS}W`, href: `/products/infrared-cooktops`, bg: "#f0f0f5", imageSrc: COOKTOP_IMAGES.front },
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

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        background:   "#fff",
        borderRadius: 16,
        overflow:     "hidden",
        boxShadow:    "0 2px 10px rgba(0,0,0,0.07)",
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
          <EnquireButton
            product={product.name}
            style={{
              textAlign:      "center",
              padding:        "7px 0",
              borderRadius:   7,
              border:         "1.5px solid #0071e3",
              background:     "transparent",
              color:          "#0071e3",
              fontSize:       12,
              fontWeight:     500,
              width:          "100%",
              display:        "block",
            }}
          >
            Enquire
          </EnquireButton>
        </div>
      </div>
    </div>
  );
}

// ─── Single shelf row ─────────────────────────────────────────────────────────

function ShelfRow({ shelf }: { shelf: Shelf }) {
  const [btnHovered, setBtnHovered] = useState(false);

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

      {/* Cards row — single column on mobile (2-up was too thin to show the
          photo at a usable size), 2-up from sm, 4 equal-width cards from lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {shelf.products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

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

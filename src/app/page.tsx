import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LatestSection from "@/components/LatestSection";
import DifferenceSection from "@/components/DifferenceSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ProductShelves from "@/components/ProductShelves";
import AboutSection from "@/components/AboutSection";
import DistributorSection from "@/components/DistributorSection";
import FAQSection from "@/components/FAQSection";
import TVShowcase from "@/components/TVShowcase";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://elegantgalaxy.in",
  },
};

// ── Structured data ───────────────────────────────────────────────────────────
// Tells search engines the site's official name, so results show "Elegant
// Galaxy" instead of the bare domain above the title.

const JSON_LD = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Elegant Galaxy",
  url:        "https://elegantgalaxy.in",
  publisher: {
    "@type": "Organization",
    name:    "Elegant Galaxy",
    url:     "https://elegantgalaxy.in",
    logo:    "https://elegantgalaxy.in/logo.png",
  },
};

// ── Category data — real product photos ────────────────────────────────────────

// Each image below is pre-cropped to its content's bounding box (no baked-in
// transparent padding) so the fixed flex gap between tiles reads as equal
// spacing everywhere, instead of stacking with whatever padding the source
// asset happened to have.
const CATEGORIES = [
  {
    label:  "LED TVs",
    href:   "/products/led-tvs",
    image:  "/images/tvs/android-front-homepage.png",
    width:  810,
    height: 487,
  },
  {
    label:  "Washing Machines",
    href:   "/products/washing-machines",
    image:  "/washing-machines/washer-homepage.png",
    width:  882,
    height: 1368,
  },
  {
    label:  "Air Coolers",
    href:   "/products/air-coolers",
    image:  "/images/air-coolers/commercial-front-homepage.png",
    width:  476,
    height: 761,
  },
  {
    label:  "Infrared Cooktops",
    href:   "/products/infrared-cooktops",
    image:  "/cooktops/cooktop-homepage.png",
    width:  900,
    height: 838,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main id="main-content" className="bg-[#f5f5f7] min-h-screen">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ── TV Showcase hero ─────────────────────────────────────────── */}
      <TVShowcase />

      {/* ── Store intro ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-8 pt-12 pb-8">
        {/* Stack on mobile; side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">

          {/* Left — page title */}
          <h1
            className="font-semibold text-[#1d1d1f] leading-none text-[40px] sm:text-[52px] lg:text-[64px]"
            style={{ letterSpacing: "-0.003em" }}
          >
            Elegant Galaxy
          </h1>

          {/* Right — tagline + links */}
          <div className="text-left sm:text-right pt-0 sm:pt-3" style={{ maxWidth: 300 }}>
            <p
              className="font-semibold text-[#1d1d1f] leading-snug mb-4"
              style={{ fontSize: 19 }}
            >
              The best way to experience premium home appliances.
            </p>
            <Link
              href="/contact"
              className="block text-[#0071e3] hover:underline"
              style={{ fontSize: 14 }}
            >
              Customer Care ↗
            </Link>
          </div>

        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
      </div>

      {/* ── Category grid ─────────────────────────────────────────────── */}
      {/*
        2x2 grid on mobile so all four categories are visible without
        scrolling; single row from md+ once there's room to spread them out.
      */}
      <section className="mx-auto max-w-[1440px] px-8 py-12">
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:gap-16 md:justify-center">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex flex-col items-center group"
            >
              <div
                className="flex items-end justify-center mb-4 md:mb-6 h-[120px] md:h-[200px]"
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={cat.width}
                  height={cat.height}
                  style={{ height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain" }}
                />
              </div>
              <span
                className="text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-150 text-center"
                style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}
              >
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Latest products section ────────────────────────────────────── */}
      <LatestSection />

      <DifferenceSection />

      {/* ── Product shelves ────────────────────────────────────────────── */}
      <ProductShelves />

      {/* ── Testimonials — social proof right after browsing products ──── */}
      <GoogleReviewsSection />

      {/* ── About ─────────────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── Distributor — B2B pitch placed after the B2C flow so it doesn't
             interrupt shoppers browsing products ────────────────────────── */}
      <DistributorSection />

    </main>
  );
}

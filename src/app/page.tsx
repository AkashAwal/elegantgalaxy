import Link from "next/link";
import LatestSection from "@/components/LatestSection";
import DifferenceSection from "@/components/DifferenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InteractiveBoardSection from "@/components/InteractiveBoardSection";
import ProductShelves from "@/components/ProductShelves";
import AboutSection from "@/components/AboutSection";
import DistributorSection from "@/components/DistributorSection";
import FAQSection from "@/components/FAQSection";
import TVShowcase from "@/components/TVShowcase";

// ── Placeholder product silhouettes (swap with real <Image /> later) ──────────

function TVIcon() {
  return (
    <svg viewBox="0 0 200 160" width="200" height="160" fill="none">
      {/* Screen body */}
      <rect x="10" y="8" width="180" height="114" rx="8" fill="#1d1d1f" />
      <rect x="18" y="16" width="164" height="98" rx="4" fill="#2c2c2e" />
      {/* Faint screen glow */}
      <rect x="22" y="20" width="156" height="90" rx="3" fill="#3a3a3c" opacity="0.6" />
      {/* Stand neck */}
      <rect x="90" y="122" width="20" height="14" rx="2" fill="#6e6e73" />
      {/* Stand base */}
      <rect x="68" y="136" width="64" height="6" rx="3" fill="#6e6e73" />
    </svg>
  );
}

function WashingMachineIcon() {
  return (
    <svg viewBox="0 0 150 190" width="150" height="190" fill="none">
      {/* Body */}
      <rect x="10" y="10" width="130" height="170" rx="10" fill="#e5e5ea" />
      <rect x="16" y="16" width="118" height="158" rx="8" fill="#d1d1d6" />
      {/* Top panel */}
      <rect x="24" y="24" width="50" height="8" rx="4" fill="#aeaeb2" />
      <circle cx="106" cy="28" r="6" fill="#aeaeb2" />
      <circle cx="122" cy="28" r="6" fill="#aeaeb2" />
      {/* Door ring */}
      <circle cx="75" cy="108" r="46" fill="#8e8e93" />
      <circle cx="75" cy="108" r="38" fill="#636366" />
      <circle cx="75" cy="108" r="28" fill="#48484a" />
      {/* Door glass */}
      <circle cx="75" cy="108" r="20" fill="#2c2c2e" />
      <circle cx="68" cy="101" r="5" fill="#3a3a3c" opacity="0.8" />
    </svg>
  );
}

function AirCoolerIcon() {
  return (
    <svg viewBox="0 0 120 200" width="120" height="200" fill="none">
      {/* Tower body */}
      <rect x="20" y="10" width="80" height="170" rx="16" fill="#dbeafe" />
      <rect x="28" y="18" width="64" height="120" rx="10" fill="#bfdbfe" />
      {/* Grille lines */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="34" y={28 + i * 18} width="52" height="7" rx="3.5" fill="#93c5fd" />
      ))}
      {/* Fan circle */}
      <circle cx="60" cy="162" r="18" fill="#93c5fd" />
      <circle cx="60" cy="162" r="10" fill="#60a5fa" />
      <circle cx="60" cy="162" r="4" fill="#3b82f6" />
      {/* Base */}
      <rect x="24" y="176" width="72" height="10" rx="5" fill="#93c5fd" />
    </svg>
  );
}

function CooktopIcon() {
  return (
    <svg viewBox="0 0 220 140" width="220" height="140" fill="none">
      {/* Body */}
      <rect x="10" y="20" width="200" height="100" rx="12" fill="#1c1c1e" />
      <rect x="18" y="28" width="184" height="84" rx="8" fill="#2c2c2e" />
      {/* Left burner */}
      <circle cx="76" cy="70" r="26" fill="none" stroke="#ff6b35" strokeWidth="3.5" />
      <circle cx="76" cy="70" r="16" fill="none" stroke="#ff9a5c" strokeWidth="2.5" />
      <circle cx="76" cy="70" r="6" fill="#ff6b35" />
      {/* Right burner */}
      <circle cx="148" cy="70" r="26" fill="none" stroke="#ff6b35" strokeWidth="3.5" />
      <circle cx="148" cy="70" r="16" fill="none" stroke="#ff9a5c" strokeWidth="2.5" />
      <circle cx="148" cy="70" r="6" fill="#ff6b35" />
      {/* Knob indicators */}
      <rect x="60" y="34" width="32" height="6" rx="3" fill="#48484a" />
      <rect x="132" y="34" width="32" height="6" rx="3" fill="#48484a" />
    </svg>
  );
}

// ── Category data ─────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    label:   "LED TVs",
    href:    "/products/led-tvs",
    icon:    <TVIcon />,
  },
  {
    label:   "Washing Machines",
    href:    "/products/washing-machines",
    icon:    <WashingMachineIcon />,
  },
  {
    label:   "Air Coolers",
    href:    "/products/air-coolers",
    icon:    <AirCoolerIcon />,
  },
  {
    label:   "Infrared Cooktops",
    href:    "/products/infrared-cooktops",
    icon:    <CooktopIcon />,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main id="main-content" className="bg-[#f5f5f7] min-h-screen">

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

      {/* ── Category carousel ─────────────────────────────────────────── */}
      {/*
        On mobile the icons are too wide to fit in a single row —
        overflow-x-auto gives a horizontal scroll, same pattern as the
        LatestSection/DifferenceSection carousels.
      */}
      <section className="mx-auto max-w-[1440px] px-8 py-12 overflow-hidden">
        <div
          className="flex gap-8 md:gap-16 md:justify-center overflow-x-auto pb-2 md:pb-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex flex-col items-center group shrink-0"
            >
              <div
                className="flex items-end justify-center mb-6"
                style={{ height: 200 }}
              >
                {cat.icon}
              </div>
              <span
                className="text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-150"
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

      {/* ── Interactive Smart Board showcase ─────────────────────────────── */}
      <InteractiveBoardSection />

      {/* ── Testimonials — social proof right after browsing products ──── */}
      <TestimonialsSection />

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

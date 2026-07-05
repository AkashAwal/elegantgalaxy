"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode, CSSProperties } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconWarranty() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 3L5 8v10c0 8.28 5.6 16.02 13 18 7.4-1.98 13-9.72 13-18V8L18 3z"
        fill="#C8A951" fillOpacity="0.15" stroke="#C8A951" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M13 18l3.5 3.5L23 14" stroke="#C8A951" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconEnergy() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" fill="#bbf7d0" />
      <path d="M20 6l-8 14h7l-3 10 8-14h-7l3-10z" fill="#16a34a" />
    </svg>
  );
}
function IconEMI() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="9" width="28" height="18" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.6" />
      <rect x="4" y="14" width="28" height="5" fill="#3b82f6" fillOpacity="0.25" />
      <rect x="8" y="21" width="8" height="2.5" rx="1.25" fill="#3b82f6" />
      <rect x="20" y="21" width="4" height="2.5" rx="1.25" fill="#3b82f6" />
      <rect x="26" y="21" width="4" height="2.5" rx="1.25" fill="#3b82f6" />
    </svg>
  );
}
function IconInstall() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" fill="#fef3c7" />
      <path d="M23.5 12.5a5 5 0 0 0-7 7l-5 5 2 2 5-5a5 5 0 0 0 7-7l-3 3-2-2 3-3z"
        fill="#d97706" />
    </svg>
  );
}
function IconService() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" fill="#ede9fe" />
      <path d="M18 9a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#7c3aed" />
      <path d="M9 27c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconCertified() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" fill="#fce7f3" />
      <path d="M18 6l2.5 6.5H27l-5.5 4 2 6.5L18 19l-5.5 4 2-6.5L9 12.5h6.5L18 6z"
        fill="#db2777" />
    </svg>
  );
}
function IconSupport() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" fill="#ccfbf1" />
      <path d="M10 18a8 8 0 0 1 16 0" stroke="#0d9488" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <rect x="8" y="18" width="4" height="6" rx="2" fill="#0d9488" />
      <rect x="24" y="18" width="4" height="6" rx="2" fill="#0d9488" />
    </svg>
  );
}
function IconReturns() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" fill="#fff7ed" />
      <path d="M11 18a7 7 0 0 1 12-4.9" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M25 18a7 7 0 0 1-12 4.9" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M9 13l2 5 5-2" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 23l-2-5-5 2" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDelivery() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" fill="#dbeafe" />
      <rect x="7" y="14" width="14" height="10" rx="2" fill="#2563eb" />
      <path d="M21 16h4l4 4v4h-8V16z" fill="#1d4ed8" />
      <circle cx="12" cy="26" r="2.5" fill="#1e40af" />
      <circle cx="26" cy="26" r="2.5" fill="#1e40af" />
    </svg>
  );
}
function IconAward() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="16" r="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.6" />
      <path d="M18 10l1.8 5.4h5.7l-4.6 3.4 1.8 5.4L18 21l-4.7 3.2 1.8-5.4-4.6-3.4h5.7L18 10z"
        fill="#ca8a04" />
      <path d="M13 25l-2 7h14l-2-7" stroke="#ca8a04" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ── Card data ──────────────────────────────────────────────────────────────────

type DiffCard = {
  icon:  ReactNode;
  title: string;
  desc:  string;
};

const CARDS: DiffCard[] = [
  { icon: <IconWarranty />,  title: "1-Year Warranty",       desc: "Every product backed by our industry-leading 1-year warranty."          },
  { icon: <IconEnergy />,    title: "Energy Efficient",       desc: "5-star rated appliances that save electricity without sacrificing power." },
  { icon: <IconEMI />,       title: "No-Cost EMI",            desc: "Split your purchase into easy monthly instalments at zero extra cost."    },
  { icon: <IconInstall />,   title: "Free Installation",      desc: "Expert technicians set everything up — free of charge, at your doorstep." },
  { icon: <IconService />,   title: "Factory Repairs",        desc: "Every repair handled in-house by our own technicians — never outsourced." },
  { icon: <IconCertified />, title: "ISI Certified",          desc: "Safety and quality certified by the Bureau of Indian Standards."         },
  { icon: <IconSupport />,   title: "24 / 7 Support",         desc: "Our customer care team is available around the clock, every day."        },
  { icon: <IconReturns />,   title: "30-Day Returns",         desc: "Not happy? Return any product within 30 days, no questions asked."       },
  { icon: <IconDelivery />,  title: "Pan-India Delivery",     desc: "Fast, tracked delivery to every pin code across the country."            },
  { icon: <IconAward />,     title: "Award-Winning Design",   desc: "Recognised for design excellence at national and international forums."   },
];

const LOOPED = [...CARDS, ...CARDS];

// ── Flat static card ────────────────────────────────────────────────────────────

function LiftCard({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden rounded-[18px]"
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.07)", ...style }}
    >
      {children}
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

const CARD_GAP    = 16;
const AUTOPLAY_MS = 3500;

// One step = one card's width. Since 3 cards + 2 gaps fill the container,
// a single card's width is (clientWidth + gap) / 3.
function getStep(el: HTMLDivElement) {
  return (el.clientWidth + CARD_GAP) / 3;
}

export default function DifferenceSection() {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const pausedRef  = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const el = scrollRef.current;
      if (el) el.scrollBy({ left: getStep(el), behavior: "smooth" });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const scrollRight = () => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: getStep(el), behavior: "smooth" });
  };
  const scrollLeft = () => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: -getStep(el), behavior: "smooth" });
  };

  return (
    <section className="w-full pb-16">

      {/* Heading */}
      <div className="mx-auto max-w-[1440px] px-8 mb-7">
        <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span className="text-[#1d1d1f]">The Elegant difference.&nbsp;</span>
          <span className="text-[#6e6e73]">Even more reasons to shop with us.</span>
        </h2>
      </div>

      {/* 3-card autoplaying carousel */}
      <div
        className="relative mx-auto max-w-[1440px] px-8"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto"
          style={{
            gap:             CARD_GAP,
            scrollbarWidth:  "none",
            msOverflowStyle: "none",
            paddingTop:      "16px",
            paddingBottom:   "36px",
            marginTop:       "-16px",
            marginBottom:    "-36px",
          }}
        >
          {LOOPED.map((card, i) => (
            <LiftCard
              key={i}
              style={{
                flex:      `0 0 calc((100% - ${2 * CARD_GAP}px) / 3)`,
                height:    280,
                background: "#fff",
              }}
            >
              <div className="flex flex-col h-full px-8 pt-8 pb-7" style={{ minWidth: 0 }}>
                <div className="mb-5">{card.icon}</div>
                <p
                  className="text-[#1d1d1f] font-semibold mb-2 leading-snug"
                  style={{ fontSize: 20, letterSpacing: "-0.01em" }}
                >
                  {card.title}
                </p>
                <p
                  className="text-[#6e6e73] leading-snug"
                  style={{ fontSize: 15 }}
                >
                  {card.desc}
                </p>
              </div>
            </LiftCard>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full flex items-center justify-center
                     bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                     transition-colors duration-150 shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full flex items-center justify-center
                     bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                     transition-colors duration-150 shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>

    </section>
  );
}

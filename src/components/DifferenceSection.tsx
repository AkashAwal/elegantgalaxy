"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode, CSSProperties } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────

function CardIcon({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={36} height={36} />;
}
const IconWarranty  = () => <CardIcon src="/card icons/warranty.png"       alt="" />;
const IconEnergy    = () => <CardIcon src="/card icons/energy.png"         alt="" />;
const IconService   = () => <CardIcon src="/card icons/repair.png"         alt="" />;
const IconCertified = () => <CardIcon src="/card icons/certified.png"      alt="" />;
const IconSupport   = () => <CardIcon src="/card icons/customer-care.png"  alt="" />;
const IconDelivery  = () => <CardIcon src="/card icons/delivery.png"       alt="" />;
const IconTrusted   = () => <CardIcon src="/card icons/trust.png"          alt="" />;

// ── Card data ──────────────────────────────────────────────────────────────────

type DiffCard = {
  icon:  ReactNode;
  title: string;
  desc:  string;
};

const CARDS: DiffCard[] = [
  { icon: <IconWarranty />,  title: "2-Year Warranty",       desc: "Every product backed by our industry-leading 2-year warranty."          },
  { icon: <IconEnergy />,    title: "Energy Efficient",       desc: "5-star rated appliances that save electricity without sacrificing power." },
  { icon: <IconService />,   title: "Factory Repairs",        desc: "Every repair handled in-house by our own technicians - never outsourced." },
  { icon: <IconCertified />, title: "Certified Quality",       desc: "Every product tested and certified to meet strict safety standards."     },
  { icon: <IconSupport />,   title: "Real Customer Care",     desc: "Reach our support team Mon-Sat, 9 AM - 6 PM IST - always a real person." },
  { icon: <IconDelivery />,  title: "Pan-India Delivery",     desc: "Fast, tracked delivery to every pin code across the country."            },
  { icon: <IconTrusted />,   title: "Trusted Since 2012",     desc: "Over 2 million homes across 500+ Indian cities trust Elegant Galaxy."     },
];

const LOOPED = [...CARDS, ...CARDS];

// ── Flat static card ────────────────────────────────────────────────────────────

function LiftCard({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`relative flex-shrink-0 overflow-hidden rounded-[18px] ${className ?? ""}`}
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.07)", ...style }}
    >
      {children}
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

const CARD_GAP    = 16;
const AUTOPLAY_MS = 3500;

// One step = one card's width (plus the gap), measured from the DOM so it
// stays correct regardless of how many cards fit per screen at each breakpoint.
function getStep(el: HTMLDivElement) {
  const first = el.firstElementChild as HTMLElement | null;
  return first ? first.offsetWidth + CARD_GAP : el.clientWidth;
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
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 10, marginBottom: 10 }}>
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
            scrollSnapType:  "x mandatory",
          }}
        >
          {LOOPED.map((card, i) => (
            <LiftCard
              key={i}
              className="basis-full sm:basis-[46%] lg:basis-[calc((100%-32px)/3)] shrink-0 grow-0"
              style={{
                height:    280,
                background: "#fff",
                scrollSnapAlign: "start",
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

        {/* Left arrow — hidden on mobile where the card is full-width and would sit under it */}
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full items-center justify-center
                     bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                     transition-colors duration-150 shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2
                     w-12 h-12 rounded-full items-center justify-center
                     bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                     transition-colors duration-150 shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>

        {/* Mobile arrows — below the card instead of overlaying it */}
        <div className="flex sm:hidden justify-center gap-4 mt-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full flex items-center justify-center
                       bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                       transition-colors duration-150 shadow-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full flex items-center justify-center
                       bg-[#e8e8ed] hover:bg-[#d1d1d6] text-[#1d1d1f]
                       transition-colors duration-150 shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

    </section>
  );
}

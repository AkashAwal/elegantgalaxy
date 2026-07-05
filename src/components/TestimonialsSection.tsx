"use client";

import { useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// ── Testimonial data ────────────────────────────────────────────────────────────

type Testimonial = {
  quote:    string;
  name:     string;
  location: string;
  product:  string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:    "The 55\" QLED completely changed our living room. Picture quality is stunning and the smart features actually work smoothly, unlike our old TV.",
    name:     "Priya Sharma",
    location: "Pune, Maharashtra",
    product:  "Elegant 55\" 4K QLED TV",
  },
  {
    quote:    "Free installation was a lifesaver — the technician arrived on time and even walked us through the app setup. Great after-sales support.",
    name:     "Rohan Mehta",
    location: "Ahmedabad, Gujarat",
    product:  "Elegant 8kg Top Load Washer",
  },
  {
    quote:    "Bought the desert cooler for our shop and it handles the summer heat effortlessly. Runs quiet enough that customers don't even notice it.",
    name:     "Anitha Reddy",
    location: "Hyderabad, Telangana",
    product:  "Elegant 80L Desert Cooler",
  },
];

const LOOPED = [...TESTIMONIALS, ...TESTIMONIALS];

// ── Card ─────────────────────────────────────────────────────────────────────────

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="relative shrink-0 grow-0 basis-full sm:basis-[46%] lg:basis-[calc((100%-32px)/3)]"
      style={{
        background:   "#fff",
        borderRadius: 18,
        padding:      "28px 26px",
        boxShadow:    "0 2px 10px rgba(0,0,0,0.07)",
        display:      "flex",
        flexDirection:"column",
        height:       "100%",
        scrollSnapAlign: "start",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} fill="#F5A623" color="#F5A623" />
        ))}
      </div>

      {/* Quote */}
      <p style={{
        fontSize:     15,
        lineHeight:   1.6,
        color:        "#1d1d1f",
        marginBottom: 22,
        flex:         1,
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Attribution */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 2 }}>
          {t.name}
        </p>
        <p style={{ fontSize: 12.5, color: "#6e6e73", marginBottom: 6 }}>
          {t.location}
        </p>
        <p style={{ fontSize: 12, color: "#0071e3", fontWeight: 500 }}>
          {t.product}
        </p>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

const CARD_GAP    = 20;
const AUTOPLAY_MS = 4000;

// One step = one card's width (plus the gap), measured from the DOM so it
// stays correct regardless of how many cards fit per screen at each breakpoint.
function getStep(el: HTMLDivElement) {
  const first = el.firstElementChild as HTMLElement | null;
  return first ? first.offsetWidth + CARD_GAP : el.clientWidth;
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

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
    <section className="w-full py-14">

      {/* Heading */}
      <div className="mx-auto max-w-[1440px] px-8 mb-8">
        <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span className="text-[#1d1d1f]">What our customers say.&nbsp;</span>
          <span className="text-[#6e6e73]">Real homes, real reviews.</span>
        </h2>
      </div>

      {/* Autoplaying carousel */}
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
            paddingTop:      "8px",
            paddingBottom:   "8px",
            scrollSnapType:  "x mandatory",
          }}
        >
          {LOOPED.map((t, i) => (
            <TestimonialCard key={i} t={t} />
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

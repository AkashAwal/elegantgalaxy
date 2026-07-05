"use client";

import { useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { ReviewItem } from "@/lib/googleReviews";

// ── Card ─────────────────────────────────────────────────────────────────────────

function TestimonialCard({ t }: { t: ReviewItem }) {
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
      {/* Name + stars */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f" }}>
          {t.name}
        </p>
        <div style={{ display: "flex", gap: 2, flexShrink: 0 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              fill={i < Math.round(t.rating) ? "#F5A623" : "none"}
              color="#F5A623"
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <p style={{
        fontSize:     15,
        lineHeight:   1.6,
        color:        "#1d1d1f",
        flex:         1,
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>
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

export interface TestimonialsSectionProps {
  reviews:       ReviewItem[];
  overallRating?: number | null;
  totalReviews?:  number | null;
  isLive?:        boolean;
  placeId?:       string | null;
}

export default function TestimonialsSection({
  reviews,
  overallRating = null,
  totalReviews  = null,
  isLive        = false,
  placeId       = null,
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const looped    = reviews.length > 1 ? [...reviews, ...reviews] : reviews;

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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
            <span className="text-[#1d1d1f]">What our customers say.&nbsp;</span>
            <span className="text-[#6e6e73]">Real homes, real reviews.</span>
          </h2>

          {isLive && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              {/* Google rating badge */}
              <a
                href={placeId ? `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(placeId)}` : undefined}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            8,
                  padding:        "8px 14px",
                  borderRadius:   980,
                  background:     "#fff",
                  border:         "1px solid rgba(0,0,0,0.08)",
                  boxShadow:      "0 2px 8px rgba(0,0,0,0.05)",
                  textDecoration: "none",
                  flexShrink:     0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                  <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
                </svg>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "#1d1d1f" }}>
                  {overallRating != null ? overallRating.toFixed(1) : "—"}
                </span>
                <div style={{ display: "flex", gap: 1 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={overallRating != null && i < Math.round(overallRating) ? "#F5A623" : "none"}
                      color="#F5A623"
                    />
                  ))}
                </div>
                <span style={{ fontSize: 13, color: "#6e6e73" }}>
                  {totalReviews != null ? `${totalReviews.toLocaleString()} reviews` : "on Google"}
                </span>
              </a>

              {placeId && (
                <a
                  href={`https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13.5, color: "#0071e3", fontWeight: 500, textDecoration: "none", flexShrink: 0 }}
                >
                  Write a review ↗
                </a>
              )}
            </div>
          )}
        </div>
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
          {looped.map((t, i) => (
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

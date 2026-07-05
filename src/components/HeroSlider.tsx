"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { ShowcaseView } from "@/components/ProductShowcase";

const DEFAULT_BGS = ["#08090e", "#070f1d", "#090d10"] as const;
const DEFAULT_GLOWS = [
  "rgba(96, 165, 250, 0.11)",
  "rgba(129, 140, 248, 0.11)",
  "rgba(52, 211, 153, 0.10)",
] as const;

export default function HeroSlider({
  views,
}: {
  views: [ShowcaseView, ShowcaseView, ShowcaseView];
}) {
  const [active, setActive] = useState(0);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % views.length);
    }, 4000);
    return () => clearInterval(id);
  }, [views.length]);

  const view = views[active];
  const bg   = view.bg   ?? DEFAULT_BGS[active % DEFAULT_BGS.length];
  const glow = view.glow ?? DEFAULT_GLOWS[active % DEFAULT_GLOWS.length];

  return (
    <div
      className="flex flex-col justify-start pt-8 pb-12 lg:block lg:relative lg:pt-14 lg:pb-[72px] lg:min-h-screen"
      style={{
        position:   "relative",
        overflow:   "hidden",
        background: bg,
        transition: "background 0.75s ease",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position:      "absolute",
          inset:         0,
          background:    `radial-gradient(ellipse 72% 62% at 50% 56%, ${glow} 0%, transparent 68%)`,
          transition:    "background 0.75s ease",
          pointerEvents: "none",
        }}
      />

      {/* Crossfading images — stacked above text on mobile, centered overlay from lg+ */}
      <div
        className="relative lg:absolute lg:inset-0 flex items-center justify-center mb-10 lg:mb-0"
        style={{ zIndex: 1 }}
      >
        {views.map((v, i) => (
          <div
            key={v.src}
            className="w-[78vw] h-[49vw] max-w-[320px] max-h-[200px] lg:w-[min(720px,65vw)] lg:h-[min(450px,40vw)] lg:max-w-none lg:max-h-none"
            style={{
              position:   i === active ? "relative" : "absolute",
              opacity:    i === active ? 1 : 0,
              transition: "opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Image
              src={v.src}
              alt={v.tag}
              fill
              style={{ objectFit: "contain" }}
              priority={i === 0}
              sizes="(max-width: 1024px) 78vw, 65vw"
            />
          </div>
        ))}
      </div>

      {/* Overlay text — centered below the image on mobile, left-aligned overlay from lg+ */}
      <div
        className="relative text-center px-6 mx-auto lg:absolute lg:text-left lg:px-0 lg:mx-0 lg:top-1/2 lg:-translate-y-1/2 lg:left-[clamp(24px,5vw,80px)]"
        style={{
          maxWidth:  300,
          zIndex:    2,
        }}
      >
        <p
          key={`tag-${active}`}
          className="tv-fadein"
          style={{
            fontSize:      10,
            fontWeight:    600,
            letterSpacing: "0.12em",
            color:         "rgba(255,255,255,0.35)",
            marginBottom:  14,
            textTransform: "uppercase",
          }}
        >
          {view.tag}
        </p>
        <h2
          key={`title-${active}`}
          className="tv-fadein-d1"
          style={{
            fontSize:      "clamp(26px, 2.8vw, 48px)",
            fontWeight:    700,
            color:         "#f5f5f7",
            lineHeight:    1.1,
            letterSpacing: "-0.023em",
            marginBottom:  16,
          }}
        >
          {view.title}
        </h2>
        <p
          key={`desc-${active}`}
          className="tv-fadein-d2"
          style={{
            fontSize:   14,
            color:      "rgba(245,245,247,0.58)",
            lineHeight: 1.68,
          }}
        >
          {view.desc}
        </p>
      </div>

      {/* Bottom dot nav */}
      <div
        className="relative mt-10 justify-center lg:absolute lg:mt-0 lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2"
        style={{
          display:        "flex",
          gap:            8,
          alignItems:     "center",
          zIndex:         2,
        }}
      >
        {views.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width:        i === active ? 32 : 8,
              height:       8,
              borderRadius: 4,
              background:   i === active ? "#f5f5f7" : "rgba(255,255,255,0.3)",
              border:       "none",
              cursor:       "pointer",
              padding:      0,
              transition:   "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

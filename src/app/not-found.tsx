"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    function drawStatic() {
      const w = canvas!.width;
      const h = canvas!.height;
      const imageData = ctx!.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.floor(Math.random() * 255);
        data[i]     = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }

      ctx!.putImageData(imageData, 0, 0);

      // Occasional tube flicker
      if (Math.random() < 0.018) {
        ctx!.fillStyle = "rgba(255,255,255,0.07)";
        ctx!.fillRect(0, 0, w, h);
      }

      animId = requestAnimationFrame(drawStatic);
    }

    drawStatic();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <main id="main-content" style={{
      minHeight:      "100vh",
      background:     "#1d1d1f",
      display:        "flex",
      flexDirection:  "column",
      alignItems:     "center",
      justifyContent: "center",
      padding:        "40px 24px",
      gap:            48,
    }}>

      {/* ── TV set ─────────────────────────────────────────────────────────── */}
      <div style={{ position: "relative" }}>

        {/* Rabbit-ear antenna */}
        <div style={{
          position:       "absolute",
          top:            -58,
          left:           "50%",
          transform:      "translateX(-50%)",
          display:        "flex",
          gap:            6,
          justifyContent: "center",
        }}>
          <div style={{
            width:           2,
            height:          56,
            background:      "linear-gradient(to top, #666, #444)",
            borderRadius:    2,
            transformOrigin: "bottom center",
            transform:       "rotate(-30deg)",
          }} />
          <div style={{
            width:           2,
            height:          56,
            background:      "linear-gradient(to top, #666, #444)",
            borderRadius:    2,
            transformOrigin: "bottom center",
            transform:       "rotate(30deg)",
          }} />
        </div>

        {/* TV body */}
        <div style={{
          width:        "min(420px, 82vw)",
          background:   "linear-gradient(160deg, #404040 0%, #1c1c1c 100%)",
          borderRadius: 26,
          padding:      "26px 30px 30px",
          boxSizing:    "border-box",
          boxShadow: [
            "0 28px 70px rgba(0,0,0,0.75)",
            "0 8px 28px rgba(0,0,0,0.5)",
            "inset 0 1px 0 rgba(255,255,255,0.08)",
            "inset 0 -2px 0 rgba(0,0,0,0.4)",
          ].join(", "),
        }}>

          {/* Screen bezel */}
          <div style={{
            background:   "#0b0b0b",
            borderRadius: 14,
            padding:      11,
            boxSizing:    "border-box",
            boxShadow:    "inset 0 4px 12px rgba(0,0,0,0.95), inset 0 0 0 1px rgba(0,0,0,0.6)",
          }}>
            {/* Screen canvas */}
            <div style={{ position: "relative", borderRadius: 7, overflow: "hidden" }}>
              <canvas
                ref={canvasRef}
                width={420}
                height={315}
                style={{ display: "block", width: "100%", height: "auto" }}
              />

              {/* Scanlines overlay */}
              <div style={{
                position:      "absolute",
                inset:         0,
                background:    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.13) 2px, rgba(0,0,0,0.13) 4px)",
                pointerEvents: "none",
              }} />

              {/* CRT vignette */}
              <div style={{
                position:      "absolute",
                inset:         0,
                background:    "radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(0,0,0,0.6) 100%)",
                pointerEvents: "none",
              }} />

              {/* NO SIGNAL text */}
              <div style={{
                position:       "absolute",
                inset:          0,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                pointerEvents:  "none",
              }}>
                <p style={{
                  fontFamily:    "monospace",
                  fontSize:      13,
                  fontWeight:    700,
                  letterSpacing: "0.4em",
                  color:         "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  textShadow:    "0 0 14px rgba(255,255,255,0.35)",
                }}>
                  NO SIGNAL
                </p>
              </div>
            </div>
          </div>

          {/* Controls row */}
          <div style={{
            display:     "flex",
            alignItems:  "center",
            gap:         14,
            marginTop:   20,
            paddingLeft: 4,
          }}>
            {/* Channel dial */}
            <div style={{
              width:        26,
              height:       26,
              borderRadius: "50%",
              background:   "linear-gradient(145deg, #6a6a6a, #222)",
              boxShadow:    "0 3px 7px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.1)",
            }} />
            {/* Volume dial */}
            <div style={{
              width:        20,
              height:       20,
              borderRadius: "50%",
              background:   "linear-gradient(145deg, #585858, #1c1c1c)",
              boxShadow:    "0 2px 5px rgba(0,0,0,0.55)",
            }} />
            {/* Fine-tune dial */}
            <div style={{
              width:        16,
              height:       16,
              borderRadius: "50%",
              background:   "linear-gradient(145deg, #505050, #181818)",
              boxShadow:    "0 2px 4px rgba(0,0,0,0.5)",
            }} />
            <div style={{ flex: 1 }} />
            {/* Power LED */}
            <div style={{
              width:        9,
              height:       9,
              borderRadius: "50%",
              background:   "#ff3b30",
              boxShadow:    "0 0 8px rgba(255,59,48,0.8), 0 0 3px rgba(255,59,48,0.6)",
            }} />
          </div>

        </div>
      </div>

      {/* ── Copy & CTA ─────────────────────────────────────────────────────── */}
      <div style={{ textAlign: "center" }}>
        <p
          className="text-[64px] sm:text-[80px] lg:text-[96px]"
          style={{
            fontWeight:    700,
            letterSpacing: "-0.048em",
            color:         "#f5f5f7",
            lineHeight:    0.88,
            marginBottom:  18,
          }}>
          404
        </p>
        <p style={{
          fontSize:     18,
          color:        "rgba(245,245,247,0.38)",
          marginBottom: 36,
          lineHeight:   1.5,
        }}>
          This page has gone off the air.
        </p>
        <Link href="/" style={{
          display:        "inline-flex",
          alignItems:     "center",
          padding:        "13px 30px",
          borderRadius:   980,
          background:     "#0071e3",
          color:          "#fff",
          fontSize:       15,
          fontWeight:     500,
          textDecoration: "none",
        }}>
          Back to homepage
        </Link>
      </div>

    </main>
  );
}

"use client";

/**
 * The CRT television used on both error pages.
 * Extracted so error.tsx and global-error.tsx share one copy of the canvas
 * logic instead of drifting apart over time.
 *
 * Visual signature vs. the 404 not-found page:
 *   • Static has an amber tint (R+18, G×0.87, B×0.76) — reads "fault" not "dead air"
 *   • Screen text: BROADCAST ERROR + ERR_500 in amber
 *   • Power LED blinks amber instead of glowing steady red
 */

import { useEffect, useRef, useState } from "react";

export default function ErrorTV() {
  const canvasRef         = useRef<HTMLCanvasElement>(null);
  const [ledOn, setLedOn] = useState(true);

  // Amber fault-LED blink
  useEffect(() => {
    const id = setInterval(() => setLedOn(v => !v), 900);
    return () => clearInterval(id);
  }, []);

  // CRT static with amber tint
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    function drawStatic() {
      const w = canvas!.width;
      const h = canvas!.height;
      const img = ctx!.createImageData(w, h);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.floor(Math.random() * 255);
        d[i]     = Math.min(255, v + 18);
        d[i + 1] = Math.floor(v * 0.87);
        d[i + 2] = Math.floor(v * 0.76);
        d[i + 3] = 255;
      }
      ctx!.putImageData(img, 0, 0);
      if (Math.random() < 0.018) {
        ctx!.fillStyle = "rgba(255,140,40,0.06)";
        ctx!.fillRect(0, 0, w, h);
      }
      animId = requestAnimationFrame(drawStatic);
    }

    drawStatic();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div style={{ position: "relative" }}>

      {/* Rabbit-ear antenna */}
      <div style={{
        position: "absolute", top: -58, left: "50%",
        transform: "translateX(-50%)", display: "flex", gap: 6, justifyContent: "center",
      }}>
        {([-30, 30] as const).map(deg => (
          <div key={deg} style={{
            width: 2, height: 56,
            background: "linear-gradient(to top, #666, #444)",
            borderRadius: 2, transformOrigin: "bottom center",
            transform: `rotate(${deg}deg)`,
          }} />
        ))}
      </div>

      {/* TV body */}
      <div style={{
        width: "min(420px, 82vw)",
        background: "linear-gradient(160deg, #404040 0%, #1c1c1c 100%)",
        borderRadius: 26, padding: "26px 30px 30px",
        boxSizing: "border-box",
        boxShadow: [
          "0 28px 70px rgba(0,0,0,0.75)",
          "0 8px 28px rgba(0,0,0,0.5)",
          "inset 0 1px 0 rgba(255,255,255,0.08)",
          "inset 0 -2px 0 rgba(0,0,0,0.4)",
        ].join(", "),
      }}>

        {/* Screen bezel */}
        <div style={{
          background: "#0b0b0b", borderRadius: 14, padding: 11,
          boxSizing: "border-box",
          boxShadow: "inset 0 4px 12px rgba(0,0,0,0.95), inset 0 0 0 1px rgba(0,0,0,0.6)",
        }}>
          <div style={{ position: "relative", borderRadius: 7, overflow: "hidden" }}>
            <canvas ref={canvasRef} width={420} height={315} style={{ display: "block", width: "100%", height: "auto" }} />

            {/* Scanlines */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.13) 2px, rgba(0,0,0,0.13) 4px)",
            }} />

            {/* CRT vignette */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(0,0,0,0.6) 100%)",
            }} />

            {/* Amber on-screen text */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
            }}>
              <p style={{
                fontFamily: "monospace", fontSize: 13, fontWeight: 700,
                letterSpacing: "0.4em", textTransform: "uppercase",
                color: "rgba(255,190,80,0.75)",
                textShadow: "0 0 14px rgba(255,150,40,0.5)",
              }}>
                BROADCAST ERROR
              </p>
              <p style={{
                fontFamily: "monospace", fontSize: 10,
                letterSpacing: "0.28em", textTransform: "uppercase",
                color: "rgba(255,190,80,0.35)",
              }}>
                ERR_500
              </p>
            </div>
          </div>
        </div>

        {/* Controls row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20, paddingLeft: 4 }}>
          {/* Dials */}
          {[
            { w: 26, shadow: "0 3px 7px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.1)" },
            { w: 20, shadow: "0 2px 5px rgba(0,0,0,0.55)" },
            { w: 16, shadow: "0 2px 4px rgba(0,0,0,0.5)" },
          ].map(({ w, shadow }) => (
            <div key={w} style={{
              width: w, height: w, borderRadius: "50%",
              background: `linear-gradient(145deg, ${w === 26 ? "#6a6a6a" : w === 20 ? "#585858" : "#505050"}, ${w === 26 ? "#222" : w === 20 ? "#1c1c1c" : "#181818"})`,
              boxShadow: shadow,
            }} />
          ))}
          <div style={{ flex: 1 }} />
          {/* Blinking amber fault LED */}
          <div style={{
            width: 9, height: 9, borderRadius: "50%",
            background:  ledOn ? "#ff9500" : "#2c1a00",
            boxShadow:   ledOn ? "0 0 8px rgba(255,149,0,0.85), 0 0 3px rgba(255,149,0,0.6)" : "none",
            transition:  "background 0.12s ease, box-shadow 0.12s ease",
          }} />
        </div>

      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Fixed back-to-top button. Fades in after the user scrolls 400 px down
 * and smoothly scrolls the page back to the top on click.
 *
 * Position-fixed means it can be placed anywhere in the JSX tree without
 * affecting layout.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialise in case the page mounts already scrolled
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position:       "fixed",
        bottom:         28,
        right:          28,
        zIndex:         60,
        width:          44,
        height:         44,
        borderRadius:   "50%",
        background:     "#1d1d1f",
        color:          "#f5f5f7",
        border:         "none",
        cursor:         "pointer",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        boxShadow:      "0 4px 16px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.1)",
        // visibility controlled via opacity + transform so CSS can animate it
        opacity:        visible ? 1 : 0,
        transform:      visible ? "translateY(0)" : "translateY(10px)",
        transition:     "opacity 0.24s ease, transform 0.24s ease",
        pointerEvents:  visible ? "auto" : "none",
      }}
    >
      <ArrowUp size={18} strokeWidth={2.25} />
    </button>
  );
}

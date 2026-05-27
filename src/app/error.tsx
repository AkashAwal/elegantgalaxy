"use client";

import Link from "next/link";
import ErrorTV from "@/components/ErrorTV";

/**
 * Segment-level error boundary — shown when any page or its children throw.
 * Renders inside the root layout, so the Navbar and Footer remain visible.
 *
 * For errors in the root layout itself, see global-error.tsx.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Surface to error reporting; swap console.error for Sentry etc. in prod
  if (process.env.NODE_ENV !== "production") console.error(error);

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
      <ErrorTV />

      <div style={{ textAlign: "center" }}>
        <p style={{
          fontSize:      96,
          fontWeight:    700,
          letterSpacing: "-0.048em",
          color:         "#f5f5f7",
          lineHeight:    0.88,
          marginBottom:  18,
        }}>
          500
        </p>
        <p style={{
          fontSize:     18,
          color:        "rgba(245,245,247,0.38)",
          marginBottom: 36,
          lineHeight:   1.5,
        }}>
          Something went wrong on our end.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={reset}
            style={{
              display:      "inline-flex",
              alignItems:   "center",
              padding:      "13px 30px",
              borderRadius: 980,
              background:   "#0071e3",
              color:        "#fff",
              fontSize:     15,
              fontWeight:   500,
              border:       "none",
              cursor:       "pointer",
            }}
          >
            Try again
          </button>
          <Link href="/" style={{
            display:        "inline-flex",
            alignItems:     "center",
            padding:        "13px 30px",
            borderRadius:   980,
            background:     "rgba(255,255,255,0.07)",
            color:          "rgba(245,245,247,0.65)",
            fontSize:       15,
            fontWeight:     500,
            textDecoration: "none",
            border:         "1px solid rgba(255,255,255,0.11)",
          }}>
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

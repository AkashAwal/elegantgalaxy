"use client";

import ErrorTV from "@/components/ErrorTV";

/**
 * Global error boundary — the last line of defence.
 *
 * Shown when the ROOT LAYOUT itself throws (e.g. a broken font load, a bad
 * metadata export, a missing env var read at layout render time). Because the
 * layout is what errored, this component must supply its own <html> and <body>
 * — it cannot rely on anything the layout normally provides:
 *
 *   • No Navbar or Footer                  (layout didn't mount)
 *   • No globals.css / Tailwind            (layout stylesheet didn't load)
 *   • No Next.js <Link>                    (router context may be absent)
 *   • No Inter font from next/font/google  (layout font didn't initialise)
 *
 * All styles are inline. The system font stack approximates Inter closely
 * enough that the page looks intentional rather than broken.
 *
 * reset() triggers a full-page reload, which is the correct behaviour here —
 * unlike the segment error.tsx where reset() only re-renders the segment.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (process.env.NODE_ENV !== "production") console.error(error);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Something went wrong — Elegant Galaxy</title>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            -webkit-font-smoothing: antialiased;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                         system-ui, Helvetica, Arial, sans-serif;
          }
        `}</style>
      </head>
      <body>
        <main style={{
          minHeight:      "100vh",
          background:     "#1d1d1f",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "40px 24px",
          gap:            48,
        }}>

          {/* Shared TV component */}
          <ErrorTV />

          {/* Copy */}
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontSize:      "clamp(64px, 14vw, 96px)",
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
              marginBottom: 10,
              lineHeight:   1.5,
            }}>
              A critical error prevented the page from loading.
            </p>
            {/* Show digest in dev so engineers can cross-reference server logs */}
            {error.digest && (
              <p style={{
                fontSize:     12,
                color:        "rgba(245,245,247,0.2)",
                marginBottom: 36,
                fontFamily:   "monospace",
                letterSpacing: "0.04em",
              }}>
                digest: {error.digest}
              </p>
            )}
            {!error.digest && <div style={{ marginBottom: 36 }} />}

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {/* reset() here does a full reload — correct for a layout-level fault */}
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

              {/* Plain <a> — no Next.js router context available here */}
              <a
                href="/"
                style={{
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
                }}
              >
                Go to homepage
              </a>
            </div>
          </div>

        </main>
      </body>
    </html>
  );
}

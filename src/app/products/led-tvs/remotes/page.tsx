import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MODELS, PHONE, PHONE_DISPLAY } from "@/data/led-tvs";

export const metadata: Metadata = {
  alternates: { canonical: "/products/led-tvs/remotes" },
  title:       "LED TV Remotes",
  description: "Genuine replacement remotes for every Elegant Galaxy LED TV and Interactive Smart Board model.",
};

function RemoteIcon() {
  return (
    <svg viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 84 }} aria-hidden>
      <rect x="4" y="4" width="72" height="192" rx="24" fill="#2c2c2e" />
      <circle cx="40" cy="32" r="10" fill="#111113" />
      <rect x="18" y="56" width="44" height="30" rx="8" fill="#111113" />
      <circle cx="40" cy="104" r="16" fill="#111113" />
      <rect x="18" y="132" width="44" height="14" rx="7" fill="#111113" />
      <rect x="18" y="154" width="44" height="14" rx="7" fill="#111113" />
      <rect x="18" y="176" width="44" height="10" rx="5" fill="#111113" />
    </svg>
  );
}

export default function LedTvsRemotesPage() {
  const remotes = MODELS.map((m) => ({
    id:       m.id,
    subtitle: `Genuine · Factory-Matched`,
    name:     `EG ${m.platform} Remote`,
  }));

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 20, paddingBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6e6e73" }}>
          <Link href="/" style={{ color: "#6e6e73", textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <Link href="/products/led-tvs" style={{ color: "#6e6e73", textDecoration: "none" }}>LED TVs</Link>
          <ChevronRight size={13} />
          <span style={{ color: "#1d1d1f", fontWeight: 500 }}>Remotes</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 36, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>
            LED TV Remotes
          </p>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: 14 }}>
            Genuine remotes for every EG TV.
          </h1>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.65, maxWidth: 560 }}>
            We stock and supply the exact remote for every Elegant Galaxy LED TV and Interactive
            Smart Board platform we sell — factory-matched for full function, no universal-remote guesswork.
          </p>
        </div>
      </section>

      {/* Product grid — cards cloned from the homepage ProductShelves card style */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: 20 }}>
          {remotes.map((r) => (
            <div
              key={r.id}
              style={{
                background:   "#fff",
                borderRadius: 16,
                overflow:     "hidden",
                boxShadow:    "0 2px 10px rgba(0,0,0,0.07)",
                display:      "flex",
                flexDirection:"column",
                flex:         1,
                minWidth:     0,
              }}
            >
              {/* Illustration area */}
              <div style={{
                background:     "#1d1d1f",
                height:         192,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                position:       "relative",
                flexShrink:     0,
              }}>
                <RemoteIcon />
              </div>

              {/* Info */}
              <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
                <p style={{
                  fontSize:      9.5,
                  fontWeight:    600,
                  color:         "#6e6e73",
                  letterSpacing: "0.07em",
                  marginBottom:  4,
                }}>
                  {r.subtitle}
                </p>
                <p style={{
                  fontSize:      13.5,
                  fontWeight:    600,
                  color:         "#1d1d1f",
                  letterSpacing: "-0.01em",
                  lineHeight:    1.3,
                  marginBottom:  8,
                  flex:          1,
                }}>
                  {r.name}
                </p>
                <div style={{ display: "flex", gap: 7, marginTop: 4 }}>
                  <Link
                    href={`/products/led-tvs/${r.id}`}
                    style={{
                      flex:           1,
                      textAlign:      "center",
                      padding:        "8px 0",
                      borderRadius:   7,
                      background:     "#0071e3",
                      color:          "#fff",
                      fontSize:       12,
                      fontWeight:     500,
                      textDecoration: "none",
                      display:        "block",
                    }}
                  >
                    View Now
                  </Link>
                  <Link
                    href={`/contact?enquire=${encodeURIComponent(r.name)}`}
                    style={{
                      flex:           1,
                      textAlign:      "center",
                      padding:        "7px 0",
                      borderRadius:   7,
                      border:         "1.5px solid #0071e3",
                      color:          "#0071e3",
                      fontSize:       12,
                      fontWeight:     500,
                      textDecoration: "none",
                      display:        "block",
                    }}
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56, textAlign: "center" }}>
          <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 20 }}>
            Need a remote for a model not listed here? Our team can source it for you.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/products/led-tvs"
              style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#1d1d1f", border: "1.5px solid rgba(0,0,0,0.15)", textDecoration: "none" }}
            >
              Browse LED TVs
            </Link>
            <a
              href={`tel:${PHONE}`}
              style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff", background: "#0071e3", textDecoration: "none" }}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

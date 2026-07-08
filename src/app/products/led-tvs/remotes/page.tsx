import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MODELS, PHONE, PHONE_DISPLAY } from "@/data/led-tvs";
import EnquireButton from "@/components/EnquireButton";

export const metadata: Metadata = {
  alternates: { canonical: "/products/led-tvs/remotes" },
  title:       "LED TV Remotes",
  description: "Precision-crafted remotes for every Elegant Galaxy LED TV and Interactive Smart Board model.",
};

// One real remote photo per model, in MODELS order.
const REMOTE_IMAGES = [
  "/remote images/remote_1.webp",
  "/remote images/remote_2.webp",
  "/remote images/remote_3.webp",
  "/remote images/remote_5.webp",
  "/remote images/remote_6.webp",
  "/remote images/remote_7.webp",
  "/remote images/remote_8.webp",
  "/remote images/remote_9.webp",
];

export default function LedTvsRemotesPage() {
  const remotes = MODELS.map((m, i) => ({
    id:       m.id,
    subtitle: "Precision-Crafted",
    name:     `EG TV Remote ${i + 1}`,
    image:    REMOTE_IMAGES[i % REMOTE_IMAGES.length],
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
            Precision-crafted remotes.
          </h1>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.65, maxWidth: 560 }}>
            Every Elegant Galaxy LED TV and Interactive Smart Board platform we sell pairs with a
            remote built to match - sleek, responsive, and made to last.
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
              {/* Photo area — remote photos have an opaque white background baked in */}
              <div style={{
                background:     "#fff",
                borderBottom:   "1px solid rgba(0,0,0,0.06)",
                height:         192,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                position:       "relative",
                flexShrink:     0,
              }}>
                <Image
                  src={r.image}
                  alt={r.name}
                  width={72}
                  height={176}
                  style={{ height: "88%", width: "auto", objectFit: "contain" }}
                />
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
                  <EnquireButton
                    product={r.name}
                    style={{
                      flex:           1,
                      textAlign:      "center",
                      padding:        "8px 0",
                      borderRadius:   7,
                      background:     "#0071e3",
                      color:          "#fff",
                      fontSize:       12,
                      fontWeight:     500,
                      border:         "none",
                      display:        "block",
                    }}
                  >
                    Enquire
                  </EnquireButton>
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
            Don&apos;t see your model? Our team can match you with the right remote.
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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: "Products",
  description:
    "Explore Elegant Galaxy's full range of premium home appliances - LED TVs, Washing Machines, Air Coolers, and Infrared Cooktops.",
  openGraph: {
    title:       "Products",
    description: "LED TVs, Washing Machines, Air Coolers, and Infrared Cooktops built for Indian homes.",
    type:        "website",
  },
};

const CATEGORIES = [
  {
    label:       "LED TVs",
    description: "Android TV, webOS, Google TV, and more - from 24\" to 100\".",
    href:        "/products/led-tvs",
    image:       "/images/tvs/android-front-homepage.png",
    width:       810,
    height:      487,
    bg:          "#f0f0f5",
  },
  {
    label:       "Washing Machines",
    description: "Semi-automatic washers from 7kg to 12kg.",
    href:        "/products/washing-machines",
    image:       "/washing-machines/washer-homepage.png",
    width:       882,
    height:      1368,
    bg:          "#f0f0f5",
  },
  {
    label:       "Air Coolers",
    description: "Commercial and domestic coolers, 90L to 160L.",
    href:        "/products/air-coolers",
    image:       "/images/air-coolers/commercial-front-homepage.png",
    width:       476,
    height:      761,
    bg:          "#f0f0f5",
  },
  {
    label:       "Infrared Cooktops",
    description: "Fast, efficient single-burner infrared cooking.",
    href:        "/products/infrared-cooktops",
    image:       "/cooktops/cooktop-homepage.png",
    width:       900,
    height:      838,
    bg:          "#f0f0f5",
  },
];

export default function ProductsPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>All Products</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Everything for Your Home.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 540 }}>
            Choose a category to explore models, specs, and pricing details.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ rowGap: 40, columnGap: 20 }}>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                style={{
                  display:        "block",
                  background:     "#fff",
                  borderRadius:   18,
                  overflow:       "hidden",
                  boxShadow:      "0 2px 16px rgba(0,0,0,0.07)",
                  textDecoration: "none",
                }}
              >
                <div style={{
                  background:     cat.bg,
                  padding:        "12px",
                  display:        "flex",
                  justifyContent: "center",
                  alignItems:     "center",
                  aspectRatio:    "16 / 9",
                }}>
                  <div style={{ width: "100%", maxWidth: 300, height: "100%", position: "relative" }}>
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="440px"
                    />
                  </div>
                </div>
                <div style={{ padding: "20px 24px 24px", textAlign: "center" }}>
                  <p style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 6, letterSpacing: "-0.01em" }}>
                    {cat.label}
                  </p>
                  <p style={{ fontSize: 14, color: "#6e6e73" }}>
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

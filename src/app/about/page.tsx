import type { Metadata } from "next";
import Link from "next/link";

// ── SEO metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title:       "About Elegant Galaxy — Home Appliances Since 2012",
  description:
    "Elegant Galaxy has been making home appliances for Indian households since 2012. LED TVs, washing machines, air coolers, and infrared cooktops — sold in 500+ cities, with every repair handled in-house at our own factory.",
  openGraph: {
    title:       "About Elegant Galaxy",
    description: "Built for Indian homes since 2012. LED TVs, washing machines, air coolers, and infrared cooktops.",
    type:        "website",
  },
};

// ── Structured data ───────────────────────────────────────────────────────────

const JSON_LD = {
  "@context": "https://schema.org",
  "@type":    "Organization",
  name:        "Elegant Galaxy",
  description: "Indian home appliance brand making LED TVs, washing machines, air coolers, and infrared cooktops since 2012.",
  foundingDate: "2012",
  foundingLocation: {
    "@type":        "Place",
    addressCountry: "IN",
  },
  url:  "https://elegantgalaxy.in",
  logo: "https://elegantgalaxy.in/logo.png",
  contactPoint: [
    {
      "@type":            "ContactPoint",
      telephone:          "+91-9540699333",
      contactType:        "customer service",
      availableLanguage:  ["English", "Hindi"],
      hoursAvailable:     "Mo-Sa 09:00-18:00",
    },
    {
      "@type":           "ContactPoint",
      telephone:         "+91-9540064444",
      contactType:       "sales",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  areaServed: {
    "@type": "Country",
    name:    "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name:    "Elegant Galaxy Appliances",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "LED Televisions",    description: "32 to 75 inch displays in HD, Full HD, and 4K" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Washing Machines",   description: "Semi-automatic models from 7 kg to 12 kg" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Air Coolers",        description: "Personal, tower, and desert coolers from 15 L to 60 L" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Infrared Cooktops",  description: "Single and double-burner cooktops with touch controls" } },
    ],
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "2012", label: "Year founded",          sub: "Over 12 years in the market" },
  { value: "2M+",  label: "Appliances in homes",   sub: "Across the country" },
  { value: "500+", label: "Cities served",          sub: "Pan-India distribution" },
  { value: "In-House", label: "Factory Repairs",    sub: "Every repair, done by our own technicians" },
];

const PRODUCTS = [
  {
    icon:  "📺",
    name:  "LED Televisions",
    range: "32\" – 75\"",
    body:  "HD, Full HD, and 4K panels with Dolby Audio support and thin-bezel design. Built for bedrooms, living rooms, and home theatres — with smart connectivity on select models.",
    href:  "/products/led-tvs",
  },
  {
    icon:  "🫧",
    name:  "Washing Machines",
    range: "7 kg – 12 kg",
    body:  "Semi-automatic models with heavy wash pulsators and diamond steel drums, built for Indian clothing types and hard-water conditions.",
    href:  "/products/washing-machines",
  },
  {
    icon:  "❄️",
    name:  "Air Coolers",
    range: "15 L – 60 L",
    body:  "Personal, tower, and desert coolers engineered for India's dry-heat seasons. High-efficiency honeycomb pads, multi-speed fans, and large-tank models designed for uninterrupted overnight use.",
    href:  "/products/air-cooler",
  },
  {
    icon:  "🍳",
    name:  "Infrared Cooktops",
    range: "Single & double burner",
    body:  "Touch-panel controls, child-lock, and 8 power levels. Compatible with Indian flat-base cookware — tawa, pressure cooker, and kadai. No open flame, no gas line, no combustion risk.",
    href:  "/products/infrared-cooktop",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title:  "Honest engineering",
    body:   "We don't add features to hit a spec count. Every feature in an Elegant Galaxy product exists because customers said they needed it — or because service data showed the absence was causing problems. We review service records before every product revision.",
  },
  {
    number: "02",
    title:  "Built to last",
    body:   "Our products are designed for a 10+ year lifespan. Spare parts are stocked for 8 years post-purchase, and our service manuals are written for repairability — not replacement. Durability is a design requirement, not a marketing claim.",
  },
  {
    number: "03",
    title:  "Service you can count on",
    body:   "Every repair is handled in-house by our own factory technicians — no third-party centres. Reach us through the retailer you bought from, or call our customer care team directly, Mon–Sat, 9 AM – 6 PM IST. We believe the relationship with a customer doesn't end at the point of sale — it starts there.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#1d1d1f", paddingTop: 80, paddingBottom: 88 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          <p style={{
            fontSize:      11,
            fontWeight:    600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color:         "rgba(245,245,247,0.4)",
            marginBottom:  20,
          }}>
            About Elegant Galaxy
          </p>
          <h1
            className="text-[34px] sm:text-[48px] lg:text-[60px]"
            style={{
              fontWeight:    700,
              letterSpacing: "-0.035em",
              lineHeight:    1.06,
              color:         "#f5f5f7",
              maxWidth:      680,
              marginBottom:  24,
            }}
          >
            Built for Indian homes.{" "}
            <span style={{ color: "rgba(245,245,247,0.35)" }}>Since 2012.</span>
          </h1>
          <p style={{
            fontSize:   18,
            lineHeight: 1.65,
            color:      "rgba(245,245,247,0.5)",
            maxWidth:   540,
          }}>
            We make home appliances that are thoughtfully engineered, honestly priced, and designed to work for a decade or more.
          </p>
        </div>
      </section>

      {/* ── Our story ────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          {/* Stack on mobile; sticky label left + content right on md+ */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">

            {/* Left: sticky label */}
            <div className="md:w-[220px] md:shrink-0 md:sticky md:top-20">
              <p style={{
                fontSize:      11,
                fontWeight:    700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         "#0071e3",
                marginBottom:  12,
              }}>
                Our Story
              </p>
              <div style={{ width: 32, height: 2, background: "#0071e3", borderRadius: 2 }} />
            </div>

            {/* Right: story content */}
            <div className="flex-1 min-w-0" style={{ maxWidth: 680 }}>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#3a3a3c", marginBottom: 28 }}>
                Elegant Galaxy was founded in 2012 with a straightforward conviction: Indian households deserve home appliances that are honestly engineered, genuinely durable, and priced for real life — not the showroom floor. The company started with a focused range of LED televisions and expanded deliberately over the following decade into washing machines, air coolers, and infrared cooktops.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#3a3a3c", marginBottom: 28 }}>
                Each new product category was entered only after we identified a consistent gap between what Indian consumers needed and what the market was delivering. Our product decisions are driven by service records, customer feedback, and field research conducted across Indian households — not global trend reports. When we added infrared cooktops, it was because customers kept asking us how to cook safely when gas wasn't available. When we expanded our washing machine range, it was because our service data showed which features actually got used and which didn't.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#3a3a3c" }}>
                Today, Elegant Galaxy appliances are used in over two million homes across more than 500 cities in India. Our distribution network reaches Tier 1, Tier 2, and Tier 3 cities alike, and every repair is still handled in-house by our own factory technicians rather than outsourced to third parties. The founding team remains involved in product review. That commitment to staying close to the product hasn't changed since the first television shipped in 2012.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f7", paddingTop: 64, paddingBottom: 64 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          {/* 2-col on mobile, 4-col on lg */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "#e8e8ed", borderRadius: 18, overflow: "hidden" }}
          >
            {STATS.map(s => (
              <div key={s.label} style={{
                background:  "#fff",
                padding:     "36px 32px",
                textAlign:   "center",
              }}>
                <p style={{
                  fontSize:      44,
                  fontWeight:    700,
                  letterSpacing: "-0.03em",
                  color:         "#1d1d1f",
                  lineHeight:    1,
                  marginBottom:  8,
                }}>
                  {s.value}
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 4 }}>
                  {s.label}
                </p>
                <p style={{ fontSize: 12, color: "#6e6e73" }}>
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we make ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          <p style={{
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color:         "#0071e3",
            marginBottom:  12,
          }}>
            Our products
          </p>
          <h2 style={{
            fontSize:      36,
            fontWeight:    700,
            letterSpacing: "-0.025em",
            color:         "#1d1d1f",
            marginBottom:  48,
            maxWidth:      520,
            lineHeight:    1.15,
          }}>
            Four categories. One standard.
          </h2>

          {/* 1-col on mobile, 2-col on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRODUCTS.map(p => (
              <Link key={p.name} href={p.href} style={{
                display:        "block",
                textDecoration: "none",
                padding:        "32px 36px",
                background:     "#f5f5f7",
                borderRadius:   18,
                border:         "1.5px solid transparent",
                transition:     "border-color 0.15s ease, background 0.15s ease",
              }}
              onMouseEnter={undefined}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{
                    fontSize:       32,
                    width:          56,
                    height:         56,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    background:     "#fff",
                    borderRadius:   14,
                    flexShrink:     0,
                    boxShadow:      "0 1px 8px rgba(0,0,0,0.08)",
                  }}>
                    {p.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.015em" }}>
                        {p.name}
                      </h3>
                      <span style={{
                        fontSize:   11,
                        fontWeight: 500,
                        color:      "#6e6e73",
                        background: "#e8e8ed",
                        padding:    "2px 8px",
                        borderRadius: 980,
                      }}>
                        {p.range}
                      </span>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6e6e73" }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────────────────────── */}
      <section style={{ background: "#1d1d1f", paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          <p style={{
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color:         "rgba(245,245,247,0.35)",
            marginBottom:  12,
          }}>
            What we stand for
          </p>
          <h2 style={{
            fontSize:      36,
            fontWeight:    700,
            letterSpacing: "-0.025em",
            color:         "#f5f5f7",
            marginBottom:  52,
            lineHeight:    1.15,
          }}>
            Our principles
          </h2>

          {/* 1-col on mobile, 2-col on sm, 3-col on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {PRINCIPLES.map(pr => (
              <div key={pr.number} style={{
                padding:      "36px 32px",
                background:   "rgba(255,255,255,0.04)",
                borderRadius: 18,
                border:       "1px solid rgba(255,255,255,0.08)",
              }}>
                <p style={{
                  fontSize:      11,
                  fontWeight:    700,
                  letterSpacing: "0.08em",
                  color:         "rgba(245,245,247,0.25)",
                  marginBottom:  20,
                }}>
                  {pr.number}
                </p>
                <h3 style={{
                  fontSize:      18,
                  fontWeight:    700,
                  letterSpacing: "-0.015em",
                  color:         "#f5f5f7",
                  marginBottom:  14,
                }}>
                  {pr.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(245,245,247,0.5)" }}>
                  {pr.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Distribution note ────────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f7", paddingTop: 64, paddingBottom: 64 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          {/* Stack on mobile */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10">
            <div style={{ maxWidth: 600 }}>
              <h2 style={{
                fontSize:      28,
                fontWeight:    700,
                letterSpacing: "-0.02em",
                color:         "#1d1d1f",
                marginBottom:  12,
                lineHeight:    1.2,
              }}>
                Pan-India reach. Factory-direct service.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6e6e73" }}>
                Elegant Galaxy products are available through authorised distributors and dealer networks in over 500 cities — from metros to Tier 3 towns. Every repair, however, is handled in-house at our own factory by our trained technicians, with parts inventory kept for every product currently in production, plus products up to 8 years old. Contact the retailer you bought from, or reach our customer care team directly, and we'll take it from there.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <a href="tel:+919540699333" style={{
                display:        "inline-flex",
                alignItems:     "center",
                justifyContent: "center",
                padding:        "11px 24px",
                borderRadius:   980,
                border:         "1.5px solid #0071e3",
                color:          "#0071e3",
                fontSize:       14,
                fontWeight:     500,
                textDecoration: "none",
                whiteSpace:     "nowrap",
              }}>
                Customer Care: +91 95406 99333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", paddingTop: 72, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ textAlign: "center" }}>
          <h2 style={{
            fontSize:      36,
            fontWeight:    700,
            letterSpacing: "-0.025em",
            color:         "#1d1d1f",
            marginBottom:  14,
            lineHeight:    1.15,
          }}>
            Ready to see what we make?
          </h2>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.6, marginBottom: 36 }}>
            Browse our full range of home appliances or get in touch with the team.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{
              display:        "inline-flex",
              alignItems:     "center",
              padding:        "13px 28px",
              borderRadius:   980,
              background:     "#0071e3",
              color:          "#fff",
              fontSize:       15,
              fontWeight:     500,
              textDecoration: "none",
            }}>
              Explore products
            </Link>
            <Link href="/contact" style={{
              display:        "inline-flex",
              alignItems:     "center",
              padding:        "13px 28px",
              borderRadius:   980,
              border:         "1.5px solid #e8e8ed",
              color:          "#1d1d1f",
              fontSize:       15,
              fontWeight:     500,
              textDecoration: "none",
            }}>
              Contact us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

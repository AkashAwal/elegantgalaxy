import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title:       "FAQs",
  description: "Answers to common questions about Elegant Galaxy products, orders, delivery, warranty, service, and becoming a distributor.",
};

// ── Structured data ───────────────────────────────────────────────────────────
// Mirrors the questions in FaqClient.tsx — keep in sync if that content changes.

const JSON_LD = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What does Elegant Galaxy make?",
      acceptedAnswer: { "@type": "Answer", text: "We design and manufacture LED TVs, washing machines, air coolers, and infrared cooktops for Indian homes, and have done so since 2012." },
    },
    {
      "@type": "Question",
      name:    "Are your products ISI certified?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — all Elegant Galaxy products are ISI certified by the Bureau of Indian Standards, meeting the highest safety and quality benchmarks in the country." },
    },
    {
      "@type": "Question",
      name:    "Do you offer no-cost EMI?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Split your purchase into 3, 6, 9, or 12 monthly instalments across all major banks and credit cards at zero extra cost." },
    },
    {
      "@type": "Question",
      name:    "What is your return policy?",
      acceptedAnswer: { "@type": "Answer", text: "We offer a 30-day hassle-free return policy on all products. Contact our customer support team and we'll arrange a pickup and full refund." },
    },
    {
      "@type": "Question",
      name:    "What warranty do Elegant Galaxy products come with?",
      acceptedAnswer: { "@type": "Answer", text: "All Elegant Galaxy products carry a comprehensive 5-year manufacturer warranty covering manufacturing defects and component failures." },
    },
    {
      "@type": "Question",
      name:    "How do I become an Elegant Galaxy distributor?",
      acceptedAnswer: { "@type": "Answer", text: "Fill out our distributor application form with your business details, region, and retail experience. Our distribution team reaches out within 3–5 business days." },
    },
  ],
};

export default function FaqPage() {
  return (
    <main id="main-content" style={{ background: "#fff", minHeight: "100vh" }}>
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
            Help Centre
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
            Frequently asked{" "}
            <span style={{ color: "rgba(245,245,247,0.35)" }}>questions.</span>
          </h1>
          <p style={{
            fontSize:   18,
            lineHeight: 1.65,
            color:      "rgba(245,245,247,0.5)",
            maxWidth:   540,
          }}>
            Answers on orders, delivery, warranty, service, and becoming a distributor.
          </p>
        </div>
      </section>

      <FaqClient />
    </main>
  );
}

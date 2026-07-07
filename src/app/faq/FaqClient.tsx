"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    heading: "General",
    faqs: [
      {
        q: "What does Elegant Galaxy make?",
        a: "We design and manufacture LED TVs, washing machines, air coolers, and infrared cooktops for Indian homes, and have done so since 2012.",
      },
      {
        q: "Are your products ISI certified?",
        a: "Yes - all Elegant Galaxy products are ISI certified by the Bureau of Indian Standards, meeting the highest safety and quality benchmarks in the country.",
      },
      {
        q: "Where can I buy Elegant Galaxy products?",
        a: "Our products are sold through authorised distributors and dealer networks in over 500 cities across India, from metros to Tier 3 towns.",
      },
    ],
  },
  {
    heading: "Orders & Delivery",
    faqs: [
      {
        q: "Do you offer no-cost EMI?",
        a: "Yes. Split your purchase into 3, 6, 9, or 12 monthly instalments across all major banks and credit cards at zero extra cost.",
      },
      {
        q: "How long does delivery take?",
        a: "Most metro cities receive delivery within 2–4 business days. Other locations typically take 5–7 business days. All orders are fully tracked from dispatch to doorstep.",
      },
      {
        q: "What is your return policy?",
        a: "We offer a 30-day hassle-free return policy on all products. Contact our customer support team and we'll arrange a pickup and full refund.",
      },
      {
        q: "Do you offer free installation?",
        a: "Free expert installation is included with all large appliances including LED TVs and Washing Machines. Our trained technicians set everything up at your doorstep.",
      },
    ],
  },
  {
    heading: "Warranty & Service",
    faqs: [
      {
        q: "What warranty do Elegant Galaxy products come with?",
        a: "All Elegant Galaxy products carry a comprehensive 1-year manufacturer warranty covering manufacturing defects and component failures. Extended warranty plans are also available.",
      },
      {
        q: "How do I get my product repaired?",
        a: "All repairs are handled in-house by our own factory technicians. Contact the retailer you bought from, or reach our customer care team directly, and we'll walk you through the process.",
      },
      {
        q: "How do I register my warranty?",
        a: "Warranty registration details are on our Warranty page - you'll need your invoice and product serial number.",
      },
    ],
  },
  {
    heading: "Distributors & Partnerships",
    faqs: [
      {
        q: "How do I become an Elegant Galaxy distributor?",
        a: "Fill out our distributor application form with your business details, region, and retail experience. Our distribution team reaches out within 3–5 business days to discuss fit and terms.",
      },
      {
        q: "What do partners get with Elegant Galaxy?",
        a: "Competitive margins, marketing and point-of-sale support, a dedicated distributor support line, fast pan-India logistics, and training for your sales staff.",
      },
    ],
  },
];

// ── Single item ───────────────────────────────────────────────────────────────

function FaqItem({
  q, a, isOpen, onToggle, idx,
}: {
  q: string; a: string; isOpen: boolean; onToggle: () => void; idx: string;
}) {
  const triggerId = `faq-trigger-${idx}`;
  const panelId   = `faq-panel-${idx}`;

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <button
        id={triggerId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 20,
          padding: "20px 0", background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15.5, fontWeight: 500, color: "#1d1d1f", letterSpacing: "-0.01em", lineHeight: 1.4 }}>
          {q}
        </span>
        <span aria-hidden style={{
          flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
          background: isOpen ? "#0071e3" : "#e8e8ed",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s ease",
        }}>
          {isOpen
            ? <Minus size={13} color="#fff"    strokeWidth={2.5} />
            : <Plus  size={13} color="#6e6e73" strokeWidth={2.5} />
          }
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#6e6e73", paddingBottom: 22, maxWidth: 640 }}>
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Page content ────────────────────────────────────────────────────────────

export default function FaqClient() {
  const [openId, setOpenId] = useState<string | null>("0-0");

  return (
    <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 64, paddingBottom: 88 }}>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">

        {/* Left: sticky label */}
        <div className="w-full md:w-[280px] md:shrink-0 md:sticky md:top-20">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: 12 }}>
            FAQs
          </p>
          <div style={{ width: 32, height: 2, background: "#0071e3", borderRadius: 2, marginBottom: 20 }} />
          <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>
            Still have questions?{" "}
            <Link href="/contact" style={{ color: "#0071e3", textDecoration: "none", fontWeight: 500 }}>
              Talk to us
            </Link>
          </p>
        </div>

        {/* Right: categorized accordions */}
        <div className="flex-1 min-w-0 w-full" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.heading}>
              <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.015em", color: "#1d1d1f", marginBottom: 8 }}>
                {cat.heading}
              </h2>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                {cat.faqs.map((faq, fi) => {
                  const id = `${ci}-${fi}`;
                  return (
                    <FaqItem
                      key={id}
                      idx={id}
                      q={faq.q}
                      a={faq.a}
                      isOpen={openId === id}
                      onToggle={() => setOpenId(openId === id ? null : id)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

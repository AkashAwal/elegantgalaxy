"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What warranty do Elegant Galaxy products come with?",
    a: "All Elegant Galaxy products carry a comprehensive 5-year manufacturer warranty covering manufacturing defects and component failures. Extended warranty plans are also available for additional peace of mind.",
  },
  {
    q: "Do you offer no-cost EMI?",
    a: "Yes. We offer no-cost EMI across all major banks and credit cards — split your purchase into 3, 6, 9, or 12 monthly instalments with zero extra cost.",
  },
  {
    q: "How do I find a service centre near me?",
    a: "We have 200+ authorised service centres across India. Visit our Service Centres page, enter your city or pin code, and find the one closest to you.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day hassle-free return policy on all products. Contact our customer support team and we'll arrange a pickup and full refund — no questions asked.",
  },
  {
    q: "How long does delivery take?",
    a: "Most metro cities receive delivery within 2–4 business days. Other locations typically take 5–7 business days. All orders are fully tracked from dispatch to doorstep.",
  },
  {
    q: "Are your products ISI certified?",
    a: "Yes — all Elegant Galaxy products are ISI certified by the Bureau of Indian Standards, meeting the highest safety and quality benchmarks in the country.",
  },
  {
    q: "Do you offer free installation?",
    a: "Free expert installation is included with all large appliances including LED TVs and Washing Machines. Our trained technicians will set everything up at your doorstep at a time that suits you.",
  },
];

// ── Single item ───────────────────────────────────────────────────────────────

function FAQItem({
  q, a, isOpen, onToggle, idx,
}: {
  q: string; a: string; isOpen: boolean; onToggle: () => void; idx: number;
}) {
  const triggerId = `faq-trigger-${idx}`;
  const panelId   = `faq-panel-${idx}`;

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      {/*
        Native <button> already carries role="button" implicitly — no need to
        add it explicitly. aria-expanded + aria-controls are what matters here.
      */}
      <button
        id={triggerId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        style={{
          width:          "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          gap:            20,
          padding:        "20px 0",
          background:     "none",
          border:         "none",
          cursor:         "pointer",
          textAlign:      "left",
        }}
      >
        <span style={{
          fontSize:      15.5,
          fontWeight:    500,
          color:         "#1d1d1f",
          letterSpacing: "-0.01em",
          lineHeight:    1.4,
        }}>
          {q}
        </span>
        <span aria-hidden style={{
          flexShrink:     0,
          width:          24,
          height:         24,
          borderRadius:   "50%",
          background:     isOpen ? "#0071e3" : "#e8e8ed",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          transition:     "background 0.2s ease",
        }}>
          {isOpen
            ? <Minus size={13} color="#fff" strokeWidth={2.5} />
            : <Plus  size={13} color="#6e6e73" strokeWidth={2.5} />
          }
        </span>
      </button>

      {/* Answer panel — role="region" makes it a named landmark associated
          with its trigger heading via aria-labelledby.                      */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        style={{
          display:          "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition:       "grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <p style={{
            fontSize:      14.5,
            lineHeight:    1.75,
            color:         "#6e6e73",
            paddingBottom: 22,
            maxWidth:      640,
          }}>
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section style={{ background: "#f5f5f7", width: "100%" }}>
      <div
        className="mx-auto max-w-[1440px] px-8"
        style={{ paddingTop: 88, paddingBottom: 88 }}
      >
        {/* Stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">

          {/* ── Left: heading ─────────────────────────────────────────── */}
          <div className="w-full md:w-[300px] md:shrink-0" style={{ paddingTop: 4 }}>
            <p style={{
              fontSize:      11,
              fontWeight:    600,
              letterSpacing: "0.1em",
              color:         "#6e6e73",
              marginBottom:  18,
              textTransform: "uppercase",
            }}>
              FAQs
            </p>
            <h2 style={{
              fontSize:      34,
              fontWeight:    700,
              letterSpacing: "-0.025em",
              lineHeight:    1.15,
              color:         "#1d1d1f",
              marginBottom:  20,
            }}>
              Frequently asked questions.
            </h2>
            <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>
              Still have questions?{" "}
              <a
                href="/contact"
                style={{ color: "#0071e3", textDecoration: "none", fontWeight: 500 }}
              >
                Talk to us
              </a>
            </p>
          </div>

          {/* ── Right: accordion ──────────────────────────────────────── */}
          <div className="flex-1 min-w-0 w-full">
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  idx={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

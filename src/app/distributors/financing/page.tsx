import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title:       "Financing",
  description: "No-cost EMI and financing options for Elegant Galaxy LED TVs, washing machines, air coolers, and infrared cooktops.",
};

const PLANS = [
  { term: "3 months",  note: "No processing fee on select cards" },
  { term: "6 months",  note: "Most popular option" },
  { term: "9 months",  note: "Available on orders above ₹15,000" },
  { term: "12 months", note: "Available on orders above ₹25,000" },
];

const FAQS = [
  {
    q: "How does no-cost EMI work?",
    a: "You pay the same price as the sticker price, split evenly across monthly instalments — no interest, no hidden markup. The cost is absorbed as part of the offer, not added to your bill.",
  },
  {
    q: "Which cards and banks are supported?",
    a: "Most major credit cards and select debit card EMI options are supported at checkout or in-store. Our team can confirm availability for your bank when you enquire.",
  },
  {
    q: "Can I close my EMI early?",
    a: "Yes. Reach out to our customer care team and we'll help you settle the remaining balance with your bank ahead of schedule.",
  },
  {
    q: "Is financing available for distributors and bulk orders?",
    a: "Yes — distributor financing terms are discussed separately as part of your distribution agreement. Contact our distribution team for details.",
  },
];

export default function FinancingPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>
            Financing
          </p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            No-Cost EMI, made simple.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 560 }}>
            Split your purchase into easy monthly instalments at zero extra cost — available across our
            full range of LED TVs, washing machines, air coolers, and infrared cooktops.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 24 }}>
          Available EMI terms
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
          {PLANS.map((p) => (
            <div key={p.term} style={{ background: "#fff", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#1d1d1f", marginBottom: 6, letterSpacing: "-0.01em" }}>
                {p.term}
              </p>
              <p style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.5 }}>{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 24 }}>
            Financing FAQs
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720 }}>
            {FAQS.map((f) => (
              <div key={f.q}>
                <p style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                  <Check size={16} color="#0071e3" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                  {f.q}
                </p>
                <p style={{ fontSize: 14.5, color: "#6e6e73", lineHeight: 1.65, marginLeft: 26 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 72, textAlign: "center" }}>
        <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 20 }}>
          Have a question about financing a specific order?
        </p>
        <Link
          href="/contact"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            height:         46,
            padding:        "0 28px",
            borderRadius:   980,
            fontSize:       15,
            fontWeight:     600,
            color:          "#fff",
            background:     "#0071e3",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}

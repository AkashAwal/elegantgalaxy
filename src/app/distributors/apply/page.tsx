import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title:       "Become a Distributor",
  description: "Join Elegant Galaxy's growing network of 500+ distributors across India. Learn how to apply, what we offer partners, and what happens next.",
};

const BENEFITS = [
  "Competitive margins across LED TVs, washing machines, air coolers, and infrared cooktops",
  "Marketing and point-of-sale support for your showroom",
  "Dedicated distributor support line, separate from customer care",
  "Fast, tracked pan-India logistics and stock replenishment",
  "Training for your sales staff on our full product range",
];

const STEPS = [
  { title: "Submit your details",     desc: "Tell us about your business, region, and current retail experience via the application form." },
  { title: "Screening call",          desc: "Our distribution team reaches out within 3–5 business days to discuss fit and terms." },
  { title: "Agreement & onboarding",  desc: "Sign the distributor agreement, get set up in our systems, and receive your starter inventory." },
  { title: "Go live",                 desc: "Start selling with full marketing, training, and support behind you." },
];

export default function DistributorApplyPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#1d1d1f" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,247,0.45)", marginBottom: 14 }}>
            Distribution Network
          </p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#f5f5f7", lineHeight: 1.08, marginBottom: 16, maxWidth: 620 }}>
            Grow with Elegant Galaxy.
          </h1>
          <p style={{ fontSize: 17, color: "rgba(245,245,247,0.55)", lineHeight: 1.65, maxWidth: 560 }}>
            We&apos;re looking for passionate partners to bring our products to every corner of India.
            Join our growing network of 500+ distributors and build a thriving business with a brand
            that customers already trust.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
          What you get as a partner
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
          {BENEFITS.map((b) => (
            <div key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#fff", borderRadius: 14, padding: "16px 18px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "#eaf3ff", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                <Check size={13} color="#0071e3" strokeWidth={2.5} />
              </span>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#1d1d1f" }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20 }}>
            {STEPS.map((s, i) => (
              <div key={s.title}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0071e3", marginBottom: 8 }}>
                  Step {i + 1}
                </p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 6, letterSpacing: "-0.01em" }}>
                  {s.title}
                </p>
                <p style={{ fontSize: 13.5, color: "#6e6e73", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 72, textAlign: "center" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 12 }}>
          Ready to apply?
        </h2>
        <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 24, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>
          Fill out our distributor enquiry form and our team will get back to you within 3–5 business days.
        </p>
        <Link
          href="/contact?type=distributor"
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
          Start Your Application
        </Link>
      </section>

    </main>
  );
}

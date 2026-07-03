import type { Metadata } from "next";
import DistributorApplyForm from "@/components/DistributorApplyForm";

export const metadata: Metadata = {
  title:       "Become a Distributor",
  description: "Join Elegant Galaxy's growing network of 500+ distributors across India. Apply to become a partner.",
};

export default function DistributorApplyPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

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
            Distribution Network
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
            Grow with{" "}
            <span style={{ color: "rgba(245,245,247,0.35)" }}>Elegant Galaxy.</span>
          </h1>
          <p style={{
            fontSize:   18,
            lineHeight: 1.65,
            color:      "rgba(245,245,247,0.5)",
            maxWidth:   540,
          }}>
            Join our growing network of 500+ distributors across India. Fill out the form below and our team will get back to you within 3–5 business days.
          </p>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 64, paddingBottom: 88 }}>
        <div style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
          <DistributorApplyForm />
        </div>
      </section>

    </main>
  );
}

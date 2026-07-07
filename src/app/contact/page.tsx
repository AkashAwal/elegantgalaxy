import { Suspense } from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title:       "Contact",
  description: "Get in touch with the Elegant Galaxy team. Customer care and sales enquiries.",
};

function ContactSkeleton() {
  // Holds layout space while the client component hydrates
  return <div style={{ minHeight: "80vh" }} />;
}

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-[#f5f5f7] min-h-screen">

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
            Get in Touch
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
            Contact us.{" "}
            <span style={{ color: "rgba(245,245,247,0.35)" }}>We&apos;re here to help.</span>
          </h1>
          <p style={{
            fontSize:   18,
            lineHeight: 1.65,
            color:      "rgba(245,245,247,0.5)",
            maxWidth:   540,
          }}>
            Reach our customer care or sales team, or fill in the form below and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <Suspense fallback={<ContactSkeleton />}>
        <ContactClient />
      </Suspense>
    </main>
  );
}

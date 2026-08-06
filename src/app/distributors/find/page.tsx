import type { Metadata } from "next";
import DistributorFinder from "@/components/DistributorFinder";

export const metadata: Metadata = {
  alternates: { canonical: "/distributors/find" },
  title:       "Find Nearby Distributor",
  description: "Enter your PIN code to find your nearest Elegant Galaxy distributor.",
};

export default function FindDistributorPage() {
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
            Enter Your{" "}
            <span style={{ color: "rgba(245,245,247,0.35)" }}>PIN Number.</span>
          </h1>
          <p style={{
            fontSize:   18,
            lineHeight: 1.65,
            color:      "rgba(245,245,247,0.5)",
            maxWidth:   540,
          }}>
            Find your nearest Elegant Galaxy distributor by searching your area&apos;s 6-digit PIN code.
          </p>
        </div>
      </section>

      {/* Search + results */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 64, paddingBottom: 88 }}>
        <div style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
          <DistributorFinder />
        </div>
      </section>

    </main>
  );
}

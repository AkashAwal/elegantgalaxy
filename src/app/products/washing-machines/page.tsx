import type { Metadata } from "next";
import Link from "next/link";
import WashingMachinesClient, { WasherIllustration } from "./WashingMachinesClient";
import { MODELS, TYPE_LABEL, type WasherType } from "@/data/washing-machines";

export const metadata: Metadata = {
  title: "Washing Machines",
  description:
    "Explore Elegant Galaxy washing machines — front load, top load, and semi-automatic models from 6kg to 10kg with energy-efficient BLDC motors.",
  openGraph: {
    title:       "Washing Machines — Elegant Galaxy",
    description: "Front load, top load, and semi-automatic washers built for Indian homes.",
    type:        "website",
  },
};

const TYPES: WasherType[] = ["front-load", "top-load", "semi-automatic"];

export default async function WashingMachinesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; cap?: string }>;
}) {
  const { type, cap } = await searchParams;
  const parsedCap     = cap ? parseInt(cap, 10) : null;
  const initialCap    = parsedCap && !Number.isNaN(parsedCap) ? parsedCap : null;
  const initialType   = type === "front-load" || type === "top-load" || type === "semi-automatic" ? type : null;

  if (initialType || initialCap) {
    return <WashingMachinesClient initialType={initialType} initialCap={initialCap} />;
  }

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>Washing Machines</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Find Your Perfect Washer.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 520 }}>
            Choose a type to explore capacities, specs, and pricing details.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ rowGap: 40, columnGap: 20 }}>
            {TYPES.map((t) => {
              const models = MODELS.filter((m) => m.type === t);
              const caps   = models.map((m) => m.capacity).sort((a, b) => a - b);
              return (
                <Link
                  key={t}
                  href={`/products/washing-machines?type=${t}`}
                  style={{
                    display:      "block",
                    background:   "#fff",
                    borderRadius: 18,
                    overflow:     "hidden",
                    boxShadow:    "0 2px 16px rgba(0,0,0,0.07)",
                    textDecoration: "none",
                  }}
                >
                  <div style={{
                    background: "#fff",
                    padding: "28px 24px 20px",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    minHeight: 220,
                  }}>
                    <WasherIllustration model={models[0]} />
                  </div>
                  <div style={{ padding: "18px 20px 20px", textAlign: "center" }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.01em" }}>
                      {TYPE_LABEL[t]}
                    </p>
                    <p style={{ fontSize: 13, color: "#6e6e73" }}>
                      {models.length} model{models.length !== 1 ? "s" : ""} available &middot; {caps[0]}kg–{caps[caps.length - 1]}kg
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}

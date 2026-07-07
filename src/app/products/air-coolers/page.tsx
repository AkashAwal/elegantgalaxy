import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AirCoolersClient from "./AirCoolersClient";
import { MODELS, TYPE_IMAGES, type CoolerType } from "@/data/air-coolers";

export const metadata: Metadata = {
  alternates: { canonical: "/products/air-coolers" },
  title: "Air Coolers",
  description:
    "Explore Elegant Galaxy commercial and desert air coolers - 100L to 160L commercial models and 90L–110L desert coolers with honeycomb cooling pads and high air delivery.",
  openGraph: {
    title:       "Air Coolers",
    description: "Commercial and desert air coolers for Indian summers. High air delivery, 7090 honeycomb pads, and durable PPCP bodies.",
    type:        "website",
  },
};

const TYPES: Array<{ type: CoolerType; label: string }> = [
  { type: "commercial", label: "Commercial Coolers" },
  { type: "desert",     label: "Desert Coolers" },
];

export default async function AirCoolersPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; cap?: string }>;
}) {
  const { type, cap } = await searchParams;
  const parsedCap     = cap ? parseInt(cap, 10) : null;
  const initialCap    = parsedCap && !Number.isNaN(parsedCap) ? parsedCap : null;
  const initialType   = type === "commercial" || type === "desert" ? type : null;

  if (initialType || initialCap) {
    return <AirCoolersClient initialType={initialType} initialCap={initialCap} />;
  }

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>Air Coolers</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Stay Cool, Work Smart.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 540 }}>
            Choose a type to explore capacities, specs, and pricing details.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ rowGap: 40, columnGap: 20 }}>
            {TYPES.map(({ type: t, label }) => {
              const models = MODELS.filter((m) => m.type === t);
              const caps   = models.map((m) => m.capacity).sort((a, b) => a - b);
              return (
                <Link
                  key={t}
                  href={`/products/air-coolers?type=${t}`}
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
                    background: "#f0f0f5",
                    padding: "28px 24px 20px",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    aspectRatio: "16 / 9",
                  }}>
                    <div style={{ width: "100%", maxWidth: 90, height: "100%", position: "relative" }}>
                      <Image
                        src={TYPE_IMAGES[t]}
                        alt={label}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="200px"
                      />
                    </div>
                  </div>
                  <div style={{ padding: "18px 20px 20px", textAlign: "center" }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.01em" }}>
                      {label}
                    </p>
                    <p style={{ fontSize: 13, color: "#6e6e73" }}>
                      {models.length} model{models.length !== 1 ? "s" : ""} available &middot; {caps[0]}L–{caps[caps.length - 1]}L
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

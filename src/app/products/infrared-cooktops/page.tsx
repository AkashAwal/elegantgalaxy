import type { Metadata } from "next";
import Link from "next/link";
import InfraredCooktopsClient, { CooktopSvg } from "./InfraredCooktopsClient";
import { MODELS, BURNER_COUNTS, burnerLabel } from "@/data/infrared-cooktops";

export const metadata: Metadata = {
  alternates: { canonical: "/products/infrared-cooktops" },
  title: "Infrared Cooktops",
  description:
    "Explore Elegant Galaxy infrared cooktops - single to 4-burner ceramic glass cooktops that heat faster and safer than gas.",
  openGraph: {
    title:       "Infrared Cooktops",
    description: "Single to 4-burner infrared cooktops with ceramic glass surfaces.",
    type:        "website",
  },
};

const BURNER_QUERY_MAP: Record<string, number> = {
  "single-burner": 1,
  "double-burner": 2,
};

export default async function InfraredCooktopsPage({
  searchParams,
}: {
  searchParams: Promise<{ burners?: string }>;
}) {
  const { burners } = await searchParams;
  const parsed = burners ? (BURNER_QUERY_MAP[burners] ?? parseInt(burners, 10)) : null;
  const initialBurners = parsed && !Number.isNaN(parsed) ? parsed : null;

  if (initialBurners) {
    return <InfraredCooktopsClient initialBurners={initialBurners} />;
  }

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>Infrared Cooktops</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Cook Faster, Cook Safer.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 520 }}>
            Choose a burner count to explore specs and pricing details.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ rowGap: 40, columnGap: 20 }}>
            {BURNER_COUNTS.map((n) => {
              const models = MODELS.filter((m) => m.burners === n);
              return (
                <Link
                  key={n}
                  href={`/products/infrared-cooktops?burners=${n}`}
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
                    background: "#1c1c1e",
                    padding: "28px 24px 20px",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    minHeight: 220,
                  }}>
                    <CooktopSvg burners={n} />
                  </div>
                  <div style={{ padding: "18px 20px 20px", textAlign: "center" }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.01em" }}>
                      {burnerLabel(n)}
                    </p>
                    <p style={{ fontSize: 13, color: "#6e6e73" }}>
                      {models.length} model{models.length !== 1 ? "s" : ""} available
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

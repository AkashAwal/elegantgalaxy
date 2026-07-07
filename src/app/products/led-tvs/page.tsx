import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MODELS } from "@/data/led-tvs";
import { TvIcon } from "./LedTvsClient";

export const metadata: Metadata = {
  alternates: { canonical: "/products/led-tvs" },
  title: "LED TVs",
  description:
    "Explore Elegant Galaxy LED TVs — Android TV, webOS 4K, webOS 2K, Google TV, Distro OS, Frameless Smart, and Frameless Normal.",
  openGraph: {
    title:       "LED TVs — Elegant Galaxy",
    description: "Premium LED TVs from 24\" to 100\". Android TV, webOS, Google TV, and more.",
    type:        "website",
  },
};

export default function LedTvsPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>LED Televisions</p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Find Your Perfect TV.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 520 }}>
            Choose a platform to explore sizes, specs, and pricing details.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ rowGap: 40, columnGap: 20 }}>
            {MODELS.map((model) => (
              <Link
                key={model.id}
                href={`/products/led-tvs/${model.id}`}
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
                  background: model.images ? "#fff" : "#1d1d1f",
                  padding: "28px 24px 20px",
                  display: "flex", justifyContent: "center", alignItems: "center",
                  minHeight: 220,
                }}>
                  {model.images ? (
                    <Image
                      src={model.images.front}
                      alt={`${model.platform} TV`}
                      width={400}
                      height={283}
                      style={{ width: "100%", maxWidth: 320, height: "auto" }}
                    />
                  ) : (
                    <TvIcon />
                  )}
                </div>
                <div style={{ padding: "18px 20px 20px", textAlign: "center" }}>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#1d1d1f", marginBottom: 4, letterSpacing: "-0.01em" }}>
                    {model.platform}
                  </p>
                  <p style={{ fontSize: 13, color: "#6e6e73" }}>
                    {model.sizes.length} size{model.sizes.length !== 1 ? "s" : ""} available &middot; {model.sizes[0]}&quot;–{model.sizes[model.sizes.length - 1]}&quot;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

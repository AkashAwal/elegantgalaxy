import { Suspense } from "react";
import type { Metadata } from "next";
import SupportClient from "./SupportClient";
import { ARTICLES } from "@/data/support-articles";

export const metadata: Metadata = {
  title:       "Support — Elegant Galaxy",
  description: "Step-by-step guides, manuals, and how-tos for all Elegant Galaxy products.",
};

export default function SupportPage() {
  const total = ARTICLES.length;

  return (
    <main className="bg-[#f5f5f7] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div style={{ background: "#1d1d1f", paddingTop: 64, paddingBottom: 64 }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ textAlign: "center" }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            color: "rgba(245,245,247,0.4)", marginBottom: 16, textTransform: "uppercase",
          }}>
            Help & Support
          </p>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: "-0.03em",
            lineHeight: 1.08, color: "#f5f5f7", marginBottom: 14,
          }}>
            How can we help?
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.45)", lineHeight: 1.6 }}>
            {total} guides covering setup, usage, troubleshooting, and more.
          </p>
        </div>
      </div>

      {/* ── Search + articles ──────────────────────────────────────────────── */}
      <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
        <SupportClient />
      </Suspense>

    </main>
  );
}

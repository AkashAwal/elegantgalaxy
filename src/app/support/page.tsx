import { Suspense } from "react";
import type { Metadata } from "next";
import SupportClient from "./SupportClient";
import { ARTICLES } from "@/data/support-articles";

// ── In-page Suspense fallback ─────────────────────────────────────────────────

const SHIMMER = `
  @keyframes eg-shimmer {
    from { background-position: -240% center; }
    to   { background-position:  240% center; }
  }
  .sk-light {
    background: linear-gradient(90deg, #e8e8ed 25%, #f2f2f7 50%, #e8e8ed 75%);
    background-size: 400% auto;
    animation: eg-shimmer 1.8s linear infinite;
  }
`;

function ArticleSk() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="sk-light" style={{ width: 72,    height: 18, borderRadius: 980 }} />
      <div className="sk-light" style={{ width: "85%", height: 14, borderRadius: 5 }} />
      <div className="sk-light" style={{ width: "65%", height: 14, borderRadius: 5 }} />
      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
        <div className="sk-light" style={{ width: 48, height: 11, borderRadius: 4 }} />
        <div className="sk-light" style={{ width: 36, height: 11, borderRadius: 4 }} />
      </div>
    </div>
  );
}

function SupportContentSkeleton() {
  return (
    <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 88 }}>
      <style dangerouslySetInnerHTML={{ __html: SHIMMER }} />
      {/* Search bar */}
      <div className="sk-light" style={{ width: "100%", height: 52, borderRadius: 14, marginBottom: 28 }} />
      {/* Category pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
        {[96, 116, 80, 104, 88].map((w, i) => (
          <div key={i} className="sk-light" style={{ width: w, height: 34, borderRadius: 980 }} />
        ))}
      </div>
      {/* Article cards — 1-col on mobile, 2 on sm, 3 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {Array.from({ length: 9 }).map((_, i) => <ArticleSk key={i} />)}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title:       "Support — Elegant Galaxy",
  description: "Step-by-step guides, manuals, and how-tos for all Elegant Galaxy products.",
};

export default function SupportPage() {
  const total = ARTICLES.length;

  return (
    <main id="main-content" className="bg-[#f5f5f7] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div style={{ background: "#1d1d1f", paddingTop: 64, paddingBottom: 64 }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ textAlign: "center" }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            color: "rgba(245,245,247,0.4)", marginBottom: 16, textTransform: "uppercase",
          }}>
            Help & Support
          </p>
          <h1
            className="text-[34px] sm:text-[44px] lg:text-[52px]"
            style={{
              fontWeight:    700,
              letterSpacing: "-0.03em",
              lineHeight:    1.08,
              color:         "#f5f5f7",
              marginBottom:  14,
            }}
          >
            How can we help?
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.45)", lineHeight: 1.6 }}>
            {total} guides covering setup, usage, troubleshooting, and more.
          </p>
        </div>
      </div>

      {/* ── Search + articles ──────────────────────────────────────────────── */}
      <Suspense fallback={<SupportContentSkeleton />}>
        <SupportClient />
      </Suspense>

    </main>
  );
}

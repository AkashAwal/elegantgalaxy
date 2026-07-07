import { Suspense } from "react";
import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { BLOG_POSTS } from "@/data/blog-posts";

// ── In-page Suspense fallback ─────────────────────────────────────────────────
// Matches the card grid shape so content snaps in without a layout jump.

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

function CardSk() {
  return (
    <div style={{ background: "#fff", borderRadius: 18, padding: "24px 24px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="sk-light" style={{ width: "100%", height: 4,  borderRadius: 2,   marginBottom: 4 }} />
      <div className="sk-light" style={{ width: 72,     height: 20, borderRadius: 980 }} />
      <div className="sk-light" style={{ width: "85%",  height: 16, borderRadius: 5 }} />
      <div className="sk-light" style={{ width: "60%",  height: 16, borderRadius: 5 }} />
      <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
        <div className="sk-light" style={{ width: 52, height: 12, borderRadius: 4 }} />
        <div className="sk-light" style={{ width: 40, height: 12, borderRadius: 4 }} />
      </div>
    </div>
  );
}

function BlogContentSkeleton() {
  return (
    <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 88 }}>
      <style dangerouslySetInnerHTML={{ __html: SHIMMER }} />
      {/* Filter / search bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
        <div className="sk-light" style={{ flex: 1, height: 44, borderRadius: 12 }} />
      </div>
      {/* Category pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
        {[80, 100, 88, 72, 96].map((w, i) => (
          <div key={i} className="sk-light" style={{ width: w, height: 34, borderRadius: 980 }} />
        ))}
      </div>
      {/* Cards — 1-col on mobile, 2 on sm, 3 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => <CardSk key={i} />)}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title:       "Blog — Elegant Galaxy",
  description: "Guides, comparisons, and tips for getting the most from your Elegant Galaxy appliances.",
};

export default function BlogPage() {
  return (
    <main id="main-content" className="bg-[#f5f5f7] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div style={{ background: "#1d1d1f", paddingTop: 64, paddingBottom: 64 }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ textAlign: "center" }}>
          <p style={{
            fontSize:      11,
            fontWeight:    600,
            letterSpacing: "0.1em",
            color:         "rgba(245,245,247,0.4)",
            marginBottom:  16,
            textTransform: "uppercase",
          }}>
            The Elegant Galaxy Journal
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
            Insights for the modern home.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.45)", lineHeight: 1.6 }}>
            {BLOG_POSTS.length} articles on buying guides, comparisons, maintenance, and more.
          </p>
        </div>
      </div>

      {/* ── Blog content ────────────────────────────────────────────────────── */}
      <Suspense fallback={<BlogContentSkeleton />}>
        <BlogClient />
      </Suspense>

    </main>
  );
}

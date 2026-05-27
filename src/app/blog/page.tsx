import { Suspense } from "react";
import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title:       "Blog — Elegant Galaxy",
  description: "Guides, comparisons, and tips for getting the most from your Elegant Galaxy appliances.",
};

export default function BlogPage() {
  return (
    <main className="bg-[#f5f5f7] min-h-screen">

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
          <h1 style={{
            fontSize:      52,
            fontWeight:    700,
            letterSpacing: "-0.03em",
            lineHeight:    1.08,
            color:         "#f5f5f7",
            marginBottom:  14,
          }}>
            Insights for the modern home.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.45)", lineHeight: 1.6 }}>
            {BLOG_POSTS.length} articles on buying guides, comparisons, maintenance, and more.
          </p>
        </div>
      </div>

      {/* ── Blog content ────────────────────────────────────────────────────── */}
      <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
        <BlogClient />
      </Suspense>

    </main>
  );
}

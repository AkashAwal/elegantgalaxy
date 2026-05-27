"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, Clock, ChevronRight, X } from "lucide-react";
import {
  BLOG_POSTS, BLOG_CATEGORIES, searchBlogPosts,
  getBlogPostsByCategory,
} from "@/data/blog-posts";
import type { BlogCategory, BlogPost } from "@/data/blog-posts";

// ── Category pill ─────────────────────────────────────────────────────────────

function CategoryPill({
  category, active, onClick,
}: { category: BlogCategory; active: boolean; onClick: () => void }) {
  const meta = BLOG_CATEGORIES[category];
  return (
    <button onClick={onClick} style={{
      display:      "inline-flex",
      alignItems:   "center",
      padding:      "7px 16px",
      borderRadius: 980,
      border:       `1.5px solid ${active ? meta.color : "#e8e8ed"}`,
      background:   active ? meta.color : "#fff",
      color:        active ? "#fff" : "#1d1d1f",
      fontSize:     13,
      fontWeight:   500,
      cursor:       "pointer",
      transition:   "all 0.15s ease",
      whiteSpace:   "nowrap",
    }}>
      {meta.label}
    </button>
  );
}

// ── Article card ──────────────────────────────────────────────────────────────

function ArticleCard({ post }: { post: BlogPost }) {
  const meta = BLOG_CATEGORIES[post.category];
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{
        display:        "flex",
        flexDirection:  "column",
        textDecoration: "none",
        background:     "#fff",
        borderRadius:   16,
        overflow:       "hidden",
        border:         "1.5px solid #e8e8ed",
        transition:     "border-color 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = meta.color;
        (e.currentTarget as HTMLElement).style.boxShadow  = `0 4px 20px ${meta.color}22`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "#e8e8ed";
        (e.currentTarget as HTMLElement).style.boxShadow  = "none";
      }}
    >
      {/* Gradient accent strip */}
      <div style={{ height: 5, background: meta.gradient, flexShrink: 0 }} />

      <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Category badge */}
        <span style={{
          display:       "inline-block",
          fontSize:      10,
          fontWeight:    700,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color:         meta.color,
          background:    `${meta.color}18`,
          padding:       "3px 9px",
          borderRadius:  20,
          marginBottom:  12,
        }}>
          {BLOG_CATEGORIES[post.category].label}
        </span>

        <p style={{
          fontSize:      15,
          fontWeight:    600,
          color:         "#1d1d1f",
          letterSpacing: "-0.01em",
          lineHeight:    1.35,
          marginBottom:  8,
        }}>
          {post.title}
        </p>

        <p style={{
          fontSize:   13,
          color:      "#6e6e73",
          lineHeight: 1.6,
          marginBottom: 16,
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>
          {post.excerpt}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#6e6e73", fontWeight: 500 }}>
            <Clock size={11} />
            {post.readTime} min read
          </span>
          <span style={{
            display:    "flex",
            alignItems: "center",
            gap:        2,
            fontSize:   12,
            color:      meta.color,
            fontWeight: 600,
          }}>
            Read <ChevronRight size={13} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Featured post ─────────────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: BlogPost }) {
  const meta = BLOG_CATEGORIES[post.category];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col sm:flex-row overflow-hidden"
      style={{
        textDecoration: "none",
        background:     "#fff",
        borderRadius:   20,
        border:         "1.5px solid #e8e8ed",
        marginBottom:   48,
      }}
    >
      {/* Left: text */}
      <div className="flex-1 flex flex-col justify-center p-8 sm:p-10">
        <span style={{
          display:       "inline-block",
          fontSize:      10,
          fontWeight:    700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color:         meta.color,
          background:    `${meta.color}18`,
          padding:       "4px 10px",
          borderRadius:  20,
          marginBottom:  16,
          width:         "fit-content",
        }}>
          Featured · {meta.label}
        </span>
        <h2 style={{
          fontSize:      26,
          fontWeight:    700,
          letterSpacing: "-0.022em",
          lineHeight:    1.2,
          color:         "#1d1d1f",
          marginBottom:  12,
        }}>
          {post.title}
        </h2>
        <p style={{
          fontSize:     15,
          color:        "#6e6e73",
          lineHeight:   1.65,
          marginBottom: 24,
          maxWidth:     480,
        }}>
          {post.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#6e6e73" }}>
            <Clock size={13} />
            {post.readTime} min read
          </span>
          <span style={{
            marginLeft:   "auto",
            display:      "inline-flex",
            alignItems:   "center",
            gap:          6,
            padding:      "9px 18px",
            borderRadius: 980,
            background:   meta.color,
            color:        "#fff",
            fontSize:     13,
            fontWeight:   500,
          }}>
            Read article <ChevronRight size={14} strokeWidth={2.5} />
          </span>
        </div>
      </div>

      {/* Right: gradient panel — hidden on mobile */}
      <div
        className="hidden sm:flex w-[280px] shrink-0 items-center justify-center"
        style={{ background: meta.gradient, padding: 32 }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{
            width:        80,
            height:       80,
            borderRadius: "50%",
            background:   "rgba(255,255,255,0.2)",
            margin:       "0 auto 16px",
            display:      "flex",
            alignItems:   "center",
            justifyContent: "center",
            fontSize:     32,
          }}>
            📖
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
            {post.readTime} min read
          </p>
        </div>
      </div>
    </Link>
  );
}

// ── Main client component ─────────────────────────────────────────────────────

export default function BlogClient() {
  const [query,           setQuery]          = useState("");
  const [activeCategory,  setActiveCategory] = useState<BlogCategory | null>(null);

  const featured = BLOG_POSTS.find(p => p.featured);

  const results = useMemo(() => {
    let list = query ? searchBlogPosts(query) : BLOG_POSTS;
    if (activeCategory) list = getBlogPostsByCategory(activeCategory).filter(p =>
      query ? searchBlogPosts(query).includes(p) : true
    );
    // when filtering by category, just filter the full list
    if (!query && activeCategory) list = getBlogPostsByCategory(activeCategory);
    return list;
  }, [query, activeCategory]);

  const isFiltered = !!query || !!activeCategory;

  // non-featured posts for default view
  const nonFeatured = BLOG_POSTS.filter(p => !p.featured);

  return (
    <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 88 }}>

      {/* ── Search ──────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 560, margin: "0 auto 36px" }}>
        <div style={{
          display:      "flex",
          alignItems:   "center",
          gap:          12,
          background:   "#fff",
          border:       "1.5px solid #e8e8ed",
          borderRadius: 14,
          padding:      "0 16px",
          boxShadow:    "0 2px 12px rgba(0,0,0,0.06)",
        }}>
          <Search size={18} color="#6e6e73" strokeWidth={1.75} style={{ flexShrink: 0 }} />
          <input
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveCategory(null); }}
            style={{
              flex:       1,
              padding:    "14px 0",
              fontSize:   15,
              color:      "#1d1d1f",
              background: "transparent",
              border:     "none",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              style={{ border: "none", background: "none", cursor: "pointer", color: "#6e6e73", display: "flex" }}
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* ── Category pills ───────────────────────────────────────────────────── */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
        <button
          onClick={() => { setActiveCategory(null); setQuery(""); }}
          style={{
            padding:      "7px 16px",
            borderRadius: 980,
            border:       `1.5px solid ${!activeCategory ? "#1d1d1f" : "#e8e8ed"}`,
            background:   !activeCategory ? "#1d1d1f" : "#fff",
            color:        !activeCategory ? "#fff" : "#1d1d1f",
            fontSize:     13,
            fontWeight:   500,
            cursor:       "pointer",
            transition:   "all 0.15s ease",
          }}
        >
          All articles
        </button>
        {(Object.keys(BLOG_CATEGORIES) as BlogCategory[]).map(cat => (
          <CategoryPill
            key={cat}
            category={cat}
            active={activeCategory === cat}
            onClick={() => { setActiveCategory(activeCategory === cat ? null : cat); setQuery(""); }}
          />
        ))}
      </div>

      {/* ── Default view: featured + grid ─────────────────────────────────── */}
      {!isFiltered ? (
        <>
          {featured && <FeaturedPost post={featured} />}
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.015em", marginBottom: 20 }}>
            More articles
          </h2>
          {/* 1-col on mobile, 2 on sm, 3 on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nonFeatured.map(p => <ArticleCard key={p.slug} post={p} />)}
          </div>
        </>
      ) : (
        /* ── Filtered view ────────────────────────────────────────────────── */
        <>
          <p style={{ fontSize: 13, color: "#6e6e73", marginBottom: 20 }}>
            {results.length} {results.length === 1 ? "article" : "articles"} found
            {query ? ` for "${query}"` : ""}
          </p>
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map(p => <ArticleCard key={p.slug} post={p} />)}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#1d1d1f", marginBottom: 8 }}>
                No articles found
              </p>
              <p style={{ fontSize: 14, color: "#6e6e73" }}>
                Try a different search term or browse all articles.
              </p>
            </div>
          )}
        </>
      )}

    </div>
  );
}

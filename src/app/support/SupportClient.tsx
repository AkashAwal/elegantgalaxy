"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Clock, ChevronRight, X } from "lucide-react";
import { ARTICLES, CATEGORIES, searchArticles, getArticlesByCategory } from "@/data/support-articles";
import type { Category } from "@/data/support-articles";

// ── Category pill ─────────────────────────────────────────────────────────────

function CategoryPill({
  category, active, onClick,
}: {
  category: Category; active: boolean; onClick: () => void;
}) {
  const meta = CATEGORIES[category];
  return (
    <button
      onClick={onClick}
      style={{
        display:      "inline-flex",
        alignItems:   "center",
        gap:          6,
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
      }}
    >
      {meta.label}
    </button>
  );
}

// ── Article card ──────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: (typeof ARTICLES)[number] }) {
  const meta = CATEGORIES[article.category];
  return (
    <Link
      href={`/support/${article.slug}`}
      style={{
        display:        "block",
        textDecoration: "none",
        background:     "#fff",
        borderRadius:   14,
        padding:        "20px 22px",
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
        marginBottom:  10,
      }}>
        {article.categoryLabel}
      </span>

      <p style={{
        fontSize:      15,
        fontWeight:    600,
        color:         "#1d1d1f",
        letterSpacing: "-0.01em",
        lineHeight:    1.35,
        marginBottom:  7,
      }}>
        {article.title}
      </p>

      <p style={{
        fontSize:     13,
        color:        "#6e6e73",
        lineHeight:   1.55,
        marginBottom: 14,
      }}>
        {article.description}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          display:    "flex",
          alignItems: "center",
          gap:        4,
          fontSize:   12,
          color:      "#6e6e73",
          fontWeight: 500,
        }}>
          <Clock size={12} />
          {article.readTime} min read
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 2, fontSize: 12, color: meta.color, fontWeight: 600 }}>
          Read guide <ChevronRight size={13} strokeWidth={2.5} />
        </span>
      </div>
    </Link>
  );
}

// ── Main client component ─────────────────────────────────────────────────────

function isCategory(value: string | null): value is Category {
  return value !== null && value in CATEGORIES;
}

export default function SupportClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [query,    setQuery]    = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(
    isCategory(categoryParam) ? categoryParam : null
  );

  const results = useMemo(() => {
    let list = query ? searchArticles(query) : ARTICLES;
    if (activeCategory) list = list.filter(a => a.category === activeCategory);
    return list;
  }, [query, activeCategory]);

  // Group by category when not searching
  const grouped = useMemo(() => {
    const cats = Object.keys(CATEGORIES) as Category[];
    return cats.map(cat => ({
      category: cat,
      meta:     CATEGORIES[cat],
      articles: getArticlesByCategory(cat),
    }));
  }, []);

  const isFiltered = !!query || !!activeCategory;

  return (
    <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 88 }}>

      {/* ── Search bar ───────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 620, margin: "0 auto 40px" }}>
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
            placeholder="Search guides… e.g. connect to WiFi, error code, wash cycle"
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveCategory(null); }}
            style={{
              flex:        1,
              padding:     "15px 0",
              fontSize:    15,
              color:       "#1d1d1f",
              background:  "transparent",
              border:      "none",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#6e6e73" }}
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* ── Category filter pills ─────────────────────────────────────────── */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40, justifyContent: "center" }}>
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
          All guides
        </button>
        {(Object.keys(CATEGORIES) as Category[]).map(cat => (
          <CategoryPill
            key={cat}
            category={cat}
            active={activeCategory === cat}
            onClick={() => { setActiveCategory(activeCategory === cat ? null : cat); setQuery(""); }}
          />
        ))}
      </div>

      {/* ── Filtered / search results ─────────────────────────────────────── */}
      {isFiltered ? (
        <>
          <p style={{ fontSize: 13, color: "#6e6e73", marginBottom: 20 }}>
            {results.length} {results.length === 1 ? "guide" : "guides"} found
            {query ? ` for "${query}"` : ""}
          </p>
          {results.length > 0 ? (
            /* 1-col on mobile, 2 on sm, 3 on lg */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map(a => <ArticleCard key={a.slug} article={a} />)}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#1d1d1f", marginBottom: 8 }}>No guides found</p>
              <p style={{ fontSize: 14, color: "#6e6e73", marginBottom: 20 }}>
                Try different words, or contact our team directly.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", padding: "10px 22px",
                borderRadius: 980, background: "#0071e3", color: "#fff",
                fontSize: 14, fontWeight: 500, textDecoration: "none",
              }}>
                Contact Support
              </Link>
            </div>
          )}
        </>
      ) : (
        /* ── Default: grouped by category ──────────────────────────────── */
        <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
          {grouped.map(({ category, meta, articles }) => (
            <div key={category}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
                <h2 style={{
                  fontSize:      20,
                  fontWeight:    600,
                  color:         "#1d1d1f",
                  letterSpacing: "-0.015em",
                  display:       "flex",
                  alignItems:    "center",
                  gap:           10,
                }}>
                  <span style={{
                    display:      "inline-block",
                    width:        10,
                    height:       10,
                    borderRadius: "50%",
                    background:   meta.color,
                    flexShrink:   0,
                  }} />
                  {meta.label}
                </h2>
                <Link
                  href={meta.href}
                  style={{ fontSize: 13, color: "#0071e3", fontWeight: 500, textDecoration: "none" }}
                >
                  Shop {meta.label}
                </Link>
              </div>
              {/* 1-col on mobile, 2 on sm, 3 on lg */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {articles.map(a => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-10"
        style={{
          marginTop:    72,
          background:   "#fff",
          borderRadius: 18,
          border:       "1.5px solid #e8e8ed",
        }}
      >
        <div>
          <p style={{ fontSize: 18, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.015em", marginBottom: 6 }}>
            Can&apos;t find what you&apos;re looking for?
          </p>
          <p style={{ fontSize: 14, color: "#6e6e73" }}>
            Our support team is available Mon–Sat, 9 AM – 6 PM IST.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
          <a href="tel:+919540699333" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "10px 20px", borderRadius: 980,
            border: "1.5px solid #0071e3", color: "#0071e3",
            fontSize: 13, fontWeight: 500, textDecoration: "none",
          }}>
            Call Customer Care
          </a>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            padding: "10px 20px", borderRadius: 980,
            background: "#0071e3", color: "#fff",
            fontSize: 13, fontWeight: 500, textDecoration: "none",
          }}>
            Send a Message
          </Link>
        </div>
      </div>

    </div>
  );
}

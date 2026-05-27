import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, ChevronRight, AlertTriangle, Lightbulb } from "lucide-react";
import {
  ARTICLES, CATEGORIES, getArticle,
  type Section, type SupportArticle,
} from "@/data/support-articles";

// ── Static generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article  = getArticle(slug);
  if (!article) return {};
  return {
    title:       `${article.title} — Elegant Galaxy Support`,
    description: article.description,
  };
}

// ── Section renderers ─────────────────────────────────────────────────────────

function RenderSection({ section, index }: { section: Section; index: number }) {
  switch (section.type) {

    case "text":
      return (
        <div style={{ marginBottom: 28 }}>
          {section.heading && (
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.015em", marginBottom: 10 }}>
              {section.heading}
            </h2>
          )}
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#3a3a3c" }}>
            {section.body}
          </p>
        </div>
      );

    case "steps":
      return (
        <div style={{ marginBottom: 32 }}>
          {section.heading && (
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.015em", marginBottom: 20 }}>
              {section.heading}
            </h2>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {section.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 20, position: "relative" }}>
                {/* Step number + connecting line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width:          40,
                    height:         40,
                    borderRadius:   "50%",
                    background:     "#0071e3",
                    color:          "#fff",
                    fontSize:       16,
                    fontWeight:     700,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    flexShrink:     0,
                    zIndex:         1,
                  }}>
                    {i + 1}
                  </div>
                  {i < section.steps.length - 1 && (
                    <div style={{
                      width:      2,
                      flex:       1,
                      minHeight:  24,
                      background: "#e8e8ed",
                      margin:     "4px 0",
                    }} />
                  )}
                </div>

                {/* Step content */}
                <div style={{ paddingBottom: i < section.steps.length - 1 ? 24 : 0, flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontSize:      16,
                    fontWeight:    600,
                    color:         "#1d1d1f",
                    letterSpacing: "-0.01em",
                    marginBottom:  6,
                    paddingTop:    9,
                  }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3c", marginBottom: step.tip ? 10 : 0 }}>
                    {step.body}
                  </p>
                  {step.tip && (
                    <div style={{
                      display:      "flex",
                      alignItems:   "flex-start",
                      gap:          8,
                      padding:      "10px 14px",
                      background:   "#eff6ff",
                      borderRadius: 8,
                      border:       "1px solid #bfdbfe",
                    }}>
                      <Lightbulb size={14} color="#0071e3" style={{ flexShrink: 0, marginTop: 2 }} />
                      <p style={{ fontSize: 13.5, color: "#1d4ed8", lineHeight: 1.55 }}>{step.tip}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "tip":
      return (
        <div style={{
          display:      "flex",
          alignItems:   "flex-start",
          gap:          12,
          padding:      "16px 18px",
          background:   "#eff6ff",
          borderRadius: 12,
          border:       "1px solid #bfdbfe",
          marginBottom: 24,
        }}>
          <Lightbulb size={18} color="#0071e3" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#1e40af" }}>{section.body}</p>
        </div>
      );

    case "warning":
      return (
        <div style={{
          display:      "flex",
          alignItems:   "flex-start",
          gap:          12,
          padding:      "16px 18px",
          background:   "#fff7ed",
          borderRadius: 12,
          border:       "1px solid #fed7aa",
          marginBottom: 24,
        }}>
          <AlertTriangle size={18} color="#ea580c" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#9a3412" }}>{section.body}</p>
        </div>
      );

    case "list":
      return (
        <div style={{ marginBottom: 28 }}>
          {section.heading && (
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.015em", marginBottom: 14 }}>
              {section.heading}
            </h2>
          )}
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {section.items.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{
                  flexShrink:   0,
                  width:        6,
                  height:       6,
                  borderRadius: "50%",
                  background:   "#0071e3",
                  marginTop:    9,
                }} />
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3c" }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      );

    case "table":
      return (
        <div style={{ marginBottom: 32, overflowX: "auto" }}>
          {section.heading && (
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.015em", marginBottom: 14 }}>
              {section.heading}
            </h2>
          )}
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#f5f5f7" }}>
                {section.headers.map((h, i) => (
                  <th key={i} style={{
                    padding:     "12px 16px",
                    textAlign:   "left",
                    fontWeight:  600,
                    color:       "#1d1d1f",
                    borderBottom:"1.5px solid #e8e8ed",
                    whiteSpace:  "nowrap",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? "#fff" : "#fafafa" }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding:    "12px 16px",
                      color:      ci === 0 ? "#1d1d1f" : "#3a3a3c",
                      fontWeight: ci === 0 ? 600 : 400,
                      borderBottom: "1px solid #e8e8ed",
                      lineHeight: 1.55,
                      verticalAlign: "top",
                    }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

// ── Related articles ──────────────────────────────────────────────────────────

function RelatedArticles({ article }: { article: SupportArticle }) {
  if (!article.relatedSlugs?.length) return null;
  const related = article.relatedSlugs
    .map(slug => ARTICLES.find(a => a.slug === slug))
    .filter(Boolean) as SupportArticle[];
  if (!related.length) return null;

  return (
    <div style={{ marginTop: 52, paddingTop: 40, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.015em", marginBottom: 18 }}>
        Related guides
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {related.map(r => {
          const meta = CATEGORIES[r.category];
          return (
            <Link key={r.slug} href={`/support/${r.slug}`} style={{
              display:        "block",
              textDecoration: "none",
              padding:        "18px 20px",
              background:     "#fff",
              borderRadius:   12,
              border:         "1.5px solid #e8e8ed",
            }}>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.07em",
                textTransform: "uppercase", color: meta.color,
                background: `${meta.color}18`, padding: "3px 8px",
                borderRadius: 20, display: "inline-block", marginBottom: 8,
              }}>
                {r.categoryLabel}
              </span>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", lineHeight: 1.35, marginBottom: 8 }}>
                {r.title}
              </p>
              <span style={{ fontSize: 12, color: meta.color, fontWeight: 600, display: "flex", alignItems: "center", gap: 2 }}>
                Read guide <ChevronRight size={12} strokeWidth={2.5} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article  = getArticle(slug);
  if (!article) notFound();

  const meta = CATEGORIES[article.category];

  return (
    <main className="bg-[#f5f5f7] min-h-screen">
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 88 }}>

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <nav style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 32, flexWrap: "wrap" }}>
          {[
            { label: "Support", href: "/support" },
            { label: meta.label, href: `/support?category=${article.category}` },
            { label: article.title },
          ].map((crumb, i, arr) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {crumb.href ? (
                <Link href={crumb.href} style={{ fontSize: 13, color: "#0071e3", textDecoration: "none", fontWeight: 500 }}>
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ fontSize: 13, color: "#6e6e73" }}>{crumb.label}</span>
              )}
              {i < arr.length - 1 && <ChevronRight size={13} color="#aeaeb2" strokeWidth={2} />}
            </span>
          ))}
        </nav>

        {/* ── Two-column layout ────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>

          {/* ── Article body ──────────────────────────────────────────────── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              background:   "#fff",
              borderRadius: 20,
              padding:      "40px 44px",
              boxShadow:    "0 2px 16px rgba(0,0,0,0.06)",
            }}>
              {/* Header */}
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: meta.color,
                background: `${meta.color}18`, padding: "4px 10px",
                borderRadius: 20, display: "inline-block", marginBottom: 16,
              }}>
                {article.categoryLabel}
              </span>

              <h1 style={{
                fontSize:      30,
                fontWeight:    700,
                letterSpacing: "-0.025em",
                lineHeight:    1.15,
                color:         "#1d1d1f",
                marginBottom:  10,
              }}>
                {article.title}
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#6e6e73" }}>
                  <Clock size={13} />
                  {article.readTime} min read
                </span>
              </div>

              <div style={{ height: 1, background: "rgba(0,0,0,0.07)", marginBottom: 32 }} />

              {/* Sections */}
              {article.sections.map((section, i) => (
                <RenderSection key={i} section={section} index={i} />
              ))}
            </div>

            <RelatedArticles article={article} />
          </div>

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <div style={{ flexShrink: 0, width: 260, position: "sticky", top: 72 }}>

            {/* Need more help */}
            <div style={{
              background:   "#fff",
              borderRadius: 16,
              padding:      "22px 20px",
              border:       "1.5px solid #e8e8ed",
              marginBottom: 16,
            }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                Need more help?
              </p>
              <p style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.6, marginBottom: 16 }}>
                Our team is available Mon–Sat, 9 AM – 6 PM IST.
              </p>
              <a href="tel:+919540699333" style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                padding:        "9px 0",
                borderRadius:   8,
                border:         "1.5px solid #0071e3",
                color:          "#0071e3",
                fontSize:       13,
                fontWeight:     500,
                textDecoration: "none",
                marginBottom:   8,
              }}>
                Call Customer Care
              </a>
              <Link href="/contact" style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                padding:        "9px 0",
                borderRadius:   8,
                background:     "#0071e3",
                color:          "#fff",
                fontSize:       13,
                fontWeight:     500,
                textDecoration: "none",
              }}>
                Send a Message
              </Link>
            </div>

            {/* Back to support */}
            <Link href="/support" style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              gap:            6,
              padding:        "11px 0",
              borderRadius:   10,
              border:         "1.5px solid #e8e8ed",
              background:     "#fff",
              color:          "#1d1d1f",
              fontSize:       13,
              fontWeight:     500,
              textDecoration: "none",
            }}>
              ← All support guides
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}

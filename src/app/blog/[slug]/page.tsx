import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, ChevronRight, Lightbulb, AlertTriangle, Quote } from "lucide-react";
import {
  BLOG_POSTS, BLOG_CATEGORIES, getBlogPost,
  type BlogSection, type BlogPost,
} from "@/data/blog-posts";
import ShareButtons from "@/components/ShareButtons";

// ── Static generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title:       post.title,
    description: post.excerpt,
    alternates:  { canonical: `/blog/${slug}` },
  };
}

// ── Section renderers ─────────────────────────────────────────────────────────

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {

    case "text":
      return (
        <div style={{ marginBottom: 28 }}>
          {section.heading && (
            <h2 style={{
              fontSize:      21,
              fontWeight:    700,
              color:         "#1d1d1f",
              letterSpacing: "-0.018em",
              lineHeight:    1.25,
              marginBottom:  10,
              marginTop:     4,
            }}>
              {section.heading}
            </h2>
          )}
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#3a3a3c" }}>
            {section.body}
          </p>
        </div>
      );

    case "list":
      return (
        <div style={{ marginBottom: 28 }}>
          {section.heading && (
            <h2 style={{
              fontSize:      21,
              fontWeight:    700,
              color:         "#1d1d1f",
              letterSpacing: "-0.018em",
              marginBottom:  14,
            }}>
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
                  marginTop:    10,
                }} />
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a3c" }}>{item}</p>
              </li>
            ))}
          </ul>
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
          marginBottom: 28,
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
          marginBottom: 28,
        }}>
          <AlertTriangle size={18} color="#ea580c" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#9a3412" }}>{section.body}</p>
        </div>
      );

    case "quote":
      return (
        <div style={{
          padding:      "22px 26px",
          background:   "#fafafa",
          borderRadius: 14,
          borderLeft:   "4px solid #0071e3",
          marginBottom: 28,
        }}>
          <Quote size={22} color="#0071e3" style={{ marginBottom: 10, opacity: 0.6 }} />
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#1d1d1f", fontStyle: "italic", marginBottom: section.attribution ? 10 : 0 }}>
            {section.body}
          </p>
          {section.attribution && (
            <p style={{ fontSize: 13, color: "#6e6e73", fontWeight: 500 }}>
              — {section.attribution}
            </p>
          )}
        </div>
      );

    case "table":
      return (
        <div style={{ marginBottom: 32, overflowX: "auto" }}>
          {section.heading && (
            <h2 style={{
              fontSize:      21,
              fontWeight:    700,
              color:         "#1d1d1f",
              letterSpacing: "-0.018em",
              marginBottom:  14,
            }}>
              {section.heading}
            </h2>
          )}
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#f5f5f7" }}>
                {section.headers.map((h, i) => (
                  <th key={i} style={{
                    padding:      "11px 16px",
                    textAlign:    "left",
                    fontWeight:   600,
                    color:        "#1d1d1f",
                    borderBottom: "1.5px solid #e8e8ed",
                    whiteSpace:   "nowrap",
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
                      padding:       "11px 16px",
                      color:         ci === 0 ? "#1d1d1f" : "#3a3a3c",
                      fontWeight:    ci === 0 ? 600 : 400,
                      borderBottom:  "1px solid #e8e8ed",
                      lineHeight:    1.5,
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

// ── Related posts ─────────────────────────────────────────────────────────────

function RelatedPosts({ post }: { post: BlogPost }) {
  if (!post.relatedSlugs?.length) return null;
  const related = post.relatedSlugs
    .map(s => BLOG_POSTS.find(p => p.slug === s))
    .filter(Boolean) as BlogPost[];
  if (!related.length) return null;

  return (
    <div style={{ marginTop: 60, paddingTop: 48, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <h2 style={{
        fontSize:      20,
        fontWeight:    700,
        color:         "#1d1d1f",
        letterSpacing: "-0.015em",
        marginBottom:  20,
      }}>
        More from the journal
      </h2>
      {/* 1-col on mobile, 2-col on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map(r => {
          const meta = BLOG_CATEGORIES[r.category];
          return (
            <Link key={r.slug} href={`/blog/${r.slug}`} style={{
              display:        "block",
              textDecoration: "none",
              padding:        "20px 22px",
              background:     "#fff",
              borderRadius:   14,
              border:         "1.5px solid #e8e8ed",
              overflow:       "hidden",
              position:       "relative",
            }}>
              <div style={{ height: 4, background: meta.gradient, position: "absolute", top: 0, left: 0, right: 0 }} />
              <span style={{
                display:       "inline-block",
                fontSize:      10,
                fontWeight:    700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color:         meta.color,
                background:    `${meta.color}18`,
                padding:       "3px 8px",
                borderRadius:  20,
                marginBottom:  8,
              }}>
                {meta.label}
              </span>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", lineHeight: 1.35, marginBottom: 6 }}>
                {r.title}
              </p>
              <span style={{ fontSize: 12, color: meta.color, fontWeight: 600, display: "flex", alignItems: "center", gap: 2 }}>
                Read article <ChevronRight size={12} strokeWidth={2.5} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const meta = BLOG_CATEGORIES[post.category];

  return (
    <main id="main-content" className="bg-[#f5f5f7] min-h-screen">

      {/* ── Gradient header ──────────────────────────────────────────────────── */}
      <div style={{ background: meta.gradient, paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ textAlign: "center" }}>

          {/* Breadcrumb */}
          <nav style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 28, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Blog",          href: "/blog" },
              { label: meta.label,      href: `/blog?category=${post.category}` },
              { label: post.title },
            ].map((crumb, i, arr) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {crumb.href ? (
                  <Link href={crumb.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {crumb.label}
                  </span>
                )}
                {i < arr.length - 1 && <ChevronRight size={13} color="rgba(255,255,255,0.5)" strokeWidth={2} />}
              </span>
            ))}
          </nav>

          <span style={{
            display:       "inline-block",
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color:         "rgba(255,255,255,0.9)",
            background:    "rgba(255,255,255,0.2)",
            padding:       "4px 12px",
            borderRadius:  20,
            marginBottom:  18,
          }}>
            {meta.label}
          </span>

          {/* Responsive heading */}
          <h1
            className="text-[24px] sm:text-[32px] lg:text-[40px]"
            style={{
              fontWeight:    700,
              letterSpacing: "-0.028em",
              lineHeight:    1.12,
              color:         "#fff",
              maxWidth:      740,
              margin:        "0 auto 16px",
            }}
          >
            {post.title}
          </h1>

          <p style={{
            fontSize:   16,
            color:      "rgba(255,255,255,0.75)",
            lineHeight: 1.6,
            maxWidth:   560,
            margin:     "0 auto 28px",
          }}>
            {post.excerpt}
          </p>

          <div style={{
            display:        "flex",
            alignItems:     "center",
            gap:            16,
            justifyContent: "center",
            flexWrap:       "wrap",
          }}>
            <span style={{
              display:      "flex",
              alignItems:   "center",
              gap:          8,
              background:   "rgba(255,255,255,0.18)",
              padding:      "8px 16px",
              borderRadius: 980,
              fontSize:     13,
              fontWeight:   600,
              color:        "#fff",
            }}>
              Elegant Galaxy
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 5 }}>
              <Clock size={13} />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 88 }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          {/* Responsive padding on the article card */}
          <div
            className="px-5 py-8 sm:px-10 sm:py-10 lg:px-[52px] lg:py-[44px]"
            style={{
              background:   "#fff",
              borderRadius: 20,
              boxShadow:    "0 2px 20px rgba(0,0,0,0.06)",
            }}
          >
            {post.content.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
            <ShareButtons
              url={`https://elegantgalaxy.in/blog/${post.slug}`}
              title={post.title}
            />
          </div>

          {/* Tags */}
          <div style={{ marginTop: 28, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                fontSize:      12,
                fontWeight:    500,
                color:         "#6e6e73",
                background:    "#fff",
                border:        "1px solid #e8e8ed",
                padding:       "5px 12px",
                borderRadius:  980,
              }}>
                #{tag}
              </span>
            ))}
          </div>

          <RelatedPosts post={post} />

          {/* Back link */}
          <div style={{ marginTop: 44 }}>
            <Link href="/blog" style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            6,
              padding:        "10px 18px",
              borderRadius:   10,
              border:         "1.5px solid #e8e8ed",
              background:     "#fff",
              color:          "#1d1d1f",
              fontSize:       13,
              fontWeight:     500,
              textDecoration: "none",
            }}>
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}

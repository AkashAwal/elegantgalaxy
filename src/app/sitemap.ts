import type { MetadataRoute } from "next";
import { BLOG_POSTS }  from "@/data/blog-posts";
import { ARTICLES }    from "@/data/support-articles";
import { MODELS as TV_MODELS }      from "@/data/led-tvs";
import { MODELS as COOLER_MODELS }  from "@/data/air-coolers";

const BASE = "https://elegantgalaxy.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Core pages ────────────────────────────────────────────────────────────
  const core: MetadataRoute.Sitemap = [
    {
      url:             BASE,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        1.0,
    },
    {
      url:             `${BASE}/about`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.9,
    },
    {
      url:             `${BASE}/contact`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${BASE}/faq`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${BASE}/blog`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.85,
    },
    {
      url:             `${BASE}/support`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.85,
    },
    {
      url:             `${BASE}/support/warranty`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.6,
    },
    {
      url:             `${BASE}/distributors/apply`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.75,
    },
    {
      url:             `${BASE}/legal/privacy`,
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${BASE}/legal/terms`,
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${BASE}/legal/cookies`,
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.3,
    },
  ];

  // ── Product category roots ───────────────────────────────────────────────
  const productCategories: MetadataRoute.Sitemap = [
    "/products",
    "/products/led-tvs",
    "/products/washing-machines",
    "/products/air-coolers",
    "/products/infrared-cooktops",
  ].map((path) => ({
    url:             `${BASE}${path}`,
    lastModified:    now,
    changeFrequency: "weekly" as const,
    priority:        0.8,
  }));

  // ── Product sub-pages (remotes, informational) ──────────────────────────
  const productSubPages: MetadataRoute.Sitemap = [
    "/products/led-tvs/remotes",
    "/products/infrared-cooktops/why-infrared",
  ].map((path) => ({
    url:             `${BASE}${path}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.5,
  }));

  // ── Individual product detail pages ──────────────────────────────────────
  // Washing machines and infrared cooktops use a single query-param page
  // (already covered by the category root above), so no per-model URLs are
  // generated for them.
  const productDetails: MetadataRoute.Sitemap = [
    ...TV_MODELS.map((m) => `/products/led-tvs/${m.id}`),
    ...COOLER_MODELS.map((m) => `/products/air-coolers/${m.id}`),
  ].map((path) => ({
    url:             `${BASE}${path}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.6,
  }));

  // ── Blog posts ────────────────────────────────────────────────────────────
  const blog: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url:             `${BASE}/blog/${post.slug}`,
    lastModified:    new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority:        0.7,
  }));

  // ── Support articles ──────────────────────────────────────────────────────
  const support: MetadataRoute.Sitemap = ARTICLES.map(article => ({
    url:             `${BASE}/support/${article.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.65,
  }));

  return [...core, ...productCategories, ...productSubPages, ...productDetails, ...blog, ...support];
}

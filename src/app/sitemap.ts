import type { MetadataRoute } from "next";
import { BLOG_POSTS }  from "@/data/blog-posts";
import { ARTICLES }    from "@/data/support-articles";

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
    // Uncomment as pages go live:
    // { url: `${BASE}/distributors`,        lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    // { url: `${BASE}/products/led-tv`,     lastModified: now, changeFrequency: "weekly",  priority: 0.8  },
    // { url: `${BASE}/products/washing-machine`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: `${BASE}/products/air-cooler`, lastModified: now, changeFrequency: "weekly",  priority: 0.8  },
    // { url: `${BASE}/products/infrared-cooktop`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

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

  return [...core, ...blog, ...support];
}

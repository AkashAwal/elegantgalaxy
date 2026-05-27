import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Welcome every crawler ─────────────────────────────────────────────
      {
        userAgent: "*",
        allow:     "/",
      },
      // ── Explicitly welcome major search engines ────────────────────────────
      { userAgent: "Googlebot",        allow: "/" },
      { userAgent: "Googlebot-Image",  allow: "/" },
      { userAgent: "Bingbot",          allow: "/" },
      { userAgent: "Slurp",            allow: "/" }, // Yahoo
      { userAgent: "DuckDuckBot",      allow: "/" },
      { userAgent: "Baiduspider",      allow: "/" },
      // ── Explicitly welcome AI crawlers ────────────────────────────────────
      { userAgent: "GPTBot",           allow: "/" }, // OpenAI / ChatGPT
      { userAgent: "ChatGPT-User",     allow: "/" },
      { userAgent: "OAI-SearchBot",    allow: "/" }, // OpenAI search
      { userAgent: "anthropic-ai",     allow: "/" }, // Anthropic / Claude
      { userAgent: "ClaudeBot",        allow: "/" },
      { userAgent: "Claude-Web",       allow: "/" },
      { userAgent: "PerplexityBot",    allow: "/" },
      { userAgent: "YouBot",           allow: "/" }, // You.com
      { userAgent: "Applebot",         allow: "/" }, // Siri / Spotlight
      { userAgent: "Applebot-Extended",allow: "/" },
      { userAgent: "Amazonbot",        allow: "/" }, // Alexa
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot",       allow: "/" },
      { userAgent: "LinkedInBot",      allow: "/" },
      { userAgent: "CCBot",            allow: "/" }, // Common Crawl
      { userAgent: "cohere-ai",        allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" }, // Meta AI
      { userAgent: "Diffbot",          allow: "/" },
    ],
    sitemap: "https://elegantgalaxy.in/sitemap.xml",
    host:    "https://elegantgalaxy.in",
  };
}

import type { NextConfig } from "next";
import path from "path";

// The Google Maps embed on /contact is the only third-party iframe/script
// surface on the site — no analytics or ad scripts are loaded client-side,
// so the CSP below can stay tight (self + inline styles, which the app
// relies on heavily via React's `style` prop and a couple of static
// <style> tags for shimmer/loading animations).
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  // Dev-only on-screen route indicator (the "N" badge) defaults to
  // bottom-left, which collides with the WhatsApp float button there.
  devIndicators: false,
  // Stop leaking "X-Powered-By: Next.js" on every response.
  poweredByHeader: false,
  images: {
    // The washing-machine product photos are raw .svg exports (masked
    // raster layers) — next/image blocks SVG optimization by default.
    dangerouslyAllowSVG: true,
  },
  turbopack: {
    // Explicitly anchor the workspace root to this project directory.
    // Without this, Next.js 16 / Turbopack auto-detects the root by
    // walking up for lockfiles and may land on a stray package-lock.json
    // in a parent directory, which breaks route discovery.
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;

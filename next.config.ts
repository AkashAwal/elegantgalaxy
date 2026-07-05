import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Dev-only on-screen route indicator (the "N" badge) defaults to
  // bottom-left, which collides with the WhatsApp float button there.
  devIndicators: false,
  turbopack: {
    // Explicitly anchor the workspace root to this project directory.
    // Without this, Next.js 16 / Turbopack auto-detects the root by
    // walking up for lockfiles and may land on a stray package-lock.json
    // in a parent directory, which breaks route discovery.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

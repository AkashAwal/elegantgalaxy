import ProductShowcase, { type ProductShowcaseConfig } from "@/components/ProductShowcase";

const TV_CONFIG: ProductShowcaseConfig = {
  // ── 3 angle views ──────────────────────────────────────────────────────────
  views: [
    {
      src:   "/tv1-front.webp",
      title: "The Full Picture.",
      desc:  "A 55″ 4K QLED canvas that turns every frame into a cinematic experience.",
      tag:   "FRONT VIEW",
      bg:    "#08090e",
      glow:  "rgba(96, 165, 250, 0.11)",
    },
    {
      src:   "/tv1-left.webp",
      title: "Slim by Design.",
      desc:  "An ultra-slim 18 mm profile that disappears seamlessly into your space.",
      tag:   "SIDE PROFILE",
      bg:    "#070f1d",
      glow:  "rgba(129, 140, 248, 0.11)",
    },
    {
      src:   "/tv1-right.webp",
      title: "Every Detail Counts.",
      desc:  "Aerospace-grade aluminium finish, backed by a 3-year manufacturer warranty.",
      tag:   "DETAIL VIEW",
      bg:    "#090d10",
      glow:  "rgba(52, 211, 153, 0.10)",
    },
  ],

  // ── Section 2: parallax ─────────────────────────────────────────────────────
  parallaxTitle:    "4K QLED.",
  parallaxSubtitle: "Brilliant at any size.",
  parallaxDesc:     "Experience colour and clarity like never before.",

  // ── Section 3: feature callouts ─────────────────────────────────────────────
  featuresLeft: [
    { label: "4K QLED Panel",     sub: "8.3 million pixel resolution" },
    { label: "Dolby Atmos Sound", sub: "40W immersive spatial audio"  },
  ],
  featuresRight: [
    { label: "Ultra Slim Bezel",  sub: "3 mm edge-to-edge display"    },
    { label: "Smart OS 3.0",      sub: "1000+ streaming apps built-in"},
  ],

  // ── Section 4: specs ────────────────────────────────────────────────────────
  specs: [
    ["Display",      "55″ 4K QLED"],
    ["Resolution",   "3840 × 2160"],
    ["Refresh Rate", "120 Hz"],
    ["HDR",          "HDR10+ & Dolby Vision"],
    ["Audio",        "40W Dolby Atmos"],
    ["Smart OS",     "3.0  ·  1000+ Apps"],
    ["Ports",        "4× HDMI 2.1  ·  3× USB 3.0"],
    ["Warranty",     "3 Years Comprehensive"],
  ],

  // ── Product info ─────────────────────────────────────────────────────────────
  name:        "Elegant 55″ 4K QLED TV",
  price:       "₹49,999",
  href:        "/products/led-tvs",
  enquireHref: "/contact",
};

export default function TVShowcase() {
  return <ProductShowcase config={TV_CONFIG} sections={["angles"]} />;
}

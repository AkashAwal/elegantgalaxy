/**
 * src/app/loading.tsx
 *
 * Global loading skeleton — shown by Next.js whenever a page segment is
 * suspended during navigation. Lives at the root so every route inherits it;
 * individual routes can override it with their own loading.tsx.
 *
 * Structure mirrors the site-wide page shell:
 *   1. Dark hero  — eyebrow · heading · subtext (centred)
 *   2. Light body — filter-bar skeleton · 2 × 3 card grid
 *
 * Animation: a scanning shimmer rather than a flat pulse, so different
 * elements feel independent instead of blinking in unison.
 */

// ── Shimmer classes (injected once; reused by every skeleton shape) ───────────

const SHIMMER_CSS = `
  @keyframes eg-shimmer {
    from { background-position: -240% center; }
    to   { background-position:  240% center; }
  }
  .sk-light {
    background: linear-gradient(
      90deg,
      #e8e8ed 25%,
      #f2f2f7 50%,
      #e8e8ed 75%
    );
    background-size: 400% auto;
    animation: eg-shimmer 1.8s linear infinite;
  }
  .sk-dark {
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.07) 25%,
      rgba(255,255,255,0.13) 50%,
      rgba(255,255,255,0.07) 75%
    );
    background-size: 400% auto;
    animation: eg-shimmer 1.8s linear infinite;
  }
`;

// ── Tiny helper — reduces repetition for skeleton shapes ─────────────────────

function Sk({
  w, h, r = 6, dark = false, style = {},
}: {
  w: number | string;
  h: number;
  r?: number;
  dark?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={dark ? "sk-dark" : "sk-light"}
      style={{ width: w, height: h, borderRadius: r, flexShrink: 0, ...style }}
    />
  );
}

// ── Card skeleton ─────────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div style={{
      background:   "#fff",
      borderRadius: 18,
      padding:      "24px 24px 22px",
      display:      "flex",
      flexDirection: "column",
      gap:          12,
    }}>
      {/* Coloured accent strip at top — mirrors card gradient bar */}
      <Sk w="100%" h={4} r={2} style={{ marginBottom: 4 }} />
      {/* Category pill */}
      <Sk w={72} h={20} r={980} />
      {/* Title */}
      <Sk w="85%" h={16} r={5} />
      <Sk w="60%" h={16} r={5} />
      {/* Meta row */}
      <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
        <Sk w={52} h={12} r={4} />
        <Sk w={40} h={12} r={4} />
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Loading() {
  return (
    <>
      {/* Inject keyframes — safe in a Server Component */}
      <style dangerouslySetInnerHTML={{ __html: SHIMMER_CSS }} />

      <div style={{ background: "#f5f5f7", minHeight: "100vh" }} aria-busy="true" aria-label="Loading">

        {/* ── Dark hero skeleton ────────────────────────────────────────────── */}
        <div style={{ background: "#1d1d1f", paddingTop: 64, paddingBottom: 64 }}>
          <div
            className="mx-auto max-w-[1440px] px-8"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
          >
            {/* Eyebrow label */}
            <Sk w={96} h={10} dark r={5} />
            {/* Heading — two lines to match multi-word headlines */}
            <Sk w={440} h={40} dark r={10} />
            <Sk w={320} h={40} dark r={10} />
            {/* Subtext */}
            <Sk w={300} h={16} dark r={6} style={{ marginTop: 4 }} />
          </div>
        </div>

        {/* ── Light content area ───────────────────────────────────────────── */}
        <div
          className="mx-auto max-w-[1440px] px-8"
          style={{ paddingTop: 48, paddingBottom: 88 }}
        >

          {/* Search / filter bar skeleton */}
          <div style={{ display: "flex", gap: 10, marginBottom: 28, alignItems: "center" }}>
            <Sk w="100%" h={44} r={12} />
          </div>

          {/* Category pill row */}
          <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
            {[80, 100, 88, 72, 96].map((w, i) => (
              <Sk key={i} w={w} h={34} r={980} />
            ))}
          </div>

          {/* Card grid — 2 rows × 3 columns */}
          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 16,
          }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

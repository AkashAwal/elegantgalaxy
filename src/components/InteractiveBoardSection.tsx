import Link from "next/link";
import { Check, PenTool, Wifi, Users } from "lucide-react";

// ── Interactive board illustration ─────────────────────────────────────────────

function SmartBoardIllustration() {
  return (
    <svg viewBox="0 0 420 340" width="100%" style={{ maxWidth: 440 }} fill="none" aria-hidden>
      {/* Wall glow */}
      <ellipse cx="210" cy="170" rx="190" ry="150" fill="url(#boardGlow)" />

      {/* Stand legs */}
      <rect x="150" y="292" width="10" height="34" rx="4" fill="#3a3a3c" />
      <rect x="260" y="292" width="10" height="34" rx="4" fill="#3a3a3c" />
      <rect x="128" y="322" width="164" height="8" rx="4" fill="#2c2c2e" />

      {/* Panel body */}
      <rect x="30" y="24" width="360" height="270" rx="18" fill="#161618" stroke="#2c2c2e" strokeWidth="2" />
      {/* Screen */}
      <rect x="46" y="40" width="328" height="238" rx="10" fill="#0c0c0e" />

      {/* Top toolbar */}
      <rect x="46" y="40" width="328" height="30" rx="10" fill="#1c1c1f" />
      <circle cx="64" cy="55" r="4" fill="#5eead4" />
      <circle cx="80" cy="55" r="4" fill="#60a5fa" />
      <circle cx="96" cy="55" r="4" fill="#fbbf24" />
      <rect x="300" y="49" width="58" height="12" rx="6" fill="#2c2c2e" />

      {/* Chart / lesson content */}
      <rect x="66" y="92" width="120" height="66" rx="8" fill="#101828" />
      <path d="M78 140 L98 118 L116 132 L138 100 L160 122 L176 108" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Annotation strokes — handwriting simulation */}
      <path d="M206 98 C 226 90, 246 90, 260 100 C 272 108, 258 118, 244 116" stroke="#0071e3" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M206 132 L 356 132" stroke="#3a3a3c" strokeWidth="3" strokeLinecap="round" />
      <path d="M206 152 L 320 152" stroke="#3a3a3c" strokeWidth="3" strokeLinecap="round" />
      <path d="M206 172 L 340 172" stroke="#3a3a3c" strokeWidth="3" strokeLinecap="round" />

      {/* Sticky-note style shape */}
      <rect x="66" y="176" width="120" height="72" rx="8" fill="#1c1408" />
      <rect x="80" y="192" width="92" height="9" rx="4.5" fill="#fbbf24" opacity="0.85" />
      <rect x="80" y="210" width="70" height="9" rx="4.5" fill="#fbbf24" opacity="0.55" />
      <rect x="80" y="228" width="80" height="9" rx="4.5" fill="#fbbf24" opacity="0.35" />

      {/* Cursor / pointer dot */}
      <circle cx="262" cy="103" r="6" fill="#0071e3" />
      <circle cx="262" cy="103" r="11" fill="#0071e3" opacity="0.25" />

      {/* Stylus pen resting against the board */}
      <g transform="rotate(38 372 268)">
        <rect x="358" y="200" width="12" height="120" rx="6" fill="#e5e5ea" />
        <rect x="358" y="200" width="12" height="20" rx="6" fill="#0071e3" />
        <path d="M358 316 L370 316 L364 330 Z" fill="#8e8e93" />
      </g>

      <defs>
        <radialGradient id="boardGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

const FEATURES = [
  { icon: <PenTool size={15} strokeWidth={2} />, label: "Palm-rejecting multi-touch annotation" },
  { icon: <Wifi    size={15} strokeWidth={2} />, label: "Wireless screen casting from any device" },
  { icon: <Users   size={15} strokeWidth={2} />, label: "Built for classrooms, coachings & boardrooms" },
];

export default function InteractiveBoardSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-14">
      <div
        className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        style={{
          background:   "radial-gradient(120% 140% at 100% 0%, #16233a 0%, #0b0b0d 55%), #0b0b0d",
          borderRadius: 28,
          gap:          32,
        }}
      >
        {/* Copy */}
        <div style={{ padding: "56px 44px" }} className="flex flex-col justify-center">
          <p style={{
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color:         "#5b9fef",
            marginBottom:  14,
          }}>
            For Schools &amp; Coaching Centres
          </p>
          <h2 style={{
            fontSize:      "clamp(28px, 3.4vw, 42px)",
            fontWeight:    700,
            letterSpacing: "-0.025em",
            lineHeight:    1.1,
            color:         "#f5f5f7",
            marginBottom:  18,
          }}>
            Turn any classroom into a smart classroom.
          </h2>
          <p style={{
            fontSize:   16,
            lineHeight: 1.65,
            color:      "rgba(245,245,247,0.6)",
            maxWidth:   440,
            marginBottom: 28,
          }}>
            The Elegant Galaxy Interactive Smart Board brings 4K touch displays, live
            annotation, and wireless casting to every lesson — available in 65&Prime; to 98&Prime;.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 34 }}>
            {FEATURES.map((f) => (
              <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  width:          26,
                  height:         26,
                  borderRadius:   "50%",
                  background:     "rgba(0,113,227,0.16)",
                  color:          "#5b9fef",
                  flexShrink:     0,
                }}>
                  {f.icon}
                </span>
                <span style={{ fontSize: 14.5, color: "rgba(245,245,247,0.8)" }}>{f.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/products/led-tvs/smart-board"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                height:         48,
                padding:        "0 26px",
                borderRadius:   980,
                fontSize:       15,
                fontWeight:     600,
                color:          "#fff",
                background:     "#0071e3",
                textDecoration: "none",
                whiteSpace:     "nowrap",
              }}
            >
              Explore Interactive Boards
            </Link>
            <Link
              href="/contact?enquire=Interactive%20Smart%20Board"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                height:         48,
                padding:        "0 26px",
                borderRadius:   980,
                fontSize:       15,
                fontWeight:     600,
                color:          "#f5f5f7",
                border:         "1.5px solid rgba(245,245,247,0.22)",
                textDecoration: "none",
                whiteSpace:     "nowrap",
              }}
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex items-center justify-center" style={{ padding: "24px 32px 0" }}>
          <SmartBoardIllustration />
        </div>
      </div>
    </section>
  );
}

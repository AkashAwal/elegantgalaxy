import Link from "next/link";

// ── Remote illustration ─────────────────────────────────────────────────────────

function RemoteIcon() {
  return (
    <svg viewBox="0 0 90 220" width="90" height="220" fill="none">
      <rect x="4" y="4" width="82" height="212" rx="22" fill="#1d1d1f" />
      <rect x="12" y="14" width="66" height="192" rx="14" fill="#2c2c2e" />
      <circle cx="45" cy="40" r="10" fill="#3a3a3c" />
      <rect x="27" y="66" width="36" height="36" rx="18" fill="#3a3a3c" />
      <circle cx="45" cy="84" r="7" fill="#6e6e73" />
      <rect x="27" y="114" width="16" height="16" rx="4" fill="#3a3a3c" />
      <rect x="47" y="114" width="16" height="16" rx="4" fill="#3a3a3c" />
      <rect x="27" y="136" width="16" height="16" rx="4" fill="#3a3a3c" />
      <rect x="47" y="136" width="16" height="16" rx="4" fill="#3a3a3c" />
      <rect x="27" y="164" width="36" height="12" rx="6" fill="#3a3a3c" />
      <rect x="27" y="182" width="36" height="12" rx="6" fill="#3a3a3c" />
    </svg>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function RemotesSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 pb-14">
      <div
        className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
        style={{
          background:   "#1d1d1f",
          borderRadius: 20,
          padding:      "40px 44px",
        }}
      >
        {/* Icon */}
        <div style={{ flexShrink: 0 }}>
          <RemoteIcon />
        </div>

        {/* Copy */}
        <div className="text-center sm:text-left" style={{ flex: 1 }}>
          <p style={{
            fontSize:      11,
            fontWeight:    600,
            letterSpacing: "0.1em",
            color:         "rgba(245,245,247,0.45)",
            marginBottom:  10,
            textTransform: "uppercase",
          }}>
            TV Remotes
          </p>
          <h2 style={{
            fontSize:      26,
            fontWeight:    700,
            letterSpacing: "-0.02em",
            color:         "#f5f5f7",
            marginBottom:  10,
          }}>
            Lost or broken remote?
          </h2>
          <p style={{
            fontSize:   15,
            lineHeight: 1.6,
            color:      "rgba(245,245,247,0.55)",
            maxWidth:   480,
          }}>
            We stock replacement remotes for every Elegant Galaxy TV model. Reach out with
            your model number and we&apos;ll sort you out.
          </p>
        </div>

        {/* CTA */}
        <div style={{ flexShrink: 0 }}>
          <Link
            href="/contact?enquire=TV%20Remote"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              height:         44,
              padding:        "0 26px",
              borderRadius:   980,
              fontSize:       15,
              fontWeight:     600,
              color:          "#1d1d1f",
              background:     "#f5f5f7",
              textDecoration: "none",
              whiteSpace:     "nowrap",
            }}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}

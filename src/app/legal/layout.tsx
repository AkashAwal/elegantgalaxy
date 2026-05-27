import LegalNav from "@/components/LegalNav";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div style={{ background: "#1d1d1f", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          <p style={{
            fontSize:      11,
            fontWeight:    600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color:         "rgba(245,245,247,0.35)",
            marginBottom:  12,
          }}>
            Legal
          </p>
          <h1
            className="text-[28px] sm:text-[36px] lg:text-[44px]"
            style={{
              fontWeight:    700,
              letterSpacing: "-0.03em",
              lineHeight:    1.1,
              color:         "#f5f5f7",
            }}
          >
            Our policies &amp; terms
          </h1>
        </div>
      </div>

      {/* ── Body: sidebar + content ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 88 }}>
        {/* Stack on mobile; sidebar left + content right on md+ */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

          {/* Sidebar — horizontal pills on mobile, sticky vertical on md+ */}
          <div className="w-full md:w-[200px] md:shrink-0 md:sticky md:top-[72px]">
            <LegalNav />
          </div>

          {/* Page content */}
          <div className="flex-1 min-w-0 w-full">
            {children}
          </div>

        </div>
      </div>

    </main>
  );
}

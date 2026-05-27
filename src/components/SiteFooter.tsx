"use client";

import Link from "next/link";

// ── Footer link columns ───────────────────────────────────────────────────────

const COLS = [
  {
    heading: "Products",
    links: [
      { label: "LED TVs",             href: "/products/led-tvs"             },
      { label: "Washing Machines",    href: "/products/washing-machines"    },
      { label: "Air Coolers",         href: "/products/air-coolers"         },
      { label: "Infrared Cooktops",   href: "/products/infrared-cooktops"   },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "/about"   },
      { label: "Blog",    href: "/blog"    },
      { label: "Careers", href: "/careers" },
      { label: "Press",   href: "/press"   },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us",       href: "/contact"                  },
      { label: "Service Centres",  href: "/support/service-centres"  },
      { label: "Warranty",         href: "/support/warranty"         },
      { label: "Returns",          href: "/support"                  },
    ],
  },
  {
    heading: "Business",
    links: [
      { label: "Find a Distributor",   href: "/distributors"         },
      { label: "Become a Distributor", href: "/distributors/apply"   },
      { label: "Financing",            href: "/distributors/financing"},
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function SiteFooter() {
  return (
    <footer style={{ background: "#1d1d1f" }}>

      {/* ── CTA band ─────────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          className="mx-auto max-w-[1440px] px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10"
          style={{ paddingTop: 72, paddingBottom: 72 }}
        >
          {/* Left — copy */}
          <div>
            <h2
              className="text-[26px] sm:text-[34px] lg:text-[40px]"
              style={{
                fontWeight:    700,
                letterSpacing: "-0.03em",
                lineHeight:    1.1,
                color:         "#f5f5f7",
                marginBottom:  10,
              }}
            >
              Ready to upgrade your home?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(245,245,247,0.45)", lineHeight: 1.6 }}>
              Explore our full range of premium appliances built for Indian homes.
            </p>
          </div>

          {/* Right — buttons */}
          <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
            <Link
              href="/products/led-tvs"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                height:         44,
                padding:        "0 26px",
                borderRadius:   980,
                fontSize:       15,
                fontWeight:     500,
                color:          "#f5f5f7",
                border:         "1.5px solid rgba(245,245,247,0.3)",
                textDecoration: "none",
              }}
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
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
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ── Link grid ────────────────────────────────────────────────────────── */}
      <div
        className="mx-auto max-w-[1440px] px-8"
        style={{ paddingTop: 48, paddingBottom: 0 }}
      >
        {/* Brand column spans full width on mobile; 4-col grid on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-10">

          {/* Brand column — spans 2 on mobile, 1 on desktop */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo mark */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l2.6 6.4L21 12l-6.4 2.6L12 22l-2.6-6.4L3 12l6.4-2.6L12 2z"
                  fill="#C8A951"
                />
              </svg>
              <span style={{
                fontSize:      15,
                fontWeight:    600,
                letterSpacing: "-0.01em",
                color:         "#f5f5f7",
              }}>
                Elegant Galaxy
              </span>
            </div>
            <p style={{
              fontSize:   13,
              lineHeight: 1.7,
              color:      "rgba(245,245,247,0.38)",
              maxWidth:   260,
              marginBottom: 24,
            }}>
              Premium home appliances crafted for Indian homes. Thoughtfully engineered,
              beautifully made, built to last.
            </p>
            {/* Social icons (placeholder links) */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Instagram", href: "https://instagram.com", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
                { label: "YouTube",   href: "https://youtube.com",   path: "M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.4A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z" },
                { label: "LinkedIn",  href: "https://linkedin.com",  path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width:          34,
                    height:         34,
                    borderRadius:   "50%",
                    background:     "rgba(255,255,255,0.07)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    color:          "rgba(245,245,247,0.5)",
                    transition:     "background 0.2s ease, color 0.2s ease",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — 2-per-row on mobile, each its own col on desktop */}
          {COLS.map(col => (
            <div key={col.heading}>
              <p style={{
                fontSize:      11,
                fontWeight:    600,
                letterSpacing: "0.08em",
                color:         "rgba(245,245,247,0.35)",
                marginBottom:  16,
                textTransform: "uppercase",
              }}>
                {col.heading}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map(lnk => (
                  <Link
                    key={lnk.href}
                    href={lnk.href}
                    style={{
                      fontSize:       13,
                      color:          "rgba(245,245,247,0.55)",
                      textDecoration: "none",
                      fontWeight:     400,
                      transition:     "color 0.15s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#f5f5f7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,247,0.55)")}
                  >
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 48 }}>
        <div
          className="mx-auto max-w-[1440px] px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
          style={{ paddingTop: 18, paddingBottom: 18 }}
        >
          <p style={{ fontSize: 12, color: "rgba(245,245,247,0.28)" }}>
            Copyright © {new Date().getFullYear()} Elegant Galaxy Pvt Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy",    href: "/legal/privacy"    },
              { label: "Terms of Use",      href: "/legal/terms"      },
              { label: "Cookie Policy",     href: "/legal/cookies"    },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize:       12,
                  color:          "rgba(245,245,247,0.28)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}

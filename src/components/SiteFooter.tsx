"use client";

import Link from "next/link";

// ── Footer link columns ───────────────────────────────────────────────────────

// Product categories, each with its models/sub-types listed underneath.
const PRODUCT_COLS = [
  {
    heading: "LED TVs",
    href:    "/products/led-tvs",
    links: [
      { label: "Android TV", href: "/products/led-tvs/android"  },
      { label: "WebOS 4K",   href: "/products/led-tvs/webos-4k" },
      { label: "WebOS 2K",   href: "/products/led-tvs/webos-2k" },
      { label: "Google TV",  href: "/products/led-tvs/google"   },
    ],
  },
  {
    heading: "Washing Machines",
    href:    "/products/washing-machines",
    links: [
      { label: "7kg",  href: "/products/washing-machines?cap=7"  },
      { label: "9kg",  href: "/products/washing-machines?cap=9"  },
      { label: "12kg", href: "/products/washing-machines?cap=12" },
    ],
  },
  {
    heading: "Air Coolers",
    href:    "/products/air-coolers",
    links: [
      { label: "Commercial Coolers", href: "/products/air-coolers?type=commercial" },
      { label: "Domestic Coolers",   href: "/products/air-coolers?type=domestic"   },
    ],
  },
  {
    heading: "Infrared Cooktops",
    href:    "/products/infrared-cooktops",
    links: [
      { label: "Single Burner Cooktop", href: "/products/infrared-cooktops" },
    ],
  },
];

const QUICK_LINKS_COL = {
  heading: "Quick Links",
  links: [
    { label: "About", href: "/about" },
    { label: "Blog",  href: "/blog"  },
    { label: "FAQs",  href: "/faq"   },
  ],
};

const CONTACT_COL = {
  heading: "Contact",
  links: [
    { label: "Contact Us",             href: "/contact"             },
    { label: "Become a Distributor",   href: "/distributors/apply"  },
  ],
};

const SERVICE_COL = {
  heading: "Service",
  links: [
    { label: "Warranty",         href: "/support/warranty"          },
  ],
};

const LEGAL_COL = {
  heading: "Legal",
  links: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use",   href: "/legal/terms"   },
    { label: "Cookie Policy",  href: "/legal/cookies" },
  ],
};

const SOCIAL_LINKS = [
  { label: "Instagram", cls: "si-instagram", href: "https://www.instagram.com/elegantgalaxycustomercare", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { label: "Facebook",  cls: "si-facebook",  href: "https://www.facebook.com/elegantgalaxy", path: "M13.5 22v-8.5H16l.4-3.2h-2.9V8.2c0-.9.25-1.55 1.58-1.55H16.5V3.8C16.2 3.75 15.2 3.67 14 3.67c-2.4 0-4.05 1.47-4.05 4.17v2.46H7.5v3.2h2.45V22h3.55z" },
  { label: "X",         cls: "si-x",         href: "https://x.com/elegantgalaxyin", path: "M18.9 3h3.1l-6.77 7.73L23 21h-6.24l-4.89-6.39L6.24 21H3.13l7.24-8.27L2 3h6.4l4.42 5.84L18.9 3zm-1.09 16.17h1.72L7.29 4.73H5.44l12.37 14.44z" },
  { label: "WhatsApp",  cls: "si-whatsapp",  href: "https://wa.me/919540064444", path: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.05L2 22l5.25-1.38c1.41.77 3.02 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.9 14.19c-.25.7-1.24 1.28-2.03 1.45-.55.12-1.26.21-3.66-.78-3.07-1.27-5.05-4.39-5.2-4.6-.15-.2-1.24-1.65-1.24-3.15 0-1.5.79-2.24 1.07-2.55.28-.31.61-.39.82-.39.2 0 .41 0 .59.01.19.01.44-.07.69.53.25.6.86 2.08.94 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.37 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.57.36.08.13.08.75-.17 1.45z" },
];

// LinkedIn and YouTube omitted for now.
// LinkedIn: no confirmed company handle yet.
// YouTube: real channel exists (@egelegantgalaxy729) but login credentials
// need to be recovered before it can be actively managed/linked.
// Add back to SOCIAL_LINKS once ready:
//   { label: "LinkedIn", cls: "si-linkedin", href: "https://linkedin.com/company/...", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
//   { label: "YouTube", cls: "si-youtube", href: "https://www.youtube.com/@egelegantgalaxy729", path: "M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.4A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z" },

// ── Small helpers ─────────────────────────────────────────────────────────────

function ColHeadingLink({ heading, href }: { heading: string; href: string }) {
  return (
    <Link
      href={href}
      style={{
        display:       "block",
        fontSize:      13,
        fontWeight:    600,
        color:         "#f5f5f7",
        textDecoration: "none",
        marginBottom:  16,
      }}
    >
      {heading}
    </Link>
  );
}

function ColHeadingLabel({ heading }: { heading: string }) {
  return (
    <p style={{
      fontSize:     13,
      fontWeight:   600,
      color:        "#f5f5f7",
      marginBottom: 16,
    }}>
      {heading}
    </p>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
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
      {label}
    </Link>
  );
}

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
              href="/products"
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
        {/* Brand column full width on its own row; link columns wrap below */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/eg-logo.png"
              alt="Elegant Galaxy"
              style={{ display: "block", height: 80, width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p style={{
            fontSize:   13,
            lineHeight: 1.7,
            color:      "rgba(245,245,247,0.38)",
            maxWidth:   420,
            marginBottom: 20,
          }}>
            Premium home appliances crafted for Indian homes. Thoughtfully engineered,
            beautifully made, built to last.
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`social-icon ${s.cls}`}
                style={{
                  width:          34,
                  height:         34,
                  borderRadius:   "50%",
                  background:     "rgba(255,255,255,0.07)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  color:          "rgba(245,245,247,0.45)",
                  transition:     "background 0.22s ease, color 0.22s ease",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <style>{`
              .si-instagram:hover {
                background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%) !important;
                color: #fff !important;
              }
              .si-facebook:hover { background: #1877F2 !important; color: #fff !important; }
              .si-x:hover         { background: #000    !important; color: #fff !important; }
              .si-youtube:hover   { background: #FF0000 !important; color: #fff !important; }
              .si-linkedin:hover  { background: #0A66C2 !important; color: #fff !important; }
              .si-whatsapp:hover  { background: #25D366 !important; color: #fff !important; }
            `}</style>
          </div>
        </div>

        {/* Link columns: 4 product categories (with models) + Contact + Service + Quick Links + Legal — 2 rows of 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
          {PRODUCT_COLS.map(col => (
            <div key={col.heading}>
              <ColHeadingLink heading={col.heading} href={col.href} />
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map(lnk => (
                  <FooterLink key={lnk.href} label={lnk.label} href={lnk.href} />
                ))}
              </div>
            </div>
          ))}

          <div>
            <ColHeadingLabel heading={CONTACT_COL.heading} />
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {CONTACT_COL.links.map(lnk => (
                <FooterLink key={lnk.href} label={lnk.label} href={lnk.href} />
              ))}
            </div>
          </div>

          <div>
            <ColHeadingLabel heading={SERVICE_COL.heading} />
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {SERVICE_COL.links.map(lnk => (
                <FooterLink key={lnk.href} label={lnk.label} href={lnk.href} />
              ))}
            </div>
          </div>

          <div>
            <ColHeadingLabel heading={QUICK_LINKS_COL.heading} />
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {QUICK_LINKS_COL.links.map(lnk => (
                <FooterLink key={lnk.href} label={lnk.label} href={lnk.href} />
              ))}
            </div>
          </div>

          <div>
            <ColHeadingLabel heading={LEGAL_COL.heading} />
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {LEGAL_COL.links.map(lnk => (
                <FooterLink key={lnk.href} label={lnk.label} href={lnk.href} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 48 }}>
        <div
          className="mx-auto max-w-[1440px] px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ paddingTop: 18, paddingBottom: 18 }}
        >
          <p style={{ fontSize: 12, color: "rgba(245,245,247,0.28)" }}>
            Copyright © {new Date().getFullYear()} Elegant Galaxy Pvt Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(245,245,247,0.28)" }}>
            Garhi Guldhar, Pillar No. 639, M-112, Meerut Rd, opposite Crown Honda Delhi, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003
            {" · "}GSTIN: 09AAFCE8346R1ZR
            {" · "}MSME: UDYAM-UP-28-0011627
          </p>
        </div>
      </div>

    </footer>
  );
}

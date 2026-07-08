import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/cookies" },
  title:       "Cookie Policy",
  description: "How Elegant Galaxy uses cookies and similar technologies on its website.",
};

const h2: React.CSSProperties = {
  fontSize: 19, fontWeight: 700, letterSpacing: "-0.015em",
  color: "#1d1d1f", marginTop: 40, marginBottom: 12,
};
const p: React.CSSProperties = {
  fontSize: 15, lineHeight: 1.85, color: "#3a3a3c", marginBottom: 16,
};
const ul: React.CSSProperties = {
  listStyle: "none", padding: 0, margin: "0 0 16px",
  display: "flex", flexDirection: "column", gap: 8,
};
const li: React.CSSProperties = {
  display: "flex", alignItems: "flex-start", gap: 10,
  fontSize: 15, lineHeight: 1.7, color: "#3a3a3c",
};
const dot: React.CSSProperties = {
  flexShrink: 0, width: 5, height: 5, borderRadius: "50%",
  background: "#0071e3", marginTop: 9,
};

// ── Cookie table ──────────────────────────────────────────────────────────────

interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
}

function CookieTable({ rows }: { rows: CookieRow[] }) {
  const th: React.CSSProperties = {
    padding: "11px 16px", textAlign: "left", fontWeight: 600,
    fontSize: 13, color: "#1d1d1f", borderBottom: "1.5px solid #e8e8ed",
    whiteSpace: "nowrap", background: "#f5f5f7",
  };
  const td: React.CSSProperties = {
    padding: "11px 16px", fontSize: 13, color: "#3a3a3c",
    borderBottom: "1px solid #e8e8ed", verticalAlign: "top", lineHeight: 1.55,
  };
  return (
    <div style={{ overflowX: "auto", marginBottom: 28, borderRadius: 10, border: "1px solid #e8e8ed", overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Cookie</th>
            <th style={th}>Provider</th>
            <th style={th}>Purpose</th>
            <th style={th}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <td style={{ ...td, fontFamily: "monospace", fontSize: 12, color: "#1d1d1f", fontWeight: 600 }}>{row.name}</td>
              <td style={td}>{row.provider}</td>
              <td style={td}>{row.purpose}</td>
              <td style={{ ...td, whiteSpace: "nowrap" }}>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Category badge ────────────────────────────────────────────────────────────

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span style={{
      display: "inline-block", fontSize: 10, fontWeight: 700,
      letterSpacing: "0.07em", textTransform: "uppercase",
      color, background: `${color}18`, padding: "3px 9px",
      borderRadius: 20, marginLeft: 10, verticalAlign: "middle",
    }}>
      {label}
    </span>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CookiesPage() {
  return (
    <article style={{
      background: "#fff", borderRadius: 20,
      padding: "44px 52px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
    }}>

      <p style={{ fontSize: 12, color: "#6e6e73", marginBottom: 32 }}>
        Last updated: May 2026
      </p>

      <p style={p}>
        This Cookie Policy explains how Elegant Galaxy Pvt Ltd ("Elegant Galaxy", "we", "our",
        or "us") uses cookies and similar technologies on elegantgalaxy.in (the "Website").
        It should be read alongside our{" "}
        <a href="/legal/privacy" style={{ color: "#0071e3", textDecoration: "none", fontWeight: 500 }}>Privacy Policy</a>.
      </p>

      {/* 1 */}
      <h2 style={h2}>1. What are cookies?</h2>
      <p style={p}>
        Cookies are small text files placed on your device when you visit a website. They help
        the website remember information about your visit - for example, your preferred language
        or whether you have previously visited a particular page. Cookies cannot execute code,
        carry viruses, or access information on your device.
      </p>
      <p style={p}>
        We also use similar technologies such as local storage and session storage that serve
        comparable purposes. References to "cookies" in this policy include these technologies
        unless stated otherwise.
      </p>

      {/* 2 */}
      <h2 style={h2}>2. Cookie categories we use</h2>

      {/* Essential */}
      <p style={{ ...p, fontWeight: 700, marginBottom: 4 }}>
        Essential cookies <Badge label="Always active" color="#059669" />
      </p>
      <p style={p}>
        These cookies are necessary for the Website to function and cannot be disabled. They
        are typically set in response to actions you take such as filling in a contact form or
        setting your privacy preferences. Without them, certain parts of the Website will not
        work correctly.
      </p>
      <CookieTable rows={[
        { name: "__Host-next-auth.csrf-token", provider: "Elegant Galaxy", purpose: "Cross-site request forgery protection for form submissions", duration: "Session" },
        { name: "next-auth.session-token",     provider: "Elegant Galaxy", purpose: "Maintains session state across page loads",                    duration: "Session" },
      ]} />

      {/* Analytics */}
      <p style={{ ...p, fontWeight: 700, marginBottom: 4 }}>
        Analytics cookies <Badge label="Optional" color="#0071e3" />
      </p>
      <p style={p}>
        These cookies allow us to count visits and traffic sources so we can measure and improve
        Website performance. They help us understand which pages are the most and least popular,
        and how visitors move through the site. All information collected is aggregated and
        anonymous; we cannot use it to identify you personally.
      </p>
      <CookieTable rows={[
        { name: "_ga",     provider: "Google Analytics", purpose: "Distinguishes unique users for traffic analysis",    duration: "2 years"  },
        { name: "_ga_*",   provider: "Google Analytics", purpose: "Stores and counts page views for a specific site",   duration: "2 years"  },
        { name: "_gid",    provider: "Google Analytics", purpose: "Distinguishes users - shorter-lived companion to _ga", duration: "24 hours" },
        { name: "_gat_gtag_*", provider: "Google Analytics", purpose: "Throttles request rate to the Analytics servers", duration: "1 minute" },
      ]} />

      {/* Marketing */}
      <p style={{ ...p, fontWeight: 700, marginBottom: 4 }}>
        Marketing cookies <Badge label="Not currently used" color="#6e6e73" />
      </p>
      <p style={p}>
        We do not currently use marketing or advertising cookies on this Website. If this
        changes, this Cookie Policy will be updated to reflect it.
      </p>

      {/* 3 */}
      <h2 style={h2}>3. Third-party cookies</h2>
      <p style={p}>
        Some cookies on our Website are set by third parties (currently Google Analytics). We
        do not control these third-party cookies. Please refer to the privacy policies of the
        relevant third parties for more information:
      </p>
      <ul style={ul}>
        {[
          <span key="ga">Google Analytics - <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#0071e3", textDecoration: "none" }}>Google Privacy Policy</a></span>,
        ].map((node, i) => (
          <li key={i} style={li}><span style={dot} />{node}</li>
        ))}
      </ul>

      {/* 4 */}
      <h2 style={h2}>4. How to manage cookies</h2>
      <p style={p}>
        You can control and manage cookies in several ways. Please note that removing or blocking
        cookies may impact your experience on our Website.
      </p>
      <p style={{ ...p, fontWeight: 600, marginBottom: 8 }}>Browser settings</p>
      <p style={p}>
        Most browsers allow you to view, delete, and block cookies through their settings. For
        guidance on how to do this in your specific browser:
      </p>
      <ul style={ul}>
        {[
          { label: "Google Chrome",  href: "https://support.google.com/chrome/answer/95647" },
          { label: "Mozilla Firefox",href: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
          { label: "Apple Safari",   href: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" },
          { label: "Microsoft Edge", href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
        ].map(b => (
          <li key={b.label} style={li}>
            <span style={dot} />
            <a href={b.href} target="_blank" rel="noopener noreferrer" style={{ color: "#0071e3", textDecoration: "none" }}>
              {b.label}
            </a>
          </li>
        ))}
      </ul>
      <p style={{ ...p, fontWeight: 600, marginBottom: 8 }}>Opt out of Google Analytics</p>
      <p style={p}>
        You can prevent Google Analytics from collecting data about your visits by installing
        the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#0071e3", textDecoration: "none" }}>
          Google Analytics Opt-out Browser Add-on
        </a>.
      </p>

      {/* 5 */}
      <h2 style={h2}>5. Changes to this policy</h2>
      <p style={p}>
        We may update this Cookie Policy when we add or remove cookies, or when applicable law
        requires. The "Last updated" date at the top of this page will reflect any changes. We
        encourage you to review this policy periodically.
      </p>

      {/* 6 */}
      <h2 style={h2}>6. Contact us</h2>
      <p style={p}>Questions about this Cookie Policy may be directed to:</p>
      <div style={{
        background: "#f5f5f7", borderRadius: 12, padding: "20px 24px",
        fontSize: 14, lineHeight: 1.8, color: "#3a3a3c",
      }}>
        <strong style={{ color: "#1d1d1f" }}>Elegant Galaxy Pvt Ltd</strong><br />
        Garhi Guldhar, Pillar No. 639, M-112, Meerut Rd, opposite Crown Honda Delhi,<br />
        Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003<br />
        GSTIN: 09AAFCE8346R1ZR<br />
        MSME: UDYAM-UP-28-0011627<br />
        ISO 9001:2015<br />
        <a href="mailto:support@elegantgalaxy.in" style={{ color: "#0071e3", textDecoration: "none" }}>
          support@elegantgalaxy.in
        </a>
      </div>

    </article>
  );
}

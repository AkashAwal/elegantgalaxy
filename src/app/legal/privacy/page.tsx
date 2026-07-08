import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/privacy" },
  title:       "Privacy Policy",
  description: "How Elegant Galaxy collects, uses, and protects your personal information.",
};

// ── Shared prose typography ───────────────────────────────────────────────────

const h2: React.CSSProperties = {
  fontSize:      19,
  fontWeight:    700,
  letterSpacing: "-0.015em",
  color:         "#1d1d1f",
  marginTop:     40,
  marginBottom:  12,
};

const p: React.CSSProperties = {
  fontSize:     15,
  lineHeight:   1.85,
  color:        "#3a3a3c",
  marginBottom: 16,
};

const ul: React.CSSProperties = {
  listStyle:    "none",
  padding:      0,
  margin:       "0 0 16px",
  display:      "flex",
  flexDirection: "column",
  gap:          8,
};

const li: React.CSSProperties = {
  display:    "flex",
  alignItems: "flex-start",
  gap:        10,
  fontSize:   15,
  lineHeight: 1.7,
  color:      "#3a3a3c",
};

const dot: React.CSSProperties = {
  flexShrink:   0,
  width:        5,
  height:       5,
  borderRadius: "50%",
  background:   "#0071e3",
  marginTop:    9,
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <article style={{
      background:   "#fff",
      borderRadius: 20,
      padding:      "44px 52px",
      boxShadow:    "0 2px 16px rgba(0,0,0,0.06)",
    }}>

      <p style={{ fontSize: 12, color: "#6e6e73", marginBottom: 32 }}>
        Last updated: May 2026
      </p>

      <p style={p}>
        Elegant Galaxy Pvt Ltd ("Elegant Galaxy", "we", "our", or "us") respects your privacy.
        This Privacy Policy explains what personal information we collect when you visit
        elegantgalaxy.in, how we use it, and the choices you have. Please read it carefully.
      </p>

      {/* 1 */}
      <h2 style={h2}>1. Information we collect</h2>
      <p style={p}>
        We collect information in two ways: information you provide to us directly, and
        information collected automatically when you use our website.
      </p>
      <p style={{ ...p, fontWeight: 600, marginBottom: 8 }}>Information you provide</p>
      <ul style={ul}>
        {[
          "Name, email address, and phone number when you submit an enquiry or contact form",
          "Distributor application details when you apply to become an authorised distributor",
          "Any correspondence you send us (e.g. emails, support messages)",
        ].map(t => (
          <li key={t} style={li}><span style={dot} />{t}</li>
        ))}
      </ul>
      <p style={{ ...p, fontWeight: 600, marginBottom: 8 }}>Information collected automatically</p>
      <ul style={ul}>
        {[
          "Browser type, device type, operating system, and IP address",
          "Pages visited, time spent on pages, referring URL, and clickstream data",
          "Cookie identifiers and similar tracking technologies (see Section 5)",
        ].map(t => (
          <li key={t} style={li}><span style={dot} />{t}</li>
        ))}
      </ul>
      <p style={p}>
        We do not collect sensitive personal data such as financial information, health data,
        or government identification numbers through this website.
      </p>

      {/* 2 */}
      <h2 style={h2}>2. How we use your information</h2>
      <ul style={ul}>
        {[
          "To respond to your enquiries and provide customer support",
          "To process distributor applications and manage our dealer network",
          "To improve and personalise your experience on our website",
          "To send you service updates or product information you have requested",
          "To analyse website traffic and measure the effectiveness of our content",
          "To comply with legal obligations under Indian law",
        ].map(t => (
          <li key={t} style={li}><span style={dot} />{t}</li>
        ))}
      </ul>
      <p style={p}>
        We do not use your personal information for automated decision-making or profiling
        that produces legal effects.
      </p>

      {/* 3 */}
      <h2 style={h2}>3. Sharing your information</h2>
      <p style={p}>
        We do not sell, rent, or trade your personal information to third parties for marketing
        purposes. We may share your information in the following limited circumstances:
      </p>
      <ul style={ul}>
        {[
          "Service providers - companies that help us operate the website and process enquiries (e.g. hosting providers, email delivery services). These parties are contractually bound to protect your information and may only use it as directed by us.",
          "Authorised distributors - if your enquiry relates to a product purchase or service in your region, we may refer your contact details to the relevant authorised distributor with your knowledge.",
          "Legal requirements - if required by law, a court order, or to protect the rights and safety of Elegant Galaxy or the public.",
          "Business transfers - in the event of a merger, acquisition, or sale of company assets, your information may be transferred. We will notify you via a prominent notice on our website.",
        ].map(t => (
          <li key={t} style={li}><span style={dot} />{t}</li>
        ))}
      </ul>

      {/* 4 */}
      <h2 style={h2}>4. Data retention</h2>
      <p style={p}>
        We retain personal information only for as long as necessary to fulfil the purpose for
        which it was collected. Enquiry and contact form data is retained for up to 3 years
        unless a longer period is required by law. Website analytics data is retained in
        aggregated, anonymised form.
      </p>

      {/* 5 */}
      <h2 style={h2}>5. Cookies</h2>
      <p style={p}>
        We use cookies and similar technologies to operate the website and understand how visitors
        use it. For a full description of the cookies we use and how to manage them, please see
        our <a href="/legal/cookies" style={{ color: "#0071e3", textDecoration: "none", fontWeight: 500 }}>Cookie Policy</a>.
      </p>

      {/* 6 */}
      <h2 style={h2}>6. Data security</h2>
      <p style={p}>
        We implement reasonable technical and organisational measures to protect your personal
        information from unauthorised access, disclosure, alteration, or destruction. These
        include HTTPS encryption on all pages, restricted access to personal data within our
        organisation, and regular review of our data practices.
      </p>
      <p style={p}>
        No method of transmission over the internet is completely secure. While we take
        reasonable precautions, we cannot guarantee absolute security.
      </p>

      {/* 7 */}
      <h2 style={h2}>7. Your rights</h2>
      <p style={p}>
        Under the Information Technology Act, 2000 and the Digital Personal Data Protection
        Act, 2023 (to the extent applicable), you have the right to:
      </p>
      <ul style={ul}>
        {[
          "Access the personal information we hold about you",
          "Request correction of inaccurate or incomplete information",
          "Request erasure of your personal information, subject to our legal obligations",
          "Withdraw consent where processing is based on consent",
          "Nominate another person to exercise these rights on your behalf in the event of your death or incapacity",
        ].map(t => (
          <li key={t} style={li}><span style={dot} />{t}</li>
        ))}
      </ul>
      <p style={p}>
        To exercise any of these rights, write to us at{" "}
        <a href="mailto:support@elegantgalaxy.in" style={{ color: "#0071e3", textDecoration: "none" }}>
          support@elegantgalaxy.in
        </a>. We will respond within 30 days.
      </p>

      {/* 8 */}
      <h2 style={h2}>8. Children's privacy</h2>
      <p style={p}>
        Our website is not directed at children under 18 years of age. We do not knowingly
        collect personal information from minors. If you believe we have inadvertently collected
        information from a child, please contact us and we will delete it promptly.
      </p>

      {/* 9 */}
      <h2 style={h2}>9. Third-party links</h2>
      <p style={p}>
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices of those sites and encourage you to read their privacy policies before
        providing any personal information.
      </p>

      {/* 10 */}
      <h2 style={h2}>10. Changes to this policy</h2>
      <p style={p}>
        We may update this Privacy Policy from time to time. When we do, we will revise the
        "Last updated" date at the top of this page. Material changes will be highlighted with
        a notice on the website for at least 30 days after the change takes effect.
      </p>

      {/* 11 */}
      <h2 style={h2}>11. Governing law</h2>
      <p style={p}>
        This Privacy Policy is governed by the laws of the Republic of India. Any disputes
        arising from it shall be subject to the exclusive jurisdiction of the courts in
        Ghaziabad, Uttar Pradesh, India.
      </p>

      {/* 12 */}
      <h2 style={h2}>12. Contact us</h2>
      <p style={p}>
        If you have questions about this Privacy Policy or our data practices, please contact:
      </p>
      <div style={{
        background:   "#f5f5f7",
        borderRadius: 12,
        padding:      "20px 24px",
        fontSize:     14,
        lineHeight:   1.8,
        color:        "#3a3a3c",
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

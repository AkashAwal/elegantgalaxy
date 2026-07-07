import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/terms" },
  title:       "Terms of Use",
  description: "The terms and conditions that govern your use of the Elegant Galaxy website.",
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

export default function TermsPage() {
  return (
    <article style={{
      background: "#fff", borderRadius: 20,
      padding: "44px 52px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
    }}>

      <p style={{ fontSize: 12, color: "#6e6e73", marginBottom: 32 }}>
        Last updated: May 2026
      </p>

      <p style={p}>
        Please read these Terms of Use carefully before using elegantgalaxy.in (the "Website"),
        operated by Elegant Galaxy Pvt Ltd ("Elegant Galaxy", "we", "our", or "us"). By
        accessing or using the Website, you agree to be bound by these terms. If you do not
        agree, please do not use the Website.
      </p>

      {/* 1 */}
      <h2 style={h2}>1. Use of the website</h2>
      <p style={p}>
        This Website is intended for informational purposes only. You may browse our product
        range, read guides and articles, find distributor information, and contact us. You agree to:
      </p>
      <ul style={ul}>
        {[
          "Use the Website only for lawful purposes and in accordance with these Terms",
          "Not attempt to gain unauthorised access to any part of the Website or its infrastructure",
          "Not transmit any harmful, offensive, or disruptive content through any contact form or enquiry channel",
          "Not scrape, harvest, or systematically collect data from the Website without our written consent",
          "Not use the Website in any way that could impair its performance or availability for other users",
        ].map(t => <li key={t} style={li}><span style={dot} />{t}</li>)}
      </ul>

      {/* 2 */}
      <h2 style={h2}>2. Product information and pricing</h2>
      <p style={p}>
        This Website provides information about Elegant Galaxy products but is not a direct
        e-commerce platform. Products are sold through our authorised distributor and dealer
        network. We make every effort to ensure product descriptions and specifications are
        accurate, but:
      </p>
      <ul style={ul}>
        {[
          "Product specifications, availability, and pricing are subject to change without notice",
          "Images are for illustrative purposes and may not perfectly represent the final product",
          "Pricing displayed is indicative; actual purchase price is determined by the authorised dealer",
          "We reserve the right to correct errors in product information at any time",
        ].map(t => <li key={t} style={li}><span style={dot} />{t}</li>)}
      </ul>

      {/* 3 */}
      <h2 style={h2}>3. Intellectual property</h2>
      <p style={p}>
        All content on this Website - including text, graphics, logos, images, product
        photographs, and software - is the property of Elegant Galaxy Pvt Ltd or its content
        suppliers and is protected under Indian and international copyright and trademark law.
      </p>
      <p style={p}>
        You may print or download content from the Website for personal, non-commercial use
        only, provided you do not modify the content and retain all copyright and proprietary
        notices. Any other reproduction, distribution, or use of Website content without our
        prior written consent is strictly prohibited.
      </p>
      <p style={p}>
        "Elegant Galaxy" and the Elegant Galaxy star logo are registered trademarks of Elegant
        Galaxy Pvt Ltd. You may not use our trademarks, trade names, or trade dress without
        our prior written consent.
      </p>

      {/* 4 */}
      <h2 style={h2}>4. User-submitted content</h2>
      <p style={p}>
        If you submit content to us (such as through a contact form, distributor application,
        or feedback mechanism), you grant Elegant Galaxy a non-exclusive, royalty-free licence
        to use, reproduce, and display that content in connection with operating and improving
        our services. You represent that you have the right to submit such content and that it
        does not infringe any third-party rights.
      </p>

      {/* 5 */}
      <h2 style={h2}>5. Third-party links</h2>
      <p style={p}>
        The Website may contain links to third-party websites for your convenience. These links
        do not constitute an endorsement by Elegant Galaxy. We have no control over the content
        or privacy practices of third-party sites and accept no responsibility for them.
      </p>

      {/* 6 */}
      <h2 style={h2}>6. Disclaimer of warranties</h2>
      <p style={p}>
        The Website and its content are provided on an "as is" and "as available" basis without
        warranties of any kind, either express or implied, including but not limited to implied
        warranties of merchantability, fitness for a particular purpose, or non-infringement.
      </p>
      <p style={p}>
        We do not warrant that the Website will be uninterrupted, error-free, or free of
        viruses or other harmful components. We reserve the right to withdraw or amend services
        without notice.
      </p>

      {/* 7 */}
      <h2 style={h2}>7. Limitation of liability</h2>
      <p style={p}>
        To the fullest extent permitted by applicable law, Elegant Galaxy Pvt Ltd, its
        directors, employees, and agents shall not be liable for any indirect, incidental,
        special, consequential, or punitive damages arising from your use of - or inability
        to use - the Website or its content, even if we have been advised of the possibility
        of such damages.
      </p>
      <p style={p}>
        Our total liability for any claim arising from your use of the Website shall not exceed
        ₹1,000 (Indian Rupees One Thousand).
      </p>

      {/* 8 */}
      <h2 style={h2}>8. Indemnification</h2>
      <p style={p}>
        You agree to indemnify and hold harmless Elegant Galaxy Pvt Ltd and its officers,
        directors, employees, and agents from any claims, damages, or expenses (including
        reasonable legal fees) arising from your use of the Website in violation of these Terms
        or applicable law.
      </p>

      {/* 9 */}
      <h2 style={h2}>9. Changes to these terms</h2>
      <p style={p}>
        We may revise these Terms of Use at any time by posting an updated version on this page
        with a revised "Last updated" date. Your continued use of the Website after any changes
        constitutes acceptance of the new terms. We encourage you to review this page periodically.
      </p>

      {/* 10 */}
      <h2 style={h2}>10. Governing law and dispute resolution</h2>
      <p style={p}>
        These Terms of Use are governed by and construed in accordance with the laws of the
        Republic of India, without regard to conflict-of-law principles. Any dispute arising
        from or relating to these Terms shall first be attempted to be resolved through good-faith
        negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive
        jurisdiction of the courts in Ghaziabad, Uttar Pradesh, India.
      </p>

      {/* 11 */}
      <h2 style={h2}>11. Contact us</h2>
      <p style={p}>
        Questions about these Terms of Use may be directed to:
      </p>
      <div style={{
        background: "#f5f5f7", borderRadius: 12, padding: "20px 24px",
        fontSize: 14, lineHeight: 1.8, color: "#3a3a3c",
      }}>
        <strong style={{ color: "#1d1d1f" }}>Elegant Galaxy Pvt Ltd</strong><br />
        Garhi Guldhar, Pillar No. 639, M-112, Meerut Rd, opposite Crown Honda Delhi,<br />
        Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003<br />
        <a href="mailto:support@elegantgalaxy.in" style={{ color: "#0071e3", textDecoration: "none" }}>
          support@elegantgalaxy.in
        </a>
      </div>

    </article>
  );
}

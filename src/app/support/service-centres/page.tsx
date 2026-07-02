import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:       "Service Centres",
  description: "Find your nearest Elegant Galaxy service centre. 200+ locations across India for repairs, warranty claims, and support.",
};

const REGIONS = [
  { region: "North",  cities: "Delhi NCR, Chandigarh, Jaipur, Lucknow, Dehradun" },
  { region: "West",   cities: "Mumbai, Pune, Ahmedabad, Surat, Nagpur" },
  { region: "South",  cities: "Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore" },
  { region: "East",   cities: "Kolkata, Bhubaneswar, Patna, Guwahati, Ranchi" },
];

const PHONE_DISPLAY = "+91 95406 99333";
const PHONE         = "+919540699333";

export default function ServiceCentresPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>
            Service Centres
          </p>
          <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: 14 }}>
            Help is never far away.
          </h1>
          <p style={{ fontSize: 17, color: "#6e6e73", lineHeight: 1.65, maxWidth: 560 }}>
            200+ authorised service centres across India, ready to help with repairs, installation
            support, and warranty claims.
          </p>
        </div>
      </section>

      {/* Regions */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 24 }}>
          Coverage across India
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
          {REGIONS.map((r) => (
            <div key={r.region} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <MapPin size={16} color="#0071e3" strokeWidth={2} />
                <p style={{ fontSize: 15.5, fontWeight: 700, color: "#1d1d1f" }}>{r.region} India</p>
              </div>
              <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6 }}>{r.cities}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 56, textAlign: "center" }}>
          <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 20 }}>
            Tell us your city and product, and we&apos;ll connect you with your nearest centre.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`tel:${PHONE}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#1d1d1f", border: "1.5px solid rgba(0,0,0,0.15)", textDecoration: "none" }}
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff", background: "#0071e3", textDecoration: "none" }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

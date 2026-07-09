import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocation } from "@/data/locations";
import DistributorApplyForm from "@/components/DistributorApplyForm";

// ── Static params / metadata ─────────────────────────────────────────────────

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ state: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params;
  const location = getLocation(state);
  if (!location) return {};

  const title       = `Bulk LED TV & Home Appliance Distributor in ${location.state}`;
  const description = `Become an authorised Elegant Galaxy distributor in ${location.state}. Bulk LED TVs, washing machines, air coolers, and infrared cooktops with GST invoicing, delivered to ${location.cities.slice(0, 3).join(", ")} and across the state.`;

  return {
    title,
    description,
    alternates: { canonical: `/distributors/${location.slug}` },
    openGraph: { title, description, type: "website" },
  };
}

// ── Reused product category data ─────────────────────────────────────────────

const CATEGORIES = [
  { label: "LED TVs",            href: "/products/led-tvs" },
  { label: "Washing Machines",   href: "/products/washing-machines" },
  { label: "Air Coolers",        href: "/products/air-coolers" },
  { label: "Infrared Cooktops",  href: "/products/infrared-cooktops" },
];

const WHY_US = [
  { title: "1-Year Warranty",   desc: "Every product in a bulk order is backed by our standard manufacturer warranty." },
  { title: "ISI Certified",     desc: "All products meet Bureau of Indian Standards safety and quality benchmarks." },
  { title: "Factory Repairs",   desc: "Repairs are handled in-house by our own technicians, never outsourced." },
  { title: "GST Invoicing",     desc: "Every bulk order ships with a compliant GST invoice for your records." },
  { title: "Trusted Since 2012", desc: "Over 2 million homes across 500+ Indian cities trust Elegant Galaxy." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function DistributorStatePage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params;
  const location = getLocation(state);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type":    "Organization",
    name:        "Elegant Galaxy",
    url:         `https://elegantgalaxy.in/distributors/${location.slug}`,
    areaServed: {
      "@type": "State",
      name:    location.state,
    },
    makesOffer: CATEGORIES.map((c) => ({
      "@type":     "Offer",
      itemOffered: { "@type": "Product", name: c.label },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: location.faqs.map((f) => ({
      "@type": "Question",
      name:    f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: "https://elegantgalaxy.in" },
      { "@type": "ListItem", position: 2, name: "Distributors", item: "https://elegantgalaxy.in/distributors/apply" },
      { "@type": "ListItem", position: 3, name: location.state, item: `https://elegantgalaxy.in/distributors/${location.slug}` },
    ],
  };

  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#1d1d1f", paddingTop: 80, paddingBottom: 72 }}>
        <div className="mx-auto max-w-[1440px] px-8">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <ol style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(245,245,247,0.4)", listStyle: "none", padding: 0 }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/distributors/apply" style={{ color: "inherit", textDecoration: "none" }}>Distributors</Link></li>
              <li aria-hidden>/</li>
              <li style={{ color: "rgba(245,245,247,0.7)" }}>{location.state}</li>
            </ol>
          </nav>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "rgba(245,245,247,0.4)", marginBottom: 20,
          }}>
            Distribution Network · {location.state}
          </p>
          <h1
            className="text-[32px] sm:text-[44px] lg:text-[54px]"
            style={{ fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.08, color: "#f5f5f7", maxWidth: 760, marginBottom: 22 }}
          >
            Bulk LED TVs &amp; Home Appliances,{" "}
            <span style={{ color: "rgba(245,245,247,0.35)" }}>supplied across {location.state}.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(245,245,247,0.55)", maxWidth: 640, marginBottom: 32 }}>
            {location.intro}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#apply"
              style={{
                display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px",
                borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff",
                background: "#0071e3", textDecoration: "none",
              }}
            >
              Apply as a Distributor
            </a>
            <a
              href="#faq"
              style={{
                display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px",
                borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#f5f5f7",
                background: "rgba(255,255,255,0.1)", textDecoration: "none",
              }}
            >
              Read FAQs
            </a>
          </div>
        </div>
      </section>

      {/* ── Cities served ─────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 28, paddingBottom: 28 }}>
          <p style={{ fontSize: 13, color: "#6e6e73" }}>
            <strong style={{ color: "#1d1d1f", fontWeight: 600 }}>Regularly shipping to:</strong>{" "}
            {location.cities.join(", ")}, and surrounding areas.
          </p>
        </div>
      </section>

      {/* ── Product categories ───────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 72, paddingBottom: 56 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.025em", color: "#1d1d1f", marginBottom: 32 }}>
            Product range available for bulk order.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                style={{
                  display: "block", background: "#fff", borderRadius: 16, padding: "24px 22px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textDecoration: "none",
                }}
              >
                <p style={{ fontSize: 17, fontWeight: 600, color: "#1d1d1f", marginBottom: 4 }}>{c.label}</p>
                <p style={{ fontSize: 13.5, color: "#0071e3", fontWeight: 500 }}>View specs →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 16, paddingBottom: 72 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.025em", color: "#1d1d1f", marginBottom: 32 }}>
            Why distributors in {location.state} work with us.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ gap: 20 }}>
            {WHY_US.map((w) => (
              <div key={w.title}>
                <p style={{ fontSize: 15.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>{w.title}</p>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#6e6e73" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Logistics ────────────────────────────────────────────────────── */}
      <section style={{ background: "#f5f5f7" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.025em", color: "#1d1d1f", marginBottom: 32 }}>
            How delivery works in {location.state}.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 24 }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 8 }}>Dispatch</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#1d1d1f" }}>{location.logistics.dispatchHub}</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 8 }}>Lead time</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#1d1d1f" }}>{location.logistics.leadTime}</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 8 }}>Demand note</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#1d1d1f" }}>{location.logistics.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.025em", color: "#1d1d1f", marginBottom: 32 }}>
            Frequently asked questions - {location.state}.
          </h2>
          <div style={{ maxWidth: 760, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            {location.faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "18px 0" }}>
                <summary style={{ fontSize: 15.5, fontWeight: 500, color: "#1d1d1f", cursor: "pointer" }}>
                  {f.q}
                </summary>
                <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#6e6e73", marginTop: 12, maxWidth: 640 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply form ───────────────────────────────────────────────────── */}
      <section id="apply" style={{ background: "#f5f5f7" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 72, paddingBottom: 88 }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.025em", color: "#1d1d1f", marginBottom: 8, textAlign: "center" }}>
              Apply to distribute in {location.state}.
            </h2>
            <p style={{ fontSize: 15, color: "#6e6e73", textAlign: "center", marginBottom: 40 }}>
              Our distribution team responds within 3-5 business days.
            </p>
            <DistributorApplyForm defaultState={location.state} />
          </div>
        </div>
      </section>

    </main>
  );
}

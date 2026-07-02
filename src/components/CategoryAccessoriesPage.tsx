import Link from "next/link";

interface AccessoryItem {
  name: string;
  desc: string;
}

export default function CategoryAccessoriesPage({
  category,
  shopHref,
  items,
}: {
  category: string;
  shopHref: string;
  items:    AccessoryItem[];
}) {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 12 }}>
            {category} Accessories
          </p>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.1, marginBottom: 14 }}>
            Spares and accessories for your {category.toLowerCase()}.
          </h1>
          <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.65, maxWidth: 560 }}>
            We don&apos;t maintain a separate accessories catalogue — items below are handled case-by-case
            through our support team so you get the right part for your exact model.
          </p>
        </div>
      </section>

      {/* Items */}
      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
          {items.map((item) => (
            <div key={item.name} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 15.5, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{item.name}</p>
              <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56, textAlign: "center" }}>
          <p style={{ fontSize: 15, color: "#6e6e73", marginBottom: 20 }}>
            Tell us your model number and what you need — we&apos;ll sort you out.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href={shopHref}
              style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#1d1d1f", border: "1.5px solid rgba(0,0,0,0.15)", textDecoration: "none" }}
            >
              Browse {category}
            </Link>
            <Link
              href={`/contact?product=${encodeURIComponent(category.toLowerCase())}-accessory`}
              style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff", background: "#0071e3", textDecoration: "none" }}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

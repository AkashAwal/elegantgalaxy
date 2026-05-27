import Link from "next/link";

export default function DistributorSection() {
  return (
    <section style={{ background: "#fff", width: "100%" }}>
      <div
        className="mx-auto max-w-[1440px] px-8"
        style={{ paddingTop: 88, paddingBottom: 88 }}
      >
        <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>

          {/* Eyebrow */}
          <p style={{
            fontSize:      11,
            fontWeight:    600,
            letterSpacing: "0.1em",
            color:         "#aeaeb2",
            marginBottom:  18,
            textTransform: "uppercase",
          }}>
            Distribution Network
          </p>

          {/* Heading */}
          <h2 style={{
            fontSize:      46,
            fontWeight:    700,
            letterSpacing: "-0.03em",
            lineHeight:    1.08,
            color:         "#1d1d1f",
            marginBottom:  18,
          }}>
            Grow with<br />Elegant Galaxy.
          </h2>

          {/* Body */}
          <p style={{
            fontSize:     16,
            lineHeight:   1.75,
            color:        "#6e6e73",
            marginBottom: 40,
          }}>
            We're looking for passionate partners to bring our products to every corner
            of India. Join our growing network of 500+ distributors and build a thriving
            business with a brand that customers already trust.
          </p>

          {/* The same two buttons from the header */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/distributors"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                height:         44,
                padding:        "0 26px",
                borderRadius:   980,
                fontSize:       15,
                fontWeight:     500,
                color:          "#0071e3",
                border:         "1.5px solid #0071e3",
                textDecoration: "none",
              }}
            >
              Find a Distributor
            </Link>
            <Link
              href="/contact?type=distributor"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                height:         44,
                padding:        "0 26px",
                borderRadius:   980,
                fontSize:       15,
                fontWeight:     600,
                color:          "#fff",
                background:     "#0071e3",
                textDecoration: "none",
              }}
            >
              Become a Distributor
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

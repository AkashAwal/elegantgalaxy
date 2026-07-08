import Image from "next/image";
import Link from "next/link";
import EnquireButton from "@/components/EnquireButton";

// ── Remote photos ─────────────────────────────────────────────────────────────

const FEATURED_REMOTES = [
  "/remote images/remote_1.webp",
  "/remote images/remote_6.webp",
  "/remote images/remote_8.webp",
];

function RemotePhotos() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: -10 }}>
      {FEATURED_REMOTES.map((src, i) => (
        <div
          key={src}
          style={{
            marginLeft: i === 0 ? 0 : -22,
            transform:  `rotate(${(i - 1) * 8}deg)`,
            zIndex:     FEATURED_REMOTES.length - Math.abs(i - 1),
          }}
        >
          {/* mix-blend-mode multiplies the photo's opaque white background into
              the dark panel behind it, so the white edges read as transparent. */}
          <Image
            src={src}
            alt="Elegant Galaxy TV remote"
            width={62}
            height={150}
            style={{ height: 150, width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
          />
        </div>
      ))}
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function RemotesSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 pb-14">
      <div
        className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
        style={{
          background:   "#1d1d1f",
          borderRadius: 20,
          padding:      "40px 44px",
        }}
      >
        {/* Photos */}
        <div style={{ flexShrink: 0 }}>
          <RemotePhotos />
        </div>

        {/* Copy */}
        <div className="text-center sm:text-left" style={{ flex: 1 }}>
          <p style={{
            fontSize:      11,
            fontWeight:    600,
            letterSpacing: "0.1em",
            color:         "rgba(245,245,247,0.45)",
            marginBottom:  10,
            textTransform: "uppercase",
          }}>
            TV Remotes
          </p>
          <h2 style={{
            fontSize:      26,
            fontWeight:    700,
            letterSpacing: "-0.02em",
            color:         "#f5f5f7",
            marginBottom:  10,
          }}>
            Precision-crafted remotes.
          </h2>
          <p style={{
            fontSize:   15,
            lineHeight: 1.6,
            color:      "rgba(245,245,247,0.55)",
            maxWidth:   480,
          }}>
            Every Elegant Galaxy TV pairs with a remote built to match - sleek, responsive,
            and made to last. Reach out with your model number to get yours.
          </p>
        </div>

        {/* CTA */}
        <div style={{ flexShrink: 0, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/products/led-tvs/remotes"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              height:         44,
              padding:        "0 26px",
              borderRadius:   980,
              fontSize:       15,
              fontWeight:     600,
              color:          "#f5f5f7",
              border:         "1.5px solid rgba(245,245,247,0.3)",
              textDecoration: "none",
              whiteSpace:     "nowrap",
            }}
          >
            View Remotes
          </Link>
          <EnquireButton
            product="TV Remote"
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
              border:         "none",
              whiteSpace:     "nowrap",
            }}
          >
            Enquire Now
          </EnquireButton>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Star } from "lucide-react";

// ── Testimonial data ────────────────────────────────────────────────────────────

type Testimonial = {
  quote:    string;
  name:     string;
  location: string;
  product:  string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:    "The 55\" QLED completely changed our living room. Picture quality is stunning and the smart features actually work smoothly, unlike our old TV.",
    name:     "Priya Sharma",
    location: "Pune, Maharashtra",
    product:  "Elegant 55\" 4K QLED TV",
  },
  {
    quote:    "Free installation was a lifesaver — the technician arrived on time and even walked us through the app setup. Great after-sales support.",
    name:     "Rohan Mehta",
    location: "Ahmedabad, Gujarat",
    product:  "Elegant 8kg Top Load Washer",
  },
  {
    quote:    "Bought the desert cooler for our shop and it handles the summer heat effortlessly. Runs quiet enough that customers don't even notice it.",
    name:     "Anitha Reddy",
    location: "Hyderabad, Telangana",
    product:  "Elegant 80L Desert Cooler",
  },
];

// ── Card ─────────────────────────────────────────────────────────────────────────

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      style={{
        background:   "#fff",
        borderRadius: 18,
        padding:      "28px 26px",
        boxShadow:    "0 2px 10px rgba(0,0,0,0.07)",
        display:      "flex",
        flexDirection:"column",
        height:       "100%",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} fill="#F5A623" color="#F5A623" />
        ))}
      </div>

      {/* Quote */}
      <p style={{
        fontSize:     15,
        lineHeight:   1.6,
        color:        "#1d1d1f",
        marginBottom: 22,
        flex:         1,
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Attribution */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 2 }}>
          {t.name}
        </p>
        <p style={{ fontSize: 12.5, color: "#6e6e73", marginBottom: 6 }}>
          {t.location}
        </p>
        <p style={{ fontSize: 12, color: "#0071e3", fontWeight: 500 }}>
          {t.product}
        </p>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-14">

      <div className="mb-8">
        <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span className="text-[#1d1d1f]">What our customers say.&nbsp;</span>
          <span className="text-[#6e6e73]">Real homes, real reviews.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

    </section>
  );
}

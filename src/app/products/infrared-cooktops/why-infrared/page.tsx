import Link from "next/link";
import type { Metadata } from "next";
import { Flame } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/products/infrared-cooktops/why-infrared" },
  title:       "Why Infrared?",
  description: "Why infrared cooktops heat faster and safer than gas or standard electric coils.",
};

const POINTS = [
  { title: "Faster heat-up",       desc: "Infrared elements reach cooking temperature in seconds, closer to gas than a traditional coil hotplate." },
  { title: "Works with any cookware", desc: "Unlike induction, infrared heats the surface directly — so steel, aluminium, glass, and ceramic cookware all work." },
  { title: "No open flame",        desc: "No gas connection or cylinder needed, and no risk of a flame being blown out or left unlit." },
  { title: "Easy to clean",        desc: "A flat ceramic glass surface wipes clean in seconds — no burner grates or drip trays to scrub." },
  { title: "Precise control",      desc: "Touch or knob controls give finer heat adjustment than most gas burners." },
  { title: "Lower kitchen heat",   desc: "Less ambient heat is thrown off compared to an open gas flame, which matters most in smaller kitchens." },
];

export default function WhyInfraredPage() {
  return (
    <main id="main-content" style={{ background: "#f5f5f7", minHeight: "100vh" }}>

      <section style={{ background: "#18181b" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Flame size={20} color="#ff6b35" strokeWidth={2} fill="#ff6b35" />
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,247,0.45)" }}>
              Why Infrared?
            </p>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "#f5f5f7", lineHeight: 1.1, marginBottom: 14, maxWidth: 620 }}>
            Gas-like speed, none of the flame.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.55)", lineHeight: 1.65, maxWidth: 560 }}>
            Infrared cooktops heat cookware directly using radiant heat — no gas connection,
            no open flame, and no special induction-compatible pots required.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 48, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
          {POINTS.map((p) => (
            <div key={p.title} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 15.5, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{p.title}</p>
              <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 40, paddingBottom: 56, textAlign: "center" }}>
          <Link
            href="/products/infrared-cooktops"
            style={{ display: "inline-flex", alignItems: "center", height: 46, padding: "0 28px", borderRadius: 980, fontSize: 15, fontWeight: 600, color: "#fff", background: "#0071e3", textDecoration: "none" }}
          >
            Browse Infrared Cooktops
          </Link>
        </div>
      </section>

    </main>
  );
}

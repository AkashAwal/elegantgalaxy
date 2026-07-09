import type { Metadata } from "next";
import AirCoolersLanding from "./AirCoolersLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/products/air-coolers" },
  title: "Air Coolers",
  description:
    "Explore Elegant Galaxy commercial and domestic air coolers - 100L to 160L commercial models and 90L–110L domestic coolers with honeycomb cooling pads and high air delivery.",
  openGraph: {
    title:       "Air Coolers",
    description: "Commercial and domestic air coolers for Indian summers. High air delivery, 7090 honeycomb pads, and durable PPCP bodies.",
    type:        "website",
  },
};

export default function AirCoolersPage() {
  return <AirCoolersLanding />;
}

import type { Metadata } from "next";
import InfraredCooktopsClient from "./InfraredCooktopsClient";

export const metadata: Metadata = {
  alternates: { canonical: "/products/infrared-cooktops" },
  title: "Infrared Cooktops",
  description:
    "Explore the Elegant Galaxy infrared cooktop - a single burner ceramic glass cooktop that heats faster and safer than gas.",
  openGraph: {
    title:       "Infrared Cooktops",
    description: "Single burner infrared cooktop with a ceramic glass surface.",
    type:        "website",
  },
};

export default function InfraredCooktopsPage() {
  return <InfraredCooktopsClient />;
}

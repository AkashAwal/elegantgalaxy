import type { Metadata } from "next";
import InfraredCooktopsClient from "../InfraredCooktopsClient";

export const metadata: Metadata = {
  title:       "Compare Infrared Cooktops",
  description: "Select up to 3 Elegant Galaxy infrared cooktops to compare side by side.",
};

export default function InfraredCooktopsComparePage() {
  return <InfraredCooktopsClient />;
}

import type { Metadata } from "next";
import CategoryAccessoriesPage from "@/components/CategoryAccessoriesPage";

export const metadata: Metadata = {
  title:       "Air Cooler Accessories",
  description: "Honeycomb cooling pads, covers, and other accessories for Elegant Galaxy air coolers.",
};

const ITEMS = [
  { name: "Honeycomb Cooling Pads", desc: "Replacement 7090 honeycomb pads to keep your cooler running at full efficiency." },
  { name: "Dust Covers",            desc: "Protect your cooler during the off-season with a fitted dust cover." },
  { name: "Castor Wheels",          desc: "Replacement wheels for commercial coolers that see frequent moving." },
];

export default function AirCoolersAccessoriesPage() {
  return <CategoryAccessoriesPage category="Air Coolers" shopHref="/products/air-coolers" items={ITEMS} />;
}

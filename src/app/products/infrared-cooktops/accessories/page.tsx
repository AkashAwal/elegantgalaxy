import type { Metadata } from "next";
import CategoryAccessoriesPage from "@/components/CategoryAccessoriesPage";

export const metadata: Metadata = {
  title:       "Infrared Cooktop Accessories",
  description: "Compatible cookware and other accessories for Elegant Galaxy infrared cooktops.",
};

const ITEMS = [
  { name: "Compatible Cookware", desc: "Flat-bottomed steel, cast iron, or glass cookware recommendations for even heating." },
  { name: "Glass Surface Cleaner", desc: "Non-abrasive cleaner and scraper kits to keep your ceramic glass surface spotless." },
  { name: "Power Cords",         desc: "Replacement power cords for older cooktop models." },
];

export default function InfraredCooktopsAccessoriesPage() {
  return <CategoryAccessoriesPage category="Infrared Cooktops" shopHref="/products/infrared-cooktops" items={ITEMS} />;
}

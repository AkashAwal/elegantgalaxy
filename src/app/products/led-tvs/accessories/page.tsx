import type { Metadata } from "next";
import CategoryAccessoriesPage from "@/components/CategoryAccessoriesPage";

export const metadata: Metadata = {
  title:       "LED TV Accessories",
  description: "Replacement remotes, wall mounts, and other accessories for Elegant Galaxy LED TVs.",
};

const ITEMS = [
  { name: "Replacement Remotes", desc: "Lost or broken remote? We stock replacement remotes for every Elegant Galaxy TV model." },
  { name: "Wall Mounts",         desc: "Ask our team for a compatible wall mount recommendation for your TV size." },
  { name: "HDMI & AV Cables",    desc: "Need a cable to connect a set-top box, soundbar, or console? We can help source one." },
];

export default function LedTvsAccessoriesPage() {
  return <CategoryAccessoriesPage category="LED TVs" shopHref="/products/led-tvs" items={ITEMS} />;
}

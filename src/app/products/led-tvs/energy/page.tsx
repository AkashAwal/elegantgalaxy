import type { Metadata } from "next";
import CategoryEnergyPage from "@/components/CategoryEnergyPage";

export const metadata: Metadata = {
  title:       "LED TV Energy Ratings",
  description: "Standby power, eco mode, and energy-conscious design across Elegant Galaxy LED TVs.",
};

const ROWS = [
  { model: "32\" HD Ready Smart TV", value: "~45W typical" },
  { model: "43\" Full HD Smart TV",  value: "~65W typical" },
  { model: "55\" 4K QLED TV",        value: "~90W typical" },
  { model: "65\" 4K QLED TV",        value: "~110W typical" },
];

export default function LedTvsEnergyPage() {
  return (
    <CategoryEnergyPage
      category="LED TVs"
      shopHref="/products/led-tvs"
      intro="TVs aren't covered under India's BEE star labelling programme, so instead of a star rating, here's what actually drives your electricity bill — typical power draw and standby consumption for each screen size."
      ratingLabel="Typical power draw by size"
      rows={ROWS}
      note="Figures are typical values at standard brightness with Eco Mode enabled; actual consumption varies with picture settings and usage. All models draw under 0.5W in standby."
    />
  );
}

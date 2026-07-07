import type { Metadata } from "next";
import CategoryEnergyPage from "@/components/CategoryEnergyPage";

export const metadata: Metadata = {
  alternates: { canonical: "/products/air-coolers/energy" },
  title:       "Air Cooler Energy Ratings",
  description: "Motor wattage and running costs across Elegant Galaxy commercial and desert air coolers.",
};

const ROWS = [
  { model: "Desert Coolers (90–110L)",      value: "93W Motor" },
  { model: "Commercial Coolers (100–160L)", value: "120W Motor" },
];

export default function AirCoolersEnergyPage() {
  return (
    <CategoryEnergyPage
      category="Air Coolers"
      shopHref="/products/air-coolers"
      intro="Air coolers aren't covered under India's BEE star labelling programme, since they use evaporative cooling rather than a compressor. Here's the motor wattage that determines your running cost — typically a fraction of what an air conditioner draws."
      ratingLabel="Motor wattage by type"
      rows={ROWS}
      note="A cooler running 8 hours a day on a 120W motor uses roughly 1 unit of electricity — far less than compressor-based cooling for a comparable room size."
    />
  );
}

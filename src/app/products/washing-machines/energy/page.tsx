import type { Metadata } from "next";
import CategoryEnergyPage from "@/components/CategoryEnergyPage";

export const metadata: Metadata = {
  title:       "Washing Machine Energy Ratings",
  description: "BEE star ratings across Elegant Galaxy front load, top load, and semi-automatic washing machines.",
};

const ROWS = [
  { model: "6kg Front Load Washer",  value: "5 Star" },
  { model: "7kg Front Load Washer",  value: "5 Star" },
  { model: "8kg Front Load Washer",  value: "5 Star" },
  { model: "7kg Top Load Washer",    value: "4 Star" },
  { model: "8kg Top Load Washer",    value: "4 Star" },
  { model: "10kg Top Load Washer",   value: "5 Star" },
];

export default function WashingMachinesEnergyPage() {
  return (
    <CategoryEnergyPage
      category="Washing Machines"
      shopHref="/products/washing-machines"
      intro="Our front load and top load washers carry BEE star ratings under India's energy labelling programme — higher stars mean lower electricity use per wash cycle. Semi-automatic models aren't covered under this scheme, as they don't have a built-in heating element or motorised spin-drain cycle rated by BEE."
      ratingLabel="BEE star rating by model"
      rows={ROWS}
      note="BLDC inverter motors (used in our 5-star models) adjust power draw to load size, which is the main driver of the higher rating over standard induction motors."
    />
  );
}

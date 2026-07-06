import type { Metadata } from "next";
import CategoryEnergyPage from "@/components/CategoryEnergyPage";

export const metadata: Metadata = {
  title:       "Washing Machine Energy Ratings",
  description: "Energy information for Elegant Galaxy semi-automatic washing machines.",
};

export default function WashingMachinesEnergyPage() {
  return (
    <CategoryEnergyPage
      category="Washing Machines"
      shopHref="/products/washing-machines"
      intro="Our washing machines are semi-automatic models, which aren't covered under India's BEE star labelling programme — that scheme applies to machines with a built-in heating element or a motorised spin-drain cycle, neither of which semi-automatic twin-tub washers have."
      ratingLabel="BEE star rating by model"
      rows={[]}
      note="Instead, our semi-automatic washers are built around low-wattage 135W–200W motors sized to each capacity, keeping running costs down without needing a formal BEE rating."
    />
  );
}

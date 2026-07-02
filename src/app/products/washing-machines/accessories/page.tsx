import type { Metadata } from "next";
import CategoryAccessoriesPage from "@/components/CategoryAccessoriesPage";

export const metadata: Metadata = {
  title:       "Washing Machine Accessories",
  description: "Inlet hoses, stands, and other accessories for Elegant Galaxy washing machines.",
};

const ITEMS = [
  { name: "Inlet & Drain Hoses", desc: "Replacement hoses for front load and top load washers, matched to your model." },
  { name: "Machine Stands",      desc: "Raise your washer to a comfortable loading height with a compatible stand." },
  { name: "Anti-Vibration Pads", desc: "Reduce noise and movement during spin cycles, especially on upper floors." },
];

export default function WashingMachinesAccessoriesPage() {
  return <CategoryAccessoriesPage category="Washing Machines" shopHref="/products/washing-machines" items={ITEMS} />;
}

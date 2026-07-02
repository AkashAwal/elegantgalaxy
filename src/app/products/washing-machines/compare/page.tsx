import type { Metadata } from "next";
import WashingMachinesClient from "../WashingMachinesClient";

export const metadata: Metadata = {
  title:       "Compare Washing Machines",
  description: "Select up to 3 Elegant Galaxy washing machines to compare side by side.",
};

export default function WashingMachinesComparePage() {
  return <WashingMachinesClient />;
}

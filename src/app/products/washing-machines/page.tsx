import type { Metadata } from "next";
import WashingMachinesClient from "./WashingMachinesClient";

export const metadata: Metadata = {
  alternates: { canonical: "/products/washing-machines" },
  title: "Washing Machines",
  description:
    "Explore Elegant Galaxy semi-automatic washing machines - 7kg to 12kg models with heavy wash pulsators and diamond steel drums.",
  openGraph: {
    title:       "Washing Machines",
    description: "Semi-automatic washers built for Indian homes, from 7kg to 12kg.",
    type:        "website",
  },
};

export default function WashingMachinesPage() {
  return <WashingMachinesClient />;
}

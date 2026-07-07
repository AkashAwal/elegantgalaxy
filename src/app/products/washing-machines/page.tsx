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

export default async function WashingMachinesPage({
  searchParams,
}: {
  searchParams: Promise<{ cap?: string }>;
}) {
  const { cap } = await searchParams;
  const parsedCap  = cap ? parseInt(cap, 10) : null;
  const initialCap = parsedCap && !Number.isNaN(parsedCap) ? parsedCap : null;

  return <WashingMachinesClient initialCap={initialCap} />;
}

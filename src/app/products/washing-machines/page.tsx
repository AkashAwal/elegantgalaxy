import type { Metadata } from "next";
import WashingMachinesClient from "./WashingMachinesClient";

export const metadata: Metadata = {
  title: "Washing Machines",
  description:
    "Explore Elegant Galaxy washing machines — front load, top load, and semi-automatic models from 6kg to 10kg with energy-efficient BLDC motors.",
  openGraph: {
    title:       "Washing Machines — Elegant Galaxy",
    description: "Front load, top load, and semi-automatic washers built for Indian homes.",
    type:        "website",
  },
};

export default async function WashingMachinesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; cap?: string }>;
}) {
  const { type, cap } = await searchParams;
  const parsedCap     = cap ? parseInt(cap, 10) : null;
  const initialCap    = parsedCap && !Number.isNaN(parsedCap) ? parsedCap : null;

  return <WashingMachinesClient initialType={type ?? null} initialCap={initialCap} />;
}

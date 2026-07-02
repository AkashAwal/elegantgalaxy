import type { Metadata } from "next";
import InfraredCooktopsClient from "./InfraredCooktopsClient";

export const metadata: Metadata = {
  title: "Infrared Cooktops",
  description:
    "Explore Elegant Galaxy infrared cooktops — single to 4-burner ceramic glass cooktops that heat faster and safer than gas.",
  openGraph: {
    title:       "Infrared Cooktops — Elegant Galaxy",
    description: "Single to 4-burner infrared cooktops with ceramic glass surfaces.",
    type:        "website",
  },
};

const BURNER_QUERY_MAP: Record<string, number> = {
  "single-burner": 1,
  "double-burner": 2,
};

export default async function InfraredCooktopsPage({
  searchParams,
}: {
  searchParams: Promise<{ burners?: string }>;
}) {
  const { burners } = await searchParams;
  const parsed = burners ? (BURNER_QUERY_MAP[burners] ?? parseInt(burners, 10)) : null;
  const initialBurners = parsed && !Number.isNaN(parsed) ? parsed : null;

  return <InfraredCooktopsClient initialBurners={initialBurners} />;
}

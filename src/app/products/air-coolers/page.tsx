import type { Metadata } from "next";
import AirCoolersClient from "./AirCoolersClient";

export const metadata: Metadata = {
  title: "Air Coolers",
  description:
    "Explore Elegant Galaxy commercial and desert air coolers — 100L to 160L commercial models and 90L–110L desert coolers with honeycomb cooling pads and high air delivery.",
  openGraph: {
    title:       "Air Coolers — Elegant Galaxy",
    description: "Commercial and desert air coolers for Indian summers. High air delivery, 7090 honeycomb pads, and durable PPCP bodies.",
    type:        "website",
  },
};

export default async function AirCoolersPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; cap?: string }>;
}) {
  const { type, cap } = await searchParams;
  const parsedCap     = cap ? parseInt(cap, 10) : null;
  const initialCap    = parsedCap && !Number.isNaN(parsedCap) ? parsedCap : null;

  return <AirCoolersClient initialType={type ?? null} initialCap={initialCap} />;
}

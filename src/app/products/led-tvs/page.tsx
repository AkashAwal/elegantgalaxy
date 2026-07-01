import type { Metadata } from "next";
import LedTvsClient from "./LedTvsClient";

export const metadata: Metadata = {
  title: "LED TVs",
  description:
    "Explore Elegant Galaxy LED TVs available in 24 to 100 inch sizes. Choose from Android TV, webOS, and Google TV models — find the right TV for your home.",
  openGraph: {
    title:       "LED TVs — Elegant Galaxy",
    description: "Premium LED TVs from 24\" to 100\". Android TV, webOS, and Google TV models built for Indian homes.",
    type:        "website",
  },
};

export default async function LedTvsPage({
  searchParams,
}: {
  searchParams: Promise<{ size?: string; model?: string }>;
}) {
  const { size, model } = await searchParams;
  const parsed      = size ? parseInt(size, 10) : null;
  const initialSize = parsed && !Number.isNaN(parsed) ? parsed : null;
  const initialModelId = model ?? null;

  return <LedTvsClient key={initialModelId ?? "all"} initialSize={initialSize} initialModelId={initialModelId} />;
}

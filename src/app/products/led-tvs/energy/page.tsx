import type { Metadata } from "next";
import CategoryEnergyPage from "@/components/CategoryEnergyPage";
import { MODELS } from "@/data/led-tvs";

export const metadata: Metadata = {
  alternates: { canonical: "/products/led-tvs/energy" },
  title:       "LED TV Energy Ratings",
  description: "Standby power, eco mode, and energy-conscious design across Elegant Galaxy LED TVs.",
};

// Typical watts for a given screen size + resolution — used to build a
// size-range wattage estimate for each real model in MODELS.
function wattsFor(size: number, resolution: string): number {
  const is4K = resolution.includes("4K");
  if (is4K) {
    if (size <= 43) return 68;
    if (size <= 50) return 78;
    if (size <= 55) return 90;
    if (size <= 58) return 95;
    if (size <= 65) return 110;
    if (size <= 75) return 140;
    if (size <= 85) return 170;
    return 210;
  }
  if (size <= 24) return 30;
  if (size <= 32) return 45;
  if (size <= 40) return 55;
  if (size <= 42) return 58;
  return 62;
}

const ROWS = MODELS.map((m) => {
  if (m.id === "smart-board") {
    // Interactive Smart Board — embedded Android PC, touch overlay, and
    // built-in speakers draw meaningfully more than a passive TV panel.
    const boardWatts: Record<number, number> = { 65: 180, 75: 220, 86: 260, 98: 320 };
    const min = Math.min(...m.sizes.map((s) => boardWatts[s]));
    const max = Math.max(...m.sizes.map((s) => boardWatts[s]));
    return { model: `${m.platform} (${Math.min(...m.sizes)}"–${Math.max(...m.sizes)}")`, value: `~${min}–${max}W typical` };
  }
  const watts = m.sizes.map((s) => wattsFor(s, m.resolution[s] ?? "Full HD"));
  const min   = Math.min(...watts);
  const max   = Math.max(...watts);
  const sizeLabel = m.sizes.length > 1
    ? `${Math.min(...m.sizes)}"–${Math.max(...m.sizes)}"`
    : `${m.sizes[0]}"`;
  return {
    model: `${m.platform} (${sizeLabel})`,
    value: min === max ? `~${min}W typical` : `~${min}–${max}W typical`,
  };
});

export default function LedTvsEnergyPage() {
  return (
    <CategoryEnergyPage
      category="LED TVs"
      shopHref="/products/led-tvs"
      intro="TVs aren't covered under India's BEE star labelling programme, so instead of a star rating, here's what actually drives your electricity bill - typical power draw across every platform we sell, from Android TV to the Interactive Smart Board."
      ratingLabel="Typical power draw by model"
      rows={ROWS}
      note="Figures are typical values at standard brightness with Eco Mode enabled, scaled across the sizes each model is available in; actual consumption varies with picture settings and usage. Standard LED TVs draw under 0.5W in standby. The Interactive Smart Board runs an embedded Android PC, touch overlay, and built-in speakers, so its idle/ready-mode draw is higher than a standard TV's standby - typically 2–4W depending on size."
    />
  );
}

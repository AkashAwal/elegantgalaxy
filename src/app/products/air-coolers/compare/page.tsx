import type { Metadata } from "next";
import AirCoolersClient from "../AirCoolersClient";

export const metadata: Metadata = {
  title:       "Compare Air Coolers",
  description: "Select up to 3 Elegant Galaxy air coolers to compare side by side.",
};

export default function AirCoolersComparePage() {
  return <AirCoolersClient />;
}

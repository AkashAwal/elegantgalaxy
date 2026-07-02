import type { Metadata } from "next";
import LedTvsClient from "../LedTvsClient";

export const metadata: Metadata = {
  title:       "Compare LED TVs",
  description: "Select up to 3 Elegant Galaxy LED TVs to compare side by side.",
};

export default function LedTvsComparePage() {
  return <LedTvsClient />;
}

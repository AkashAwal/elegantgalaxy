import HeroSlider from "@/components/HeroSlider";
import type { ShowcaseView } from "@/components/ProductShowcase";

const VIEWS: [ShowcaseView, ShowcaseView, ShowcaseView] = [
  {
    src:   "/tv1-front.webp",
    title: "The Full Picture.",
    desc:  "A 55″ 4K QLED canvas that turns every frame into a cinematic experience.",
    tag:   "FRONT VIEW",
    bg:    "#08090e",
    glow:  "rgba(96, 165, 250, 0.11)",
  },
  {
    src:   "/tv1-left.webp",
    title: "Slim by Design.",
    desc:  "An ultra-slim 18 mm profile that disappears seamlessly into your space.",
    tag:   "SIDE PROFILE",
    bg:    "#070f1d",
    glow:  "rgba(129, 140, 248, 0.11)",
  },
  {
    src:   "/tv1-right.webp",
    title: "Every Detail Counts.",
    desc:  "Aerospace-grade aluminium finish, backed by a 1-year manufacturer warranty.",
    tag:   "DETAIL VIEW",
    bg:    "#090d10",
    glow:  "rgba(52, 211, 153, 0.10)",
  },
];

export default function TVShowcase() {
  return <HeroSlider views={VIEWS} />;
}

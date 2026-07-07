// ── Data ──────────────────────────────────────────────────────────────────────

export type FrontGrill = "spiral" | "louver";
export type CoolerType = "commercial" | "desert";

export interface CoolerModel {
  id: string;
  modelNumber: string;
  name: string;
  type: CoolerType;
  frontGrill: FrontGrill;
  honeycombSides: 1 | 3;
  capacity: number;
  bodyMaterial: string;
  motor: string;
  motorRotation: string;
  pumpWattage: number;
  fanSize: string;
  rpm: number;
  airDelivery: number;
  airThrow: number;
  honeycombSpec: string;
  cordLength: string;
  bladeMaterial: string;
  motorMount: string;
  dimensions: string;
  packDimensions: string;
  /** Real product photo under /public. When set, shown instead of the generic cooler illustration. */
  images?: { front: string };
}

const SPIRAL_IMAGE: { front: string } = { front: "/images/air-coolers/ice-cool-front.jpg" };
const LOUVER_IMAGE: { front: string } = { front: "/images/air-coolers/ice-storm-front.jpg" };
const DESERT_IMAGE: { front: string } = { front: "/images/air-coolers/desert-front.jpg" };

/** Representative photo for each cooler type's category tile. */
export const TYPE_IMAGES: Record<CoolerType, string> = {
  commercial: "/images/air-coolers/commercial-front.jpg",
  desert:     "/images/air-coolers/desert-front.jpg",
};

const COMMERCIAL_BASE = {
  type: "commercial" as CoolerType,
  bodyMaterial: "PPCP",
  motor: "120W Nirosha",
  motorRotation: "ACW (Load 300W)",
  rpm: 1350,
  honeycombSpec: "7090",
  cordLength: "2.5M",
  bladeMaterial: "Aluminium",
  motorMount: "CLAMP",
};

const DESERT_BASE = {
  type: "desert" as CoolerType,
  honeycombSides: 3 as const,
  bodyMaterial: "PPCP",
  motor: "93W Nirosha",
  motorRotation: "CW (Load 180W)",
  pumpWattage: 18,
  fanSize: '16"',
  rpm: 1350,
  airDelivery: 5000,
  honeycombSpec: "7090",
  cordLength: "2.5M",
  bladeMaterial: "Plastic ABS",
  motorMount: "PP CP",
  images: DESERT_IMAGE,
};

export const MODELS: CoolerModel[] = [
  // ── 100L Commercial ───────────────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-100-1",
    modelNumber: "SFGM32-H1-100L DG",
    name: "ICE COOL",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 1,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-plus-100",
    modelNumber: "SFGM32-H3-100L-DG",
    name: "ICE COOL+",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 3,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-100-1",
    modelNumber: "LFGM32-H1-100L-DG",
    name: "ICE STORM",
    frontGrill: "louver",
    images: LOUVER_IMAGE,
    honeycombSides: 1,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-plus-100",
    modelNumber: "LFGM32-H3-100L-DG",
    name: "ICE STORM+",
    frontGrill: "louver",
    images: LOUVER_IMAGE,
    honeycombSides: 3,
    capacity: 100,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1355 mm",
    packDimensions: "665 × 875 × 1295 mm",
  },
  // ── 130L Commercial ───────────────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-130-1",
    modelNumber: "SFGM35-H1-130L DG",
    name: "ICE COOL",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 1,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-plus-130",
    modelNumber: "SFGM35-H3-130L-DG",
    name: "ICE COOL+",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 3,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-130-1",
    modelNumber: "LFGM35-H1-130L-DG",
    name: "ICE STORM",
    frontGrill: "louver",
    images: LOUVER_IMAGE,
    honeycombSides: 1,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-plus-130",
    modelNumber: "LFGM35-H3-130L-DG",
    name: "ICE STORM+",
    frontGrill: "louver",
    images: LOUVER_IMAGE,
    honeycombSides: 3,
    capacity: 130,
    pumpWattage: 20,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1395 mm",
    packDimensions: "665 × 875 × 1355 mm",
  },
  // ── 160L Commercial ───────────────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-160-1",
    modelNumber: "SFGM35-H1-160L DG",
    name: "ICE COOL",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 1,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-plus-160",
    modelNumber: "SFGM35-H3-160L-DG",
    name: "ICE COOL+",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 3,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '19"',
    airDelivery: 8200,
    airThrow: 80,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-160-1",
    modelNumber: "LFGM35-H1-160L-DG",
    name: "ICE STORM",
    frontGrill: "louver",
    images: LOUVER_IMAGE,
    honeycombSides: 1,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 50,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-plus-160",
    modelNumber: "LFGM35-H3-160L-DG",
    name: "ICE STORM+",
    frontGrill: "louver",
    images: LOUVER_IMAGE,
    honeycombSides: 3,
    capacity: 160,
    pumpWattage: 25,
    fanSize: '18.5"',
    airDelivery: 8000,
    airThrow: 80,
    dimensions: "610 × 800 × 1455 mm",
    packDimensions: "665 × 875 × 1420 mm",
  },
  // ── Desert Coolers ────────────────────────────────────────────────────────
  {
    ...DESERT_BASE,
    id: "d-ice-wind-90",
    modelNumber: "PP90H",
    name: "ICE WIND",
    frontGrill: "louver",
    capacity: 90,
    airThrow: 50,
    dimensions: "660 × 520 × 1200 mm",
    packDimensions: "735 × 565 × 1225 mm",
  },
  {
    ...DESERT_BASE,
    id: "d-ice-wind-plus-110",
    modelNumber: "GL90H",
    name: "ICE WIND+",
    frontGrill: "louver",
    capacity: 110,
    airThrow: 50,
    dimensions: "660 × 520 × 1260 mm",
    packDimensions: "735 × 565 × 1285 mm",
  },
  {
    ...DESERT_BASE,
    id: "d-wind-storm-90",
    modelNumber: "PP90F",
    name: "WIND STORM",
    frontGrill: "louver",
    capacity: 90,
    airThrow: 55,
    dimensions: "660 × 520 × 1200 mm",
    packDimensions: "735 × 565 × 1225 mm",
  },
  {
    ...DESERT_BASE,
    id: "d-wind-storm-plus",
    modelNumber: "GL90F",
    name: "WIND STORM+",
    frontGrill: "louver",
    capacity: 110,
    airThrow: 55,
    dimensions: "660 × 520 × 1260 mm",
    packDimensions: "735 × 565 × 1285 mm",
  },
];

export const CAPACITIES = [100, 130, 160, 90, 110];
export const PHONE         = "+919540699333";
export const PHONE_DISPLAY = "+91 95406 99333";
export const WA_NUMBER     = "+919540064444";
export const WA_BASE       = `https://wa.me/${WA_NUMBER}`;

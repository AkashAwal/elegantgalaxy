// ── Data ──────────────────────────────────────────────────────────────────────

export type FrontGrill = "spiral" | "louver";
export type CoolerType = "commercial" | "domestic";

export interface CapacitySpec {
  modelNumber: string;
  pumpWattage: number;
  airThrow: number;
  dimensions: string;
  packDimensions: string;
}

export interface CoolerModel {
  id: string;
  name: string;
  type: CoolerType;
  frontGrill: FrontGrill;
  honeycombSides: 1 | 3;
  capacities: number[];
  bodyMaterial: string;
  motor: string;
  motorRotation: string;
  fanSize: string;
  rpm: number;
  airDelivery: number;
  honeycombSpec: string;
  cordLength: string;
  bladeMaterial: string;
  motorMount: string;
  /** Real product photo under /public. When set, shown instead of the generic cooler illustration. */
  images?: { front: string };
  /** Specs that vary by capacity. */
  capacitySpecs: Record<number, CapacitySpec>;
}

const SPIRAL_IMAGE: { front: string } = { front: "/images/air-coolers/ice-cool-front.png" };
const DOMESTIC_IMAGE: { front: string } = { front: "/images/air-coolers/desert-front.png" };

/** Representative photo for each cooler type's category tile. */
export const TYPE_IMAGES: Record<CoolerType, string> = {
  commercial: "/images/air-coolers/ice-cool-front.png",
  domestic:   "/images/air-coolers/desert-front.png",
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

const DOMESTIC_BASE = {
  type: "domestic" as CoolerType,
  honeycombSides: 3 as const,
  bodyMaterial: "PPCP",
  motor: "93W Nirosha",
  motorRotation: "CW (Load 180W)",
  fanSize: '16"',
  rpm: 1350,
  airDelivery: 5000,
  honeycombSpec: "7090",
  cordLength: "2.5M",
  bladeMaterial: "Plastic ABS",
  motorMount: "PP CP",
  images: DOMESTIC_IMAGE,
};

export const MODELS: CoolerModel[] = [
  // ── Commercial — Spiral grill ─────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool",
    name: "ICE COOL",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 1,
    fanSize: '19"',
    airDelivery: 8200,
    capacities: [100, 130, 160],
    capacitySpecs: {
      100: { modelNumber: "SFGM32-H1-100L DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1355 mm", packDimensions: "665 × 875 × 1295 mm" },
      130: { modelNumber: "SFGM35-H1-130L DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1395 mm", packDimensions: "665 × 875 × 1355 mm" },
      160: { modelNumber: "SFGM35-H1-160L DG", pumpWattage: 25, airThrow: 80, dimensions: "610 × 800 × 1455 mm", packDimensions: "665 × 875 × 1420 mm" },
    },
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-cool-plus",
    name: "ICE COOL+",
    frontGrill: "spiral",
    images: SPIRAL_IMAGE,
    honeycombSides: 3,
    fanSize: '19"',
    airDelivery: 8200,
    capacities: [100, 130, 160],
    capacitySpecs: {
      100: { modelNumber: "SFGM32-H3-100L-DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1355 mm", packDimensions: "665 × 875 × 1295 mm" },
      130: { modelNumber: "SFGM35-H3-130L-DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1395 mm", packDimensions: "665 × 875 × 1355 mm" },
      160: { modelNumber: "SFGM35-H3-160L-DG", pumpWattage: 25, airThrow: 80, dimensions: "610 × 800 × 1455 mm", packDimensions: "665 × 875 × 1420 mm" },
    },
  },
  // ── Commercial — Louver grill ─────────────────────────────────────────────
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm",
    name: "ICE STORM",
    frontGrill: "louver",
    honeycombSides: 1,
    fanSize: '18.5"',
    airDelivery: 8000,
    capacities: [100, 130, 160],
    capacitySpecs: {
      100: { modelNumber: "LFGM32-H1-100L-DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1355 mm", packDimensions: "665 × 875 × 1295 mm" },
      130: { modelNumber: "LFGM35-H1-130L-DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1395 mm", packDimensions: "665 × 875 × 1355 mm" },
      160: { modelNumber: "LFGM35-H1-160L-DG", pumpWattage: 25, airThrow: 50, dimensions: "610 × 800 × 1455 mm", packDimensions: "665 × 875 × 1420 mm" },
    },
  },
  {
    ...COMMERCIAL_BASE,
    id: "c-ice-storm-plus",
    name: "ICE STORM+",
    frontGrill: "louver",
    honeycombSides: 3,
    fanSize: '18.5"',
    airDelivery: 8000,
    capacities: [100, 130, 160],
    capacitySpecs: {
      100: { modelNumber: "LFGM32-H3-100L-DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1355 mm", packDimensions: "665 × 875 × 1295 mm" },
      130: { modelNumber: "LFGM35-H3-130L-DG", pumpWattage: 20, airThrow: 80, dimensions: "610 × 800 × 1395 mm", packDimensions: "665 × 875 × 1355 mm" },
      160: { modelNumber: "LFGM35-H3-160L-DG", pumpWattage: 25, airThrow: 80, dimensions: "610 × 800 × 1455 mm", packDimensions: "665 × 875 × 1420 mm" },
    },
  },
  // ── Domestic ──────────────────────────────────────────────────────────────
  {
    ...DOMESTIC_BASE,
    id: "d-ice-wind",
    name: "ICE WIND",
    frontGrill: "louver",
    capacities: [90],
    capacitySpecs: {
      90: { modelNumber: "PP90H", pumpWattage: 18, airThrow: 50, dimensions: "660 × 520 × 1200 mm", packDimensions: "735 × 565 × 1225 mm" },
    },
  },
  {
    ...DOMESTIC_BASE,
    id: "d-ice-wind-plus",
    name: "ICE WIND+",
    frontGrill: "louver",
    capacities: [110],
    capacitySpecs: {
      110: { modelNumber: "GL90H", pumpWattage: 18, airThrow: 50, dimensions: "660 × 520 × 1260 mm", packDimensions: "735 × 565 × 1285 mm" },
    },
  },
  {
    ...DOMESTIC_BASE,
    id: "d-wind-storm",
    name: "WIND STORM",
    frontGrill: "louver",
    capacities: [90],
    capacitySpecs: {
      90: { modelNumber: "PP90F", pumpWattage: 18, airThrow: 55, dimensions: "660 × 520 × 1200 mm", packDimensions: "735 × 565 × 1225 mm" },
    },
  },
  {
    ...DOMESTIC_BASE,
    id: "d-wind-storm-plus",
    name: "WIND STORM+",
    frontGrill: "louver",
    capacities: [110],
    capacitySpecs: {
      110: { modelNumber: "GL90F", pumpWattage: 18, airThrow: 55, dimensions: "660 × 520 × 1260 mm", packDimensions: "735 × 565 × 1285 mm" },
    },
  },
];

export const CAPACITIES = [90, 100, 110, 130, 160];
export const PHONE         = "+919540064444";
export const PHONE_DISPLAY = "+91 95400 64444";
export const WA_NUMBER     = "+919540064444";
export const WA_BASE       = `https://wa.me/${WA_NUMBER}`;

export const coolerName = (model: CoolerModel, capacity: number) =>
  `EG ${model.name} ${capacity}L Air Cooler`;

export const entryKey = (modelId: string, capacity: number) => `${modelId}::${capacity}`;
export const parseKey = (key: string) => {
  const [modelId, capStr] = key.split("::");
  return { modelId, capacity: Number(capStr) };
};

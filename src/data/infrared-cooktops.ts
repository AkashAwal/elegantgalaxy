export interface CooktopModel {
  id:            string;
  modelNumber:   string;
  name:          string;
  burners:       number;
  wattagePerBurner: number;
  totalWattage:  number;
  surface:       string;
  controls:      string;
  timerMinutes:  number;
  bodyMaterial:  string;
  warranty:      string;
  dimensions:    string;
  /** Real product photo under /public. When set, shown instead of the generic cooktop illustration. */
  images?: { front: string };
}

const SINGLE_BURNER_IMAGE: { front: string } = { front: "/images/infrared-cooktops/cooktop-1burner-front.jpg" };
export const CATEGORY_IMAGE = SINGLE_BURNER_IMAGE.front;

export const MODELS: CooktopModel[] = [
  { id: "ct-1a", modelNumber: "EGIR-1000S", name: "Elegant Single Burner Cooktop",     burners: 1, wattagePerBurner: 2000, totalWattage: 2000, surface: "Ceramic Glass", controls: "Touch Panel", timerMinutes: 180, bodyMaterial: "Tempered Glass + ABS", warranty: "1 Year", dimensions: "355 × 295 × 60 mm", images: SINGLE_BURNER_IMAGE },
  { id: "ct-1b", modelNumber: "EGIR-1200S", name: "Elegant Single Burner Cooktop Pro", burners: 1, wattagePerBurner: 2200, totalWattage: 2200, surface: "Ceramic Glass", controls: "Touch Panel", timerMinutes: 180, bodyMaterial: "Tempered Glass + ABS", warranty: "1 Year", dimensions: "355 × 295 × 60 mm", images: SINGLE_BURNER_IMAGE },
  { id: "ct-2a", modelNumber: "EGIR-2000D", name: "Elegant 2-Burner Infrared Cooktop",     burners: 2, wattagePerBurner: 2000, totalWattage: 4000, surface: "Ceramic Glass", controls: "Touch Panel", timerMinutes: 180, bodyMaterial: "Tempered Glass + ABS", warranty: "1 Year", dimensions: "590 × 320 × 60 mm" },
  { id: "ct-2b", modelNumber: "EGIR-2200D", name: "Elegant 2-Burner Infrared Cooktop Pro", burners: 2, wattagePerBurner: 2200, totalWattage: 4400, surface: "Ceramic Glass", controls: "Touch Panel", timerMinutes: 180, bodyMaterial: "Tempered Glass + ABS", warranty: "1 Year", dimensions: "590 × 320 × 60 mm" },
  { id: "ct-3a", modelNumber: "EGIR-2000T", name: "Elegant 3-Burner Infrared Cooktop",     burners: 3, wattagePerBurner: 2000, totalWattage: 6000, surface: "Ceramic Glass", controls: "Knob + Touch", timerMinutes: 180, bodyMaterial: "Tempered Glass + Steel", warranty: "1 Year", dimensions: "760 × 400 × 65 mm" },
  { id: "ct-4a", modelNumber: "EGIR-2000Q", name: "Elegant 4-Burner Infrared Cooktop",     burners: 4, wattagePerBurner: 2000, totalWattage: 8000, surface: "Ceramic Glass", controls: "Knob + Touch", timerMinutes: 180, bodyMaterial: "Tempered Glass + Steel", warranty: "1 Year", dimensions: "760 × 400 × 65 mm" },
];

export const BURNER_COUNTS = [1, 2, 3, 4];
export const PHONE         = "+919540699333";
export const PHONE_DISPLAY = "+91 95406 99333";
export const WA_BASE       = `https://wa.me/${PHONE}`;

export const burnerLabel = (n: number) => n === 1 ? "Single Burner" : n === 2 ? "Double Burner" : `${n}-Burner`;

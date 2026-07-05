export type WasherType = "front-load" | "top-load" | "semi-automatic";

export interface WasherModel {
  id:            string;
  modelNumber:   string;
  name:          string;
  type:          WasherType;
  capacity:      number;
  spinSpeed:     number;
  energyRating:  string;
  washPrograms:  number;
  motor:         string;
  bodyMaterial:  string;
  warranty:      string;
  dimensions:    string;
}

export const MODELS: WasherModel[] = [
  { id: "fl-6",  modelNumber: "EGFL-06D", name: "Elegant 6kg Front Load Washer",  type: "front-load", capacity: 6,  spinSpeed: 1000, energyRating: "5 Star", washPrograms: 12, motor: "BLDC Inverter", bodyMaterial: "Stainless Steel Drum", warranty: "1 Year", dimensions: "595 × 545 × 850 mm" },
  { id: "fl-7",  modelNumber: "EGFL-07D", name: "Elegant 7kg Front Load Washer",  type: "front-load", capacity: 7,  spinSpeed: 1200, energyRating: "5 Star", washPrograms: 14, motor: "BLDC Inverter", bodyMaterial: "Stainless Steel Drum", warranty: "1 Year", dimensions: "595 × 545 × 850 mm" },
  { id: "fl-8",  modelNumber: "EGFL-08D", name: "Elegant 8kg Front Load Washer",  type: "front-load", capacity: 8,  spinSpeed: 1400, energyRating: "5 Star", washPrograms: 16, motor: "BLDC Inverter", bodyMaterial: "Stainless Steel Drum", warranty: "1 Year", dimensions: "600 × 580 × 850 mm" },
  { id: "tl-7",  modelNumber: "EGTL-07D", name: "Elegant 7kg Top Load Washer",    type: "top-load",    capacity: 7,  spinSpeed: 700,  energyRating: "4 Star", washPrograms: 8,  motor: "Standard Induction", bodyMaterial: "Stainless Steel Drum", warranty: "1 Year", dimensions: "580 × 550 × 900 mm" },
  { id: "tl-8",  modelNumber: "EGTL-08D", name: "Elegant 8kg Top Load Washer",    type: "top-load",    capacity: 8,  spinSpeed: 750,  energyRating: "4 Star", washPrograms: 10, motor: "Standard Induction", bodyMaterial: "Stainless Steel Drum", warranty: "1 Year", dimensions: "580 × 550 × 900 mm" },
  { id: "tl-10", modelNumber: "EGTL-10D", name: "Elegant 10kg Top Load Washer",   type: "top-load",    capacity: 10, spinSpeed: 800,  energyRating: "5 Star", washPrograms: 10, motor: "BLDC Inverter", bodyMaterial: "Stainless Steel Drum", warranty: "1 Year", dimensions: "600 × 560 × 950 mm" },
  { id: "sa-7",  modelNumber: "EGSA-07D", name: "Elegant 7kg Semi-Automatic Washer",  type: "semi-automatic", capacity: 7,  spinSpeed: 1300, energyRating: "N/A", washPrograms: 3, motor: "Standard Induction", bodyMaterial: "Plastic Body", warranty: "1 Year", dimensions: "770 × 430 × 900 mm" },
  { id: "sa-8",  modelNumber: "EGSA-08D", name: "Elegant 8kg Semi-Automatic Washer",  type: "semi-automatic", capacity: 8,  spinSpeed: 1350, energyRating: "N/A", washPrograms: 3, motor: "Standard Induction", bodyMaterial: "Plastic Body", warranty: "1 Year", dimensions: "800 × 440 × 900 mm" },
  { id: "sa-10", modelNumber: "EGSA-10D", name: "Elegant 10kg Semi-Automatic Washer", type: "semi-automatic", capacity: 10, spinSpeed: 1400, energyRating: "N/A", washPrograms: 4, motor: "Standard Induction", bodyMaterial: "Plastic Body", warranty: "1 Year", dimensions: "830 × 460 × 900 mm" },
];

export const CAPACITIES = [6, 7, 8, 10];
export const PHONE         = "+919540699333";
export const PHONE_DISPLAY = "+91 95406 99333";
export const WA_BASE       = `https://wa.me/${PHONE}`;

export const TYPE_LABEL: Record<WasherType, string> = {
  "front-load":     "Front Load",
  "top-load":       "Top Load",
  "semi-automatic": "Semi-Automatic",
};

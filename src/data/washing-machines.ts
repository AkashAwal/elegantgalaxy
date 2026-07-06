export interface WasherCapacitySpec {
  modelNumber:  string;
  motor:        string;
  washPrograms: number;
  filterType:   string;
  image:        string;
  /** Lid design/color group — capacities sharing a designId use the same physical lid pattern. */
  designId:     string;
}

export const CAPACITIES = [7, 8, 9, 10, 11, 12];

export const CAPACITY_SPECS: Record<number, WasherCapacitySpec> = {
  7:  { modelNumber: "EGWM-7.0",  motor: "135W", washPrograms: 2, filterType: "Lint Filter",        image: "/images/washing-machines/egwm-7kg-front.png",  designId: "green-wave" },
  8:  { modelNumber: "EGWM-8.0",  motor: "135W", washPrograms: 2, filterType: "Lint Filter",        image: "/images/washing-machines/egwm-8kg-front.png",  designId: "floral-rose" },
  9:  { modelNumber: "EGWM-9.0",  motor: "180W", washPrograms: 2, filterType: "Double Magic Filter", image: "/images/washing-machines/egwm-9kg-front.png",  designId: "blue-bubble" },
  10: { modelNumber: "EGWM-10.0", motor: "180W", washPrograms: 2, filterType: "Double Magic Filter", image: "/images/washing-machines/egwm-10kg-front.png", designId: "blue-bubble" },
  11: { modelNumber: "EGWM-11.0", motor: "200W", washPrograms: 2, filterType: "Double Magic Filter", image: "/images/washing-machines/egwm-11kg-front.png", designId: "black" },
  12: { modelNumber: "EGWM-12.0", motor: "200W", washPrograms: 2, filterType: "Double Magic Filter", image: "/images/washing-machines/egwm-12kg-front.png", designId: "black" },
};

export const COMMON_SPECS = {
  pulsator:     "Heavy Wash Pulsator",
  bodyMaterial: "ABS Body",
  spinTub:      "Diamond Steel Drum",
  buzzer:       true,
};

export const washerName = (capacity: number) => `Elegant ${capacity}kg Semi-Automatic Washer`;

export const PHONE         = "+919540699333";
export const PHONE_DISPLAY = "+91 95406 99333";
export const WA_BASE       = `https://wa.me/${PHONE}`;

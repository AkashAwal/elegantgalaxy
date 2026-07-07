export interface WasherCapacitySpec {
  modelNumber:  string;
  motor:        string;
  washPrograms: number;
  filterType:   string;
  image:        string;
  /** Angled 3/4-view shot of the same physical design, shown as a second gallery photo. */
  imageAngle:   string;
  /** Lid design/color group — capacities sharing a designId use the same physical lid pattern. */
  designId:     string;
}

export const CAPACITIES = [7, 8, 9, 10, 11, 12];

export const CAPACITY_SPECS: Record<number, WasherCapacitySpec> = {
  7:  { modelNumber: "EGWM-7.0",  motor: "135W", washPrograms: 2, filterType: "Lint Filter",        image: "/washing-machines/6.svg", imageAngle: "/washing-machines/5.svg", designId: "green-wave" },
  8:  { modelNumber: "EGWM-8.0",  motor: "135W", washPrograms: 2, filterType: "Lint Filter",        image: "/washing-machines/4.svg", imageAngle: "/washing-machines/3.svg", designId: "floral-rose" },
  9:  { modelNumber: "EGWM-9.0",  motor: "180W", washPrograms: 2, filterType: "Double Magic Filter", image: "/washing-machines/2.svg", imageAngle: "/washing-machines/1.svg", designId: "blue-bubble" },
  10: { modelNumber: "EGWM-10.0", motor: "180W", washPrograms: 2, filterType: "Double Magic Filter", image: "/washing-machines/4.svg", imageAngle: "/washing-machines/3.svg", designId: "floral-rose" },
  11: { modelNumber: "EGWM-11.0", motor: "200W", washPrograms: 2, filterType: "Double Magic Filter", image: "/washing-machines/9.svg", imageAngle: "/washing-machines/7.svg", designId: "black" },
  12: { modelNumber: "EGWM-12.0", motor: "200W", washPrograms: 2, filterType: "Double Magic Filter", image: "/washing-machines/9.svg", imageAngle: "/washing-machines/7.svg", designId: "black" },
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

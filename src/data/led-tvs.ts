export const SIZES = [24, 32, 40, 42, 43, 50, 55, 58, 65, 75, 85, 100];

export interface TvModel {
  id:         string;
  type:       string;
  platform:   string;
  sizes:      number[];
  resolution: Record<number, string>;
  /** Real product photo under /public. When set, shown instead of the generic TV silhouette. */
  images?: { front: string };
  /** Full photo set for the detail-page gallery — only set for the Interactive Smart Board. */
  gallery?: string[];
  /** Per-size specs that vary by screen size — only set for the Interactive Smart Board. */
  panelSpecs?: Record<number, {
    modelNumber:      string;
    aspectRatio:      string;
    refreshRate:      string;
    powerConsumption: number;
    dimensions:       string;
    packDimensions:   string;
    netWeight:        number;
    grossWeight:      number;
  }>;
  /** Specs shared across every size — only set for the Interactive Smart Board. */
  commonSpecs?: {
    panelType:         string;
    brightness:        string;
    contrastRatio:     string;
    displayColor:      string;
    touchPoints:       string;
    touchResponseTime: string;
    surfaceProtection: string;
    os:                string;
    ram:               string;
    rom:               string;
    internet:          string;
    speaker:           string;
  };
}

export const MODELS: TvModel[] = [
  {
    id:         "android",
    type:       "Android TV",
    platform:   "Android TV",
    sizes:      [32, 43, 50, 55, 65, 75],
    resolution: { 32: "Full HD", 43: "4K Ultra HD", 50: "4K Ultra HD", 55: "4K Ultra HD", 65: "4K Ultra HD", 75: "4K Ultra HD" },
    images: {
      front: "/images/tvs/android-front.webp",
    },
  },
  {
    id:         "webos-4k",
    type:       "WebOS 4K",
    platform:   "webOS 4K",
    sizes:      [43, 50, 55, 58, 65, 75, 85, 100],
    resolution: { 43: "4K Ultra HD", 50: "4K Ultra HD", 55: "4K Ultra HD", 58: "4K Ultra HD", 65: "4K Ultra HD", 75: "4K Ultra HD", 85: "4K Ultra HD", 100: "4K Ultra HD" },
    images: {
      front: "/images/tvs/webos-4k-front.webp",
    },
  },
  {
    id:         "webos-2k",
    type:       "WebOS 2K",
    platform:   "webOS 2K",
    sizes:      [32, 40, 43],
    resolution: { 32: "Full HD", 40: "Full HD", 43: "Full HD" },
    images: {
      front: "/images/tvs/webos-2k-front.webp",
    },
  },
  {
    id:         "google",
    type:       "Google TV",
    platform:   "Google TV",
    sizes:      [32, 43, 50, 55, 65, 75, 85, 100],
    resolution: { 32: "Full HD", 43: "4K Ultra HD", 50: "4K Ultra HD", 55: "4K Ultra HD", 65: "4K Ultra HD", 75: "4K Ultra HD", 85: "4K Ultra HD", 100: "4K Ultra HD" },
    images: {
      front: "/images/tvs/google-front.webp",
    },
  },
  {
    id:         "smart-board",
    type:       "Interactive Smart Board",
    platform:   "Interactive Smart Board",
    sizes:      [55, 65, 75, 85, 86, 98, 105, 110],
    resolution: {
      55: "4K Ultra HD", 65: "4K Ultra HD", 75: "4K Ultra HD", 85: "4K Ultra HD",
      86: "4K Ultra HD", 98: "4K Ultra HD", 105: "5120×2160 Ultra-Wide UHD", 110: "4K Ultra HD",
    },
    images: {
      front: "/images/tvs/smart-board-2.webp",
    },
    gallery: [
      "/images/tvs/smart-board-2.webp",
      "/images/tvs/smart-board-3.webp",
      "/images/tvs/smart-board-4.webp",
      "/images/tvs/smart-board-5.webp",
      "/images/tvs/smart-board-6.webp",
      "/images/tvs/smart-board-1.webp",
    ],
    panelSpecs: {
      55:  { modelNumber: "EGIP-55",  aspectRatio: "16:9, Wide SXGA", refreshRate: "60Hz",  powerConsumption: 198, dimensions: "1257.6 × 743.7 × 83.9 mm",  packDimensions: "1358 × 855 × 175 mm",  netWeight: 24, grossWeight: 30 },
      65:  { modelNumber: "EGIP-65",  aspectRatio: "16:9, Wide SXGA", refreshRate: "60Hz",  powerConsumption: 248, dimensions: "1485 × 887.6 × 91.6 mm",    packDimensions: "1600 × 1008 × 195 mm", netWeight: 36, grossWeight: 45 },
      75:  { modelNumber: "EGIP-75",  aspectRatio: "16:9, Wide SXGA", refreshRate: "60Hz",  powerConsumption: 330, dimensions: "1707.1 × 1012.7 × 91.6 mm", packDimensions: "1837 × 1131 × 195 mm", netWeight: 54, grossWeight: 66 },
      85:  { modelNumber: "EGIP-85",  aspectRatio: "16:9, Wide SXGA", refreshRate: "60Hz",  powerConsumption: 400, dimensions: "1953.3 × 1151.4 × 92.6 mm", packDimensions: "2070 × 1271 × 215 mm", netWeight: 66, grossWeight: 80 },
      86:  { modelNumber: "EGIP-86",  aspectRatio: "16:9, Wide SXGA", refreshRate: "60Hz",  powerConsumption: 400, dimensions: "1953.3 × 1151.4 × 92.6 mm", packDimensions: "2070 × 1271 × 215 mm", netWeight: 66, grossWeight: 80 },
      98:  { modelNumber: "EGIP-98",  aspectRatio: "16:9, Wide SXGA", refreshRate: "60Hz",  powerConsumption: 598, dimensions: "2216.8 × 1317.3 × 108.7 mm", packDimensions: "2385 × 1485 × 298 mm", netWeight: 82, grossWeight: 98 },
      105: { modelNumber: "EGIP-105", aspectRatio: "21:9, Wide SXGA", refreshRate: "60Hz",  powerConsumption: 515, dimensions: "2507.9 × 1135.5 × 106 mm",   packDimensions: "2668 × 1296 × 240 mm", netWeight: 87, grossWeight: 104 },
      110: { modelNumber: "EGIP-110", aspectRatio: "16:9, Wide SXGA", refreshRate: "120Hz", powerConsumption: 785, dimensions: "2500.8 × 1477.5 × 108.7 mm", packDimensions: "2668 × 1615 × 298 mm", netWeight: 96, grossWeight: 120 },
    },
    commonSpecs: {
      panelType:         "a-Si TFT-LCD",
      brightness:        "450 cd/m² (typ)",
      contrastRatio:     "5000:1",
      displayColor:      "1.07B",
      touchPoints:       "Infrared, 20-point multi-touch",
      touchResponseTime: "5ms",
      surfaceProtection: "Anti-glare tempered glass, 4mm",
      os:                "Android 11.0",
      ram:               "4GB (expandable to 8GB DDR4)",
      rom:               "32GB (expandable to 128GB eMMC)",
      internet:          "RJ45 + Wi-Fi 2.4G/5G + Bluetooth 5.0",
      speaker:           "2 × 15W",
    },
  },
  {
    id:         "distro",
    type:       "Distro",
    platform:   "Distro OS",
    sizes:      [32, 40, 43],
    resolution: { 32: "Full HD", 40: "Full HD", 43: "Full HD" },
    images: {
      front: "/images/tvs/distro-front.webp",
    },
  },
  {
    id:         "frameless-smart",
    type:       "Frameless Smart",
    platform:   "Frameless Smart",
    sizes:      [24, 32, 40, 42, 43],
    resolution: { 24: "Full HD", 32: "Full HD", 40: "Full HD", 42: "Full HD", 43: "Full HD" },
    images: {
      front: "/images/tvs/frameless-smart-front.webp",
    },
  },
  {
    id:         "frameless-normal",
    type:       "Frameless Normal",
    platform:   "Frameless Normal",
    sizes:      [24],
    resolution: { 24: "Full HD" },
    images: {
      front: "/images/tvs/frameless-normal-front.webp",
    },
  },
];

export const PHONE         = "+919540064444";
export const PHONE_DISPLAY = "+91 95400 64444";
export const WA_NUMBER     = "+919540064444";
export const WA_BASE       = `https://wa.me/${WA_NUMBER}`;

export const tvName   = (model: TvModel, size: number) =>
  model.id === "smart-board"
    ? `EG ${size}" Interactive Smart Teaching Board`
    : `EG ${model.type} ${size}" Smart LED`;
export const entryKey = (modelId: string, size: number) => `${modelId}::${size}`;
export const parseKey = (key: string) => {
  const [modelId, sizeStr] = key.split("::");
  return { modelId, size: Number(sizeStr) };
};

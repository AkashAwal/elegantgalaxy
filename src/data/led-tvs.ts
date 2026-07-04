export const SIZES = [24, 32, 40, 42, 43, 50, 55, 58, 65, 75, 85, 100];

export interface TvModel {
  id:         string;
  type:       string;
  platform:   string;
  sizes:      number[];
  resolution: Record<number, string>;
  /** Real product photo under /public. When set, shown instead of the generic TV silhouette. */
  images?: { front: string };
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
    sizes:      [65, 75, 86, 98],
    resolution: { 65: "4K Ultra HD", 75: "4K Ultra HD", 86: "4K Ultra HD", 98: "4K Ultra HD" },
    images: {
      front: "/images/tvs/smart-board-front.webp",
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

export const PHONE         = "+919540699333";
export const PHONE_DISPLAY = "+91 95406 99333";
export const WA_BASE       = `https://wa.me/${PHONE}`;

export const tvName   = (model: TvModel, size: number) =>
  model.id === "smart-board"
    ? `EG ${size}" Interactive Smart Teaching Board`
    : `EG ${model.type} ${size}" Smart LED`;
export const entryKey = (modelId: string, size: number) => `${modelId}::${size}`;
export const parseKey = (key: string) => {
  const [modelId, sizeStr] = key.split("::");
  return { modelId, size: Number(sizeStr) };
};

export const SIZES = [24, 32, 40, 42, 43, 50, 55, 58, 65, 75, 85, 100];

export interface TvModel {
  id:         string;
  type:       string;
  platform:   string;
  sizes:      number[];
  resolution: Record<number, string>;
  /** Real product photos under /public, front/left/right angles. When set, these are shown instead of the generic TV silhouette. */
  images?: { front: string; left: string; right: string };
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
      left:  "/images/tvs/android-left.webp",
      right: "/images/tvs/android-right.webp",
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
      left:  "/images/tvs/webos-4k-left.webp",
      right: "/images/tvs/webos-4k-right.webp",
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
      left:  "/images/tvs/webos-2k-left.webp",
      right: "/images/tvs/webos-2k-right.webp",
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
      left:  "/images/tvs/google-left.webp",
      right: "/images/tvs/google-right.webp",
    },
  },
  {
    id:         "distro",
    type:       "Distro",
    platform:   "Distro OS",
    sizes:      [32, 40, 43],
    resolution: { 32: "Full HD", 40: "Full HD", 43: "Full HD" },
  },
  {
    id:         "frameless-smart",
    type:       "Frameless Smart",
    platform:   "Frameless Smart",
    sizes:      [24, 32, 40, 42, 43],
    resolution: { 24: "Full HD", 32: "Full HD", 40: "Full HD", 42: "Full HD", 43: "Full HD" },
  },
  {
    id:         "frameless-normal",
    type:       "Frameless Normal",
    platform:   "Frameless Normal",
    sizes:      [24],
    resolution: { 24: "Full HD" },
  },
];

export const PHONE         = "+919540699333";
export const PHONE_DISPLAY = "+91 95406 99333";
export const WA_BASE       = `https://wa.me/${PHONE}`;

export const tvName   = (model: TvModel, size: number) => `EG ${model.type} ${size}" Smart LED`;
export const entryKey = (modelId: string, size: number) => `${modelId}::${size}`;
export const parseKey = (key: string) => {
  const [modelId, sizeStr] = key.split("::");
  return { modelId, size: Number(sizeStr) };
};

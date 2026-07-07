import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:             "Elegant Galaxy",
    short_name:       "Elegant Galaxy",
    description:      "Home appliances built for Indian households - LED TVs, washing machines, air coolers, and infrared cooktops. Since 2012.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#1d1d1f",
    theme_color:      "#0071e3",
    lang:             "en-IN",
    categories:       ["shopping", "lifestyle", "utilities"],
    icons: [
      {
        src:     "/icon-192.png",
        sizes:   "192x192",
        type:    "image/png",
        purpose: "any",
      },
      {
        src:     "/icon-512.png",
        sizes:   "512x512",
        type:    "image/png",
        purpose: "any",
      },
      {
        src:     "/icon-maskable-512.png",
        sizes:   "512x512",
        type:    "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src:   "/screenshot-desktop.png",
        sizes: "1280x800",
        type:  "image/png",
      },
    ],
  };
}

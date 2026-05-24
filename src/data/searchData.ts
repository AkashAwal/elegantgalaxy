export type SearchItem = {
  id: number;
  name: string;
  description: string;
  category: "Products" | "Pages" | "Support";
  href: string;
  keywords?: string[];
};

export const searchData: SearchItem[] = [
  // Products
  {
    id: 1,
    name: "LED TVs",
    description: "Smart LED televisions for every room",
    category: "Products",
    href: "/products/led-tvs",
    keywords: ["tv", "television", "smart tv", "led", "4k", "hd", "screen", "display"],
  },
  {
    id: 2,
    name: "32 inch LED TV",
    description: "Full HD 32\" display — perfect for bedrooms",
    category: "Products",
    href: "/products/led-tvs",
    keywords: ["32", "small tv", "bedroom tv", "hd"],
  },
  {
    id: 3,
    name: "55 inch 4K Smart TV",
    description: "4K Ultra HD with built-in Android TV",
    category: "Products",
    href: "/products/led-tvs",
    keywords: ["55", "4k", "ultra hd", "android", "large"],
  },
  {
    id: 4,
    name: "Washing Machines",
    description: "Top-load and front-load washing machines",
    category: "Products",
    href: "/products/washing-machines",
    keywords: ["wash", "laundry", "front load", "top load", "washer"],
  },
  {
    id: 5,
    name: "Front Load Washing Machine",
    description: "7 kg front-load with inverter motor",
    category: "Products",
    href: "/products/washing-machines",
    keywords: ["front load", "7kg", "inverter", "energy efficient"],
  },
  {
    id: 6,
    name: "Top Load Washing Machine",
    description: "6.5 kg fully automatic top-load",
    category: "Products",
    href: "/products/washing-machines",
    keywords: ["top load", "6.5kg", "automatic"],
  },
  {
    id: 7,
    name: "Air Coolers",
    description: "Energy-efficient air coolers for every space",
    category: "Products",
    href: "/products/air-coolers",
    keywords: ["cooler", "cooling", "desert cooler", "room cooler", "summer", "ac"],
  },
  {
    id: 8,
    name: "Desert Air Cooler",
    description: "High-capacity cooler for large rooms",
    category: "Products",
    href: "/products/air-coolers",
    keywords: ["desert", "large room", "high capacity"],
  },
  {
    id: 9,
    name: "Personal Air Cooler",
    description: "Compact cooler ideal for personal use",
    category: "Products",
    href: "/products/air-coolers",
    keywords: ["personal", "small", "compact", "portable"],
  },
  {
    id: 10,
    name: "Infrared Cooktops",
    description: "Modern infrared cooking solutions",
    category: "Products",
    href: "/products/infrared-cooktops",
    keywords: ["cooktop", "induction", "infrared", "stove", "cook", "kitchen"],
  },
  {
    id: 11,
    name: "Single Burner Infrared Cooktop",
    description: "Portable single-burner infrared hob",
    category: "Products",
    href: "/products/infrared-cooktops",
    keywords: ["single burner", "portable", "hob"],
  },
  {
    id: 12,
    name: "Double Burner Infrared Cooktop",
    description: "Two-burner infrared cooktop for families",
    category: "Products",
    href: "/products/infrared-cooktops",
    keywords: ["double burner", "two burner", "family"],
  },

  // Pages
  {
    id: 13,
    name: "About Us",
    description: "Our story, mission, and values",
    category: "Pages",
    href: "/about",
    keywords: ["about", "company", "story", "mission", "team", "who"],
  },
  {
    id: 14,
    name: "Blog",
    description: "Tips, guides, and product news",
    category: "Pages",
    href: "/blog",
    keywords: ["blog", "articles", "news", "tips", "guide", "read"],
  },
  {
    id: 15,
    name: "Contact",
    description: "Get in touch with us",
    category: "Pages",
    href: "/contact",
    keywords: ["contact", "reach", "email", "phone", "address", "enquiry"],
  },
  {
    id: 16,
    name: "Become a Distributor",
    description: "Partner with Elegant Galaxy",
    category: "Pages",
    href: "/distributors",
    keywords: ["distributor", "partner", "dealer", "franchise", "reseller"],
  },

  // Support
  {
    id: 17,
    name: "Support",
    description: "Help centre, manuals, and warranty info",
    category: "Support",
    href: "/support",
    keywords: ["help", "support", "warranty", "repair", "service", "manual", "faq"],
  },
  {
    id: 18,
    name: "Warranty Registration",
    description: "Register your product warranty",
    category: "Support",
    href: "/support#warranty",
    keywords: ["warranty", "register", "guarantee"],
  },
  {
    id: 19,
    name: "Service Request",
    description: "Book a service or repair visit",
    category: "Support",
    href: "/support#service",
    keywords: ["service", "repair", "technician", "fix"],
  },
];

export const CATEGORY_ORDER: SearchItem["category"][] = [
  "Products",
  "Pages",
  "Support",
];

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type MenuLink = { label: string; href: string };
type MenuSection = { heading: string; links: MenuLink[] };
type MenuFeatured = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};
type MenuEntry = {
  sections: MenuSection[];
  featured: MenuFeatured | null;
};

const MENU: Record<string, MenuEntry> = {
  Televisions: {
    sections: [
      {
        heading: "Display Series",
        links: [
          { label: "Infinity OLED Series", href: "/televisions" },
          { label: "Quantum QLED Series", href: "/televisions" },
          { label: "Crystal 4K Series", href: "/televisions" },
          { label: "Frame Art Television", href: "/televisions" },
          { label: "Outdoor Series", href: "/televisions" },
        ],
      },
      {
        heading: "Size Range",
        links: [
          { label: '43" & 50" Compact', href: "/televisions" },
          { label: '55" & 65" Standard', href: "/televisions" },
          { label: '75" & 85" Large Format', href: "/televisions" },
          { label: '98" & 110" Cinema', href: "/televisions" },
        ],
      },
      {
        heading: "Features",
        links: [
          { label: "Smart TV Platform", href: "/televisions" },
          { label: "AI Picture Engine", href: "/televisions" },
          { label: "Dolby Vision & Atmos", href: "/televisions" },
          { label: "Gaming Mode 144Hz", href: "/televisions" },
        ],
      },
    ],
    featured: {
      eyebrow: "New Release",
      title: "Infinity OLED X Series",
      description:
        "1000 nits peak brightness, 0.1ms response, and micro-lens array display technology.",
      href: "/televisions",
    },
  },
  Cooling: {
    sections: [
      {
        heading: "Refrigerators",
        links: [
          { label: "French Door Series", href: "/cooling" },
          { label: "Side-by-Side Series", href: "/cooling" },
          { label: "Bottom Freezer", href: "/cooling" },
          { label: "Top Freezer Classic", href: "/cooling" },
        ],
      },
      {
        heading: "Air Conditioners",
        links: [
          { label: "Split Inverter AC", href: "/cooling" },
          { label: "Cassette AC", href: "/cooling" },
          { label: "Window Unit", href: "/cooling" },
          { label: "Portable Cooling", href: "/cooling" },
        ],
      },
      {
        heading: "Specialty",
        links: [
          { label: "Wine Cellar Series", href: "/cooling" },
          { label: "Built-In Refrigerators", href: "/cooling" },
          { label: "Water Dispensers", href: "/cooling" },
        ],
      },
    ],
    featured: {
      eyebrow: "Most Efficient",
      title: "InverterPro Cooling",
      description:
        "5-star energy rating with adaptive compressor technology and AI temperature management.",
      href: "/cooling",
    },
  },
  Laundry: {
    sections: [
      {
        heading: "Washing Machines",
        links: [
          { label: "PureWash Front Load", href: "/laundry" },
          { label: "AquaForce Top Load", href: "/laundry" },
          { label: "Compact Front Load", href: "/laundry" },
          { label: "Commercial Grade", href: "/laundry" },
        ],
      },
      {
        heading: "Washer-Dryers",
        links: [
          { label: "TwinDrum Combo", href: "/laundry" },
          { label: "Heat Pump Dryer", href: "/laundry" },
          { label: "Vented Dryer", href: "/laundry" },
        ],
      },
    ],
    featured: {
      eyebrow: "Award Winning",
      title: "PureWash X9 Pro",
      description:
        "9kg EcoWash technology with steam hygiene, AI fabric detection, and silent 42dB operation.",
      href: "/laundry",
    },
  },
  Technology: {
    sections: [
      {
        heading: "Display Technology",
        links: [
          { label: "AI Vision Engine", href: "/technology" },
          { label: "Quantum Dot Panel", href: "/technology" },
          { label: "MicroLens Array", href: "/technology" },
          { label: "120Hz ProMotion", href: "/technology" },
        ],
      },
      {
        heading: "Efficiency",
        links: [
          { label: "InverterPro Motor", href: "/technology" },
          { label: "EnergyGuard System", href: "/technology" },
          { label: "EcoWash Engine", href: "/technology" },
        ],
      },
      {
        heading: "Connectivity",
        links: [
          { label: "SmartConnect Platform", href: "/technology" },
          { label: "EG Home App", href: "/technology" },
          { label: "Voice Assistant", href: "/technology" },
        ],
      },
    ],
    featured: null,
  },
  Company: {
    sections: [
      {
        heading: "Organization",
        links: [
          { label: "About Elegant Galaxy", href: "/about" },
          { label: "Leadership", href: "/team" },
          { label: "Sustainability", href: "/sustainability" },
          { label: "Careers", href: "/careers" },
          { label: "Press & Media", href: "/press" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Service Centers", href: "/support" },
          { label: "Warranty", href: "/warranty" },
          { label: "Product Manuals", href: "/manuals" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
    featured: null,
  },
};

const NAV_ITEMS = ["Televisions", "Cooling", "Laundry", "Technology", "Company"];

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(item);
  };

  const close = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 130);
  };

  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const menuEntry = activeMenu ? MENU[activeMenu] : null;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200"
        onMouseLeave={close}
      >
        <div className="flex h-16 items-center justify-between max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 bg-neutral-900 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold tracking-wider">EG</span>
            </div>
            <span className="text-[13px] font-semibold text-neutral-900 tracking-[0.07em]">
              ELEGANT GALAXY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onMouseEnter={() => open(item)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-sm transition-colors duration-200 ${
                  activeMenu === item
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {item}
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    activeMenu === item ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/support"
              className="text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            >
              Support
            </Link>
            <Link
              href="/store"
              className="px-5 py-2 text-[12.5px] font-semibold bg-neutral-900 text-white hover:bg-neutral-700 transition-colors duration-200"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-5 h-px bg-neutral-900 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-neutral-900 transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-3.5 h-px bg-neutral-900 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px] w-5" : ""}`}
            />
          </button>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && menuEntry && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease }}
              className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-sm"
              onMouseEnter={keepOpen}
            >
              <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-10">
                <div
                  className={`grid gap-10 xl:gap-16 ${
                    menuEntry.featured
                      ? "grid-cols-[1fr_1fr_1fr_260px]"
                      : "grid-cols-[1fr_1fr_1fr]"
                  }`}
                >
                  {menuEntry.sections.map((section) => (
                    <div key={section.heading}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-5">
                        {section.heading}
                      </p>
                      <ul className="space-y-3.5">
                        {section.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setActiveMenu(null)}
                              className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors duration-150 block"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {menuEntry.featured && (
                    <div className="pl-8 xl:pl-10 border-l border-neutral-100">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-5">
                        {menuEntry.featured.eyebrow}
                      </p>
                      <div className="w-full h-28 bg-neutral-100 mb-5 flex items-center justify-center border border-neutral-200">
                        <div className="w-16 h-10 bg-neutral-300 rounded-sm" />
                      </div>
                      <h4 className="text-[14px] font-semibold text-neutral-900 mb-2">
                        {menuEntry.featured.title}
                      </h4>
                      <p className="text-[12.5px] text-neutral-500 leading-relaxed mb-4">
                        {menuEntry.featured.description}
                      </p>
                      <Link
                        href={menuEntry.featured.href}
                        onClick={() => setActiveMenu(null)}
                        className="text-[12.5px] font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                      >
                        Explore →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-neutral-900/20"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white overflow-y-auto pt-16"
            >
              <div className="px-7 py-8">
                {NAV_ITEMS.map((item) => (
                  <div key={item} className="border-b border-neutral-100 py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-4">
                      {item}
                    </p>
                    {MENU[item]?.sections
                      .flatMap((s) => s.links)
                      .slice(0, 5)
                      .map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-[15px] text-neutral-800 py-2"
                        >
                          {link.label}
                        </Link>
                      ))}
                  </div>
                ))}
                <div className="mt-8">
                  <Link
                    href="/store"
                    className="block w-full py-3.5 text-center text-[14px] font-semibold bg-neutral-900 text-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

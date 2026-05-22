"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Televisions",
    links: [
      { label: "Infinity OLED Series", href: "/televisions" },
      { label: "Quantum QLED Series", href: "/televisions" },
      { label: "Crystal 4K Series", href: "/televisions" },
      { label: "Frame Art Television", href: "/televisions" },
      { label: "Smart TV Features", href: "/televisions" },
      { label: "TV Accessories", href: "/televisions" },
    ],
  },
  {
    heading: "Cooling",
    links: [
      { label: "French Door Fridges", href: "/cooling" },
      { label: "Side-by-Side Series", href: "/cooling" },
      { label: "Split Inverter AC", href: "/cooling" },
      { label: "Window Air Conditioners", href: "/cooling" },
      { label: "Wine Cellar Series", href: "/cooling" },
      { label: "Water Dispensers", href: "/cooling" },
    ],
  },
  {
    heading: "Laundry",
    links: [
      { label: "PureWash Front Load", href: "/laundry" },
      { label: "AquaForce Top Load", href: "/laundry" },
      { label: "TwinDrum Washer-Dryer", href: "/laundry" },
      { label: "Heat Pump Dryer", href: "/laundry" },
      { label: "Commercial Grade", href: "/laundry" },
      { label: "Laundry Accessories", href: "/laundry" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { label: "AI Vision Engine", href: "/technology" },
      { label: "InverterPro System", href: "/technology" },
      { label: "EcoWash Engine", href: "/technology" },
      { label: "SmartConnect Platform", href: "/technology" },
      { label: "EG Home App", href: "/technology" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Elegant Galaxy", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
      { label: "Investors", href: "/investors" },
      { label: "Press & Media", href: "/press" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Service Centers", href: "/support" },
      { label: "Warranty Registration", href: "/warranty" },
      { label: "Product Manuals", href: "/manuals" },
      { label: "Spare Parts", href: "/parts" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/elegantgalaxy", char: "ig" },
  { label: "LinkedIn", href: "https://linkedin.com/company/elegantgalaxy", char: "in" },
  { label: "X", href: "https://x.com/elegantgalaxy", char: "𝕏" },
  { label: "YouTube", href: "https://youtube.com/@elegantgalaxy", char: "yt" },
];

const LEGAL_LINKS = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Compliance", href: "/compliance" },
  { label: "Recall Notices", href: "/recalls" },
];

function MobileAccordion({ column }: { column: (typeof FOOTER_COLUMNS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4"
        aria-expanded={open}
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-900">
          {column.heading}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-neutral-400 transition-transform duration-250 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <div className="space-y-3.5">
          {column.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-[13.5px] text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">

      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 pt-20 pb-16">

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-8 xl:gap-12">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-900 mb-6">
                {column.heading}
              </p>
              <ul className="space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors duration-150 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden">
          {FOOTER_COLUMNS.map((column) => (
            <MobileAccordion key={column.heading} column={column} />
          ))}
        </div>
      </div>

      {/* Brand Strip */}
      <div className="border-t border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-7">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-6 h-6 bg-neutral-900 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold tracking-wider">EG</span>
              </div>
              <span className="text-[12.5px] font-semibold text-neutral-700 tracking-[0.07em]">
                ELEGANT GALAXY
              </span>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100 flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-[9.5px] font-bold text-neutral-500">
                    {social.char}
                  </span>
                </a>
              ))}
            </div>

            {/* Region */}
            <div className="flex items-center gap-2 text-[12px] text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              India · English
            </div>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="border-t border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11px] text-neutral-400 hover:text-neutral-600 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-[11px] text-neutral-400 shrink-0">
              © {new Date().getFullYear()} Elegant Galaxy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

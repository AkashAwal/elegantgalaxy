"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { label: "LED TVs", href: "/products/led-tvs" },
  { label: "Washing Machines", href: "/products/washing-machines" },
  { label: "Air Coolers", href: "/products/air-coolers" },
  { label: "Infrared Cooktops", href: "/products/infrared-cooktops" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f7]/90 backdrop-blur-md border-b border-black/10">
      {/* Desktop nav */}
      <nav className="mx-auto max-w-[1400px] flex items-center h-11 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 shrink-0 mr-6 group"
          aria-label="Elegant Galaxy home"
        >
          {/* Star / diamond mark */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#C8A951] group-hover:scale-110 transition-transform"
          >
            <path
              d="M12 2l2.6 6.4L21 12l-6.4 2.6L12 22l-2.6-6.4L3 12l6.4-2.6L12 2z"
              fill="currentColor"
            />
          </svg>
          <span className="text-[13px] font-semibold text-[#0F1B3D] tracking-tight whitespace-nowrap">
            Elegant Galaxy
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center flex-1 justify-center gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] transition-colors whitespace-nowrap ${
                  active
                    ? "text-[#0F1B3D] font-medium"
                    : "text-[#0F1B3D]/65 hover:text-[#0F1B3D]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Spacer on small screens */}
        <div className="flex-1 lg:hidden" />

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-1.5 rounded-md text-[#0F1B3D]/70 hover:text-[#0F1B3D] hover:bg-black/5 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#f5f5f7]/95 backdrop-blur-md border-t border-black/8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3.5 text-[13px] border-b border-black/5 transition-colors ${
                  active
                    ? "text-[#0F1B3D] font-medium bg-black/4"
                    : "text-[#0F1B3D]/70 hover:text-[#0F1B3D] hover:bg-black/4"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

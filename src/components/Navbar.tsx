"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect } from "react";
import { Search, X, ArrowRight, Menu } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MegaLink  { label: string; href: string }
interface MegaColumn {
  heading: string;
  primary?: MegaLink[];   // large bold links in the first column
  links:    MegaLink[];   // regular-weight links
}
interface NavItem {
  id:    string;
  label: string;
  href:  string;
  mega?: MegaColumn[];
}

// ─── Nav data ────────────────────────────────────────────────────────────────

const NAV: NavItem[] = [
  { id: "home", label: "Home", href: "/" },

  {
    id: "led-tvs",
    label: "LED TVs",
    href: "/products/led-tvs",
    mega: [
      {
        heading: "Explore LED TVs",
        primary: [
          { label: "Explore All LED TVs",  href: "/products/led-tvs" },
          { label: "32-Inch LED TVs",      href: "/products/led-tvs/32-inch" },
          { label: "43-Inch LED TVs",      href: "/products/led-tvs/43-inch" },
          { label: "55-Inch LED TVs",      href: "/products/led-tvs/55-inch" },
          { label: "65-Inch LED TVs",      href: "/products/led-tvs/65-inch" },
        ],
        links: [
          { label: "Compare LED TVs",      href: "/products/led-tvs/compare" },
        ],
      },
      {
        heading: "Shop LED TVs",
        links: [
          { label: "Shop LED TVs",         href: "/products/led-tvs" },
          { label: "TV Accessories",       href: "/products/led-tvs/accessories" },
          { label: "Find a Distributor",   href: "/distributors" },
          { label: "Financing",            href: "/distributors/financing" },
        ],
      },
      {
        heading: "More from LED TVs",
        links: [
          { label: "TV Support",           href: "/support/tv" },
          { label: "Warranty",             href: "/support/warranty" },
          { label: "Service Centres",      href: "/support/service-centres" },
          { label: "Energy Ratings",       href: "/products/led-tvs/energy" },
        ],
      },
    ],
  },

  {
    id: "washing-machines",
    label: "Washing Machines",
    href: "/products/washing-machines",
    mega: [
      {
        heading: "Explore Washing Machines",
        primary: [
          { label: "Explore All Washing Machines", href: "/products/washing-machines" },
          { label: "Front Load",                   href: "/products/washing-machines/front-load" },
          { label: "Top Load",                     href: "/products/washing-machines/top-load" },
          { label: "Semi-Automatic",               href: "/products/washing-machines/semi-automatic" },
        ],
        links: [
          { label: "Compare Washing Machines",     href: "/products/washing-machines/compare" },
        ],
      },
      {
        heading: "Shop Washing Machines",
        links: [
          { label: "Shop Washing Machines",        href: "/products/washing-machines" },
          { label: "Accessories",                  href: "/products/washing-machines/accessories" },
          { label: "Find a Distributor",           href: "/distributors" },
          { label: "Financing",                    href: "/distributors/financing" },
        ],
      },
      {
        heading: "More from Washing Machines",
        links: [
          { label: "Washing Machine Support",      href: "/support/washing-machines" },
          { label: "Warranty",                     href: "/support/warranty" },
          { label: "Service Centres",              href: "/support/service-centres" },
          { label: "Energy Ratings",               href: "/products/washing-machines/energy" },
        ],
      },
    ],
  },

  {
    id: "air-coolers",
    label: "Air Coolers",
    href: "/products/air-coolers",
    mega: [
      {
        heading: "Explore Air Coolers",
        primary: [
          { label: "Explore All Air Coolers", href: "/products/air-coolers" },
          { label: "Personal Coolers",        href: "/products/air-coolers/personal" },
          { label: "Desert Coolers",          href: "/products/air-coolers/desert" },
          { label: "Tower Coolers",           href: "/products/air-coolers/tower" },
          { label: "Window Coolers",          href: "/products/air-coolers/window" },
        ],
        links: [
          { label: "Compare Air Coolers",     href: "/products/air-coolers/compare" },
        ],
      },
      {
        heading: "Shop Air Coolers",
        links: [
          { label: "Shop Air Coolers",        href: "/products/air-coolers" },
          { label: "Accessories",             href: "/products/air-coolers/accessories" },
          { label: "Find a Distributor",      href: "/distributors" },
          { label: "Financing",               href: "/distributors/financing" },
        ],
      },
      {
        heading: "More from Air Coolers",
        links: [
          { label: "Air Cooler Support",      href: "/support/air-coolers" },
          { label: "Warranty",                href: "/support/warranty" },
          { label: "Service Centres",         href: "/support/service-centres" },
          { label: "Energy Ratings",          href: "/products/air-coolers/energy" },
        ],
      },
    ],
  },

  {
    id: "infrared-cooktops",
    label: "Infrared Cooktops",
    href: "/products/infrared-cooktops",
    mega: [
      {
        heading: "Explore Infrared Cooktops",
        primary: [
          { label: "Explore All Cooktops",    href: "/products/infrared-cooktops" },
          { label: "Single Burner",           href: "/products/infrared-cooktops/single-burner" },
          { label: "Double Burner",           href: "/products/infrared-cooktops/double-burner" },
        ],
        links: [
          { label: "Compare Cooktops",        href: "/products/infrared-cooktops/compare" },
          { label: "Why Infrared?",           href: "/products/infrared-cooktops/why-infrared" },
        ],
      },
      {
        heading: "Shop Infrared Cooktops",
        links: [
          { label: "Shop Cooktops",           href: "/products/infrared-cooktops" },
          { label: "Accessories",             href: "/products/infrared-cooktops/accessories" },
          { label: "Find a Distributor",      href: "/distributors" },
          { label: "Financing",               href: "/distributors/financing" },
        ],
      },
      {
        heading: "More from Infrared Cooktops",
        links: [
          { label: "Cooktop Support",         href: "/support/cooktops" },
          { label: "Warranty",                href: "/support/warranty" },
          { label: "Service Centres",         href: "/support/service-centres" },
          { label: "Safety Certifications",   href: "/products/infrared-cooktops/safety" },
        ],
      },
    ],
  },

  { id: "about",   label: "About",   href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "blog",    label: "Blog",    href: "/blog" },
  { id: "support", label: "Support", href: "/support" },
];

const QUICK_LINKS: MegaLink[] = [
  { label: "Find a Distributor",    href: "/distributors" },
  { label: "Become a Distributor",  href: "/distributors/apply" },
  { label: "LED TVs",               href: "/products/led-tvs" },
  { label: "Washing Machines",      href: "/products/washing-machines" },
  { label: "Air Coolers",           href: "/products/air-coolers" },
  { label: "Infrared Cooktops",     href: "/products/infrared-cooktops" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname                = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchOpen, setSearch] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const [query, setQuery]       = useState("");
  const closeTimer              = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRef               = useRef<HTMLInputElement>(null);

  // ── helpers ──────────────────────────────────────────────────────────────

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleMegaClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveId(null), 180);
  }, [cancelClose]);

  const openMega = useCallback((id: string) => {
    cancelClose();
    setSearch(false);
    setActiveId(id);
  }, [cancelClose]);

  const closeMega = useCallback(() => {
    cancelClose();
    setActiveId(null);
  }, [cancelClose]);

  const toggleSearch = useCallback(() => {
    closeMega();
    setSearch((prev) => {
      if (!prev) setTimeout(() => searchRef.current?.focus(), 40);
      return !prev;
    });
    setQuery("");
  }, [closeMega]);

  // Escape key closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActiveId(null); setSearch(false); setMobile(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobile(false); }, [pathname]);

  const activeMega = NAV.find((n) => n.id === activeId)?.mega ?? null;
  const panelOpen  = !!activeMega || searchOpen;

  // ── render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50"
        onMouseLeave={scheduleMegaClose}
        onMouseEnter={cancelClose}
        style={{
          background: panelOpen
            ? "rgba(251,251,253,1)"
            : "rgba(245,245,247,0.88)",
          backdropFilter: panelOpen ? "none" : "blur(20px) saturate(180%)",
          WebkitBackdropFilter: panelOpen ? "none" : "blur(20px) saturate(180%)",
        }}
      >
        {/* ── Top nav bar ──────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-[1024px] px-4 flex items-center h-11 gap-0">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-[7px] mr-auto lg:mr-0"
            aria-label="Elegant Galaxy home"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.6 6.4L21 12l-6.4 2.6L12 22l-2.6-6.4L3 12l6.4-2.6L12 2z"
                fill="#C8A951"
              />
            </svg>
            <span
              className="text-[#1d1d1f] font-semibold hidden sm:inline"
              style={{ fontSize: 15, letterSpacing: "-0.01em" }}
            >
              Elegant Galaxy
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            {NAV.map((item) => {
              const isActive = item.id === activeId;
              // dim all items when a panel is open and this one isn't the active
              const dimmed   = panelOpen && !isActive;

              const linkCls = `
                relative px-[10px] h-11 inline-flex items-center
                text-[14px] text-[#1d1d1f] whitespace-nowrap
                cursor-pointer select-none
                transition-opacity duration-150
                ${dimmed ? "opacity-35" : "opacity-90 hover:opacity-100"}
              `;

              return item.mega ? (
                <button
                  key={item.id}
                  className={linkCls}
                  onMouseEnter={() => openMega(item.id)}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className={linkCls}
                  onMouseEnter={closeMega}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop — distributor buttons + search */}
          <div className="hidden lg:flex items-center gap-2.5 ml-4" onMouseEnter={closeMega}>

            {/* Ghost glass pill */}
            <Link
              href="/distributors"
              className="relative flex items-center h-[30px] px-4 rounded-full overflow-hidden
                         whitespace-nowrap select-none transition-all duration-200
                         hover:scale-[1.03] active:scale-[0.98]"
              style={{ fontSize: 13, fontWeight: 500, color: "rgba(29,29,31,0.78)" }}
            >
              {/* glass layer */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.62)",
                  backdropFilter: "blur(12px) saturate(160%)",
                  WebkitBackdropFilter: "blur(12px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.07), 0 0 0 0.5px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
                }}
              />
              <span className="relative">Find a Distributor</span>
            </Link>

            {/* Filled glass pill — slightly more opaque */}
            <Link
              href="/distributors/apply"
              className="relative flex items-center h-[30px] px-4 rounded-full overflow-hidden
                         whitespace-nowrap select-none transition-all duration-200
                         hover:scale-[1.03] active:scale-[0.98]"
              style={{ fontSize: 13, fontWeight: 600, color: "rgba(29,29,31,0.9)" }}
            >
              {/* glass layer — denser white */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  boxShadow:
                    "0 1px 4px rgba(0,0,0,0.09), 0 0 0 0.5px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              />
              <span className="relative">Become a Distributor</span>
            </Link>

            {/* Search icon */}
            <button
              onClick={toggleSearch}
              className="flex items-center justify-center w-9 h-9 rounded-full
                         text-[#1d1d1f] opacity-70 hover:opacity-100
                         transition-opacity duration-150 ml-1"
              aria-label={searchOpen ? "Close search" : "Search"}
            >
              {searchOpen
                ? <X size={17} strokeWidth={1.75} />
                : <Search size={17} strokeWidth={1.75} />
              }
            </button>
          </div>

          {/* Mobile search */}
          <button
            onClick={toggleSearch}
            className="lg:hidden flex items-center justify-center w-10 h-11 text-[#1d1d1f] opacity-80"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.75} />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobile((o) => !o)}
            className="lg:hidden flex items-center justify-center w-10 h-11 text-[#1d1d1f] opacity-80"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>

        {/* ── Bottom border ────────────────────────────────────────────────── */}
        <div className="h-px" style={{ background: "rgba(0,0,0,0.08)" }} />

        {/* ── Mega-menu panel ──────────────────────────────────────────────── */}
        {activeMega && (
          <div onMouseEnter={cancelClose}>
            <div className="mx-auto max-w-[1024px] px-4 py-12">
              <div className="grid gap-8" style={{ gridTemplateColumns: "2fr 1.1fr 1.1fr" }}>
                {activeMega.map((col, ci) => (
                  <div key={ci}>
                    {/* Column heading */}
                    <p
                      className="mb-4 text-[#6e6e73]"
                      style={{ fontSize: 13 }}
                    >
                      {col.heading}
                    </p>

                    {/* Primary links — large bold (col 0 only) */}
                    {col.primary && (
                      <div className="flex flex-col mb-5">
                        {col.primary.map((lnk) => (
                          <Link
                            key={lnk.href}
                            href={lnk.href}
                            onClick={closeMega}
                            className="text-[#1d1d1f] font-semibold leading-snug py-[3px]
                                       hover:text-[#1d1d1f]/50 transition-colors"
                            style={{ fontSize: 24 }}
                          >
                            {lnk.label}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Regular links */}
                    <div className="flex flex-col gap-[10px]">
                      {col.links.map((lnk) => (
                        <Link
                          key={lnk.href}
                          href={lnk.href}
                          onClick={closeMega}
                          className="text-[#1d1d1f] font-semibold hover:text-[#1d1d1f]/50 transition-colors"
                          style={{ fontSize: 15 }}
                        >
                          {lnk.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
          </div>
        )}

        {/* ── Search panel ─────────────────────────────────────────────────── */}
        {searchOpen && (
          <div>
            <div className="mx-auto max-w-[1024px] px-4 pt-5 pb-10">
              {/* Input row */}
              <div className="flex items-center gap-3 mb-6 pb-px border-b border-[rgba(0,0,0,0)]">
                <Search size={20} className="text-[#6e6e73] shrink-0" strokeWidth={1.75} />
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search elegant-galaxy.com"
                  className="flex-1 bg-transparent outline-none text-[#1d1d1f] placeholder:text-[#6e6e73]"
                  style={{ fontSize: 26 }}
                  autoComplete="off"
                />
                {query && (
                  <button
                    onClick={() => { setQuery(""); searchRef.current?.focus(); }}
                    className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                  >
                    <X size={16} strokeWidth={1.75} />
                  </button>
                )}
              </div>

              {/* Quick links */}
              <p className="text-[#6e6e73] mb-4" style={{ fontSize: 13 }}>
                Quick Links
              </p>
              <div className="flex flex-col">
                {QUICK_LINKS.map((lnk) => (
                  <Link
                    key={lnk.href}
                    href={lnk.href}
                    onClick={() => setSearch(false)}
                    className="flex items-center gap-2 py-2 text-[#1d1d1f] font-semibold
                               hover:text-[#1d1d1f]/50 transition-colors group"
                    style={{ fontSize: 16 }}
                  >
                    <ArrowRight
                      size={13}
                      strokeWidth={2}
                      className="text-[#6e6e73] group-hover:translate-x-0.5 transition-transform"
                    />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
          </div>
        )}
      </header>

      {/* ── Mobile menu overlay ──────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col overflow-y-auto"
          style={{
            top: 45,   /* nav bar height + border */
            background: "rgba(245,245,247,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="px-4 py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center justify-between px-2 py-3.5
                           text-[17px] text-[#1d1d1f] border-b border-black/[0.06]
                           hover:text-[#1d1d1f]/60 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile distributor buttons */}
            <div className="flex flex-col gap-3 pt-6 pb-2">
              <Link
                href="/distributors"
                className="relative flex items-center justify-center h-11 rounded-full overflow-hidden"
                style={{ fontSize: 15, fontWeight: 500, color: "rgba(29,29,31,0.8)" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.62)",
                    backdropFilter: "blur(12px) saturate(160%)",
                    WebkitBackdropFilter: "blur(12px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)",
                  }}
                />
                <span className="relative">Find a Distributor</span>
              </Link>
              <Link
                href="/distributors/apply"
                className="relative flex items-center justify-center h-11 rounded-full overflow-hidden"
                style={{ fontSize: 15, fontWeight: 600, color: "rgba(29,29,31,0.9)" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.82)",
                    backdropFilter: "blur(16px) saturate(180%)",
                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.95)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,1)",
                  }}
                />
                <span className="relative">Become a Distributor</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

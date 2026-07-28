"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect } from "react";
import { Search, X, ArrowRight, Menu } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface QuickLink { label: string; href: string }
interface NavItem {
  id:    string;
  label: string;
  href:  string;
}

// ─── Nav data ────────────────────────────────────────────────────────────────

const NAV: NavItem[] = [
  { id: "home",              label: "Home",              href: "/" },
  { id: "led-tvs",           label: "LED TVs",           href: "/products/led-tvs" },
  { id: "remote",            label: "Remote",            href: "/products/led-tvs/remotes" },
  { id: "washing-machines",  label: "Washing Machines",  href: "/products/washing-machines" },
  { id: "air-coolers",       label: "Air Coolers",       href: "/products/air-coolers" },
  { id: "infrared-cooktops", label: "Infrared Cooktops", href: "/products/infrared-cooktops" },
  { id: "about",             label: "About",             href: "/about" },
  { id: "contact",           label: "Contact",           href: "/contact" },
  { id: "blog",              label: "Blog",              href: "/blog" },
  { id: "support",           label: "Support",           href: "/support" },
];

// Picks the single most-specific NAV item for a pathname, so a page whose
// URL is nested under another item's href (e.g. "/products/led-tvs/remotes"
// under "/products/led-tvs") only highlights the closer match, not both.
function findActiveNavId(pathname: string): string | null {
  let bestId: string | null = null;
  let bestLen = -1;
  for (const item of NAV) {
    const matches = item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`);
    if (matches && item.href.length > bestLen) {
      bestId  = item.id;
      bestLen = item.href.length;
    }
  }
  return bestId;
}

const QUICK_LINKS: QuickLink[] = [
  { label: "LED TVs",               href: "/products/led-tvs" },
  { label: "Remote",                href: "/products/led-tvs/remotes" },
  { label: "Washing Machines",      href: "/products/washing-machines" },
  { label: "Air Coolers",           href: "/products/air-coolers" },
  { label: "Infrared Cooktops",     href: "/products/infrared-cooktops" },
  { label: "Become a Distributor",  href: "/distributors/apply" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname                = usePathname();
  const activeNavId             = findActiveNavId(pathname);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchOpen, setSearch] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const [query, setQuery]       = useState("");
  const searchRef               = useRef<HTMLInputElement>(null);

  const toggleSearch = useCallback(() => {
    setSearch((prev) => {
      if (!prev) setTimeout(() => searchRef.current?.focus(), 40);
      return !prev;
    });
    setQuery("");
  }, []);

  // Escape key closes search and the mobile menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setSearch(false);
      setMobile(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Reset all interactive state on every route change
  useEffect(() => {
    setMobile(false);
    setSearch(false);
    setHoveredId(null);
    setQuery("");
  }, [pathname]);

  // ── render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 relative"
        style={{
          background: searchOpen
            ? "rgba(251,251,253,1)"
            : "rgba(245,245,247,0.88)",
          backdropFilter: searchOpen ? "none" : "blur(20px) saturate(180%)",
          WebkitBackdropFilter: searchOpen ? "none" : "blur(20px) saturate(180%)",
        }}
      >
        {/* ── Top nav bar ──────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-[1440px] px-6 flex items-center justify-between h-[50px]">

          {/* ── Logo — extreme left ───────────────────────────────────────── */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-[7px]"
            aria-label="Elegant Galaxy home"
          >
            <span className="flex items-center gap-[7px]" style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", color: "#1d1d1f" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/eg-logo.png" alt="" aria-hidden style={{ display: "block", height: 28, width: 28, objectFit: "contain" }} />
              Elegant Galaxy
            </span>
          </Link>

          {/* ── Nav links + search — middle (desktop only) ───────────────── */}
          {/* justify-between on the parent gives equal gap left and right of this element */}
          <nav
            className="hidden lg:flex items-center"
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* "Home" excluded — the logo already links to "/" */}
            {NAV.filter((item) => item.id !== "home").map((item) => {
              const isActive = item.id === activeNavId;

              // dim every item that isn't the one currently under the cursor
              const dimmed = hoveredId !== null && item.id !== hoveredId;

              const linkCls = `
                relative px-[9px] h-[50px] inline-flex items-center
                text-[14px] text-[#1d1d1f] whitespace-nowrap
                cursor-pointer select-none
                transition-opacity duration-150
                ${dimmed ? "opacity-35" : isActive ? "opacity-100" : "opacity-75 hover:opacity-100"}
              `;

              // Small pill indicator sitting on the bottom edge of the bar
              const indicator = isActive ? (
                <span
                  aria-hidden
                  style={{
                    position:        "absolute",
                    bottom:          0,
                    left:            "50%",
                    transform:       "translateX(-50%)",
                    width:           18,
                    height:          2,
                    borderRadius:    1,
                    background:      "#1d1d1f",
                  }}
                />
              ) : null;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={linkCls}
                  onMouseEnter={() => { setSearch(false); setHoveredId(item.id); }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {indicator}
                </Link>
              );
            })}

            {/* Search icon — also participates in the fade-others effect */}
            <button
              onClick={toggleSearch}
              onMouseEnter={() => setHoveredId("__search__")}
              className={`flex items-center justify-center w-9 h-9 rounded-full
                         text-[#1d1d1f] transition-opacity duration-150 ml-1
                         ${hoveredId !== null && hoveredId !== "__search__"
                           ? "opacity-35"
                           : "opacity-70 hover:opacity-100"}`}
              aria-label={searchOpen ? "Close search" : "Search"}
            >
              {searchOpen
                ? <X size={17} strokeWidth={1.75} />
                : <Search size={17} strokeWidth={1.75} />
              }
            </button>
          </nav>

          {/* ── Right side — buttons (desktop) + controls (mobile) ────────── */}
          <div className="flex items-center gap-2.5">

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-2.5">

              {/* Solid blue pill */}
              <Link
                href="/distributors/apply"
                className="flex items-center h-[30px] px-4 rounded-full
                           whitespace-nowrap select-none transition-all duration-200
                           hover:brightness-110"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "#0071e3",
                }}
              >
                Become a Distributor
              </Link>
            </div>

            {/* Mobile controls */}
            <button
              onClick={toggleSearch}
              className="lg:hidden flex items-center justify-center w-10 h-[50px] text-[#1d1d1f] opacity-80"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.75} />
            </button>
            <button
              onClick={() => setMobile((o) => !o)}
              className="lg:hidden flex items-center justify-center w-10 h-[50px] text-[#1d1d1f] opacity-80"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
            </button>
          </div>

        </div>

        {/* ── Bottom border ────────────────────────────────────────────────── */}
        <div className="h-px" style={{ background: "rgba(0,0,0,0.08)" }} />

        {/* ── Search panel — always mounted, fades in/out via CSS transition ─── */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "100%",
            zIndex: 50,
            background: "rgba(251,251,253,1)",
            opacity:   searchOpen ? 1 : 0,
            transform: searchOpen ? "translateY(0)" : "translateY(-6px)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
            pointerEvents: searchOpen ? "auto" : "none",
          }}
        >
          <div className="mx-auto max-w-[1440px] px-6 pt-5 pb-10">
            <div className="flex items-center gap-3 mb-6 pb-px border-b border-[rgba(0,0,0,0)]">
              <Search size={20} className="text-[#6e6e73] shrink-0" strokeWidth={1.75} />
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Elegant Galaxy"
                className="flex-1 min-w-0 bg-transparent text-[#1d1d1f] placeholder:text-[#6e6e73] outline-none"
                style={{ fontSize: 26 }}
                autoComplete="off"
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); searchRef.current?.focus(); }}
                  aria-label="Clear search"
                  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                >
                  <X size={16} strokeWidth={1.75} />
                </button>
              )}
            </div>

            <p className="text-[#6e6e73] mb-4" style={{ fontSize: 13 }}>
              Quick Links
            </p>
            <div className="flex flex-col">
              {QUICK_LINKS.map((lnk) => (
                <Link
                  key={lnk.href}
                  href={lnk.href}
                  onClick={() => setSearch(false)}
                  aria-current={pathname === lnk.href ? "page" : undefined}
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
      </header>

      {/* ── Page blur backdrop — always mounted, fades in/out via CSS transition ── */}
      <div
        className="fixed inset-0 z-40"
        style={{
          top: 51, /* nav bar (50px) + border (1px) */
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(0,0,0,0.12)",
          opacity:     searchOpen ? 1 : 0,
          transition:  "opacity 0.22s ease",
          pointerEvents: searchOpen ? "auto" : "none",
        }}
        onClick={() => setSearch(false)}
      />

      {/* ── Mobile menu overlay ──────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col overflow-y-auto"
          style={{
            top: 51,   /* nav bar height + border */
            background: "rgba(245,245,247,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div
            className="px-6 pt-6 flex flex-col"
            style={{ paddingBottom: "max(28px, env(safe-area-inset-bottom))" }}
          >
            {NAV.map((item) => {
              const isActive = item.id === activeNavId;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`py-2.5 text-[20px] font-bold tracking-tight transition-colors
                             ${isActive ? "text-[#0071e3]" : "text-[#1d1d1f] active:text-[#1d1d1f]/60"}`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile distributor CTA */}
            <Link
              href="/distributors/apply"
              className="w-full flex items-center justify-center h-12 rounded-full mt-6"
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#ffffff",
                background: "#0071e3",
              }}
            >
              Become a Distributor
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { Search, X, ArrowRight, Menu, ChevronDown } from "lucide-react";

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
          { label: "Android TV",           href: "/products/led-tvs/android" },
          { label: "WebOS 4K",             href: "/products/led-tvs/webos-4k" },
          { label: "WebOS 2K",             href: "/products/led-tvs/webos-2k" },
          { label: "Google TV",            href: "/products/led-tvs/google" },
          { label: "Interactive Smart Board", href: "/products/led-tvs/smart-board" },
          { label: "Distro",               href: "/products/led-tvs/distro" },
          { label: "Frameless Smart",      href: "/products/led-tvs/frameless-smart" },
          { label: "Frameless Normal",     href: "/products/led-tvs/frameless-normal" },
        ],
        links: [],
      },
      {
        heading: "Shop LED TVs",
        links: [
          { label: "Shop LED TVs",         href: "/products/led-tvs" },
          { label: "TV Accessories",       href: "/products/led-tvs/accessories" },
        ],
      },
      {
        heading: "More from LED TVs",
        links: [
          { label: "TV Support",           href: "/support?category=led-tvs" },
          { label: "Warranty",             href: "/support/warranty" },
          { label: "Contact Us",      href: "/contact" },
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
          { label: "Front Load",                   href: "/products/washing-machines?type=front-load" },
          { label: "Top Load",                     href: "/products/washing-machines?type=top-load" },
          { label: "Semi-Automatic",               href: "/products/washing-machines?type=semi-automatic" },
        ],
        links: [],
      },
      {
        heading: "Shop Washing Machines",
        links: [
          { label: "Shop Washing Machines",        href: "/products/washing-machines" },
          { label: "Accessories",                  href: "/products/washing-machines/accessories" },
        ],
      },
      {
        heading: "More from Washing Machines",
        links: [
          { label: "Washing Machine Support",      href: "/support?category=washing-machines" },
          { label: "Warranty",                     href: "/support/warranty" },
          { label: "Contact Us",              href: "/contact" },
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
          { label: "Commercial Coolers",      href: "/products/air-coolers?type=commercial" },
          { label: "Desert Coolers",          href: "/products/air-coolers?type=desert" },
        ],
        links: [],
      },
      {
        heading: "Shop Air Coolers",
        links: [
          { label: "Shop Air Coolers",        href: "/products/air-coolers" },
          { label: "Accessories",             href: "/products/air-coolers/accessories" },
        ],
      },
      {
        heading: "More from Air Coolers",
        links: [
          { label: "Air Cooler Support",      href: "/support?category=air-coolers" },
          { label: "Warranty",                href: "/support/warranty" },
          { label: "Contact Us",         href: "/contact" },
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
          { label: "Single Burner",           href: "/products/infrared-cooktops?burners=single-burner" },
          { label: "Double Burner",           href: "/products/infrared-cooktops?burners=double-burner" },
        ],
        links: [
          { label: "Why Infrared?",           href: "/products/infrared-cooktops/why-infrared" },
        ],
      },
      {
        heading: "Shop Infrared Cooktops",
        links: [
          { label: "Shop Cooktops",           href: "/products/infrared-cooktops" },
          { label: "Accessories",             href: "/products/infrared-cooktops/accessories" },
        ],
      },
      {
        heading: "More from Infrared Cooktops",
        links: [
          { label: "Cooktop Support",         href: "/support?category=infrared-cooktops" },
          { label: "Warranty",                href: "/support/warranty" },
          { label: "Contact Us",         href: "/contact" },
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
  { label: "LED TVs",               href: "/products/led-tvs" },
  { label: "Washing Machines",      href: "/products/washing-machines" },
  { label: "Air Coolers",           href: "/products/air-coolers" },
  { label: "Infrared Cooktops",     href: "/products/infrared-cooktops" },
  { label: "Become a Distributor",  href: "/distributors/apply" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname                = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchOpen, setSearch] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);
  const [query, setQuery]       = useState("");
  const closeTimer              = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRef               = useRef<HTMLInputElement>(null);

  // ── Keyboard navigation refs ──────────────────────────────────────────────
  // triggerRef  — stores the nav button that opened the current mega menu so
  //               Escape can return focus to it.
  // activeIdRef — stable snapshot of activeId for the document-level Escape
  //               handler (avoids stale closure without adding a dependency).
  const triggerRef              = useRef<HTMLElement | null>(null);
  const activeIdRef             = useRef<string | null>(null);

  // Declared before callbacks so TypeScript can see them in scope.
  // (useRef returns a stable object; callbacks read .current at call time.)
  const megaPanelRef            = useRef<HTMLDivElement>(null);
  const megaInnerRef            = useRef<HTMLDivElement>(null);

  // ── helpers ──────────────────────────────────────────────────────────────

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleMegaClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setActiveId(null);
      setSearch(false);
    }, 180);
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

  const openSearch = useCallback(() => {
    cancelClose();
    closeMega();
    setSearch((prev) => {
      if (!prev) setTimeout(() => searchRef.current?.focus(), 40);
      return true;
    });
  }, [cancelClose, closeMega]);

  // ── Keyboard navigation helpers ───────────────────────────────────────────

  /**
   * Open a mega menu triggered by keyboard and focus the first link inside it
   * (or the last link when focusLast=true, i.e. ArrowUp on the trigger).
   * Saves the trigger element so Escape can return focus to it later.
   */
  const openMegaFromKeyboard = useCallback((
    id:       string,
    el:       HTMLElement,
    focusLast = false,
  ) => {
    cancelClose();
    setSearch(false);
    setActiveId(id);
    triggerRef.current = el;
    // rAF waits for the panel to become non-inert and visible before focusing.
    requestAnimationFrame(() => {
      const links = megaInnerRef.current?.querySelectorAll<HTMLElement>("a[href]");
      if (!links?.length) return;
      (focusLast ? links[links.length - 1] : links[0]).focus();
    });
  }, [cancelClose]);

  /** Close the mega menu and return keyboard focus to the button that opened it. */
  const closeMegaReturnFocus = useCallback(() => {
    cancelClose();
    setActiveId(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, [cancelClose]);

  /**
   * Keydown handler attached to the mega panel container.
   *
   * ArrowDown / ArrowUp — cycle focus through all <a> links in the panel.
   * Escape             — close panel and return focus to the trigger button.
   *
   * Tab is intentionally NOT intercepted: the browser's natural tab order
   * moves through links, and the onBlur handler on the panel closes it when
   * focus eventually leaves.
   */
  const handleMegaKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!megaInnerRef.current) return;
    const links = Array.from(
      megaInnerRef.current.querySelectorAll<HTMLElement>("a[href]")
    );
    if (!links.length) return;
    const idx = links.indexOf(document.activeElement as HTMLElement);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        links[(idx + 1) % links.length].focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        links[(idx - 1 + links.length) % links.length].focus();
        break;
      case "Escape":
        // stopPropagation prevents the document-level handler from also
        // firing and attempting a second focus-restoration.
        e.stopPropagation();
        closeMegaReturnFocus();
        break;
    }
  }, [closeMegaReturnFocus]);

  // ── effects ──────────────────────────────────────────────────────────────

  // Keep activeIdRef current so the document-level Escape handler can read
  // the latest value without a stale closure.
  useEffect(() => { activeIdRef.current = activeId; }, [activeId]);

  // Escape key closes everything. If a mega was opened via keyboard, return
  // focus to its trigger button so the user's position is preserved.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setSearch(false);
      setMobile(false);
      setMobileExpandedId(null);
      setActiveId(null);
      if (activeIdRef.current) {
        triggerRef.current?.focus();
        triggerRef.current = null;
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Reset all interactive state on every route change
  useEffect(() => {
    setMobile(false);
    setMobileExpandedId(null);
    setActiveId(null);
    setSearch(false);
    setHoveredId(null);
    setQuery("");
  }, [pathname]);

  // Keep the mega panel inert (invisible to the keyboard and assistive tech)
  // while it is closed so Tab cannot accidentally land on links inside a
  // visually-hidden menu.
  useEffect(() => {
    const panel = megaPanelRef.current;
    if (!panel) return;
    if (activeId) {
      panel.removeAttribute("inert");
    } else {
      panel.setAttribute("inert", "");
    }
  }, [activeId]);

  const activeMega = NAV.find((n) => n.id === activeId)?.mega ?? null;
  const panelOpen  = !!activeMega || searchOpen;

  // Keep last known mega content around so the exit animation has something to fade out
  const lastMegaRef = useRef<MegaColumn[] | null>(null);
  if (activeMega) lastMegaRef.current = activeMega;
  const displayMega = activeMega ?? lastMegaRef.current;

  // Runs synchronously after every render — reads the new content height and
  // updates the outer panel's explicit height so the CSS transition can animate it.
  useLayoutEffect(() => {
    const panel = megaPanelRef.current;
    const inner = megaInnerRef.current;
    if (!panel || !inner) return;
    panel.style.height = activeMega ? `${inner.scrollHeight}px` : "0px";
  }, [activeMega]);

  // ── render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 relative"
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
        {/*
          The nav is position:absolute so it centres in the full container width
          completely independently of the logo or button sizes.
          Logo and buttons stay in normal flow (z-10) and never compete.
        */}
        <div className="mx-auto max-w-[1440px] px-6 flex items-center justify-between h-11">

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
            onMouseLeave={() => { scheduleMegaClose(); setHoveredId(null); }}
            onMouseEnter={cancelClose}
          >
            {/* "Home" excluded — the logo already links to "/" */}
            {NAV.filter((item) => item.id !== "home").map((item) => {
              // Active when the current URL matches this item's section.
              // "/" is exact-only; everything else prefix-matches so sub-pages
              // (e.g. /blog/some-post) keep the "Blog" link highlighted.
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              // dim every item that isn't the one currently under the cursor
              const dimmed = hoveredId !== null && item.id !== hoveredId;

              const linkCls = `
                relative px-[9px] h-11 inline-flex items-center
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

              return item.mega ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className={linkCls}
                  onMouseEnter={() => { openMega(item.id); setHoveredId(item.id); }}
                  onClick={closeMega}
                  onKeyDown={(e) => {
                    // ↓ → open mega and focus first link (Enter/Space navigate normally)
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      openMegaFromKeyboard(item.id, e.currentTarget);
                    }
                    // ↑ → open mega and focus last link (reverse navigation)
                    else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      openMegaFromKeyboard(item.id, e.currentTarget, true);
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={activeId === item.id}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {indicator}
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className={linkCls}
                  onMouseEnter={() => { closeMega(); setHoveredId(item.id); }}
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
              onMouseEnter={() => { openSearch(); setHoveredId("__search__"); }}
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
            <div className="hidden lg:flex items-center gap-2.5" onMouseEnter={closeMega}>

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
              className="lg:hidden flex items-center justify-center w-10 h-11 text-[#1d1d1f] opacity-80"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.75} />
            </button>
            <button
              onClick={() => { setMobile((o) => !o); setMobileExpandedId(null); }}
              className="lg:hidden flex items-center justify-center w-10 h-11 text-[#1d1d1f] opacity-80"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
            </button>
          </div>

        </div>

        {/* ── Bottom border ────────────────────────────────────────────────── */}
        <div className="h-px" style={{ background: "rgba(0,0,0,0.08)" }} />

        {/* ── Mega-menu panel — always mounted, fades in/out via CSS transition ── */}
        <div
          ref={megaPanelRef}
          className="absolute left-0 right-0 overflow-hidden"
          onKeyDown={handleMegaKeyDown}
          onBlur={(e) => {
            // Close the mega when keyboard focus leaves the panel entirely
            // (relatedTarget is the element receiving focus; null means focus
            // moved outside the document — also a reason to close).
            if (!megaPanelRef.current?.contains(e.relatedTarget as Node | null)) {
              closeMega();
            }
          }}
          style={{
            top: "100%",
            zIndex: 50,
            background: "rgba(251,251,253,1)",
            height: 0,  /* JS-managed; useLayoutEffect animates this */
            opacity:   activeMega ? 1 : 0,
            transform: activeMega ? "translateY(0)" : "translateY(-6px)",
            transition: "height 0.28s ease, opacity 0.22s ease, transform 0.22s ease",
            pointerEvents: activeMega ? "auto" : "none",
          }}
          onMouseEnter={cancelClose}
        >
          {/* inner ref is what useLayoutEffect measures for scrollHeight */}
          <div ref={megaInnerRef}>
          {displayMega && (
            <>
              <div className="mx-auto max-w-[1440px] px-6 py-12">
                <div className="grid gap-8" style={{ gridTemplateColumns: "2fr 1.1fr 1.1fr" }}>
                  {displayMega.map((col, ci) => (
                    <div key={ci}>
                      <p className="mb-4 text-[#6e6e73]" style={{ fontSize: 13 }}>
                        {col.heading}
                      </p>

                      {col.primary && (
                        <div className="flex flex-col mb-5">
                          {col.primary.map((lnk) => (
                            <Link
                              key={lnk.href}
                              href={lnk.href}
                              onClick={closeMega}
                              aria-current={pathname === lnk.href ? "page" : undefined}
                              className="text-[#1d1d1f] font-semibold leading-snug py-[3px]
                                         hover:text-[#1d1d1f]/50 transition-colors"
                              style={{ fontSize: 24 }}
                            >
                              {lnk.label}
                            </Link>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col gap-[10px]">
                        {col.links.map((lnk) => (
                          <Link
                            key={lnk.href}
                            href={lnk.href}
                            onClick={closeMega}
                            aria-current={pathname === lnk.href ? "page" : undefined}
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
            </>
          )}
          </div>{/* end megaInnerRef */}
        </div>

        {/* ── Search panel — always mounted, fades in/out via CSS transition ─── */}
        <div
          className="absolute left-0 right-0"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleMegaClose}
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
                className="flex-1 min-w-0 bg-transparent text-[#1d1d1f] placeholder:text-[#6e6e73]"
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
          top: 45, /* nav bar (44px) + border (1px) */
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(0,0,0,0.12)",
          opacity:     panelOpen ? 1 : 0,
          transition:  "opacity 0.22s ease",
          pointerEvents: panelOpen ? "auto" : "none",
        }}
        onClick={() => { setActiveId(null); setSearch(false); }}
      />

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
          <div
            className="px-6 pt-6 flex flex-col"
            style={{ paddingBottom: "max(28px, env(safe-area-inset-bottom))" }}
          >
            {NAV.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const isExpanded = mobileExpandedId === item.id;

              // Only the first column's "primary" links (the actual model-type
              // navigation) — the support/warranty/contact "links" columns are
              // secondary utility links already reachable elsewhere and just
              // clutter the mobile accordion.
              const subLinks = item.mega?.flatMap((col) => col.primary ?? []);

              if (!item.mega) {
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
              }

              return (
                <div key={item.id}>
                  <button
                    onClick={() => setMobileExpandedId(isExpanded ? null : item.id)}
                    aria-expanded={isExpanded}
                    className={`w-full flex items-center justify-between py-2.5 text-[20px] font-bold tracking-tight
                               ${isActive ? "text-[#0071e3]" : "text-[#1d1d1f]"}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      strokeWidth={2.25}
                      className="shrink-0 transition-transform duration-200"
                      style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {/* Accordion panel */}
                  <div
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                    style={{ maxHeight: isExpanded ? subLinks!.length * 40 + 24 : 0 }}
                  >
                    <div className="flex flex-col pb-3 pl-1">
                      {subLinks!.map((lnk, i) => (
                        <Link
                          key={lnk.href}
                          href={lnk.href}
                          className={i === 0
                            ? "py-1.5 text-[14px] font-semibold text-[#0071e3]"
                            : "py-1.5 text-[14px] text-[#6e6e73]"}
                        >
                          {lnk.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
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

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { Search, X, ArrowRight, Tv, WashingMachine, Wind, Flame, FileText, HelpCircle } from "lucide-react";
import { searchData, CATEGORY_ORDER, type SearchItem } from "@/data/searchData";

// ── icons per category/item ─────────────────────────────────────────────────
const CATEGORY_ICONS: Record<SearchItem["category"], React.ReactNode> = {
  Products: <Tv size={13} className="text-[#C8A951]" />,
  Pages: <FileText size={13} className="text-[#0F1B3D]/50" />,
  Support: <HelpCircle size={13} className="text-[#0F1B3D]/50" />,
};

function itemIcon(item: SearchItem) {
  if (item.href.includes("led-tvs")) return <Tv size={15} className="text-[#C8A951] shrink-0" />;
  if (item.href.includes("washing")) return <WashingMachine size={15} className="text-[#C8A951] shrink-0" />;
  if (item.href.includes("air-coolers")) return <Wind size={15} className="text-[#C8A951] shrink-0" />;
  if (item.href.includes("cooktops")) return <Flame size={15} className="text-[#C8A951] shrink-0" />;
  if (item.category === "Support") return <HelpCircle size={15} className="text-[#0F1B3D]/40 shrink-0" />;
  return <FileText size={15} className="text-[#0F1B3D]/40 shrink-0" />;
}

// ── scoring / matching ───────────────────────────────────────────────────────
function score(item: SearchItem, q: string): number {
  const lower = q.toLowerCase().trim();
  if (!lower) return 0;
  const fields = [
    item.name.toLowerCase(),
    item.description.toLowerCase(),
    ...(item.keywords ?? []),
  ];
  // Exact name match
  if (item.name.toLowerCase() === lower) return 100;
  // Name starts with
  if (item.name.toLowerCase().startsWith(lower)) return 80;
  // Name contains
  if (item.name.toLowerCase().includes(lower)) return 60;
  // Description contains
  if (item.description.toLowerCase().includes(lower)) return 40;
  // Any keyword matches
  if (fields.some((f) => f.includes(lower))) return 20;
  return 0;
}

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-[#C8A951]/25 text-[#0F1B3D] rounded-[2px]">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

// ── suggested items shown when focused but empty ─────────────────────────────
const SUGGESTED_IDS = [1, 4, 7, 10, 17]; // top-level product + support page

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Build results
  const results: SearchItem[] = query.trim().length < 2
    ? searchData.filter((d) => SUGGESTED_IDS.includes(d.id))
    : searchData
        .map((item) => ({ item, s: score(item, query) }))
        .filter(({ s }) => s > 0)
        .sort((a, b) => b.s - a.s)
        .map(({ item }) => item);

  // Group by category preserving CATEGORY_ORDER
  const grouped: Partial<Record<SearchItem["category"], SearchItem[]>> = {};
  for (const cat of CATEGORY_ORDER) {
    const items = results.filter((r) => r.category === cat);
    if (items.length) grouped[cat] = items;
  }

  // Flat list for keyboard nav
  const flat = results;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, -1));
      } else if (e.key === "Enter") {
        if (activeIdx >= 0 && flat[activeIdx]) {
          router.push(flat[activeIdx].href);
          setOpen(false);
          setQuery("");
        }
      } else if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    },
    [open, flat, activeIdx, router]
  );

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Reset active on query change
  useEffect(() => setActiveIdx(-1), [query]);

  const isEmpty = Object.keys(grouped).length === 0;
  const isSuggested = query.trim().length < 2;

  return (
    <section className="w-full bg-[#f5f5f7] border-b border-[#e8e8ed] py-5 px-4">
      <div className="relative mx-auto max-w-2xl">
        {/* Input */}
        <div className="relative flex items-center">
          <Search
            size={16}
            className="absolute left-4 text-[#0F1B3D]/40 pointer-events-none"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search products, support, and more…"
            className="
              w-full h-11 pl-10 pr-10 rounded-full
              bg-white border border-black/10 shadow-sm
              text-[14px] text-[#0F1B3D] placeholder:text-[#0F1B3D]/35
              outline-none focus:border-[#C8A951] focus:ring-2 focus:ring-[#C8A951]/20
              transition
            "
            aria-autocomplete="list"
            aria-expanded={open}
            autoComplete="off"
          />
          {query && (
            <button
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="absolute right-4 text-[#0F1B3D]/40 hover:text-[#0F1B3D] transition-colors"
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Dropdown */}
        {open && (
          <div
            ref={dropdownRef}
            className="
              absolute left-0 right-0 mt-2 rounded-2xl
              bg-white border border-black/8 shadow-xl
              overflow-hidden z-40
            "
          >
            {isEmpty && query.trim().length >= 2 ? (
              <p className="px-5 py-4 text-[13px] text-[#0F1B3D]/50">
                No results for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <>
                {isSuggested && (
                  <p className="px-5 pt-3.5 pb-1 text-[11px] font-semibold uppercase tracking-widest text-[#0F1B3D]/35">
                    Suggested
                  </p>
                )}

                {(Object.entries(grouped) as [SearchItem["category"], SearchItem[]][]).map(
                  ([cat, items]) => {
                    return (
                      <div key={cat}>
                        {/* Category header — only show when searching */}
                        {!isSuggested && (
                          <div className="flex items-center gap-1.5 px-5 pt-3.5 pb-1">
                            {CATEGORY_ICONS[cat]}
                            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0F1B3D]/35">
                              {cat}
                            </span>
                          </div>
                        )}

                        {items.map((item) => {
                          const idx = flat.indexOf(item);
                          const isActive = idx === activeIdx;
                          return (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => { setOpen(false); setQuery(""); }}
                              onMouseEnter={() => setActiveIdx(idx)}
                              className={`
                                flex items-center gap-3 px-5 py-2.5 transition-colors
                                ${isActive ? "bg-[#C8A951]/10" : "hover:bg-black/[0.03]"}
                              `}
                            >
                              {itemIcon(item)}
                              <div className="flex-1 min-w-0">
                                <p className="text-[13px] font-medium text-[#0F1B3D] truncate">
                                  {highlight(item.name, query)}
                                </p>
                                <p className="text-[12px] text-[#0F1B3D]/45 truncate">
                                  {highlight(item.description, query)}
                                </p>
                              </div>
                              <ArrowRight
                                size={13}
                                className={`shrink-0 transition-opacity ${
                                  isActive ? "opacity-60" : "opacity-0"
                                } text-[#0F1B3D]`}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    );
                  }
                )}

                {/* Footer hint */}
                <div className="px-5 py-2.5 border-t border-black/5 flex items-center gap-3 text-[11px] text-[#0F1B3D]/30">
                  <span>↑↓ navigate</span>
                  <span>↵ open</span>
                  <span>esc close</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use",   href: "/legal/terms"   },
  { label: "Cookie Policy",  href: "/legal/cookies" },
];

export default function LegalNav() {
  const pathname = usePathname();

  return (
    // On mobile: horizontal pill row. On md+: vertical column (sidebar).
    <nav className="flex flex-row md:flex-col gap-1.5 md:gap-0.5">
      <p className="hidden md:block" style={{
        fontSize:      10,
        fontWeight:    700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color:         "#6e6e73",
        marginBottom:  10,
      }}>
        Legal
      </p>
      {LINKS.map(({ label, href }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              display:        "block",
              padding:        "9px 14px",
              borderRadius:   10,
              fontSize:       14,
              fontWeight:     active ? 600 : 400,
              color:          active ? "#1d1d1f" : "#6e6e73",
              background:     active ? "#f5f5f7" : "transparent",
              textDecoration: "none",
              transition:     "background 0.15s ease, color 0.15s ease",
              whiteSpace:     "nowrap",
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

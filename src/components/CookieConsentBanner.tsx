"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_KEY, setConsent, type ConsentValue } from "@/lib/consent";

/**
 * Cookie consent banner — shown once until the user accepts or rejects.
 *
 * DPDP Act 2023 compliance notes:
 *  • Analytics cookies are not set until the user explicitly accepts.
 *  • Accept and Reject are equally accessible — no dark patterns.
 *  • Consent is stored in localStorage under CONSENT_KEY ("eg_cookie_consent").
 *  • Clearing browser data resets consent and re-shows the banner — correct behaviour.
 */
export default function CookieConsentBanner() {
  // mounted: true once we've read localStorage (avoids SSR/hydration mismatch)
  const [mounted,    setMounted]    = useState(false);
  // show: whether the banner is in the DOM at all
  const [show,       setShow]       = useState(false);
  // dismissing: true during the exit animation; triggers CSS transition
  const [dismissing, setDismissing] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem(CONSENT_KEY)) {
      setShow(true);
    }
  }, []);

  // Nothing until we know the consent state — prevents a flash on returning visits
  if (!mounted || !show) return null;

  function dismiss(decision: ConsentValue) {
    setConsent(decision);
    setDismissing(true);
    // DOM removal is handled by onTransitionEnd — no setTimeout needed
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      onTransitionEnd={(e) => {
        // onTransitionEnd fires once per animated property; guard to opacity only
        // so setShow(false) is called exactly once.
        if (e.propertyName === "opacity" && dismissing) setShow(false);
      }}
      style={{
        position:   "fixed",
        bottom:     0,
        left:       0,
        right:      0,
        zIndex:     90,
        background: "#1d1d1f",
        borderTop:  "1px solid rgba(255,255,255,0.09)",
        // ── Fast exit: 150 ms so the hide feels instant but still polished ──
        opacity:    dismissing ? 0 : 1,
        transform:  dismissing ? "translateY(10px)" : "translateY(0)",
        transition: "opacity 0.15s ease, transform 0.15s ease",
      }}
    >
      <div
        className="mx-auto max-w-[1440px] px-8"
        style={{
          paddingTop:     14,
          paddingBottom:  14,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          gap:            24,
          flexWrap:       "wrap",
        }}
      >
        {/* ── Description ─────────────────────────────────────────────────── */}
        <p style={{
          flex:      1,
          minWidth:  220,
          fontSize:  13,
          lineHeight: 1.6,
          color:     "rgba(245,245,247,0.55)",
          margin:    0,
        }}>
          We use analytics cookies to understand how visitors use this site.
          You can accept or reject non-essential cookies.{" "}
          <Link
            href="/legal/cookies"
            style={{
              color:          "rgba(245,245,247,0.75)",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Cookie Policy
          </Link>
        </p>

        {/* ── Buttons ─────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          {/* Reject — ghost, intentionally same visual weight as Accept */}
          <button
            onClick={() => dismiss("rejected")}
            style={{
              padding:      "8px 20px",
              borderRadius: 980,
              fontSize:     13,
              fontWeight:   500,
              background:   "transparent",
              border:       "1.5px solid rgba(255,255,255,0.18)",
              color:        "rgba(245,245,247,0.65)",
              cursor:       "pointer",
              whiteSpace:   "nowrap",
            }}
          >
            Reject
          </button>

          {/* Accept — primary */}
          <button
            onClick={() => dismiss("accepted")}
            style={{
              padding:      "8px 20px",
              borderRadius: 980,
              fontSize:     13,
              fontWeight:   600,
              background:   "#0071e3",
              border:       "none",
              color:        "#fff",
              cursor:       "pointer",
              whiteSpace:   "nowrap",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

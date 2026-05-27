/**
 * Cookie consent helpers — shared across the banner and any analytics loader.
 *
 * Consent is stored in localStorage under CONSENT_KEY.
 * Value is "accepted" | "rejected" (absent = not yet decided).
 *
 * Usage in an analytics loader:
 *   import { getConsent } from "@/lib/consent";
 *   if (getConsent() === "accepted") { ... load GA ... }
 */

export const CONSENT_KEY = "eg_cookie_consent";

export type ConsentValue = "accepted" | "rejected";

/** Returns the stored decision, or null if the user hasn't decided yet. */
export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "accepted" || v === "rejected") return v;
  return null;
}

/** Stores a consent decision. */
export function setConsent(value: ConsentValue): void {
  localStorage.setItem(CONSENT_KEY, value);
}

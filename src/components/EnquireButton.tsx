"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { Phone, FileText, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const PHONE         = "+919540064444";
const PHONE_DISPLAY = "+91 95400 64444";
const WA_BASE       = "https://wa.me/+919540064444";

/**
 * Generic enquire modal (WhatsApp / Call / Contact form) for product names
 * that don't need a dedicated per-product modal with extra details (size,
 * capacity, etc). The contact-form link pre-fills the message via `?enquire=`.
 */
function GenericEnquireModal({ product, onClose }: { product: string; onClose: () => void }) {
  const text    = `Hi, I'm interested in the ${product}. Could you share more details?`;
  const waUrl   = `${WA_BASE}?text=${encodeURIComponent(text)}`;
  const formUrl = `/contact?enquire=${encodeURIComponent(product)}`;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.52)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={onClose}
    >
      <div
        style={{ background: "#fff", borderRadius: 20, padding: "32px 28px 28px", width: "100%", maxWidth: 400, position: "relative" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: "none", cursor: "pointer", color: "#6e6e73", padding: 4, lineHeight: 0 }}>
          <X size={18} strokeWidth={1.75} />
        </button>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6e6e73", marginBottom: 8 }}>Enquire About</p>
        <p style={{ fontSize: 20, fontWeight: 700, color: "#1d1d1f", marginBottom: 28, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
          {product}
        </p>

        <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: "#25D366", color: "#fff", textDecoration: "none", marginBottom: 10 }}>
          <WhatsAppIcon size={20} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>WhatsApp Us</div>
            <div style={{ fontSize: 12, opacity: 0.88, marginTop: 1 }}>Quick reply during business hours</div>
          </div>
        </a>

        <a href={`tel:${PHONE}`} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: "#0071e3", color: "#fff", textDecoration: "none", marginBottom: 10 }}>
          <Phone size={20} strokeWidth={2} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Call Us</div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 1 }}>{PHONE_DISPLAY} &middot; Mon–Sat, 9 AM–6 PM</div>
          </div>
        </a>

        <Link href={formUrl} onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, border: "1.5px solid rgba(0,0,0,0.12)", color: "#1d1d1f", textDecoration: "none" }}>
          <FileText size={20} strokeWidth={1.75} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Contact Form</div>
            <div style={{ fontSize: 12, color: "#6e6e73", marginTop: 1 }}>Send us a detailed message</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

/**
 * Drop-in replacement for a plain "Enquire" link — renders a button styled
 * via `style`/`className` that opens the WhatsApp/Call/Form popup instead of
 * navigating straight to the contact page.
 */
export default function EnquireButton({
  product,
  children = "Enquire",
  style,
  className,
}: {
  /** Product name shown in the modal and pre-filled into the contact form. */
  product:    string;
  children?:  ReactNode;
  style?:     CSSProperties;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={{ cursor: "pointer", ...style }}>
        {children}
      </button>
      {open && <GenericEnquireModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}

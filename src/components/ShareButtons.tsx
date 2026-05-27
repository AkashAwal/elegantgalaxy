"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

// ── Inline brand SVGs (not in lucide) ────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface ShareButtonsProps {
  /** Canonical URL to share — pass the full https:// URL from the server component */
  url: string;
  /** Post / article title — pre-fills the share text */
  title: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback for browsers that block clipboard without a user gesture
      const el = document.createElement("input");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  const waHref = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`;
  const xHref  = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  // Base pill style shared by all three buttons
  const base: React.CSSProperties = {
    display:        "inline-flex",
    alignItems:     "center",
    gap:            7,
    padding:        "8px 16px",
    borderRadius:   980,
    fontSize:       13,
    fontWeight:     500,
    cursor:         "pointer",
    textDecoration: "none",
    border:         "1.5px solid #e8e8ed",
    background:     "#fafafa",
    transition:     "background 0.15s ease, border-color 0.15s ease, color 0.15s ease",
    whiteSpace:     "nowrap" as const,
  };

  return (
    <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(0,0,0,0.07)" }}>

      <p style={{
        fontSize:      11,
        fontWeight:    600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color:         "#6e6e73",
        marginBottom:  14,
      }}>
        Share this article
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>

        {/* WhatsApp */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          style={{ ...base, color: "#25d366" }}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>

        {/* X / Twitter */}
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          style={{ ...base, color: "#1d1d1f" }}
        >
          <XIcon />
          Post on X
        </a>

        {/* Copy link */}
        <button
          onClick={copyLink}
          aria-label="Copy link"
          style={{
            ...base,
            ...(copied
              ? { background: "#f0fdf4", border: "1.5px solid #bbf7d0", color: "#16a34a" }
              : { color: "#6e6e73" }),
          }}
        >
          {copied
            ? <Check size={14} strokeWidth={2.5} />
            : <LinkIcon size={14} strokeWidth={2} />
          }
          {copied ? "Copied!" : "Copy link"}
        </button>

      </div>
    </div>
  );
}

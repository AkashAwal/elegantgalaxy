"use client";

import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

// ── FAQs ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How quickly do you respond?",
    a: "Our sales team responds almost instantly during business hours. Customer care typically replies within a few hours, Mon–Sat, 9 AM – 6 PM IST.",
  },
  {
    q: "What warranty do Elegant Galaxy products carry?",
    a: "All products come with a comprehensive 2-year manufacturer warranty covering manufacturing defects and component failures.",
  },
  {
    q: "Do you offer no-cost EMI?",
    a: "Yes - split your purchase into 3, 6, 9, or 12 monthly instalments across all major banks and credit cards at zero extra cost.",
  },
  {
    q: "Do you offer free installation?",
    a: "Free expert installation is included with all large appliances including LED TVs and Washing Machines.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day hassle-free return policy on all products. Contact us and we'll arrange pickup and a full refund.",
  },
];

// Exact same FAQ item style as the homepage FAQSection
function FAQItem({ q, a, open, onToggle, idx }: { q: string; a: string; open: boolean; onToggle: () => void; idx: number }) {
  const triggerId = `contact-faq-trigger-${idx}`;
  const panelId   = `contact-faq-panel-${idx}`;

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <button
        id={triggerId}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 20,
          padding: "20px 0", background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15.5, fontWeight: 500, color: "#1d1d1f", letterSpacing: "-0.01em", lineHeight: 1.4 }}>
          {q}
        </span>
        <span aria-hidden style={{
          flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
          background: open ? "#0071e3" : "#e8e8ed",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s ease",
        }}>
          {open
            ? <Minus size={13} color="#fff"    strokeWidth={2.5} />
            : <Plus  size={13} color="#6e6e73" strokeWidth={2.5} />
          }
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        style={{ maxHeight: open ? 240 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}
      >
        <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#6e6e73", paddingBottom: 22 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function inputStyle(hasError: boolean, focused: boolean): React.CSSProperties {
  return {
    width: "100%", padding: "10px 13px", fontSize: 14, color: "#1d1d1f",
    background: "#fff",
    border: `1.5px solid ${hasError ? "#ef4444" : focused ? "#0071e3" : "#e8e8ed"}`,
    borderRadius: 9, outline: "none",
    transition: "border-color 0.15s ease", boxSizing: "border-box" as const,
  };
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p style={{ fontSize: 11.5, color: "#ef4444", marginTop: 4, fontWeight: 500 }}>{msg}</p>;
}

function isGibberish(str: string): boolean {
  const l = str.toLowerCase().replace(/[^a-z]/g, "");
  if (l.length < 2) return true;
  if (/(.)\1{3,}/.test(l)) return true;
  return (l.match(/[aeiou]/g) || []).length / l.length < 0.12;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ContactClient() {
  const params         = useSearchParams();
  const enquireProduct = params.get("enquire");

  const defaultMessage = enquireProduct ? `I want to enquire about the ${enquireProduct}.` : "";
  const contextLabel   = enquireProduct ? `Enquiring about: ${enquireProduct}` : null;

  const [form, setForm]           = useState({ name: "", email: "", phone: "", location: "", message: defaultMessage, website: "" });
  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [focused, setFocused]     = useState<Record<string, boolean>>({});
  const [status, setStatus]       = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [openFaq, setOpenFaq]     = useState<number | null>(null);

  const set = useCallback((field: string, value: string) => {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => { const n = { ...e }; delete n[field]; return n; });
  }, []);

  const focus = (f: string) => setFocused(p => ({ ...p, [f]: true  }));
  const blur  = (f: string) => setFocused(p => ({ ...p, [f]: false }));

  function validate(): boolean {
    const errs: Record<string, string> = {};

    const name = form.name.trim();
    if (!name) errs.name = "Name is required.";
    else if (name.length < 2) errs.name = "Name must be at least 2 characters.";
    else if (!/^[\p{L}\s'\-]+$/u.test(name)) errs.name = "Letters, spaces, hyphens and apostrophes only.";
    else if (isGibberish(name)) errs.name = "Please enter your real name.";

    const email = form.email.trim();
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errs.email = "Please enter a valid email address.";

    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone) errs.phone = "ENTER A VALID NUMBER";
    else if (digits.length !== 10) errs.phone = "ENTER A VALID NUMBER";
    else if (/^(\d)\1{9}$/.test(digits)) errs.phone = "ENTER A VALID NUMBER";

    if (!form.location.trim() || form.location.trim().length < 2)
      errs.location = "Please enter your city or area.";

    if (!form.message.trim() || form.message.trim().length < 5)
      errs.message = "Please enter a message.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setServerError("");
    try {
      const res  = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, countryCode: "+91" }),
      });
      const data = await res.json();
      if (!res.ok) { setServerError(data.error || "Something went wrong."); setStatus("error"); }
      else          setStatus("success");
    } catch {
      setServerError("Network error. Please check your connection.");
      setStatus("error");
    }
  }

  // ── Success screen ────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 380 }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%", background: "#d1fae5",
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Message sent!
          </h2>
          <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65, marginBottom: 24 }}>
            Thanks for reaching out. Our team will get back to you shortly.
          </p>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", padding: "10px 24px",
            borderRadius: 980, background: "#0071e3", color: "#fff",
            fontSize: 14, fontWeight: 500, textDecoration: "none",
          }}>
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // ── Main layout ───────────────────────────────────────────────────────────
  return (
    <div className="mx-auto max-w-[1440px] px-8" style={{ paddingTop: 64, paddingBottom: 88 }}>
      {/* Stack on mobile; side-by-side on md+ */}
      <div className="flex flex-col md:flex-row gap-10 lg:gap-[72px] items-start">

        {/* ── Left: heading + phones ─────────────────────────────────── */}
        <div className="w-full md:w-[380px] md:shrink-0">

          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#6e6e73", marginBottom: 16, textTransform: "uppercase" }}>
            Get in touch
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#1d1d1f", marginBottom: 12 }}>
            Send us a message.
          </h2>
          <p style={{ fontSize: 14.5, color: "#6e6e73", lineHeight: 1.65, marginBottom: 32 }}>
            Our team is here to help. Fill in the form or call us directly.
          </p>

          {/* Phone cards */}
          {[
            { label: "Customer Care", number: "+91 95406 99333", href: "tel:+919540699333", sub: "Mon–Sat, 9 AM – 6 PM IST"   },
            { label: "Sales",         number: "+91 95400 64444", href: "tel:+919540064444", sub: "Responds almost instantly"    },
          ].map(item => (
            <a key={item.label} href={item.href} style={{ textDecoration: "none", display: "block", marginBottom: 10 }}>
              <div style={{
                padding: "13px 16px", background: "#fff", borderRadius: 12,
                border: "1.5px solid #e8e8ed", display: "flex", alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 8, background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#6e6e73", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 1 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 1 }}>{item.number}</p>
                  <p style={{ fontSize: 11.5, color: "#6e6e73" }}>{item.sub}</p>
                </div>
              </div>
            </a>
          ))}

          {/* Address */}
          <div style={{
            padding: "13px 16px", background: "#fff", borderRadius: 12,
            border: "1.5px solid #e8e8ed", display: "flex", alignItems: "flex-start", gap: 12,
            marginTop: 10,
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8, background: "#eff6ff",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="3" stroke="#0071e3" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#6e6e73", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>
                Our Location
              </p>
              <p style={{ fontSize: 13, color: "#1d1d1f", lineHeight: 1.55 }}>
                Garhi Guldhar, Pillar No. 639, M-112, Meerut Rd, opposite Crown Honda Delhi,
                Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003
                <br />GSTIN: 09AAFCE8346R1ZR
                <br />MSME: UDYAM-UP-28-0011627
                <br />ISO 9001:2015
              </p>
            </div>
          </div>

          {/* Email cards */}
          {[
            { label: "Sales",   address: "sales@elegantgalaxy.in",   sub: "Product & distributor enquiries" },
            { label: "Support", address: "support@elegantgalaxy.in", sub: "Orders, warranty & general help"  },
          ].map(item => (
            <a key={item.label} href={`mailto:${item.address}`} style={{ textDecoration: "none", display: "block", marginTop: 10 }}>
              <div style={{
                padding: "13px 16px", background: "#fff", borderRadius: 12,
                border: "1.5px solid #e8e8ed", display: "flex", alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 8, background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                      stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m22 6-10 7L2 6" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#6e6e73", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 1 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", marginBottom: 1 }}>{item.address}</p>
                  <p style={{ fontSize: 11.5, color: "#6e6e73" }}>{item.sub}</p>
                </div>
              </div>
            </a>
          ))}

        </div>

        {/* ── Right: form card ─────────────────────────────────────────── */}
        <div className="w-full min-w-0 md:flex-1">
          <div style={{
            background: "#fff", borderRadius: 20,
            padding: "32px 32px 36px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}>

            {/* Context banner */}
            {contextLabel && (
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "9px 13px", background: "#eff6ff", borderRadius: 8,
                marginBottom: 24, border: "1px solid #bfdbfe",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#0071e3" strokeWidth="1.8" />
                  <line x1="12" y1="8" x2="12" y2="12" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="12" y1="16" x2="12.01" y2="16" stroke="#0071e3" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <p style={{ fontSize: 12.5, fontWeight: 500, color: "#0071e3" }}>{contextLabel}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot — hidden from sighted/keyboard/screen-reader users, but
                  visible to naive bots that auto-fill every input on the page. */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor="website">Website</label>
                <input
                  id="website" name="website" type="text" tabIndex={-1} autoComplete="off"
                  value={form.website}
                  onChange={e => set("website", e.target.value)}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                {/* Row 1: Name + Email — stack on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                      Full Name <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="text" placeholder="Rajesh Kumar"
                      value={form.name}
                      onChange={e => set("name", e.target.value)}
                      onFocus={() => focus("name")} onBlur={() => blur("name")}
                      style={inputStyle(!!errors.name, !!focused.name)}
                      autoComplete="name"
                    />
                    <FieldError msg={errors.name} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                      Email Address <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="email" placeholder="rajesh@example.com"
                      value={form.email}
                      onChange={e => set("email", e.target.value)}
                      onFocus={() => focus("email")} onBlur={() => blur("email")}
                      style={inputStyle(!!errors.email, !!focused.email)}
                      autoComplete="email"
                    />
                    <FieldError msg={errors.email} />
                  </div>
                </div>

                {/* Row 2: Phone + Location — stack on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                      Phone Number <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div style={{ display: "flex" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", padding: "0 11px",
                        background: "#f2f2f7", border: "1.5px solid #e8e8ed", borderRight: "none",
                        borderRadius: "9px 0 0 9px", fontSize: 13.5, color: "#6e6e73", fontWeight: 500, flexShrink: 0,
                      }}>
                        +91
                      </span>
                      <input
                        type="tel" placeholder="xxxxxxxxxx"
                        value={form.phone}
                        onChange={e => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                        onFocus={() => focus("phone")} onBlur={() => blur("phone")}
                        style={{ ...inputStyle(!!errors.phone, !!focused.phone), borderRadius: "0 9px 9px 0" }}
                        inputMode="numeric" autoComplete="tel-national" maxLength={10}
                      />
                    </div>
                    <FieldError msg={errors.phone} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                      City / Area <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="text" placeholder="Mumbai, Maharashtra"
                      value={form.location}
                      onChange={e => set("location", e.target.value)}
                      onFocus={() => focus("location")} onBlur={() => blur("location")}
                      style={inputStyle(!!errors.location, !!focused.location)}
                      autoComplete="address-level2"
                    />
                    <FieldError msg={errors.location} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                    Message <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    value={form.message} rows={4}
                    onChange={e => set("message", e.target.value)}
                    onFocus={() => focus("message")} onBlur={() => blur("message")}
                    style={{ ...inputStyle(!!errors.message, !!focused.message), resize: "vertical", lineHeight: 1.6, minHeight: 110 }}
                  />
                  <FieldError msg={errors.message} />
                </div>

                {/* Server error */}
                {status === "error" && serverError && (
                  <div style={{
                    padding: "10px 13px", background: "#fef2f2",
                    border: "1px solid #fecaca", borderRadius: 8,
                    fontSize: 13, color: "#dc2626", fontWeight: 500,
                  }}>
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit" disabled={status === "loading"}
                  style={{
                    width: "100%", padding: "12px 0", borderRadius: 9,
                    background: status === "loading" ? "#5aabff" : "#0071e3",
                    color: "#fff", fontSize: 14, fontWeight: 600,
                    letterSpacing: "-0.01em", border: "none",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "background 0.2s ease",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        style={{ animation: "spin 0.8s linear infinite" }}>
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : "Send Message"}
                </button>

                <p style={{ fontSize: 11.5, color: "#6e6e73", textAlign: "center", marginTop: -4 }}>
                  By submitting you agree to our{" "}
                  <Link href="/legal/privacy" style={{ color: "#0071e3", textDecoration: "none" }}>
                    Privacy Policy
                  </Link>.
                </p>

              </div>
            </form>
          </div>
        </div>

      </div>

      {/* ── Map — full width ─────────────────────────────────────────── */}
      <div style={{
        marginTop: 40, borderRadius: 20, overflow: "hidden",
        border: "1.5px solid #e8e8ed", height: 420,
      }}>
        <iframe
          title="Elegant Galaxy location on Google Maps"
          src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s28.7041548,77.4498068!6i16"
          width="100%" height="100%"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ── FAQ — full width, same layout as homepage ─────────────────── */}
      <div style={{ marginTop: 64, paddingTop: 56, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        {/* Stack on mobile; side-by-side on md+ */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">

          {/* Left: heading */}
          <div className="w-full md:w-[300px] md:shrink-0" style={{ paddingTop: 4 }}>
            <p style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              color: "#6e6e73", marginBottom: 18, textTransform: "uppercase",
            }}>
              FAQs
            </p>
            <h2 style={{
              fontSize: 34, fontWeight: 700, letterSpacing: "-0.025em",
              lineHeight: 1.15, color: "#1d1d1f", marginBottom: 20,
            }}>
              Frequently asked questions.
            </h2>
            <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>
              Still have questions?{" "}
              <a href="tel:+919540699333" style={{ color: "#0071e3", textDecoration: "none", fontWeight: 500 }}>
                Call us
              </a>
            </p>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 min-w-0 w-full">
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i} idx={i} q={faq.q} a={faq.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

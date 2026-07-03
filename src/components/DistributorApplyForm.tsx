"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

const BUSINESS_TYPES = [
  "Retail Showroom",
  "Wholesale / Distribution",
  "Online Reseller",
  "Other",
];

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

const INITIAL_FORM = {
  name: "", businessName: "", businessType: "", email: "", phone: "",
  location: "", message: "",
};

export default function DistributorApplyForm() {
  const [form, setForm]               = useState(INITIAL_FORM);
  const [errors, setErrors]           = useState<Record<string, string>>({});
  const [focused, setFocused]         = useState<Record<string, boolean>>({});
  const [status, setStatus]           = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

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

    if (!form.businessName.trim() || form.businessName.trim().length < 2)
      errs.businessName = "Please enter your business or firm name.";

    if (!form.businessType)
      errs.businessType = "Please select a business type.";

    const email = form.email.trim();
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errs.email = "Please enter a valid email address.";

    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone) errs.phone = "Phone number is required.";
    else if (digits.length !== 10) errs.phone = "Must be exactly 10 digits.";
    else if (/^(\d)\1{9}$/.test(digits)) errs.phone = "Please enter a valid phone number.";

    if (!form.location.trim() || form.location.trim().length < 2)
      errs.location = "Please enter your city or region.";

    if (!form.message.trim() || form.message.trim().length < 5)
      errs.message = "Tell us a bit about your business.";

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

  if (status === "success") {
    return (
      <div style={{
        background: "#fff", borderRadius: 20, padding: "48px 32px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)", textAlign: "center",
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: "50%", background: "#d1fae5",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px",
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: 8 }}>
          Application received!
        </h2>
        <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65, maxWidth: 380, margin: "0 auto 24px" }}>
          Thanks for applying. Our distribution team will reach out within 3–5 business days.
        </p>
        <Link href="/" style={{
          display: "inline-flex", alignItems: "center", padding: "10px 24px",
          borderRadius: 980, background: "#0071e3", color: "#fff",
          fontSize: 14, fontWeight: 500, textDecoration: "none",
        }}>
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      background: "#fff", borderRadius: 20,
      padding: "32px 32px 36px",
      boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    }}>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Row 1: Name + Business name */}
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
                Business / Firm Name <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text" placeholder="Kumar Electronics"
                value={form.businessName}
                onChange={e => set("businessName", e.target.value)}
                onFocus={() => focus("businessName")} onBlur={() => blur("businessName")}
                style={inputStyle(!!errors.businessName, !!focused.businessName)}
                autoComplete="organization"
              />
              <FieldError msg={errors.businessName} />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                  type="tel" placeholder="9876543210"
                  value={form.phone}
                  onChange={e => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  onFocus={() => focus("phone")} onBlur={() => blur("phone")}
                  style={{ ...inputStyle(!!errors.phone, !!focused.phone), borderRadius: "0 9px 9px 0" }}
                  inputMode="numeric" autoComplete="tel-national" maxLength={10}
                />
              </div>
              <FieldError msg={errors.phone} />
            </div>
          </div>

          {/* Row 3: Business type + City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                Business Type <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <select
                value={form.businessType}
                onChange={e => set("businessType", e.target.value)}
                onFocus={() => focus("businessType")} onBlur={() => blur("businessType")}
                style={{ ...inputStyle(!!errors.businessType, !!focused.businessType), color: form.businessType ? "#1d1d1f" : "#6e6e73" }}
              >
                <option value="" disabled>Select one</option>
                {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <FieldError msg={errors.businessType} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1d1d1f", marginBottom: 6 }}>
                City / Region <span style={{ color: "#ef4444" }}>*</span>
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
              Tell us about your business <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <textarea
              placeholder="Current retail experience, showroom size, products you'd like to stock..."
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
                Submitting…
              </>
            ) : "Submit Application"}
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
  );
}

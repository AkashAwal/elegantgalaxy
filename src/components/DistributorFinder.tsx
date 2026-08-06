"use client";

import { useState } from "react";
import { DISTRIBUTORS, type Distributor } from "@/data/distributors";

function inputStyle(focused: boolean): React.CSSProperties {
  return {
    width: "100%", padding: "13px 16px", fontSize: 16, color: "#1d1d1f",
    background: "#fff",
    border: `1.5px solid ${focused ? "#0071e3" : "#e8e8ed"}`,
    borderRadius: 9, outline: "none",
    transition: "border-color 0.15s ease", boxSizing: "border-box" as const,
    letterSpacing: "0.02em",
  };
}

function DistributorCard({ d }: { d: Distributor }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 16, padding: "22px 24px",
      boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    }}>
      <p style={{ fontSize: 17, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.01em", marginBottom: 4 }}>
        {d.name}
      </p>
      <p style={{ fontSize: 13, fontWeight: 600, color: "#0071e3", marginBottom: 14 }}>
        {d.location} · PIN {d.pin}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {d.contactPerson && (
          <p style={{ fontSize: 14, color: "#1d1d1f" }}>
            <span style={{ color: "#6e6e73" }}>Contact: </span>{d.contactPerson}
          </p>
        )}
        {d.mobile && (
          <p style={{ fontSize: 14, color: "#1d1d1f" }}>
            <span style={{ color: "#6e6e73" }}>Mobile: </span>
            <a href={`tel:${d.mobile.split("/")[0]}`} style={{ color: "#0071e3", textDecoration: "none" }}>
              {d.mobile}
            </a>
          </p>
        )}
        {d.address && (
          <p style={{ fontSize: 14, color: "#1d1d1f", lineHeight: 1.55 }}>
            <span style={{ color: "#6e6e73" }}>Address: </span>{d.address}
          </p>
        )}
      </div>
    </div>
  );
}

export default function DistributorFinder() {
  const [pin, setPin]         = useState("");
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<Distributor[] | null>(null);
  const [error, setError]     = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const query = pin.trim();

    if (!/^\d{6}$/.test(query)) {
      setError("Please enter a valid 6-digit PIN code.");
      setResults(null);
      return;
    }

    setError("");
    const matches = DISTRIBUTORS.filter(d => d.pin === query);
    setResults(matches);
  }

  return (
    <div>
      <form onSubmit={handleSearch} noValidate>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            type="text"
            inputMode="numeric"
            placeholder="e.g. 248001"
            value={pin}
            onChange={e => { setPin(e.target.value.replace(/\D/g, "").slice(0, 6)); setError(""); }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ ...inputStyle(focused), flex: "1 1 220px" }}
            maxLength={6}
            aria-label="PIN code"
          />
          <button
            type="submit"
            style={{
              flexShrink: 0, padding: "0 28px", height: 48, borderRadius: 9,
              background: "#0071e3", color: "#fff", fontSize: 15, fontWeight: 600,
              border: "none", cursor: "pointer", transition: "background 0.15s ease",
            }}
          >
            Search
          </button>
        </div>
        {error && (
          <p style={{ fontSize: 13, color: "#ef4444", fontWeight: 500, marginTop: 10 }}>
            {error}
          </p>
        )}
      </form>

      {results !== null && (
        <div style={{ marginTop: 36 }}>
          {results.length === 0 ? (
            <div style={{
              background: "#fff", borderRadius: 16, padding: "32px 24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)", textAlign: "center",
            }}>
              <p style={{ fontSize: 15, color: "#1d1d1f", fontWeight: 600, marginBottom: 6 }}>
                No distributor found for this PIN code.
              </p>
              <p style={{ fontSize: 13.5, color: "#6e6e73" }}>
                Try a nearby PIN code, or reach our{" "}
                <a href="/contact" style={{ color: "#0071e3", textDecoration: "none" }}>Customer Care</a>{" "}
                team for help.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {results.map((d, i) => <DistributorCard key={i} d={d} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@/context/ThemeContext";
import { SCOPE_AREAS } from "@/lib/assessmentData";

interface ScopeEmailModalProps {
  open: boolean;
  onSubmit: (email: string, scopes: string[]) => void;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ScopeEmailModal({ open, onSubmit }: ScopeEmailModalProps) {
  const { t } = useTheme();

  const [email,   setEmail]   = useState("");
  const [scopes,  setScopes]  = useState<string[]>([]);
  const [touched, setTouched] = useState(false);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset state when modal closes
      setEmail("");
      setScopes([]);
      setTouched(false);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // ── Toggle a single scope ──────────────────────────────────────────────
  const toggleScope = (scope: string) => {
    setScopes((prev) =>
      prev.includes(scope)
        ? prev.filter((s) => s !== scope)
        : [...prev, scope]
    );
  };

  const emailValid = isValidEmail(email);
  const canSubmit  = emailValid && scopes.length > 0;

  const handleSubmit = () => {
    setTouched(true);
    if (canSubmit) onSubmit(email, scopes);
  };

  if (!open) return null;

  return createPortal(
    /* ── Backdrop ─────────────────────────────────────────────────────── */
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        padding: "20px",
      }}
    >
      <style>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);   }
        }
        .scope-checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 9px;
          cursor: pointer;
          border: 1.5px solid transparent;
          transition: background 0.15s, border-color 0.15s;
          user-select: none;
        }
        .scope-checkbox-row:hover {
          background: rgba(99,102,241,0.06);
        }
        .scope-checkbox-row.checked {
          border-color: var(--scope-accent);
          background: var(--scope-iconbg);
        }
      `}</style>

      {/* ── Modal panel ──────────────────────────────────────────────── */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.featureCard,
          border: `1px solid ${t.featureCardBorder}`,
          borderRadius: 20,
          padding: "32px 28px",
          width: "100%",
          maxWidth: 540,
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          animation: "modalSlideIn 0.22s ease",
          // Expose accent as CSS var for .scope-checkbox-row
          ["--scope-accent" as string]: t.accent,
          ["--scope-iconbg" as string]: t.featureIconBg,
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: t.text,
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: 22,
            lineHeight: 1.3,
          }}
        >
          Select Scope(s) &amp; Provide<br />Laboratory Email
        </h2>

        {/* ── Email field ─────────────────────────────────────────── */}
        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: t.text,
              marginBottom: 4,
            }}
          >
            Lab Email / Contact Person Email
          </label>
          <p
            style={{
              fontSize: 12,
              color: t.textSub,
              lineHeight: 1.6,
              marginBottom: 10,
            }}
          >
            Please provide the correct email — it may be used for further
            communication, downloading, or viewing previous reports.
          </p>
          <input
            type="email"
            placeholder="Enter Lab Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            style={{
              width: "100%",
              height: 46,
              padding: "0 14px",
              background: t.bg,
              color: t.text,
              border: `1.5px solid ${
                touched && !emailValid && email
                  ? "#dc2626"
                  : email && emailValid
                  ? t.accent
                  : t.featureCardBorder
              }`,
              borderRadius: 10,
              fontSize: 14,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              outline: "none",
              transition: "border-color 0.2s",
            }}
          />
          {touched && email && !emailValid && (
            <p style={{ fontSize: 12, color: "#dc2626", marginTop: 4 }}>
              Please enter a valid email address.
            </p>
          )}
        </div>

        {/* ── Scope checkboxes ────────────────────────────────────── */}
        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: t.text,
              marginBottom: 12,
            }}
          >
            Select Scope Areas{" "}
            <span style={{ color: t.textMuted, fontWeight: 400 }}>
              ({scopes.length} selected)
            </span>
          </label>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 6,
            }}
          >
            {SCOPE_AREAS.map((scope) => {
              const isChecked = scopes.includes(scope);
              return (
                /* 
                  Use a <label> wrapping a real <input type="checkbox">
                  so click anywhere on the row toggles the checkbox —
                  no manual onClick needed, no double-fire possible.
                */
                <label
                  key={scope}
                  className={`scope-checkbox-row${isChecked ? " checked" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  {/* Native checkbox — visually hidden, functionally active */}
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleScope(scope)}
                    style={{ display: "none" }}
                  />

                  {/* Custom checkbox box */}
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      border: `2px solid ${isChecked ? t.accent : t.textMuted}`,
                      background: isChecked ? t.accent : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                      transition: "background 0.15s, border-color 0.15s",
                    }}
                  >
                    {isChecked && (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <polyline
                          points="2 6 5 9 10 3"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Label text */}
                  <span
                    style={{
                      fontSize: 13,
                      color: isChecked ? t.text : t.textSub,
                      fontWeight: isChecked ? 500 : 400,
                      lineHeight: 1.45,
                    }}
                  >
                    {scope}
                  </span>
                </label>
              );
            })}
          </div>

          {touched && scopes.length === 0 && (
            <p style={{ fontSize: 12, color: "#dc2626", marginTop: 10 }}>
              Please select at least one scope area.
            </p>
          )}
        </div>

        {/* ── Submit button ───────────────────────────────────────── */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            height: 48,
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
            background: canSubmit ? t.btnPrimary : t.featureCardBorder,
            color: canSubmit ? t.btnText : t.textMuted,
            cursor: canSubmit ? "pointer" : "not-allowed",
            border: "none",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => {
            if (canSubmit)
              (e.currentTarget as HTMLButtonElement).style.background =
                t.btnPrimaryHover;
          }}
          onMouseOut={(e) => {
            if (canSubmit)
              (e.currentTarget as HTMLButtonElement).style.background =
                t.btnPrimary;
          }}
        >
          Submit &amp; Begin Assessment
        </button>
      </div>
    </div>,
    document.body
  );
}

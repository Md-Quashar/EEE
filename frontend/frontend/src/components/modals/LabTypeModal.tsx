import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@/context/ThemeContext";
import { LAB_TYPES } from "@/lib/assessmentData";

interface LabTypeModalProps {
  open: boolean;
  onContinue: (labType: string) => void;
}

export function LabTypeModal({ open, onContinue }: LabTypeModalProps) {
  const { t } = useTheme();
  const [selected, setSelected] = useState("");

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSelected(""); // reset on close
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
      {/* ── Modal panel ──────────────────────────────────────────────── */}
      <div
        style={{
          background: t.featureCard,
          border: `1px solid ${t.featureCardBorder}`,
          borderRadius: 20,
          padding: "40px 36px 32px",
          width: "100%",
          maxWidth: 460,
          boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          animation: "modalSlideIn 0.22s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalSlideIn {
            from { opacity: 0; transform: scale(0.95) translateY(8px); }
            to   { opacity: 1; transform: scale(1)    translateY(0);   }
          }
        `}</style>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1.7rem",
            fontWeight: 400,
            color: t.text,
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: 10,
          }}
        >
          Select Lab Type
        </h2>

        {/* Warning */}
        <p
          style={{
            textAlign: "center",
            color: "#dc2626",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 26,
          }}
        >
          Only Govt Labs are eligible to apply for EEE
        </p>

        {/* Native select dropdown */}
        <div style={{ position: "relative", marginBottom: 28 }}>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            style={{
              width: "100%",
              height: 48,
              padding: "0 40px 0 14px",
              background: t.bg,
              color: selected ? t.text : t.textMuted,
              border: `1.5px solid ${selected ? t.accent : t.featureCardBorder}`,
              borderRadius: 10,
              fontSize: 14,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              cursor: "pointer",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              transition: "border-color 0.2s",
            }}
          >
            <option value="" disabled>
              Select Laboratory Type
            </option>
            {LAB_TYPES.map((lt) => (
              <option key={lt.value} value={lt.value}>
                {lt.label}
              </option>
            ))}
          </select>

          {/* Chevron icon */}
          <div
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: t.textMuted,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Continue button */}
        <button
          disabled={!selected}
          onClick={() => { if (selected) onContinue(selected); }}
          style={{
            width: "100%",
            height: 48,
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
            background: selected ? t.btnPrimary : t.featureCardBorder,
            color: selected ? t.btnText : t.textMuted,
            cursor: selected ? "pointer" : "not-allowed",
            border: "none",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseOver={(e) => {
            if (selected)
              (e.currentTarget as HTMLButtonElement).style.background = t.btnPrimaryHover;
          }}
          onMouseOut={(e) => {
            if (selected)
              (e.currentTarget as HTMLButtonElement).style.background = t.btnPrimary;
          }}
        >
          Continue
        </button>
      </div>
    </div>,
    document.body
  );
}

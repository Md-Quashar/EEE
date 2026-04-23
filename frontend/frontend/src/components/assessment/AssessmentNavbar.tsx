import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import { ASSESSMENT_SECTIONS } from "@/lib/assessmentData";
import { SunIcon, MoonIcon } from "@/components/icons";

interface AssessmentNavbarProps {
  onHomeClick?: () => void;
}

export function AssessmentNavbar({ onHomeClick }: AssessmentNavbarProps) {
  const { dark, toggle } = useTheme();
  const { completedSections } = useAssessment();
  const pct = Math.round((completedSections.size / ASSESSMENT_SECTIONS.length) * 100);

  return (
    <header className="sticky top-0 z-50" style={{ background: "#0f2557", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* Top slim progress strip */}
      <div style={{ height: 3, background: "rgba(255,255,255,0.1)" }}>
        <div
          style={{
            height: "100%",
            background: pct === 100 ? "#10b981" : "linear-gradient(90deg, #3b82f6, #60a5fa)",
            width: `${pct}%`,
            transition: "width 0.5s ease",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 58,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 32, height: 32, borderRadius: 8,
            background: "rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            EEE Readiness Portal
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>
            Forensic Lab Assessment · Section 79A
          </p>
        </div>

        <Separator orientation="vertical" style={{ height: 28, background: "rgba(255,255,255,0.15)" }} />

        {/* Progress pill */}
        <Badge
          variant="outline"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            color: pct === 100 ? "#6ee7b7" : "rgba(255,255,255,0.75)",
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 10px",
          }}
        >
          {pct === 100 ? "✓ Complete" : `${pct}% done`}
        </Badge>

        {/* Home button */}
        {onHomeClick && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onHomeClick}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 13,
              border: "1px solid rgba(255,255,255,0.15)",
              height: 32,
              padding: "0 14px",
            }}
            className="hover:bg-white/10 hover:text-white"
          >
            ← Home
          </Button>
        )}

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggle}
          title={dark ? "Light mode" : "Dark mode"}
          style={{
            color: "rgba(255,255,255,0.7)",
            width: 32, height: 32,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
          className="hover:bg-white/10 hover:text-white"
        >
          {dark ? <SunIcon size={15} /> : <MoonIcon size={15} />}
        </Button>
      </div>
    </header>
  );
}

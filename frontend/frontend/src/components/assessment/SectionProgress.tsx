import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import { ASSESSMENT_SECTIONS } from "@/lib/assessmentData";

export function SectionProgress() {
  const { t } = useTheme();
  const { completedSections } = useAssessment();

  const total     = ASSESSMENT_SECTIONS.length;
  const completed = completedSections.size;
  const pct       = Math.round((completed / total) * 100);

  return (
    <div
      style={{
        background: t.featureCard,
        border: `1px solid ${t.featureCardBorder}`,
        borderRadius: 14,
        padding: "16px 20px",
        marginBottom: 22,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: t.text, marginBottom: 1 }}>
            Assessment Progress
          </p>
          <p style={{ fontSize: 11, color: t.textMuted }}>
            {completed} of {total} sections complete
          </p>
        </div>
        <Badge
          style={{
            background: pct === 100 ? "rgba(16,185,129,0.12)" : t.featureIconBg,
            color: pct === 100 ? "#059669" : t.featureIconColor,
            border: `1px solid ${pct === 100 ? "rgba(16,185,129,0.3)" : t.badgeBorder}`,
            fontSize: 13,
            fontWeight: 700,
            padding: "4px 12px",
            minWidth: 52,
            textAlign: "center",
          }}
        >
          {pct}%
        </Badge>
      </div>

      {/* shadcn Progress bar */}
      <Progress
        value={pct}
        style={{ height: 7, borderRadius: 99, marginBottom: 14 }}
        className="[&>div]:transition-all [&>div]:duration-500"
      />

     
    </div>
  );
}

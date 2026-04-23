import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import { ASSESSMENT_SECTIONS } from "@/lib/assessmentData";

export function SectionProgress() {
  const { t } = useTheme();
  const { completedSections, currentSection, setCurrentSection } = useAssessment();

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

      {/* Step pills */}
      <TooltipProvider delayDuration={200}>
        <div style={{ display: "flex", gap: 4 }}>
          {ASSESSMENT_SECTIONS.map((s) => {
            const done   = completedSections.has(s.id);
            const active = s.id === currentSection;
            return (
              <Tooltip key={s.id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setCurrentSection(s.id)}
                    style={{
                      flex: 1,
                      height: 28,
                      borderRadius: 6,
                      border: `1.5px solid ${
                        active ? t.btnPrimary : done ? `${t.btnPrimary}60` : t.featureCardBorder
                      }`,
                      background: active
                        ? t.btnPrimary
                        : done
                        ? t.featureIconBg
                        : t.bg,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                      padding: 0,
                    }}
                  >
                    {done && !active ? (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <polyline points="2 6 5 9 10 3" stroke={t.featureIconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: active ? "#fff" : t.textMuted,
                          fontFamily: "inherit",
                        }}
                      >
                        {s.id}
                      </span>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" style={{ fontSize: 11, background: t.featureCard, color: t.text, border: `1px solid ${t.featureCardBorder}` }}>
                  {s.shortTitle}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  );
}

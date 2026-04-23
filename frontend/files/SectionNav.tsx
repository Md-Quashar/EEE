import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import { ASSESSMENT_SECTIONS } from "@/lib/assessmentData";

const SECTION_ICONS: Record<number, React.ReactNode> = {
  1: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  2: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18M3 15h18"/></svg>,
  3: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  4: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  5: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  6: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  7: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  8: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
};

export function SectionNav() {
  const { t } = useTheme();
  const { currentSection, setCurrentSection, completedSections } = useAssessment();

  const completed = completedSections.size;
  const total     = ASSESSMENT_SECTIONS.length;

  return (
    <aside
      style={{
        width: 220,
        flexShrink: 0,
        alignSelf: "flex-start",
        position: "sticky",
        top: 78,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Header card */}
      <div
        style={{
          background: t.featureCard,
          border: `1px solid ${t.featureCardBorder}`,
          borderRadius: "12px 12px 0 0",
          padding: "12px 14px",
          borderBottom: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Sections
          </p>
          <Badge
            variant="outline"
            style={{
              fontSize: 10,
              color: completed === total ? "#059669" : t.badgeText,
              borderColor: completed === total ? "rgba(16,185,129,0.4)" : t.badgeBorder,
              background: completed === total ? "rgba(16,185,129,0.08)" : t.badgeBg,
              padding: "1px 7px",
            }}
          >
            {completed}/{total}
          </Badge>
        </div>
      </div>

      {/* Section list */}
      <div
        style={{
          background: t.featureCard,
          border: `1px solid ${t.featureCardBorder}`,
          borderTop: `1px solid ${t.divider}`,
          borderRadius: "0 0 12px 12px",
          overflow: "hidden",
        }}
      >
        <ScrollArea style={{ maxHeight: "calc(100vh - 220px)" }}>
          {ASSESSMENT_SECTIONS.map((section, idx) => {
            const isActive    = section.id === currentSection;
            const isCompleted = completedSections.has(section.id);

            return (
              <div key={section.id}>
                {idx > 0 && <Separator style={{ background: t.divider, opacity: 0.5 }} />}
                <button
                  onClick={() => setCurrentSection(section.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 14px",
                    background: isActive
                      ? `linear-gradient(135deg, ${t.btnPrimary}, ${t.accentHover})`
                      : "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "background 0.18s",
                    fontFamily: "inherit",
                    position: "relative",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLButtonElement).style.background = t.featureIconBg;
                  }}
                  onMouseOut={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {/* Icon box */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 7,
                      flexShrink: 0,
                      background: isActive
                        ? "rgba(255,255,255,0.2)"
                        : isCompleted
                        ? t.featureIconBg
                        : t.bg,
                      border: `1px solid ${
                        isActive
                          ? "rgba(255,255,255,0.2)"
                          : isCompleted
                          ? `${t.btnPrimary}40`
                          : t.featureCardBorder
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isActive ? "#fff" : isCompleted ? t.featureIconColor : t.textMuted,
                      transition: "all 0.18s",
                    }}
                  >
                    {isCompleted && !isActive ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <polyline points="2 6 5 9 10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      SECTION_ICONS[section.id]
                    )}
                  </div>

                  {/* Label */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "#fff" : isCompleted ? t.text : t.textSub,
                        lineHeight: 1.4,
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      }}
                    >
                      {section.shortTitle}
                    </p>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.8)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </ScrollArea>
      </div>
    </aside>
  );
}

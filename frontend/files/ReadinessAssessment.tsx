import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import { ASSESSMENT_SECTIONS, isSectionComplete } from "@/lib/assessmentData";
import { AssessmentNavbar }  from "@/components/assessment/AssessmentNavbar";
import { AssessmentBanner }  from "@/components/assessment/AssessmentBanner";
import { SectionNav }        from "@/components/assessment/SectionNav";
import { SectionProgress }   from "@/components/assessment/SectionProgress";
import { QuestionCard }      from "@/components/assessment/QuestionCard";

interface ReadinessAssessmentProps {
  onBack?: () => void;
}

// Section-specific accent colours for the header chip
const SECTION_COLORS: Record<number, string> = {
  1: "#3b82f6", 2: "#8b5cf6", 3: "#f59e0b",
  4: "#ef4444", 5: "#06b6d4", 6: "#6366f1",
  7: "#10b981", 8: "#ec4899",
};

export function ReadinessAssessment({ onBack }: ReadinessAssessmentProps) {
  const { t } = useTheme();
  const {
    currentSection, setCurrentSection,
    answers, clearSection, completedSections,
  } = useAssessment();

  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  const section    = ASSESSMENT_SECTIONS.find((s) => s.id === currentSection)!;
  const isComplete = isSectionComplete(section, answers);
  const isFirst    = currentSection === 1;
  const isLast     = currentSection === ASSESSMENT_SECTIONS.length;
  const allDone    = completedSections.size === ASSESSMENT_SECTIONS.length;

  const answeredCount = section.questions.filter(
    (q) => answers[q.id] && answers[q.id].trim() !== ""
  ).length;
  const totalRequired  = section.questions.filter((q) => q.required).length;
  const sectionColor   = SECTION_COLORS[currentSection] ?? t.btnPrimary;

  const handleNext  = () => { if (isComplete && !isLast) setCurrentSection(currentSection + 1); };
  const handlePrev  = () => { if (!isFirst) setCurrentSection(currentSection - 1); };
  const handleClear = () => {
    if (window.confirm(`Clear all answers in "${section.shortTitle}"?`))
      clearSection(currentSection);
  };

  return (
    <div
      ref={topRef}
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        background: t.sectionAltBg,
        color: t.text,
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <AssessmentNavbar onHomeClick={onBack} />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "24px 20px 80px" }}>

        {/* ── Breadcrumb ──────────────────────────────────────────────── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: t.textMuted,
            marginBottom: 20,
            fontWeight: 500,
          }}
        >
          <button
            onClick={onBack}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: t.accent, fontSize: 12, fontWeight: 500, padding: 0,
              fontFamily: "inherit",
            }}
          >
            Home
          </button>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span>Assessment</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span style={{ color: t.text }}>Readiness Form</span>
        </nav>

        {/* ── Page heading ────────────────────────────────────────────── */}
        <div style={{ marginBottom: 20 }}>
          <h1
            className="eee-display-font"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 400,
              color: t.text,
              letterSpacing: "-0.02em",
              marginBottom: 4,
            }}
          >
            Forensic Lab Readiness Assessment
          </h1>
          <p style={{ color: t.textSub, fontSize: 13 }}>
            Complete all 8 sections to generate your readiness report.
          </p>
        </div>

        {/* ── Lab info banner ─────────────────────────────────────────── */}
        <AssessmentBanner />

        {/* ── Progress ────────────────────────────────────────────────── */}
        <SectionProgress />

        {/* ── All-done alert ──────────────────────────────────────────── */}
        {allDone && (
          <Alert
            style={{
              background: "rgba(16,185,129,0.07)",
              border: "1.5px solid rgba(16,185,129,0.3)",
              borderRadius: 12,
              marginBottom: 22,
            }}
          >
            <AlertTitle style={{ color: "#065f46", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
              🎉 All sections completed!
            </AlertTitle>
            <AlertDescription style={{ color: "#047857", fontSize: 13, marginTop: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
              <span>Your assessment is ready for final submission and review.</span>
              <Button
                style={{ background: "#10b981", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 600, height: 34, padding: "0 18px" }}
                className="hover:opacity-90"
              >
                Submit Assessment →
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* ── Two-column layout ───────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>

          {/* Left: Section nav */}
          <SectionNav />

          {/* Right: Section content */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Section header card */}
            <Card
              style={{
                border: `1px solid ${t.featureCardBorder}`,
                borderRadius: "14px 14px 0 0",
                overflow: "hidden",
                marginBottom: 0,
                background: t.featureCard,
                fontFamily: "inherit",
              }}
            >
              {/* Colour accent top strip */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${sectionColor}, ${sectionColor}99)` }} />

              <CardHeader style={{ padding: "16px 22px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>

                  {/* Left: icon + title */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${sectionColor}15`,
                        border: `1px solid ${sectionColor}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: sectionColor, flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "'DM Serif Display', Georgia, serif" }}>
                        {currentSection}
                      </span>
                    </div>
                    <div>
                      <h2
                        style={{
                          fontSize: 16, fontWeight: 700, color: t.text,
                          letterSpacing: "-0.01em", marginBottom: 2,
                        }}
                      >
                        {section.title}
                      </h2>
                      <p style={{ fontSize: 12, color: t.textMuted }}>
                        {answeredCount} of {totalRequired} required questions answered
                      </p>
                    </div>
                  </div>

                  {/* Right: badges */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Badge
                      variant="outline"
                      style={{
                        fontSize: 11, color: t.textSub, borderColor: t.featureCardBorder,
                        padding: "3px 10px",
                      }}
                    >
                      Section {currentSection} / {ASSESSMENT_SECTIONS.length}
                    </Badge>
                    {isComplete && (
                      <Badge
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          color: "#059669",
                          border: "1px solid rgba(16,185,129,0.25)",
                          fontSize: 11, fontWeight: 600,
                          padding: "3px 10px",
                        }}
                      >
                        ✓ Complete
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Questions area */}
            <Card
              style={{
                border: `1px solid ${t.featureCardBorder}`,
                borderTop: "none",
                borderRadius: "0 0 14px 14px",
                background: t.featureCard,
                fontFamily: "inherit",
              }}
            >
              <CardContent style={{ padding: "20px 22px 18px" }}>

                {/* Required note */}
                <p style={{ fontSize: 12, color: t.textMuted, marginBottom: 18, display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ color: "#ef4444", fontWeight: 700, fontSize: 14 }}>*</span>
                  Required fields must be answered before proceeding.
                </p>

                {/* Question cards */}
                {section.questions.map((q, i) => (
                  <QuestionCard key={q.id} question={q} index={i + 1} />
                ))}

                <Separator style={{ background: t.divider, margin: "20px 0 18px" }} />

                {/* Footer actions */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {/* Clear */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClear}
                    style={{
                      color: "#ef4444",
                      borderColor: "#ef444440",
                      fontSize: 13,
                      height: 36,
                      borderRadius: 9,
                      fontFamily: "inherit",
                    }}
                    className="hover:bg-red-50 hover:border-red-300"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 5 }}>
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    </svg>
                    Clear Section
                  </Button>

                  {/* Prev / Next */}
                  <div style={{ display: "flex", gap: 8 }}>
                    {!isFirst && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrev}
                        style={{
                          height: 36, borderRadius: 9, fontSize: 13,
                          color: t.textSub, borderColor: t.featureCardBorder,
                          fontFamily: "inherit",
                        }}
                      >
                        ← Prev
                      </Button>
                    )}

                    {!isLast ? (
                      <Button
                        size="sm"
                        onClick={handleNext}
                        disabled={!isComplete}
                        title={!isComplete ? "Answer all required questions first" : undefined}
                        style={{
                          height: 36,
                          borderRadius: 9,
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "inherit",
                          background: isComplete
                            ? `linear-gradient(135deg, ${t.btnPrimary}, ${t.accentHover})`
                            : t.featureCardBorder,
                          color: isComplete ? "#fff" : t.textMuted,
                          border: "none",
                          cursor: isComplete ? "pointer" : "not-allowed",
                          padding: "0 20px",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        Save &amp; Next
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled={!isComplete}
                        style={{
                          height: 36,
                          borderRadius: 9,
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "inherit",
                          background: isComplete ? "#10b981" : t.featureCardBorder,
                          color: isComplete ? "#fff" : t.textMuted,
                          border: "none",
                          cursor: isComplete ? "pointer" : "not-allowed",
                          padding: "0 20px",
                        }}
                      >
                        Finish &amp; Review →
                      </Button>
                    )}
                  </div>
                </div>

                {/* Incomplete hint */}
                {!isComplete && (
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 12,
                      color: "#f59e0b",
                      textAlign: "right",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: 4,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    {totalRequired - answeredCount} required question{totalRequired - answeredCount !== 1 ? "s" : ""} remaining
                  </p>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

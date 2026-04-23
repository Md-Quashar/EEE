import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import { ASSESSMENT_SECTIONS, isSectionComplete } from "@/lib/assessmentData";
import { AssessmentNavbar } from "@/components/assessment/AssessmentNavbar";
import { AssessmentBanner } from "@/components/assessment/AssessmentBanner";
import { SectionNav } from "@/components/assessment/SectionNav";
import { SectionProgress } from "@/components/assessment/SectionProgress";
import { QuestionCard } from "@/components/assessment/QuestionCard";

interface ReadinessAssessmentProps {
  onBack?: () => void;
}

export function ReadinessAssessment({ onBack }: ReadinessAssessmentProps) {
  const { t }    = useTheme();
  const {
    currentSection, setCurrentSection,
    answers, clearSection, completedSections,
  } = useAssessment();

  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top of content area when section changes
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  const section    = ASSESSMENT_SECTIONS.find((s) => s.id === currentSection)!;
  const isComplete = isSectionComplete(section, answers);
  const isLast     = currentSection === ASSESSMENT_SECTIONS.length;

  const handleNext = () => {
    if (isComplete && !isLast) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) setCurrentSection(currentSection - 1);
  };

  const handleClear = () => {
    if (window.confirm(`Clear all answers in "${section.shortTitle}"?`))
      clearSection(currentSection);
  };

  const allDone = completedSections.size === ASSESSMENT_SECTIONS.length;

  return (
    <div
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        background: t.bg,
        color: t.text,
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
        fontSize: 15,
      }}
    >
      <AssessmentNavbar onHomeClick={onBack} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 20px 60px" }}>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: 18 }}>
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              listStyle: "none",
              padding: "8px 16px",
              background: t.featureCard,
              border: `1px solid ${t.featureCardBorder}`,
              borderRadius: 8,
              fontSize: 13,
              width: "fit-content",
            }}
          >
            {[
              { label: "Home",            onClick: onBack },
              { label: "Assessment",      onClick: undefined },
              { label: "Readiness Form",  onClick: undefined },
            ].map((crumb, i) => (
              <>
                {i > 0 && (
                  <li key={`sep-${i}`} style={{ color: t.textMuted }}>
                    /
                  </li>
                )}
                <li key={crumb.label}>
                  {crumb.onClick ? (
                    <button
                      onClick={crumb.onClick}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: t.accent,
                        fontSize: 13,
                        padding: 0,
                        fontFamily: "inherit",
                        fontWeight: 500,
                        textDecoration: "underline",
                        textDecorationColor: `${t.accent}60`,
                      }}
                    >
                      {crumb.label}
                    </button>
                  ) : (
                    <span style={{ color: i === 2 ? t.text : t.textSub, fontWeight: i === 2 ? 500 : 400 }}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              </>
            ))}
          </ol>
        </nav>

        {/* Page heading */}
        <h1
          className="eee-display-font"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 400,
            color: t.text,
            marginBottom: 6,
            letterSpacing: "-0.02em",
          }}
        >
          Forensic Lab Readiness Assessment
        </h1>
        <p style={{ color: t.textSub, fontSize: 14, marginBottom: 22 }}>
          Complete all sections before final submission.
        </p>

        {/* Lab info banner */}
        <AssessmentBanner />

        {/* Progress bar */}
        <SectionProgress />

        {/* All-done banner */}
        {allDone && (
          <div
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1.5px solid rgba(16,185,129,0.35)",
              borderRadius: 12,
              padding: "16px 22px",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 22 }}>🎉</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#065f46" }}>
                All sections completed!
              </p>
              <p style={{ fontSize: 13, color: "#047857", marginTop: 2 }}>
                Review your answers and submit the readiness assessment.
              </p>
            </div>
            <button
              style={{
                marginLeft: "auto",
                background: "#10b981",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "10px 24px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#059669")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#10b981")
              }
            >
              Submit Assessment →
            </button>
          </div>
        )}

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            gap: 22,
            alignItems: "flex-start",
          }}
        >
          {/* ─── Left: Section nav ─── */}
          <SectionNav />

          {/* ─── Right: Question area ─── */}
          <div ref={contentRef} style={{ flex: 1, minWidth: 0 }}>

            {/* Section header card */}
            <div
              style={{
                background: t.btnPrimary,
                borderRadius: "12px 12px 0 0",
                padding: "14px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 0,
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>
                {section.title}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 500,
                }}
              >
                Section {currentSection} of {ASSESSMENT_SECTIONS.length}
              </span>
            </div>

            {/* Questions wrapper */}
            <div
              style={{
                background: t.featureCard,
                border: `1px solid ${t.featureCardBorder}`,
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                padding: "22px 20px 20px",
              }}
            >
              {/* Required fields note */}
              <p style={{ fontSize: 12, color: t.textMuted, marginBottom: 18 }}>
                Fields marked with{" "}
                <span style={{ color: "#ef4444", fontWeight: 700 }}>*</span>{" "}
                are required.
              </p>

              {/* Question cards */}
              {section.questions.map((q, i) => (
                <QuestionCard key={q.id} question={q} index={i + 1} />
              ))}

              {/* Section footer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 22,
                  paddingTop: 18,
                  borderTop: `1px solid ${t.featureCardBorder}`,
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {/* Left actions */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button
                    onClick={handleClear}
                    style={{
                      background: "transparent",
                      border: `1.5px solid #ef444460`,
                      color: "#ef4444",
                      borderRadius: 9,
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "all 0.2s",
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(239,68,68,0.07)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                    }}
                  >
                    Clear This Section
                  </button>
                </div>

                {/* Right actions */}
                <div style={{ display: "flex", gap: 10 }}>
                  {currentSection > 1 && (
                    <button
                      onClick={handlePrev}
                      style={{
                        background: "transparent",
                        border: `1.5px solid ${t.featureCardBorder}`,
                        color: t.textSub,
                        borderRadius: 9,
                        padding: "8px 20px",
                        fontSize: 14,
                        fontWeight: 500,
                        cursor: "pointer",
                        fontFamily: "inherit",
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                    >
                      ← Previous
                    </button>
                  )}

                  {!isLast ? (
                    <button
                      onClick={handleNext}
                      disabled={!isComplete}
                      title={
                        !isComplete
                          ? "Answer all required questions to continue"
                          : "Go to next section"
                      }
                      style={{
                        background: isComplete ? "#22c55e" : t.featureCardBorder,
                        color: isComplete ? "#fff" : t.textMuted,
                        border: "none",
                        borderRadius: 9,
                        padding: "9px 28px",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: isComplete ? "pointer" : "not-allowed",
                        fontFamily: "inherit",
                        transition: "background 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                      onMouseOver={(e) => {
                        if (isComplete)
                          (e.currentTarget as HTMLButtonElement).style.background =
                            "#16a34a";
                      }}
                      onMouseOut={(e) => {
                        if (isComplete)
                          (e.currentTarget as HTMLButtonElement).style.background =
                            "#22c55e";
                      }}
                    >
                      Next
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => {}}
                      disabled={!isComplete}
                      style={{
                        background: isComplete ? "#10b981" : t.featureCardBorder,
                        color: isComplete ? "#fff" : t.textMuted,
                        border: "none",
                        borderRadius: 9,
                        padding: "9px 28px",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: isComplete ? "pointer" : "not-allowed",
                        fontFamily: "inherit",
                        transition: "background 0.2s",
                      }}
                    >
                      Finish Section 8
                    </button>
                  )}
                </div>
              </div>

              {/* Incomplete hint */}
              {!isComplete && (
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 12,
                    color: "#f59e0b",
                    textAlign: "right",
                  }}
                >
                  ⚠ Answer all required questions to enable Next.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type { Answers, AssessmentInfo } from "@/types";
import { ASSESSMENT_SECTIONS, isSectionComplete } from "@/lib/assessmentData";

interface AssessmentContextValue {
  // Lab selection (set via modals)
  info: AssessmentInfo;
  setInfo: (info: AssessmentInfo) => void;

  // Section navigation
  currentSection: number;
  setCurrentSection: (n: number) => void;

  // Answers
  answers: Answers;
  setAnswer: (questionId: string, value: string) => void;
  clearSection: (sectionId: number) => void;

  // Derived
  completedSections: Set<number>;
  canProceedToSection: (sectionId: number) => boolean;

  // Reset entire assessment
  resetAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [info, setInfoState] = useState<AssessmentInfo>({
    labType: "",
    labEmail: "",
    scopes: [],
  });
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});

  const setInfo = useCallback((next: AssessmentInfo) => setInfoState(next), []);

  const setAnswer = useCallback((questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const clearSection = useCallback((sectionId: number) => {
    const section = ASSESSMENT_SECTIONS.find((s) => s.id === sectionId);
    if (!section) return;
    const ids = section.questions.map((q) => q.id);
    setAnswers((prev) => {
      const next = { ...prev };
      ids.forEach((id) => delete next[id]);
      return next;
    });
  }, []);

  const completedSections = new Set(
    ASSESSMENT_SECTIONS.filter((s) => isSectionComplete(s, answers)).map((s) => s.id)
  );

  // A section is accessible if it's section 1 or if the previous section is complete
  const canProceedToSection = useCallback(
    (sectionId: number) => {
      if (sectionId === 1) return true;
      return completedSections.has(sectionId - 1);
    },
    [completedSections]
  );

  const resetAssessment = useCallback(() => {
    setInfoState({ labType: "", labEmail: "", scopes: [] });
    setCurrentSection(1);
    setAnswers({});
  }, []);

  return (
    <AssessmentContext.Provider
      value={{
        info, setInfo,
        currentSection, setCurrentSection,
        answers, setAnswer, clearSection,
        completedSections, canProceedToSection,
        resetAssessment,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment(): AssessmentContextValue {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used inside <AssessmentProvider>");
  return ctx;
}

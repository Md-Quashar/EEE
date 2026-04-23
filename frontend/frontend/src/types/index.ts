// ─── Theme ────────────────────────────────────────────────────────────────────
export interface ThemeTokens {
  bg: string; navBg: string; navBorder: string; heroBg: string;
  heroCardBorder: string; text: string; textSub: string; textMuted: string;
  accent: string; accentHover: string; featureCard: string;
  featureCardBorder: string; featureIconBg: string; featureIconColor: string;
  stepCard: string; stepCardBorder: string; stepNum: string; stepText: string;
  reqCard: string; reqCardBorder: string; ctaBg: string; ctaBorder: string;
  btnPrimary: string; btnPrimaryHover: string; btnText: string;
  footerBg: string; footerBorder: string; footerText: string; divider: string;
  badgeBg: string; badgeText: string; badgeBorder: string;
  toggleBg: string; toggleBorder: string; orb1: string; orb2: string;
  sectionAltBg: string; warningBg: string; warningBorder: string; warningTitle: string;
}

// ─── Homepage content ─────────────────────────────────────────────────────────
export interface RequirementNode { label: string; color: string; desc: string; iconKey: string; }
export interface FeatureItem      { iconKey: string; title: string; desc: string; }
export interface StepItem         { num: string; title: string; desc: string; }

// ─── Assessment ───────────────────────────────────────────────────────────────
export type QuestionType = "yesno" | "text" | "textarea" | "number";

export interface Question {
  id: string;
  text: string;
  hint?: string;
  type: QuestionType;
  required: boolean;
}

export interface AssessmentSection {
  id: number;
  title: string;
  shortTitle: string;
  questions: Question[];
}

export type Answers = Record<string, string>;

export interface AssessmentInfo {
  labType: string;
  labEmail: string;
  scopes: string[];
}

export type ModalStep = "none" | "labtype" | "scope";
export type AppRoute  = "home" | "assessment";

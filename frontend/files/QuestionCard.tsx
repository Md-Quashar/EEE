import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import type { Question } from "@/types";

interface QuestionCardProps {
  question: Question;
  index: number;
}

export function QuestionCard({ question, index }: QuestionCardProps) {
  const { t }                  = useTheme();
  const { answers, setAnswer } = useAssessment();

  const value    = answers[question.id] ?? "";
  const answered = value.trim() !== "";

  // Yes / No pill button
  const RadioPill = ({ opt }: { opt: "yes" | "no" }) => {
    const selected   = value === opt;
    const isYes      = opt === "yes";
    const activeColor = isYes ? "#059669" : "#dc2626";
    const activeBg    = isYes ? "rgba(5,150,105,0.08)" : "rgba(220,38,38,0.07)";

    return (
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          padding: "8px 20px",
          borderRadius: 10,
          border: `1.5px solid ${selected ? activeColor : t.featureCardBorder}`,
          background: selected ? activeBg : t.bg,
          transition: "all 0.18s",
          userSelect: "none",
          minWidth: 90,
        }}
      >
        <input
          type="radio"
          name={question.id}
          value={opt}
          checked={selected}
          onChange={() => setAnswer(question.id, opt)}
          style={{ display: "none" }}
        />
        {/* Icon */}
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            border: `2px solid ${selected ? activeColor : t.textMuted}`,
            background: selected ? activeColor : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.18s",
          }}
        >
          {selected && isYes && (
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
              <polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {selected && !isYes && (
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
              <line x1="3" y1="3" x2="9" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="9" y1="3" x2="3" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <span
          style={{
            fontSize: 13,
            fontWeight: selected ? 700 : 400,
            color: selected ? activeColor : t.textSub,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          {isYes ? "Yes" : "No"}
        </span>
      </label>
    );
  };

  return (
    <Card
      style={{
        background: answered
          ? t.featureCard
          : t.featureCard,
        border: `1px solid ${answered ? `${t.accent}35` : t.featureCardBorder}`,
        borderRadius: 12,
        marginBottom: 12,
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: answered ? `0 0 0 3px ${t.accent}08` : "none",
        overflow: "visible",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Answered left accent */}
      {answered && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 10,
            bottom: 10,
            width: 3,
            borderRadius: "0 2px 2px 0",
            background: `linear-gradient(180deg, ${t.btnPrimary}, ${t.accentHover})`,
          }}
        />
      )}

      <CardContent style={{ padding: "18px 20px 16px", position: "relative" }}>
        {/* Question header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
          <p
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: t.text,
              lineHeight: 1.55,
              flex: 1,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 22,
                height: 22,
                borderRadius: 6,
                background: t.featureIconBg,
                color: t.featureIconColor,
                fontSize: 11,
                fontWeight: 700,
                marginRight: 8,
                flexShrink: 0,
                verticalAlign: "middle",
              }}
            >
              {index}
            </span>
            {question.text}
            {question.required && (
              <span style={{ color: "#ef4444", marginLeft: 3, fontWeight: 400 }}>*</span>
            )}
          </p>

          {/* Answered badge */}
          {answered && (
            <Badge
              style={{
                background: "rgba(16,185,129,0.1)",
                color: "#059669",
                border: "1px solid rgba(16,185,129,0.25)",
                fontSize: 10,
                fontWeight: 600,
                padding: "2px 8px",
                flexShrink: 0,
                borderRadius: 6,
                letterSpacing: "0.02em",
              }}
            >
              ✓ Answered
            </Badge>
          )}
        </div>

        {/* Hint */}
        {question.hint && (
          <p
            style={{
              fontSize: 12,
              color: t.textSub,
              marginBottom: 14,
              lineHeight: 1.65,
              paddingLeft: 30,
              fontStyle: "italic",
            }}
          >
            {question.hint}
          </p>
        )}

        {/* ── Yes / No ─────────────────────────── */}
        {question.type === "yesno" && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingLeft: 2 }}>
            <RadioPill opt="yes" />
            <RadioPill opt="no" />
          </div>
        )}

        {/* ── Text ─────────────────────────────── */}
        {question.type === "text" && (
          <Input
            value={value}
            placeholder="Enter your answer..."
            onChange={(e) => setAnswer(question.id, e.target.value)}
            style={{
              background: t.bg,
              color: t.text,
              border: `1.5px solid ${answered ? t.accent : t.featureCardBorder}`,
              borderRadius: 9,
              height: 42,
              fontSize: 14,
              fontFamily: "inherit",
              transition: "border-color 0.2s",
            }}
          />
        )}

        {/* ── Number ───────────────────────────── */}
        {question.type === "number" && (
          <Input
            type="number"
            min={0}
            value={value}
            placeholder="0"
            onChange={(e) => setAnswer(question.id, e.target.value)}
            style={{
              background: t.bg,
              color: t.text,
              border: `1.5px solid ${answered ? t.accent : t.featureCardBorder}`,
              borderRadius: 9,
              height: 42,
              fontSize: 14,
              fontFamily: "inherit",
              maxWidth: 160,
              transition: "border-color 0.2s",
            }}
          />
        )}

        {/* ── Textarea ─────────────────────────── */}
        {question.type === "textarea" && (
          <Textarea
            value={value}
            placeholder="Enter your answer..."
            rows={3}
            onChange={(e) => setAnswer(question.id, e.target.value)}
            style={{
              background: t.bg,
              color: t.text,
              border: `1.5px solid ${answered ? t.accent : t.featureCardBorder}`,
              borderRadius: 9,
              fontSize: 14,
              fontFamily: "inherit",
              resize: "vertical",
              minHeight: 88,
              lineHeight: 1.65,
              transition: "border-color 0.2s",
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}

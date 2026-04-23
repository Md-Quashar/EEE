import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/context/ThemeContext";
import { useAssessment } from "@/context/AssessmentContext";
import { LAB_TYPES } from "@/lib/assessmentData";

export function AssessmentBanner() {
  const { t }    = useTheme();
  const { info } = useAssessment();
  const labLabel = LAB_TYPES.find((lt) => lt.value === info.labType)?.label ?? info.labType;

  return (
    <Card
      style={{
        background: t.featureCard,
        border: `1px solid ${t.featureCardBorder}`,
        borderRadius: 14,
        marginBottom: 24,
        overflow: "hidden",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Accent top strip */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${t.btnPrimary}, ${t.accentHover})` }} />

      <CardContent style={{ padding: "18px 22px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1px auto 1px 1fr",
            gap: "0 20px",
            alignItems: "start",
          }}
        >
          {/* Lab Type */}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>
              Lab Type
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: t.featureIconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={t.featureIconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: t.text }}>{labLabel}</span>
            </div>
          </div>

          <Separator orientation="vertical" style={{ background: t.divider, height: "100%", alignSelf: "stretch" }} />

          {/* Email */}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>
              Contact Email
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: t.featureIconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={t.featureIconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: t.text, wordBreak: "break-all" }}>{info.labEmail}</span>
            </div>
          </div>

          <Separator orientation="vertical" style={{ background: t.divider, height: "100%", alignSelf: "stretch" }} />

          {/* Scopes */}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>
              Selected Scopes ({info.scopes.length})
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {info.scopes.map((scope) => (
                <Badge
                  key={scope}
                  variant="secondary"
                  style={{
                    background: t.featureIconBg,
                    color: t.featureIconColor,
                    border: `1px solid ${t.badgeBorder}`,
                    fontSize: 11,
                    fontWeight: 500,
                    padding: "2px 8px",
                    borderRadius: 5,
                  }}
                >
                  {scope}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { useState, useEffect } from "react";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/><path d="M10 22h4"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

export default function EEEPortalHome() {
  const [dark, setDark] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const t = dark
    ? {
        bg: "#0d1117",
        navBg: "#161b22",
        navBorder: "#30363d",
        heroBg: "linear-gradient(135deg, #0d1117 0%, #1a2332 50%, #0d1523 100%)",
        heroCard: "rgba(22,27,34,0.85)",
        heroCardBorder: "rgba(48,54,61,0.8)",
        text: "#e6edf3",
        textSub: "#8b949e",
        textMuted: "#6e7681",
        accent: "#1f6feb",
        accentHover: "#388bfd",
        featureCard: "#161b22",
        featureCardBorder: "#21262d",
        featureCardHover: "#1c2128",
        featureIconBg: "rgba(31,111,235,0.15)",
        featureIconColor: "#58a6ff",
        stepCard: "#161b22",
        stepCardBorder: "#21262d",
        stepNum: "#58a6ff",
        stepText: "#8b949e",
        reqCard: "#161b22",
        reqCardBorder: "#21262d",
        ctaBg: "linear-gradient(135deg, #1a2d4a 0%, #0d2137 100%)",
        ctaBorder: "rgba(31,111,235,0.3)",
        btnPrimary: "#1f6feb",
        btnPrimaryHover: "#388bfd",
        btnText: "#ffffff",
        footerBg: "#0d1117",
        footerBorder: "#21262d",
        footerText: "#6e7681",
        divider: "#21262d",
        badgeBg: "rgba(31,111,235,0.15)",
        badgeText: "#58a6ff",
        badgeBorder: "rgba(31,111,235,0.3)",
        toggleBg: "#21262d",
        toggleBorder: "#30363d",
        orb1: "rgba(31,111,235,0.08)",
        orb2: "rgba(88,166,255,0.05)",
      }
    : {
        bg: "#f8fafc",
        navBg: "#ffffff",
        navBorder: "#e2e8f0",
        heroBg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 40%, #e0f2fe 100%)",
        heroCard: "rgba(255,255,255,0.92)",
        heroCardBorder: "rgba(226,232,240,0.9)",
        text: "#0f172a",
        textSub: "#475569",
        textMuted: "#94a3b8",
        accent: "#1d4ed8",
        accentHover: "#1e40af",
        featureCard: "#ffffff",
        featureCardBorder: "#e2e8f0",
        featureCardHover: "#f8fafc",
        featureIconBg: "rgba(29,78,216,0.08)",
        featureIconColor: "#1d4ed8",
        stepCard: "#ffffff",
        stepCardBorder: "#e2e8f0",
        stepNum: "#1d4ed8",
        stepText: "#64748b",
        reqCard: "#ffffff",
        reqCardBorder: "#e2e8f0",
        ctaBg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        ctaBorder: "rgba(29,78,216,0.2)",
        btnPrimary: "#1d4ed8",
        btnPrimaryHover: "#1e40af",
        btnText: "#ffffff",
        footerBg: "#0f172a",
        footerBorder: "#1e293b",
        footerText: "#94a3b8",
        divider: "#e2e8f0",
        badgeBg: "rgba(29,78,216,0.08)",
        badgeText: "#1d4ed8",
        badgeBorder: "rgba(29,78,216,0.2)",
        toggleBg: "#f1f5f9",
        toggleBorder: "#e2e8f0",
        orb1: "rgba(29,78,216,0.06)",
        orb2: "rgba(96,165,250,0.04)",
      };

  const reqNodes = [
    { icon: <ShieldIcon />, label: "Statutory Requirements", color: "#f59e0b", desc: "Central/State/UT Forensic Lab established via Government Order (G.O.) or Gazette notification." },
    { icon: <BuildingIcon />, label: "Laboratory Infrastructure", color: "#3b82f6", desc: "Adequate physical premises, security (physical & logical), controlled environment, fire & electrical hazard protection." },
    { icon: <WrenchIcon />, label: "Tools & Technologies", color: "#6366f1", desc: "Licensed forensic tools procured, regularly updated, and used per clearly defined SOPs for each scope area." },
    { icon: <UsersIcon />, label: "Professional Manpower", color: "#10b981", desc: "Qualified examiners with designated Reporting & Reviewing Officers, specified qualifications, and regular training." },
    { icon: <SettingsIcon />, label: "Management Systems", color: "#8b5cf6", desc: "Structured management with clear command hierarchy, Quality System Manual, Risk Assessment Framework, and internal audit." },
  ];

  const features = [
    { icon: <CheckIcon />, title: "Self Assessment", desc: "Structured questionnaires to evaluate your laboratory's readiness across all compliance dimensions." },
    { icon: <StarIcon />, title: "Results & Gaps", desc: "Detailed gap analysis with explanations highlighting areas requiring attention before application." },
    { icon: <LightbulbIcon />, title: "Guidance", desc: "Actionable recommendations and best practices to improve your readiness score efficiently." },
  ];

  const steps = [
    { num: "01", title: "Initiate Readiness Check", desc: "Begin the assessment process" },
    { num: "02", title: "Select Lab Type & Scope", desc: "Choose your laboratory category" },
    { num: "03", title: "Complete Assessment", desc: "Answer structured questionnaires" },
    { num: "04", title: "View Readiness Result", desc: "Get your readiness report" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', 'Outfit', system-ui, sans-serif", background: t.bg, color: t.text, minHeight: "100vh", transition: "all 0.3s ease", fontSize: "15px" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        .nav-link { color: ${t.textSub}; text-decoration: none; font-size: 14px; font-weight: 500; padding: 6px 12px; border-radius: 8px; transition: all 0.2s; }
        .nav-link:hover { color: ${t.accent}; background: ${t.featureIconBg}; }
        .feature-card { background: ${t.featureCard}; border: 1px solid ${t.featureCardBorder}; border-radius: 16px; padding: 28px 24px; transition: all 0.25s ease; cursor: default; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); border-color: ${t.accent}40; }
        .step-card { background: ${t.stepCard}; border: 1px solid ${t.stepCardBorder}; border-radius: 14px; padding: 28px 20px; flex: 1; min-width: 180px; text-align: center; transition: all 0.25s; }
        .step-card:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .req-card { background: ${t.reqCard}; border: 1px solid ${t.reqCardBorder}; border-radius: 14px; padding: 22px; display: flex; gap: 16px; align-items: flex-start; transition: all 0.25s; }
        .req-card:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.08); }
        .btn-primary { background: ${t.btnPrimary}; color: ${t.btnText}; border: none; padding: 14px 36px; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s; letter-spacing: 0.02em; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary:hover { background: ${t.btnPrimaryHover}; transform: translateY(-1px); box-shadow: 0 8px 25px rgba(29,78,216,0.35); }
        .toggle-btn { background: ${t.toggleBg}; border: 1px solid ${t.toggleBorder}; color: ${t.textSub}; width: 38px; height: 38px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .toggle-btn:hover { border-color: ${t.accent}; color: ${t.accent}; }
        .fade-in { opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 16}px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .section-badge { display: inline-flex; align-items: center; gap: 6px; background: ${t.badgeBg}; color: ${t.badgeText}; border: 1px solid ${t.badgeBorder}; padding: 4px 14px; border-radius: 999px; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 16px; }
        .arrow-connector { display: flex; align-items: center; color: ${t.accent}; opacity: 0.5; margin: 0 4px; }
        @media (max-width: 768px) { .steps-row { flex-direction: column !important; } .arrow-connector { transform: rotate(90deg); } .features-grid { grid-template-columns: 1fr !important; } .req-grid { grid-template-columns: 1fr !important; } .hero-inner { padding: 40px 24px 36px !important; } }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ background: t.navBg, borderBottom: `1px solid ${t.navBorder}`, position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: t.btnPrimary, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: t.text, letterSpacing: "-0.01em" }}>EEE Readiness Portal</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Readiness Check</a>
            <a href="#" className="nav-link" style={{ color: t.accent }}>Login →</a>
            <button className="toggle-btn" onClick={() => setDark(!dark)} title="Toggle theme">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: t.heroBg, padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Decorative orbs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: t.orb1, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: t.orb2, filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative" }} className="fade-in">
          <div className="section-badge">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
            Section 79A — IT Act, 2000
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 400, lineHeight: 1.18, color: t.text, marginBottom: 20, letterSpacing: "-0.02em" }}>
            EEE Application{" "}
            <span style={{ color: t.accent, fontStyle: "italic" }}>Readiness</span>{" "}
            Check Portal
          </h1>
          <p style={{ color: t.textSub, fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.75, maxWidth: 660, margin: "0 auto 40px", fontWeight: 400 }}>
            A platform to assess the preparedness of laboratories applying for notification as an <strong style={{ color: t.text, fontWeight: 600 }}>Examiner of Electronic Evidence (EEE)</strong> under Section 79A of the Information Technology Act, 2000.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary">
              Start Readiness Check <ArrowRightIcon />
            </button>
            <button style={{ background: "transparent", color: t.accent, border: `1.5px solid ${t.accent}40`, padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.background = t.featureIconBg; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = `${t.accent}40`; e.currentTarget.style.background = "transparent"; }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* MINIMUM REQUIREMENTS DIAGRAM */}
      <section style={{ padding: "72px 24px", background: t.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-badge">Core Framework</div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: t.text, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Minimum Requirements
            </h2>
            <p style={{ color: t.textSub, fontSize: 15, maxWidth: 540, margin: "0 auto" }}>
              Five key pillars assessed across your laboratory to determine EEE notification readiness.
            </p>
          </div>

          {/* Center hub + cards */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
            <div style={{ background: `linear-gradient(135deg, ${t.btnPrimary}, ${t.accentHover})`, borderRadius: "50%", width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 32px ${t.btnPrimary}40`, flexShrink: 0 }}>
              <div style={{ textAlign: "center", color: "#fff" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", lineHeight: 1.2, textTransform: "uppercase" }}>Minimum<br/>Require-<br/>ments</div>
              </div>
            </div>
          </div>

          <div className="req-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {reqNodes.map((node, i) => (
              <div key={i} className="req-card">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${node.color}18`, display: "flex", alignItems: "center", justifyContent: "center", color: node.color, flexShrink: 0 }}>
                  {node.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: t.text, marginBottom: 6 }}>{node.label}</div>
                  <div style={{ fontSize: 13, color: t.textSub, lineHeight: 1.65 }}>{node.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: 1, background: t.divider, maxWidth: 1100, margin: "0 auto" }} />

      {/* PORTAL FEATURES */}
      <section style={{ padding: "72px 24px", background: t.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-badge">What You Get</div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: t.text, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Portal Features
            </h2>
            <p style={{ color: t.textSub, fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
              Comprehensive tools to evaluate and strengthen your laboratory's readiness.
            </p>
          </div>

          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ width: 52, height: 52, borderRadius: 14, background: t.featureIconBg, display: "flex", alignItems: "center", justifyContent: "center", color: t.featureIconColor, marginBottom: 18 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: t.text, marginBottom: 10, letterSpacing: "-0.01em" }}>{f.title}</h3>
                <p style={{ color: t.textSub, fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT PROCESS */}
      <section style={{ padding: "72px 24px", background: dark ? "#0a0f16" : "#f1f5f9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-badge">How It Works</div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: t.text, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Assessment Process
            </h2>
            <p style={{ color: t.textSub, fontSize: 15, maxWidth: 420, margin: "0 auto" }}>
              Four simple steps to complete your readiness evaluation.
            </p>
          </div>

          <div className="steps-row" style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
            {steps.map((s, i) => (
              <>
                <div key={i} className="step-card">
                  <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 38, color: t.stepNum, marginBottom: 12, opacity: 0.8 }}>{s.num}</div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: t.text, marginBottom: 8, lineHeight: 1.35 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: t.stepText, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
                {i < steps.length - 1 && (
                  <div key={`arr-${i}`} className="arrow-connector">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ background: t.ctaBg, border: `1px solid ${t.ctaBorder}`, borderRadius: 20, padding: "52px 40px", textAlign: "center" }}>
            <div className="section-badge">Ready to Begin?</div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 400, color: t.text, marginBottom: 14, letterSpacing: "-0.02em" }}>
              Start Your Readiness Check
            </h2>
            <p style={{ color: t.textSub, fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 32px" }}>
              Take the first step towards EEE notification. Complete your self-assessment and identify gaps in your laboratory's readiness.
            </p>
            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 44px" }}>
              Begin Assessment <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ padding: "32px 24px 48px", background: t.bg }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: dark ? "rgba(245,158,11,0.08)" : "rgba(245,158,11,0.06)", border: `1px solid ${dark ? "rgba(245,158,11,0.2)" : "rgba(245,158,11,0.15)"}`, borderRadius: 12, padding: "18px 24px" }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#b45309", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>⚠ Disclaimer</div>
            <p style={{ color: t.textSub, fontSize: 13, lineHeight: 1.7 }}>
              This portal provides a readiness assessment for <strong style={{ color: t.text }}>self-evaluation purposes only</strong>. Results do not constitute accreditation. Notification of Examiner of Electronic Evidence is determined by the competent authority.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: t.footerBg, borderTop: `1px solid ${t.footerBorder}`, padding: "28px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <p style={{ color: t.footerText, fontSize: 13, textAlign: "center" }}>
            © 2026 Government Portal · All Rights Reserved
          </p>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {["Terms & Conditions", "Privacy Policy", "Sitemap"].map((link, i) => (
              <>
                {i > 0 && <span key={`sep-${i}`} style={{ color: t.footerText, fontSize: 12 }}>|</span>}
                <a key={link} href="#" style={{ color: t.footerText, fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseOver={e => e.currentTarget.style.color = t.accent}
                  onMouseOut={e => e.currentTarget.style.color = t.footerText}>
                  {link}
                </a>
              </>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

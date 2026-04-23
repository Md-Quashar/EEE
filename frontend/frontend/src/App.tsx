/*
import './App.css'
import EEEPortalHome from './components/ui/home'

function App() {


  return (
    
   <>
   <EEEPortalHome />
  
   </>
  )
}

export default App
*/


import { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { AssessmentProvider, useAssessment } from "@/context/AssessmentContext";
import { globalStyles } from "@/lib/styles";
import { HomePage } from "@/pages/HomePage";
import { ReadinessAssessment } from "@/pages/ReadinessAssessment";
import { LabTypeModal } from "@/components/modals/LabTypeModal";
import { ScopeEmailModal } from "@/components/modals/ScopeEmailModal";
import type { AppRoute, ModalStep } from "@/types";

// ─── Inner shell — lives inside both providers ────────────────────────────────
function AppShell() {
  const { setInfo, resetAssessment } = useAssessment();

  const [route,       setRoute]       = useState<AppRoute>("home");
  const [modalStep,   setModalStep]   = useState<ModalStep>("none");
  const [tempLabType, setTempLabType] = useState("");

  // ── Modal handlers ───────────────────────────────────────────────────────

  /** User clicked "Start Readiness Check" anywhere on the home page */
  const handleStartClick = () => {
    setTempLabType("");
    setModalStep("labtype");
  };

  /** User selected a lab type and clicked Continue */
  const handleLabTypeContinue = (labType: string) => {
    setTempLabType(labType);
    setModalStep("scope");
  };

  /** User submitted scopes + email → navigate to assessment */
  const handleScopeSubmit = (email: string, scopes: string[]) => {
    setInfo({ labType: tempLabType, labEmail: email, scopes });
    setModalStep("none");
    setRoute("assessment");
  };

  /** User navigates back to home from the assessment */
  const handleBackToHome = () => {
    resetAssessment();
    setRoute("home");
    setModalStep("none");
  };

  return (
    <>
      {/* ── Pages ───────────────────────────────────────────────────────── */}
      {route === "home" && (
        <HomePage onStartClick={handleStartClick} />
      )}

      {route === "assessment" && (
        <ReadinessAssessment onBack={handleBackToHome} />
      )}

      {/* ── Modals (always rendered on top of whatever page is showing) ─── */}
      <LabTypeModal
        open={modalStep === "labtype"}
        onContinue={handleLabTypeContinue}
      />

      <ScopeEmailModal
        open={modalStep === "scope"}
        onSubmit={handleScopeSubmit}
      />
    </>
  );
}

// ─── Root entry ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <ThemeProvider>
        <AssessmentProvider>
          <AppShell />
        </AssessmentProvider>
      </ThemeProvider>
    </>
  );
}


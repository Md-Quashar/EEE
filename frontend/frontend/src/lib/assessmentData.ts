import type { AssessmentSection } from "@/types";

export const LAB_TYPES = [
  { value: "central", label: "Central Government Laboratory" },
  { value: "state",   label: "State Government Laboratory"   },
  { value: "ut",      label: "Union Territory Laboratory"    },
];

export const SCOPE_AREAS = [
  "Cloud Forensics",
  "Digital Equipment / Machines Forensics",
  "Digital Audio Forensics",
  "Drone Forensics",
  "Mobile Devices Forensics",
  "Network Forensics",
  "Digital Device Specific Forensics",
  "Digital Video / Image Forensics",
  "CCTV Forensics",
  "Computer (Media) Forensics",
];

export const ASSESSMENT_SECTIONS: AssessmentSection[] = [
  {
    id: 1,
    shortTitle: "Basic Details & Statutory Requirements",
    title: "Basic Details & Statutory Requirements",
    questions: [
      {
        id: "q1_1", required: true, type: "yesno",
        text: "Is there any Government Order (G.O.), Gazette Notification, or Special Order available to support or authorize the activity?",
        hint: "Verify whether an official Government Order, Gazette Notification, or Special Order has been issued by the competent authority.",
      },
      {
        id: "q1_2", required: true, type: "text",
        text: "Laboratory Name",
        hint: "Please provide the full official name of the Laboratory.",
      },
      {
        id: "q1_3", required: true, type: "text",
        text: "Laboratory Address",
        hint: "Please provide the complete address including district, state, and PIN code.",
      },
      {
        id: "q1_4", required: true, type: "yesno",
        text: "Is the laboratory a dedicated, standalone forensic laboratory (not a sub-unit of a non-forensic department)?",
        hint: "A dedicated forensic lab has its own infrastructure, staff, and chain of command.",
      },
      {
        id: "q1_5", required: true, type: "yesno",
        text: "Is the laboratory duly authorized or notified as a forensic laboratory by the competent State/Central authority?",
        hint: "Check if there is a formal notification or authorization letter on record.",
      },
    ],
  },

  {
    id: 2,
    shortTitle: "Physical Premises and Lab Space",
    title: "Physical Premises and Lab Space",
    questions: [
      {
        id: "q2_1", required: true, type: "yesno",
        text: "Does the laboratory have adequate and dedicated physical space for conducting digital forensics examinations?",
        hint: "The lab space should be sufficient to accommodate workstations, storage, and examination activities without overcrowding.",
      },
      {
        id: "q2_2", required: true, type: "yesno",
        text: "Is the laboratory space physically separated from non-forensic/administrative areas?",
        hint: "Forensic examination areas must be clearly demarcated from common or administrative spaces.",
      },
      {
        id: "q2_3", required: true, type: "yesno",
        text: "Is there restricted/controlled physical access to the laboratory premises?",
        hint: "Only authorised personnel should be permitted entry into the examination area.",
      },
      {
        id: "q2_4", required: true, type: "yesno",
        text: "Is the laboratory environment climate-controlled (air-conditioning, humidity and temperature regulation)?",
        hint: "Stable temperature and humidity are essential for equipment performance and evidence preservation.",
      },
      {
        id: "q2_5", required: true, type: "yesno",
        text: "Is there a designated and separate evidence reception/intake area?",
        hint: "A dedicated intake area ensures evidence is logged and controlled from the moment of arrival.",
      },
      {
        id: "q2_6", required: true, type: "yesno",
        text: "Is there adequate, stable power supply with proper earthing and cable management?",
        hint: "Poor power quality can damage equipment and corrupt ongoing examinations.",
      },
    ],
  },

  {
    id: 3,
    shortTitle: "Physical and Logical Security",
    title: "Physical and Logical Security",
    questions: [
      {
        id: "q3_1", required: true, type: "yesno",
        text: "Is there a physical access control system (biometric reader, key card, or PIN lock) installed at laboratory entry points?",
        hint: "Access control systems ensure only authorised staff can enter sensitive areas.",
      },
      {
        id: "q3_2", required: true, type: "yesno",
        text: "Are CCTV surveillance cameras installed inside and around the laboratory premises?",
        hint: "Video surveillance provides an auditable record of all personnel movement.",
      },
      {
        id: "q3_3", required: true, type: "yesno",
        text: "Is there a documented Information Security Policy (ISP) for the laboratory?",
        hint: "An ISP defines rules governing the protection of sensitive data and systems.",
      },
      {
        id: "q3_4", required: true, type: "yesno",
        text: "Are forensic examination workstations isolated/air-gapped from the public internet?",
        hint: "Internet connectivity on examination systems risks evidence contamination and data leakage.",
      },
      {
        id: "q3_5", required: true, type: "yesno",
        text: "Are system and application access logs maintained and periodically reviewed?",
        hint: "Audit logs allow reconstruction of events in case of disputes or security incidents.",
      },
      {
        id: "q3_6", required: true, type: "yesno",
        text: "Are USB ports and external media access restricted or controlled on forensic systems?",
        hint: "Unrestricted media access can introduce malware or allow unauthorised data transfer.",
      },
    ],
  },

  {
    id: 4,
    shortTitle: "Fire and Electric Hazard",
    title: "Fire and Electric Hazard",
    questions: [
      {
        id: "q4_1", required: true, type: "yesno",
        text: "Is there a functional fire detection system (smoke/heat detectors) installed in the laboratory?",
        hint: "Early fire detection is critical for protecting evidence and personnel.",
      },
      {
        id: "q4_2", required: true, type: "yesno",
        text: "Is a fire suppression system (CO₂, FM-200, or sprinkler) installed and operational?",
        hint: "Suppression systems must be appropriate for electronic equipment — water-based systems can damage hardware.",
      },
      {
        id: "q4_3", required: true, type: "yesno",
        text: "Are fire extinguishers available at accessible locations and subject to regular maintenance/refilling?",
        hint: "Extinguishers should be of the correct type (CO₂/dry powder) and inspected at least annually.",
      },
      {
        id: "q4_4", required: true, type: "yesno",
        text: "Is there UPS (Uninterruptible Power Supply) and/or generator backup for critical forensic equipment?",
        hint: "Power interruptions during examination can corrupt evidence or damage ongoing processes.",
      },
      {
        id: "q4_5", required: true, type: "yesno",
        text: "Are all electrical installations in the laboratory certified and subject to periodic safety inspections?",
        hint: "Electrical faults are a leading cause of fire — regular certification mitigates this risk.",
      },
      {
        id: "q4_6", required: true, type: "yesno",
        text: "Is there a documented emergency evacuation plan specific to the laboratory?",
        hint: "The plan should include fire exits, assembly points, and roles/responsibilities of staff.",
      },
    ],
  },

  {
    id: 5,
    shortTitle: "Support Services & Secure Storage",
    title: "Support Services, Safety and Secure Storage",
    questions: [
      {
        id: "q5_1", required: true, type: "yesno",
        text: "Is there a secure, access-controlled evidence storage room with restricted entry?",
        hint: "Evidence must be stored in a manner that prevents tampering, theft, or inadvertent damage.",
      },
      {
        id: "q5_2", required: true, type: "yesno",
        text: "Is a documented chain of custody process followed for all digital evidence received and examined?",
        hint: "Chain of custody records must capture every person who handled the evidence, with timestamps.",
      },
      {
        id: "q5_3", required: true, type: "yesno",
        text: "Is there a tamper-evident evidence packaging and sealing process in place?",
        hint: "Evidence packaging should visibly indicate if it has been opened or interfered with after sealing.",
      },
      {
        id: "q5_4", required: true, type: "yesno",
        text: "Are backup systems (on-site and off-site) in place for forensic case data and images?",
        hint: "Regular, verified backups protect against data loss due to hardware failure or disaster.",
      },
      {
        id: "q5_5", required: true, type: "yesno",
        text: "Is there a documented data retention and secure disposal policy?",
        hint: "Defines how long forensic data is retained and how it is securely destroyed upon expiry.",
      },
      {
        id: "q5_6", required: true, type: "yesno",
        text: "Is network access for non-forensic services (email, admin work) segregated from forensic examination networks?",
        hint: "Network segmentation prevents cross-contamination between operational and forensic environments.",
      },
    ],
  },

  {
    id: 6,
    shortTitle: "Tools and Equipment",
    title: "Tools and Equipment",
    questions: [
      {
        id: "q6_1", required: true, type: "yesno",
        text: "Does the laboratory possess valid, licensed forensic software tools for each selected scope area?",
        hint: "Each scope (e.g., mobile forensics, cloud forensics) requires specific licensed tooling.",
      },
      {
        id: "q6_2", required: true, type: "yesno",
        text: "Are hardware write-blockers available for forensic evidence acquisition?",
        hint: "Write-blockers prevent any data from being written back to original evidence during acquisition.",
      },
      {
        id: "q6_3", required: true, type: "yesno",
        text: "Are forensic tools and software regularly updated to their latest supported/certified versions?",
        hint: "Outdated tools may fail to handle current file systems, operating systems, or encryption.",
      },
      {
        id: "q6_4", required: true, type: "yesno",
        text: "Are Standard Operating Procedures (SOPs) defined and documented for each forensic tool used?",
        hint: "SOPs ensure consistency in examination methodology and support defensibility of findings.",
      },
      {
        id: "q6_5", required: true, type: "yesno",
        text: "Is there a formal tool validation and verification process before tools are used in casework?",
        hint: "Validation confirms a tool produces accurate and repeatable results on known test data.",
      },
      {
        id: "q6_6", required: true, type: "yesno",
        text: "Are dedicated forensic workstations and/or servers available with adequate processing specifications?",
        hint: "Underpowered hardware can significantly delay examinations and affect throughput.",
      },
      {
        id: "q6_7", required: true, type: "yesno",
        text: "Is an inventory/register of all forensic tools and equipment maintained and kept up to date?",
        hint: "An asset register supports license compliance audits and equipment lifecycle management.",
      },
    ],
  },

  {
    id: 7,
    shortTitle: "Manpower",
    title: "Manpower",
    questions: [
      {
        id: "q7_1", required: true, type: "yesno",
        text: "Is there a designated Reporting Officer with the requisite qualifications and experience as prescribed for EEE?",
        hint: "The Reporting Officer is responsible for signing forensic examination reports.",
      },
      {
        id: "q7_2", required: true, type: "yesno",
        text: "Is there a designated Reviewing Officer with the requisite qualifications and experience as prescribed for EEE?",
        hint: "The Reviewing Officer provides technical oversight and countersigns reports.",
      },
      {
        id: "q7_3", required: true, type: "yesno",
        text: "Do all forensic examiners hold relevant educational qualifications (B.Tech/M.Tech/MCA in CS/IT or equivalent)?",
        hint: "Minimum educational criteria are specified in the EEE notification guidelines.",
      },
      {
        id: "q7_4", required: true, type: "yesno",
        text: "Have examiners undergone formal, certified training in digital forensics from a recognised institution or training programme?",
        hint: "Certifications from bodies such as CDAC, CERT-In empanelled agencies, or equivalent are preferred.",
      },
      {
        id: "q7_5", required: true, type: "yesno",
        text: "Is there a documented, periodic training and skill upgradation programme for all forensic examiners?",
        hint: "Digital forensics evolves rapidly — examiners must receive regular training to remain current.",
      },
      {
        id: "q7_6", required: true, type: "number",
        text: "What is the total number of trained and qualified forensic examiners currently available in the laboratory?",
        hint: "Include only examiners meeting the EEE qualification criteria, not support staff.",
      },
    ],
  },

  {
    id: 8,
    shortTitle: "Lab Management System",
    title: "Lab Management System",
    questions: [
      {
        id: "q8_1", required: true, type: "yesno",
        text: "Is there a documented Quality Management System (QMS) in place for the laboratory?",
        hint: "A QMS defines processes, responsibilities, and standards for consistent, high-quality examination output.",
      },
      {
        id: "q8_2", required: true, type: "yesno",
        text: "Is a Quality System Manual prepared, approved, and available for reference?",
        hint: "The Quality System Manual is the top-level document describing the laboratory's quality framework.",
      },
      {
        id: "q8_3", required: true, type: "yesno",
        text: "Has a formal Risk Assessment Framework been developed and implemented for laboratory operations?",
        hint: "Risk assessment identifies threats to examination integrity, data security, and continuity of operations.",
      },
      {
        id: "q8_4", required: true, type: "yesno",
        text: "Is there an Internal Audit mechanism with defined schedules, scope, and corrective action processes?",
        hint: "Internal audits verify ongoing compliance with SOPs, QMS policies, and regulatory requirements.",
      },
      {
        id: "q8_5", required: true, type: "yesno",
        text: "Is there a case management system (software or documented register) for logging, tracking, and closing forensic cases?",
        hint: "A case management system ensures traceability of all cases from intake to report dispatch.",
      },
      {
        id: "q8_6", required: true, type: "yesno",
        text: "Are there standardised, documented formats for recording examination findings and issuing forensic reports?",
        hint: "Standardised reports improve consistency and support legal admissibility of findings.",
      },
      {
        id: "q8_7", required: true, type: "yesno",
        text: "Is there a documented feedback and grievance mechanism for case requestors (police/courts)?",
        hint: "Feedback mechanisms help identify service gaps and improve turnaround times.",
      },
    ],
  },
];

/** Returns true when all required questions in a section have answers */
export function isSectionComplete(
  section: AssessmentSection,
  answers: Record<string, string>
): boolean {
  return section.questions
    .filter((q) => q.required)
    .every((q) => answers[q.id] && answers[q.id].trim() !== "");
}

/** Overall completion percentage across all sections */
export function overallProgress(answers: Record<string, string>): number {
  const all = ASSESSMENT_SECTIONS.flatMap((s) => s.questions.filter((q) => q.required));
  const done = all.filter((q) => answers[q.id] && answers[q.id].trim() !== "");
  return Math.round((done.length / all.length) * 100);
}

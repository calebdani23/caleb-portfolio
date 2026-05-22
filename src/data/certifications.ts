export type CertificationItem = {
  title: string;
  issuer: string;
  focus: string;
  href: string;
  previewImage?: string;
  previewAlt?: string;
};

export type CertificationProgram = {
  title: string;
  issuer: string;
  summary: string;
  mainCertificates: CertificationItem[];
  courseCertificates: CertificationItem[];
};

export type RecognitionItem = {
  title: string;
  context: string;
  description: string;
  evidenceNote: string;
};

export const certificationPrograms: CertificationProgram[] = [
  {
    title: "Google IT Support",
    issuer: "Google",
    summary:
      "Complete program focused on technical support, networking, operating systems, infrastructure administration and IT security.",
    mainCertificates: [
      {
        title: "Google IT Support Professional Certificate",
        issuer: "Google",
        focus: "Main certificate for the IT Support Professional Certificate program.",
        href: "/docs/certificados/google-it-support/google-it-support-professional-certificate-caleb.pdf",
        previewImage: "/images/certificates/google-it-support-professional-certificate-caleb.png",
        previewAlt: "Rendered first page of Caleb Perez's Google IT Support Professional Certificate.",
      },
    ],
    courseCertificates: [
      {
        title: "Technical Support Fundamentals",
        issuer: "Google",
        focus: "Technical support fundamentals and structured incident resolution.",
        href: "/docs/certificados/google-it-support/technical-support-fundamentals-caleb-perez.pdf",
      },
      {
        title: "Technical support fundamentals · Spanish certificate",
        issuer: "Google",
        focus: "Spanish-language certificate for technical support fundamentals.",
        href: "/docs/certificados/google-it-support/aspectos-basicos-asistencia-tecnica-caleb-perez.pdf",
      },
      {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        focus: "Networking, protocols, connectivity and basic infrastructure diagnostics.",
        href: "/docs/certificados/google-it-support/bits-and-bytes-networking-caleb-perez.pdf",
      },
      {
        title: "Operating Systems and You: Becoming a Power User",
        issuer: "Google",
        focus: "Operating systems, command line, users, permissions and daily operations.",
        href: "/docs/certificados/google-it-support/operating-systems-power-user-caleb-perez.pdf",
      },
      {
        title: "System Administration and IT Infrastructure Services",
        issuer: "Google",
        focus: "Service administration, infrastructure, operations and systems support.",
        href: "/docs/certificados/google-it-support/system-administration-it-infrastructure-caleb-perez.pdf",
      },
      {
        title: "IT Security: Defense against the digital dark arts",
        issuer: "Google",
        focus: "Security, threats, defense, authentication and protection of digital environments.",
        href: "/docs/certificados/google-it-support/it-security-caleb-perez.pdf",
      },
    ],
  },
  {
    title: "Oracle Next Education + Alura",
    issuer: "Oracle ONE / Alura",
    summary:
      "Training program and associated courses that strengthened self-development, continuous learning, Git and technical collaboration.",
    mainCertificates: [
      {
        title: "Programa Oracle + Alura",
        issuer: "Oracle ONE / Alura",
        focus: "Main certificate for the Oracle + Alura training program.",
        href: "/docs/certificados/oracle-alura/programa-oracle-alura-caleb-perez.pdf",
        previewImage: "/images/certificates/programa-oracle-alura-caleb-perez.png",
        previewAlt: "Rendered first page of Caleb Perez's main Oracle + Alura certificate.",
      },
    ],
    courseCertificates: [
      {
        title: "Learning to learn: techniques for self-development",
        issuer: "Alura + Oracle ONE",
        focus: "Self-development, learning discipline and habits for independent progress.",
        href: "/docs/certificados/oracle-alura/aprender-a-aprender-caleb-perez.pdf",
      },
      {
        title: "Learning to learn · course certificate",
        issuer: "Alura + Oracle ONE",
        focus: "Additional certificate for the self-development techniques course.",
        href: "/docs/certificados/oracle-alura/curso-aprender-a-aprender-alura-caleb-perez.pdf",
      },
      {
        title: "Git y GitHub",
        issuer: "Alura + Oracle ONE",
        focus: "Version control, repositories and technical collaboration with GitHub.",
        href: "/docs/certificados/oracle-alura/git-github-caleb-perez.pdf",
      },
    ],
  },
];

export const certifications = certificationPrograms;

export const recognitionItems: RecognitionItem[] = [
  {
    title: "FIFA World Cup 2026 Volunteer Process",
    context: "Global event · Registration stage",
    description:
      "Volunteer registration/selection-stage material included as a conservative signal of service mindset, international collaboration and interest in event-level operations.",
    evidenceNote: "Text-only card; it does not claim a confirmed volunteer role until public-ready confirmation is available.",
  },
  {
    title: "Road Trip Around New Zealand",
    context: "Independence · Adaptability",
    description:
      "Personal milestone from living abroad: planning, navigating and adapting across a country while working and making decisions independently.",
    evidenceNote: "Personal recognition; no private documents or IDs are published.",
  },
  {
    title: "SuperCupNI International Youth Football Tournament",
    context: "International competition · Team discipline",
    description:
      "International football experience included as evidence of competitive discipline, teamwork and performance in unfamiliar environments.",
    evidenceNote: "Text-only card until public-ready proof or media is provided.",
  },
];

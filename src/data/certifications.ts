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
  image?: string;
  imageAlt?: string;
};

export const certificationPrograms: CertificationProgram[] = [
  {
    title: "Google IT Support",
    issuer: "Google",
    summary:
      "Official Google IT Support certificate set focused on technical support, networking, operating systems, infrastructure administration and IT security.",
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
        href: "/docs/certificados/google-it-support/certificado-google-technical-support-fundamentals-caleb-perez.pdf",
      },
      {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        focus: "Networking, protocols, connectivity and basic infrastructure diagnostics.",
        href: "/docs/certificados/google-it-support/certificado-google-the-bits-and-bytes-of-computer-networking-caleb-perez.pdf",
      },
      {
        title: "Operating Systems and You: Becoming a Power User",
        issuer: "Google",
        focus: "Operating systems, command line, users, permissions and daily operations.",
        href: "/docs/certificados/google-it-support/certificado-google-operating-systems-and-you-becoming-a-power-user-caleb-perez.pdf",
      },
      {
        title: "System Administration and IT Infrastructure Services",
        issuer: "Google",
        focus: "Service administration, infrastructure, operations and systems support.",
        href: "/docs/certificados/google-it-support/certificado-google-system-administration-and-it-infrastructure-services-caleb-perez.pdf",
      },
      {
        title: "IT Security: Defense against the digital dark arts",
        issuer: "Google",
        focus: "Security, threats, defense, authentication and protection of digital environments.",
        href: "/docs/certificados/google-it-support/certificado-google-it-security-defense-against-the-digital-dark-arts-caleb-perez.pdf",
      },
    ],
  },
  {
    title: "Oracle Next Education + Alura",
    issuer: "Oracle ONE / Alura",
    summary:
      "Official Oracle ONE / Alura program certificate plus the complete public course breakdown currently present in intake.",
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
        title: "Desarrollo Personal G5 ONE",
        issuer: "Alura + Oracle ONE",
        focus: "Self-development, learning discipline and habits for independent progress.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Desarrollo_Personal_G5_ONE.pdf",
      },
      {
        title: "Business Agility G5 ONE",
        issuer: "Alura + Oracle ONE",
        focus: "Agile business foundations, collaboration and adaptable execution.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Business_Agility_G5_ONE.pdf",
      },
      {
        title: "Principiante en Programación G5 ONE",
        issuer: "Alura + Oracle ONE",
        focus: "Introductory programming foundations and problem-solving practice.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Principiante_en_Programacion_G5_ONE.pdf",
      },
      {
        title: "Java y Spring Boot G5 ONE",
        issuer: "Alura + Oracle ONE",
        focus: "Java backend learning path with Spring Boot context.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Java_y_Spring_Boot_G5_ONE.pdf",
      },
      {
        title: "Java y Spring Boot",
        issuer: "Alura",
        focus: "Additional Java and Spring Boot course certificate from the official intake set.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Java_y_Spring_Boot.pdf",
      },
      {
        title: "Java Orientado a Objetos G5 ONE",
        issuer: "Alura + Oracle ONE",
        focus: "Object-oriented Java concepts, structure and implementation practice.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Java_Orientado_a_Objetos_G5_ONE.pdf",
      },
      {
        title: "Integre Aplicaciones Java con Base de Datos",
        issuer: "Alura",
        focus: "Java application integration with database-backed persistence.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Integre_Aplicaciones_Java_Base_Datos.pdf",
      },
      {
        title: "Emprendimiento G5 ONE",
        issuer: "Alura + Oracle ONE",
        focus: "Entrepreneurship mindset, business initiative and early-stage execution.",
        href: "/docs/certificados/oracle-alura/Caleb_Perez_Alura_Emprendimiento_G5_ONE.pdf",
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
    evidenceNote: "Uses only a safe intake photo; private PDFs and acceptance/application details remain unpublished.",
    image: "/images/recognitions/fifa-volunteer-tryouts.jpg",
    imageAlt: "Caleb Perez at a FIFA World Cup 2026 volunteer process event.",
  },
  {
    title: "Road Trip Around New Zealand",
    context: "Independence · Adaptability",
    description:
      "Personal milestone from living abroad: planning, navigating and adapting across a country while working and making decisions independently.",
    evidenceNote: "Uses a public-safe travel photo; road trip PDFs remain internal source material.",
    image: "/images/recognitions/new-zealand-road-trip.jpg",
    imageAlt: "New Zealand road trip photo from Caleb Perez's year abroad.",
  },
  {
    title: "SuperCupNI International Youth Football Tournament",
    context: "International competition · Team discipline",
    description:
      "International football experience included as evidence of competitive discipline, teamwork and performance in unfamiliar environments.",
    evidenceNote: "Uses a tournament/sports photo only; no sensitive travel or registration documents are published.",
    image: "/images/recognitions/supercupni-football.jpg",
    imageAlt: "Caleb Perez playing football during the SuperCupNI international youth tournament context.",
  },
];

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

export const certificationPrograms: CertificationProgram[] = [
  {
    title: "Google IT Support",
    issuer: "Google",
    summary:
      "Programa completo orientado a soporte técnico, redes, sistemas operativos, administración de infraestructura y seguridad IT.",
    mainCertificates: [
      {
        title: "Google IT Support Professional Certificate",
        issuer: "Google",
        focus: "Certificado principal del programa profesional de soporte IT.",
        href: "/docs/certificados/google-it-support/google-it-support-professional-certificate-caleb.pdf",
        previewImage: "/images/certificates/google-it-support-professional-certificate-caleb.png",
        previewAlt: "Primera página renderizada del certificado Google IT Support Professional Certificate de Caleb Perez.",
      },
    ],
    courseCertificates: [
      {
        title: "Technical Support Fundamentals",
        issuer: "Google",
        focus: "Fundamentos de asistencia técnica y resolución estructurada de incidencias.",
        href: "/docs/certificados/google-it-support/technical-support-fundamentals-caleb-perez.pdf",
      },
      {
        title: "Aspectos básicos de la asistencia técnica",
        issuer: "Google",
        focus: "Versión/constancia en español de fundamentos de soporte técnico.",
        href: "/docs/certificados/google-it-support/aspectos-basicos-asistencia-tecnica-caleb-perez.pdf",
      },
      {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        focus: "Redes, protocolos, conectividad y diagnóstico de infraestructura básica.",
        href: "/docs/certificados/google-it-support/bits-and-bytes-networking-caleb-perez.pdf",
      },
      {
        title: "Operating Systems and You: Becoming a Power User",
        issuer: "Google",
        focus: "Sistemas operativos, línea de comandos, usuarios, permisos y operación diaria.",
        href: "/docs/certificados/google-it-support/operating-systems-power-user-caleb-perez.pdf",
      },
      {
        title: "System Administration and IT Infrastructure Services",
        issuer: "Google",
        focus: "Administración de servicios, infraestructura, operación y soporte a sistemas.",
        href: "/docs/certificados/google-it-support/system-administration-it-infrastructure-caleb-perez.pdf",
      },
      {
        title: "IT Security: Defense against the digital dark arts",
        issuer: "Google",
        focus: "Seguridad, amenazas, defensa, autenticación y protección de entornos digitales.",
        href: "/docs/certificados/google-it-support/it-security-caleb-perez.pdf",
      },
    ],
  },
  {
    title: "Oracle Next Education + Alura",
    issuer: "Oracle ONE / Alura",
    summary:
      "Programa de formación y cursos asociados para fortalecer autodesarrollo, aprendizaje continuo, Git y colaboración técnica.",
    mainCertificates: [
      {
        title: "Programa Oracle + Alura",
        issuer: "Oracle ONE / Alura",
        focus: "Constancia principal correcta del programa de formación Oracle + Alura.",
        href: "/docs/certificados/oracle-alura/programa-oracle-alura-caleb-perez.pdf",
        previewImage: "/images/certificates/programa-oracle-alura-caleb-perez.png",
        previewAlt: "Primera página renderizada del certificado principal del programa Oracle + Alura de Caleb Perez.",
      },
    ],
    courseCertificates: [
      {
        title: "Aprender a aprender: técnicas para tu autodesarrollo",
        issuer: "Alura + Oracle ONE",
        focus: "Autodesarrollo, disciplina de aprendizaje y hábitos para avanzar de forma independiente.",
        href: "/docs/certificados/oracle-alura/aprender-a-aprender-caleb-perez.pdf",
      },
      {
        title: "Aprender a aprender · certificado de curso",
        issuer: "Alura + Oracle ONE",
        focus: "Certificado adicional del curso de técnicas de autodesarrollo.",
        href: "/docs/certificados/oracle-alura/curso-aprender-a-aprender-alura-caleb-perez.pdf",
      },
      {
        title: "Git y GitHub",
        issuer: "Alura + Oracle ONE",
        focus: "Control de versiones, repositorios y colaboración técnica con GitHub.",
        href: "/docs/certificados/oracle-alura/git-github-caleb-perez.pdf",
      },
    ],
  },
];

export const certifications = certificationPrograms;

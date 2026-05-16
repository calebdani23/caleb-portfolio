export type ProjectStatus = "En desarrollo" | "Concepto" | "MVP" | "Infraestructura" | "Case study";

export type Project = {
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  slug?: string;
  href?: string;
  featured?: boolean;
  visualLabel: string;
  highlights?: string[];
  metrics?: Array<{
    value: string;
    label: string;
  }>;
};

export const projects: Project[] = [
  {
    title: "Zalmar Travel",
    category: "Travel tech · IA · Flujos de reserva",
    description:
      "Plataforma AI-enabled para planear, cotizar y reservar viajes con plan maestro, workspace operativo, integraciones reales y agentes por viaje.",
    status: "En desarrollo",
    tags: ["Hotelbeds", "Duffel", "Agentes IA", "UX/UI", "Reservas"],
    slug: "zalmar-travel",
    href: "/proyectos/zalmar-travel",
    featured: true,
    visualLabel: "Producto principal",
    highlights: [
      "Plan maestro para agrupar vuelos, hoteles, actividades y traslados en una sola experiencia.",
      "Workspace operativo para cotización, hold, booking, vouchers y seguimiento del viaje.",
      "Integración conceptual con Hotelbeds y Duffel para conectar disponibilidad real con una UX clara.",
      "Agentes de IA por plan para asistir decisiones, comparar opciones y acelerar operación.",
    ],
    metrics: [
      { value: "4", label: "verticales de viaje" },
      { value: "IA", label: "por plan/viaje" },
      { value: "End-to-end", label: "cotización a voucher" },
    ],
  },
  {
    title: "AI Booking Orchestrator",
    category: "Arquitectura · Reservas multi-servicio",
    description:
      "Diseño de orquestación para reservar servicios de viaje como un flujo coordinado, no como piezas aisladas sin contexto.",
    status: "Concepto",
    tags: ["Orquestación", "REST APIs", "Planes de viaje", "Automatización"],
    slug: "ai-booking-orchestrator",
    href: "/proyectos/ai-booking-orchestrator",
    visualLabel: "Sistema de flujo",
  },
  {
    title: "Visual Runner Server",
    category: "Infraestructura · Automatización visual",
    description:
      "Servidor propio en Ubuntu para navegación real, validaciones visuales y soporte a agentes que prueban experiencias web.",
    status: "Infraestructura",
    tags: ["Ubuntu Server", "Tailscale", "Automatización", "Agentes"],
    slug: "visual-runner-server",
    href: "/proyectos/visual-runner-server",
    visualLabel: "Laboratorio server",
  },
  {
    title: "Travel Booking UX System",
    category: "UX/UI · Product design",
    description:
      "Sistema conceptual de pantallas, estados y decisiones para que buscar, cotizar y reservar viajes se sienta moderno y confiable.",
    status: "Case study",
    tags: ["Wireframes", "Flujos de usuario", "Design systems", "UX de reservas"],
    slug: "travel-booking-ux-system",
    href: "/proyectos/travel-booking-ux-system",
    visualLabel: "Mapa UX",
  },
  {
    title: "Personal Portfolio System",
    category: "Astro · Narrativa técnica",
    description:
      "Este portafolio como sistema vivo: una home narrativa, modular y preparada para convertirse en case studies editables.",
    status: "MVP",
    tags: ["Astro", "TypeScript", "Tailwind", "Arquitectura de contenido"],
    visualLabel: "Sitio vivo",
  },
];

export const featuredProject = projects[0] as Project;

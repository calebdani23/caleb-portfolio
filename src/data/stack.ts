export type StackGroup = {
  title: string;
  description: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces rápidas, limpias y pensadas para contar una historia de producto.",
    items: ["Astro", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend / APIs",
    description: "Conexión entre flujos de negocio, datos externos y experiencias útiles.",
    items: ["FastAPI", "REST APIs", "Integraciones", "Flujos transaccionales"],
  },
  {
    title: "AI / Agents",
    description: "Agentes como copilotos de operación, validación y construcción de producto.",
    items: ["OpenCode", "Gentle-AI", "OpenAI", "Agentes por flujo"],
  },
  {
    title: "Travel Tech",
    description: "Diseño de experiencias complejas para búsqueda, cotización y reserva.",
    items: ["Hotelbeds", "Duffel", "Booking flows", "Vouchers"],
  },
  {
    title: "Infraestructura",
    description: "Servidores propios y redes privadas para aprender con sistemas reales.",
    items: ["Ubuntu Server", "CasaOS", "Tailscale", "SMB", "Docker"],
  },
  {
    title: "Producto / UX",
    description: "Del problema a flujos claros: wireframes, estados, decisiones y validación.",
    items: ["Wireframes", "Design systems", "User flows", "Booking UX"],
  },
];

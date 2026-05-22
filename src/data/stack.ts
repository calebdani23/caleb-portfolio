export type StackGroup = {
  title: string;
  description: string;
  items: string[];
  icon: string;
  tone: "frontend" | "backend" | "ai" | "travel" | "infra" | "ux";
};

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    description: "Fast, clean interfaces designed to communicate a product story.",
    items: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    icon: "✦",
    tone: "frontend",
  },
  {
    title: "Backend / APIs",
    description: "Connections between business flows, external data and useful experiences.",
    items: ["FastAPI", "REST APIs", "Python", "Integrations"],
    icon: "⌁",
    tone: "backend",
  },
  {
    title: "AI / Agents",
    description: "Agents as copilots for operations, validation and product construction.",
    items: ["OpenAI", "OpenCode", "AI Agents", "Automation workflows"],
    icon: "◇",
    tone: "ai",
  },
  {
    title: "Travel Tech",
    description: "Complex experiences for search, quoting, booking and post-booking clarity.",
    items: ["Hotelbeds", "Duffel", "Booking flows", "Vouchers"],
    icon: "✈",
    tone: "travel",
  },
  {
    title: "Infrastructure",
    description: "Self-hosted servers and private networks for learning with real systems.",
    items: ["Ubuntu Server", "Docker", "CasaOS", "Tailscale", "SMB", "Linux"],
    icon: "▣",
    tone: "infra",
  },
  {
    title: "Product / UX",
    description: "From problem to clear flows: wireframes, states, decisions and validation.",
    items: ["Figma / Canva", "Wireframes", "Design systems", "User flows", "Booking UX"],
    icon: "◒",
    tone: "ux",
  },
];

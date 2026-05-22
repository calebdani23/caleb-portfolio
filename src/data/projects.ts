export type ProjectStatus = "In development" | "Concept" | "MVP" | "Infrastructure" | "Case study" | "Private lab" | "Text-first";

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
  visualKind?: "screenshot" | "orchestration" | "server" | "ux-map" | "portfolio" | "dashboard" | "code";
  previewImage?: string;
  featuredImage?: string;
  previewAlt?: string;
  previewTone?: "cyan" | "sky" | "amber" | "emerald";
  previewObjectFit?: "cover" | "contain";
  previewObjectPosition?: string;
  highlights?: string[];
  metrics?: Array<{
    value: string;
    label: string;
  }>;
};

export const projects: Project[] = [
  {
    title: "Zalmar Travel",
    category: "Travel tech · AI orchestration · Booking UX",
    description:
      "AI-powered travel platform for complete trip planning and management — unifying orchestration, booking UX, provider integrations and plan-based AI assistants inside one Zalmar product.",
    status: "In development",
    tags: ["AI travel platform", "Private MVP", "Booking orchestration", "Booking UX", "Hotelbeds", "Duffel"],
    slug: "zalmar-travel",
    href: "/proyectos/zalmar-travel",
    featured: true,
    visualLabel: "Main product",
    visualKind: "screenshot",
    previewImage: "/images/projects/zalmar-travel/01-public-inicio.png",
    featuredImage: "/images/projects/zalmar-travel/10-auth-booking-plan-final.png",
    previewAlt: "Zalmar Travel public interface and authenticated travel planning workspace",
    previewTone: "cyan",
    previewObjectFit: "cover",
    previewObjectPosition: "top center",
    highlights: [
      "Master itinerary to group flights, hotels, activities and transfers inside one decision space.",
      "Operational workspace for quoting, holds, booking, vouchers and trip follow-up.",
      "Provider-aware architecture designed around Hotelbeds and Duffel-style availability flows.",
      "Plan-based AI assistants and UX patterns to compare options, explain tradeoffs and reduce operational friction.",
    ],
    metrics: [
      { value: "4", label: "travel verticals" },
      { value: "AI", label: "per trip plan" },
      { value: "End-to-end", label: "quote to voucher" },
    ],
  },
  {
    title: "AI Agent Observability Dashboard",
    category: "AI systems · Monitoring",
    description:
      "Text-first concept for tracking AI agent runs, decisions, failures and human review points so automation remains understandable and accountable.",
    status: "Text-first",
    tags: ["AI agents", "Observability", "Human review", "Product telemetry"],
    visualLabel: "Observability layer",
    visualKind: "dashboard",
    previewTone: "cyan",
  },
  {
    title: "AI Codebase Explainer",
    category: "Developer tools · AI",
    description:
      "AI/dev-tooling project idea focused on helping people understand codebases through structured summaries, architecture maps and safer onboarding notes.",
    status: "Text-first",
    tags: ["Code understanding", "AI tooling", "Architecture maps", "Documentation"],
    visualLabel: "Code intelligence",
    visualKind: "code",
    previewTone: "sky",
  },
  {
    title: "Visual Runner Server",
    category: "Infrastructure · Visual automation",
    description:
      "Self-hosted Ubuntu server for real browser navigation, visual validation and agent-assisted checks across web product experiences.",
    status: "Infrastructure",
    tags: ["Ubuntu Server", "Tailscale", "Automation", "Agents"],
    slug: "visual-runner-server",
    href: "/proyectos/visual-runner-server",
    visualLabel: "Server lab",
    visualKind: "server",
    previewTone: "emerald",
  },
  {
    title: "Family Home Server / Private Family Cloud",
    category: "Home lab · Private cloud",
    description:
      "Repurposed an old laptop into a private family server for cloud storage, local file access, SMB shares and secure remote access through Tailscale.",
    status: "Private lab",
    tags: ["Ubuntu Server", "CasaOS", "SMB", "Tailscale", "Home Lab", "Private Cloud"],
    visualLabel: "Private family cloud",
    visualKind: "server",
    previewTone: "emerald",
  },
];

export const featuredProject = projects[0] as Project;

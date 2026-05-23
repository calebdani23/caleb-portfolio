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
  brandImage?: string;
  brandAlt?: string;
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
      "Plan-first travel platform in development: search starts the journey, then workspace, quotes, booking readiness, payment and reservations bring multi-provider travel into one operational flow.",
    status: "In development",
    tags: ["AI travel platform", "Private MVP", "Booking orchestration", "Booking UX", "Hotelbeds", "Duffel"],
    slug: "zalmar-travel",
    href: "/proyectos/zalmar-travel",
    featured: true,
    visualLabel: "Main product",
    visualKind: "screenshot",
    previewImage: "/images/projects/zalmar-travel/01-public-inicio.png",
    featuredImage: "/images/projects/zalmar-travel/10-auth-booking-plan-final.png",
    brandImage: "/images/projects/zalmar-travel/zalmar-logo-fuerte.svg",
    brandAlt: "Zalmar Travel logo",
    previewAlt: "Zalmar Travel public interface and authenticated travel planning workspace",
    previewTone: "cyan",
    previewObjectFit: "cover",
    previewObjectPosition: "top center",
    highlights: [
      "Plan-first journey that turns search into an entry point, not the final product.",
      "Workspace for comparing quotes, validating services, preparing booking and following reservations.",
      "Multi-provider complexity across flights, hotels, activities and transfers handled in one journey.",
      "MVP screens in Spanish used intentionally to move faster on product decisions and operational trust.",
    ],
    metrics: [
      { value: "4", label: "travel verticals" },
      { value: "1", label: "plan workspace" },
      { value: "End-to-end", label: "search to reservation" },
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
    category: "Infrastructure · Browser validation",
    description:
      "Browser-execution validation system with named flows, preflight checks and normalized evidence for products such as Zalmar Travel and this portfolio.",
    status: "Infrastructure",
    tags: ["Real browser execution", "Flow contracts", "Preflight checks", "Validation artifacts"],
    slug: "visual-runner-server",
    href: "/proyectos/visual-runner-server",
    visualLabel: "Validation layer",
    visualKind: "server",
    previewImage: "/images/projects/visual-runner-server/visual-runner-server-architecture-v1.svg",
    previewAlt: "Visual Runner Server validation architecture diagram",
    previewTone: "emerald",
    previewObjectFit: "contain",
    highlights: [
      "Runs repeatable product flows in a real browser instead of relying only on static review.",
      "Uses named flow contracts and readiness checks before treating a run as validated.",
      "Returns consistent logs, summaries and artifacts that make results easier to review.",
    ],
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

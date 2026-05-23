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
    category: "AI systems · Observability · Human review",
    description:
      "Public-safe dashboard concept for making AI agent runs easier to inspect: events, tool usage, retries, errors, latency and human-review states are organized without exposing private traces or prompts.",
    status: "Case study",
    tags: ["AI agents", "Observability", "Human review", "Reliability signals", "Redacted telemetry"],
    slug: "ai-agent-observability-dashboard",
    href: "/proyectos/ai-agent-observability-dashboard",
    visualLabel: "Observability layer",
    visualKind: "dashboard",
    previewImage: "/images/projects/ai-agent-observability-dashboard/observability-dashboard-redacted-v1.png",
    featuredImage: "/images/projects/ai-agent-observability-dashboard/ai-agent-observability-architecture-v1.svg",
    previewAlt: "Redacted AI agent observability dashboard interface",
    previewTone: "cyan",
    previewObjectFit: "cover",
    previewObjectPosition: "top center",
    highlights: [
      "Frames agent observability as more than logging: runs, events, tools, retries and review states are shown together.",
      "Separates execution status from reliability signals so a completed run is not automatically treated as trustworthy.",
      "Uses redacted visuals and public-safe language to avoid exposing traces, prompts, payloads, endpoints or sensitive IDs.",
    ],
    metrics: [
      { value: "Redacted", label: "dashboard evidence" },
      { value: "Human", label: "review state" },
      { value: "Run-level", label: "trace model" },
    ],
  },
  {
    title: "AI Codebase Explainer",
    category: "Developer tools · AI · Issue triage",
    description:
      "AI engineering assistant for first-pass repository understanding: static scanning, bounded context, architecture summaries, important-file views and GitHub-ready issue suggestions.",
    status: "MVP",
    tags: ["Code understanding", "AI tooling", "Static analysis", "Issue triage", "Architecture maps"],
    slug: "ai-codebase-explainer",
    href: "/proyectos/ai-codebase-explainer",
    visualLabel: "Code intelligence",
    visualKind: "code",
    previewImage: "/images/projects/ai-codebase-explainer/codebase-explainer-dashboard-redacted-v1.jpeg",
    featuredImage: "/images/projects/ai-codebase-explainer/ai-codebase-explainer-architecture-v1.svg",
    previewAlt: "Redacted AI codebase explainer dashboard interface",
    previewTone: "sky",
    previewObjectFit: "cover",
    previewObjectPosition: "top center",
    highlights: [
      "Starts with static repository analysis rather than open-ended chat, then enriches findings with AI where context supports it.",
      "Communicates clear limits: no dependency install, code execution, production verification or final security-audit claims.",
      "Designed to redact secret-like content before persistence, prompting, exports or optional observability traces.",
    ],
    metrics: [
      { value: "Static", label: "analysis scope" },
      { value: "Bounded", label: "AI context" },
      { value: "Human", label: "issue review" },
    ],
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
    category: "Home lab · Linux infrastructure · Private cloud",
    description:
      "Converted a reused laptop into an operational private family cloud with Ubuntu Server, CasaOS, SMB shares, Docker-managed services and Tailscale access without exposing private services publicly.",
    status: "Private lab",
    tags: ["Ubuntu Server", "CasaOS", "SMB", "Tailscale", "Docker", "UFW", "Home Lab"],
    slug: "family-home-server-private-cloud",
    href: "/proyectos/family-home-server-private-cloud",
    visualLabel: "Private family cloud",
    visualKind: "server",
    previewImage: "/images/projects/family-home-server-private-cloud/casaos-dashboard-redacted-v1.png",
    featuredImage: "/images/projects/family-home-server-private-cloud/family-home-server-architecture-v1.svg",
    previewAlt: "Redacted CasaOS dashboard for a private family home server",
    previewTone: "emerald",
    previewObjectFit: "cover",
    previewObjectPosition: "center",
    highlights: [
      "Reused existing laptop hardware as a practical always-on home server instead of leaving it unused.",
      "Centralized family file access through local SMB shares and a browser-friendly CasaOS dashboard.",
      "Kept remote access private through Tailscale instead of opening home services directly to the internet.",
      "Solved lower-level reliability issues around Wi-Fi drivers, Secure Boot, auto-start and reboot behavior.",
    ],
    metrics: [
      { value: "1", label: "reused host" },
      { value: "Private", label: "remote access" },
      { value: "Local-first", label: "family storage" },
    ],
  },
];

export const featuredProject = projects[0] as Project;

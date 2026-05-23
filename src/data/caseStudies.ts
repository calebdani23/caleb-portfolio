import { projects } from "./projects";

export type CaseStudySection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: string;
  role: string;
  stack: string[];
  highlights: string[];
  flow: string[];
  gallery?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  brandImage?: string;
  brandAlt?: string;
  sections: {
    problem: CaseStudySection;
    solution: CaseStudySection;
    architecture: CaseStudySection;
    challenges: CaseStudySection;
    decisions: CaseStudySection;
    result: CaseStudySection;
    learnings: CaseStudySection;
    nextSteps: CaseStudySection;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zalmar-travel",
    title: "Zalmar Travel",
    eyebrow: "Main project · AI travel orchestration · Booking UX",
    summary:
      "Plan-first travel platform in development: search opens the journey, while the product value lives in the workspace that organizes quotes, booking readiness, payment and reservation follow-up across providers.",
    description:
      "Zalmar Travel is my main product: a serious attempt to turn the operational complexity of multi-service travel into a clear, trustworthy journey for discovering, comparing, preparing booking and managing reservations.",
    status: "In development",
    role: "Product builder: product architecture, UX/UI, booking flows, API integration and AI automation.",
    stack: ["Astro/React", "TypeScript", "FastAPI", "Hotelbeds", "Duffel", "OpenAI", "Tailwind CSS"],
    highlights: ["Plan-first product", "Search as entry", "Workspace", "Quote to reservation", "Provider-aware UX"],
    flow: ["Search", "Plan", "Workspace", "Quote", "Booking readiness", "Payment", "Reservation"],
    brandImage: "/images/projects/zalmar-travel/zalmar-logo-fuerte.svg",
    brandAlt: "Zalmar Travel logo",
    gallery: [
      {
        src: "/images/projects/zalmar-travel/01-public-inicio.png",
        alt: "Zalmar Travel Spanish-language MVP public home screen",
        caption: "Spanish-language MVP entry point: a practical product-development choice that lets Caleb iterate positioning, UX and technical flows in his primary language.",
      },
      {
        src: "/images/projects/zalmar-travel/10-auth-booking-plan-final.png",
        alt: "Authenticated Spanish-language Zalmar Travel booking plan",
        caption: "Product evidence from the MVP: the trip workspace groups services and states to operate the journey from one place while keeping iteration fast.",
      },
      {
        src: "/images/projects/zalmar-travel/11-auth-panel-reservas-final.png",
        alt: "Spanish-language Zalmar Travel reservations panel",
        caption: "Operational MVP evidence: a Spanish reservation panel for tracking states, follow-up and post-quote traceability during technical development.",
      },
    ],
    sections: {
      problem: {
          title: "Problem",
        body: "Booking a complete trip means comparing providers, coordinating availability, handling changes and preserving context. Many tools split each piece apart and force people to work across tabs, notes and scattered decisions.",
        bullets: ["The user needs clarity before booking.", "Search is useful, but it is only the entry point into the real travel decision.", "Operations need traceability from quote and readiness to booking and reservation follow-up.", "AI should help without hiding critical decisions."],
      },
      solution: {
           title: "Solution",
        body: "I designed Zalmar around a plan-first workspace: search feeds the plan, quotes compare alternatives, service-level booking screens prepare provider-specific requirements, and the consolidated booking flow moves the user toward one payment and a unified reservation view. The current MVP is intentionally written in Spanish because it is Caleb's primary language for fast product iteration and technical validation.",
      },
      architecture: {
          title: "Architecture / flow",
        body: "The flow separates experience, orchestration and providers inside the Zalmar product. The interface guides the plan; the API layer normalizes service differences; providers such as Hotelbeds and Duffel supply availability; and agents work against the plan context without replacing reviewable transactional actions.",
        bullets: ["The plan is the central entity.", "Services are grouped by trip stage across flights, hotels, activities and transfers.", "The workspace connects cart, quote comparison, booking readiness and reservations.", "Provider differences are absorbed into one journey instead of pretending every supplier has the same lifecycle."],
      },
      challenges: {
          title: "Technical challenges",
        body: "The challenge is not just consuming APIs, but translating complex responses into a trustworthy experience. Provider differences, revalidation, payment timing, partial confirmations, intermediate states and errors need to be designed without breaking user confidence.",
      },
      decisions: {
          title: "Important decisions",
        body: "Keeping the plan as the core prevents flights, hotels, activities and transfers from becoming isolated checkouts. Search remains the start of the journey; the workspace, quotes, booking readiness and reservation follow-up are where the product earns trust.",
      },
      result: {
            title: "Result / current state",
          body: "Product in development with orchestration and booking UX treated as Zalmar capabilities, not separate portfolio projects. Current Spanish-language screens are MVP evidence for agile iteration; priority remains honest plan, quote, booking and reservation flows rather than overstated launch claims.",
      },
      learnings: {
          title: "What I learned",
        body: "Travel tech requires thinking about product, operations, orchestration and trust at the same time. A polished search flow is not enough if the system does not explain readiness, availability, restrictions, price, provider state and next steps.",
      },
      nextSteps: {
          title: "Next steps",
        body: "Deepen integrations, clarify plan states, create navigable prototypes and keep orchestration/UX evidence consolidated under the Zalmar product story.",
      },
    },
  },
  {
    slug: "ai-agent-observability-dashboard",
    title: "AI Agent Observability Dashboard",
    eyebrow: "AI systems · Observability · Human review",
    summary:
      "A redacted observability dashboard concept for understanding AI agent runs beyond the final answer: steps, events, tool usage, retries, failures, latency, reliability signals and human-review states.",
    description:
      "AI Agent Observability Dashboard explores how agentic systems can become more understandable and accountable when every run is represented as a reviewable execution story instead of a black-box response.",
    status: "Public-safe case study with redacted dashboard evidence",
    role: "Product and systems design: observability model, dashboard narrative, reliability signals, human-review boundaries and public-safe documentation.",
    stack: ["AI agents", "Observability", "Event traces", "Tool usage", "Reliability signals", "Human review", "Redacted dashboards"],
    highlights: ["Run-level traces", "Tool/event visibility", "Reliability vs execution", "Human review", "Public-safe evidence"],
    flow: ["Task", "Agent run", "Events", "Tool usage", "Retries/errors", "Reliability signals", "Human review", "Summary"],
    gallery: [
      {
        src: "/images/projects/ai-agent-observability-dashboard/observability-dashboard-redacted-v1.png",
        alt: "Redacted AI agent observability dashboard showing public-safe run and reliability signals",
        caption:
          "Public-safe dashboard evidence: the interface communicates recent runs, states, events, warnings, latency and review points without publishing real traces, prompts, payloads, endpoints or sensitive IDs.",
      },
      {
        src: "/images/projects/ai-agent-observability-dashboard/ai-agent-observability-architecture-v1.svg",
        alt: "AI agent observability architecture diagram with redacted public-safe telemetry flow",
        caption:
          "Architecture view: agent activity is converted into safe, reviewable telemetry so engineers can understand behavior without exposing private operational data.",
      },
    ],
    sections: {
      problem: {
        title: "Problem",
        body: "AI agents can appear successful while hiding important intermediate behavior. A final response does not show which tools were used, where retries happened, whether warnings appeared, or whether a person should review the result before trusting it.",
        bullets: [
          "Logs alone answer what happened, but often not why the agent behaved that way.",
          "A success state can still include weak signals such as excessive retries, missing validation or low-confidence output.",
          "Observability dashboards can become risky if they expose prompts, payloads, customer data, endpoints or secrets.",
        ],
      },
      solution: {
        title: "Solution",
        body: "I shaped the project as a dashboard for public-safe agent observability. It organizes runs, events, tool usage, warnings, errors, retries, duration, summaries and review states so a developer can inspect the execution story without needing sensitive raw traces.",
      },
      architecture: {
        title: "Architecture / flow",
        body: "The model treats each run as a sequence of inspectable events. Agent tasks produce step-level telemetry, tool calls, warnings, error categories and review flags; the dashboard turns those signals into a timeline and aggregate reliability view.",
        bullets: [
          "Execution status and reliability signals are separate concepts.",
          "Human review is modeled as a normal lifecycle state, not only as an emergency fallback.",
          "Public visuals are redacted by design and avoid private traces, prompts, payloads, endpoints and identifiers.",
        ],
      },
      challenges: {
        title: "Technical challenges",
        body: "The main challenge is showing enough context to debug and improve an agent without turning the dashboard into a sensitive-data leak. Useful observability needs clear summaries, categories and trace structure, not unrestricted raw data exposure.",
      },
      decisions: {
        title: "Important decisions",
        body: "I kept the case study focused on operability and safety. The portfolio story emphasizes run-level visibility, reliability signals and human review while intentionally avoiding real client names, payloads, traces, prompts, endpoints, secrets and sensitive IDs.",
      },
      result: {
        title: "Result / current state",
        body: "The project now has a standalone public case study with redacted dashboard and architecture visuals. It demonstrates a serious product-infrastructure mindset for AI systems without claiming access to private production telemetry or exposing internal details.",
      },
      learnings: {
        title: "What I learned",
        body: "Observability for AI agents is not just logging. A useful system must explain the run story, separate completion from trustworthiness, surface human-review points and protect sensitive context from the first layer of documentation.",
      },
      nextSteps: {
        title: "Next steps",
        body: "Continue refining the signal taxonomy, reliability summaries and safe redaction model so the dashboard can communicate useful operations evidence without encouraging over-collection or public exposure of sensitive traces.",
      },
    },
  },
  {
    slug: "ai-codebase-explainer",
    title: "AI Codebase Explainer",
    eyebrow: "Developer tools · AI · Issue triage",
    summary:
      "An AI engineering assistant for turning a public or demo repository into a first-pass technical brief: stack signals, architecture explanation, important files, risks, exports and reviewable issue suggestions.",
    description:
      "AI Codebase Explainer is designed to help engineers understand unfamiliar repositories faster while keeping claims bounded to visible static evidence and human-reviewed interpretation.",
    status: "MVP-style project with explicit static-analysis limits",
    role: "Product and engineering design: repository-analysis pipeline, AI boundaries, dashboard narrative, issue-triage workflow, redaction and public-safe case-study writing.",
    stack: ["Static analysis", "Repository scanning", "AI summaries", "Issue triage", "Architecture maps", "Exports", "Optional observability"],
    highlights: ["Static-first pipeline", "Bounded AI context", "Architecture brief", "Suggested issues", "Runtime limits stated clearly"],
    flow: ["Repository", "Static scan", "Stack signals", "Important files", "AI summary", "Issue suggestions", "Human review", "Export"],
    gallery: [
      {
        src: "/images/projects/ai-codebase-explainer/codebase-explainer-dashboard-redacted-v1.jpeg",
        alt: "Redacted AI codebase explainer dashboard showing repository summary and triage areas",
        caption:
          "Public-safe dashboard evidence: a repository explanation interface that prioritizes summary, structure, important files, issue suggestions and bounded questions over open-ended certainty.",
      },
      {
        src: "/images/projects/ai-codebase-explainer/ai-codebase-explainer-architecture-v1.svg",
        alt: "AI codebase explainer architecture diagram showing static repository analysis and bounded AI explanation flow",
        caption:
          "Architecture view: repository structure is scanned and filtered first, then bounded context supports explanations, issue suggestions and optional non-blocking observability traces.",
      },
    ],
    sections: {
      problem: {
        title: "Problem",
        body: "Understanding an unfamiliar repository takes time because important signals are distributed across manifests, folders, entry points, docs, tests, deployment files and conventions. A generic chatbot can miss that structure or invent confidence when context is weak.",
        bullets: [
          "Developers need a first map before making architecture or maintenance decisions.",
          "Repository health signals should be grounded in visible files, not vibes.",
          "Generated issue suggestions need human review before becoming project commitments.",
        ],
      },
      solution: {
        title: "Solution",
        body: "I designed the explainer around a static-first analysis pipeline. The system scans repository structure, detects stack signals, filters heavy/generated folders, bounds source context and then uses AI to produce a readable technical brief, architecture notes, important-file views and suggested issues.",
      },
      architecture: {
        title: "Architecture / flow",
        body: "The flow starts with a public or demo repository and performs static scanning only. It does not install dependencies, execute the code, run tests or inspect private infrastructure. AI output is constrained by retrieved context, deterministic findings and redaction rules.",
        bullets: [
          "Static scanning reduces risk and keeps the project honest about what it can prove.",
          "Secret-like content should be redacted before persistence, prompts, exports or telemetry.",
          "Optional observability can connect to the companion dashboard without becoming a hard runtime dependency.",
        ],
      },
      challenges: {
        title: "Technical challenges",
        body: "The key challenge is avoiding shallow or invented answers. Static analysis can identify structure and risk indicators, but it cannot fully verify runtime behavior, production incidents, security posture or business context by itself.",
      },
      decisions: {
        title: "Important decisions",
        body: "I kept the public language intentionally bounded. The project is presented as a first-pass engineering brief and triage assistant, not as a final security audit, runtime verifier or replacement for experienced maintainers.",
      },
      result: {
        title: "Result / current state",
        body: "The project now has a standalone case study, real redacted visuals and clearer maturity language. It communicates practical AI developer tooling while being honest that outputs must be reviewed and that static evidence cannot prove everything about a system.",
      },
      learnings: {
        title: "What I learned",
        body: "Useful codebase explanation requires a pipeline, not just a prompt. The strongest results come from combining deterministic scanning, bounded context, file-grounded explanations, clear uncertainty and human review of suggested issues.",
      },
      nextSteps: {
        title: "Next steps",
        body: "Refine the file-grounding, export story, issue review workflow and observability integration while preserving the public promise: helpful first-pass understanding, not overstated runtime or security guarantees.",
      },
    },
  },
  {
    slug: "visual-runner-server",
    title: "Visual Runner Server",
    eyebrow: "Infrastructure · Browser validation",
    summary:
      "A browser-execution validation layer that turns named product flows into repeatable checks with readiness gates, normalized outputs and reviewable artifacts.",
    description:
      "Visual Runner Server helps product work move beyond static inspection: it executes real browser flows, checks whether expected conditions are ready, and reports evidence that can be reviewed before calling a product path validated.",
    status: "Infrastructure in use",
    role: "Infrastructure design, browser automation workflow, named flow contracts, validation boundaries and agent/developer support.",
    stack: ["Real browser execution", "Named flows", "Preflight checks", "Normalized logs", "Screenshots/artifacts", "Automation", "Agents"],
    highlights: ["Real browser execution", "Flow contracts", "Readiness checks", "Reviewable evidence"],
    flow: ["Flow contract", "Preflight", "Browser run", "Capture", "Normalize", "Review", "Iterate"],
    gallery: [
      {
        src: "/images/projects/visual-runner-server/visual-runner-server-architecture-v1.svg",
        alt: "Visual Runner Server architecture diagram showing the validation workflow from product changes to browser execution and evidence review",
        caption: "Public architecture view: product changes are checked through named browser flows, readiness gates and normalized validation evidence before the result is trusted.",
      },
    ],
    sections: {
      problem: {
          title: "Problem",
        body: "Many product issues do not appear during code review. They show up only when a real browser navigates routes, waits for UI states, interacts with selectors and proves that a flow is understandable from the user's point of view.",
        bullets: ["Static inspection can miss broken navigation, missing states or layout regressions.", "A run that completes technically is not automatically a validated product flow.", "Teams need evidence they can review without exposing private infrastructure details."],
      },
      solution: {
          title: "Solution",
        body: "I shaped Visual Runner Server as a validation system around repeatable browser flows. A repo can describe the flow, check readiness, execute it in a real browser and review normalized outputs such as status, logs, summaries and optional screenshots or artifacts.",
      },
      architecture: {
        title: "Architecture / flow",
        body: "The public architecture is intentionally simple: product work defines a named validation flow, preflight checks confirm that required conditions are ready, a browser runner executes the journey, and the result is normalized into reviewable evidence.",
        bullets: ["Named flow contracts make validation repeatable instead of improvised.", "Readiness checks happen before riskier interpretation of results.", "Artifacts support review, while private host details stay outside the portfolio story."],
      },
      challenges: {
        title: "Technical challenges",
        body: "The key challenge is avoiding false confidence. Browser automation can click through a page and still fail the real validation contract if a required route, selector, state or boundary is missing.",
      },
      decisions: {
        title: "Important decisions",
        body: "Keep execution and validation separate. The system should say whether the browser run completed, then separately whether the expected product evidence was strong enough to trust the flow.",
      },
      result: {
        title: "Result / current state",
          body: "Active validation infrastructure for product work where browser behavior matters, especially Zalmar Travel flows and this portfolio. It supports safer iteration by making validation evidence explicit and repeatable.",
      },
      learnings: {
          title: "What I learned",
        body: "A healthy runner is not the same as a healthy product journey. Good validation needs clear contracts, readiness gates and honest reporting about what was actually proven.",
      },
      nextSteps: {
          title: "Next steps",
        body: "Continue refining named flows, lightweight observability and artifact review so validation remains useful for real product decisions without exposing unnecessary infrastructure details.",
      },
    },
  },
  {
    slug: "family-home-server-private-cloud",
    title: "Family Home Server / Private Family Cloud",
    eyebrow: "Home lab · Linux infrastructure · Private family cloud",
    summary:
      "A reused laptop turned into a practical private family cloud foundation with Ubuntu Server, CasaOS, SMB file access, Docker-managed services and private remote access through Tailscale.",
    description:
      "Family Home Server is a home-infrastructure project built for real family use: centralizing files at home, making shared access simpler, and keeping control of private data without publishing sensitive network, device or folder details.",
    status: "Operational private lab",
    role: "Home-server builder: Linux installation, networking, driver troubleshooting, CasaOS setup, SMB access, firewall posture, remote administration and public-safe documentation.",
    stack: [
      "Reused laptop",
      "Ubuntu Server",
      "CasaOS",
      "Docker app layer",
      "SMB shares",
      "Tailscale",
      "SSH",
      "UFW",
      "Netplan",
      "systemd-networkd",
    ],
    highlights: ["Reused hardware", "Local-first storage", "CasaOS dashboard", "Private remote access", "Public-safe evidence"],
    flow: ["Reused hardware", "Ubuntu Server", "Network setup", "CasaOS", "SMB shares", "Tailscale", "Family use"],
    gallery: [
      {
        src: "/images/projects/family-home-server-private-cloud/family-home-server-architecture-v1.svg",
        alt: "Public-safe family home server architecture diagram with no IPs, usernames, device names or sensitive paths",
        caption:
          "Redacted architecture view: family devices reach a reused laptop running Ubuntu Server, CasaOS and Docker-managed services, with storage exposed locally and remote access kept private through Tailscale.",
      },
      {
        src: "/images/projects/family-home-server-private-cloud/casaos-dashboard-redacted-v1.png",
        alt: "Redacted CasaOS dashboard screenshot for the family home server private cloud",
        caption:
          "Public-safe dashboard evidence: private names, IPs, device identifiers, paths and capacity details are intentionally removed while preserving the shape of the operational system.",
      },
    ],
    sections: {
      problem: {
        title: "Problem",
        body: "Family files often end up scattered across phones, laptops, accounts and commercial cloud services. That makes shared folders harder to manage, weakens ownership over private data and leaves useful older hardware unused.",
        bullets: [
          "The family needed one practical private place for documents, photos and shared files.",
          "Non-technical users should not need to understand Linux administration to benefit from the server.",
          "Remote access needed to stay private instead of exposing home services directly to the internet.",
        ],
      },
      solution: {
        title: "Solution",
        body: "I repurposed an older laptop as an always-on home server using Ubuntu Server as the base system and CasaOS as the visual management layer. The setup focuses on local file access, shared family folders, app foundations and safer private remote access through Tailscale.",
      },
      architecture: {
        title: "Architecture / flow",
        body: "The architecture is intentionally modest and practical: family devices connect on the home network, the reused laptop hosts Ubuntu Server, CasaOS and a Docker-based app layer, SMB handles local file access, and Tailscale provides VPN-style remote access without public router exposure.",
        bullets: [
          "Ubuntu Server runs without a desktop environment to keep the host focused on services.",
          "CasaOS gives the server a browser-based interface for storage, apps and status checks.",
          "SMB supports familiar local file access for home devices.",
          "SSH remains an administration tool, not a family-facing interface.",
        ],
      },
      challenges: {
        title: "Technical challenges",
        body: "The hardest parts were below the dashboard: identifying network interfaces, configuring Wi-Fi with Netplan, resolving Broadcom wireless driver behavior, understanding Secure Boot blocking driver loading, and making network/service startup predictable after reboot.",
      },
      decisions: {
        title: "Important decisions",
        body: "I kept the public story privacy-first. The project can show architecture, learning and redacted operational evidence, but it should not expose private IP addresses, real usernames, device names, passwords, family folder names, capacity details or internal paths.",
        bullets: [
          "Use Tailscale-style private access instead of opening public ports for this family-cloud use case.",
          "Plan storage structure before moving important family data into the system.",
          "Treat backups as a required next layer, because private storage alone is not a complete safety plan.",
        ],
      },
      result: {
        title: "Result / current state",
        body: "The server is operational as a local private family cloud foundation. CasaOS is accessible from a browser, SSH administration works, Wi-Fi reconnects after reboot, and the project now has public-safe evidence through a redacted dashboard visual and architecture diagram.",
      },
      learnings: {
        title: "What I learned",
        body: "A real home server is more than an installation. Reliability depends on drivers, network routes, startup behavior, service health, storage organization, access control, backups, privacy and whether family members can actually use the system without becoming administrators.",
      },
      nextSteps: {
        title: "Next steps",
        body: "Continue improving storage organization, backup planning, user permissions and maintenance routines before treating the server as the only place for important family data. Future documentation should stay redacted by default.",
      },
    },
  },
];

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug);

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

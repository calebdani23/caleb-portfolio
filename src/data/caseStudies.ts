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
    slug: "visual-runner-server",
    title: "Visual Runner Server",
    eyebrow: "Infrastructure · Visual automation",
    summary:
      "Self-hosted server for real browser navigation, visual validations and test flows that help build products with more confidence.",
    description:
      "An infrastructure lab where agents and tools do not only read code, but also test browser experiences.",
    status: "Infrastructure in use",
    role: "Server setup, automation, private networking, validation flows and support for development agents.",
    stack: ["Ubuntu Server", "CasaOS", "Tailscale", "SMB", "Docker", "Automation", "Agents"],
    highlights: ["Self-hosted server", "Private network", "Visual testing", "Agent support"],
    flow: ["Local deploy", "Navigation", "Capture", "Validation", "Feedback", "Iteration"],
    sections: {
      problem: {
          title: "Problem",
        body: "Many product issues do not appear during a code review: they show up while navigating, seeing states, testing layouts and checking whether the flow is understandable.",
      },
      solution: {
          title: "Solution",
        body: "Create a self-hosted environment for visual testing, real navigation and interface validation with support from agents and automated tools.",
      },
      architecture: {
        title: "Architecture / flow",
        body: "The server works as a lab accessible through a private network, with containerized services and workflows for running, observing and adjusting products in development.",
        bullets: ["Secure access through a private network.", "Isolated services when useful.", "Visual validation as a quality step, not decoration."],
      },
      challenges: {
        title: "Technical challenges",
        body: "Balance security, ease of access and stability without turning the environment into something more complex than the product it helps validate.",
      },
      decisions: {
        title: "Important decisions",
        body: "Keep the infrastructure simple and useful: real navigation and visual feedback first, then more sophisticated automation when the flow justifies it.",
      },
      result: {
        title: "Result / current state",
          body: "Active infrastructure as part of my personal product lab, focused on accelerating visual review and assisted manual testing.",
      },
      learnings: {
          title: "What I learned",
        body: "Running my own servers changes how I learn: it forces me to understand networking, deployment, permissions and operations, not only frontend work.",
      },
      nextSteps: {
          title: "Next steps",
        body: "Document repeatable flows, improve lightweight observability and connect validations to projects such as Zalmar Travel and this portfolio.",
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

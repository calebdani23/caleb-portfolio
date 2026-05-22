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
  documents?: Array<{
    label: string;
    href: string;
    description: string;
  }>;
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
      "Platform for planning, quoting and booking trips through a master plan that brings together flights, hotels, activities, transfers, orchestration logic, booking UX and AI agents per trip.",
    description:
      "Zalmar Travel is my main product: a serious attempt to turn the operational complexity of travel into a clear, trustworthy experience for comparing, quoting, deciding and booking.",
    status: "In development",
    role: "Product builder: product architecture, UX/UI, booking flows, API integration and AI automation.",
    stack: ["Astro/React", "TypeScript", "FastAPI", "Hotelbeds", "Duffel", "OpenAI", "Tailwind CSS"],
    highlights: ["Master plan", "Booking orchestration", "Booking UX", "AI per trip", "Quote to voucher"],
    flow: ["Trip brief", "Master plan", "Quote", "Hold", "Booking", "Voucher", "Follow-up"],
    gallery: [
      {
        src: "/images/projects/zalmar-travel/01-public-inicio.png",
        alt: "Zalmar Travel public home screen",
        caption: "Public product entry: value proposition and premium travel-tech aesthetic.",
      },
      {
        src: "/images/projects/zalmar-travel/10-auth-booking-plan-final.png",
        alt: "Authenticated Zalmar Travel booking plan",
        caption: "Product evidence: the master plan groups services and states to operate the trip from one place.",
      },
      {
        src: "/images/projects/zalmar-travel/11-auth-panel-reservas-final.png",
        alt: "Zalmar Travel reservations panel",
        caption: "Operational evidence: panel designed for reservation tracking, states and post-quote traceability.",
      },
    ],
    documents: [
      {
        label: "Functional master document v1.1",
        href: "/docs/zalmar-travel/documento-maestro-funcional-frontend-v1.1.pdf",
        description: "Frontend functional PDF with structure, screens and criteria for designing the Zalmar Travel experience.",
      },
    ],
    sections: {
      problem: {
          title: "Problem",
        body: "Booking a complete trip means comparing providers, coordinating availability, handling changes and preserving context. Many tools split each piece apart and force people to work across tabs, notes and scattered decisions.",
        bullets: ["The user needs clarity before booking.", "Operations need traceability from quote to hold to voucher.", "AI should help without hiding critical decisions."],
      },
      solution: {
          title: "Solution",
        body: "I designed Zalmar around a master plan: a workspace where every service lives inside the same trip context, with orchestration states, booking UX patterns and AI agents supporting comparison, explanation and next steps.",
      },
      architecture: {
          title: "Architecture / flow",
        body: "The flow separates experience, orchestration and providers inside the Zalmar product. The interface guides the plan; the API layer normalizes services; providers such as Hotelbeds and Duffel supply availability; and agents work against the plan context.",
        bullets: ["The plan is the central entity.", "Services are grouped by trip stage.", "Explicit states: searched, compared, quoted, on hold, booked, voucher issued.", "AI recommendations stay separate from reviewable transactional actions."],
      },
      challenges: {
          title: "Technical challenges",
        body: "The challenge is not just consuming APIs, but translating complex responses into a trustworthy experience. Provider differences, fare expirations, partial failures, intermediate states and errors need to be designed without breaking user confidence.",
      },
      decisions: {
          title: "Important decisions",
        body: "Keeping the master plan as the core prevents flights, hotels and activities from becoming isolated modules. AI supports decisions, UX explains consequences, and transactional actions must remain explicit and reviewable.",
      },
      result: {
          title: "Result / current state",
          body: "Product in development with orchestration and booking UX treated as Zalmar capabilities, not separate portfolio projects. Current priority remains real quote, hold, booking and voucher flows.",
      },
      learnings: {
          title: "What I learned",
        body: "Travel tech requires thinking about product, operations, orchestration and trust at the same time. A polished flow is not enough if it does not explain availability, restrictions, price and next steps.",
      },
      nextSteps: {
          title: "Next steps",
        body: "Deepen integrations, document plan states, create navigable prototypes and keep orchestration/UX evidence consolidated under the Zalmar product story.",
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

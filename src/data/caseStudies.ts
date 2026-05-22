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
    eyebrow: "Main project · AI travel tech",
    summary:
      "Platform for planning, quoting and booking trips through a master plan that brings together flights, hotels, activities, transfers and AI agents per trip.",
    description:
      "Zalmar Travel is my main product: a serious attempt to turn the operational complexity of travel into a clear experience for quoting, deciding and booking.",
    status: "In development",
    role: "Product builder: product architecture, UX/UI, booking flows, API integration and AI automation.",
    stack: ["Astro/React", "TypeScript", "FastAPI", "Hotelbeds", "Duffel", "OpenAI", "Tailwind CSS"],
    highlights: ["Master plan", "Operational workspace", "AI per trip", "Quote to voucher"],
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
        body: "I designed Zalmar around a master plan: a workspace where every service lives inside the same trip context, with AI agents supporting comparison, explanation and next steps.",
      },
      architecture: {
          title: "Architecture / flow",
        body: "The flow separates experience, orchestration and providers. The interface guides the plan; the API layer normalizes services; providers such as Hotelbeds and Duffel supply availability; and agents work against the plan context.",
        bullets: ["The plan is the central entity.", "Services are grouped by trip stage.", "Explicit states: quoted, on hold, booked, voucher issued."],
      },
      challenges: {
          title: "Technical challenges",
        body: "The challenge is not just consuming APIs, but translating complex responses into a trustworthy experience. Intermediate states and errors also need to be designed without breaking user confidence.",
      },
      decisions: {
          title: "Important decisions",
        body: "Keeping the master plan as the core prevents flights, hotels and activities from becoming isolated modules. AI supports decisions, but transactional actions must remain explicit and reviewable.",
      },
      result: {
          title: "Result / current state",
          body: "Product in development with clear conceptual architecture, defined UX direction and priority on real quote, hold, booking and voucher flows.",
      },
      learnings: {
          title: "What I learned",
        body: "Travel tech requires thinking about product, operations and trust at the same time. A polished flow is not enough if it does not explain availability, restrictions, price and next steps.",
      },
      nextSteps: {
          title: "Next steps",
        body: "Deepen integrations, document plan states, create navigable prototypes and turn this case study into a visual product log.",
      },
    },
  },
  {
    slug: "ai-booking-orchestrator",
    title: "AI Booking Orchestrator",
    eyebrow: "Architecture · Multi-service booking",
    summary:
      "Orchestration design for coordinating flights, hotels, activities and transfers as a booking flow with shared context.",
    description:
      "This case study documents the layer that connects intent, availability, rules and actions inside a complex trip.",
    status: "Advanced concept",
    role: "Flow architecture, state definition, AI-assisted decision design and operations modeling.",
    stack: ["FastAPI", "REST APIs", "OpenAI", "TypeScript", "Travel APIs", "Automation"],
    highlights: ["Orchestration", "Booking states", "Shared context", "Reviewable actions"],
    flow: ["Intent", "Search", "Comparison", "Rules", "Confirmation", "Execution", "Audit"],
    sections: {
      problem: {
          title: "Problem",
        body: "A trip is not booked through a single API call. Every service has different rules, availability, timing and conditions; without orchestration, the user sees fragments instead of a clear decision path.",
      },
      solution: {
          title: "Solution",
        body: "Design an orchestrator that receives the plan context, queries services, proposes alternatives and prepares transactional actions for human review before confirmation.",
      },
      architecture: {
        title: "Architecture / flow",
        body: "The flow operates like a state machine: intent, search, selection, hold, booking, issuance and follow-up. AI summarizes and compares, but the system keeps explicit rules.",
        bullets: ["Separate recommendations from transactional actions.", "Record the reason for each alternative.", "Avoid confirming services without a verifiable state."],
      },
      challenges: {
        title: "Technical challenges",
        body: "Handle partial failures, fare expirations, provider differences and responses that change between search and booking.",
      },
      decisions: {
        title: "Important decisions",
        body: "Prioritize traceability over magic: every recommendation should be explainable and every action should have a state, provider and evidence.",
      },
      result: {
        title: "Result / current state",
          body: "Concept ready to become an operational module inside Zalmar Travel and guide real booking prototypes.",
      },
      learnings: {
          title: "What I learned",
        body: "AI creates more value when it reduces cognitive load, not when it tries to replace critical booking rules.",
      },
      nextSteps: {
          title: "Next steps",
        body: "Model API contracts, define minimum states and test scenarios with expired fares, availability changes and incomplete bookings.",
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
  {
    slug: "travel-booking-ux-system",
    title: "Travel Booking UX System",
    eyebrow: "UX/UI · Booking system",
    summary:
      "Conceptual system of screens, states and decisions so searching, quoting and booking travel feels clear, modern and trustworthy.",
    description:
      "A UX exploration for turning dense travel-tech processes into interfaces that explain what is happening and what decision comes next.",
    status: "Conceptual case study",
    role: "Experience design, information architecture, UI states, product copy and decision flows.",
    stack: ["Wireframes", "Design systems", "User flows", "Booking UX", "Tailwind CSS", "Prototyping"],
    highlights: ["Clear states", "Trust", "Comparison", "Multi-service flows"],
    flow: ["Search", "Results", "Comparison", "Quote", "Review", "Booking", "Voucher"],
    gallery: [
      {
        src: "/images/projects/travel-booking-ux-system/08-auth-viaje-comparar-final.png",
        alt: "Travel comparison screen in the UX system",
        caption: "UX pattern: comparing alternatives with visual hierarchy to reduce cognitive load before deciding.",
      },
      {
        src: "/images/projects/travel-booking-ux-system/10-auth-booking-plan-final.png",
        alt: "Booking plan screen in the UX system",
        caption: "UX pattern: plan structure showing how to organize services, steps and decisions before booking.",
      },
    ],
    sections: {
      problem: {
          title: "Problem",
        body: "Booking interfaces often hide too many rules: price changes, availability, policies, expirations and later steps. That creates friction exactly when the user needs confidence.",
      },
      solution: {
          title: "Solution",
        body: "Design a UX system with explicit states, comparable cards, honest messages and a clear progression from search to voucher.",
      },
      architecture: {
        title: "Architecture / flow",
        body: "The system divides the experience into moments: exploring options, understanding differences, confirming conditions, booking and receiving final documentation.",
        bullets: ["Each card should explain price, availability and restrictions.", "Loading and error states should be specific.", "The voucher should close the cycle clearly."],
      },
      challenges: {
        title: "Technical challenges",
        body: "Design for incomplete or changing information without making the UI feel broken, ambiguous or too technical.",
      },
      decisions: {
        title: "Important decisions",
        body: "Use direct microcopy, strong hierarchy and components that can represent real business states, not only ideal views.",
      },
      result: {
        title: "Result / current state",
        body: "Conceptual system that informs Zalmar Travel decisions and serves as a base for navigable booking prototypes.",
      },
      learnings: {
          title: "What I learned",
        body: "In travel UX, aesthetics matter, but trust comes from clearly explaining restrictions, states and consequences.",
      },
      nextSteps: {
          title: "Next steps",
        body: "Turn key patterns into components, test them with simulated data and validate what information users need before booking.",
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

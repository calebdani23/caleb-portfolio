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
];

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug);

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

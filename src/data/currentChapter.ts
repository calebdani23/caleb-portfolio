// Public, confirmed profile facts. Keep plans distinct from completed work.
// Adren.ai is the product; AdrenLabs is the venture. Do not substitute Adrenaline.
export const currentChapter = {
  updated: "November 2026",
  education: {
    institution: "TETR College of Business",
    degree: "Bachelor of Science in Artificial Intelligence",
    period: "2026–Present",
    cohort: "Class of 2030",
    term: "First semester · India",
    location: "Gurugram / New Delhi, India",
    summary: "I am studying AI while developing a venture with a small team. My first semester connects programming and business coursework with product definition, research and technical prototyping.",
    focus: ["Programming foundations", "Business and economic reasoning", "Team-based venture development"],
  },
  venture: {
    company: "AdrenLabs",
    companyUrl: "https://adrenlabs.ai/",
    product: "Adren.ai",
    productUrl: "https://adren.ai/",
    role: "Founding team · Product & AI development",
    period: "2026–Present",
    status: "Student-led venture · In development",
    summary: "Building an AI-assisted approach to understanding business operations and translating problems into actionable product requirements, prototypes and implementation priorities.",
    context: "I am developing Adren.ai with a three-person team while helping build AdrenLabs. My work connects product definition, agent workflows, technical prototyping and research into business needs.",
    contributions: [
      { title: "Product definition", detail: "Translate operational problems into user flows, data requirements and implementation priorities." },
      { title: "Agent workflows", detail: "Design how discovery, structured context and human review connect in an AI-assisted diagnostic process." },
      { title: "Technical prototyping", detail: "Contribute to early prototypes and iterate with the team on practical software and integration choices." },
      { title: "Research & validation", detail: "Research target industries, customer needs and data classification to inform positioning and early validation planning." },
    ],
    workflow: [
      { title: "Discover", detail: "Understand the business problem and the people affected." },
      { title: "Structure", detail: "Map evidence, workflows and data requirements." },
      { title: "Prototype", detail: "Turn the priority into a testable product direction." },
      { title: "Validate", detail: "Review assumptions and refine the next implementation step." },
    ],
  },
} as const;

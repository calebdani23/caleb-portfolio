export type WorkStep = {
  title: string;
  description: string;
  outcome: string;
  icon: string;
};

export const workSteps: WorkStep[] = [
  {
    title: "Understand the problem",
    description: "Define the real user friction before writing code.",
    outcome: "A sharper product target.",
    icon: "?",
  },
  {
    title: "Design the experience",
    description: "Map screens, states and trust moments so the flow feels clear from the first use.",
    outcome: "A navigable mental model.",
    icon: "□",
  },
  {
    title: "Build functional flows",
    description: "Prefer connected, navigable prototypes over documentation that is never tested.",
    outcome: "Something real to evaluate.",
    icon: "↗",
  },
  {
    title: "Connect real APIs",
    description: "Make the architecture account for data, providers and business constraints early.",
    outcome: "Fewer fake assumptions.",
    icon: "⌁",
  },
  {
    title: "Automate and iterate with AI",
    description: "Use agents and scripts to speed up validation, review UI and reduce repetitive work.",
    outcome: "Faster learning loops.",
    icon: "◇",
  },
  {
    title: "Validate with real usage",
    description: "Close the loop by navigating, breaking flows and adjusting until the product feels usable.",
    outcome: "Confidence before presentation.",
    icon: "✓",
  },
];

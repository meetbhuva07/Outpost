export interface FeatureBullet {
  text: string;
}

export interface Feature {
  id: "canvas" | "docs" | "team-board";
  title: string;
  description: string;
  bullets: string[];
}

export const hero = {
  eyebrow: "Early Access",
  headline: "An outpost for whatever you're building",
  highlightWord: "outpost",
  subtitle:
    "A home base for your projects. Set up a workspace, bring in the tools you rely on, and take an idea from first commit to live without leaving it.",
  primaryCta: {
    label: "Start building free",
    href: "/sign-up",
  },
  secondaryCta: {
    label: "See how it works",
    href: "#how-it-works",
  },
  video: {
    poster: "/videos/hero-poster.jpg",
    webm: "/videos/hero.webm",
    mp4: "/videos/hero.mp4",
  },
} as const;

export const audiences = [
  "Product teams",
  "Founders",
  "Solo builders",
  "Agencies",
  "Consultants",
] as const;

export const workspaceSection = {
  eyebrow: "THE WORKSPACE",
  titleLine1: "One agent, one workspace,",
  titleLine2: "your whole team",
} as const;

export const features: Feature[] = [
  {
    id: "canvas",
    title: "Canvas",
    description:
      "An infinite whiteboard where the agent draws flowcharts, ERDs, architecture diagrams and org charts shape by shape, and edits them in place when you ask.",
    bullets: [
      "Watch diagrams build up shape by shape",
      "Ask for a change and the agent edits in place",
      "Flowcharts, ERDs, architecture and org charts",
    ],
  },
  {
    id: "docs",
    title: "Docs",
    description:
      "A block editor where the agent turns a diagram into a written spec, and rewrites or summarizes sections on command.",
    bullets: [
      "Turn any diagram into a written spec",
      "Rewrite or summarize a section on command",
      "Block-based editing you already know",
    ],
  },
  {
    id: "team-board",
    title: "Team board",
    description:
      "A kanban board of every workspace in your org, with live cursors so teammates can jump in together.",
    bullets: [
      "Every workspace in your org, in one view",
      "Live cursors show who is working where",
      "Jump into a teammate's workspace together",
    ],
  },
];

import { LayoutGrid, FileText, KanbanSquare } from "lucide-react";

// Static copy for the landing page, kept out of the markup so it's easy to edit.

export const AUDIENCES = [
  "Product teams",
  "Founders",
  "Solo builders",
  "Design agencies",
  "Consultants",
];

// Rows alternate image side so the section doesn't read as a flat repeating grid.
export const SURFACES = [
  {
    id: "canvas",
    icon: LayoutGrid,
    title: "Canvas",
    description:
      "An infinite whiteboard where the agent drafts flowcharts, architecture diagrams, and journeys shape by shape, instead of hiding it all behind a black-box generate button.",
    bullets: [
      "Templates for flowcharts, ERDs, architecture, and org charts",
      "Follow-up edits: ask for changes and it edits shapes in place",
      "ERD tables with typed columns and key badges",
    ],
  },
  {
    id: "docs",
    icon: FileText,
    title: "Docs",
    description:
      "Turn any diagram into a written spec. The agent drafts, rewrites, and summarizes in a block-based editor, pulling structure straight from what's on the canvas.",
    bullets: [
      "Block-based editor: headings, lists, checklists, tables, code",
      '"Write this diagram up as a spec" pulls structure automatically',
      "Rewrite or summarize any section on command",
    ],
  },
  {
    id: "team-board",
    icon: KanbanSquare,
    title: "Team board",
    description:
      "Every workspace in your organization lives on one shared board. Drag it from planning to done, and jump in with teammates, with live cursors on the canvas and in the doc.",
    bullets: [
      "One kanban board for every workspace in your org",
      "Live cursors and edits on the canvas and in docs",
      "Anyone in your org can join any workspace instantly",
    ],
  },
];

/* ── How It Works (Waypoints Route) ─────────────────────────── */

export const howItWorksSection = {
  eyebrow: "HOW IT WORKS",
  title: "From idea to live workspace in three steps",
  subtitle:
    "A continuous route from first thought to shared workspace. No diagramming syntax to memorize.",
};

export const STEPS = [
  {
    step: "01",
    title: "Describe it",
    description:
      "Just say “Map out our onboarding flow.” Plain language, no diagramming syntax to learn. Or just talk: voice input works too.",
    detail: "Natural language & voice input",
  },
  {
    step: "02",
    title: "Watch the agent draw",
    description:
      "Shapes appear one by one as the agent works, the same way a teammate would draw over a call.",
    detail: "Real-time shape-by-shape generation",
  },
  {
    step: "03",
    title: "Keep iterating together",
    description:
      "Ask for changes, pull it into a doc, or bring in your team. Same agent, same context.",
    detail: "Live collaborative workspace",
  },
];

/* ── Pricing (Placeholder) ──────────────────────────────────── */

export const pricingSection = {
  eyebrow: "PRICING",
  titleLine1: "Start free, upgrade",
  titleLine2: "when it clicks",
  subtitle: "Upgrade just yourself or your whole team. Billed per member.",
  placeholder: "PLAN CARDS COMING SOON",
};

/* ── Hero & Workspace section ─────────────────────────────────── */

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

export const workspaceSection = {
  eyebrow: "THE WORKSPACE",
  titleLine1: "One agent, one workspace,",
  titleLine2: "your whole team",
} as const;

export const closingCta = {
  titleLine1: "Give your workspace",
  titleLine2: "a collaborator",
  cta: { label: "Get started free", href: "/sign-up" },
  mascot: "/brand/mascot-dark.png",
  coordinates: {
    topLeft: "N 47°38'",
    topRight: "ELEV 2,140 M",
    bottomLeft: "BASE CAMP",
    bottomRight: "W 122°20'",
  },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import {
  hero,
  AUDIENCES,
  workspaceSection,
  SURFACES,
  STEPS,
  howItWorksSection,
  pricingSection,
  closingCta,
} from "@/app/_data/landing";

/* ── macOS window frame (bar + body in one component) ───────────────── */

type Presence = { label: string; agent?: boolean };

/** Small avatar stack shown in the title bar: who is in this file right now. */
function PresenceStack({ people }: { people: Presence[] }) {
  return (
    <div className="flex -space-x-1.5">
      {people.map((p) => (
        <span
          key={p.label}
          className={`flex size-5 items-center justify-center rounded-full border-2 border-[#0c0c0e] text-[9px] font-bold ${
            p.agent
              ? "bg-orange-500/20 text-orange-400"
              : "bg-zinc-700 text-zinc-200"
          }`}
        >
          {p.agent ? "◆" : p.label}
        </span>
      ))}
    </div>
  );
}

function WindowFrame({
  title,
  presence = [],
  children,
}: {
  title: string;
  presence?: Presence[];
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-2xl border border-white/8 bg-[#0c0c0e] shadow-2xl transition-all hover:border-primary/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.08)]"
    >
      {/* Title bar */}
      <div className="flex items-center border-b border-white/8 bg-white/2 px-5 py-3">
        <div className="flex flex-1 items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f56] ring-1 ring-black/20 shadow-sm" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e] ring-1 ring-black/20 shadow-sm" />
          <span className="size-2.5 rounded-full bg-[#27c93f] ring-1 ring-black/20 shadow-sm" />
        </div>
        <span className="font-mono text-[11px] font-medium tracking-wide text-zinc-500">
          {title}
        </span>
        <div className="flex flex-1 justify-end">
          <PresenceStack people={presence} />
        </div>
      </div>

      {/* Body */}
      <div className="p-6">{children}</div>
    </div>
  );
}

function LiveCursor({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 flex items-start gap-1 drop-shadow-lg ${className}`}
    >
      <svg className="size-3.5 fill-orange-500 text-orange-500 drop-shadow" viewBox="0 0 24 24">
        <path d="M3 3l7 18 3-7 7-3L3 3z" />
      </svg>
      <span className="mt-2.5 rounded-md bg-orange-500 px-1.5 py-0.5 text-[9px] font-bold text-black shadow-md">
        {name}
      </span>
    </div>
  );
}

/* ── Surface visuals ────────────────────────────────────────────────── */

function CanvasVisual() {
  const line = "#52525b";
  const accent = "#ea580c";

  return (
    <WindowFrame
      title="canvas.workspace"
      presence={[{ label: "M" }, { label: "agent", agent: true }]}
    >
      {/* Wrapper is relative so the cursor (in %) scales with the responsive SVG */}
      <div className="relative">
        <svg
          viewBox="0 0 380 220"
          className="h-auto w-full select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="canvas-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 6 4 L 0 6.5 z" fill="#71717a" />
            </marker>
            <marker id="canvas-arrow-accent" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 6 4 L 0 6.5 z" fill={accent} />
            </marker>
            <filter id="canvas-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={accent} floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Request */}
          <rect x="135" y="6" width="110" height="34" rx="17" fill="#18130e" stroke={accent} strokeWidth="1.4" filter="url(#canvas-glow)" />
          <text x="190" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">
            Request
          </text>
          <line x1="190" y1="40" x2="190" y2="66" stroke={line} strokeWidth="1.2" markerEnd="url(#canvas-arrow)" />

          {/* Decision */}
          <polygon points="190,68 238,91 190,114 142,91" fill="#141417" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" />
          <text x="190" y="95" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">
            Authed?
          </text>

          {/* Branches: neutral base, then the "yes" path highlighted on top */}
          <line x1="190" y1="114" x2="190" y2="138" stroke={line} strokeWidth="1.2" />
          <line x1="85" y1="138" x2="295" y2="138" stroke={line} strokeWidth="1.2" />
          <line x1="190" y1="114" x2="190" y2="138" stroke={accent} strokeWidth="1.4" />
          <line x1="85" y1="138" x2="190" y2="138" stroke={accent} strokeWidth="1.4" />

          <text x="135" y="128" textAnchor="middle" fill="#fb923c" fontSize="11" fontFamily="monospace">
            yes
          </text>
          <text x="245" y="128" textAnchor="middle" fill="#a1a1aa" fontSize="11" fontFamily="monospace">
            no
          </text>

          <line x1="85" y1="138" x2="85" y2="158" stroke={accent} strokeWidth="1.4" markerEnd="url(#canvas-arrow-accent)" />
          <line x1="295" y1="138" x2="295" y2="158" stroke={line} strokeWidth="1.2" markerEnd="url(#canvas-arrow)" />

          {/* Outcomes */}
          <rect x="25" y="160" width="120" height="38" rx="8" fill="#1a120b" stroke="rgba(234,88,12,0.5)" strokeWidth="1.2" />
          <text x="85" y="184" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">
            Load workspace
          </text>

          <rect x="222" y="160" width="146" height="38" rx="8" fill="#141417" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
          <text x="295" y="184" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">
            Redirect to sign in
          </text>
        </svg>

        <LiveCursor name="Meet" className="left-[66%] top-[44%]" />
      </div>
    </WindowFrame>
  );
}

function DocsVisual() {
  return (
    <WindowFrame
      title="spec.doc"
      presence={[{ label: "A" }, { label: "agent", agent: true }]}
    >
      <div className="space-y-4 py-1">
        <div className="h-5 w-52 rounded-sm bg-zinc-200/90 shadow-sm sm:w-60" />

        <div className="space-y-2 pt-1">
          <div className="h-1.5 w-full rounded-sm bg-zinc-800" />
          <div className="h-1.5 w-5/6 rounded-sm bg-zinc-800" />
          <div className="h-1.5 w-4/6 rounded-sm bg-zinc-800" />
        </div>

        <div className="pt-2">
          <div className="h-3.5 w-32 rounded-sm bg-zinc-400/90" />
        </div>

        {/* Agent summary callout: the collaborator, with its own cursor */}
        <div className="relative rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 to-amber-900/10 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-widest text-amber-400">
            <span className="text-[9px] text-amber-500">◆</span>
            <span>AGENT SUMMARY</span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="h-1.5 w-11/12 rounded-sm bg-amber-500/35" />
            <div className="h-1.5 w-3/4 rounded-sm bg-amber-500/25" />
          </div>
          <LiveCursor name="Agent" className="-bottom-3 right-6" />
        </div>

        <div className="space-y-2 pt-1">
          <div className="h-1.5 w-full rounded-sm bg-zinc-800" />
          <div className="h-1.5 w-2/3 rounded-sm bg-zinc-800" />
        </div>
      </div>
    </WindowFrame>
  );
}

type BoardCard = { title: string; width: string; cursor?: string; done?: boolean };

const BOARD: { name: string; cards: BoardCard[] }[] = [
  {
    name: "PLANNING",
    cards: [
      { title: "Onboarding flow", width: "w-12" },
      { title: "Billing ERD", width: "w-12", cursor: "Meet" },
    ],
  },
  {
    name: "IN PROGRESS",
    cards: [
      { title: "API architecture", width: "w-14" },
      { title: "Launch spec", width: "w-14", cursor: "Aastha" },
      { title: "Org chart", width: "w-14" },
    ],
  },
  {
    name: "DONE",
    cards: [{ title: "Brand brief", width: "w-14", cursor: "Darshil", done: true }],
  },
];

function BoardVisual() {
  return (
    <WindowFrame
      title="team.board"
      presence={[{ label: "M" }, { label: "A" }, { label: "D" }]}
    >
      <div className="grid grid-cols-3 gap-2.5 py-1 sm:gap-3">
        {BOARD.map((col) => (
          <div key={col.name} className="min-w-0">
            <h4 className="mb-3 truncate font-mono text-[10px] font-semibold tracking-widest text-zinc-400">
              {col.name}
            </h4>
            <div className="space-y-2.5">
              {col.cards.map((card) => (
                <div
                  key={card.title}
                  className="relative rounded-xl border border-white/8 bg-[#141417] p-2.5 shadow-sm transition-all hover:border-primary/40 hover:bg-primary/3 sm:p-3"
                >
                  <p className="flex items-center gap-1 text-xs font-medium text-white/95">
                    {card.done && (
                      <Check aria-hidden="true" className="size-3 shrink-0 stroke-[2.5] text-orange-500" />
                    )}
                    <span className="truncate">{card.title}</span>
                  </p>
                  <div className={`mt-2.5 h-1 rounded-full bg-zinc-800 ${card.width}`} />

                  {/* Anchored to its card, so it never drifts when the layout changes */}
                  {card.cursor && (
                    <LiveCursor name={card.cursor} className="-bottom-3 right-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </WindowFrame>
  );
}

const SURFACE_VISUALS: Record<string, ReactNode> = {
  canvas: <CanvasVisual />,
  docs: <DocsVisual />,
  "team-board": <BoardVisual />,
};

/* ── Main Landing Page ──────────────────────────────────────────────── */

export default function Home() {
  const headlineParts = hero.headline.split(hero.highlightWord);

  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="topo-bg relative w-full overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center sm:px-10 sm:pb-32 sm:pt-32">
          <p className="flex items-center gap-2.5 font-mono text-sm text-muted-foreground">
            <span aria-hidden="true" className="inline-block size-2 rotate-45 bg-primary" />
            {hero.eyebrow}
          </p>

          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {headlineParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < headlineParts.length - 1 && (
                  <span className="text-primary">{hero.highlightWord}</span>
                )}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background/60 px-6 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          {/* Product video */}
          <div className="survey-frame scroll-tilt relative mt-16 w-full max-w-5xl sm:mt-20">
            {/* Ambient backlight glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.16_55/0.25),transparent_70%)] blur-2xl"
            />
            <div className="overflow-hidden rounded-xl border border-border bg-muted">
              <video
                className="block aspect-video w-full object-cover"
                poster={hero.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Product demo"
              >
                <source src={hero.video.webm} type="video/webm" />
                <source src={hero.video.mp4} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── Audience Strip ───────────────────────────────────── */}
      <section aria-label="Who it's for" className="relative border-y border-border bg-muted/20">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 sm:py-6">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Built for
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {AUDIENCES.map((audience, i) => (
              <li key={audience} className="flex items-center gap-3 text-sm text-foreground/80">
                {audience}
                {i < AUDIENCES.length - 1 && (
                  <span aria-hidden="true" className="inline-block size-1 rotate-45 bg-primary/40" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Features: The Workspace ──────────────────────────── */}
      <section id="product" className="relative w-full scroll-mt-16 overflow-hidden py-24 sm:py-32">
        {/* Top subtle amber beam */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Ambient background glows with amber tint */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Subtle amber dot grid with radial fade */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, oklch(0.74 0.16 55) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 70% 50% at 50% 30%, black 20%, transparent 80%)",
            }}
          />

          {/* Top center ambient glow */}
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.16_55/0.16),transparent_70%)] blur-3xl" />

          {/* Side amber auras along the features */}
          <div className="absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.74_0.16_55/0.08),transparent_70%)] blur-3xl" />
          <div className="absolute -right-48 top-2/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.74_0.16_55/0.08),transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="flex items-center justify-center gap-2 font-mono text-xs font-medium tracking-[0.22em] text-neutral-400">
              <span aria-hidden="true" className="text-[10px] text-orange-500">◆</span>
              <span>{workspaceSection.eyebrow}</span>
            </p>

            {/* Two-tone title: first line quiet, second line full white */}
            <h2 className="mt-4 text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-neutral-400 sm:whitespace-nowrap">
                {workspaceSection.titleLine1}
              </span>
              <span className="block text-white">{workspaceSection.titleLine2}</span>
            </h2>
          </div>

          <div className="mt-24 space-y-28 lg:mt-32 lg:space-y-36">
            {SURFACES.map((surface, idx) => {
              const isReversed = idx % 2 !== 0; // Docs row: mock on left, copy on right
              const Icon = surface.icon;

              return (
                <article
                  key={surface.title}
                  className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 xl:gap-20 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full flex-1 lg:max-w-md">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-orange-500/30 bg-[#1a120c] shadow-[0_0_15px_rgba(249,115,22,0.08)]">
                      <Icon aria-hidden="true" className="size-5 stroke-[1.8] text-orange-500" />
                    </div>

                    <h3 className="mt-5 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {surface.title}
                    </h3>

                    <p className="mt-3.5 text-pretty text-base leading-relaxed text-neutral-400">
                      {surface.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {surface.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-neutral-300">
                          <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 stroke-[2.2] text-orange-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mock wrapper with ambient amber backlight */}
                  <div className="group relative w-full flex-1 lg:max-w-xl">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    {SURFACE_VISUALS[surface.id] ?? <BoardVisual />}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works (Waypoints Route) ───────────────────── */}
      <section
        id="how-it-works"
        className="relative w-full scroll-mt-16 overflow-hidden border-t border-white/8 py-24 sm:py-32"
      >
        {/* Subtle ambient amber flare */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.16_55/0.10),transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 font-mono text-xs font-medium tracking-[0.22em] text-neutral-400">
              <span aria-hidden="true" className="text-[10px] text-orange-500">◆</span>
              <span>{howItWorksSection.eyebrow}</span>
            </p>
            <h2 className="mt-4 text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {howItWorksSection.title}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-400">
              {howItWorksSection.subtitle}
            </p>
          </div>

          {/* Waypoints Route Grid */}
          <div className="relative mt-20">
            {/* Desktop continuous dashed route line connecting waypoints */}
            <div
              aria-hidden="true"
              className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 border-t-2 border-dashed border-orange-500/30 lg:block"
            />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
              {STEPS.map((step, idx) => (
                <div
                  key={step.title}
                  className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-7 shadow-xl transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]"
                >
                  {/* Waypoint Marker */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-orange-500/40 bg-[#16120e] font-mono text-base font-bold text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-transform group-hover:scale-105">
                      {step.step}
                      <span className="absolute -right-1 -top-1 size-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,1)]" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-zinc-400">
                      WAYPOINT 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                    {step.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4 font-mono text-xs text-orange-500/80">
                    <span className="size-1.5 rounded-full bg-orange-500" />
                    <span>{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing (Placeholder) ──────────────────────────────── */}
      <section
        id="pricing"
        className="relative w-full scroll-mt-16 overflow-hidden border-t border-white/[0.08] bg-black py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 font-mono text-xs font-medium tracking-[0.22em] text-neutral-400 uppercase">
              <span aria-hidden="true" className="text-[10px] text-orange-500">◆</span>
              <span>{pricingSection.eyebrow}</span>
            </p>
            <h2 className="mt-4 text-balance text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">{pricingSection.titleLine1}</span>
              <span className="block">{pricingSection.titleLine2}</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-400">
              {pricingSection.subtitle}
            </p>
          </div>

          {/* Placeholder Box */}
          <div className="mx-auto mt-14 flex h-64 sm:h-80 w-full max-w-4xl items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.01]">
            <p className="font-mono text-xs font-medium tracking-[0.25em] text-zinc-500 uppercase">
              {pricingSection.placeholder}
            </p>
          </div>
        </div>
      </section>

      {/* ── Closing CTA (topo-bg, fluid sizing: phone → desktop) ─ */}
      <section className="topo-bg relative w-full overflow-hidden px-4 py-[clamp(2.5rem,7vw,4.5rem)]">
        {/* Map corner coordinates: padding above guarantees they never touch the content */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-3 select-none font-mono text-[10px] tracking-[0.12em] text-orange-500/80 sm:left-8 sm:top-4 sm:text-[11px] sm:tracking-[0.2em] lg:left-12 lg:top-6"
        >
          {closingCta.coordinates.topLeft}
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-3 select-none font-mono text-[10px] tracking-[0.12em] text-orange-500/80 sm:right-8 sm:top-4 sm:text-[11px] sm:tracking-[0.2em] lg:right-12 lg:top-6"
        >
          {closingCta.coordinates.topRight}
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-4 select-none font-mono text-[10px] tracking-[0.12em] text-zinc-500 sm:bottom-4 sm:left-8 sm:text-[11px] sm:tracking-[0.2em] lg:bottom-6 lg:left-12"
        >
          {closingCta.coordinates.bottomLeft}
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-4 select-none font-mono text-[10px] tracking-[0.12em] text-zinc-500 sm:bottom-4 sm:right-8 sm:text-[11px] sm:tracking-[0.2em] lg:bottom-6 lg:right-12"
        >
          {closingCta.coordinates.bottomRight}
        </span>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Mascot in a compass badge (badge scales 96px → 128px; everything inside is in %) */}
          <div className="relative mb-6 sm:mb-7">
            <div className="relative flex size-[clamp(6rem,22vw,8rem)] items-center justify-center">
              {/* soft glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.28),transparent_70%)] blur-xl"
              />
              {/* slow-rotating dashed route ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-dashed border-orange-500/50 motion-safe:animate-spin [animation-duration:40s]"
              />
              {/* inner solid ring + dark plate */}
              <div
                aria-hidden="true"
                className="absolute inset-[9%] rounded-full border border-orange-500/40 bg-[#16120e] shadow-[inset_0_0_20px_rgba(249,115,22,0.12)]"
              />
              {/* N / E / S / W waypoints */}
              {[
                "left-1/2 -top-[3px] -translate-x-1/2",
                "left-1/2 -bottom-[3px] -translate-x-1/2",
                "top-1/2 -left-[3px] -translate-y-1/2",
                "top-1/2 -right-[3px] -translate-y-1/2",
              ].map((pos) => (
                <span
                  key={pos}
                  aria-hidden="true"
                  className={`absolute size-1.5 rotate-45 bg-orange-500 ${pos}`}
                />
              ))}
              <Image
                src={closingCta.mascot}
                alt="Outpost mascot"
                width={96}
                height={96}
                className="relative size-[58%] object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>

            {/* map-pin style tag */}
            <span
              aria-hidden="true"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-orange-500/40 bg-[#1a120c] px-2.5 py-0.5 font-mono text-[10px] text-orange-400 sm:text-[11px]"
            >
              ◆ you are here
            </span>
          </div>

          {/* Headline: 30px on phones → 60px on desktop, always two lines */}
          <h2 className="text-balance text-[clamp(1.875rem,6.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white">
            <span className="block">{closingCta.titleLine1}</span>
            <span className="block">{closingCta.titleLine2}</span>
          </h2>

          <div className="relative mt-6 sm:mt-8">
            {/* dashed route ring around the button */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1.5 rounded-full border border-dashed border-orange-500/40"
            />
            <Link
              href={closingCta.cta.href}
              className="group relative inline-flex h-12 items-center gap-3 whitespace-nowrap rounded-full bg-[#f97316] pl-6 pr-1.5 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_-8px_rgba(249,115,22,0.6)] transition-all hover:bg-[#ea580c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f97316] sm:text-base"
            >
              <span>{closingCta.cta.label}</span>
              <span className="flex size-9 items-center justify-center rounded-full bg-zinc-950 text-orange-500 transition-transform group-hover:translate-x-0.5">
                <ArrowRight aria-hidden="true" className="size-4 stroke-[2.4]" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="relative border-t border-white/[0.06] bg-[#09090b] px-4 py-8 sm:py-10">
        {/* amber hairline, same as the audience strip */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />

        <div className="mx-auto flex max-w-6xl justify-center">
          <p className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-sans text-sm font-medium tracking-tight text-neutral-400 transition-colors hover:border-primary/40 sm:text-base">
            <span>made with</span>
            <span
              role="img"
              aria-label="love"
              className="inline-block transition-transform duration-300 group-hover:scale-125"
            >
              ❤️
            </span>
            <span>by</span>
            <span className="font-semibold text-white">Meet Bhuva</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
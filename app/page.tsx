import Link from "next/link";
import { Check } from "lucide-react";
import {
  hero,
  AUDIENCES,
  workspaceSection,
  SURFACES,
} from "@/app/_data/landing";

/* ── macOS Window Header (Red, Yellow, Green + Full-Width Divider Line) ── */

function MacWindowBar({ title }: { title?: string }) {
  return (
    <div className="-mx-6 -mt-6 mb-6 flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-5 py-3">
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#ff5f56] ring-1 ring-black/20 shadow-sm" />
        <span className="size-2.5 rounded-full bg-[#ffbd2e] ring-1 ring-black/20 shadow-sm" />
        <span className="size-2.5 rounded-full bg-[#27c93f] ring-1 ring-black/20 shadow-sm" />
      </div>
      {title && (
        <span className="font-mono text-[11px] font-medium tracking-wide text-zinc-500">
          {title}
        </span>
      )}
      <div className="w-12" aria-hidden="true" />
    </div>
  );
}

/* ── Inline Surface Visuals (built directly with Tailwind CSS) ──────── */

function CanvasVisual() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 shadow-2xl transition-all hover:border-white/15">
      <MacWindowBar title="canvas.workspace" />

      {/* Whiteboard Flowchart Mock */}
      <div className="flex items-center justify-center py-2">
        <svg
          viewBox="0 0 380 220"
          className="h-auto w-full select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="flow-arrow"
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 6 4 L 0 6.5 z" fill="#71717a" />
            </marker>
            <filter id="amber-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ea580c" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* 1. Request Pill */}
          <rect
            x="135"
            y="6"
            width="110"
            height="34"
            rx="17"
            fill="#18130e"
            stroke="#ea580c"
            strokeWidth="1.4"
            filter="url(#amber-glow)"
          />
          <text
            x="190"
            y="28"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="12"
            fontFamily="monospace"
            letterSpacing="0.02em"
          >
            Request
          </text>

          {/* Arrow: Request -> Authed? */}
          <line
            x1="190"
            y1="40"
            x2="190"
            y2="66"
            stroke="#52525b"
            strokeWidth="1.2"
            markerEnd="url(#flow-arrow)"
          />

          {/* 2. Authed? Diamond */}
          <polygon
            points="190,68 238,91 190,114 142,91"
            fill="#141417"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.2"
          />
          <text
            x="190"
            y="95"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11"
            fontFamily="monospace"
          >
            Authed?
          </text>

          {/* Vertical stem from diamond */}
          <line
            x1="190"
            y1="114"
            x2="190"
            y2="138"
            stroke="#52525b"
            strokeWidth="1.2"
          />

          {/* Horizontal T-bar */}
          <line
            x1="85"
            y1="138"
            x2="295"
            y2="138"
            stroke="#52525b"
            strokeWidth="1.2"
          />

          {/* Branch labels */}
          <text
            x="135"
            y="128"
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="11"
            fontFamily="monospace"
          >
            yes
          </text>
          <text
            x="245"
            y="128"
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="11"
            fontFamily="monospace"
          >
            no
          </text>

          {/* Left drop line with arrow */}
          <line
            x1="85"
            y1="138"
            x2="85"
            y2="158"
            stroke="#52525b"
            strokeWidth="1.2"
            markerEnd="url(#flow-arrow)"
          />

          {/* Right drop line with arrow */}
          <line
            x1="295"
            y1="138"
            x2="295"
            y2="158"
            stroke="#52525b"
            strokeWidth="1.2"
            markerEnd="url(#flow-arrow)"
          />

          {/* 3. Left Box: Load workspace */}
          <rect
            x="25"
            y="160"
            width="120"
            height="38"
            rx="8"
            fill="#141417"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1.2"
          />
          <text
            x="85"
            y="184"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11"
            fontFamily="monospace"
          >
            Load workspace
          </text>

          {/* 4. Right Box: Redirect to sign in */}
          <rect
            x="222"
            y="160"
            width="146"
            height="38"
            rx="8"
            fill="#141417"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1.2"
          />
          <text
            x="295"
            y="184"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11"
            fontFamily="monospace"
          >
            Redirect to sign in
          </text>
        </svg>
      </div>
    </div>
  );
}

function DocsVisual() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 shadow-2xl transition-all hover:border-white/15">
      <MacWindowBar title="spec.doc" />

      {/* Doc Mock */}
      <div className="space-y-4 py-1">
        {/* H1 Heading Skeleton */}
        <div className="h-5 w-52 rounded-sm bg-zinc-200/90 sm:w-60 shadow-sm" />

        {/* Paragraph Skeleton */}
        <div className="space-y-2 pt-1">
          <div className="h-1.5 w-full rounded-sm bg-zinc-800" />
          <div className="h-1.5 w-5/6 rounded-sm bg-zinc-800" />
          <div className="h-1.5 w-4/6 rounded-sm bg-zinc-800" />
        </div>

        {/* H2 Heading Skeleton */}
        <div className="pt-2">
          <div className="h-3.5 w-32 rounded-sm bg-zinc-400/90" />
        </div>

        {/* Agent Summary Callout */}
        <div className="rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 to-amber-900/10 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-widest text-amber-400">
            <span className="text-[9px] text-amber-500">◆</span>
            <span>AGENT SUMMARY</span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="h-1.5 w-11/12 rounded-sm bg-amber-500/35" />
            <div className="h-1.5 w-3/4 rounded-sm bg-amber-500/25" />
          </div>
        </div>

        {/* Bottom Paragraph Skeleton */}
        <div className="space-y-2 pt-1">
          <div className="h-1.5 w-full rounded-sm bg-zinc-800" />
          <div className="h-1.5 w-2/3 rounded-sm bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}

function BoardVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 shadow-2xl transition-all hover:border-white/15">
      <MacWindowBar title="team.board" />

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-3 gap-2.5 py-1 sm:gap-3">
        {/* Column 1: PLANNING */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-zinc-400">
            PLANNING
          </h4>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm hover:border-white/20 transition-colors">
              <p className="text-xs font-medium text-white/95">Onboarding flow</p>
              <div className="mt-2.5 h-1 w-12 rounded-full bg-zinc-800" />
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm hover:border-white/20 transition-colors">
              <p className="text-xs font-medium text-white/95">Billing ERD</p>
              <div className="mt-2.5 h-1 w-12 rounded-full bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* Column 2: IN PROGRESS */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-zinc-400">
            IN PROGRESS
          </h4>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm hover:border-white/20 transition-colors">
              <p className="text-xs font-medium text-white/95">API architecture</p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-zinc-800" />
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm hover:border-white/20 transition-colors">
              <p className="text-xs font-medium text-white/95">Launch spec</p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-zinc-800" />
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm hover:border-white/20 transition-colors">
              <p className="text-xs font-medium text-white/95">Org chart</p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* Column 3: DONE */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-zinc-400">
            DONE
          </h4>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm hover:border-white/20 transition-colors">
              <p className="text-xs font-medium text-white/95">Brand brief</p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Cursor 1: Maya */}
      <div className="pointer-events-none absolute left-[56%] top-[162px] z-20 flex items-center gap-1 drop-shadow-lg">
        <svg
          className="size-3.5 fill-orange-500 text-orange-500 drop-shadow"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
        <span className="rounded-md bg-orange-500 px-1.5 py-0.5 text-[9px] font-bold text-black shadow-md">
          Maya
        </span>
      </div>

      {/* Live Cursor 2: Dev */}
      <div className="pointer-events-none absolute left-[77%] top-[222px] z-20 flex items-center gap-1 drop-shadow-lg">
        <svg
          className="size-3.5 fill-orange-500 text-orange-500 drop-shadow"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
        <span className="rounded-md bg-orange-500 px-1.5 py-0.5 text-[9px] font-bold text-black shadow-md">
          Dev
        </span>
      </div>
    </div>
  );
}

function getSurfaceVisual(id: string) {
  switch (id) {
    case "canvas":
      return <CanvasVisual />;
    case "docs":
      return <DocsVisual />;
    case "team-board":
    default:
      return <BoardVisual />;
  }
}

/* ── Main Landing Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="topo-bg relative w-full overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center sm:px-10 sm:pb-32 sm:pt-32">
          {/* Eyebrow */}
          <p className="flex items-center gap-2.5 font-mono text-sm text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block size-2 rotate-45 bg-primary"
            />
            {hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {hero.headline.split(hero.highlightWord).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-primary">{hero.highlightWord}</span>
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
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
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background/60 px-6 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          {/* Product video */}
          <div className="survey-frame scroll-tilt mt-16 w-full max-w-5xl sm:mt-20">
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
      <section className="border-y border-border bg-muted/20">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 sm:py-6">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Built for
          </span>
          {AUDIENCES.map((audience, i) => (
            <span
              key={audience}
              className="flex items-center gap-3 text-sm text-foreground/80"
            >
              {audience}
              {i < AUDIENCES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="inline-block size-1 rotate-45 bg-primary/40"
                />
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ── Features: The Workspace ──────────────────────────── */}
      <section
        id="product"
        className="relative w-full overflow-hidden py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          {/* Section Header */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="flex items-center justify-center gap-2 font-mono text-xs font-medium tracking-[0.22em] text-neutral-400">
              <span className="text-[10px] text-orange-500">◆</span>
              <span>{workspaceSection.eyebrow}</span>
            </p>

            <h2 className="mt-4 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                {workspaceSection.titleLine1}
              </span>
              <span className="block">
                {workspaceSection.titleLine2}
              </span>
            </h2>
          </div>

          {/* Feature Rows */}
          <div className="mt-24 space-y-28 lg:mt-32 lg:space-y-36">
            {SURFACES.map((surface, idx) => {
              const isReversed = idx % 2 !== 0; // Row 2 (Docs) has Mock on Left, Copy on Right
              const Icon = surface.icon;

              return (
                <div
                  key={surface.title}
                  className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 xl:gap-20 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Copy Side */}
                  <div className="w-full flex-1 lg:max-w-md">
                    {/* Icon container */}
                    <div className="flex size-11 items-center justify-center rounded-xl border border-orange-500/30 bg-[#1a120c] shadow-[0_0_15px_rgba(249,115,22,0.08)]">
                      <Icon className="size-5 text-orange-500 stroke-[1.8]" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {surface.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3.5 text-sm leading-relaxed text-neutral-400">
                      {surface.description}
                    </p>

                    {/* Bullets with Checkmarks */}
                    <ul className="mt-6 space-y-3">
                      {surface.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-3 text-sm text-neutral-300"
                        >
                          <Check className="size-4 shrink-0 text-orange-500 stroke-[2.2]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mock Side */}
                  <div className="w-full flex-1 lg:max-w-xl">
                    {getSurfaceVisual(surface.id)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

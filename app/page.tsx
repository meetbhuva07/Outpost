import Link from "next/link";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import {
  hero,
  AUDIENCES,
  workspaceSection,
  SURFACES,
} from "@/app/_data/landing";

/* ── macOS window frame (bar + body in one component) ───────────────── */

function WindowFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] shadow-2xl transition-all hover:border-primary/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.08)]"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f56] ring-1 ring-black/20 shadow-sm" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e] ring-1 ring-black/20 shadow-sm" />
          <span className="size-2.5 rounded-full bg-[#27c93f] ring-1 ring-black/20 shadow-sm" />
        </div>
        <span className="font-mono text-[11px] font-medium tracking-wide text-zinc-500">
          {title}
        </span>
        <div className="w-12" />
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
    <WindowFrame title="canvas.workspace">
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
    </WindowFrame>
  );
}

function DocsVisual() {
  return (
    <WindowFrame title="spec.doc">
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

        {/* Agent summary callout */}
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
    <WindowFrame title="team.board">
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
                  className="relative rounded-xl border border-white/[0.08] bg-[#141417] p-2.5 shadow-sm transition-all hover:border-primary/40 hover:bg-primary/[0.03] sm:p-3"
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
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
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

            <h2 className="mt-4 text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block sm:whitespace-nowrap">{workspaceSection.titleLine1}</span>
              <span className="block">{workspaceSection.titleLine2}</span>
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
    </main>
  );
}
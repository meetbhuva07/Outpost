import Link from "next/link";
import { Check, PenTool, FileText } from "lucide-react";
import {
  hero,
  audiences,
  workspaceSection,
  features,
} from "@/app/_data/landing";
import {
  CanvasMock,
  DocsMock,
  KanbanMock,
} from "@/app/_components/mocks/feature-mocks";

function BoardIcon() {
  return (
    <svg
      className="size-5 text-orange-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="3" />
      <path d="M8 7v10" />
      <path d="M12 7v7" />
      <path d="M16 7v4" />
    </svg>
  );
}

function getFeatureIcon(id: string) {
  switch (id) {
    case "canvas":
      return <PenTool className="size-5 text-orange-500 stroke-[1.8]" />;
    case "docs":
      return <FileText className="size-5 text-orange-500 stroke-[1.8]" />;
    case "team-board":
    default:
      return <BoardIcon />;
  }
}

function getFeatureMock(id: string) {
  switch (id) {
    case "canvas":
      return <CanvasMock />;
    case "docs":
      return <DocsMock />;
    case "team-board":
    default:
      return <KanbanMock />;
  }
}

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
          {audiences.map((audience, i) => (
            <span
              key={audience}
              className="flex items-center gap-3 text-sm text-foreground/80"
            >
              {audience}
              {i < audiences.length - 1 && (
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
            {features.map((feature, idx) => {
              const isReversed = idx % 2 !== 0; // Row 2 (Docs) has Mock on Left, Copy on Right

              return (
                <div
                  key={feature.id}
                  className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 xl:gap-20 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Copy Side */}
                  <div className="w-full flex-1 lg:max-w-md">
                    {/* Icon container */}
                    <div className="flex size-11 items-center justify-center rounded-xl border border-orange-500/30 bg-[#1a120c] shadow-[0_0_15px_rgba(249,115,22,0.08)]">
                      {getFeatureIcon(feature.id)}
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3.5 text-sm leading-relaxed text-neutral-400">
                      {feature.description}
                    </p>

                    {/* Bullets with Checkmarks */}
                    <ul className="mt-6 space-y-3">
                      {feature.bullets.map((bullet) => (
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
                    {getFeatureMock(feature.id)}
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

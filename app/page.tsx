  import Link from "next/link";

  export default function Home() {
    return (
      <main className="w-full">
        <section className="topo-bg relative w-full overflow-hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center sm:px-10 sm:pb-32 sm:pt-32">
            <p className="flex items-center gap-2.5 font-mono text-sm text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block size-2 rotate-45 bg-primary"
              />
              Early Access
            </p>

            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              An <span className="text-primary">outpost</span> for whatever
              you&rsquo;re building
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A home base for your projects. Set up a workspace, bring in the
              tools you rely on, and take an idea from first commit to live
              without leaving it.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/sign-up"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start building free
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background/60 px-6 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                See how it works
              </Link>
            </div>

            <div className="survey-frame scroll-tilt mt-16 w-full max-w-5xl rounded-xl border border-border bg-muted sm:mt-20">
              <video
                className="block aspect-video w-full rounded-xl object-cover"
                poster="/video/hero-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Product demo"
              >
                <source src="/video/hero.webm" type="video/webm" />
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </main>
    );
  }
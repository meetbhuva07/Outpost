import React from "react";

/** Top window frame dots for all 3 mocks */
function WindowDots() {
  return (
    <div className="flex items-center gap-1.5 mb-6" aria-hidden="true">
      <span className="size-2 rounded-full bg-white/15" />
      <span className="size-2 rounded-full bg-white/15" />
      <span className="size-2 rounded-full bg-white/15" />
    </div>
  );
}

/**
 * Canvas Mock (Screenshot 1)
 * Whiteboard diagram with "Request" pill, "Authed?" diamond,
 * and "Load workspace" / "Redirect to sign in" boxes.
 */
export function CanvasMock() {
  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-5 shadow-2xl transition-all">
      <WindowDots />

      <div className="flex items-center justify-center py-2">
        <svg
          viewBox="0 0 380 230"
          className="w-full h-auto select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="canvas-arrow"
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 6 4 L 0 7 z" fill="#71717a" />
            </marker>
          </defs>

          {/* 1. Request pill */}
          <rect
            x="135"
            y="6"
            width="110"
            height="34"
            rx="17"
            fill="#18130e"
            stroke="#ea580c"
            strokeWidth="1.2"
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
            markerEnd="url(#canvas-arrow)"
          />

          {/* 2. Authed? diamond */}
          <polygon
            points="190,68 238,91 190,114 142,91"
            fill="#141417"
            stroke="rgba(255,255,255,0.12)"
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
            y2="135"
            stroke="#52525b"
            strokeWidth="1.2"
          />

          {/* Split branch to left (Load workspace) */}
          <path
            d="M 190 135 L 85 142 L 85 158"
            stroke="#52525b"
            strokeWidth="1.2"
            markerEnd="url(#canvas-arrow)"
          />
          <text
            x="126"
            y="133"
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="11"
            fontFamily="monospace"
          >
            yes
          </text>

          {/* Split branch to right (Redirect to sign in) */}
          <path
            d="M 190 135 L 295 142 L 295 158"
            stroke="#52525b"
            strokeWidth="1.2"
            markerEnd="url(#canvas-arrow)"
          />
          <text
            x="254"
            y="133"
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="11"
            fontFamily="monospace"
          >
            no
          </text>

          {/* 3. Left box: Load workspace */}
          <rect
            x="25"
            y="160"
            width="120"
            height="38"
            rx="8"
            fill="#141417"
            stroke="rgba(255,255,255,0.12)"
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

          {/* 4. Right box: Redirect to sign in */}
          <rect
            x="220"
            y="160"
            width="150"
            height="38"
            rx="8"
            fill="#141417"
            stroke="rgba(255,255,255,0.12)"
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

/**
 * Docs Mock (Screenshot 2)
 * Block editor with H1 bar, skeleton paragraphs, H2 bar,
 * and amber Agent Summary callout.
 */
export function DocsMock() {
  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 shadow-2xl transition-all">
      <WindowDots />

      <div className="space-y-4 py-1">
        {/* H1 Heading Skeleton */}
        <div className="h-5 w-52 sm:w-60 rounded-sm bg-[#d4d4d8]" />

        {/* Paragraph skeleton */}
        <div className="space-y-2 pt-1">
          <div className="h-1.5 w-full rounded-sm bg-[#222226]" />
          <div className="h-1.5 w-5/6 rounded-sm bg-[#222226]" />
          <div className="h-1.5 w-4/6 rounded-sm bg-[#222226]" />
        </div>

        {/* H2 Heading Skeleton */}
        <div className="pt-2">
          <div className="h-3.5 w-32 rounded-sm bg-[#71717a]" />
        </div>

        {/* Agent Summary Callout */}
        <div className="rounded-lg border border-amber-600/35 bg-[#1a120b] p-3.5 shadow-sm">
          <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-widest text-orange-400">
            <span className="text-[8px]">◆</span>
            <span>AGENT SUMMARY</span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="h-1.5 w-11/12 rounded-sm bg-orange-700/50" />
            <div className="h-1.5 w-3/4 rounded-sm bg-orange-700/40" />
          </div>
        </div>

        {/* Bottom Paragraph Skeleton */}
        <div className="space-y-2 pt-1">
          <div className="h-1.5 w-full rounded-sm bg-[#222226]" />
          <div className="h-1.5 w-2/3 rounded-sm bg-[#222226]" />
        </div>
      </div>
    </div>
  );
}

/**
 * Team Board Mock (Screenshot 3)
 * Kanban board with PLANNING, IN PROGRESS, DONE columns,
 * cards, and live cursor badges ("Maya", "Dev").
 */
export function KanbanMock() {
  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-5 shadow-2xl transition-all overflow-hidden">
      <WindowDots />

      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-1">
        {/* Column 1: PLANNING */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-neutral-400">
            PLANNING
          </h4>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm">
              <p className="text-xs font-medium text-white/90">
                Onboarding flow
              </p>
              <div className="mt-2.5 h-1 w-12 rounded-full bg-neutral-800" />
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm">
              <p className="text-xs font-medium text-white/90">Billing ERD</p>
              <div className="mt-2.5 h-1 w-12 rounded-full bg-neutral-800" />
            </div>
          </div>
        </div>

        {/* Column 2: IN PROGRESS */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-neutral-400">
            IN PROGRESS
          </h4>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm">
              <p className="text-xs font-medium text-white/90">
                API architecture
              </p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-neutral-800" />
            </div>

            <div className="relative rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm">
              <p className="text-xs font-medium text-white/90">Launch spec</p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-neutral-800" />
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm">
              <p className="text-xs font-medium text-white/90">Org chart</p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-neutral-800" />
            </div>
          </div>
        </div>

        {/* Column 3: DONE */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-neutral-400">
            DONE
          </h4>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-white/[0.08] bg-[#141417] p-3 shadow-sm">
              <p className="text-xs font-medium text-white/90">Brand brief</p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-neutral-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Cursor 1: Maya (hovering near Launch spec) */}
      <div className="pointer-events-none absolute left-[56%] top-[148px] z-20 flex items-center gap-0.5">
        <svg
          className="h-3.5 w-3.5 fill-current text-orange-500 drop-shadow"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
        <span className="rounded bg-[#f97316] px-1.5 py-0.5 text-[9px] font-bold text-black shadow-md">
          Maya
        </span>
      </div>

      {/* Live Cursor 2: Dev (hovering near lower edge of Org chart / DONE) */}
      <div className="pointer-events-none absolute left-[77%] top-[208px] z-20 flex items-center gap-0.5">
        <svg
          className="h-3.5 w-3.5 fill-current text-orange-500 drop-shadow"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
        <span className="rounded bg-[#f97316] px-1.5 py-0.5 text-[9px] font-bold text-black shadow-md">
          Dev
        </span>
      </div>
    </div>
  );
}

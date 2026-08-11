"use client";

/**
 * ROUGH — rings exploration 3, the "console" format (Andy 2026-08-10,
 * after arrakis.tech's featureAssetSwap section): the whole story lives
 * in ONE pinned viewport. The scene stays centre-stage and SCROLL
 * drives the chapters — four short rail zones (~75vh each, no anchor
 * locks, no wheel snap) scrub the story forward while the chapter
 * copy docks around the scene, inking up in turn. Clicking a chapter
 * scrolls to it. Total cost ~3 screens of scroll vs rings-2's ~7 +
 * locks.
 *
 * No boxes, no full-bleed (Andy 2026-08-10): the chapters are plain
 * typography — number / title / body, same register as rings-2's copy
 * column — and everything sits inside the site's max-w-7xl container.
 *
 * The scene itself is rings-2's, imported untouched — same beats
 * (0 ring build → 2 cloud → 3 tower → 4 learning; 1 is the absorb
 * transition, never a resting state).
 */

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { getLenis } from "./smooth-scroll";
import { AMBER, INK, Scene, STEPS } from "./rings2";

/** section surface — one step deeper than page cream (rings-2's dial) */
const BG = "#F0E9D8";

/** chapter → scene beat (1 is the absorb, played inside the 0→2 jump) */
const ZONE_STAGES = [0, 2, 3, 4];

/** anchor-lock dwell per chapter, seconds — rings-2's sped-up values
    (ring build / cloud / tower / first learning card) */
const CHAPTER_LOCK_S: Record<number, number> = {
  0: 2.4,
  1: 2,
  2: 1.8,
  3: 1.5,
};

/** where each chapter docks (desktop): a symmetric grid, aligned in
    reading order — 01/02 share the upper line, 03/04 the lower (Andy
    2026-08-10: the stagger read as accidental — "slightly at different
    angles"). Titles align at their TOP edge, so the rows stay level
    even as the active body opens downward. */
const DOCKS = [
  { side: "left" as const, top: "20%" },
  { side: "right" as const, top: "20%" },
  { side: "left" as const, top: "56%" },
  { side: "right" as const, top: "56%" },
];

export function Rings3() {
  const [idx, setIdx] = useState(0);
  const [arrived, setArrived] = useState(false);
  const zoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  const beat = ZONE_STAGES[idx] ?? 0;
  /* live idx for the touch handler (registered once) */
  const idxRef = useRef(idx);
  idxRef.current = idx;

  /* mobile chapter-stepping (Andy 2026-08-10: "nail this movement" —
     free touch scroll raced through transitions and skipped 03): while
     the stage is pinned, native scrolling is held and ONE swipe steps
     ONE chapter, gliding to its anchor so the camera and copy settle
     before the next gesture. Swiping back steps back; swiping down on
     04 (or up on 01) releases the page. */
  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    let startY: number | null = null;
    let snapping = false;
    let stepped = false;
    const pinned = () => {
      const r = rootRef.current?.getBoundingClientRect();
      return !!r && r.top <= 1 && r.bottom >= window.innerHeight - 1;
    };
    const step = (dir: 1 | -1) => {
      const next = Math.min(
        STEPS.length - 1,
        Math.max(0, idxRef.current + dir)
      );
      if (next === idxRef.current) return false;
      const el = zoneRefs.current[next];
      if (!el) return false;
      snapping = true;
      const offset = -window.innerHeight * 0.45;
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(el, {
          offset,
          duration: 0.8,
          force: true,
          onComplete: () => {
            snapping = false;
          },
        });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      /* belt + braces: never leave the latch stuck */
      setTimeout(() => {
        snapping = false;
      }, 1100);
      return true;
    };
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0]?.clientY ?? null;
      stepped = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (startY === null || !pinned()) return;
      const dy = startY - (e.touches[0]?.clientY ?? startY);
      /* free exits: forward off the last chapter, back off the first */
      if (idxRef.current >= STEPS.length - 1 && dy > 0) return;
      if (idxRef.current <= 0 && dy < 0) return;
      e.preventDefault();
      if (snapping || stepped) return;
      if (Math.abs(dy) > 24) stepped = step(dy > 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, {
      passive: false,
      capture: true,
    });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove, {
        capture: true,
      });
    };
  }, []);

  /* the anchor lock, ported from rings-2 (Andy 2026-08-10: "same timer
     on each section as we had before" — it scrubbed too fast without
     it): first forward arrival at each chapter pauses Lenis for that
     chapter's dwell while its build plays, then releases. Once per
     chapter per visit; scrubbing back never re-traps. Desktop only. */
  const lockedRef = useRef<Set<number>>(new Set());
  const rootRef = useRef<HTMLDivElement>(null);
  const [lockTimer, setLockTimer] = useState<{
    i: number;
    dwell: number;
  } | null>(null);

  /* locks were once-per-MOUNT, so after the first pass (or an HMR that
     kept the ref) the section scrolled straight through with no timer
     (Andy 2026-08-10). Now: leaving the section upward re-arms every
     chapter, so each fresh top-down visit gets the full locked story.
     Leaving downward does NOT re-arm — scrolling back up stays free. */
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setInView(entry.isIntersecting);
      if (
        !entry.isIntersecting &&
        entry.boundingClientRect.top >= window.innerHeight
      ) {
        lockedRef.current.clear();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!arrived || !inView) return;
    const lenis = getLenis();
    if (!lenis) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const dwell = CHAPTER_LOCK_S[idx];
    if (!dwell || lockedRef.current.has(idx)) return;
    lockedRef.current.add(idx);
    let release: ReturnType<typeof setTimeout> | null = null;
    const hold = () => {
      lenis.stop();
      setLockTimer({ i: idx, dwell });
      release = setTimeout(() => {
        lenis.start();
        setLockTimer(null);
      }, dwell * 1000);
    };
    if (idx === 0 && rootRef.current) {
      /* first arrival: glide the section flush to the viewport BEFORE
         holding — locking on the trigger froze the page with the stage
         only a fifth on screen (Andy 2026-08-10, screenshot) */
      lenis.scrollTo(rootRef.current, {
        duration: 0.7,
        lock: true,
        onComplete: hold,
      });
    } else {
      hold();
    }
    return () => {
      if (release) clearTimeout(release);
      lenis.start();
      setLockTimer(null);
    };
  }, [idx, arrived, inView]);

  /** clicking a chapter scrolls the rail to its zone — the viewport
      triggers then set the stage, same as a manual scroll */
  const jump = (i: number) => {
    const el = zoneRefs.current[i];
    if (!el) return;
    const lenis = getLenis();
    const offset = -window.innerHeight * 0.45;
    if (lenis) {
      /* force pushes through an active anchor lock — the target chapter
         then arms its own lock on arrival */
      lenis.scrollTo(el, { offset, duration: 0.9, force: true });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={rootRef}
      className="relative overflow-x-clip"
      style={{
        background: BG,
        color: INK,
        fontFamily: "var(--font-geist-sans), sans-serif",
      }}
    >
      {/* ── the pinned stage ── */}
      <div className="absolute inset-0">
        <div className="sticky top-0 h-[100svh] md:h-screen">
          {/* everything lives inside the HERO's container (1440 cap +
              px-8 gutters, same edges as the nav and the video frame) —
              wider than max-w-7xl so the diagram gets more room */}
          <div className="mx-auto h-full max-w-[1440px] px-4 md:px-8">
            <div className="relative h-full">
              {/* the name — top-left of the container, section-label
                  register (Andy 2026-08-10: not centred) */}
              {/* left-aligned on every breakpoint — sits with the rest
                  of the page's grid (Andy 2026-08-10 mobile pass) */}
              <div className="pointer-events-none absolute left-0 top-[84px] z-10 md:top-[92px]">
                <p
                  className="text-xs tracking-[0.18em]"
                  style={{ color: "rgb(30 26 56 / 45%)" }}
                >
                  THE GETVOCAL PLATFORM
                </p>
              </div>

              {/* ── the drafting grid (desktop) — the structure that
                  holds the three columns together (Andy 2026-08-10,
                  after arrakis): two verticals on the column
                  boundaries, a faint frame top and bottom. Hairlines
                  only, everything straight — no boxes. ── */}
              <div aria-hidden className="hidden md:block">
                {/* frame top + bottom */}
                <div
                  className="absolute inset-x-0 top-[72px] h-px"
                  style={{ background: "rgb(30 26 56 / 12%)" }}
                />
                <div
                  className="absolute inset-x-0 bottom-5 h-px"
                  style={{ background: "rgb(30 26 56 / 12%)" }}
                />
                {/* column boundaries — chapter column width + half gap */}
                <div
                  className="absolute top-[72px] bottom-5 w-px"
                  style={{
                    left: "calc(clamp(200px,16vw,280px) + 24px)",
                    background: "rgb(30 26 56 / 12%)",
                  }}
                />
                <div
                  className="absolute top-[72px] bottom-5 w-px"
                  style={{
                    right: "calc(clamp(200px,16vw,280px) + 24px)",
                    background: "rgb(30 26 56 / 12%)",
                  }}
                />
              </div>

              {/* centre stage — clears the floating nav. Desktop sizing
                  is WIDTH-driven: the scene takes what's left after both
                  chapter columns (clamp width + gutters), capped by the
                  viewport height, so it can never slide under the copy.
                  Mobile: full-bleed like rings-2 — giving back the px-4
                  gutters scales the width-limited scene up ~9% */}
              {/* mobile: taller band + a real gap under the eyebrow —
                  the scene starts at 136px so the title breathes */}
              <div className="relative -mx-4 flex h-[62%] justify-center pt-[136px] md:mx-0 md:h-full md:items-center md:pt-[92px] md:pb-4">
                <div
                  className="relative h-full max-w-full md:h-auto md:w-[min(calc((100svh-140px)*0.977),calc(100%-2*clamp(200px,16vw,280px)-48px))]"
                  style={{ aspectRatio: "840 / 860" }}
                >
                  <Scene beat={arrived ? beat : -1} arrived={arrived} />
                </div>
              </div>

              {/* ── the chapters: plain typography docked at the
                  container edges; mobile: all four share the lower
                  band, only the active one visible ── */}
              {STEPS.map((s, i) => {
                const active = arrived && i === idx;
                const dock = DOCKS[i] ?? DOCKS[0];
                const left = dock?.side === "left";
                return (
                  <button
                    key={s.title}
                    data-rings3-card={i}
                    type="button"
                    onClick={() => jump(i)}
                    className={`absolute inset-x-0 bottom-4 block cursor-pointer appearance-none border-0 bg-transparent p-0 text-left md:inset-x-auto md:bottom-auto md:w-[clamp(200px,16vw,280px)] md:pt-3.5 ${
                      left ? "md:left-0" : "md:right-0"
                    } ${
                      active ? "" : "pointer-events-none md:pointer-events-auto"
                    }`}
                  >
                    {/* the shelf rule — extends 24px past the column to
                        MEET the vertical boundary line, and doubles as
                        the lock-progress track: the amber fill runs its
                        full length during the hold, growing from the
                        outer edge toward the diagram */}
                    <div
                      aria-hidden
                      className="absolute top-0 hidden h-px md:block"
                      style={{
                        left: left ? 0 : -24,
                        right: left ? -24 : 0,
                        background: "rgb(30 26 56 / 20%)",
                      }}
                    >
                      <AnimatePresence>
                        {active && lockTimer?.i === i && (
                          <motion.div
                            key="lock-fill"
                            className="absolute inset-x-0 -top-px h-[2px]"
                            style={{
                              background: AMBER,
                              transformOrigin: left ? "0% 50%" : "100% 50%",
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.5 },
                            }}
                            transition={{
                              duration: lockTimer.dwell,
                              ease: [0.45, 0.05, 0.35, 0.95],
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                    <div
                      className={`relative transition-opacity duration-500 ${
                        active
                          ? "opacity-100"
                          : "max-md:invisible max-md:opacity-0 md:opacity-40"
                      }`}
                    >
                      <span
                        className="text-xs tracking-[0.18em]"
                        style={{
                          color: active ? AMBER : "rgb(30 26 56 / 35%)",
                          transition: "color 0.4s",
                        }}
                      >
                        0{i + 1}
                      </span>
                      <h3 className="mt-2 text-xl font-light leading-tight md:text-2xl">
                        {s.title}
                      </h3>
                      {/* the body opens only on the live chapter — the
                          resting chapters stay compact labels */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: active ? "auto" : 0,
                          opacity: active ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          className="pt-3 text-[14px] leading-6"
                          style={{ color: "rgb(30 26 56 / 55%)" }}
                        >
                          {s.body}
                        </p>
                      </motion.div>
                    </div>
                  </button>
                );
              })}

              {/* dock positions, desktop only — a style tag keeps the
                  per-chapter `top` out of the mobile layout */}
              <style>
                {DOCKS.map(
                  (d, i) =>
                    `@media (min-width: 768px){[data-rings3-card="${i}"]{top:${d.top};bottom:auto;}}`
                ).join("\n")}
              </style>
            </div>
          </div>
        </div>
      </div>

      {/* ── the scroll rail — invisible; these heights ARE the pacing.
          Four short zones, free scrub, no locks. ── */}
      <div className="pointer-events-none relative">
        {/* arrival marker — the build starts when the section reaches
            the reader, not at page load */}
        <motion.div
          className="h-px"
          onViewportEnter={() => setArrived(true)}
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        />
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            ref={(el) => {
              zoneRefs.current[i] = el;
            }}
            /* touch stepping (not rail length) paces mobile now, so
               zones only need to be far enough apart that a step glide
               reads as movement */
            className="h-[100vh] md:h-[75vh]"
            onViewportEnter={() => setIdx(i)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
          />
        ))}
        {/* tail: viewing time for the last beat before release — long
            enough that 04 gets watched, not clipped by the exit (Andy
            2026-08-10: "you hit 04 and then you scroll off it").
            Mobile keeps rings-2's shorter tail. */}
        <div className="h-[60vh] md:h-[110vh]" />
      </div>
    </div>
  );
}

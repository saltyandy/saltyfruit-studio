"use client";

/**
 * ROUGH — rings exploration 2, built screen-by-screen from Andy's Paper
 * running order (far-right column, "GetVocal — Rings Animatic"):
 *
 *   01 Your business logic — ring draws, condition pills stack in,
 *      gates + human nodes dock. No AI yet.
 *   02 LLMs drive dynamic conversation — the cloud moves in: stepped
 *      turns, connections firing continuously, occasional line out to a
 *      gate whose chip expands to show its rule.
 *   03 Human Agents monitor and train — the tower ring appears around
 *      the operation, four HUMAN AGENT stations dock.
 *
 *   (next screens land here one at a time: escalation → decisions →
 *   approved → continuous learning)
 *
 * All beat-entry delays collapse to 0 when a beat is revisited, so
 * scrubbing up and down the page doesn't strand half-played states.
 */

import { AnimatePresence, motion, useAnimationFrame } from "motion/react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { getLenis } from "./smooth-scroll";

/** 3D context cloud inside the LLM ring */
const LLM_3D = true;
/** just a soft gradient glow behind the scene (off — Andy prefers flat) */
const TEXTURE = false;

export const W = 840;
export const H = 860;
export const CX = 420;
export const CY = 430;
/** the cloud fills the ring — no separate LLM circle in the design */
const R_LLM = 254;
export const R_LOGIC = 272;
/** generous gap up to the tower — the layers need air */
export const R_TOWER = 385;

export const PAPER = "#F4EFE3";
export const INK = "#1E1A38";
export const AMBER = "#C99215";
export const GREEN = "#3E9B6B";
/** Section surface — one step deeper than the page cream so the rings
    chapter reads as its own room (Andy 2026-07-23: "different background
    color?"). Chips/cards keep PAPER fills, so they lift off it slightly.
    This is a dial — set back to PAPER to revert. */
const RINGS_BG = "#F0E9D8";

export const polar = (r: number, deg: number) => ({
  x: CX + r * Math.cos((deg * Math.PI) / 180),
  y: CY + r * Math.sin((deg * Math.PI) / 180),
});

/* ── mobile counter-scaling ──────────────────────────────────────────────
   On phones the whole viewBox renders at ~0.45× so SVG labels drop under
   7px — illegible. The scene stays geometric; only the TEXT-bearing
   elements scale up (free labels most, chips less — chips grow into
   their neighbours' space so they get a smaller multiplier + position
   nudges). Provided by Scene so every layer/child sees the same flag. */
export const MobileCtx = createContext(false);

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return mobile;
}

/** free-floating ring labels (Business logic / LLM / Control Tower) */
const LABEL_K = 1.7;
/** text that lives inside a drawn chip (drawers, verdicts, stations) */
const CHIP_K = 1.3;

/** gate slots on the business-logic ring (Andy's five positions) */
export const GATE_ANGLES = [-51, 18, 54, 142, 183];
/** human nodes docked by the approval rule */
export const HUMAN_NODE_ANGLES = [-136, -20, 104];
/** the logic categories that dock in — generalised, the whole
    rulebook. (Retail set; an industry switcher swaps these later.)
    The gate drawers then reveal a specific rule from inside one.
    `human` rules carry the person mark INSTEAD of the keyhole (Andy:
    one icon only — the diamond wasn't reading as "a human is here") */
const RULES = [
  { text: "Refunds logic", human: true },
  { text: "Orders & returns logic", human: false },
  { text: "Stock rules & logic", human: false },
  { text: "Account validation", human: true },
  { text: "Discount rules", human: true },
  { text: "Shipping logic", human: false },
  { text: "Human Agent Validation", human: true },
];
/** human agent stations — Andy's board positions, relative to centre */
export const STATIONS = [
  { x: CX - 295, y: CY - 247 },
  { x: CX + 295, y: CY - 247 },
  { x: CX - 295, y: CY + 247 },
  { x: CX + 295, y: CY + 247 },
];

export const STEPS: { title: string; body: string }[] = [
  {
    title: "Your business rules and logic",
    body: "The context graph is a living model of how your business works — every rule and condition, written in plain English. You define it and keep it current, and it becomes the guardrails your AI agents operate within.",
  },
  {
    title: "LLMs navigate conversations dynamically",
    body: "Fluent and in the moment, but only ever inside your guardrails — every customer request is checked live against the graph, and anything that needs a person goes to one.",
  },
  {
    title: "Human Agents monitor and train",
    body: "GetVocal Control Tower gives your team oversight of every AI conversation — approving, declining or taking over at the critical moments, right as they happen.",
  },
  {
    title: "AI Agents continuously learn and improve",
    body: "Every conversation feeds the Human-AI Flywheel. Call drops, new conversation opportunities and skill gaps surface overnight, and one click turns each finding into a new rule on the graph. Automation compounds — and trust builds with every interaction.",
  },
];

/** the nightly findings — one demo card per category, each closed by
    a human click. Retail, matter-of-fact. */
const LEARNINGS = [
  {
    cat: "CALL DROPS",
    dot: "#E8523A",
    text: "Callers hang up at the payment step",
    sub: "The payment link isn't read out on calls — 14 drops this week.",
    count: "14 calls",
  },
  {
    cat: "NEW CONVERSATION OPPORTUNITIES",
    dot: "#1E1A38",
    text: "“Can I change my delivery address?”",
    sub: "Asked 9 times this week — there's no route for it yet.",
    count: "9 asks",
  },
  {
    cat: "AI AGENT SKILL GAPS",
    dot: "#C99215",
    text: "Can't explain the returns portal",
    sub: "The returns flow isn't in its knowledge — every call escalates.",
    count: "6 calls",
  },
];

/** one card's timeline, seconds */
const DEMO_LEN = 4.6;

/** Shared learning-beat clock — LearningDemo (the HTML card) owns it,
    and the SVG layers (PulseGroup brightness + GraphSurge nodes) read
    the same origin so the "Add to graph" click, the graph lighting up
    and the new nodes landing are frame-locked to one timeline. */
const DEMO_CLOCK: { t0: number | null } = { t0: null };

function LearningDemo() {
  const [t, setT] = useState(-1);
  useEffect(() => {
    if (DEMO_CLOCK.t0 === null) DEMO_CLOCK.t0 = performance.now() / 1000;
    return () => {
      DEMO_CLOCK.t0 = null;
    };
  }, []);
  useAnimationFrame(() => {
    if (DEMO_CLOCK.t0 !== null) setT(performance.now() / 1000 - DEMO_CLOCK.t0);
  });
  if (t < 0) return null;

  const tt = t % (DEMO_LEN * LEARNINGS.length);
  const idx = Math.floor(tt / DEMO_LEN);
  const f = tt % DEMO_LEN;
  const item = LEARNINGS[idx];
  if (!item) return null;

  /* phases: rise in → cursor travels + clicks → the card is ABSORBED —
     it scales down to nothing at the centre (into the graph) while the
     graph lights up behind it, THEN the new nodes land (Andy 2026-07-23:
     the add has to visibly go INTO the graph, not happen behind a card) */
  const inA = env(f, 0, 0.45, 2.9, 3.02);
  const cardY = (1 - env(f, 0, 0.45, 99, 100)) * 26;
  const absorb = easeInOutCubic(Math.max(0, Math.min((f - 2.45) / 0.55, 1)));
  const curA = env(f, 1.15, 1.45, 2.38, 2.52);
  const move = easeInOutCubic(Math.max(0, Math.min((f - 1.2) / 0.85, 1)));
  const clickDip = env(f, 2.12, 2.2, 2.24, 2.38);
  const ripple = Math.max(0, Math.min((f - 2.15) / 0.45, 1));
  const resolved = f > 2.35;

  /* cursor path, relative to the BUTTON ROW so it tracks the button
     wherever the card's text wraps: drifts in from the lower right and
     the dot's centre (+7,+7) lands ON the button's centre (~53,15) */
  const curX = 315 - move * 269;
  const curY = 34 - move * 26;

  return (
    <div
      className="relative"
      style={{
        width: "min(430px, 88vw)",
        borderRadius: 18,
        border: "1px solid rgb(30 26 56 / 30%)",
        background: PAPER,
        padding: "18px 22px 20px",
        opacity: inA,
        transform: `translateY(${cardY}px) scale(${1 - absorb})`,
        transformOrigin: "50% 50%",
        fontFamily: "var(--font-geist-sans), sans-serif",
        boxShadow: "0 12px 40px rgb(30 26 56 / 8%)",
      }}
    >
      <div className="flex items-center gap-2">
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: item.dot,
          }}
        />
        <span
          style={{
            fontSize: 10.5,
            letterSpacing: "0.14em",
            color: "rgb(30 26 56 / 55%)",
          }}
        >
          {item.cat}
        </span>
        <span
          className="ml-auto"
          style={{ fontSize: 10.5, color: "rgb(30 26 56 / 40%)" }}
        >
          {item.count}
        </span>
      </div>
      <p style={{ fontSize: 16.5, color: INK, marginTop: 10 }}>{item.text}</p>
      <p
        style={{
          fontSize: 12.5,
          lineHeight: "18px",
          color: "rgb(30 26 56 / 55%)",
          marginTop: 4,
        }}
      >
        {item.sub}
      </p>
      <div className="relative mt-4 flex items-center gap-3">
        <div
          style={{
            height: 30,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            borderRadius: 15,
            background: resolved ? "#3E9B6B" : INK,
            color: PAPER,
            fontSize: 12,
            whiteSpace: "nowrap",
            flexShrink: 0,
            transform: clickDip > 0 ? "scale(0.96)" : "scale(1)",
          }}
        >
          {resolved ? "✓ Added to graph" : "Add to graph"}
        </div>
        {resolved && (
          <span style={{ fontSize: 11, color: "#3E9B6B" }}>
            gone from this list tomorrow
          </span>
        )}

        {/* the human's cursor — anchored to this row, over the button */}
        <div
          style={{
            position: "absolute",
            left: curX,
            top: curY,
            opacity: curA,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: INK,
              border: `2px solid ${PAPER}`,
              transform: clickDip > 0 ? "scale(0.8)" : "scale(1)",
              boxShadow: "0 1px 4px rgb(30 26 56 / 30%)",
            }}
          />
          {ripple > 0 && ripple < 1 && (
            <div
              style={{
                position: "absolute",
                left: 7 - ripple * 22,
                top: 7 - ripple * 22,
                width: ripple * 44,
                height: ripple * 44,
                borderRadius: "50%",
                border: "1.5px solid rgb(30 26 56 / 50%)",
                opacity: 1 - ripple,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/** Andy's gate mark: rounded diamond with a punched keyhole */
export function Keyhole({
  cx,
  cy,
  size,
  fill,
}: {
  cx: number;
  cy: number;
  size: number;
  fill: string;
}) {
  const s = size / 72;
  return (
    <g transform={`translate(${cx - size / 2} ${cy - size / 2}) scale(${s})`}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 13 Q36 6 43 13 L59 29 Q66 36 59 43 L43 59 Q36 66 29 59 L13 43 Q6 36 13 29 Z M36 26 C41.5 26 46 30.5 46 36 C46 41.5 41.5 46 36 46 C30.5 46 26 41.5 26 36 C26 30.5 30.5 26 36 26 Z"
        fill={fill}
      />
    </g>
  );
}

/** solid rounded diamond — the cloud's node mark */
export function Diamond({
  cx,
  cy,
  size,
  fill,
}: {
  cx: number;
  cy: number;
  size: number;
  fill: string;
}) {
  const s = size / 72;
  return (
    <g transform={`translate(${cx - size / 2} ${cy - size / 2}) scale(${s})`}>
      <path
        d="M28 12 Q36 4 44 12 L60 28 Q68 36 60 44 L44 60 Q36 68 28 60 L12 44 Q4 36 12 28 Z"
        fill={fill}
      />
    </g>
  );
}

/** Andy's human mark: head + shoulders standing above an arc */
function Person({
  cx,
  cy,
  size,
  fill,
}: {
  cx: number;
  cy: number;
  size: number;
  fill: string;
}) {
  const s = size / 72;
  return (
    <g transform={`translate(${cx - size / 2} ${cy - size / 2}) scale(${s})`}>
      <circle cx={36} cy={18} r={8} fill={fill} />
      <rect x={24} y={29} width={24} height={13} rx={6.5} fill={fill} />
      <path
        d="M10 62 A30 30 0 0 1 62 62"
        stroke={fill}
        strokeWidth={7}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

/** green-outline chip with the amber keyhole — a docked gate */
export function GateChip({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect
        x={cx - 22}
        y={cy - 16}
        width={44}
        height={32}
        rx={16}
        stroke={GREEN}
        strokeWidth={1.2}
        fill={PAPER}
      />
      <Keyhole cx={cx} cy={cy} size={22} fill={AMBER} />
    </g>
  );
}

export function HumanNode({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={16}
        stroke={GREEN}
        strokeWidth={1.2}
        fill={PAPER}
      />
      <Person cx={cx} cy={cy} size={18} fill={AMBER} />
    </g>
  );
}

/** Real faces for the station chips (Andy 2026-08-10: "obvious that they
    are real human agents") — Flora-generated agent headshots (GPT Image
    2, slim headsets, cream backdrop), 128px JPEGs in public/rings/. */
export const STATION_AVATARS = [
  "/rings/agent-1.jpg",
  "/rings/agent-2.jpg",
  "/rings/agent-3.jpg",
  "/rings/agent-4.jpg",
];

/** HUMAN AGENT station — Andy's board chip: 139×33, ink outline.
    fill flips to sand #EEDCB2 while the agent holds a task. */
export function Station({
  x,
  y,
  fill = PAPER,
  avatar,
}: {
  x: number;
  y: number;
  fill?: string;
  /** Photo avatar in place of the person glyph — a real human agent. */
  avatar?: string;
}) {
  const mobile = useContext(MobileCtx);
  const clipId = `stav-${Math.round(x)}-${Math.round(y)}`;
  return (
    /* the whole chip counter-scales on mobile — text alone would burst
       out of the 139-wide pill */
    <g
      transform={
        mobile
          ? `translate(${x} ${y}) scale(${CHIP_K}) translate(${-x} ${-y})`
          : undefined
      }
    >
      <rect
        x={x - 69.5}
        y={y - 16.5}
        width={139}
        height={33}
        rx={16.5}
        stroke={INK}
        strokeWidth={1.1}
        fill={fill}
      />
      {/* lockup: 23 avatar + 8 gap + ~81 label, centred in the 139 pill
          (13.5 margins each side) — the avatar was touching the text */}
      {avatar ? (
        <>
          <clipPath id={clipId}>
            <circle cx={x - 44.5} cy={y} r={11.5} />
          </clipPath>
          <image
            href={avatar}
            x={x - 56}
            y={y - 11.5}
            width={23}
            height={23}
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${clipId})`}
          />
          <circle
            cx={x - 44.5}
            cy={y}
            r={11.5}
            fill="none"
            stroke={INK}
            strokeWidth={0.9}
            strokeOpacity={0.4}
          />
        </>
      ) : (
        <Person cx={x - 44.5} cy={y} size={14} fill={INK} />
      )}
      <text
        x={x + 15.5}
        y={y + 3.5}
        textAnchor="middle"
        fontSize={10.5}
        letterSpacing={1.1}
        fill={INK}
      >
        HUMAN AGENT
      </text>
    </g>
  );
}

/* Anchor-lock dwell per stage (desktop, seconds): reaching a chapter
   parks the scroll while its animation and copy play in, then releases —
   so the build can't be scrolled past unseen (Andy 2026-08-10; sped up
   same day: "increase the speed of the lock"). Keyed by stage: -1 = the
   00 title card, 0 = ring build (ring → rules → nodes), 2 = absorb +
   cloud sputter, 3 = tower docking, 4 = first learning card. */
const STAGE_LOCK_S: Record<number, number> = {
  [-1]: 2,
  0: 2.4,
  2: 2,
  3: 1.8,
  4: 1.5,
};

export function Rings2() {
  /* stage, not step: -1 is the 00 title card ("what am I looking at?" —
     Andy 2026-08-10), 0 is the ring build; stage 1 (the absorb) is not a
     scroll state — the rail jumps 0→2 and the absorb plays inside that
     transition */
  const [stage, setStage] = useState(-1);
  const activeStep = stage <= 1 ? 0 : stage - 1;
  /* the opening build waits for the READER — mounted under the hero the
     intro used to play unseen at page load. Flips once, when the section
     actually reaches the viewport, and the staged entrance runs from it
     (Andy 2026-07-23: land → ring expands → rules in → nodes populate). */
  const [arrived, setArrived] = useState(false);

  /* the anchor lock: first forward arrival at each chapter pauses Lenis
     for that chapter's dwell, then releases. Once per chapter per visit —
     scrubbing back up never re-traps. Desktop only (Lenis can't hold
     native touch scrolling, and phones shouldn't be trapped anyway). */
  const lockedStages = useRef<Set<number>>(new Set());
  const rootRef = useRef<HTMLDivElement>(null);
  const zoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  /* the visible lock timer — step index + dwell of the hold currently
     playing, null once the scroll is released (the line fades out) */
  const [lockTimer, setLockTimer] = useState<{
    stage: number;
    dwell: number;
  } | null>(null);
  useEffect(() => {
    if (!arrived) return;
    const lenis = getLenis();
    if (!lenis) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const dwell = STAGE_LOCK_S[stage];
    if (!dwell || lockedStages.current.has(stage)) return;
    lockedStages.current.add(stage);
    let release: ReturnType<typeof setTimeout> | null = null;
    const hold = () => {
      lenis.stop();
      setLockTimer({ stage, dwell });
      release = setTimeout(() => {
        lenis.start();
        setLockTimer(null);
      }, dwell * 1000);
    };
    if (stage === -1 && rootRef.current) {
      /* first arrival: snap the section flush to the viewport so the
         title card isn't watched half-clipped, then hold */
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
  }, [stage, arrived]);

  /* the page-flip: while the scene is pinned, a fresh downward wheel
     gesture jumps straight to the next chapter's anchor instead of
     scrubbing the rail (Andy 2026-08-10: "when I start scrolling, it
     should immediately jump to the next page"). Trackpad inertia from
     the previous gesture doesn't count — a gesture only registers after
     ~90ms of wheel silence, so each flip needs a deliberate scroll.
     Upward scrolling and the exit after the last chapter stay free. */
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    let snapping = false;
    let lastWheelT = 0;
    const onWheel = (e: WheelEvent) => {
      const root = rootRef.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      const pinned = rect.top <= 1 && rect.bottom >= window.innerHeight;
      const now = performance.now();
      const fresh = now - lastWheelT > 90;
      lastWheelT = now;
      if (!pinned || e.deltaY <= 0) return;
      if (stage >= 4) return; // last chapter: scroll releases naturally
      e.preventDefault();
      if (snapping || !fresh) return;
      /* zone that triggers the NEXT stage (zone i sets stage i===0?0:i+1;
         from the title card the next stop is zone 0, the ring build) */
      const zi = stage < 0 ? 0 : stage === 0 ? 1 : stage;
      const el = zoneRefs.current[zi];
      if (!el) return;
      snapping = true;
      lenis.scrollTo(el, {
        /* land with the zone top just inside the -45% trigger band */
        offset: -window.innerHeight * 0.45,
        duration: 0.8,
        lock: true,
        onComplete: () => {
          snapping = false;
        },
      });
      /* the chapter lock stops Lenis mid-flight (that's the anchor hold),
         which can swallow onComplete — clear the latch on a timer too */
      setTimeout(() => {
        snapping = false;
      }, 1000);
    };
    window.addEventListener("wheel", onWheel, {
      passive: false,
      capture: true,
    });
    return () =>
      window.removeEventListener("wheel", onWheel, { capture: true });
  }, [stage]);

  return (
    <div
      ref={rootRef}
      className="relative"
      style={{
        background: RINGS_BG,
        color: INK,
        fontFamily: "var(--font-geist-sans), sans-serif",
        overflowX: "clip",
      }}
    >
      {/* ONE pinned stage: scene + copy live together and the copy is
          ANCHORED — it crossfades in place and never scrolls, so there
          is no in-between moment where the scene animates without its
          text. The invisible rail below provides the scroll length. */}
      <div className="absolute inset-0">
        <div className="sticky top-0 h-[100svh] md:h-screen">
          {/* pt clears the floating nav pill so the tower ring + label
              never slide underneath it */}
          <div className="mx-auto flex h-full max-w-7xl flex-col px-4 pt-[76px] md:flex-row md:px-10 md:pt-[96px]">
            {/* mobile: full-bleed — the viewBox is width-limited in this
                band, so giving back the px-4 gutters scales the whole
                scene up ~9% */}
            <div className="relative -ml-4 h-[55%] w-[calc(100%+2rem)] md:ml-0 md:h-full md:w-auto md:flex-1">
              {TEXTURE && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute"
                  style={{
                    width: "500%",
                    height: "500%",
                    left: "-200%",
                    top: "-210%",
                    background:
                      "radial-gradient(closest-side, rgb(255 253 245 / 90%) 0%, rgb(244 236 214 / 45%) 45%, rgb(244 239 227 / 0%) 72%)",
                  }}
                />
              )}
              {/* the ring build waits until the title card is scrolled
                  past — the ring then expands out of the stage the title
                  just vacated */}
              <Scene beat={stage} arrived={arrived && stage >= 0} />
            </div>

            {/* the anchored copy — every step absolutely centred in the
                rail, only opacity/y move on step change */}
            <div className="relative h-[45%] w-full md:h-full md:w-[34%]">
              {STEPS.map((s, i) => {
                const active = stage >= 0 && activeStep === i;
                return (
                  <div
                    key={s.title}
                    className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col px-5 md:px-0 md:pl-12"
                  >
                    {/* the lock timer — an amber line above the chapter
                        number filling left→right over the hold, fading
                        out the moment the scroll releases. Absolutely
                        placed so its appearance never shifts the copy. */}
                    <AnimatePresence>
                      {active &&
                        lockTimer &&
                        (lockTimer.stage <= 1 ? 0 : lockTimer.stage - 1) ===
                          i && (
                        <motion.div
                          key="lock-timer"
                          className="absolute left-5 top-[-22px] h-[3px] w-14 overflow-hidden rounded-full md:left-12"
                          style={{ background: "rgb(30 26 56 / 10%)" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                          <motion.div
                            className="h-full w-full rounded-full"
                            style={{
                              background: AMBER,
                              transformOrigin: "0% 50%",
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              duration: lockTimer.dwell,
                              ease: [0.45, 0.05, 0.35, 0.95],
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* explicit hidden initials — without them every
                        step's copy paints stacked until the first
                        animation frame runs */}
                    <motion.span
                      className="text-xs tracking-[0.18em]"
                      initial={{
                        color: "rgb(30 26 56 / 30%)",
                        y: 14,
                        opacity: 0,
                      }}
                      animate={{
                        color: active ? AMBER : "rgb(30 26 56 / 30%)",
                        y: active ? 0 : 14,
                        opacity: active ? 1 : 0,
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      0{i + 1}
                    </motion.span>
                    <motion.h3
                      className="mt-3 text-2xl font-light leading-tight md:text-3xl"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 18 }}
                      transition={{
                        duration: 0.5,
                        delay: active ? 0.12 : 0,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {s.title}
                    </motion.h3>
                    <motion.p
                      className="mt-3 max-w-sm text-[15px] leading-6 md:mt-4 md:text-base md:leading-7"
                      style={{ color: "rgb(30 26 56 / 55%)" }}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 22 }}
                      transition={{
                        duration: 0.55,
                        delay: active ? 0.3 : 0,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {s.body}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ════ 00 · the title card — names what you're looking at
              before the build starts (Andy 2026-08-10: "you land on it
              and you're like, what am I looking at?"). Built from the
              rings vocabulary: the three marks of the story to come —
              gate, graph node, human — pop in over the empty stage, the
              title rises word by word, and the first scroll inks it away
              as the logic ring expands out of the same stage. ════ */}
          <AnimatePresence>
            {stage < 0 && (
              <motion.div
                key="intro-card"
                className="absolute inset-0 z-10 flex items-center justify-center px-6"
                exit={{
                  opacity: 0,
                  y: -36,
                  scale: 0.97,
                  transition: { duration: 0.55, ease: "easeIn" },
                }}
              >
                <div className="relative max-w-[780px] text-center">
                  {/* the intro's lock timer, same language as the steps */}
                  <AnimatePresence>
                    {lockTimer?.stage === -1 && (
                      <motion.div
                        key="intro-lock"
                        className="absolute -top-9 left-1/2 h-[3px] w-14 -translate-x-1/2 overflow-hidden rounded-full"
                        style={{ background: "rgb(30 26 56 / 10%)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                      >
                        <motion.div
                          className="h-full w-full rounded-full"
                          style={{
                            background: AMBER,
                            transformOrigin: "0% 50%",
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: lockTimer.dwell,
                            ease: [0.45, 0.05, 0.35, 0.95],
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* the three marks of the story to come */}
                  <div className="mb-8 flex items-center justify-center gap-4">
                    {[
                      { key: "gate", fill: AMBER, kind: "keyhole" },
                      { key: "node", fill: INK, kind: "diamond" },
                      { key: "human", fill: GREEN, kind: "person" },
                    ].map((m, i) => (
                      <motion.svg
                        key={m.key}
                        viewBox="0 0 72 72"
                        className="size-6"
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={
                          arrived
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.3 }
                        }
                        transition={{
                          delay: 0.25 + i * 0.16,
                          type: "spring",
                          stiffness: 260,
                          damping: 15,
                        }}
                      >
                        {m.kind === "keyhole" ? (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29 13 Q36 6 43 13 L59 29 Q66 36 59 43 L43 59 Q36 66 29 59 L13 43 Q6 36 13 29 Z M36 26 C41.5 26 46 30.5 46 36 C46 41.5 41.5 46 36 46 C30.5 46 26 41.5 26 36 C26 30.5 30.5 26 36 26 Z"
                            fill={m.fill}
                          />
                        ) : m.kind === "diamond" ? (
                          <path
                            d="M28 12 Q36 4 44 12 L60 28 Q68 36 60 44 L44 60 Q36 68 28 60 L12 44 Q4 36 12 28 Z"
                            fill={m.fill}
                          />
                        ) : (
                          <>
                            <circle cx={36} cy={18} r={8} fill={m.fill} />
                            <rect
                              x={24}
                              y={29}
                              width={24}
                              height={13}
                              rx={6.5}
                              fill={m.fill}
                            />
                            <path
                              d="M10 62 A30 30 0 0 1 62 62"
                              stroke={m.fill}
                              strokeWidth={7}
                              strokeLinecap="round"
                              fill="none"
                            />
                          </>
                        )}
                      </motion.svg>
                    ))}
                  </div>

                  {/* the name, rising word by word */}
                  <h2 className="font-light text-[clamp(32px,3.8vw,56px)] leading-[1.08] tracking-[-0.02em]">
                    {"This is the GetVocal platform.".split(" ").map((w, i) => (
                      <span
                        key={`${w}-${
                          // biome-ignore lint/suspicious/noArrayIndexKey: static words
                          i
                        }`}
                        className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                      >
                        <motion.span
                          className="inline-block"
                          initial={{ y: "110%" }}
                          animate={arrived ? { y: 0 } : { y: "110%" }}
                          transition={{
                            duration: 0.8,
                            delay: 0.45 + i * 0.07,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {w}
                          {" "}
                        </motion.span>
                      </span>
                    ))}
                  </h2>
                  <motion.p
                    className="mx-auto mt-5 max-w-md text-[15px] leading-6 md:text-base md:leading-7"
                    style={{ color: "rgb(30 26 56 / 55%)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      arrived ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.7,
                      delay: 1.0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    Your rules, your AI agents and your people — one governed
                    operation. Watch it build.
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* the scroll rail — invisible; these heights ARE the pacing */}
      <div className="pointer-events-none relative">
        {/* arrival marker — fires the staged intro once the section's top
            clears the lower third of the viewport (the sticky scene is
            already on screen at that point) */}
        <motion.div
          className="h-px"
          onViewportEnter={() => setArrived(true)}
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        />
        {/* 00 · the title card's zone — one screen before the build */}
        <motion.div
          className="h-[80vh] md:h-[100vh]"
          onViewportEnter={() => setStage(-1)}
          viewport={{ margin: "-45% 0px -45% 0px" }}
        />
        {STEPS.map((s, i) => (
          <div key={s.title}>
            {/* NO separate absorb zone — parking there read as a blank
                ring. The absorb now plays as the first act of the 01→02
                transition (pills sink, cloud follows ~0.8s behind).
                Desktop zones are one screen each — pacing lives in the
                anchor locks + wheel snap now, not rail length. Mobile
                keeps the long free-scroll rail (no snap on touch). */}
            <motion.div
              ref={(el) => {
                zoneRefs.current[i] = el;
              }}
              className={
                i === 2 ? "h-[240vh] md:h-[100vh]" : "h-[150vh] md:h-[100vh]"
              }
              onViewportEnter={() => setStage(i === 0 ? 0 : i + 1)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
            />
          </div>
        ))}
        {/* tail: viewing time for the last beat before release */}
        <div className="h-[60vh]" />
      </div>
    </div>
  );
}

/* all three SVG layers must share the exact same box — any size
   difference (e.g. a maxHeight on one) shifts the cloud off the rings */
const svgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

/* ── the 3D context cloud — stepped turns, connections firing
      continuously, occasional line out to a validation gate ── */

/** deterministic pseudo-random, safe for SSR (no Math.random) */
const rnd = (i: number, salt: number) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const CLOUD_N = 60;
const CLOUD = Array.from({ length: CLOUD_N }, (_, i) => {
  const u = rnd(i, 1) * 2 - 1;
  const phi = rnd(i, 2) * Math.PI * 2;
  const rr = Math.cbrt(rnd(i, 3));
  const sq = Math.sqrt(1 - u * u);
  return {
    x: sq * Math.cos(phi) * rr,
    y: u * rr * 0.9,
    z: sq * Math.sin(phi) * rr,
  };
});

/** stepped rotation: turn one step, settle, pause, turn again */
const STEP_ANGLE = Math.PI / 4.5;
const STEP_PERIOD = 3.2;
/** fraction of each period spent turning (the rest is the pause) */
const STEP_MOVE = 0.38;

const CORAL = "#E8523A";

const easeInOutCubic = (u: number) =>
  u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2;

/** connected nodes: dark ink, or coral — the only accent in the graph */
const tintFor = (k: number, i: number) => {
  const r = rnd(k + 2, 50 + i);
  return r < 0.38 ? CORAL : INK;
};

/* connections fire CONTINUOUSLY while the cloud turns — each edge slot
   runs its own fade-in / hold / fade-out cycle, independent of the
   stepped rotation, so the graph always feels mid-conversation */
const EDGE_SLOTS = 11;
const EDGE_CYCLE = 2.1;
const edgeAlpha = (f: number) =>
  f < 0.14 ? f / 0.14 : f > 0.68 ? Math.max(0, (1 - f) / 0.32) : 1;

/** the live edges at time t: pair, alpha, and a stable cycle id */
const liveEdges = (t: number) => {
  const out: { a: number; b: number; alpha: number; m: number }[] = [];
  for (let j = 0; j < EDGE_SLOTS; j++) {
    const phase = rnd(j, 77) * EDGE_CYCLE;
    const m = Math.floor((t + phase) / EDGE_CYCLE) * EDGE_SLOTS + j;
    const f = ((t + phase) % EDGE_CYCLE) / EDGE_CYCLE;
    const a = Math.floor(rnd(m, 10) * CLOUD_N);
    const b = Math.floor(rnd(m, 20) * CLOUD_N);
    if (a === b) continue;
    out.push({ a, b, alpha: edgeAlpha(f), m });
  }
  return out;
};

/* …and the LLM keeps reaching OUT to the validation nodes: lines fire
   to the gates AND the human nodes, whose chips pull open like drawers
   to show the customer moment being validated. Two overlapping slots
   so the reaching-out feels constant. */
const GATE_FIRE_CYCLE = 3.6;
const FIRE_SLOTS = 2;
/* fires (and their drawers) hold until the cloud has FULLY built —
   both LlmCloud and GateExpansions shift their clocks by this much */
const FIRE_HOLD = 5.2;
const gateFires = (t: number) => {
  const out: { gate: number; node: number; alpha: number; m: number }[] = [];
  /* pre-build: the graph is still sputtering in, nothing fires yet */
  if (t < 0) return out;
  for (let j = 0; j < FIRE_SLOTS; j++) {
    const phase = (j / FIRE_SLOTS + rnd(j, 63) * 0.2) * GATE_FIRE_CYCLE;
    const m = Math.floor((t + phase) / GATE_FIRE_CYCLE) * FIRE_SLOTS + j;
    const f = ((t + phase) % GATE_FIRE_CYCLE) / GATE_FIRE_CYCLE;
    const gate = Math.floor(rnd(m, 91) * FIRE_TARGETS.length);
    const node = Math.floor(rnd(m, 92) * CLOUD_N);
    let alpha = 0;
    if (f > 0.06 && f < 0.74) {
      const g = (f - 0.06) / 0.68;
      alpha = g < 0.22 ? g / 0.22 : g > 0.72 ? (1 - g) / 0.28 : 1;
    }
    /* skip when both slots land on the same gate */
    if (out.some((o) => o.gate === gate)) continue;
    out.push({ gate, node, alpha, m });
  }
  return out;
};

/** drawer easing — slight overshoot as the chip pulls open */
const easeOutBack = (u: number) => {
  const c = 1.4;
  return 1 + (c + 1) * (u - 1) ** 3 + c * (u - 1) ** 2;
};

/* the human layer at work: guardrail tasks ping up from the gates to
   the stations — approve / decline / take over — verdict returns.
   Two staggered slots so the tower always has something in flight. */
/* sparse on purpose: the human is only involved when the AI needs
   them — one task lands every ~6s, each lasting ~5s */
const PING_CYCLE = 12;
const PING_SLOTS = 2;
const PING_VERDICTS = [
  { label: "\u2713 Approve", color: GREEN },
  { label: "\u2717 Decline", color: "#C4523C" },
  { label: "Take over", color: INK },
] as const;

const stationPings = (t: number) => {
  const out: {
    m: number;
    f: number;
    station: number;
    gate: number;
    verdict: (typeof PING_VERDICTS)[number];
  }[] = [];
  for (let j = 0; j < PING_SLOTS; j++) {
    /* deterministic clock from t=0: slot 0 acts first, slot 1 half a
       cycle later — a ping can never be mid-action when t starts */
    const local = t - (j * PING_CYCLE) / PING_SLOTS;
    if (local < 0) continue;
    const m = Math.floor(local / PING_CYCLE) * PING_SLOTS + j;
    const f = local % PING_CYCLE;
    const station = Math.floor(rnd(m, 31) * STATIONS.length);
    const gate = Math.floor(rnd(m, 32) * GATE_ANGLES.length);
    const r = rnd(m, 33);
    const verdict =
      PING_VERDICTS[r < 0.62 ? 0 : r < 0.86 ? 1 : 2] ?? PING_VERDICTS[0];
    if (out.some((o) => o.station === station)) continue;
    out.push({ m, f, station, gate, verdict });
  }
  return out;
};

/** envelope: fade in over [a,b], hold, fade out over [c,d] */
const env = (f: number, a: number, b: number, c: number, d: number) =>
  f < a
    ? 0
    : f < b
      ? (f - a) / (b - a)
      : f < c
        ? 1
        : f < d
          ? 1 - (f - c) / (d - c)
          : 0;

/* Shared ping clock — the ask lines render BEHIND the logic layer (L2,
   under the ring and gates: Andy 2026-08-10, they crossed IN FRONT and
   looked messy) while the stations + verdict chips stay on top in L3.
   Both layers read this one origin so they stay frame-locked. */
const PING_CLOCK: { t0: number | null } = { t0: null };

function usePingClock() {
  const [t, setT] = useState(0);
  useEffect(() => {
    /* Andy's rule: the tower intro (ring draw + stations docking,
       ~2.6s) completes BEFORE any human takes an action */
    if (PING_CLOCK.t0 === null)
      PING_CLOCK.t0 = performance.now() / 1000 + 2.6;
    return () => {
      PING_CLOCK.t0 = null;
    };
  }, []);
  useAnimationFrame(() => setT(performance.now() / 1000));
  const t0 = PING_CLOCK.t0;
  return t0 === null || t === 0 ? -1 : t - t0;
}

/** The ask + verdict travel, rendered inside the VALIDATION layer so
    every line dips behind the logic ring's chips as it arrives. The
    ask stroke-reveals from the human agent down to its gate; the
    verdict node eases back along the same path and is absorbed
    behind the gate. */
export function StationPingLines() {
  const tt = usePingClock();
  return (
    <g>
      {stationPings(tt).map((ping) => {
        const st = STATIONS[ping.station];
        if (!st) return null;
        const gate = polar(R_LOGIC, GATE_ANGLES[ping.gate] ?? 0);
        const f = ping.f;
        /* the path draws FROM the agent — dashes anchor at the station
           end, so the reveal crawls toward the gate */
        const rev = easeInOutCubic(
          Math.max(0, Math.min((f - 0.2) / 0.55, 1))
        );
        const lineA = env(f, 0.2, 0.4, 4.2, 4.9);
        const retP = easeInOutCubic(Math.max(0, Math.min((f - 3.9) / 1.0, 1)));
        const retA = env(f, 3.9, 4.2, 4.7, 5.0);
        return (
          <g key={`pline-${ping.m}`}>
            {rev > 0.01 && lineA > 0.01 && (
              <line
                x1={st.x}
                y1={st.y}
                x2={st.x + (gate.x - st.x) * rev}
                y2={st.y + (gate.y - st.y) * rev}
                stroke={AMBER}
                strokeWidth={1.2}
                strokeDasharray="4 5"
                opacity={lineA * 0.65}
              />
            )}
            {retA > 0.02 && (
              <circle
                cx={st.x + (gate.x - st.x) * retP}
                cy={st.y + (gate.y - st.y) * retP}
                r={5}
                fill={ping.verdict.color}
                opacity={retA}
              />
            )}
          </g>
        );
      })}
    </g>
  );
}

export function StationPings() {
  const mobile = useContext(MobileCtx);
  const tt = usePingClock();

  /* mobile: chips counter-scale — pitch/rows open up with them, and
     the cluster shifts toward the centre so the edge stations' chips
     stay inside the viewBox */
  const chipHalfW = mobile ? 54 * CHIP_K : 54;
  const chipHalfH = mobile ? 13 * CHIP_K : 13;
  const chipFont = mobile ? 11 * CHIP_K : 11;
  const pitch = mobile ? 62 * CHIP_K : 62;
  const rowGap1 = mobile ? 40 * CHIP_K : 40;
  const rowGap2 = mobile ? 71 * CHIP_K : 71;
  const inward = mobile ? 34 : 0;

  return (
    <g>
      {stationPings(tt).map((ping) => {
        const st = STATIONS[ping.station];
        if (!st) return null;
        /* envelopes in seconds — the task plays ~5s, then the station
           rests for the remainder of its cycle. The ask line + verdict
           travel live in StationPingLines (L2, behind the logic ring). */
        const f = ping.f;
        const heldA = env(f, 0.5, 0.9, 4.2, 4.8);
        const clusterA = env(f, 1.0, 1.4, 3.9, 4.5);
        const chosenAt = f > 2.4;
        const bump = env(f, 2.4, 2.7, 2.8, 3.2);

        /* Andy's wrapped flexbox: 108×26 chips, 8px column gap, 5px row
           gap, centre-justified. The cluster hangs AWAY from the rings —
           below the bottom stations, above the top ones — otherwise the
           top clusters land on the logic-ring gates */
        const ccx = st.x + (st.x < CX ? inward : -inward);
        const below = st.y >= CY;
        const row1 = below ? st.y + rowGap1 : st.y - rowGap1;
        const row2 = below ? st.y + rowGap2 : st.y - rowGap2;
        const chips = [
          { v: PING_VERDICTS[0], cx: ccx - pitch, cy: row1 },
          { v: PING_VERDICTS[1], cx: ccx + pitch, cy: row1 },
          { v: PING_VERDICTS[2], cx: ccx, cy: row2 },
        ];
        return (
          <g key={`ping-${ping.m}`}>
            {/* the chip turns sand while the agent holds the task */}
            <g opacity={heldA}>
              <Station
                x={st.x}
                y={st.y}
                fill="#EEDCB2"
                avatar={STATION_AVATARS[ping.station % STATION_AVATARS.length]}
              />
            </g>
            {/* approve / decline / take over — uniform chips, wrapped */}
            {chips.map(({ v, cx, cy }) => {
              if (!v) return null;
              const chosen = v === ping.verdict;
              const picked = chosen && chosenAt;
              const fadeOthers = chosen ? 1 : chosenAt ? 0.25 : 1;
              /* bump kept under the 124px chip pitch so the chosen chip
                 never overlaps its neighbour */
              const scale = chosen ? 1 + bump * 0.08 : 1;
              return (
                <g
                  key={v.label}
                  opacity={clusterA * fadeOthers}
                  transform={`translate(${cx} ${cy}) scale(${scale}) translate(${-cx} ${-cy})`}
                >
                  <rect
                    x={cx - chipHalfW}
                    y={cy - chipHalfH}
                    width={chipHalfW * 2}
                    height={chipHalfH * 2}
                    rx={chipHalfH}
                    stroke={v.color}
                    strokeWidth={1.2}
                    fill={picked ? v.color : PAPER}
                  />
                  <text
                    x={cx}
                    y={cy + chipFont * 0.36}
                    textAnchor="middle"
                    fontSize={chipFont}
                    fill={picked ? PAPER : v.color}
                  >
                    {v.label}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </g>
  );
}

/** every validation target the LLM can consult: the five gates, then
    the human nodes — the drawers open on human nodes too */
const FIRE_TARGETS = [
  ...GATE_ANGLES.map((angle) => ({ angle, human: false })),
  ...HUMAN_NODE_ANGLES.map((angle) => ({ angle, human: true })),
];

/** what each target says when it expands open — the specific customer
    moment being validated (Andy's list), not the category overview.
    Last three are the human-validation asks, aligned to the human
    nodes in FIRE_TARGETS. */
const GATE_LABELS = [
  /* ≤49 chars for the -51° gate and -136° human node — longer drawers
     physically reach across the ring into each other's chips */
  "Customer requests to ship a paid order",
  "Customer 5670 account details validation",
  "Customer requests refund over €200",
  "Customer order dispute",
  "Customer requests discount at 20%",
  "Customer refund outside policy — Human approves",
  "Customer requests account closure — Human Agent validates",
  "Customer complaint — Human Agent takes over",
];

export function LlmCloud() {
  const [t, setT] = useState(0);
  /* absolute clock so the L2 gate expansions stay in sync */
  useAnimationFrame(() => setT(performance.now() / 1000));
  /* mount time — the build-out is measured from the moment the cloud
     first appears (after the pills have absorbed) */
  const [t0] = useState(() => performance.now() / 1000);

  /* the gradual build: each dot is born on its own random beat spread
     over ~3.2s, flying out from the centre like sputtered stars. 0.9s
     head start lets the absorbed pills land first; full graph ~5s. */
  const births = CLOUD.map((_, i) => {
    const u = Math.min(Math.max((t - t0 - 0.9 - rnd(i, 7) * 3.2) / 0.8, 0), 1);
    return 1 - (1 - u) ** 3;
  });

  /* stepped yaw: eased turn, then rest — the connections keep firing
     straight through the motion */
  const k = Math.floor(t / STEP_PERIOD);
  const frac = (t % STEP_PERIOD) / STEP_PERIOD;
  const eased = easeInOutCubic(Math.min(frac / STEP_MOVE, 1));
  const yaw = (k + eased) * STEP_ANGLE;
  const pitch = 0.12 * Math.sin(t * 0.18);
  const R = R_LLM * 0.96;

  const cy1 = Math.cos(yaw);
  const sy1 = Math.sin(yaw);
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);

  const pts = CLOUD.map((p) => {
    const x = p.x * cy1 + p.z * sy1;
    let z = -p.x * sy1 + p.z * cy1;
    const y = p.y * cp - z * sp;
    z = p.y * sp + z * cp;
    const s = 2.6 / (2.6 - z);
    return {
      sx: CX + x * R * s,
      sy: CY + y * R * s,
      depth: (z + 1) / 2,
    };
  });

  const edges = liveEdges(t);
  /* rule-consults wait for the full build (t0 + head start + sputter) */
  const fires = gateFires(t === 0 ? -1 : t - t0 - FIRE_HOLD);
  /* connections ramp in gently as the graph completes — sparse early */
  const edgeRamp = Math.min(1, Math.max(0, (t - t0 - 1.5) / 3.5));

  /* per-node glow: the strongest edge touching it right now */
  const lit = new Map<number, { alpha: number; m: number }>();
  for (const e of edges) {
    for (const i of [e.a, e.b]) {
      const cur = lit.get(i);
      if (!cur || e.alpha > cur.alpha) lit.set(i, { alpha: e.alpha, m: e.m });
    }
  }
  for (const fire of fires) {
    const cur = lit.get(fire.node);
    if (fire.alpha > 0 && (!cur || fire.alpha > cur.alpha))
      lit.set(fire.node, { alpha: fire.alpha, m: -1 });
  }

  const order = pts
    .map((_, i) => i)
    .sort((a, b) => (pts[a]?.depth ?? 0) - (pts[b]?.depth ?? 0));

  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.95 }}>
      {/* edges first, under the nodes */}
      {edges.map((e) => {
        const pa = pts[e.a];
        const pb = pts[e.b];
        const be = Math.min(births[e.a] ?? 1, births[e.b] ?? 1) * edgeRamp;
        if (!pa || !pb || e.alpha * be <= 0.02) return null;
        return (
          <line
            key={`edge-${e.m}`}
            x1={pa.sx}
            y1={pa.sy}
            x2={pb.sx}
            y2={pb.sy}
            stroke={INK}
            strokeWidth={0.9}
            strokeDasharray="3 5"
            opacity={e.alpha * be * 0.5}
          />
        );
      })}

      {/* the graph reaching out to the validation nodes */}
      {fires.map((fire) => {
        const fireGate = polar(R_LOGIC, FIRE_TARGETS[fire.gate]?.angle ?? 0);
        const fireNode = pts[fire.node];
        const bn = births[fire.node] ?? 1;
        if (!fireNode || fire.alpha * bn <= 0.02) return null;
        return (
          <line
            key={`fire-${fire.m}`}
            x1={fireNode.sx}
            y1={fireNode.sy}
            x2={fireGate.x}
            y2={fireGate.y}
            stroke={CORAL}
            strokeWidth={1.1}
            strokeDasharray="4 5"
            opacity={fire.alpha * bn * 0.7}
          />
        );
      })}

      {order.map((i) => {
        const p = pts[i];
        if (!p) return null;
        const b = births[i] ?? 1;
        if (b <= 0.01) return null;
        /* unborn dots sit near the centre and fly outward as they land */
        const reach = 0.25 + 0.75 * b;
        const nx = CX + (p.sx - CX) * reach;
        const ny = CY + (p.sy - CY) * reach;
        const glow = lit.get(i);
        const l = glow?.alpha ?? 0;
        const size = (10 + p.depth * 11) * (1 + l * 0.25) * (0.4 + 0.6 * b);
        const alpha =
          ((0.14 + p.depth * 0.26) * (1 - l) + (0.45 + p.depth * 0.5) * l) * b;
        const fill =
          glow && l > 0.4 ? (glow.m === -1 ? CORAL : tintFor(glow.m, i)) : INK;
        return (
          <g key={`cn-${i}`} opacity={alpha}>
            <Diamond cx={nx} cy={ny} size={size} fill={fill} />
          </g>
        );
      })}
    </motion.g>
  );
}

/** the gate's chip expands open to show its logic while the LLM fires
    at it — rendered in the validation layer, on the shared clock */
export function GateExpansions() {
  const mobile = useContext(MobileCtx);
  const [t, setT] = useState(0);
  /* same hold as LlmCloud's fire lines — both mount on beat 2, so the
     shifted clocks stay in sync and drawers open with their lines */
  const [t0] = useState(() => performance.now() / 1000);
  useAnimationFrame(() => setT(performance.now() / 1000));

  /* mobile: text counter-scales, so the drawer box + glyph budget grow
     with it (the ≤49-char cap keeps even scaled drawers off the
     opposite chips) */
  const fontSize = mobile ? 12.5 * CHIP_K : 12.5;
  const perChar = mobile ? 6.5 * CHIP_K : 6.5;
  const halfH = mobile ? 21 : 16;

  /* real rendered widths — the per-char estimate over-guessed by ~15%,
     which surfaced as a fat left pad inside the open drawer (the text is
     anchored at the icon end, so all slack lands on the far side). The
     labels render hidden once and are measured; per-char stays as the
     first-frame fallback. */
  const measureG = useRef<SVGGElement>(null);
  const [measured, setMeasured] = useState<number[] | null>(null);
  useEffect(() => {
    const g = measureG.current;
    if (!g) return;
    setMeasured(
      Array.from(g.querySelectorAll("text")).map((el) =>
        (el as SVGTextElement).getComputedTextLength()
      )
    );
  }, [fontSize]);

  const fires = gateFires(t === 0 ? -1 : t - t0 - FIRE_HOLD);
  return (
    <g>
      <g ref={measureG} opacity={0} aria-hidden pointerEvents="none">
        {GATE_LABELS.map((l) => (
          <text key={l} y={-9999} fontSize={fontSize}>
            {l}
          </text>
        ))}
      </g>
      {fires.map((fire) => {
        if (fire.alpha <= 0.02) return null;
        const target = FIRE_TARGETS[fire.gate];
        if (!target) return null;
        const p = polar(R_LOGIC, target.angle);
        const label = GATE_LABELS[fire.gate] ?? "Business Logic Rule N";
        const textW =
          (measured?.[fire.gate] ?? label.length * perChar) + 14;
        /* the drawer pulls open with a little overshoot, snaps shut —
           human nodes are r16 circles, gate chips 44 wide */
        const half = target.human ? 16 : 22;
        const drawer = easeOutBack(Math.min(fire.alpha, 1));
        const w = half * 2 + Math.max(0, drawer) * textW;
        /* drawers open INWARD, toward the centre — never off the edge */
        const rightward = p.x < CX;
        const rx = rightward ? p.x - half : p.x + half - w;
        const clipId = `gexp-${fire.gate}`;
        return (
          <g key={`gexp-${fire.m}`}>
            <clipPath id={clipId}>
              <rect x={rx} y={p.y - halfH} width={w} height={halfH * 2} rx={halfH} />
            </clipPath>
            <rect
              x={rx}
              y={p.y - halfH}
              width={w}
              height={halfH * 2}
              rx={halfH}
              stroke={GREEN}
              strokeWidth={1.2}
              fill={PAPER}
            />
            <g clipPath={`url(#${clipId})`}>
              <text
                x={rightward ? p.x + half - 4 : p.x - half + 4}
                y={p.y + fontSize * 0.36}
                textAnchor={rightward ? "start" : "end"}
                fontSize={fontSize}
                fill={INK}
              >
                {label}
              </text>
            </g>
            {target.human ? (
              <Person cx={p.x} cy={p.y} size={18} fill={AMBER} />
            ) : (
              <Keyhole cx={p.x} cy={p.y} size={22} fill={AMBER} />
            )}
          </g>
        );
      })}
    </g>
  );
}

/* ── the learning beat's theatrical moment (Andy 2026-07-23): on every
      "Add to graph" click the dimmed graph LIGHTS UP and new green nodes
      pop into the cloud — the living context base visibly expands — then
      it all settles back to dim for the next finding. ── */

/** Layer wrapper: smooth dim for the learning beat, but each card's
    click surges the opacity back up while the new nodes land. Reads the
    shared DEMO_CLOCK so the surge is frame-locked to the card's cursor. */
function PulseGroup({
  dimmed,
  lift,
  children,
}: {
  dimmed: boolean;
  /** how far above the 0.15 dim the surge lifts this layer */
  lift: number;
  children: React.ReactNode;
}) {
  const [o, setO] = useState(1);
  useAnimationFrame(() => {
    let target = 1;
    if (dimmed) {
      target = 0.15;
      if (DEMO_CLOCK.t0 !== null) {
        const el = performance.now() / 1000 - DEMO_CLOCK.t0;
        const f = (el % (DEMO_LEN * LEARNINGS.length)) % DEMO_LEN;
        /* the card shrinks into the graph 2.45→3.0 — the light rises
           WITH the absorb, holds while the nodes land, dims for the
           next finding */
        target = 0.15 + lift * env(f, 2.5, 2.95, 3.95, 4.5);
      }
    }
    setO((prev) => prev + (target - prev) * 0.09);
  });
  return <g opacity={o.toFixed(3)}>{children}</g>;
}

const SURGE_N = 6;

/** The new knowledge landing: green diamonds pop into the cloud in a
    little chain right after the click, hold while the graph is lit,
    and dissolve as it dims again. Deterministic per card index. */
function GraphSurge() {
  const [now, setNow] = useState(0);
  useAnimationFrame(() => setNow(performance.now() / 1000));
  const t0 = DEMO_CLOCK.t0;
  if (t0 === null || now === 0) return null;
  const el = now - t0;
  const cycle = DEMO_LEN * LEARNINGS.length;
  /* unique card index across loops — every visit lands a fresh pattern */
  const m =
    Math.floor((el % cycle) / DEMO_LEN) +
    Math.floor(el / cycle) * LEARNINGS.length;
  const f = (el % cycle) % DEMO_LEN;

  const nodes = Array.from({ length: SURGE_N }, (_, k) => {
    const seed = m * 13 + k;
    const a = rnd(seed, 71) * Math.PI * 2;
    const rr = Math.sqrt(rnd(seed, 72)) * R_LLM * 0.72;
    /* nodes land AFTER the card has been absorbed (shrink ends 3.0) */
    const born = 3.0 + rnd(seed, 73) * 0.7;
    const alpha = env(f, born, born + 0.25, 3.95, 4.45);
    const pop = easeOutBack(Math.min(1, Math.max(0, (f - born) / 0.35)));
    return {
      x: CX + Math.cos(a) * rr,
      y: CY + Math.sin(a) * rr * 0.82,
      size: (9 + 6 * rnd(seed, 74)) * pop,
      alpha,
    };
  });

  return (
    <g>
      {nodes.map((n, k) => {
        if (n.alpha <= 0.01) return null;
        const prev = k > 0 ? nodes[k - 1] : null;
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: deterministic set
          <g key={k} opacity={n.alpha}>
            {prev && prev.alpha > 0.01 && (
              <line
                x1={prev.x}
                y1={prev.y}
                x2={n.x}
                y2={n.y}
                stroke={GREEN}
                strokeWidth={1}
                opacity={0.35}
              />
            )}
            <Diamond cx={n.x} cy={n.y} size={n.size} fill={GREEN} />
          </g>
        );
      })}
    </g>
  );
}

/* the staged opening (beat 0, from `arrived`): ring expands from the
   centre alone → label types on → the rulebook stacks in → the gates
   and human nodes dock around the ring. Each block waits its turn. */
const INTRO_RULES_AT = 1.5;
const INTRO_GATES_AT = 3.0;
const INTRO_HUMANS_AT = 3.9;

export function Scene({
  beat,
  arrived = true,
}: {
  beat: number;
  arrived?: boolean;
}) {
  const llmIn = beat >= 2;
  const towerIn = beat >= 3;
  /* the graph fades into the background for the learning beat */
  const dimmed = beat >= 4;
  const mobile = useIsMobile();
  const labelSize = mobile ? 13.5 * LABEL_K : 13.5;
  /* camera: the viewBox reserves room for the tower ring + stations, so
     the beats before the tower docks read small — zoom in on them and
     pull back out exactly as the Control Tower draws (beat 3). Content
     extent up to beat 2 is ~610×605 units, so 1.3 stays inside the
     840×860 frame with margin. */
  /* mobile camera as a STORY (Andy 2026-08-10, second pass): the rules
     ring sits at a modest 1.15, chapter 02 is the big moment — the
     cloud zooms to 1.4 and fills the frame (1.45+ clips the 183° gate
     chip) — and the scroll into 03 pulls back out to reveal the human
     agents around the operation. Desktop keeps its gentler zoom. */
  const focus = mobile
    ? beat < 2
      ? 1.15
      : beat < 3
        ? 1.4
        : 1
    : beat < 3
      ? 1.15
      : 1;

  return (
    <MobileCtx.Provider value={mobile}>
    {/* inline-size container: the HTML overlays (condition pills) size
        in cqw so they scale WITH the scene — vw sizing left them huge
        when rings-3 shrank the stage (Andy 2026-08-10, screenshot) */}
    <div className="absolute inset-0" style={{ containerType: "inline-size" }}>
      {/* every scene layer rides the camera; the learning card overlay
          below stays outside so its 88vw width never scales past the
          screen edge */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ scale: focus }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
      {/* ════ L1 · LLM — the dynamic middle ════ */}
      <div className="absolute inset-0">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          fill="none"
          role="presentation"
          style={svgStyle}
        >
          <PulseGroup dimmed={dimmed} lift={0.62}>
            {llmIn && (
              <motion.g
                /* no spring pop — the per-dot star-sputter build inside
                   LlmCloud carries the expansion; this only fades the
                   layer in once the pills have absorbed */
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: beat === 2 ? 0.8 : 0, duration: 0.4 }}
              >
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: beat === 2 ? 1.5 : 0 }}
                >
                  <text
                    x={CX}
                    y={CY - 242}
                    textAnchor="middle"
                    fontSize={labelSize}
                    fill="rgb(30 26 56 / 65%)"
                  >
                    LLM
                  </text>
                </motion.g>
                {LLM_3D && <LlmCloud />}
              </motion.g>
            )}
            {/* the new knowledge landing in the cloud on each Add-to-graph */}
            {dimmed && <GraphSurge />}
          </PulseGroup>
        </svg>
      </div>

      {/* ════ L2 · VALIDATION — logic ring, gates, human nodes ════ */}
      <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          fill="none"
          role="presentation"
          className="absolute inset-0"
          style={{ ...svgStyle, pointerEvents: "none" }}
        >
          <PulseGroup dimmed={dimmed} lift={0.45}>
            {/* the tower's ask lines + verdict travel — FIRST in the
                layer, so they pass under the ring, gates and chips as
                they arrive (Andy 2026-08-10: fronting lines were messy) */}
            {towerIn && beat < 4 && <StationPingLines />}
            {/* stage 1 — the dashed ring alone, expanding out from the
                centre the moment the reader lands */}
            <motion.circle
              cx={CX}
              cy={CY}
              r={R_LOGIC}
              stroke="rgb(30 26 56 / 18%)"
              strokeWidth={1.2}
              strokeDasharray="3 7"
              strokeLinecap="round"
              initial={{ opacity: 0, scale: 0.05 }}
              animate={
                arrived ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.05 }
              }
              style={{ transformOrigin: `${CX}px ${CY}px` }}
              transition={{
                duration: beat === 0 ? 1.1 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            {/* the label types on left-to-right once the ring has opened */}
            <motion.text
              x={CX}
              y={CY - R_LOGIC - 20}
              textAnchor="middle"
              fontSize={labelSize}
              fill="rgb(30 26 56 / 65%)"
              initial={{ clipPath: "inset(-20% 100% -20% 0%) fill-box" }}
              animate={{
                clipPath: arrived
                  ? "inset(-20% 0% -20% 0%) fill-box"
                  : "inset(-20% 100% -20% 0%) fill-box",
              }}
              transition={{
                duration: beat === 0 ? 0.6 : 0,
                delay: beat === 0 && arrived ? 0.7 : 0,
                ease: "linear",
              }}
            >
              Business logic
            </motion.text>
            {/* stage 3 — the nodes populate around the ring, only after
                the rulebook has stacked in */}
            {GATE_ANGLES.map((a, i) => {
              const p = polar(R_LOGIC, a);
              return (
                <motion.g
                  key={`gate-${a}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    arrived ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                  transition={{
                    delay: beat === 0 && arrived ? INTRO_GATES_AT + i * 0.22 : 0,
                    type: "spring",
                    stiffness: 170,
                    damping: 18,
                  }}
                >
                  <GateChip cx={p.x} cy={p.y} />
                </motion.g>
              );
            })}

            {/* human nodes — docked by the approval rule, last to land */}
            {HUMAN_NODE_ANGLES.map((a, i) => {
              const p = polar(R_LOGIC, a);
              return (
                <motion.g
                  key={`hnode-${a}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    arrived ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                  transition={{
                    delay:
                      beat === 0 && arrived ? INTRO_HUMANS_AT + i * 0.25 : 0,
                    type: "spring",
                    stiffness: 200,
                    damping: 13,
                  }}
                >
                  <HumanNode cx={p.x} cy={p.y} />
                </motion.g>
              );
            })}

            {/* ambient rule-consults — LAST in the layer so the open
                drawers cover the gate chips AND the human nodes (the
                nodes used to draw over the pill — double outline) */}
            {llmIn && beat < 3 && <GateExpansions />}
          </PulseGroup>
        </svg>
      </div>

      {/* the condition pills — HTML flex so each hugs its text with
          equal padding. Entrance: the icon pops first (keyhole, or the
          person for human-validation rules), the chip's clipping mask
          reveals out of it, then the text flies in. They absorb into
          the graph on the next beat. */}
      <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
        <AnimatePresence>
          {beat <= 1 &&
            RULES.map((item, i) => {
              const y = CY - 186 + i * 62;
              /* stage 2 — the rulebook waits for the ring + label */
              const base = INTRO_RULES_AT + i * 0.14;
              /* mobile: the 62-unit ring pitch collapses below pill height
                 on phones, so the stack spaces itself in text units
                 instead — pitch 3.1em ≥ the 2.65em pill, centred on the
                 ring. The absorb then converges by the same em offsets. */
              /* 2.85em pitch keeps the 7-pill stack inside the logic
                 ring on phones, clear of the "Business logic" label */
              const emOffset = (i - (RULES.length - 1) / 2) * 2.85;
              return (
                <div
                  key={item.text}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: mobile ? "50%" : `${(y / H) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    /* cqw: proportional to the SCENE, not the viewport —
                       15px at the 840-wide reference, shrinking in step.
                       Mobile stack scaled right back (Andy 2026-08-10:
                       pills dwarfed the ring on phones) */
                    fontSize: mobile
                      ? "clamp(9px, 2.6vw, 10.5px)"
                      : "clamp(9px, 1.8cqw, 15px)",
                  }}
                >
                  <motion.div
                    className="relative"
                    style={{ width: "max-content", color: INK }}
                    initial={false}
                    animate={
                      beat === 1
                        ? {
                            opacity: 0,
                            y: mobile ? 0 : CY - y,
                            scale: 0.08,
                          }
                        : {
                            opacity: 1,
                            y: mobile ? `${emOffset}em` : 0,
                            scale: 1,
                          }
                    }
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={
                      beat === 1
                        ? {
                            duration: 0.65,
                            delay: i * 0.12,
                            ease: "easeIn",
                            opacity: { duration: 0.3, delay: 0.3 + i * 0.12 },
                          }
                        : { duration: 0 }
                    }
                  >
                    {/* chip chrome + text, unmasked from the icon end */}
                    <motion.div
                      className="flex items-center"
                      style={{
                        gap: "0.65em",
                        height: "2.65em",
                        padding: "0 1.2em",
                        borderRadius: "1.35em",
                        border: `1.2px solid ${GREEN}`,
                        background: PAPER,
                        whiteSpace: "nowrap",
                      }}
                      initial={{
                        opacity: 0,
                        clipPath:
                          "inset(0% calc(100% - 3.2em) 0% 0% round 1.35em)",
                      }}
                      animate={
                        arrived
                          ? {
                              opacity: 1,
                              clipPath: "inset(0% 0% 0% 0% round 1.35em)",
                            }
                          : {
                              opacity: 0,
                              clipPath:
                                "inset(0% calc(100% - 3.2em) 0% 0% round 1.35em)",
                            }
                      }
                      transition={{
                        delay: base + 0.18,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                        opacity: { delay: base + 0.18, duration: 0.12 },
                      }}
                    >
                      {/* the keyhole itself renders in the overlay below —
                          this span just holds its slot in the flex row */}
                      <span
                        style={{
                          width: "1.45em",
                          height: "1.45em",
                          flexShrink: 0,
                        }}
                      />
                      <motion.span
                        initial={{ opacity: 0, x: "-0.8em" }}
                        animate={
                          arrived
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: "-0.8em" }
                        }
                        transition={{
                          delay: base + 0.32,
                          duration: 0.22,
                          ease: "easeOut",
                        }}
                      >
                        {item.text}
                      </motion.span>
                    </motion.div>
                    {/* the icon — first on screen, the chip grows out of
                        it, so it sits above the mask. ONE icon per pill:
                        person for human-validation rules, else keyhole */}
                    <motion.div
                      className="absolute"
                      style={{
                        left: "1.2em",
                        top: "50%",
                        width: "1.45em",
                        height: "1.45em",
                      }}
                      initial={{ opacity: 0, scale: 0.3, y: "-50%" }}
                      animate={
                        arrived
                          ? { opacity: 1, scale: 1, y: "-50%" }
                          : { opacity: 0, scale: 0.3, y: "-50%" }
                      }
                      transition={{
                        delay: base,
                        type: "spring",
                        stiffness: 260,
                        damping: 15,
                      }}
                    >
                      <svg
                        viewBox="0 0 72 72"
                        aria-hidden
                        style={{ width: "100%", height: "100%" }}
                      >
                        {item.human ? (
                          <>
                            <circle cx="36" cy="18" r="8" fill={GREEN} />
                            <rect
                              x="24"
                              y="29"
                              width="24"
                              height="13"
                              rx="6.5"
                              fill={GREEN}
                            />
                            <path
                              d="M10 62 A30 30 0 0 1 62 62"
                              stroke={GREEN}
                              strokeWidth="7"
                              strokeLinecap="round"
                              fill="none"
                            />
                          </>
                        ) : (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29 13 Q36 6 43 13 L59 29 Q66 36 59 43 L43 59 Q36 66 29 59 L13 43 Q6 36 13 29 Z M36 26 C41.5 26 46 30.5 46 36 C46 41.5 41.5 46 36 46 C30.5 46 26 41.5 26 36 C26 30.5 30.5 26 36 26 Z"
                            fill={AMBER}
                          />
                        )}
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
        </AnimatePresence>
      </div>

      {/* ════ L3 · CONTROL TOWER + the human decision ════ */}
      <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          fill="none"
          role="presentation"
          className="absolute inset-0"
          style={{ ...svgStyle, pointerEvents: "none" }}
        >
          {towerIn && (
            <motion.g
              animate={{ opacity: dimmed ? 0.15 : 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* the tower ring COMES OUT of the operation — scales up
                  from the logic ring, in the amber human register (Andy
                  2026-08-10: orange ring + radar oversight) */}
              <motion.circle
                cx={CX}
                cy={CY}
                r={R_TOWER}
                stroke={AMBER}
                strokeOpacity={0.55}
                strokeWidth={1}
                initial={{ scale: R_LOGIC / R_TOWER, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                transition={{
                  duration: beat === 3 ? 1.1 : 0,
                  delay: beat === 3 ? 0.3 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              {/* the radar: a faint amber pulse contracting from the
                  tower in toward the graph — the agents sweeping the
                  operation. Very slight, slow repeat. */}
              <motion.circle
                cx={CX}
                cy={CY}
                r={R_TOWER}
                fill="none"
                stroke={AMBER}
                strokeWidth={1}
                initial={{ r: R_TOWER, opacity: 0 }}
                animate={{ r: [R_TOWER, R_LOGIC - 40], opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3.2,
                  times: [0, 0.25, 1],
                  ease: "easeOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1.8,
                  delay: beat === 3 ? 1.6 : 0.4,
                }}
              />
              <motion.text
                x={CX}
                y={CY - R_TOWER - 16}
                textAnchor="middle"
                fontSize={labelSize}
                fill="rgb(30 26 56 / 65%)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: beat === 3 ? 0.7 : 0 }}
              >
                Control Tower
              </motion.text>
              {STATIONS.map((s, i) => (
                <motion.g
                  key={`station-${s.x}-${s.y}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ transformOrigin: `${s.x}px ${s.y}px` }}
                  transition={{
                    delay: beat === 3 ? 0.9 + i * 0.22 : 0,
                    type: "spring",
                    stiffness: 170,
                    damping: 18,
                  }}
                >
                  <Station
                    x={s.x}
                    y={s.y}
                    avatar={STATION_AVATARS[i % STATION_AVATARS.length]}
                  />
                </motion.g>
              ))}
              {beat >= 3 && beat < 4 && <StationPings />}
            </motion.g>
          )}
        </svg>
      </div>
      </motion.div>

      {/* ════ screen 05 · continuous learning — over the faded graph ════ */}
      <AnimatePresence>
        {beat >= 4 && (
          <motion.div
            key="learning"
            className="absolute inset-0 flex items-center justify-center"
            style={{ pointerEvents: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.5 }}
          >
            <LearningDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </MobileCtx.Provider>
  );
}

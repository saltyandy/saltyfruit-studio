import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { chipStyles, signalMeta, type ChipKind, type Insight } from "./data";
import SourceDetailView from "./SourceDetailView";

/*
 * SurfacedInsight and SourceShelf, extracted verbatim from
 * Nuvolari_Proto_Build/src/components/OrbLab.tsx. This is the real app
 * component — WAAPI morph, typing interval, shelf measurement and all.
 * Sole addition: data-chip on the signal-chip buttons, so the scripted
 * cursor can find its click targets.
 */

const SURFACE_DOT = 88;
const SURFACE_W = 432;
const SURFACE_MORPH_MS = 1080;

type InsightSource = Insight["sources"][number];

/**
 * The reasoning shelf under a chip — eases open to its measured height,
 * eases shut, and keeps the outgoing content mounted while it closes.
 */
function SourceShelf({ source }: { source: InsightSource | null }) {
  const [shown, setShown] = useState<InsightSource | null>(source);
  const innerRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useLayoutEffect(() => {
    if (source) setShown(source);
    else setH(0);
  }, [source]);

  useLayoutEffect(() => {
    if (source && innerRef.current) setH(innerRef.current.scrollHeight);
  }, [source, shown]);

  useEffect(() => {
    if (source || !shown) return;
    const t = window.setTimeout(() => setShown(null), 500);
    return () => window.clearTimeout(t);
  }, [source, shown]);

  return (
    <div
      style={{
        height: h,
        overflow: "hidden",
        transition: "height 560ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {shown && (
        <div
          ref={innerRef}
          key={shown.kind}
          className="rise flex flex-col gap-2 pt-2"
          style={{
            opacity: source ? 1 : 0,
            transform: source ? "translateY(0)" : "translateY(-8px)",
            transition:
              "opacity 340ms ease, transform 480ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <p className="text-[11px] leading-4 text-[#3f3f46]">{shown.text}</p>
          {shown.detail && <SourceDetailView kind={shown.kind} detail={shown.detail} />}
        </div>
      )}
    </div>
  );
}

export function SurfacedInsight({
  insight,
  slot,
  dissolving,
  onDismiss,
  onExecute,
}: {
  insight: Insight;
  slot: number;
  dissolving: boolean;
  onDismiss: () => void;
  onExecute: () => void;
}) {
  // one continuous morph: the circle pops up and flows straight into the
  // pill stretch, going from near-opaque to glass as it grows, then the
  // content writes itself in
  const [stage, setStage] = useState<"enter" | "open">("enter");
  const [typed, setTyped] = useState(0);
  const [openSource, setOpenSource] = useState<ChipKind | null>(null);
  const morphRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  // resting radius: a perfect pill at the card's natural height, capped so
  // the corner curves can't swallow the content if a title wraps
  const [pillR, setPillR] = useState(69);
  const done = typed >= insight.title.length;

  useLayoutEffect(() => {
    const el = morphRef.current;
    if (!el) return;
    const h = (bodyRef.current?.scrollHeight ?? 136) + 2;
    const r = Math.min(h / 2, 72);
    setPillR(r);
    if (slot > 0) {
      // born behind the one being read — no grand morph, the pill just
      // settles quietly into the back of the stack
      setStage("open");
      el.animate(
        [
          {
            opacity: 0,
            transform: "translateY(-14px) scale(0.96)",
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          },
          { opacity: 1, transform: "translateY(0px) scale(1)" },
        ],
        { duration: 640 }
      );
      return;
    }
    // the circle sits where the card's centre will be, so it grows out around itself
    const dotOffset = (h - SURFACE_DOT) / 2;
    // one timeline, so the in-between shapes are waypoints, not rest
    // points: the pop lands exactly as the stretch begins, and it stays
    // a pill the whole way through
    const anim = el.animate(
      [
        {
          offset: 0,
          width: `${SURFACE_DOT}px`,
          height: `${SURFACE_DOT}px`,
          borderRadius: `${SURFACE_DOT / 2}px`,
          transform: `translateY(${dotOffset + 20}px) scale(0.55)`,
          opacity: 0,
          backgroundColor: "rgba(250,250,250,0.1)",
          easing: "cubic-bezier(0.3, 1.05, 0.45, 1)",
        },
        { offset: 0.175, opacity: 1 },
        {
          offset: 0.275,
          width: `${SURFACE_DOT}px`,
          height: `${SURFACE_DOT}px`,
          borderRadius: `${SURFACE_DOT / 2}px`,
          transform: `translateY(${dotOffset}px) scale(1)`,
          backgroundColor: "rgba(250,250,250,0.1)",
          easing: "cubic-bezier(0.55, 0, 0.15, 1)",
        },
        {
          offset: 1,
          width: `${SURFACE_W}px`,
          height: `${h}px`,
          borderRadius: `${r}px`,
          transform: "translateY(0px) scale(1)",
          opacity: 1,
          // born a ghost, it solidifies into glass as it stretches
          backgroundColor: "rgba(250,250,250,0.78)",
        },
      ],
      { duration: SURFACE_MORPH_MS, fill: "forwards" }
    );
    // hand control back to the inline styles once they match the end values
    anim.onfinish = () => anim.cancel();
    const open = window.setTimeout(
      () => setStage("open"),
      SURFACE_MORPH_MS - 260
    );
    return () => {
      anim.cancel();
      window.clearTimeout(open);
    };
  }, []);

  // the title only types once the card is front and centre, so a queued
  // briefing still gets its write-out moment when it comes forward
  useEffect(() => {
    if (stage !== "open" || done || slot !== 0) return;
    const t = window.setInterval(() => setTyped((n) => n + 1), 24);
    return () => window.clearInterval(t);
  }, [stage, done, slot]);

  // a card pushed behind closes its shelf so it tucks back to pill height
  useEffect(() => {
    if (slot > 0) setOpenSource(null);
  }, [slot]);

  const sink = dissolving || slot > 3;
  const source = openSource
    ? insight.sources.find((s) => s.kind === openSource)
    : null;

  return (
    <div
      className="absolute left-1/2"
      style={{
        top: 0,
        transform: `translate(-50%, ${sink ? slot * 22 + 44 : slot * 22}px) scale(${
          sink ? 0.9 : 1 - slot * 0.03
        })`,
        opacity: sink ? 0 : 1 - slot * 0.18,
        filter: `blur(${sink ? 8 : slot * 1.2}px)`,
        zIndex: 40 - slot,
        transition:
          "transform 750ms cubic-bezier(0.22,1,0.36,1), opacity 750ms ease, filter 750ms ease",
        pointerEvents: slot === 0 && !sink && stage === "open" ? "auto" : "none",
      }}
    >
      <div
        ref={morphRef}
        className="overflow-hidden border border-white/80 shadow-[0_10px_36px_rgba(15,20,32,0.28)] backdrop-blur-[22px]"
        style={{
          // final resting values — the entrance animation overrides these
          // while it runs, and hands back control when it finishes
          width: SURFACE_W,
          height: "auto",
          borderRadius: pillR,
          // tile deviation from the app: the glass solidifies while the
          // shelf is open — over the dark orb, the queued pill behind
          // would otherwise show through and fight the evidence
          backgroundColor: `rgba(250,250,250,${openSource ? 0.94 : 0.78})`,
          transition: "background-color 400ms ease",
          opacity: stage === "open" ? 1 : 0,
        }}
      >
        <div
          ref={bodyRef}
          className="w-[430px] px-8 py-3.5"
          style={{
            // only the front card speaks — tucked cards are quiet glass
            opacity: stage === "open" && slot === 0 ? 1 : 0,
            transform: stage === "open" ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 420ms ease, transform 420ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center justify-between pb-1.5">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
              insight_{insight.id.slice(0, 6)}
            </span>
            <button
              onClick={onDismiss}
              title="Dismiss"
              className="grid size-5 cursor-pointer place-items-center rounded-full text-black/35 transition-colors hover:bg-black/10 hover:text-black/70"
            >
              <svg viewBox="0 0 10 10" width="9" height="9" fill="none">
                <path d="m1.5 1.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="min-h-[20px] text-[14px] leading-5 text-[#191b26]">
            {insight.title.slice(0, typed)}
            {!done && <span className="animate-pulse text-black/40">▍</span>}
          </p>
          <div
            className="flex flex-wrap items-center gap-1.5 pt-2.5"
            style={{ opacity: done ? 1 : 0, transition: "opacity 400ms ease" }}
          >
            {insight.chips.map(({ kind }) => {
              const open = openSource === kind;
              return (
                <button
                  key={kind}
                  data-chip={kind}
                  onClick={() => setOpenSource((k) => (k === kind ? null : kind))}
                  className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-medium text-[#3a3d47] transition-all duration-200 hover:-translate-y-px"
                  style={{
                    background: open ? chipStyles[kind].bg : "rgba(255,255,255,0.6)",
                    border: `1px solid ${open ? chipStyles[kind].border : "rgba(15,20,32,0.1)"}`,
                    boxShadow: open
                      ? "inset 0 1px 0 rgba(255,255,255,0.7)"
                      : "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(15,20,32,0.07)",
                  }}
                >
                  <span
                    className="size-[7px] rounded-full"
                    style={{
                      background: signalMeta[kind].dot,
                      boxShadow: `0 0 6px ${signalMeta[kind].dot}66`,
                    }}
                  />
                  {signalMeta[kind].label}
                </button>
              );
            })}
            <button
              onClick={onExecute}
              className="btn-obsidian ml-auto h-8 px-4 text-[12px] font-medium"
            >
              Execute
            </button>
          </div>
          <SourceShelf source={source ?? null} />
        </div>
      </div>
    </div>
  );
}

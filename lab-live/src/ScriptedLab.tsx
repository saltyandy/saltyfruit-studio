import { useEffect, useRef, useState } from "react";
import { insights, type ChipKind, type Insight } from "./data";
import { SurfacedInsight } from "./SurfacedInsight";

/*
 * The scripted performance for the case-study tile. The real SurfacedInsight
 * component runs live over the orb-backdrop video; this driver plays the
 * part of both the orb (surfacing insights into the stack) and a reader
 * (a cursor that opens the evidence shelves and moves on).
 *
 * The beat sheet, one ~23s loop:
 *   card A surfaces and types → card B settles in behind, peeking below
 *   while A is still compact → cursor opens A's On-chain shelf (bar graph)
 *   → cursor dismisses A → B comes forward and types while card C peeks
 *   in behind → cursor opens Risk (gauge), then Market (sparkline) →
 *   cursor leaves → the stack dissolves → the orb breathes, begin again.
 */

const STAGE = 1080; // design space — same square as the Remotion tile
const CARD_TOP = 0.33; // stack anchor, fraction of stage height
const CARD_SCALE = 1.15; // app-native card px scaled up for the tile

const A = insights[0]; // stake-idle-eth — read first
const B = insights[2]; // trim-hype — read second
const C = insights[1]; // park-stables — settles in behind B, never read

const settleEase = "cubic-bezier(0.22, 1, 0.36, 1)";

class Aborted extends Error {}

const sleep = (ms: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    if (signal.aborted) return reject(new Aborted());
    const t = window.setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      window.clearTimeout(t);
      reject(new Aborted());
    };
    signal.addEventListener("abort", onAbort, { once: true });
  });

export default function ScriptedLab({ video }: { video: string }) {
  const [stack, setStack] = useState<Insight[]>([]);
  const [dissolving, setDissolving] = useState(false);
  const [tick, setTick] = useState(0);
  const [scale, setScale] = useState(1);

  const frameRef = useRef<HTMLDivElement>(null); // the tile, page space
  const stageRef = useRef<HTMLDivElement>(null); // 1080-space, scaled
  const cursorRef = useRef<HTMLDivElement>(null);
  const rippleHostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardEls = useRef(new Map<string, HTMLDivElement>());
  const cursorAt = useRef({ x: STAGE * 0.78, y: STAGE * 0.82 });

  // fit the 1080 stage to whatever size the tile renders at
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / STAGE);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    /* ---- cursor primitives, all in stage coordinates ---- */

    const xf = (p: { x: number; y: number }) => `translate(${p.x}px, ${p.y}px)`;

    const setCursor = (visible: boolean, ms = 300) => {
      cursorRef.current?.animate([{ opacity: visible ? 1 : 0 }], {
        duration: ms,
        fill: "forwards",
        easing: "ease",
      });
    };

    const glide = async (to: { x: number; y: number }, ms: number, signal: AbortSignal) => {
      const el = cursorRef.current;
      if (!el) return;
      el.animate([{ transform: xf(cursorAt.current) }, { transform: xf(to) }], {
        duration: ms,
        easing: settleEase,
        fill: "forwards",
      });
      cursorAt.current = to;
      await sleep(ms, signal);
    };

    /** centre of a DOM node, converted from client space into stage space */
    const stagePoint = (el: Element) => {
      const stage = stageRef.current!.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const k = stage.width / STAGE;
      return {
        x: (r.left + r.width / 2 - stage.left) / k,
        y: (r.top + r.height / 2 - stage.top) / k,
      };
    };

    const chipEl = (id: string, kind: ChipKind) =>
      cardEls.current.get(id)?.querySelector<HTMLButtonElement>(`[data-chip="${kind}"]`) ?? null;
    const dismissEl = (id: string) =>
      cardEls.current.get(id)?.querySelector<HTMLButtonElement>('[title="Dismiss"]') ?? null;

    /** the click beat: pointer dips, a ring ripples out, the button fires */
    const press = async (el: HTMLElement | null, signal: AbortSignal) => {
      const cursor = cursorRef.current;
      if (!el || !cursor) return;
      cursor.animate(
        [
          { transform: `${xf(cursorAt.current)} scale(1)` },
          { transform: `${xf(cursorAt.current)} scale(0.86)`, offset: 0.28 },
          { transform: `${xf(cursorAt.current)} scale(1)` },
        ],
        { duration: 320, easing: settleEase }
      );
      await sleep(95, signal);
      el.click();
      const host = rippleHostRef.current;
      if (host) {
        const ring = document.createElement("span");
        ring.className = "lab-live-ripple";
        ring.style.left = `${cursorAt.current.x}px`;
        ring.style.top = `${cursorAt.current.y}px`;
        host.appendChild(ring);
        ring
          .animate(
            [
              { width: "10px", height: "10px", opacity: 0.7 },
              { width: "44px", height: "44px", opacity: 0 },
            ],
            { duration: 460, easing: settleEase }
          )
          .finished.finally(() => ring.remove());
      }
      await sleep(225, signal);
    };

    const glideToEl = async (el: Element | null, ms: number, signal: AbortSignal) => {
      if (!el) return;
      await glide(stagePoint(el), ms, signal);
    };

    /* ---- the loop ---- */

    const run = async (signal: AbortSignal) => {
      for (;;) {
        setStack([]);
        setDissolving(false);
        setTick((t) => t + 1);
        cursorAt.current = { x: STAGE * 0.78, y: STAGE * 0.82 };
        if (cursorRef.current) {
          // clear forward-filling WAAPI state from the previous pass
          cursorRef.current.getAnimations().forEach((a) => a.cancel());
          cursorRef.current.style.opacity = "0";
          cursorRef.current.style.transform = xf(cursorAt.current);
        }
        await sleep(600, signal);

        // card A surfaces, morphs and types itself out
        setStack([A]);
        await sleep(2600, signal);

        // a second briefing settles in behind while A is still compact —
        // the queued pill peeks out below, blurred, like in the app
        setStack((prev) => (prev.length ? [...prev, B] : prev));
        await sleep(1500, signal);

        // the reader arrives and opens the evidence behind On-chain
        setCursor(true);
        await glideToEl(chipEl(A.id, "ON-CHAIN"), 950, signal);
        await sleep(140, signal);
        await press(chipEl(A.id, "ON-CHAIN"), signal);
        await sleep(2900, signal);

        // done with A — dismiss it, B comes forward and types
        await glideToEl(dismissEl(A.id), 650, signal);
        await sleep(120, signal);
        await press(dismissEl(A.id), signal);
        await sleep(1400, signal);

        // the queue keeps coming: a third briefing peeks in behind B
        setStack((prev) => (prev.length ? [...prev, C] : prev));
        await sleep(1800, signal);

        // B's evidence: the concentration gauge…
        await glideToEl(chipEl(B.id, "RISK"), 950, signal);
        await sleep(140, signal);
        await press(chipEl(B.id, "RISK"), signal);
        await sleep(3100, signal);

        // …then the position chart, the shelf morphing between them
        await glideToEl(chipEl(B.id, "MARKET"), 700, signal);
        await sleep(120, signal);
        await press(chipEl(B.id, "MARKET"), signal);
        await sleep(3100, signal);

        // the reader drifts off and the stack dissolves back into the orb
        setCursor(false, 400);
        await glide({ x: cursorAt.current.x + 170, y: cursorAt.current.y + 210 }, 700, signal);
        setDissolving(true);
        await sleep(1500, signal);
      }
    };

    /* ---- only perform while on stage ---- */

    let controller: AbortController | null = null;
    const start = () => {
      if (controller) return;
      controller = new AbortController();
      videoRef.current?.play().catch(() => {});
      run(controller.signal).catch((e) => {
        if (!(e instanceof Aborted)) throw e;
      });
    };
    const stop = () => {
      controller?.abort();
      controller = null;
      videoRef.current?.pause();
      setStack([]);
      setDissolving(false);
    };

    let inView = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !document.hidden) start();
        else stop();
      },
      { threshold: 0.3 }
    );
    io.observe(frame);
    const onVisibility = () => {
      // restart on tab return — the observer only refires on scroll
      if (document.hidden) stop();
      else if (inView) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      stop();
    };
  }, []);

  return (
    <div ref={frameRef} className="lab-live-frame">
      <video ref={videoRef} src={video} muted loop playsInline preload="metadata" />
      <div
        ref={stageRef}
        className="lab-live-stage"
        style={{ width: STAGE, height: STAGE, transform: `scale(${scale})` }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: `${CARD_TOP * 100}%`,
            transform: `translateX(-50%) scale(${CARD_SCALE})`,
            transformOrigin: "top center",
            zIndex: 10,
          }}
        >
          {stack.map((insight, i) => (
            <div
              key={`${tick}-${insight.id}`}
              ref={(el) => {
                if (el) cardEls.current.set(insight.id, el);
                else cardEls.current.delete(insight.id);
              }}
            >
              <SurfacedInsight
                insight={insight}
                slot={i}
                dissolving={dissolving}
                onDismiss={() =>
                  setStack((prev) => prev.filter((p) => p.id !== insight.id))
                }
                onExecute={() => {}}
              />
            </div>
          ))}
        </div>

        {/* the reader: ripple layer + pointer, above the cards */}
        <div ref={rippleHostRef} className="lab-live-ripples" />
        <div ref={cursorRef} className="lab-live-cursor" style={{ opacity: 0 }}>
          <svg viewBox="0 0 14 19" width="20" height="27">
            <path
              d="M1 1 L1 15.5 L4.9 12.2 L7.4 17.6 L10.1 16.4 L7.6 11 L13 10.6 Z"
              fill="#fff"
              stroke="rgba(10,12,18,0.85)"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

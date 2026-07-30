import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_MONO, LabInsight, signalMeta} from './labTheme';

/* Frame-driven port of SurfacedInsight from OrbLab.tsx. The app animates
   with a Web Animations timeline + CSS transitions; every keyframe, offset,
   duration and cubic-bezier below is copied from it. Slots are static here
   (no dismissals in the film): card i sits at slot i, new cards settle in
   behind the one being read. */

const SURFACE_DOT = 88;
const SURFACE_W = 432;
const SURFACE_MORPH_MS = 1080;

/* measured resting card height (title wraps to 2 lines) and pill radius */
const CARD_H = 138;
const PILL_R = 69;

const popEase = Easing.bezier(0.3, 1.05, 0.45, 1);
const stretchEase = Easing.bezier(0.55, 0, 0.15, 1);
const settleEase = Easing.bezier(0.22, 1, 0.36, 1);
const cssEase = Easing.bezier(0.25, 0.1, 0.25, 1);

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const LabInsightCard: React.FC<{
  insight: LabInsight;
  slot: number;
  surfaceAt: number; // seconds
  dissolveAt: number; // seconds
  pressChip?: number; // index of the chip the cursor clicks
  pressAt?: number; // seconds — moment of the click
}> = ({insight, slot, surfaceAt, dissolveAt, pressChip, pressAt}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const m = (t - surfaceAt) * 1000; // ms since surfacing
  if (m < 0) return null;

  const front = slot === 0;

  /* ---- birth of the morph element ---- */
  let width = SURFACE_W;
  let height: number = CARD_H;
  let radius = PILL_R;
  let bgAlpha = 0.78;
  let morphOpacity = 1;
  let morphY = 0;
  let morphScale = 1;

  if (front) {
    const p = Math.min(m / SURFACE_MORPH_MS, 1);
    const dotOffset = (CARD_H - SURFACE_DOT) / 2;
    // pop: keyframe 0 → 0.275 (easing cubic-bezier(0.3,1.05,0.45,1))
    const pop = interpolate(p, [0, 0.275], [0, 1], {...clamp, easing: popEase});
    // stretch: keyframe 0.275 → 1 (easing cubic-bezier(0.55,0,0.15,1))
    const stretch = interpolate(p, [0.275, 1], [0, 1], {...clamp, easing: stretchEase});
    width = SURFACE_DOT + (SURFACE_W - SURFACE_DOT) * stretch;
    height = SURFACE_DOT + (CARD_H - SURFACE_DOT) * stretch;
    radius = SURFACE_DOT / 2 + (PILL_R - SURFACE_DOT / 2) * stretch;
    bgAlpha = 0.1 + (0.78 - 0.1) * stretch;
    morphOpacity = interpolate(p, [0, 0.175], [0, 1], {...clamp, easing: popEase});
    morphY = (dotOffset + 20) * (1 - pop) + dotOffset * pop * (1 - stretch);
    morphScale = 0.55 + 0.45 * pop;
  } else {
    // born behind the one being read — settles quietly into the stack
    const p = interpolate(m, [0, 640], [0, 1], {...clamp, easing: settleEase});
    morphOpacity = p;
    morphY = -14 * (1 - p);
    morphScale = 0.96 + 0.04 * p;
  }

  /* ---- stage / typing ---- */
  const openMs = front ? SURFACE_MORPH_MS - 260 : 0;
  const open = m >= openMs;
  // behind cards arrive already written out — they read as the blurred
  // stack in the Paper comp, not empty pills
  const typed = front ? Math.max(0, Math.floor((m - openMs) / 24)) : insight.title.length;
  const done = typed >= insight.title.length;
  const doneMs = front ? openMs + insight.title.length * 24 : 0;
  // Tailwind animate-pulse on the caret: 2s cubic-bezier(0.4,0,0.6,1) 1→0.5→1
  const caretOpacity = 0.75 + 0.25 * Math.cos((2 * Math.PI * (t % 2)) / 2);
  const chipsOpacity = interpolate(m, [doneMs, doneMs + 400], [0, 1], clamp);
  const bodyOpacity = open ? 1 : 0;
  const bodyY = interpolate(m, [openMs, openMs + 420], [6, 0], {...clamp, easing: settleEase});

  /* ---- slot wrapper (+ dissolve sink) ---- */
  const sinkP = interpolate(t, [dissolveAt, dissolveAt + 0.75], [0, 1], {...clamp, easing: settleEase});
  const sinkPLinear = interpolate(t, [dissolveAt, dissolveAt + 0.75], [0, 1], {...clamp, easing: cssEase});
  /* stack geometry per the Paper comp: the card behind peeks out below the
     front one, softened and faded */
  const slotY = slot * 56 + 44 * sinkP;
  const slotScale = (1 - slot * 0.03) * (1 - sinkP) + 0.9 * sinkP;
  const slotOpacity = Math.max(0, 1 - slot * 0.25) * (1 - sinkPLinear);
  const slotBlur = slot * 2 * (1 - sinkPLinear) + 8 * sinkPLinear;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: `translate(-50%, ${slotY}px) scale(${slotScale})`,
        opacity: slotOpacity,
        filter: `blur(${slotBlur}px)`,
        zIndex: 40 - slot,
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.8)',
          boxShadow: '0 10px 36px rgba(15,20,32,0.28)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          width,
          height: front && m >= SURFACE_MORPH_MS ? 'auto' : height,
          borderRadius: radius,
          backgroundColor: `rgba(250,250,250,${bgAlpha})`,
          opacity: morphOpacity,
          transform: `translateY(${morphY}px) scale(${morphScale})`,
        }}
      >
        <div
          style={{
            width: 430,
            padding: '14px 32px',
            boxSizing: 'border-box',
            opacity: bodyOpacity,
            transform: `translateY(${bodyY}px)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 6,
            }}
          >
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'rgba(0,0,0,0.35)',
              }}
            >
              insight_{insight.id.slice(0, 6)}
            </span>
            <span
              style={{
                width: 20,
                height: 20,
                display: 'grid',
                placeItems: 'center',
                color: 'rgba(0,0,0,0.35)',
              }}
            >
              <svg viewBox="0 0 10 10" width="9" height="9" fill="none">
                <path d="m1.5 1.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <p style={{minHeight: 20, fontSize: 14, lineHeight: '20px', color: '#191b26', margin: 0}}>
            {insight.title.slice(0, typed)}
            {!done && <span style={{color: 'rgba(0,0,0,0.4)', opacity: caretOpacity}}>▍</span>}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 6,
              paddingTop: 10,
              opacity: chipsOpacity,
            }}
          >
            {insight.chips.map((kind, ci) => {
              /* click beat: quick press-down, spring back, then the chip
                 holds a selected tint in its signal colour */
              const pm = pressAt !== undefined && ci === pressChip ? (t - pressAt) * 1000 : -1;
              const pressScale =
                pm < 0
                  ? 1
                  : pm <= 90
                    ? interpolate(pm, [0, 90], [1, 0.92], clamp)
                    : interpolate(pm, [90, 320], [0.92, 1], {...clamp, easing: settleEase});
              const selected = pm >= 60;
              const dot = signalMeta[kind].dot;
              return (
              <span
                key={kind}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  whiteSpace: 'nowrap',
                  borderRadius: 999,
                  padding: '4px 10px',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#3a3d47',
                  background: selected ? `${dot}1f` : 'rgba(255,255,255,0.6)',
                  border: selected ? `1px solid ${dot}66` : '1px solid rgba(15,20,32,0.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(15,20,32,0.07)',
                  transform: `scale(${pressScale})`,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: signalMeta[kind].dot,
                    boxShadow: `0 0 6px ${signalMeta[kind].dot}66`,
                  }}
                />
                {signalMeta[kind].label}
              </span>
              );
            })}
            {/* .btn-obsidian */}
            <span
              style={{
                marginLeft: 'auto',
                height: 32,
                padding: '0 16px',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: 12,
                fontWeight: 500,
                borderRadius: 999,
                color: 'rgba(255,255,255,0.95)',
                background: '#101218',
                boxShadow: '0 6px 20px rgba(10,12,20,0.22)',
              }}
            >
              Execute
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

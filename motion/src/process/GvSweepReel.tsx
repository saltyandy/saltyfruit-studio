import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import manifest from './gv-sweep-manifest.json';
import '../nuvolari/fonts';

/* Aurora tokens from the GetVocal V3 Paper file */
const PAPER = '#F4EFE3';
const INK = '#1E1A38';
const INK_MUTE = 'rgb(30 26 56 / 46%)';
const RULE = '#D5CEBC';
const ACCENT = '#E8523A';

export const FPS = 30;
const HOLD_ASIS = 27; // 0.9s on the old screen
const HOLD_AURORA = 45; // 1.5s on its Aurora twin

type Pair = {label: string; asis: string; aurora: string};
const pairs = manifest.pairs as Pair[];
const PAIR_LEN = HOLD_ASIS + HOLD_AURORA;

export const gvSweepReelDuration = () => pairs.length * PAIR_LEN;

export const GvSweepReel: React.FC = () => {
  const frame = useCurrentFrame();
  const pairIndex = Math.min(Math.floor(frame / PAIR_LEN), pairs.length - 1);
  const inAurora = frame - pairIndex * PAIR_LEN >= HOLD_ASIS;
  const p = pairs[pairIndex];

  return (
    <AbsoluteFill style={{backgroundColor: PAPER}}>
      <AbsoluteFill
        style={{
          padding: '48px 64px 110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          src={staticFile(inAurora ? p.aurora : p.asis)}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            border: `1px solid ${RULE}`,
            borderRadius: 10,
          }}
        />
      </AbsoluteFill>

      {/* Caption bar */}
      <AbsoluteFill
        style={{
          top: 'auto',
          height: 110,
          padding: '0 64px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Geist, system-ui, sans-serif',
        }}
      >
        <div style={{display: 'flex', alignItems: 'baseline', gap: 14}}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: inAurora ? ACCENT : INK_MUTE,
            }}
          >
            {inAurora ? 'AURORA' : 'AS-IS'}
          </span>
          <span style={{fontSize: 24, fontWeight: 400, color: INK}}>
            {p.label}
          </span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <div style={{display: 'flex', gap: 6}}>
            {pairs.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === pairIndex ? 24 : 7,
                  height: 4,
                  borderRadius: 999,
                  backgroundColor: i === pairIndex ? ACCENT : RULE,
                }}
              />
            ))}
          </div>
          <span style={{fontSize: 14, letterSpacing: '0.14em', color: INK_MUTE}}>
            {String(pairIndex + 1).padStart(2, '0')}/{String(pairs.length).padStart(2, '0')}
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

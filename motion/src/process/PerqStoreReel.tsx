import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {loadFont as loadArimo} from '@remotion/google-fonts/Arimo';
import {loadFont as loadMono} from '@remotion/google-fonts/JetBrainsMono';
import manifest from './perq-manifest.json';

const {fontFamily: arimo} = loadArimo();
const {fontFamily: mono} = loadMono();

/* PERQ store tokens, sampled from the delivered screens */
const PAPER = '#FEF0E7';
const INK = '#1B1712';
const INK_MUTE = 'rgb(27 23 18 / 46%)';
const RULE = '#EBD9CC';
const ACCENT = '#A576C7';
const PILL = '#E9E0F5';

export const FPS = 30;
const HOLD = 60; // 2s per board — these carry copy, GV's 1.2s is too fast to read

type Frame = {src: string; tag: string; kind: string; label: string};
const frames = manifest.frames as Frame[];

export const perqStoreReelDuration = () => frames.length * HOLD;

export const PerqStoreReel: React.FC = () => {
  const frame = useCurrentFrame();
  const active = Math.min(Math.floor(frame / HOLD), frames.length - 1);
  const f = frames[active];

  return (
    <AbsoluteFill style={{backgroundColor: PAPER}}>
      <AbsoluteFill
        style={{
          padding: '64px 64px 120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          src={staticFile(f.src)}
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
          height: 120,
          padding: '0 64px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{display: 'flex', alignItems: 'baseline', gap: 14}}>
          <span
            style={{
              fontFamily: mono,
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: ACCENT,
            }}
          >
            {f.tag}
          </span>
          <span style={{fontFamily: arimo, fontSize: 24, fontWeight: 400, color: INK}}>
            {f.label}
          </span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <div style={{display: 'flex', gap: 6}}>
            {frames.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === active ? 24 : 7,
                  height: 4,
                  borderRadius: 999,
                  backgroundColor: i === active ? ACCENT : PILL,
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: mono,
              fontSize: 14,
              letterSpacing: '0.14em',
              color: INK_MUTE,
            }}
          >
            {String(active + 1).padStart(2, '0')}/{String(frames.length).padStart(2, '0')}
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

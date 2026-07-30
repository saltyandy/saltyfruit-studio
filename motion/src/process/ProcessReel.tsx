import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import manifest from './manifest.json';
import '../nuvolari/fonts';

/* Brand tokens from the Nuvolari Paper file */
const BONE = '#F3EFE4';
const INK = '#131420';
const INK_3 = 'rgb(19 20 32 / 42%)';
const RULE = '#DED7C6';
const ULTRAMARINE = '#2139C7';

export const FPS = 30;
const HOLD = 36; // 1.2s per board, hard cuts

type Frame = {src: string; tag: string; kind: string; label: string};
const frames = manifest.frames as Frame[];

export const processReelDuration = () => frames.length * HOLD;

export const ProcessReel: React.FC = () => {
  const frame = useCurrentFrame();
  const active = Math.min(Math.floor(frame / HOLD), frames.length - 1);
  const f = frames[active];

  return (
    <AbsoluteFill style={{backgroundColor: BONE}}>
      <AbsoluteFill
        style={{
          padding: '56px 56px 120px',
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
          padding: '0 56px',
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
              color: ULTRAMARINE,
            }}
          >
            {f.tag}
          </span>
          <span style={{fontSize: 24, fontWeight: 400, color: INK}}>
            {f.label}
          </span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          {frames.length <= 12 && (
            <div style={{display: 'flex', gap: 6}}>
              {frames.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === active ? 24 : 7,
                    height: 4,
                    borderRadius: 999,
                    backgroundColor: i === active ? ULTRAMARINE : RULE,
                  }}
                />
              ))}
            </div>
          )}
          <span style={{fontSize: 14, letterSpacing: '0.14em', color: INK_3}}>
            {String(active + 1).padStart(2, '0')}/{String(frames.length).padStart(2, '0')}
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

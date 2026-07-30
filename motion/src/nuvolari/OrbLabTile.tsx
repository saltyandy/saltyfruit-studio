import {AbsoluteFill, Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {HalftoneDots} from '@paper-design/shaders-react';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';
import {loadFont as loadMono} from '@remotion/google-fonts/JetBrainsMono';
import {LabOrb, fogGradientFor} from './LabOrb';
import {LabInsightCard} from './LabInsightCard';
import {LAB_QUEUE, FONT_SANS} from './labTheme';

loadInter();
loadMono();

/* The ?lab stage, cropped square for the case-study tile — composition per
   the Paper "Portfolio Pages" tile: camera pulled back so the orb reads as
   a sphere, cards smaller over its upper half. First card surfaces on its
   own; the second is revealed by a cursor clicking the first card's
   On-chain chip; a dissolve clears the stack before the loop point. */

export const LAB_TILE_DURATION_S = 14;
const MOOD_VALUE = 0.9; // the lab's default slider position (saver-leaning)
const CARD_TIMES = [0.9, 5.45, 9.0];
const DISSOLVE_AT = 12.2;
const CARD_SCALE = 1.15; // app-native card px, scaled for the 1080 tile
const ORB_CAMERA_Z = 2.1; // close in — the orb's surface IS the backdrop, aurora filling the frame

/* the click beat: cursor eases onto card 0's first chip and presses it,
   surfacing the next insight */
const PRESS_CHIP = 0;
const PRESS_AT = 5.3;
const CURSOR_IN = 4.35;
const CURSOR_ARRIVE = 5.1;
const CURSOR_OUT = 5.95;
/* chip centre in card space, measured from the card stack's top-centre */
const CHIP_X = -140;
const CHIP_Y = 106;

const settleEase = Easing.bezier(0.22, 1, 0.36, 1);
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const LabCursor: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;

  const travel = interpolate(t, [CURSOR_IN, CURSOR_ARRIVE], [0, 1], {...clamp, easing: settleEase});
  const x = CHIP_X + 190 * (1 - travel);
  const y = CHIP_Y + 230 * (1 - travel);
  const opacity =
    interpolate(t, [CURSOR_IN, CURSOR_IN + 0.25], [0, 1], clamp) *
    interpolate(t, [CURSOR_OUT, CURSOR_OUT + 0.35], [1, 0], clamp);
  // press: the pointer itself dips with the chip
  const pm = (t - PRESS_AT) * 1000;
  const dip = pm < 0 ? 0 : pm <= 90 ? interpolate(pm, [0, 90], [0, 1], clamp) : interpolate(pm, [90, 320], [1, 0], {...clamp, easing: settleEase});
  const ripple = interpolate(pm, [0, 450], [0, 1], {...clamp, easing: settleEase});

  if (opacity <= 0) return null;
  return (
    <>
      {/* click ripple, centred on the chip */}
      {pm >= 0 && ripple < 1 && (
        <span
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: 8 + 30 * ripple,
            height: 8 + 30 * ripple,
            transform: `translate(calc(-50% + ${CHIP_X}px), ${CHIP_Y}px) translate(0, -50%)`,
            marginLeft: -(8 + 30 * ripple) / 2,
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.9)',
            opacity: 0.7 * (1 - ripple),
            zIndex: 61,
          }}
        />
      )}
      <svg
        viewBox="0 0 14 19"
        width={17}
        height={23}
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: `translate(${x}px, ${y}px) scale(${1 - 0.12 * dip})`,
          transformOrigin: '1px 1px',
          opacity,
          zIndex: 62,
          filter: 'drop-shadow(0 2px 5px rgba(10,14,20,0.35))',
        }}
      >
        <path
          d="M1 1 L1 15.5 L4.9 12.2 L7.4 17.6 L10.1 16.4 L7.6 11 L13 10.6 Z"
          fill="#fff"
          stroke="rgba(10,12,18,0.85)"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

const GRAIN_URL =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;

export const OrbLabTile: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#aebdd8', fontFamily: FONT_SANS, overflow: 'hidden'}}>
      {/* the world: scene artwork through the halftone shader (speed 0 so
          every render worker sees the same frame; the sweep is a live-only
          nicety) */}
      <HalftoneDots
        image={staticFile('assets/bg-scene.png')}
        originalColors
        colorBack="#00000000"
        type="classic"
        grid="square"
        size={0.017}
        radius={1.2}
        contrast={0.58}
        speed={0}
        fit="cover"
        grainMixer={0.15}
        grainSize={0.3}
        style={{position: 'absolute', inset: 0, opacity: 0.85, width: '100%', height: '100%'}}
      />
      {/* mood fog — a coloured atmosphere over the art */}
      <AbsoluteFill style={{background: fogGradientFor(MOOD_VALUE), opacity: 0.32}} />
      {/* the room recedes: gentle darkening + vignette */}
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(ellipse 62% 55% at 50% 46%, rgba(10,14,20,0.12) 0%, rgba(10,14,20,0.26) 62%, rgba(8,11,16,0.46) 100%)',
        }}
      />
      {/* top-down stage light across the whole scene */}
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 26%, rgba(255,255,255,0) 52%, rgba(6,9,14,0.18) 100%)',
        }}
      />

      <LabOrb width={1080} height={1080} moodValue={MOOD_VALUE} cameraZ={ORB_CAMERA_Z} />

      {/* film grain over the whole stage */}
      <AbsoluteFill
        style={{
          backgroundImage: GRAIN_URL,
          backgroundSize: '256px 256px',
          opacity: 0.4,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      {/* surfaced insights — written out by the machine inside the orb */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '35%',
          zIndex: 10,
          transform: `translateX(-50%) scale(${CARD_SCALE})`,
          transformOrigin: 'top center',
        }}
      >
        {LAB_QUEUE.map((insight, i) => (
          <LabInsightCard
            key={insight.id}
            insight={insight}
            slot={i}
            surfaceAt={CARD_TIMES[i]}
            dissolveAt={DISSOLVE_AT}
            pressChip={i === 0 ? PRESS_CHIP : undefined}
            pressAt={i === 0 ? PRESS_AT : undefined}
          />
        ))}
        <LabCursor />
      </div>
    </AbsoluteFill>
  );
};

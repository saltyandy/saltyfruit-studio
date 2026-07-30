import {AbsoluteFill, staticFile} from 'remotion';
import {HalftoneDots} from '@paper-design/shaders-react';
import {LabOrb, fogGradientFor} from './LabOrb';
import {FONT_SANS} from './labTheme';

/* The ?lab stage alone — no cards, no cursor. This renders the ambient
   backdrop for the live notification tile: the real SurfacedInsight
   component from Nuvolari_Proto_Build plays on the page, over this loop.
   Rendered long with a tail so ffmpeg can xfade it into a seamless loop
   (see render:orb-backdrop). */

export const BACKDROP_RENDER_S = 28; // 24s loop + 4s xfade tail
const MOOD_VALUE = 0.9;
const ORB_CAMERA_Z = 2.1; // same framing as the OrbNotifications tile

const GRAIN_URL =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;

export const OrbBackdrop: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#aebdd8', fontFamily: FONT_SANS, overflow: 'hidden'}}>
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
      <AbsoluteFill style={{background: fogGradientFor(MOOD_VALUE), opacity: 0.32}} />
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(ellipse 62% 55% at 50% 46%, rgba(10,14,20,0.12) 0%, rgba(10,14,20,0.26) 62%, rgba(8,11,16,0.46) 100%)',
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 26%, rgba(255,255,255,0) 52%, rgba(6,9,14,0.18) 100%)',
        }}
      />

      <LabOrb width={1080} height={1080} moodValue={MOOD_VALUE} cameraZ={ORB_CAMERA_Z} />

      <AbsoluteFill
        style={{
          backgroundImage: GRAIN_URL,
          backgroundSize: '256px 256px',
          opacity: 0.4,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

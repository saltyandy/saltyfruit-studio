import {useMemo} from 'react';
import * as THREE from 'three';
import {useThree} from '@react-three/fiber';
import {ThreeCanvas} from '@remotion/three';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {NOISE_GLSL, SURFACE_VERT, SURFACE_FRAG} from './labShaders';
import {moods, weightsFor, defaultParams} from './labTheme';

/* Frame-driven port of CinemaPage.tsx from Nuvolari_Proto_Build — the
   portfolio hero shot: the orb half-submerged in a raymarched cloud sea
   under a dark dusk. The app's rAF tick becomes frame math; pointer
   parallax and key controls are omitted, leaving their resting values:
     moodValue 0.08 (degen-forward), tilt 2.05 (horizon in the low third).
   Every shader, colour and constant below is copied from the app. */

export const CINEMA_DURATION_S = 26; // raw take; the loop is cut in post

/* the Paper hero frames the scene blue-leaning (balanced mood) with the
   orb cresting large out of the sea, lower half submerged */
const MOOD_VALUE = 0.42;
const TILT = 2.05;
const ORB_R = 2.6;
const ORB_Y = -0.7; // waterline just above the equator — the crest rides clear

const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const SKY_FRAG = /* glsl */ `
uniform vec3 uSunDir;
uniform float uTime;
varying vec3 vDir;
${NOISE_GLSL}

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.06, 1.0);

  // dusk gradient — deep ink-plum overhead falling to a hot rose horizon
  vec3 zenith = vec3(0.050, 0.040, 0.085);
  vec3 upper  = vec3(0.115, 0.080, 0.150);
  vec3 mauve  = vec3(0.360, 0.185, 0.280);
  vec3 rose   = vec3(0.760, 0.400, 0.400);

  vec3 col = mix(rose, mauve, smoothstep(-0.02, 0.16, h));
  col = mix(col, upper, smoothstep(0.10, 0.42, h));
  col = mix(col, zenith, smoothstep(0.35, 0.85, h));

  // no visible sun — it has already set; only a broad warm afterglow
  // hangs where it went down
  float s = max(dot(d, uSunDir), 0.0);
  col += vec3(0.95, 0.55, 0.45) * pow(s, 5.0) * 0.22;

  // slow horizontal haze bands drifting near the horizon
  float band = snoise(vec3(d.x * 2.0, d.y * 14.0, d.z * 2.0) + vec3(uTime * 0.008, 0.0, 0.0));
  col += vec3(0.9, 0.5, 0.5) * band * 0.022 * smoothstep(0.35, 0.02, h);

  // faint stars fading in overhead, away from the glow
  vec2 sp = d.xz / (d.y + 0.35);
  float st = hash21(floor(sp * 240.0));
  float star = smoothstep(0.9975, 1.0, st) * smoothstep(0.22, 0.55, d.y) * (1.0 - s * 0.9);
  float twinkle = 0.6 + 0.4 * sin(uTime * 0.6 + st * 40.0);
  col += vec3(0.9, 0.9, 1.0) * star * twinkle * 0.35;

  // dither so the dusk gradient never bands
  col += (hash21(gl_FragCoord.xy) - 0.5) * 0.012;

  gl_FragColor = vec4(col, 1.0);
}
`;

const CLOUD_VERT = /* glsl */ `
varying vec2 vNdc;
void main() {
  vNdc = position.xy;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;

const CLOUD_FRAG = /* glsl */ `
uniform vec3 uCamPos;
uniform mat4 uInvVP;
uniform float uTime;
uniform vec3 uLightDir;
uniform vec3 uOrbPos;
uniform float uOrbR;
uniform vec3 uCloudLit;
uniform vec3 uCloudShadow;
uniform vec3 uHaze;
uniform vec3 uOrbGlow;
varying vec2 vNdc;
${NOISE_GLSL}

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// the sea surface — billowy fbm rolled slowly by the wind
float density(vec3 p) {
  vec3 q = p * 0.34 + vec3(uTime * 0.016, 0.0, uTime * 0.006);
  float f = 0.52 * snoise(q) + 0.26 * snoise(q * 2.13) + 0.13 * snoise(q * 4.27);
  // ridged detail — the cauliflower tops, kept gentle so the mass stays soft
  float ridge = 1.0 - abs(snoise(q * 6.4));
  f += 0.12 * ridge * ridge;
  return clamp((0.52 * f - p.y) * 1.8, 0.0, 1.0);
}

// two octaves is enough for the light-direction sample
float densityLo(vec3 p) {
  vec3 q = p * 0.34 + vec3(uTime * 0.016, 0.0, uTime * 0.006);
  float f = 0.55 * snoise(q) + 0.30 * snoise(q * 2.13);
  return clamp((0.52 * f - p.y) * 1.8, 0.0, 1.0);
}

void main() {
  vec4 wp = uInvVP * vec4(vNdc, 1.0, 1.0);
  vec3 rd = normalize(wp.xyz / wp.w - uCamPos);
  vec3 ro = uCamPos;

  float top = 0.78; // highest the billows reach

  // above the deck looking up: nothing but sky
  float tStart = 0.0;
  if (ro.y > top) {
    if (rd.y >= -0.0005) {
      gl_FragColor = vec4(0.0);
      return;
    }
    tStart = (top - ro.y) / rd.y;
  }

  // stop the march at the orb — wisps in front still accumulate over it
  float maxT = 70.0;
  vec3 oc = ro - uOrbPos;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - uOrbR * uOrbR;
  float disc = b * b - c;
  if (disc > 0.0) {
    float tHit = -b - sqrt(disc);
    if (tHit > 0.0) maxT = min(maxT, tHit);
  }

  float t = tStart + hash21(gl_FragCoord.xy) * 0.06;
  vec3 sum = vec3(0.0);
  float alpha = 0.0;
  float stepLen = 0.1;

  for (int i = 0; i < 64; i++) {
    if (t > maxT || alpha > 0.985) break;
    vec3 p = ro + rd * t;
    float d = density(p);
    if (d > 0.01) {
      // sun sits behind — one gradient sample gives the silver linings
      float dl = densityLo(p + uLightDir * 0.7);
      float dif = clamp((d - dl) * 2.6, 0.0, 1.0);
      // wispy edges glow bright, dense cores fall into plum shadow
      vec3 col = mix(uCloudLit, uCloudShadow, smoothstep(0.0, 0.85, d));
      col += uCloudLit * dif * 1.0;
      // crests catch the dusk, troughs sink into shadow
      col *= 0.72 + 0.42 * clamp(p.y / 0.45, -1.0, 1.0);

      // the orb's light bleeding onto nearby cloud tops
      float od = length(p - uOrbPos) - uOrbR;
      col += uOrbGlow * 0.55 / (1.0 + od * od * 1.6);

      // distant sea dissolves into the sunset haze
      col = mix(col, uHaze, 1.0 - exp(-t * 0.045));

      float a = d * 0.26;
      sum += col * a * (1.0 - alpha);
      alpha += a * (1.0 - alpha);
    }
    // jittered stride — breaks the layered banding at grazing angles
    t += stepLen * (0.85 + 0.3 * hash21(gl_FragCoord.xy + float(i) * 7.13));
    stepLen *= 1.055;
  }

  gl_FragColor = vec4(sum, alpha);
}
`;

const GRAIN_URL =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;

const c3 = (hex: string) => new THREE.Color(hex);
const blend3 = (colors: THREE.Color[], w: [number, number, number]) =>
  new THREE.Color(
    colors[0].r * w[0] + colors[1].r * w[1] + colors[2].r * w[2],
    colors[0].g * w[0] + colors[1].g * w[1] + colors[2].g * w[2],
    colors[0].b * w[0] + colors[1].b * w[1] + colors[2].b * w[2]
  );

const CinemaScene: React.FC<{wall: number; simTime: number}> = ({wall, simTime}) => {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;

  const sunDir = useMemo(() => new THREE.Vector3(0.42, -0.04, -1.0).normalize(), []);
  // the clouds are shaded from just above it, so the tops still catch fire
  const lightDir = useMemo(() => new THREE.Vector3(0.42, 0.22, -1.0).normalize(), []);

  const w = useMemo(() => weightsFor(MOOD_VALUE), []);
  const P = useMemo(
    () =>
      moods.map((m) => ({
        deep: c3(m.deep),
        mid: c3(m.mid),
        bright: c3(m.bright),
        vein: c3(m.vein),
        rim: c3(m.rim),
        flare: c3(m.flare),
      })),
    []
  );

  const skyUniforms = useMemo(() => ({uSunDir: {value: sunDir}, uTime: {value: 0}}), [sunDir]);

  const prm = defaultParams;
  const surfaceUniforms = useMemo(
    () => ({
      uTime: {value: 0},
      uScale: {value: prm.scale},
      uSoft: {value: prm.soft},
      uBlur: {value: prm.blur},
      uVeinAmp: {value: prm.vein},
      uRimAmp: {value: prm.rim},
      uW: {value: new THREE.Vector3(...w)},
      uDeepD: {value: P[0].deep}, uMidD: {value: P[0].mid}, uBrightD: {value: P[0].bright}, uVeinD: {value: P[0].vein},
      uDeepB: {value: P[1].deep}, uMidB: {value: P[1].mid}, uBrightB: {value: P[1].bright}, uVeinB: {value: P[1].vein},
      uDeepS: {value: P[2].deep}, uMidS: {value: P[2].mid}, uBrightS: {value: P[2].bright}, uVeinS: {value: P[2].vein},
      uRim: {value: blend3(P.map((p) => p.rim), w)},
    }),
    [P, w, prm]
  );

  const cloudUniforms = useMemo(
    () => ({
      uCamPos: {value: new THREE.Vector3()},
      uInvVP: {value: new THREE.Matrix4()},
      uTime: {value: 0},
      uLightDir: {value: lightDir},
      uOrbPos: {value: new THREE.Vector3(0, ORB_Y, 0)},
      uOrbR: {value: ORB_R},
      uCloudLit: {value: c3('#f5cab5')},
      uCloudShadow: {value: c3('#3c2c4e')},
      uHaze: {value: c3('#c58489')},
      uOrbGlow: {value: blend3(P.map((p) => p.flare), w).multiplyScalar(0.7)},
    }),
    [lightDir, P, w]
  );

  /* the lab orb verbatim, except its stipple grain — at cinema scale the
     full 0.10 reads as dither, so it's calmed to a quarter strength here */
  const cinemaFrag = useMemo(
    () => (SURFACE_FRAG.includes('* 0.10;') ? SURFACE_FRAG.replace('* 0.10;', '* 0.025;') : SURFACE_FRAG),
    []
  );

  /* the app's tick, replayed for this frame */
  surfaceUniforms.uTime.value = simTime;
  skyUniforms.uTime.value = wall;
  cloudUniforms.uTime.value = wall;

  camera.position.set(
    Math.sin(wall * 0.05) * 0.24,
    0.92 + Math.sin(wall * 0.037) * 0.05,
    10.5
  );
  camera.lookAt(0, TILT, 0);
  camera.updateMatrixWorld(true);

  const bob = Math.sin(wall * 0.22) * 0.035;
  cloudUniforms.uOrbPos.value.set(0, ORB_Y + bob, 0);
  cloudUniforms.uCamPos.value.copy(camera.position);
  cloudUniforms.uInvVP.value
    .copy(camera.projectionMatrix)
    .multiply(camera.matrixWorldInverse)
    .invert();

  return (
    <group>
      <mesh renderOrder={-1}>
        <sphereGeometry args={[150, 48, 32]} />
        <shaderMaterial
          vertexShader={SKY_VERT}
          fragmentShader={SKY_FRAG}
          uniforms={skyUniforms}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
      {/* the orb — the exact lab material, baked settings, scaled up */}
      <mesh
        scale={ORB_R}
        position={[0, ORB_Y + bob, 0]}
        rotation={[0, simTime * 0.07, 0]}
      >
        <sphereGeometry args={[1, 128, 128]} />
        <shaderMaterial vertexShader={SURFACE_VERT} fragmentShader={cinemaFrag} uniforms={surfaceUniforms} />
      </mesh>
      {/* the cloud sea — one fullscreen raymarch, drawn over everything */}
      <mesh renderOrder={10} frustumCulled={false}>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          vertexShader={CLOUD_VERT}
          fragmentShader={CLOUD_FRAG}
          uniforms={cloudUniforms}
          transparent
          depthTest={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

export const CinemaHero: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();
  const wall = frame / fps;
  const simTime = wall * defaultParams.speed;

  return (
    <AbsoluteFill style={{backgroundColor: '#0e0b17', overflow: 'hidden'}}>
      <ThreeCanvas
        width={width}
        height={height}
        camera={{fov: 38, near: 0.1, far: 300, position: [0, 0.92, 10.5]}}
        style={{background: 'transparent'}}
        gl={{antialias: true}}
      >
        <CinemaScene wall={wall} simTime={simTime} />
      </ThreeCanvas>

      {/* cinematic vignette */}
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(ellipse 72% 62% at 50% 44%, rgba(6,5,12,0) 0%, rgba(6,5,12,0.14) 62%, rgba(4,3,9,0.52) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* film grain over the whole frame */}
      <AbsoluteFill
        style={{
          backgroundImage: GRAIN_URL,
          backgroundSize: '256px 256px',
          opacity: 0.18,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

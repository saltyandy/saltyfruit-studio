import {useMemo} from 'react';
import * as THREE from 'three';
import {ThreeCanvas} from '@remotion/three';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {SURFACE_VERT, SURFACE_FRAG, CORONA_VERT, CORONA_FRAG, PLATE_VERT, PLATE_FRAG} from './labShaders';
import {moods, weightsFor, defaultParams} from './labTheme';

/* Port of the OrbLab three.js scene (orb + plate + ring + corona veils).
   The app's rAF tick becomes frame math:
     simTime += delta * speed      → simTime = elapsed * speed
     orb.rotation.y = simTime * 0.07   (pointer tilt omitted — no cursor)
     bob = sin(simTime * 0.4) * 0.04
   moodValue is fixed per composition (the eased slider at rest). */

const c3 = (hex: string) => new THREE.Color(hex);
const blend3 = (colors: THREE.Color[], w: [number, number, number]) =>
  new THREE.Color(
    colors[0].r * w[0] + colors[1].r * w[1] + colors[2].r * w[2],
    colors[0].g * w[0] + colors[1].g * w[1] + colors[2].g * w[2],
    colors[0].b * w[0] + colors[1].b * w[1] + colors[2].b * w[2]
  );

const veilSpecs = [
  {radius: 1.04, phase: 0.0, amp: 0.1, alpha: 0.45},
  {radius: 1.09, phase: 2.7, amp: 0.14, alpha: 0.3},
  {radius: 1.15, phase: 5.1, amp: 0.18, alpha: 0.2},
];

/* The room fog gradient the tick loop writes onto fogRef — same formula */
export const fogGradientFor = (moodValue: number) => {
  const w = weightsFor(moodValue);
  const stops = [0, 1, 2, 3].map((i) =>
    blend3(moods.map((m) => c3(m.bgStops[i])), w).getHexString()
  );
  return `radial-gradient(ellipse 85% 70% at 50% 40%, #${stops[0]} 0%, #${stops[1]} 48%, #${stops[2]} 80%, #${stops[3]} 100%)`;
};

const LabScene: React.FC<{simTime: number; moodValue: number}> = ({simTime, moodValue}) => {
  const w = useMemo(() => weightsFor(moodValue), [moodValue]);
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

  const surfaceUniforms = useMemo(
    () => ({
      uTime: {value: 0},
      uScale: {value: defaultParams.scale},
      uSoft: {value: defaultParams.soft},
      uBlur: {value: defaultParams.blur},
      uVeinAmp: {value: defaultParams.vein},
      uRimAmp: {value: defaultParams.rim},
      uW: {value: new THREE.Vector3(...w)},
      uDeepD: {value: P[0].deep}, uMidD: {value: P[0].mid}, uBrightD: {value: P[0].bright}, uVeinD: {value: P[0].vein},
      uDeepB: {value: P[1].deep}, uMidB: {value: P[1].mid}, uBrightB: {value: P[1].bright}, uVeinB: {value: P[1].vein},
      uDeepS: {value: P[2].deep}, uMidS: {value: P[2].mid}, uBrightS: {value: P[2].bright}, uVeinS: {value: P[2].vein},
      uRim: {value: blend3(P.map((p) => p.rim), w)},
    }),
    [P, w]
  );
  surfaceUniforms.uTime.value = simTime;

  const plateUniforms = useMemo(
    () => ({
      uTop: {value: blend3(P.map((p) => p.mid), w).multiplyScalar(1.05)},
      uBottom: {value: blend3(P.map((p) => p.deep), w).multiplyScalar(0.3)},
    }),
    [P, w]
  );
  const ringColor = useMemo(() => blend3(P.map((p) => p.mid), w).multiplyScalar(0.5), [P, w]);
  const flareColor = useMemo(() => ({value: blend3(P.map((p) => p.flare), w)}), [P, w]);
  const coronaAmount = useMemo(() => ({value: defaultParams.corona}), []);

  const rotation: [number, number, number] = [0, simTime * 0.07, 0];
  const bob = Math.sin(simTime * 0.4) * 0.04;

  return (
    <group>
      <mesh rotation={rotation} position={[0, bob, 0]}>
        <sphereGeometry args={[1, 128, 128]} />
        <shaderMaterial vertexShader={SURFACE_VERT} fragmentShader={SURFACE_FRAG} uniforms={surfaceUniforms} />
      </mesh>
      {/* dark circular plate — the orb's own little world */}
      <mesh position={[0, bob, -0.3]}>
        <circleGeometry args={[1.22, 128]} />
        <shaderMaterial vertexShader={PLATE_VERT} fragmentShader={PLATE_FRAG} uniforms={plateUniforms} />
      </mesh>
      <mesh position={[0, bob, -0.32]}>
        <circleGeometry args={[1.26, 128]} />
        <meshBasicMaterial color={ringColor} />
      </mesh>
      {/* three faint staggered veils read as one blurred gaseous corona */}
      {veilSpecs.map((spec) => (
        <mesh key={spec.radius} rotation={rotation} position={[0, bob, 0]}>
          <sphereGeometry args={[spec.radius, 96, 96]} />
          <shaderMaterial
            vertexShader={CORONA_VERT}
            fragmentShader={CORONA_FRAG}
            uniforms={{
              uTime: surfaceUniforms.uTime,
              uPhase: {value: spec.phase},
              uAmp: {value: spec.amp},
              uAlpha: {value: spec.alpha},
              uFlare: flareColor,
              uCorona: coronaAmount,
            }}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      ))}
    </group>
  );
};

export const LabOrb: React.FC<{width: number; height: number; moodValue: number; cameraZ?: number}> = ({
  width,
  height,
  moodValue,
  cameraZ = 4.6,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const simTime = (frame / fps) * defaultParams.speed;

  return (
    <ThreeCanvas
      width={width}
      height={height}
      camera={{fov: 35, near: 0.1, far: 20, position: [0, 0, cameraZ]}}
      style={{background: 'transparent'}}
      gl={{alpha: true, antialias: true}}
    >
      <LabScene simTime={simTime} moodValue={moodValue} />
    </ThreeCanvas>
  );
};

import {useMemo} from 'react';
import * as THREE from 'three';
import {ThreeCanvas} from '@remotion/three';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {orbVertex, orbFragment, glowVertex, glowFragment} from './orbShaders';

/* Port of IridescentOrb from Nuvolari src/components/Globe.tsx.
   The app drives uTime/rotation from THREE's wall clock in useFrame; here the
   same equations are driven by Remotion's frame so every render is identical:
     uTime         = elapsed
     rotation.y   += delta * 0.12          → elapsed * 0.12
     rotation.x    = sin(elapsed * 0.15) * 0.06
   Hover is interactive-only, pinned to 0. */
const IridescentOrb: React.FC<{elapsed: number}> = ({elapsed}) => {
  const orbUniforms = useMemo(
    () => ({
      uTime: {value: 0},
      uHover: {value: 0},
    }),
    []
  );
  orbUniforms.uTime.value = elapsed;

  return (
    <group>
      {/* Halo shell */}
      <mesh scale={1.28}>
        <sphereGeometry args={[1.45, 64, 64]} />
        <shaderMaterial
          vertexShader={glowVertex}
          fragmentShader={glowFragment}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* The orb */}
      <mesh rotation={[Math.sin(elapsed * 0.15) * 0.06, elapsed * 0.12, 0]}>
        <sphereGeometry args={[1.45, 128, 128]} />
        <shaderMaterial
          uniforms={orbUniforms}
          vertexShader={orbVertex}
          fragmentShader={orbFragment}
        />
      </mesh>
    </group>
  );
};

export const Orb: React.FC<{width: number; height: number}> = ({width, height}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const elapsed = frame / fps;

  return (
    <ThreeCanvas
      width={width}
      height={height}
      camera={{position: [0, 0, 4.2], fov: 40}}
      style={{background: 'transparent'}}
      gl={{alpha: true, antialias: true}}
    >
      <IridescentOrb elapsed={elapsed} />
    </ThreeCanvas>
  );
};

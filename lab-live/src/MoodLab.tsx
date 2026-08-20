import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { HalftoneDots } from "@paper-design/shaders-react";
import { SurfacedInsight } from "./SurfacedInsight";
import { moodInsights, type Insight } from "./data";

/*
 * The mood stage, live on the case-study page. Shaders, palettes, arc
 * geometry, drag physics and the insight machine are extracted verbatim
 * from Nuvolari_Proto_Build/src/components/OrbLab.tsx — this is the real
 * product surface, not a recreation. Adapted for tile duty only:
 * container-sized instead of fullscreen, no flows/wallet/dock chrome,
 * the machine sleeps until the tile scrolls into view, and Execute
 * retires the card (there is no flow modal to open here).
 */

const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm(vec3 p) {
  float f = 0.0;
  f += 0.5333 * snoise(p);
  f += 0.2667 * snoise(p * 2.02);
  f += 0.1333 * snoise(p * 4.05);
  f += 0.0667 * snoise(p * 8.1);
  return f;
}
`;

const SURFACE_VERT = /* glsl */ `
varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vViewDir;
void main() {
  // a perfect glass sphere — all the gaseous motion lives in the shading
  vPos = position;
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewDir = normalize(-mvPosition.xyz);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const SURFACE_FRAG = /* glsl */ `
uniform float uTime;
uniform float uScale;
uniform float uSoft;
uniform float uBlur;
uniform float uVeinAmp;
uniform float uRimAmp;
uniform vec3 uW; // degen / balanced / saver shares
uniform vec3 uDeepD; uniform vec3 uMidD; uniform vec3 uBrightD; uniform vec3 uVeinD;
uniform vec3 uDeepB; uniform vec3 uMidB; uniform vec3 uBrightB; uniform vec3 uVeinB;
uniform vec3 uDeepS; uniform vec3 uMidS; uniform vec3 uBrightS; uniform vec3 uVeinS;
uniform vec3 uRim;
varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vViewDir;
${NOISE_GLSL}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewDir);
  float t = uTime;

  // domain-warped flow at a large, cloudy scale
  vec3 p = vPos * uScale;
  vec3 warp = vec3(
    fbm(p + vec3(t * 0.05, 0.0, -t * 0.03)),
    fbm(p + vec3(-t * 0.04, t * 0.025, 7.3)),
    fbm(p + vec3(3.1, -t * 0.03, t * 0.04))
  );
  float flow = fbm(p * 1.25 + warp * 1.3);
  float haze = fbm(p * 2.1 + warp * 1.5 + vec3(0.0, t * 0.08, 0.0));

  // ---- mood territories --------------------------------------------
  // amber gathers on one side, green on the other (like the artwork),
  // with an organic drifting frontier; region sizes follow the shares
  float s = clamp(0.5 + 0.30 * vPos.x + 0.26 * snoise(vPos * 0.9 + warp * 0.8), 0.0, 1.0);
  // keep the field clear of the thresholds' soft edges so a 100% share
  // paints the entire sphere
  s = 0.15 + 0.70 * s;
  float e = 0.11 + 0.22 * uBlur;
  float t1 = uW.x;
  float t2 = uW.x + uW.y;
  float wD = 1.0 - smoothstep(t1 - e, t1 + e, s);
  float wS = smoothstep(t2 - e, t2 + e, s);
  float wB = clamp(1.0 - wD - wS, 0.0, 1.0);

  vec3 deep = uDeepD * wD + uDeepB * wB + uDeepS * wS;
  vec3 mid = uMidD * wD + uMidB * wB + uMidS * wS;
  vec3 bright = uBrightD * wD + uBrightB * wB + uBrightS * wS;
  vec3 veinCol = uVeinD * wD + uVeinB * wB + uVeinS * wS;

  // broad body shading — soft edges, no hard patches; blur melts the
  // features into one another
  float damp = 1.0 - 0.55 * uBlur;
  float band = smoothstep(-1.0, 1.0, flow * damp);
  vec3 col = mix(deep, mid, band);
  col = mix(col, bright, smoothstep(0.25, 1.15 + 0.5 * uBlur, flow * damp + haze * 0.4 * damp) * 0.85);

  // wide luminous currents
  float ridge = 1.0 - abs(snoise(p * 1.15 + warp * 1.1 + vec3(0.0, t * 0.05, 0.0)));
  float veinPow = mix(mix(5.0, 1.4, uSoft), 1.0, uBlur * 0.8);
  float vein = pow(max(ridge, 0.0), veinPow);
  float pulse = 0.8 + 0.2 * sin(t * 0.9 + flow * 5.0);
  col += veinCol * vein * pulse * uVeinAmp * 0.6;

  // key light + soft fill
  vec3 lightDir = normalize(vec3(-0.55, 0.75, 0.6));
  float diff = max(dot(n, lightDir), 0.0);
  col *= 0.45 + diff * 0.8;

  // broad sheen, not a tight specular point
  vec3 halfDir = normalize(lightDir + v);
  col += pow(max(dot(n, halfDir), 0.0), 24.0) * 0.22;

  // atmosphere rim — the cut-out-of-the-sky edge
  float fresnel = pow(1.0 - max(dot(n, v), 0.0), 2.4);
  col += fresnel * uRim * uRimAmp;

  // stipple grain, matching the brand artwork
  col += (hash(gl_FragCoord.xy + fract(uTime) * 100.0) - 0.5) * 0.10;

  gl_FragColor = vec4(col, 1.0);
}
`;

const CORONA_VERT = /* glsl */ `
uniform float uTime;
uniform float uPhase;
uniform float uAmp;
varying float vLick;
varying vec3 vNormal;
varying vec3 vViewDir;
${NOISE_GLSL}
void main() {
  float lick = snoise(normalize(position) * 1.5 + vec3(uPhase, uTime * 0.07 + uPhase, uTime * 0.03));
  lick = max(lick, 0.0);
  vLick = lick;
  vec3 displaced = position * (1.0 + lick * uAmp);
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  vViewDir = normalize(-mvPosition.xyz);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const CORONA_FRAG = /* glsl */ `
uniform vec3 uFlare;
uniform float uCorona;
uniform float uAlpha;
varying float vLick;
varying vec3 vNormal;
varying vec3 vViewDir;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewDir);
  float rim = pow(1.0 - abs(dot(n, v)), 3.0);
  float veil = smoothstep(0.05, 0.85, vLick);
  float a = rim * (0.08 + veil * 0.3) * uCorona * uAlpha;
  gl_FragColor = vec4(uFlare, a);
}
`;

type Palette = {
  deep: string;
  mid: string;
  bright: string;
  vein: string;
  rim: string;
  flare: string;
  bgStops: [string, string, string, string];
  label: string;
  color: string;
};

const moods: Palette[] = [
  {
    // degen — sharp burnt amber, not crimson
    deep: "#1c1009",
    mid: "#8a4a1c",
    bright: "#f5b054",
    vein: "#f78d33",
    rim: "#ffc073",
    flare: "#f9a24a",
    bgStops: ["#ffe9cf", "#f8bd85", "#e88d55", "#b8623a"],
    label: "Degen",
    color: "#b4592a",
  },
  {
    // balanced — composed blue
    deep: "#0a1a2e",
    mid: "#1e4a74",
    bright: "#7fc4e8",
    vein: "#4fa8e0",
    rim: "#9fd4ec",
    flare: "#6fb4e6",
    bgStops: ["#e9f3fc", "#b7d9f0", "#7fb0dc", "#5583ba"],
    label: "Balanced",
    color: "#2e5f96",
  },
  {
    // saver — green and chill
    deep: "#0a1f18",
    mid: "#1e5c46",
    bright: "#8fd8ae",
    vein: "#4fc08a",
    rim: "#b2e6c8",
    flare: "#6fcf9a",
    bgStops: ["#e8f9ee", "#b9e6c8", "#83d0a2", "#54a97a"],
    label: "Saver",
    color: "#1e6b47",
  },
];

/**
 * The portfolio mixes served at each slider pole — the same numbers the
 * index page shows. Even fully degen keeps some balance.
 * Order: [degen, balanced, saver].
 */
const mixAnchors: [number, number, number][] = [
  [58, 22, 8], // slider at degen
  [10, 46, 24], // slider at balanced
  [6, 25, 61], // slider at saver
];

/** slider position (0 = degen … 1 = saver) → raw mix, index-style numbers */
function mixFor(v: number): [number, number, number] {
  const lerp = (a: [number, number, number], b: [number, number, number], t: number) =>
    a.map((x, i) => x + (b[i] - x) * t) as [number, number, number];
  return v < 0.5
    ? lerp(mixAnchors[0], mixAnchors[1], v / 0.5)
    : lerp(mixAnchors[1], mixAnchors[2], (v - 0.5) / 0.5);
}

/** normalized shares for the shader */
function weightsFor(v: number): [number, number, number] {
  const m = mixFor(v);
  const sum = m[0] + m[1] + m[2];
  return [m[0] / sum, m[1] / sum, m[2] / sum];
}

// Andy's tuned settings, 2026-07-18
const defaultParams = {
  scale: 0.22,
  soft: 0.75,
  blur: 0.54,
  vein: 1.49,
  speed: 0.18,
  rim: 0.79,
  corona: 0,
};

/**
 * Draw the full briefing queue for a slider position: every insight from
 * all three books, interleaved in proportion to the current mix (largest-
 * remainder), so a 58/22/8 book leads with degen ideas but still slips in
 * the balanced ones. `rotation` shifts each book's order so consecutive
 * refreshes lead with different cards.
 */
function queueFor(value: number, rotation: number): Insight[] {
  const w = weightsFor(value);
  const pools = [
    [...moodInsights.degen],
    [...moodInsights.balanced],
    [...moodInsights.saver],
  ];
  for (const list of pools) {
    const r = rotation % list.length;
    list.push(...list.splice(0, r));
  }
  const credit = [0, 0, 0];
  const out: Insight[] = [];
  const total = pools.reduce((n, p) => n + p.length, 0);
  while (out.length < total) {
    let pick = -1;
    for (let i = 0; i < 3; i++) {
      if (!pools[i].length) continue;
      credit[i] += w[i];
      if (pick === -1 || credit[i] > credit[pick]) pick = i;
    }
    credit[pick] -= 1;
    out.push(pools[pick].shift()!);
  }
  return out;
}

/** a number that glides to its target, so the counters visibly count */
function AnimatedNumber({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const shownRef = useRef(value);
  shownRef.current = shown;
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const diff = value - shownRef.current;
      if (Math.abs(diff) < 0.6) {
        setShown(value);
        return;
      }
      setShown(shownRef.current + diff * 0.18);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{Math.round(shown)}</>;
}

const c3 = (hex: string) => new THREE.Color(hex);
const blend3 = (out: THREE.Color, colors: THREE.Color[], w: [number, number, number]) => {
  out.setRGB(
    colors[0].r * w[0] + colors[1].r * w[1] + colors[2].r * w[2],
    colors[0].g * w[0] + colors[1].g * w[1] + colors[2].g * w[2],
    colors[0].b * w[0] + colors[1].b * w[1] + colors[2].b * w[2]
  );
  return out;
};
const css = (c: THREE.Color) => `#${c.getHexString()}`;

export default function MoodLab({ bg }: { bg: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  const [moodValue, setMoodValue] = useState(0.9);
  const [pressed, setPressed] = useState(false);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const valueRef = useRef(moodValue);
  valueRef.current = moodValue;
  const paramsRef = useRef(defaultParams);
  const dragRef = useRef<{ startY: number; startV: number } | null>(null);
  const [inView, setInView] = useState(false);
  // continuous visibility — the render loop and the machine sleep while
  // the tile is scrolled away, unlike the always-on fullscreen app
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  visibleRef.current = visible;
  // the drag hint retires on first touch of the arc
  const [touched, setTouched] = useState(false);

  // the container plays the role the window plays in the app
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const measure = () => setDims({ w: root.clientWidth, h: root.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  // wake when the tile scrolls into view, and glide saver → balanced once
  // so the re-light introduces itself before the reader ever touches it
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let t = 0;
    const hello = new IntersectionObserver(
      (entries, obs) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setInView(true);
        t = window.setTimeout(() => setMoodValue(0.5), 900);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );
    hello.observe(root);
    const watch = new IntersectionObserver(
      (entries) => setVisible(entries.some((e) => e.isIntersecting)),
      { threshold: 0.05 }
    );
    watch.observe(root);
    return () => {
      hello.disconnect();
      watch.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  // the slider only answers near its arc: within 100px either side of the
  // track and 50px past its ends — elsewhere the cursor is just a cursor
  const [nearArc, setNearArc] = useState(false);
  const local = (e: React.PointerEvent | React.WheelEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const isNearArc = (x: number, y: number) => {
    const dx = x - dims.w / 2;
    const dy = y - dims.h / 2;
    const arcR = dims.h * 0.47;
    if (Math.abs(Math.hypot(dx, dy) - arcR) > 100) return false;
    // angle from the top, positive to the right — matches the arc's at()
    const theta = Math.atan2(dx, -dy);
    const pad = 50 / arcR;
    return theta >= (65 * Math.PI) / 180 - pad && theta <= (115 * Math.PI) / 180 + pad;
  };

  const onStagePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button, input, [data-ui]")) return;
    const p = local(e);
    if (!isNearArc(p.x, p.y)) return;
    dragRef.current = { startY: e.clientY, startV: valueRef.current };
    setPressed(true);
    setTouched(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onStagePointerMove = (e: React.PointerEvent) => {
    const p = local(e);
    setNearArc(isNearArc(p.x, p.y));
    const drag = dragRef.current;
    if (!drag) return;
    const dv = (e.clientY - drag.startY) / (dims.h * 0.55);
    setMoodValue(Math.min(1, Math.max(0, drag.startV + dv)));
  };
  const onStagePointerUp = () => {
    dragRef.current = null;
    setPressed(false);
  };
  const onStageWheel = (e: React.WheelEvent) => {
    if ((e.target as HTMLElement).closest("[data-ui]")) return;
    const p = local(e);
    if (!isNearArc(p.x, p.y)) return;
    setTouched(true);
    setMoodValue((v) => Math.min(1, Math.max(0, v + e.deltaY * 0.00045)));
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      mount.clientWidth / mount.clientHeight,
      0.1,
      20
    );
    camera.position.z = 4.6;

    const P = moods.map((m) => ({
      deep: c3(m.deep),
      mid: c3(m.mid),
      bright: c3(m.bright),
      vein: c3(m.vein),
      rim: c3(m.rim),
      flare: c3(m.flare),
      bgStops: m.bgStops.map(c3),
    }));

    const w0 = weightsFor(valueRef.current);
    const surfaceUniforms = {
      uTime: { value: 0 },
      uScale: { value: paramsRef.current.scale },
      uSoft: { value: paramsRef.current.soft },
      uBlur: { value: paramsRef.current.blur },
      uVeinAmp: { value: paramsRef.current.vein },
      uRimAmp: { value: paramsRef.current.rim },
      uW: { value: new THREE.Vector3(...w0) },
      uDeepD: { value: P[0].deep }, uMidD: { value: P[0].mid }, uBrightD: { value: P[0].bright }, uVeinD: { value: P[0].vein },
      uDeepB: { value: P[1].deep }, uMidB: { value: P[1].mid }, uBrightB: { value: P[1].bright }, uVeinB: { value: P[1].vein },
      uDeepS: { value: P[2].deep }, uMidS: { value: P[2].mid }, uBrightS: { value: P[2].bright }, uVeinS: { value: P[2].vein },
      uRim: { value: blend3(new THREE.Color(), P.map((p) => p.rim), w0) },
    };
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(1, 128, 128),
      new THREE.ShaderMaterial({
        vertexShader: SURFACE_VERT,
        fragmentShader: SURFACE_FRAG,
        uniforms: surfaceUniforms,
      })
    );
    scene.add(orb);

    // dark circular plate — the orb's own little world, cut out of the
    // scene, with a soft light-to-dark gradient falling through the hole
    const plateUniforms = {
      uTop: { value: new THREE.Color() },
      uBottom: { value: new THREE.Color() },
    };
    const plateMat = new THREE.ShaderMaterial({
      uniforms: plateUniforms,
      vertexShader: /* glsl */ `
        varying vec2 vXY;
        void main() {
          vXY = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTop;
        uniform vec3 uBottom;
        varying vec2 vXY;
        void main() {
          // lit from the key light's corner, falling away below
          float g = clamp(0.5 + (vXY.y - vXY.x * 0.35) / 2.6, 0.0, 1.0);
          vec3 col = mix(uBottom, uTop, g);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const plate = new THREE.Mesh(new THREE.CircleGeometry(1.22, 128), plateMat);
    plate.position.z = -0.3;
    scene.add(plate);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const ring = new THREE.Mesh(new THREE.CircleGeometry(1.26, 128), ringMat);
    ring.position.z = -0.32;
    scene.add(ring);

    // three faint staggered veils read as one blurred gaseous corona
    const flareColor = { value: new THREE.Color() };
    const coronaAmount = { value: paramsRef.current.corona };
    const veilSpecs = [
      { radius: 1.04, phase: 0.0, amp: 0.1, alpha: 0.45 },
      { radius: 1.09, phase: 2.7, amp: 0.14, alpha: 0.3 },
      { radius: 1.15, phase: 5.1, amp: 0.18, alpha: 0.2 },
    ];
    const veils = veilSpecs.map((spec) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(spec.radius, 96, 96),
        new THREE.ShaderMaterial({
          vertexShader: CORONA_VERT,
          fragmentShader: CORONA_FRAG,
          uniforms: {
            uTime: surfaceUniforms.uTime,
            uPhase: { value: spec.phase },
            uAmp: { value: spec.amp },
            uAlpha: { value: spec.alpha },
            uFlare: flareColor,
            uCorona: coronaAmount,
          },
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        })
      );
      scene.add(mesh);
      return mesh;
    });

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const clampT = (v: number) => Math.min(0.75, Math.max(-0.75, v));
    const onPointer = (e: PointerEvent) => {
      // parallax relative to the tile, gently clamped so a far-away
      // cursor doesn't wrench the orb around
      const r = mount.getBoundingClientRect();
      target.x = clampT((e.clientX - r.left) / r.width - 0.5);
      target.y = clampT((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("pointermove", onPointer);

    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    ro.observe(mount);

    // scratch colors for per-frame blending
    const scratch = new THREE.Color();
    const bgScratch = [new THREE.Color(), new THREE.Color(), new THREE.Color(), new THREE.Color()];
    let easedValue = valueRef.current;

    const clock = new THREE.Clock();
    let simTime = 0;
    let raf = 0;
    const tick = () => {
      // sleep offscreen — the reader's GPU is not ours to burn
      if (!visibleRef.current) {
        clock.getDelta();
        raf = requestAnimationFrame(tick);
        return;
      }
      const delta = Math.min(clock.getDelta(), 0.1);
      const prm = paramsRef.current;
      simTime += delta * prm.speed;

      // the slider eases in, so the frontier glides across the orb
      easedValue += (valueRef.current - easedValue) * 0.05;
      const w = weightsFor(easedValue);

      surfaceUniforms.uW.value.set(w[0], w[1], w[2]);
      blend3(surfaceUniforms.uRim.value, P.map((p) => p.rim), w);
      blend3(flareColor.value, P.map((p) => p.flare), w);
      blend3(scratch, P.map((p) => p.mid), w).multiplyScalar(1.05);
      plateUniforms.uTop.value.copy(scratch);
      blend3(scratch, P.map((p) => p.deep), w).multiplyScalar(0.3);
      plateUniforms.uBottom.value.copy(scratch);
      blend3(scratch, P.map((p) => p.mid), w).multiplyScalar(0.5);
      ringMat.color.copy(scratch);

      // the room's fog follows the blend
      if (fogRef.current) {
        for (let i = 0; i < 4; i++) {
          blend3(bgScratch[i], P.map((p) => p.bgStops[i]), w);
        }
        fogRef.current.style.background = `radial-gradient(ellipse 85% 70% at 50% 40%, ${css(
          bgScratch[0]
        )} 0%, ${css(bgScratch[1])} 48%, ${css(bgScratch[2])} 80%, ${css(bgScratch[3])} 100%)`;
      }

      surfaceUniforms.uTime.value = simTime;
      coronaAmount.value = prm.corona;

      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;
      orb.rotation.y = simTime * 0.07 + current.x * 0.6;
      orb.rotation.x = current.y * 0.4;
      const bob = Math.sin(simTime * 0.4) * 0.04;
      orb.position.y = bob;
      plate.position.y = bob;
      ring.position.y = bob;
      for (const veil of veils) {
        veil.rotation.copy(orb.rotation);
        veil.position.y = bob;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      orb.geometry.dispose();
      (orb.material as THREE.Material).dispose();
      plate.geometry.dispose();
      plateMat.dispose();
      ring.geometry.dispose();
      ringMat.dispose();
      for (const veil of veils) {
        veil.geometry.dispose();
        (veil.material as THREE.Material).dispose();
      }
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const pct = useMemo(() => mixFor(moodValue).map(Math.round), [moodValue]);

  // ---- the insight machine ---------------------------------------------
  // Any settled movement of the slider re-briefs the agents: the stack
  // dissolves and a fresh queue is drawn from the NEW mix — insights from
  // all three books, interleaved in proportion to the current weights.
  const [stack, setStack] = useState<Insight[]>([]);
  const [queue, setQueue] = useState<Insight[]>([]);
  const [dissolving, setDissolving] = useState(false);
  const [refreshTick, setRefreshTick] = useState(0);
  const dismissedRef = useRef<Set<string>>(new Set());
  const rotationRef = useRef(0);
  const lastRefreshRef = useRef<number | null>(null);

  // the machine sleeps until the tile has arrived, and again offscreen
  const machineHeld = !inView || !visible;

  useEffect(() => {
    if (machineHeld) return;
    const first = lastRefreshRef.current === null;
    if (!first && Math.abs(moodValue - lastRefreshRef.current!) < 0.005) return;
    // wait for the hand to settle, then dissolve and re-draw
    const settle = window.setTimeout(() => {
      lastRefreshRef.current = moodValue;
      dismissedRef.current = new Set();
      setDissolving(true);
      window.setTimeout(() => {
        setQueue(queueFor(moodValue, rotationRef.current++));
        setStack([]);
        setRefreshTick((k) => k + 1);
        setDissolving(false);
      }, first ? 0 : 650);
    }, first ? 0 : 420);
    return () => window.clearTimeout(settle);
  }, [moodValue, machineHeld]);

  // surface the next queued insight every few seconds — strictly one at a
  // time, each new card settling in before the next rises (three fit the tile)
  useEffect(() => {
    if (dissolving || machineHeld || queue.length === 0) return;
    const surface = () => {
      setStack((prev) => {
        if (prev.length >= 3) return prev;
        const next = queue.find(
          (i) => !prev.some((p) => p.id === i.id) && !dismissedRef.current.has(i.id)
        );
        return next ? [...prev, next] : prev;
      });
    };
    let t = 0;
    const loop = (delay: number) => {
      t = window.setTimeout(() => {
        surface();
        loop(3600);
      }, delay);
    };
    loop(900);
    return () => window.clearTimeout(t);
  }, [queue, dissolving, machineHeld]);

  // arc slider geometry — hugs the orb's right silhouette
  const cx = dims.w / 2;
  const cy = dims.h / 2;
  const R = dims.h * 0.47;
  const A0 = (65 * Math.PI) / 180;
  const A1 = (115 * Math.PI) / 180;
  const at = (a: number) => ({ x: cx + R * Math.sin(a), y: cy - R * Math.cos(a) });
  const arcTop = at(A0);
  const arcBottom = at(A1);
  const thumb = at(A0 + (A1 - A0) * moodValue);
  // the grip cap sits across the track, long axis radial — this is the
  // screen angle of that radial direction at the thumb
  const thumbA = A0 + (A1 - A0) * moodValue;
  const thumbDeg = (Math.atan2(-Math.cos(thumbA), Math.sin(thumbA)) * 180) / Math.PI;
  const dominant = pct.indexOf(Math.max(...pct));

  return (
    <div
      ref={rootRef}
      className="lab-live-frame select-none"
      style={{
        background: "#aebdd8",
        cursor: pressed ? "grabbing" : nearArc ? "ns-resize" : "default",
        touchAction: "pan-y",
      }}
      onPointerDown={onStagePointerDown}
      onPointerMove={onStagePointerMove}
      onPointerUp={onStagePointerUp}
      onPointerCancel={onStagePointerUp}
      onWheel={onStageWheel}
    >
      {/* the world: scene artwork alive through the halftone shader,
          sat back so the orb takes the spotlight */}
      <HalftoneDots
        image={bg}
        originalColors
        colorBack="#00000000"
        type="classic"
        grid="square"
        size={0.017}
        radius={1.2}
        contrast={0.58}
        speed={0.25}
        fit="cover"
        grainMixer={0.15}
        grainSize={0.3}
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.85 }}
      />
      {/* mood fog — a coloured atmosphere over the art, thick enough that
          the room visibly re-lights with the slider */}
      <div ref={fogRef} className="absolute inset-0" style={{ opacity: 0.44 }} />
      {/* the room recedes: a whisper of vignette, no more */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 62% 55% at 50% 46%, rgba(10,14,20,0.04) 0%, rgba(10,14,20,0.1) 62%, rgba(8,11,16,0.2) 100%)",
        }}
      />
      {/* top-down stage light across the whole scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 26%, rgba(255,255,255,0) 52%, rgba(6,9,14,0.08) 100%)",
        }}
      />

      <div ref={mountRef} className="absolute inset-0" />

      {/* film grain over the whole stage */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      {/* mood arc — hugs the orb; slide anywhere up/down to move it */}
      <svg
        className="pointer-events-none absolute inset-0"
        width={dims.w}
        height={dims.h}
        viewBox={`0 0 ${dims.w} ${dims.h}`}
        fill="none"
      >
        <defs>
          <linearGradient
            id="moodarcgrad"
            gradientUnits="userSpaceOnUse"
            x1={arcTop.x}
            y1={arcTop.y}
            x2={arcBottom.x}
            y2={arcBottom.y}
          >
            <stop offset="0" stopColor={moods[0].vein} />
            <stop offset="0.5" stopColor={moods[1].vein} />
            <stop offset="1" stopColor={moods[2].vein} />
          </linearGradient>
          <filter id="moodarcglow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        {/* graduations — fewer and confident: crisp ink ticks outside the
            tube, poles longer, waking slightly as the cap passes */}
        {Array.from({ length: 13 }, (_, i) => {
          const t = i / 12;
          const a = A0 + (A1 - A0) * t;
          const major = i % 6 === 0;
          const u = { x: Math.sin(a), y: -Math.cos(a) };
          const r0 = R + 12;
          const r1 = r0 + (major ? 10 : 6);
          const near = Math.max(0, 1 - Math.abs(t - moodValue) / 0.16);
          return (
            <line
              key={i}
              x1={cx + u.x * r0}
              y1={cy + u.y * r0}
              x2={cx + u.x * r1}
              y2={cy + u.y * r1}
              stroke={`rgba(16,20,28,${0.4 + 0.3 * near})`}
              strokeWidth={major ? 1.6 : 1.2}
              strokeLinecap="round"
            />
          );
        })}
        {/* the glass tube — a recessed channel with a shadow lip on the
            orb side and a light lip outside, wide enough to hold liquid */}
        <path
          d={`M ${arcTop.x} ${arcTop.y} A ${R} ${R} 0 0 1 ${arcBottom.x} ${arcBottom.y}`}
          stroke="rgba(5,21,46,0.72)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d={`M ${arcTop.x - 1} ${arcTop.y - 1} A ${R} ${R} 0 0 1 ${arcBottom.x - 1} ${arcBottom.y - 1}`}
          stroke="rgb(5,8,23)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d={`M ${arcTop.x + 1.4} ${arcTop.y + 0.7}
              A ${R} ${R} 0 0 1 ${arcBottom.x + 1.4} ${arcBottom.y + 0.7}`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* liquid light inside the tube — clean saturated body over the
            dark channel, hot vein burning around the cap */}
        <path
          d={`M ${arcTop.x} ${arcTop.y} A ${R} ${R} 0 0 1 ${arcBottom.x} ${arcBottom.y}`}
          stroke="url(#moodarcgrad)"
          strokeWidth="4.5"
          strokeOpacity="0.95"
          strokeLinecap="round"
        />
        <path
          d={`M ${arcTop.x} ${arcTop.y} A ${R} ${R} 0 0 1 ${arcBottom.x} ${arcBottom.y}`}
          stroke="url(#moodarcgrad)"
          strokeWidth="2.4"
          strokeOpacity="1"
          strokeLinecap="round"
        />
        {/* the liquid burns brightest around the cap and softens away */}
        {(() => {
          const a = A0 + (A1 - A0) * moodValue;
          const s = Math.max(A0, a - 0.17);
          const e = Math.min(A1, a + 0.17);
          const p0 = at(s);
          const p1 = at(e);
          return (
            <path
              d={`M ${p0.x} ${p0.y} A ${R} ${R} 0 0 1 ${p1.x} ${p1.y}`}
              stroke="url(#moodarcgrad)"
              strokeWidth="10"
              strokeOpacity="0.65"
              strokeLinecap="round"
              filter="url(#moodarcglow)"
            />
          );
        })()}
      </svg>

      {/* arc labels — glass pill chips that duck away from the thumb */}
      <div
        className="pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]"
        style={{
          left: arcTop.x + 24,
          top: arcTop.y - 36,
          opacity: Math.hypot(thumb.x - arcTop.x, thumb.y - arcTop.y) < 80 ? 0 : 1,
          transition: "opacity 300ms ease",
        }}
      >
        Degen <AnimatedNumber value={pct[0]} />%
      </div>
      <div
        className="pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]"
        style={{
          left: arcBottom.x + 24,
          top: arcBottom.y + 10,
          opacity: Math.hypot(thumb.x - arcBottom.x, thumb.y - arcBottom.y) < 80 ? 0 : 1,
          transition: "opacity 300ms ease",
        }}
      >
        Saver <AnimatedNumber value={pct[2]} />%
      </div>
      {(() => {
        const mid = at((A0 + A1) / 2);
        return (
          <div
            className="pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]"
            style={{
              left: mid.x + 44,
              top: mid.y,
              transform: "translateY(-50%)",
              opacity: Math.hypot(thumb.x - mid.x, thumb.y - mid.y) < 80 ? 0 : 1,
              transition: "opacity 300ms ease",
            }}
          >
            Balanced <AnimatedNumber value={pct[1]} />%
          </div>
        );
      })()}

      {/* thumb — a clear glass lens over the tube: light bends through it,
          the mood colour burns in its core, one faint refraction line */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: thumb.x,
          top: thumb.y,
          transform: `translate(-50%, -50%) rotate(${thumbDeg}deg) scale(${pressed ? 0.94 : 1})`,
          transition: "transform 140ms ease",
        }}
      >
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: 38,
            height: 20,
            // clear glass lens cap — the world brightens through it
            background: "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.1) 55%, rgba(255,255,255,0.2) 100%)",
            backdropFilter: "blur(3px) brightness(1.1)",
            WebkitBackdropFilter: "blur(3px) brightness(1.1)",
            border: "1px solid rgba(255,255,255,0.4)",
            boxShadow: pressed
              ? `inset 0 2px 6px rgba(8,10,16,0.35), 0 0 18px ${moods[dominant].vein}88, 0 2px 8px rgba(10,14,20,0.35)`
              : `inset 0 1px 2px rgba(255,255,255,0.65), inset 0 -2px 5px rgba(8,11,18,0.18), 0 3px 10px rgba(10,14,20,0.35), 0 0 20px ${moods[dominant].vein}66`,
            transition: "box-shadow 140ms ease",
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] font-medium uppercase leading-3 tracking-[0.18em] shadow-[0_2px_8px_rgba(10,14,20,0.1)]"
        style={{
          left: thumb.x + 45,
          top: thumb.y,
          transform: "translateY(-50%)",
          color: moods[dominant].color,
          textShadow: "0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        {moods[dominant].label} <AnimatedNumber value={pct[dominant]} />%
      </div>

      {/* the invitation — retires forever on first touch */}
      {!touched && (
        <div
          className="mood-hint pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]"
          style={{
            left: thumb.x + 45,
            top: thumb.y + 26,
            opacity: inView ? undefined : 0,
          }}
        >
          Drag — the room re-lights
        </div>
      )}

      {/* surfaced insights — written out by the machine inside the orb */}
      <div data-ui className="absolute left-1/2 top-[24%] z-10 -translate-x-1/2">
        {stack.map((insight, i) => (
          <SurfacedInsight
            key={`${refreshTick}-${insight.id}`}
            insight={insight}
            slot={i}
            dissolving={dissolving}
            onDismiss={() => {
              dismissedRef.current.add(insight.id);
              setStack((prev) => prev.filter((p) => p.id !== insight.id));
            }}
            onExecute={() => {
              // no flow modals on the tile — an executed idea simply retires
              dismissedRef.current.add(insight.id);
              setStack((prev) => prev.filter((p) => p.id !== insight.id));
            }}
          />
        ))}
      </div>
    </div>
  );
}

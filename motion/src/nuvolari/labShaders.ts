/* Copied verbatim from Nuvolari_Proto_Build src/components/OrbLab.tsx —
   do not edit here; re-copy if the lab's orb changes. */

export const NOISE_GLSL = /* glsl */ `
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

export const SURFACE_VERT = /* glsl */ `
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

export const SURFACE_FRAG = /* glsl */ `
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
  float s = clamp(0.5 + 0.30 * vPos.x + 0.26 * snoise(vPos * 0.9 + warp * 0.8), 0.0, 1.0);
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

export const CORONA_VERT = /* glsl */ `
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

export const CORONA_FRAG = /* glsl */ `
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

export const PLATE_VERT = /* glsl */ `
varying vec2 vXY;
void main() {
  vXY = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const PLATE_FRAG = /* glsl */ `
uniform vec3 uTop;
uniform vec3 uBottom;
varying vec2 vXY;
void main() {
  // lit from the key light's corner, falling away below
  float g = clamp(0.5 + (vXY.y - vXY.x * 0.35) / 2.6, 0.0, 1.0);
  vec3 col = mix(uBottom, uTop, g);
  gl_FragColor = vec4(col, 1.0);
}
`;

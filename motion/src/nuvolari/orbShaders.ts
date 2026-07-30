/* Copied verbatim from Nuvolari src/components/Globe.tsx — do not edit here;
   if the app's orb changes, re-copy so the portfolio footage stays exact. */

/* Simplex noise (Ashima / Ian McEwan, public domain) shared by the orb shaders */
const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
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
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
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
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
  float f = 0.0;
  f += 0.5000 * snoise(p);
  f += 0.2500 * snoise(p * 2.02);
  f += 0.1250 * snoise(p * 4.05);
  f += 0.0625 * snoise(p * 8.1);
  return f;
}
`;

export const orbVertex = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObjectPos;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vObjectPos = position;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

export const orbFragment = /* glsl */ `
uniform float uTime;
uniform float uHover;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObjectPos;

${NOISE_GLSL}

/* cosine palette — thin-film interference feel */
vec3 filmPalette(float t) {
  vec3 a = vec3(0.16, 0.22, 0.28);
  vec3 b = vec3(0.22, 0.28, 0.25);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.05, 0.38, 0.65);
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.2);

  /* slow domain-warped flow over the sphere surface */
  vec3 p = normalize(vObjectPos);
  float t = uTime * 0.05;
  vec3 warp = vec3(
    fbm(p * 1.6 + vec3(t, 0.0, -t)),
    fbm(p * 1.6 + vec3(-t * 0.7, t * 0.4, 7.3)),
    fbm(p * 1.6 + vec3(3.1, -t * 0.5, t * 0.6))
  );
  float flow = fbm(p * 2.2 + warp * 1.2);
  float swirl = fbm(p * 4.5 + warp * 2.0 + vec3(0.0, t * 2.0, 0.0));

  /* deep ink base */
  vec3 base = vec3(0.030, 0.045, 0.085);

  /* iridescent slick patches */
  float slick = smoothstep(0.05, 0.65, flow + 0.35 * swirl);
  vec3 slickCol = filmPalette(flow * 0.9 + fresnel * 0.55 + swirl * 0.22);
  /* bias palette toward emerald/teal in the body, violet near poles */
  slickCol = mix(slickCol, vec3(0.05, 0.42, 0.30), smoothstep(0.2, 0.9, flow) * 0.55);
  slickCol = mix(slickCol, vec3(0.35, 0.28, 0.72), abs(p.y) * 0.35);

  vec3 col = mix(base, slickCol, slick * 0.85);

  /* key light — glossy blinn-phong */
  vec3 L = normalize(vec3(2.5, 2.2, 3.0));
  float diff = max(dot(N, L), 0.0);
  col *= 0.55 + 0.65 * diff;
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(N, H), 0.0), 90.0);
  float specTight = pow(max(dot(N, H), 0.0), 380.0);
  col += vec3(0.55, 0.70, 0.95) * spec * 0.55;
  col += vec3(1.0) * specTight * 0.9;

  /* warm counter-light glint (bottom-left) */
  vec3 L2 = normalize(vec3(-2.6, -1.2, 1.4));
  float glint = pow(max(dot(N, normalize(L2 + V)), 0.0), 60.0);
  col += vec3(0.95, 0.62, 0.38) * glint * 0.35;

  /* fresnel rims — cool violet with a warm kiss */
  col += vec3(0.42, 0.40, 0.85) * fresnel * 0.55;
  col += vec3(0.95, 0.66, 0.45) * pow(fresnel, 3.0) * 0.6;

  /* hover — the whole slick brightens slightly */
  col *= 1.0 + uHover * 0.18;

  gl_FragColor = vec4(col, 1.0);
}
`;

export const glowVertex = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

export const glowFragment = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  /* BackSide shell: glow strongest at the silhouette, fading outwards */
  float rim = pow(max(dot(N, V), 0.0), 2.6);
  vec3 col = mix(vec3(0.55, 0.50, 0.95), vec3(0.95, 0.65, 0.45), 0.35);
  gl_FragColor = vec4(col, rim * 0.35);
}
`;

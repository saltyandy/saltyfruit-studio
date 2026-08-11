/* WebGL effect layer — molten status rims + plasma strands.
   Composited with mix-blend-mode: screen over the mesh-gradient background. */

const VERT = `
attribute vec2 aP;
void main() { gl_Position = vec4(aP, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2  uRes;
uniform float uT;
uniform vec4  uCaps[4];   // xy = center, zw = half-size (pill)
uniform vec3  uCol[4];
uniform float uUrg[4];
uniform vec2  uA0; uniform vec2 uA1; uniform vec2 uA2; uniform vec2 uA3;   // strand A cubic
uniform vec2  uB0; uniform vec2 uB1; uniform vec2 uB2; uniform vec2 uB3;   // strand B cubic
uniform float uHovA;
uniform float uHovB;
uniform float uRevA;
uniform float uRevB;
uniform float uGlowM;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

vec2 bezp(vec2 A, vec2 B, vec2 C, vec2 D, float t) {
  float m = 1.0 - t;
  return m*m*m*A + 3.0*m*m*t*B + 3.0*m*t*t*C + t*t*t*D;
}

vec3 strand(vec2 p, vec2 A, vec2 B, vec2 C, vec2 D, float hovv, float seed, float rev) {
  float sd = 1e5, bt = 0.0;
  vec2 prev = A;
  for (int k = 1; k <= 28; k++) {
    float tt = float(k) / 28.0;
    vec2 cur = bezp(A, B, C, D, tt);
    vec2 pa = p - prev, ba = cur - prev;
    float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0.0, 1.0);
    float ds = length(pa - ba * h);
    if (ds < sd) { sd = ds; bt = (float(k - 1) + h) / 28.0; }
    prev = cur;
  }
  if (sd >= 120.0 || rev <= 0.001) return vec3(0.0);

  float endT = pow(max(sin(bt * 3.14159), 0.0), 0.7);               // tapers to a point at both ends
  float wob = (fbm(vec2(bt * 13.0 + seed, uT * 0.45)) - 0.5) * 2.4 * endT;
  float sdd = sd - (0.3 + 1.2 * endT) - wob - hovv * 1.6 * endT;

  float core  = exp(-sdd * sdd / mix(1.1, 3.5, endT));
  float shalo = exp(-max(sdd, 0.0) / mix(7.0, 16.0, hovv)) * 0.06 * (0.2 + 0.8 * endT);

  // plasma flowing toward the receiving agent — layered travelling noise
  float flow = pow(0.5 + 0.5 * sin(bt * 26.0 - uT * (2.2 + hovv * 3.2) + seed), 2.0) * 0.7
             + fbm(vec2(bt * 34.0 - uT * 2.6 + seed, uT * 0.6)) * 0.55;

  // droplets — bright packets swimming along
  float drops = 0.0;
  for (int j = 0; j < 3; j++) {
    float fj = float(j);
    float dp = fract(uT * (0.05 + fj * 0.021) + fj * 0.33 + seed * 0.17);
    drops += exp(-pow((bt - dp) * 26.0, 2.0));
  }

  float sI = (core * (0.16 + 0.38 * flow) + shalo) * (0.5 + 0.45 * hovv)
           + drops * core * (0.4 + 0.55 * hovv) * (0.3 + 0.7 * endT);

  // stroke reveal: visible where bt < rev, with a bright travelling tip at the front
  float m = 1.0 - smoothstep(rev - 0.04, rev + 0.01, bt);
  float tipI = exp(-pow((bt - rev) * 34.0, 2.0)) * (1.0 - step(0.999, rev));
  return (vec3(0.32, 0.83, 0.80) * sI + vec3(0.9, 1.0, 0.98) * drops * core * 0.14) * m
       + vec3(0.7, 1.0, 0.97) * tipI * core * 1.1;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec3 acc = vec3(0.0);

  /* ── molten capsule rims ── */
  for (int i = 0; i < 4; i++) {
    vec2 c  = uCaps[i].xy;
    vec2 hs = uCaps[i].zw;
    float d = sdRoundBox(p - c, hs, hs.y);
    if (d > 130.0 || d < -20.0) continue;
    float urg   = uUrg[i];
    float speed = mix(0.12, 0.36, urg);
    float fi    = float(i);

    // organic edge displacement — slow rolling lava lobes + fine simmer
    float lobes  = fbm(p * 0.016 + vec2(uT * speed * 0.32, uT * speed * 0.2) + fi * 7.31);
    float simmer = fbm(p * 0.055 - vec2(uT * speed * 0.55, uT * 0.1) + fi * 3.17);
    float disp = (lobes - 0.5) * mix(15.0, 30.0, urg) + (simmer - 0.5) * 3.5;
    float dd = d - max(disp, -3.0);

    float pulse = 0.84 + 0.16 * sin(uT * mix(0.4, 1.1, urg) + fi * 1.7);
    float rim  = exp(-dd * dd / mix(28.0, 56.0, urg));                 // soft molten band
    float halo = exp(-max(dd, 0.0) / mix(24.0, 52.0, urg)) * mix(0.048, 0.15, urg);
    float hotc = exp(-dd * dd / 9.0) * mix(0.05, 0.30, urg);          // faint hot filament
    float inside = smoothstep(-13.0, 2.0, d);                          // keep the card interior clean

    float I = (rim * mix(0.14, 0.52, urg) + halo) * inside * pulse;
    acc += (uCol[i] * I + vec3(1.0, 0.96, 0.9) * hotc * inside * pulse * mix(0.16, 0.5, urg)) * uGlowM;
  }

  /* ── plasma strands ── */
  acc += strand(p, uA0, uA1, uA2, uA3, uHovA, 0.0, uRevA);
  acc += strand(p, uB0, uB1, uB2, uB3, uHovB, 2.7, uRevB);

  vec3 col = 1.0 - exp(-acc * 1.55);   // soft filmic clamp
  gl_FragColor = vec4(col, 1.0);
}
`;

export function createFx(canvas) {
  const gl = canvas.getContext('webgl', { alpha: false, antialias: true });
  if (!gl) return null;

  function sh(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'aP');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const U = {};
  for (const n of ['uRes', 'uT', 'uCaps', 'uCol', 'uUrg',
                   'uA0', 'uA1', 'uA2', 'uA3', 'uB0', 'uB1', 'uB2', 'uB3', 'uHovA', 'uHovB', 'uRevA', 'uRevB', 'uGlowM'])
    U[n] = gl.getUniformLocation(prog, n);

  gl.uniform2f(U.uRes, canvas.width, canvas.height);

  return {
    setScene({ caps, cols, urgs }) {
      gl.uniform4fv(U.uCaps, new Float32Array(caps));
      gl.uniform3fv(U.uCol, new Float32Array(cols));
      gl.uniform1fv(U.uUrg, new Float32Array(urgs));
    },
    render({ t, strands, revA = 1, revB = 1, glowM = 1 }) {
      gl.uniform1f(U.uT, t);
      gl.uniform1f(U.uRevA, revA);
      gl.uniform1f(U.uRevB, revB);
      gl.uniform1f(U.uGlowM, glowM);
      const [A, B] = strands;
      gl.uniform2f(U.uA0, A.p0.x, A.p0.y); gl.uniform2f(U.uA1, A.p1.x, A.p1.y);
      gl.uniform2f(U.uA2, A.p2.x, A.p2.y); gl.uniform2f(U.uA3, A.p3.x, A.p3.y);
      gl.uniform1f(U.uHovA, A.hov);
      gl.uniform2f(U.uB0, B.p0.x, B.p0.y); gl.uniform2f(U.uB1, B.p1.x, B.p1.y);
      gl.uniform2f(U.uB2, B.p2.x, B.p2.y); gl.uniform2f(U.uB3, B.p3.x, B.p3.y);
      gl.uniform1f(U.uHovB, B.hov);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  };
}

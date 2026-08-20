/* WebGL effect layer — molten status rims + plasma strands.
   Generalised for the two-level fleet map: up to MAXC capsule rims and MAXS
   strands, each strand with its own width (dept trunks are ~2.4x), colour,
   hover and reveal. Composited with mix-blend-mode: screen over the
   mesh-gradient background. */

const MAXC = 8;
const MAXS = 8;

const VERT = `
attribute vec2 aP;
void main() { gl_Position = vec4(aP, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2  uRes;
uniform float uT;
uniform float uGlowM;
uniform float uFlare;   // widens + brightens the capsule rims (fleet level runs hotter)
uniform vec4  uCaps[${MAXC}];   // xy = center, zw = half-size (pill)
uniform vec3  uCol[${MAXC}];
uniform float uUrg[${MAXC}];
uniform float uNC;
uniform vec2  uSP[${MAXS * 4}]; // strand cubics, 4 control points each
uniform vec4  uSBB[${MAXS}];    // strand bounds (minXY, maxXY) for early-out
uniform vec3  uSCol[${MAXS}];
uniform float uSHov[${MAXS}];
uniform float uSRev[${MAXS}];
uniform float uSWid[${MAXS}];
uniform float uNS;

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

vec3 strand(vec2 p, vec2 A, vec2 B, vec2 C, vec2 D,
            float hovv, float seed, float rev, float wid, vec3 col) {
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
  if (sd >= 120.0 * wid || rev <= 0.001) return vec3(0.0);

  float endT = pow(max(sin(bt * 3.14159), 0.0), 0.7);               // tapers to a point at both ends
  float wob = (fbm(vec2(bt * 13.0 + seed, uT * 0.45)) - 0.5) * 2.4 * endT;
  float sdd = sd / wid - (0.3 + 1.2 * endT) - wob - hovv * 1.6 * endT;

  float core  = exp(-sdd * sdd / mix(1.1, 3.5, endT));
  float shalo = exp(-max(sdd, 0.0) / mix(7.0, 16.0, hovv)) * 0.06 * (0.2 + 0.8 * endT);

  // plasma flowing toward the receiving node — layered travelling noise
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
  return (col * sI + vec3(0.9, 1.0, 0.98) * drops * core * 0.14) * m
       + vec3(0.7, 1.0, 0.97) * tipI * core * 1.1;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec3 acc = vec3(0.0);

  /* ── molten capsule rims ── */
  for (int i = 0; i < ${MAXC}; i++) {
    if (float(i) >= uNC) continue;
    vec2 c  = uCaps[i].xy;
    vec2 hs = uCaps[i].zw;
    float d = sdRoundBox(p - c, hs, hs.y);
    float cutR = 130.0 * uFlare;
    if (d > cutR || d < -20.0) continue;
    float urg   = uUrg[i];
    float speed = mix(0.12, 0.36, urg);
    float fi    = float(i);

    // organic edge displacement — slow rolling lava lobes + fine simmer
    float lobes  = fbm(p * 0.016 + vec2(uT * speed * 0.32, uT * speed * 0.2) + fi * 7.31);
    float simmer = fbm(p * 0.055 - vec2(uT * speed * 0.55, uT * 0.1) + fi * 3.17);
    float disp = (lobes - 0.5) * mix(15.0, 30.0, urg) + (simmer - 0.5) * 3.5;
    float dd = d - max(disp, -3.0);

    float pulse = 0.84 + 0.16 * sin(uT * mix(0.4, 1.1, urg) + fi * 1.7);
    float fw   = 1.0 + (uFlare - 1.0) * 0.3;                           // only gently widen the band —
    float rim  = exp(-dd * dd / (mix(28.0, 56.0, urg) * fw));          // the molten edge must stay hot
    float halo = exp(-max(dd, 0.0) / (mix(24.0, 52.0, urg) * uFlare)) * mix(0.048, 0.15, urg) * uFlare;
    halo *= 1.0 - smoothstep(cutR * 0.5, cutR, d);   // fade to nothing before the cutoff edge
    float hotc = exp(-dd * dd / 9.0) * mix(0.05, 0.30, urg) * uFlare; // hot filament sharpens the edge
    float inside = smoothstep(-13.0, 2.0, d);                          // keep the card interior clean

    float I = (rim * mix(0.14, 0.52, urg) + halo) * inside * pulse * (0.55 + 0.45 * uFlare);
    acc += uCol[i] * I + vec3(1.0, 0.96, 0.9) * hotc * inside * pulse * mix(0.16, 0.5, urg);
  }

  /* ── plasma strands ── */
  for (int i = 0; i < ${MAXS}; i++) {
    if (float(i) >= uNS) continue;
    vec4 bb = uSBB[i];
    if (p.x < bb.x || p.y < bb.y || p.x > bb.z || p.y > bb.w) continue;
    acc += strand(p, uSP[i * 4], uSP[i * 4 + 1], uSP[i * 4 + 2], uSP[i * 4 + 3],
                  uSHov[i], float(i) * 2.13 + 0.4, uSRev[i], uSWid[i], uSCol[i]);
  }

  vec3 col = 1.0 - exp(-acc * uGlowM * 1.55);   // soft filmic clamp; uGlowM fades the whole layer
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
  for (const n of ['uRes', 'uT', 'uGlowM', 'uFlare', 'uCaps', 'uCol', 'uUrg', 'uNC',
                   'uSP', 'uSBB', 'uSCol', 'uSHov', 'uSRev', 'uSWid', 'uNS'])
    U[n] = gl.getUniformLocation(prog, n);

  gl.uniform2f(U.uRes, canvas.width, canvas.height);

  const CAPS = new Float32Array(MAXC * 4), CCOL = new Float32Array(MAXC * 3), CURG = new Float32Array(MAXC);
  const SP = new Float32Array(MAXS * 4 * 2), SBB = new Float32Array(MAXS * 4), SCOL = new Float32Array(MAXS * 3);
  const SHOV = new Float32Array(MAXS), SREV = new Float32Array(MAXS), SWID = new Float32Array(MAXS);

  return {
    setScene({ caps, cols, urgs }) {
      CAPS.fill(0); CCOL.fill(0); CURG.fill(0);
      CAPS.set(caps.slice(0, MAXC * 4));
      CCOL.set(cols.slice(0, MAXC * 3));
      CURG.set(urgs.slice(0, MAXC));
      gl.uniform4fv(U.uCaps, CAPS);
      gl.uniform3fv(U.uCol, CCOL);
      gl.uniform1fv(U.uUrg, CURG);
      gl.uniform1f(U.uNC, Math.min(urgs.length, MAXC));
    },
    // strands: [{ p0, p1, p2, p3, hov, rev, wid, col: [r,g,b] }]
    render({ t, strands = [], glowM = 1, flare = 1 }) {
      gl.uniform1f(U.uT, t);
      gl.uniform1f(U.uGlowM, glowM);
      gl.uniform1f(U.uFlare, flare);
      const n = Math.min(strands.length, MAXS);
      SP.fill(0); SBB.fill(0); SCOL.fill(0); SHOV.fill(0); SREV.fill(0); SWID.fill(1);
      for (let i = 0; i < n; i++) {
        const S = strands[i];
        const pts = [S.p0, S.p1, S.p2, S.p3];
        let mnx = 1e9, mny = 1e9, mxx = -1e9, mxy = -1e9;
        pts.forEach((p, j) => {
          SP[(i * 4 + j) * 2] = p.x;
          SP[(i * 4 + j) * 2 + 1] = p.y;
          mnx = Math.min(mnx, p.x); mny = Math.min(mny, p.y);
          mxx = Math.max(mxx, p.x); mxy = Math.max(mxy, p.y);
        });
        const m = 130 * (S.wid || 1) + 20;   // curve stays inside its control hull + glow falloff
        SBB[i * 4] = mnx - m; SBB[i * 4 + 1] = mny - m;
        SBB[i * 4 + 2] = mxx + m; SBB[i * 4 + 3] = mxy + m;
        SHOV[i] = S.hov || 0;
        SREV[i] = S.rev ?? 1;
        SWID[i] = S.wid || 1;
        const c = S.col || [0.32, 0.83, 0.80];
        SCOL[i * 3] = c[0]; SCOL[i * 3 + 1] = c[1]; SCOL[i * 3 + 2] = c[2];
      }
      gl.uniform2fv(U.uSP, SP);
      gl.uniform4fv(U.uSBB, SBB);
      gl.uniform3fv(U.uSCol, SCOL);
      gl.uniform1fv(U.uSHov, SHOV);
      gl.uniform1fv(U.uSRev, SREV);
      gl.uniform1fv(U.uSWid, SWID);
      gl.uniform1f(U.uNS, n);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  };
}

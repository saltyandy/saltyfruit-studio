'use strict';

(() => {
  // ---------------------------------------------------------------- projects
  const PROJECTS = [
    { name: 'The Orb',           meta: 'Product design · Prototyping · 2026',      href: 'project.html',       fruit: 'orange', col: [0.933, 0.541, 0.247] },
    { name: 'GetVocal V3',       meta: 'Product design · Design systems · 2026',   href: 'getvocal.html',      fruit: 'lemon',  col: [0.949, 0.776, 0.294] },
    { name: 'Golf Guru',         meta: 'Brand identity · App design · 2024',       href: 'golf-guru.html',     fruit: 'lime',   col: [0.612, 0.733, 0.310] },
    { name: 'The Ocean Cleanup', meta: 'Concept · Data visualization · 2024',      href: 'ocean-cleanup.html', fruit: 'plum',   col: [0.522, 0.384, 0.659] },
    { name: 'Matt Maltese',      meta: 'Creative direction · Album artwork · 2024', href: 'matt-maltese.html', fruit: 'peach',  col: [0.949, 0.659, 0.494] },
  ];

  const FRUIT_FILL = { orange: '#ee8a3f', lemon: '#f2c64b', lime: '#9cbb4f', plum: '#8562a8', peach: '#f2a87e' };

  const INK = '#2535a7';
  const PAPER = '#f4efe1';
  const OCHRE = '#c0903f';
  const OCHRE_DARK = '#8f6a2a';
  const OCHRE_LIGHT = '#e9d9a6';
  const LEAF = '#4e7d45';

  const HORIZON = 0.62; // fraction from bottom, must match shader use

  // ---------------------------------------------------------------- webgl
  const canvas = document.getElementById('sea');
  const gl = canvas.getContext('webgl2', { antialias: true });
  if (!gl) { document.body.classList.add('no-webgl'); return; }

  const VERT = `#version 300 es
  void main() {
    vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
    gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
  }`;

  const FRAG = `#version 300 es
  precision highp float;

  uniform vec2  uRes;
  uniform float uTime;
  uniform vec2  uHook;      // uv, bottom-up
  uniform float uRingAmp;
  uniform float uBurstStart;
  uniform vec2  uFruitPos;  // uv, bottom-up
  uniform float uFruitVis;
  uniform vec3  uFruitCol;

  out vec4 outColor;

  const float HOR = ${HORIZON};
  const vec3 PAPER = vec3(0.957, 0.937, 0.882);
  const vec3 INK   = vec3(0.145, 0.208, 0.655);
  const vec3 PERI  = vec3(0.620, 0.678, 0.914);
  const vec3 SUNC  = vec3(0.914, 0.435, 0.235);

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }

  vec2 toWater(vec2 uv, float aspect) {
    float d = max(HOR - uv.y, 0.002);
    float z = 1.0 / (d * 3.0 + 0.06);
    return vec2((uv.x - 0.5) * aspect * z, z);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;
    float d = HOR - uv.y; // >0 water, <0 sky
    vec3 col;

    if (d <= 0.0) {
      // ----- sky: warm paper with faint drifting print bands
      col = PAPER;
      float s = fbm(vec2(uv.x * 2.2, uv.y * 7.0) + vec2(uTime * 0.008, 0.0));
      col = mix(col, PERI, smoothstep(0.58, 0.85, s) * 0.10);
      col = mix(col, mix(PAPER, PERI, 0.30), smoothstep(0.12, 0.0, -d) * 0.40);

      // ----- sun: flat tangerine disc, hand-wobbled edge
      vec2 p = vec2(uv.x * aspect, uv.y);
      vec2 sp = vec2(0.22 * aspect, 0.82);
      float sd = length(p - sp);
      float ang = atan(p.y - sp.y, p.x - sp.x);
      float rr = 0.052 + (noise(vec2(cos(ang), sin(ang)) * 1.5 + uTime * 0.05) - 0.5) * 0.008;
      col = mix(col, SUNC, smoothstep(rr + 0.0035, rr - 0.0035, sd));
    } else {
      // ----- water: screen-print ripple bands in perspective
      vec2 w  = toWater(uv, aspect);
      vec2 hw = toWater(uHook, aspect);
      vec2 nuv = vec2(w.x * 0.55, (w.y + uTime * 0.10) * 0.95);
      float f = fbm(nuv + fbm(nuv * 0.5 + uTime * 0.015) * 0.55);
      f += sin(w.y * 0.5 - uTime * 0.40) * 0.028;            // long rolling swell
      f += exp(-pow((uv.x - 0.22) * 5.0, 2.0)) * 0.07        // sun glint column
           * (0.6 + 0.4 * sin(w.y * 3.0 + uTime * 0.8));

      // rings around the line entry
      float dist = length(w - hw);
      f += sin(dist * 26.0 - uTime * 3.0) * exp(-dist * 2.6) * uRingAmp;

      // catch burst: expanding ring
      float bt = uTime - uBurstStart;
      if (bt > 0.0 && bt < 2.5) {
        float br = bt * 1.5;
        float fade = 1.0 - bt / 2.5;
        f += exp(-pow((dist - br) * 4.5, 2.0)) * fade * 0.55;
        f += exp(-pow((dist - br * 0.55) * 5.5, 2.0)) * fade * 0.35;
      }

      f = mix(0.5, f, smoothstep(0.008, 0.09, d)); // calm flat far field
      f += (noise(nuv * 16.0) - 0.5) * 0.045;      // screen-print edge roughness

      float e = fwidth(f) * 1.4 + 0.004;
      float band = smoothstep(0.545 - e, 0.545 + e, f);
      col = mix(INK, PERI, band);

      // misregistration: cream sliver ghosting along band edges
      float strip = smoothstep(0.555 - e, 0.555 + e, f) * (1.0 - smoothstep(0.576 - e, 0.576 + e, f));
      col = mix(col, PAPER, strip * 0.45);

      // fruit drifting under the surface (visible through light bands, koi-style)
      if (uFruitVis > 0.001) {
        vec2 q = (uv - uFruitPos) * vec2(aspect, 1.0);
        q /= vec2(0.050, 0.020);
        float fr = smoothstep(1.0, 0.78, length(q));
        col = mix(col, uFruitCol, fr * band * uFruitVis * 0.9);
      }

      // woven contour lines inside the ink, following the band shapes
      float hf = sin(f * 46.0 + w.y * 4.0);
      float hFade = smoothstep(0.05, 0.16, d);
      float hatch = smoothstep(0.55, 0.92, hf) * (1.0 - band) * hFade;
      col = mix(col, INK * 1.55 + vec3(0.05), hatch * 0.38);
      // faint counter-weave inside the light bands
      float hf2 = sin(f * 52.0 - w.y * 3.0);
      col = mix(col, PERI * 0.90, smoothstep(0.78, 0.94, hf2) * band * hFade * 0.20);

      // depth haze
      col = mix(col, mix(PERI, PAPER, 0.35), smoothstep(0.10, 0.0, d) * 0.45);
    }

    // horizon line
    col = mix(col, INK, (1.0 - smoothstep(0.0006, 0.0022, abs(d))) * 0.85);

    // paper grain
    col += (hash(gl_FragCoord.xy + vec2(mod(uTime, 10.0) * 60.0)) - 0.5) * 0.035;

    // gentle vignette
    vec2 vuv = uv - 0.5;
    col *= 1.0 - dot(vuv, vuv) * 0.10;

    outColor = vec4(col, 1.0);
  }`;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) { document.body.classList.add('no-webgl'); return; }
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prog));
    document.body.classList.add('no-webgl');
    return;
  }
  gl.useProgram(prog);

  const U = {};
  for (const n of ['uRes', 'uTime', 'uHook', 'uRingAmp', 'uBurstStart', 'uFruitPos', 'uFruitVis', 'uFruitCol']) {
    U[n] = gl.getUniformLocation(prog, n);
  }

  // ---------------------------------------------------------------- svg scene
  const svg = document.getElementById('scene');
  const NS = 'http://www.w3.org/2000/svg';

  function el(name, attrs, parent) {
    const e = document.createElementNS(NS, name);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e);
    return e;
  }

  // paint order: rod/line -> splash -> bird -> fruit (Blender boat render sits below the SVG)
  const rodHalo = el('path', { fill: 'none', stroke: PAPER, 'stroke-width': 7, 'stroke-linecap': 'round', opacity: 0.9 });
  const rodMain = el('path', { fill: 'none', stroke: '#a87b36', 'stroke-width': 3.5, 'stroke-linecap': 'round' });
  const lineEl = el('path', { fill: 'none', stroke: PAPER, 'stroke-width': 1.6, opacity: 0.9, 'stroke-linecap': 'round' });
  // same line in faint ink, clipped to the sky, so it doesn't vanish against the paper
  const defs = el('defs', {});
  const skyClip = el('clipPath', { id: 'skyClip' }, defs);
  const skyClipRect = el('rect', { x: 0, y: 0, width: 100000, height: 0 }, skyClip);
  const lineSky = el('path', { fill: 'none', stroke: INK, 'stroke-width': 1.3, opacity: 0.35, 'stroke-linecap': 'round', 'clip-path': 'url(#skyClip)' });
  const splashG = el('g', {});
  const birdEl = el('path', { fill: 'none', stroke: INK, 'stroke-width': 2.4, 'stroke-linecap': 'round', opacity: 0.75 });
  const fruitLayer = el('g', {});

  // boat foreground render (Blender, 4480x1400): anchor points in image fractions
  const boatImg = document.getElementById('boat');
  const IMG_AR = 4480 / 1400;
  const ROD_U = 0.6058, ROD_V = 0.2017;   // tip of the rendered rod butt
  const LAND_U = 0.56, LAND_V = 0.835;    // on the stern bench

  const hintEl = document.getElementById('hint');
  const cardEl = document.getElementById('fruitCard');
  const cardName = cardEl.querySelector('.fc-name');
  const cardMeta = cardEl.querySelector('.fc-meta');

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------------------------------------------------------- layout
  let W = 0, H = 0, S = 0, DPR = 1;
  let L = {}; // layout points

  function layout() {
    W = innerWidth; H = innerHeight;
    S = Math.min(W, H);
    DPR = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    gl.viewport(0, 0, canvas.width, canvas.height);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    const cx = 0.5 * W;
    const HOR = (1 - HORIZON) * H;

    // boat render: spans full width (a touch over to crop corner slivers),
    // never smaller than 1.44H so the figure stays present on tall screens
    const imgW = Math.max(Math.min(W * 1.17, 2.3 * H), 1.44 * H);
    const imgH = imgW / IMG_AR;
    const imgL = (W - imgW) / 2;
    const imgT = H - imgH;
    boatImg.style.width = `${imgW}px`;
    boatImg.style.left = `${imgL}px`;
    skyClipRect.setAttribute('height', HOR);

    const ax = imgL + ROD_U * imgW;
    const ay = imgT + ROD_V * imgH;
    const tipX = Math.min(ax + 0.26 * S, 0.95 * W);

    L = {
      cx, HOR,
      rodAnchor: [ax, ay],
      rodTip: [tipX, ay - 0.30 * S],
      hook: [tipX - 0.13 * S, 0.575 * H],
      land: [imgL + LAND_U * imgW, imgT + LAND_V * imgH],
    };
  }

  // rotate about (cx, H) by angle a, then shift by dy
  let bobA = 0, bobDy = 0;
  function bob(x, y) {
    const ca = Math.cos(bobA), sa = Math.sin(bobA);
    const dx0 = x - L.cx, dy0 = y - H;
    return [L.cx + dx0 * ca - dy0 * sa, H + dx0 * sa + dy0 * ca + bobDy];
  }

  // ---------------------------------------------------------------- fruits
  function makeFruit(type) {
    const g = document.createElementNS(NS, 'g');
    const img = document.createElementNS(NS, 'image');
    const wpx = 0.105 * S;
    img.setAttribute('href', `assets/fruit-${type}.png`);
    img.setAttribute('width', wpx);
    img.setAttribute('height', wpx);
    img.setAttribute('x', -wpx / 2);
    img.setAttribute('y', -wpx * 0.58);
    g.appendChild(img);
    fruitLayer.appendChild(g);
    return g;
  }

  // preload sprites so the first catch doesn't pop in blank
  for (const pr of PROJECTS) { const im = new Image(); im.src = `assets/fruit-${pr.fruit}.png`; }

  const fruitShadow = el('ellipse', { fill: INK, opacity: 0 }, fruitLayer);

  // ---------------------------------------------------------------- state
  const now = () => performance.now() / 1000;
  let state = 'IDLE';
  let stateT = now();
  let nextIdx = 0;
  let currentFruit = null;   // svg group of landed/flying fruit
  let currentProject = null;
  let catches = 0;

  let ringAmp = 0.12, ringTarget = 0.12;
  let tension = 0;
  let burstStart = -100;
  let teaser = { vis: 0, x: 0, y: 0 };
  let bite = { on: false, next: now() + 4 + Math.random() * 4 };
  let droplets = [];
  let reelDur = 0.85;

  const HINTS = {
    cast: 'something is down there — click to reel it in',
    fruit: 'click the fruit',
  };

  function setHint(txt) {
    if (txt) { hintEl.textContent = txt; hintEl.classList.add('show'); }
    else hintEl.classList.remove('show');
  }

  function enter(s) { state = s; stateT = now(); }

  function startReel() {
    reelDur = bite.on ? 0.55 : 0.9;
    bite.on = false;
    ringTarget = 0.38;
    enter('REEL');
    setHint(null);
  }

  function doCatch(t) {
    burstStart = t;
    currentProject = PROJECTS[nextIdx];
    currentFruit = makeFruit(currentProject.fruit);
    nextIdx = (nextIdx + 1) % PROJECTS.length;
    catches++;
    // droplet splash
    droplets = [];
    for (let i = 0; i < 8; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.1;
      const sp = (0.22 + Math.random() * 0.28) * S;
      droplets.push({
        x: L.hook[0], y: L.hook[1],
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        r: 2 + Math.random() * 2.2, life: 0.55 + Math.random() * 0.2, t0: t,
        fill: Math.random() < 0.5 ? PAPER : '#a9b6ed',
      });
    }
    enter('CATCH');
  }

  function land() {
    enter('LANDED');
    cardName.textContent = currentProject.name;
    cardMeta.textContent = currentProject.meta;
    cardEl.href = currentProject.href;
    cardEl.classList.add('show');
    setHint(catches === 1 ? HINTS.fruit : null);
  }

  function dismissCatch() {
    if (currentFruit) { currentFruit.remove(); currentFruit = null; }
    fruitShadow.setAttribute('opacity', 0);
    cardEl.classList.remove('show');
  }

  addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, nav, header')) return;
    if (state === 'IDLE') startReel();
    else if (state === 'LANDED') { dismissCatch(); startReel(); }
  });

  // ---------------------------------------------------------------- loop
  const t0 = now();

  function frame() {
    const t = now() - t0;
    const dt = 1 / 60;
    const el = now() - stateT; // time in state

    // --- boat bob
    const bobScale = reducedMotion ? 0.3 : 1;
    bobA = (Math.sin(t * 0.40) * 0.010 + Math.sin(t * 0.17) * 0.006) * bobScale;
    bobDy = (Math.sin(t * 0.55) * 0.006 + Math.sin(t * 0.23) * 0.004) * S * bobScale;

    // --- state machine
    if (state === 'IDLE') {
      ringTarget = 0.12;
      tension += (0 - tension) * Math.min(1, dt * 6);
      // occasional bite tease
      if (!bite.on && now() > bite.next && !reducedMotion) {
        bite.on = true;
        bite.until = now() + 2.4;
      }
      if (bite.on) {
        if (now() > bite.until) { bite.on = false; bite.next = now() + 5 + Math.random() * 6; }
        ringTarget = 0.15;
      }
      if (el > 2.2 && catches === 0) setHint(HINTS.cast);
    } else if (state === 'REEL') {
      tension += (1 - tension) * Math.min(1, dt * 9);
      ringTarget = 0.38;
      if (el >= reelDur) doCatch(t);
    } else if (state === 'CATCH') {
      tension += (0 - tension) * Math.min(1, dt * 5);
      ringTarget = 0.10;
      if (el >= 0.95) land();
    } else if (state === 'LANDED') {
      tension += (0 - tension) * Math.min(1, dt * 5);
      ringTarget = 0.12;
    }
    ringAmp += (ringTarget - ringAmp) * Math.min(1, dt * 5);

    // --- teaser fruit under the surface
    const nextCol = PROJECTS[nextIdx].col;
    if (state === 'IDLE' && bite.on) {
      const bp = Math.min(1, (now() - (bite.until - 2.4)) / 2.4);
      teaser.vis += (0.85 - teaser.vis) * Math.min(1, dt * 3);
      teaser.x = L.hook[0] + S * 0.15 * (1 - bp) + Math.sin(t * 1.1) * S * 0.012;
      teaser.y = L.hook[1] + S * 0.045 + Math.sin(t * 0.7) * S * 0.008;
    } else if (state === 'REEL') {
      teaser.vis += (1 - teaser.vis) * Math.min(1, dt * 8);
      const rp = Math.min(1, el / reelDur);
      teaser.x += (L.hook[0] - teaser.x) * Math.min(1, dt * 6 + rp * 0.1);
      teaser.y += (L.hook[1] + S * 0.02 - teaser.y) * Math.min(1, dt * 6);
    } else {
      teaser.vis += (0 - teaser.vis) * Math.min(1, dt * 8);
    }

    // --- hook point (line entry), with bite tug
    let hx = L.hook[0] + Math.sin(t * 0.35) * 0.004 * S;
    let hy = L.hook[1];
    if (bite.on) hy += Math.max(0, Math.sin((now() - (bite.until - 2.4)) * 14)) * 0.010 * S;
    if (state === 'REEL') hy += Math.sin(el * 30) * 0.004 * S * tension;

    // --- rod + line
    const anchor = bob(L.rodAnchor[0], L.rodAnchor[1]);
    let tip = bob(L.rodTip[0], L.rodTip[1]);
    tip = [tip[0] - 0.05 * S * tension, tip[1] + 0.10 * S * tension];
    const bend = 0.012 * S + 0.10 * S * tension;
    const rc = [anchor[0] + (tip[0] - anchor[0]) * 0.62, anchor[1] + (tip[1] - anchor[1]) * 0.62 + bend];
    const dRod = `M ${anchor} Q ${rc} ${tip}`;
    rodHalo.setAttribute('d', dRod);
    rodMain.setAttribute('d', dRod);

    const swayScale = reducedMotion ? 0.3 : 1;
    const sag = (1 - tension) * (0.045 * S + 0.012 * S * Math.sin(t * 0.7) * swayScale);
    const sway = (1 - tension) * 0.015 * S * Math.sin(t * 0.5 + 1) * swayScale;
    const lc = [(tip[0] + hx) / 2 + sway, (tip[1] + hy) / 2 + sag];
    const dLine = `M ${tip} Q ${lc} ${hx} ${hy}`;
    lineEl.setAttribute('d', dLine);
    lineEl.setAttribute('opacity', state === 'CATCH' ? 0.35 : 0.9);
    lineSky.setAttribute('d', dLine);
    lineSky.setAttribute('opacity', state === 'CATCH' ? 0.15 : 0.35);

    // --- boat render bob
    boatImg.style.transform = `translateY(${bobDy}px) rotate(${bobA * 180 / Math.PI}deg)`;

    // --- flying / landed fruit
    if (currentFruit) {
      if (state === 'CATCH') {
        const p = Math.min(1, el / 0.9);
        const q = p * p * (3 - 2 * p); // smooth arc
        const p0 = [hx, hy];
        const p2 = bob(L.land[0], L.land[1]);
        const apex = [(p0[0] + p2[0]) / 2 - 0.03 * W, Math.min(p0[1], p2[1]) - 0.34 * S];
        const ix = (1 - q) * (1 - q) * p0[0] + 2 * (1 - q) * q * apex[0] + q * q * p2[0];
        const iy = (1 - q) * (1 - q) * p0[1] + 2 * (1 - q) * q * apex[1] + q * q * p2[1];
        const rot = q * 520;
        const sc = 0.6 + 0.4 * Math.min(1, p * 3);
        const squash = p > 0.94 ? 1 - (p - 0.94) * 3 : 1;
        currentFruit.setAttribute('transform', `translate(${ix} ${iy}) rotate(${rot}) scale(${sc} ${sc * squash})`);
      } else if (state === 'LANDED') {
        const lp = bob(L.land[0], L.land[1]);
        const settle = Math.min(1, el * 5);
        const squash = 1 + (1 - settle) * 0.12;
        currentFruit.setAttribute('transform', `translate(${lp[0]} ${lp[1]}) rotate(${8 * (1 - settle)}) scale(${squash} ${2 - squash})`);
        fruitShadow.setAttribute('cx', lp[0]);
        fruitShadow.setAttribute('cy', lp[1] + 0.035 * S);
        fruitShadow.setAttribute('rx', 0.034 * S);
        fruitShadow.setAttribute('ry', 0.008 * S);
        fruitShadow.setAttribute('opacity', 0.18 * settle);
        // card follows (kept on-screen on narrow viewports, lifted clear of the fruit)
        const cw = cardEl.offsetWidth || 200;
        const cxp = Math.min(lp[0] + 0.055 * S, W - cw - 10);
        cardEl.style.left = `${cxp}px`;
        cardEl.style.top = `${lp[1] - 0.055 * S - (cxp < lp[0] + 0.05 * S ? 0.09 * S : 0)}px`;
      }
    }

    // --- droplets
    while (splashG.firstChild) splashG.firstChild.remove();
    for (const dpl of droplets) {
      const age = t - dpl.t0;
      if (age > dpl.life) continue;
      const gx = dpl.x + dpl.vx * age;
      const gy = dpl.y + dpl.vy * age + 0.5 * 1.7 * S * age * age;
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', gx); c.setAttribute('cy', gy);
      c.setAttribute('r', dpl.r * (1 - age / dpl.life * 0.5));
      c.setAttribute('fill', dpl.fill);
      c.setAttribute('opacity', 1 - age / dpl.life);
      splashG.appendChild(c);
    }

    // --- bird, drifting across the sky every so often (rests under reduced motion)
    const birdT = (t % 34) / 34;
    if (birdT < 0.42 && !reducedMotion) {
      const bx = -0.05 * W + birdT / 0.42 * 1.1 * W;
      const by = 0.14 * H + Math.sin(birdT * 40) * 0.006 * H;
      const bw = 0.012 * S;
      birdEl.setAttribute('d', `M ${bx - bw} ${by} Q ${bx - bw * 0.4} ${by - bw * 0.8} ${bx} ${by} Q ${bx + bw * 0.4} ${by - bw * 0.8} ${bx + bw} ${by}`);
      birdEl.setAttribute('opacity', 0.75);
    } else {
      birdEl.setAttribute('opacity', 0);
    }

    // --- shader uniforms
    gl.uniform2f(U.uRes, canvas.width, canvas.height);
    gl.uniform1f(U.uTime, t);
    gl.uniform2f(U.uHook, hx / W, 1 - hy / H);
    gl.uniform1f(U.uRingAmp, ringAmp);
    gl.uniform1f(U.uBurstStart, burstStart);
    gl.uniform2f(U.uFruitPos, teaser.x / W, 1 - teaser.y / H);
    gl.uniform1f(U.uFruitVis, teaser.vis);
    gl.uniform3f(U.uFruitCol, nextCol[0], nextCol[1], nextCol[2]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    requestAnimationFrame(frame);
  }

  layout();
  addEventListener('resize', () => { layout(); });
  requestAnimationFrame(frame);
})();

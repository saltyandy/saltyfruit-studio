/* Values lifted verbatim from Nuvolari_Proto_Build:
   OrbLab.tsx (palettes, mix, params), data.ts (signalMeta, chipStyles,
   insights), index.css (btn-obsidian). */

export type ChipKind = 'MARKET' | 'ON-CHAIN' | 'RISK' | 'SOCIAL';

export type Palette = {
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

export const moods: Palette[] = [
  {
    // degen — sharp burnt amber, not crimson
    deep: '#1c1009',
    mid: '#8a4a1c',
    bright: '#f5b054',
    vein: '#f78d33',
    rim: '#ffc073',
    flare: '#f9a24a',
    bgStops: ['#ffe9cf', '#f8bd85', '#e88d55', '#b8623a'],
    label: 'Degen',
    color: '#b4592a',
  },
  {
    // balanced — composed blue
    deep: '#0a1a2e',
    mid: '#1e4a74',
    bright: '#7fc4e8',
    vein: '#4fa8e0',
    rim: '#9fd4ec',
    flare: '#6fb4e6',
    bgStops: ['#e9f3fc', '#b7d9f0', '#7fb0dc', '#5583ba'],
    label: 'Balanced',
    color: '#2e5f96',
  },
  {
    // saver — green and chill
    deep: '#0a1f18',
    mid: '#1e5c46',
    bright: '#8fd8ae',
    vein: '#4fc08a',
    rim: '#b2e6c8',
    flare: '#6fcf9a',
    bgStops: ['#e8f9ee', '#b9e6c8', '#83d0a2', '#54a97a'],
    label: 'Saver',
    color: '#1e6b47',
  },
];

const mixAnchors: [number, number, number][] = [
  [58, 22, 8], // slider at degen
  [10, 46, 24], // slider at balanced
  [6, 25, 61], // slider at saver
];

export function mixFor(v: number): [number, number, number] {
  const lerp = (a: [number, number, number], b: [number, number, number], t: number) =>
    a.map((x, i) => x + (b[i] - x) * t) as [number, number, number];
  return v < 0.5
    ? lerp(mixAnchors[0], mixAnchors[1], v / 0.5)
    : lerp(mixAnchors[1], mixAnchors[2], (v - 0.5) / 0.5);
}

export function weightsFor(v: number): [number, number, number] {
  const m = mixFor(v);
  const sum = m[0] + m[1] + m[2];
  return [m[0] / sum, m[1] / sum, m[2] / sum];
}

// Andy's tuned settings, 2026-07-18
export const defaultParams = {
  scale: 0.22,
  soft: 0.75,
  blur: 0.54,
  vein: 1.49,
  speed: 0.18,
  rim: 0.79,
  corona: 0,
};

export const signalMeta: Record<ChipKind, {label: string; dot: string}> = {
  MARKET: {label: 'Market', dot: '#1d9d74'},
  'ON-CHAIN': {label: 'On-chain', dot: '#2f7bc4'},
  RISK: {label: 'Risk', dot: '#d05460'},
  SOCIAL: {label: 'Social', dot: '#8f6fc2'},
};

/* Pastel chip fills from data.ts — the notification chip look in the
   Portfolio Pages design (Paper node 93-0 matches these exactly). */
export const chipStyles: Record<ChipKind, {bg: string; border: string}> = {
  MARKET: {bg: 'rgba(191,255,234,0.8)', border: '#83b8c9'},
  'ON-CHAIN': {bg: 'rgba(154,228,253,0.8)', border: '#2b6077'},
  RISK: {bg: 'rgba(255,176,181,0.8)', border: '#ee6f78'},
  SOCIAL: {bg: 'rgba(246,234,255,0.7)', border: '#ba95d6'},
};

export type LabInsight = {
  id: string;
  code: string; // the INSIGHT_ header tag
  title: string;
  chips: ChipKind[];
};

/* The queue from the Portfolio Pages Paper design (ORB · Duo 04): Euler
   settles behind, Stake reads at front, and the Aave card is the one the
   ON-CHAIN chip click reveals. */
export const LAB_QUEUE: LabInsight[] = [
  {
    id: 'euler-usdc',
    code: 'EULER-',
    title: 'Supply USDC to Euler eeUSDC vault.',
    chips: ['MARKET', 'ON-CHAIN'],
  },
  {
    id: 'stake-jito',
    code: 'STAKE-',
    title: 'Stake 120 SOL with Jito (7.1% APY)',
    chips: ['MARKET', 'ON-CHAIN', 'SOCIAL'],
  },
  {
    id: 'park-stables',
    code: 'AAVE-',
    title: 'Your $10K of stables earns nothing — Aave v3 pays 4.2%',
    chips: ['ON-CHAIN', 'MARKET', 'RISK'],
  },
];

export const FONT_SANS = "Geist, Inter, -apple-system, 'Helvetica Neue', sans-serif";
export const FONT_MONO = "'Geist Mono', 'JetBrains Mono', monospace";

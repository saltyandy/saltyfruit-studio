import type {CSSProperties} from 'react';

/* Values lifted from Nuvolari src/app/globals.css and layout.tsx.
   The tile renders the app at 2× (S) so a 1080×1080 video stays crisp;
   all px values below are the app's values — multiply by S when used. */
export const S = 2;

export const FONT_STACK = "Geist, system-ui, sans-serif";
export const FOREGROUND = '#1a1a2e';

export const BG_MOOD =
  'linear-gradient(180deg, #e8d5c4 0%, #f0d8c8 15%, #e6cfd0 35%, #d4c2d8 55%, #c8b8d4 70%, #dcc8d0 85%, #f0dcd0 100%)';

export const MOUNTAIN_MASK =
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 600'%3E%3Cpath d='M0,600 L0,300 Q120,200 240,280 Q360,150 480,250 Q600,100 720,200 Q840,80 960,180 Q1080,60 1200,160 Q1320,100 1440,200 L1440,600 Z' fill='white'/%3E%3C/svg%3E")`;

export const MOUNTAIN_GRADIENT =
  'linear-gradient(180deg, transparent 0%, rgba(200, 180, 210, 0.3) 30%, rgba(180, 160, 200, 0.4) 50%, rgba(220, 200, 220, 0.3) 70%, rgba(240, 220, 230, 0.2) 100%)';

export const GRAIN_URL =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`;

export const glass: CSSProperties = {
  background: 'rgba(255, 255, 255, 0.45)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
};

export const glassSubtle: CSSProperties = {
  background: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
};

/* .tag / .tag-* pills */
export const TAG_COLORS: Record<string, {background: string; color: string}> = {
  MARKET: {background: '#e8f5e9', color: '#2e7d32'},
  'ON-CHAIN': {background: '#e3f2fd', color: '#1565c0'},
  RISK: {background: '#fce4ec', color: '#c62828'},
  SOCIAL: {background: '#f3e5f5', color: '#6a1b9a'},
};

export const tagStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${2 * S}px ${8 * S}px`,
  borderRadius: 6 * S,
  fontSize: 10 * S,
  fontWeight: 600,
  letterSpacing: 0.5 * S,
  textTransform: 'uppercase',
};

/* src/data/tokens.ts — insights, verbatim */
export const INSIGHTS = [
  {id: 1, icon: '🔄', title: '2.3 wETH from Aave Leveraged Position', tags: ['MARKET', 'ON-CHAIN', 'RISK', 'SOCIAL']},
  {id: 2, icon: '💱', title: 'Swap 10 ETH to MOG', tags: ['MARKET', 'ON-CHAIN', 'RISK', 'SOCIAL']},
  {id: 3, icon: '🎯', title: 'LP Add $6.8K to the SOL/FART', tags: ['MARKET', 'ON-CHAIN', 'RISK', 'SOCIAL']},
  {id: 4, icon: '🏦', title: 'Supply USDC to Euler eeUSDC vault.', tags: ['MARKET', 'ON-CHAIN', 'RISK', 'SOCIAL']},
] as const;

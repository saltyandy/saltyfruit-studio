import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont as loadGeist} from '@remotion/google-fonts/Geist';
import {loadFont as loadGeistMono} from '@remotion/google-fonts/GeistMono';

loadGeist();
loadGeistMono();

/* "The Orb — system schematic" from the Paper case-study page, rebuilt as a
   living diagram: signal flow marches toward the agent fleet, briefings
   feed the orb, the mood needle drifts along its dial and executions pulse
   out to the right. Title chrome and the legend are dropped per the brief —
   only the schematic itself. All motion is periodic over the loop. */

export const SCHEMATIC_LOOP_S = 12;

const INK = '#1f2023';
const MUTED = '#9b9ca1';
const FAINT = '#c9cacd';
const BG = '#f2f2f1';

const GEIST = "'Geist', 'Inter', sans-serif";
const MONO = "'Geist Mono', 'JetBrains Mono', monospace";

/* layout space: the Paper asset is 2000×1210; with the chrome gone the
   window tightens to a 16:9 slice of it, widened 25% so the schematic
   sits 20% smaller in frame */
const VIEWBOX = '-250 -81 2500 1406';

const ORB = {cx: 968, cy: 634, r: 220};

type Box = {x: number; y: number; w: number; h: number; title: string; sub?: string; dashed?: boolean};

const SIGNAL_BOXES: Box[] = [
  {x: 38, y: 210, w: 245, h: 64, title: 'ON-CHAIN DATA', sub: 'nodes · indexers · mempool', dashed: true},
  {x: 38, y: 451, w: 245, h: 64, title: 'MARKET DATA', sub: 'dex/cex feeds · funding · depth', dashed: true},
  {x: 38, y: 693, w: 245, h: 64, title: 'SOCIAL SIGNAL', sub: 'x bot · mindshare · kol flow', dashed: true},
  {x: 38, y: 934, w: 245, h: 64, title: 'YOUR OWN DATA', sub: 'agents · sheets · databases', dashed: true},
];

const AGENT_BOXES: Box[] = [
  {x: 432, y: 148, w: 285, h: 68, title: 'HERMES AGENT', sub: 'routing · execution'},
  {x: 432, y: 440, w: 285, h: 68, title: 'ANTHROPIC AGENT', sub: 'reasoning · risk synthesis'},
  {x: 432, y: 730, w: 285, h: 68, title: 'CHATGPT AGENT', sub: 'narrative parsing'},
  {x: 432, y: 1022, w: 285, h: 68, title: 'GAIA AGENTS', sub: 'edge swarm · chain index'},
];

const EXEC_BOXES: Box[] = [
  {x: 1590, y: 628, w: 285, h: 62, title: 'SWAP'},
  {x: 1590, y: 738, w: 285, h: 62, title: 'REBALANCE'},
  {x: 1590, y: 848, w: 285, h: 62, title: 'ADD LIQUIDITY'},
  {x: 1590, y: 958, w: 285, h: 62, title: 'STAKE'},
];

const HISTORY_BOX: Box = {x: 1590, y: 1088, w: 285, h: 64, title: 'HISTORY', sub: 'every move, recorded', dashed: true};

const WALLETS = [
  {cy: 150, title: 'WALLET 01 · HYPERLIQUID', sub: '$496K'},
  {cy: 227, title: 'WALLET 02 · SOLANA', sub: '$305K'},
  {cy: 305, title: 'WALLET 03 · MAINNET', sub: '$81K'},
];
const WALLET_CX = 1625;
const WALLET_R = 17;

/* dotted — signal flow, two lines fanning out of each input */
const SIGNAL_PATHS = [
  'M 283 232 C 350 224, 375 200, 432 186',
  'M 283 252 C 350 320, 385 400, 432 462',
  'M 283 475 C 340 470, 385 478, 432 486',
  'M 283 493 C 350 560, 390 680, 432 756',
  'M 283 717 C 345 720, 385 760, 432 786',
  'M 283 735 C 350 830, 390 960, 432 1040',
  'M 283 952 C 350 900, 390 840, 432 800',
  'M 283 976 C 345 1010, 390 1045, 432 1060',
];
const SIGNAL_JUNCTIONS: [number, number][] = [
  [365, 359],
  [367, 621],
  [367, 893],
  [365, 1025],
];

/* dashed — agent briefing into the orb */
const BRIEFING_PATHS = [
  'M 717 186 C 790 230, 820 360, 852 466',
  'M 717 478 C 755 500, 770 520, 786 545',
  'M 717 768 C 748 760, 762 748, 788 724',
  'M 717 1052 C 790 1010, 815 900, 846 806',
];
const BRIEFING_JUNCTIONS: [number, number][] = [
  [780, 288],
  [740, 490],
  [712, 764],
  [812, 856],
];

/* dotted — dial / orb out to the live wallets */
const WALLET_PATHS = [
  'M 1180 420 C 1330 320, 1460 160, 1608 150',
  'M 1205 462 C 1360 385, 1475 240, 1608 227',
  'M 1220 505 C 1385 435, 1490 320, 1608 305',
];
const WALLET_JUNCTIONS: [number, number][] = [
  [1322, 395],
  [1416, 318],
  [1533, 310],
];

/* solid — execution, arrowhead at the box edge */
const EXEC_PATHS = [
  'M 1187 618 C 1340 630, 1460 652, 1578 659',
  'M 1186 652 C 1330 685, 1440 748, 1578 769',
  'M 1180 688 C 1315 760, 1420 848, 1578 879',
  'M 1170 724 C 1300 832, 1400 950, 1578 989',
];
const EXEC_JUNCTIONS: [number, number][] = [
  [1435, 651],
  [1370, 745],
];

/* the mood dial arc, centred on the orb */
const DIAL = {r: 313, a0: -59, a1: -8};

const rad = (deg: number) => (deg * Math.PI) / 180;
const onDial = (deg: number, r = DIAL.r): [number, number] => [
  ORB.cx + r * Math.cos(rad(deg)),
  ORB.cy + r * Math.sin(rad(deg)),
];

const dialArcPath = () => {
  const [x0, y0] = onDial(DIAL.a0);
  const [x1, y1] = onDial(DIAL.a1);
  return `M ${x0} ${y0} A ${DIAL.r} ${DIAL.r} 0 0 1 ${x1} ${y1}`;
};

const SchemBox: React.FC<{box: Box; subDy?: number}> = ({box}) => (
  <g>
    <rect
      x={box.x}
      y={box.y}
      width={box.w}
      height={box.h}
      fill="none"
      stroke={INK}
      strokeWidth={1.6}
      strokeDasharray={box.dashed ? '5 4' : undefined}
    />
    <text
      x={box.x + 24}
      y={box.y + (box.sub ? 30 : box.h / 2 + 7)}
      fontFamily={GEIST}
      fontSize={21}
      fontWeight={500}
      letterSpacing="0.08em"
      fill={INK}
    >
      {box.title}
    </text>
    {box.sub && (
      <text x={box.x + 24} y={box.y + 52} fontFamily={GEIST} fontSize={15} fill={MUTED}>
        {box.sub}
      </text>
    )}
  </g>
);

const SectionLabel: React.FC<{x: number; y: number; children: string}> = ({x, y, children}) => (
  <text x={x} y={y} fontFamily={GEIST} fontSize={16} fontWeight={500} letterSpacing="0.14em" fill={MUTED}>
    {children}
  </text>
);

/* halftone sphere: dot radius follows lambert shading, light from the
   upper left, drifting a touch over the loop */
const OrbDots: React.FC<{phase: number}> = ({phase}) => {
  const dots: React.ReactNode[] = [];
  const spacing = 13.5;
  const lightSwing = 0.18 * Math.sin(phase * 2 * Math.PI);
  const lx = -0.42 + lightSwing * 0.4;
  const ly = -0.55;
  const lz = Math.sqrt(Math.max(0.05, 1 - lx * lx - ly * ly));
  for (let gy = -ORB.r; gy <= ORB.r; gy += spacing) {
    for (let gx = -ORB.r; gx <= ORB.r; gx += spacing) {
      const d = Math.hypot(gx, gy);
      if (d > ORB.r - 6) continue;
      const nx = gx / ORB.r;
      const ny = gy / ORB.r;
      const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));
      const lambert = Math.max(0, nx * lx + ny * ly + nz * lz);
      const bright = Math.min(1, 0.12 + lambert);
      const r = 3.3 - 2.5 * bright;
      if (r < 0.55) continue;
      dots.push(
        <circle key={`${gx}:${gy}`} cx={ORB.cx + gx} cy={ORB.cy + gy} r={r} fill={INK} opacity={0.62} />
      );
    }
  }
  return <g>{dots}</g>;
};

export const SchematicFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const phase = (t % SCHEMATIC_LOOP_S) / SCHEMATIC_LOOP_S; // 0→1 per loop

  /* marching offsets — whole periods per loop keeps the cut invisible */
  const dotMarch = -phase * 10 * 12; // dasharray period 10, 12 cycles
  const dashMarch = -phase * 14 * 6; // dasharray period 14, 6 cycles

  /* mood needle rides the arc; the deck-bias diamond trails behind it */
  const needleDeg = -44 + 12 * Math.sin(phase * 2 * Math.PI);
  const diamondDeg = -24 + 8 * Math.sin(phase * 2 * Math.PI - 0.9);
  const [nx, ny] = onDial(needleDeg);
  const [dx, dy] = onDial(diamondDeg);

  const breathe = 1 + 0.008 * Math.sin(phase * 2 * Math.PI);

  return (
    <AbsoluteFill style={{backgroundColor: BG}}>
      <svg
        viewBox={VIEWBOX}
        width="100%"
        height="100%"
        style={{display: 'block'}}
        fontFamily={GEIST}
      >
        {/* ---- section labels ---- */}
        <SectionLabel x={38} y={160}>SIGNALS IN</SectionLabel>
        <SectionLabel x={432} y={130}>AGENT FLEET — ALWAYS ON</SectionLabel>
        <SectionLabel x={1588} y={102}>WALLET INPUTS · LIVE BALANCES</SectionLabel>
        <SectionLabel x={1590} y={608}>EXECUTION — ONE TAP</SectionLabel>

        {/* ---- connectors under everything ---- */}
        <g fill="none" stroke={MUTED} strokeWidth={1.6} strokeLinecap="round">
          {SIGNAL_PATHS.map((d) => (
            <path key={d} d={d} strokeDasharray="1 9" strokeDashoffset={dotMarch} />
          ))}
          {/* balances feed the orb — march runs against the path direction */}
          {WALLET_PATHS.map((d) => (
            <path key={d} d={d} strokeDasharray="1 9" strokeDashoffset={-dotMarch} />
          ))}
        </g>
        <g fill="none" stroke={INK} strokeWidth={1.7}>
          {BRIEFING_PATHS.map((d) => (
            <path key={d} d={d} strokeDasharray="7 7" strokeDashoffset={dashMarch} />
          ))}
        </g>
        <g fill="none" stroke={INK} strokeWidth={2}>
          {EXEC_PATHS.map((d, i) => (
            <g key={d}>
              <path d={d} />
              {/* travelling pulse, one lap per loop, staggered */}
              <path
                d={d}
                pathLength={1000}
                stroke={INK}
                strokeWidth={4.5}
                strokeLinecap="round"
                strokeDasharray="34 966"
                strokeDashoffset={1000 * (1 - ((phase + i * 0.25) % 1))}
              />
            </g>
          ))}
        </g>
        {/* arrowheads into the execution boxes */}
        {EXEC_BOXES.map((b) => {
          const y = b.y + 31;
          return <path key={b.title} d={`M ${b.x - 14} ${y - 6} L ${b.x - 2} ${y} L ${b.x - 14} ${y + 6} Z`} fill={INK} />;
        })}
        {/* stake → history */}
        <path
          d="M 1732 1024 L 1732 1078"
          stroke={INK}
          strokeWidth={1.7}
          strokeDasharray="5 5"
          strokeDashoffset={dashMarch}
          fill="none"
        />
        <path d="M 1726 1072 L 1732 1084 L 1738 1072 Z" fill={INK} />

        {/* junction dots */}
        {[...SIGNAL_JUNCTIONS, ...BRIEFING_JUNCTIONS, ...WALLET_JUNCTIONS, ...EXEC_JUNCTIONS].map(([jx, jy]) => (
          <circle key={`${jx}:${jy}`} cx={jx} cy={jy} r={4} fill={INK} />
        ))}

        {/* ---- the mood orb ---- */}
        <g transform={`translate(${ORB.cx} ${ORB.cy}) scale(${breathe}) translate(${-ORB.cx} ${-ORB.cy})`}>
          <circle cx={ORB.cx} cy={ORB.cy} r={ORB.r} fill={BG} stroke={INK} strokeWidth={1.8} />
          <OrbDots phase={phase} />
          {/* faint globe wireframe */}
          <g fill="none" stroke={INK} strokeWidth={1} strokeDasharray="4 5" opacity={0.28}>
            <ellipse cx={ORB.cx} cy={ORB.cy} rx={ORB.r * 0.46} ry={ORB.r} />
            <ellipse cx={ORB.cx} cy={ORB.cy} rx={ORB.r} ry={ORB.r * 0.36} />
          </g>
          {/* crosshair + radius */}
          <g stroke={INK} strokeWidth={1.4}>
            <line x1={ORB.cx - 12} y1={ORB.cy} x2={ORB.cx + 12} y2={ORB.cy} />
            <line x1={ORB.cx} y1={ORB.cy - 12} x2={ORB.cx} y2={ORB.cy + 12} />
            <line
              x1={ORB.cx}
              y1={ORB.cy}
              x2={ORB.cx + ORB.r * Math.cos(rad(212))}
              y2={ORB.cy - ORB.r * Math.sin(rad(212))}
              opacity={0.55}
            />
          </g>
          <text x={800} y={748} fontFamily={MONO} fontSize={14} fill={MUTED}>
            R150
          </text>
        </g>
        <text
          x={ORB.cx}
          y={903}
          textAnchor="middle"
          fontFamily={GEIST}
          fontSize={21}
          fontWeight={500}
          letterSpacing="0.1em"
          fill={INK}
        >
          MOOD ORB — LIVING PORTFOLIO
        </text>
        <text x={ORB.cx} y={930} textAnchor="middle" fontFamily={GEIST} fontSize={15} letterSpacing="0.04em" fill={MUTED}>
          SURFACE SPLITS INTO DEGEN / BALANCED / SAVER TERRITORIES, SIZED BY THE MIX
        </text>

        {/* ---- mood dial ---- */}
        <path d={dialArcPath()} fill="none" stroke={INK} strokeWidth={1.8} />
        {Array.from({length: 12}, (_, i) => {
          const a = DIAL.a0 + ((DIAL.a1 - DIAL.a0) * i) / 11;
          const [tx0, ty0] = onDial(a, DIAL.r - (i % 3 === 0 ? 10 : 6));
          const [tx1, ty1] = onDial(a, DIAL.r);
          return <line key={a} x1={tx0} y1={ty0} x2={tx1} y2={ty1} stroke={INK} strokeWidth={1.4} />;
        })}
        {/* needle — portfolio mood */}
        <g transform={`translate(${nx} ${ny}) rotate(${needleDeg})`}>
          <line x1={-24} y1={0} x2={22} y2={0} stroke={INK} strokeWidth={5} strokeLinecap="round" />
        </g>
        {/* diamond — insight deck bias */}
        <g transform={`translate(${dx} ${dy}) rotate(45)`}>
          <rect x={-6.5} y={-6.5} width={13} height={13} fill={BG} stroke={INK} strokeWidth={1.8} />
        </g>
        <text x={1128} y={352} fontFamily={GEIST} fontSize={16} letterSpacing="0.1em" fill={INK}>DEGEN</text>
        <text x={1247} y={460} fontFamily={GEIST} fontSize={16} letterSpacing="0.1em" fill={INK}>BALANCED</text>
        <text x={1292} y={608} fontFamily={GEIST} fontSize={16} letterSpacing="0.1em" fill={INK}>SAVER</text>

        {/* dial mini-legend */}
        <text x={1410} y={463} fontFamily={GEIST} fontSize={15} letterSpacing="0.06em" fill={MUTED}>
          MOOD DIAL — DRAG ANYWHERE NEAR THE ARC
        </text>
        <line x1={1412} y1={487} x2={1432} y2={487} stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        <path d="M 1430 481 L 1440 487 L 1430 493 Z" fill={INK} />
        <text x={1448} y={493} fontFamily={GEIST} fontSize={16} fill={INK}>PORTFOLIO MOOD</text>
        <g transform="translate(1424 516) rotate(45)">
          <rect x={-5.5} y={-5.5} width={11} height={11} fill="none" stroke={INK} strokeWidth={1.6} />
        </g>
        <text x={1448} y={522} fontFamily={GEIST} fontSize={16} fill={INK}>INSIGHT DECK BIAS</text>

        {/* ---- wallets ---- */}
        {WALLETS.map((wallet) => (
          <g key={wallet.title}>
            <circle cx={WALLET_CX} cy={wallet.cy} r={WALLET_R} fill="none" stroke={INK} strokeWidth={1.5} />
            {[-8, -4, 0, 4, 8].map((oy) =>
              [-8, -4, 0, 4, 8].map((ox) =>
                Math.hypot(ox, oy) <= WALLET_R - 5 ? (
                  <circle key={`${ox}:${oy}`} cx={WALLET_CX + ox} cy={wallet.cy + oy} r={1.1} fill={INK} opacity={0.6} />
                ) : null
              )
            )}
            <text x={1658} y={wallet.cy - 1} fontFamily={GEIST} fontSize={17} fontWeight={500} letterSpacing="0.06em" fill={INK}>
              {wallet.title}
            </text>
            <text x={1658} y={wallet.cy + 21} fontFamily={GEIST} fontSize={15} fill={MUTED}>
              {wallet.sub}
            </text>
          </g>
        ))}

        {/* ---- boxes ---- */}
        {SIGNAL_BOXES.map((b) => (
          <SchemBox key={b.title} box={b} />
        ))}
        {AGENT_BOXES.map((b) => (
          <SchemBox key={b.title} box={b} />
        ))}
        {EXEC_BOXES.map((b) => (
          <SchemBox key={b.title} box={b} />
        ))}
        <SchemBox box={HISTORY_BOX} />
      </svg>
    </AbsoluteFill>
  );
};

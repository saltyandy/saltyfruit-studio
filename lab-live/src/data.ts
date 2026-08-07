/*
 * Lifted verbatim from Nuvolari_Proto_Build/src/data.ts — the types, chip
 * styling and the two insights the scripted tile walks through. Keep in
 * sync with the app; nothing here is rewritten for the portfolio.
 */

export type ChipKind = "MARKET" | "ON-CHAIN" | "RISK" | "SOCIAL";

export const signalMeta: Record<ChipKind, { label: string; dot: string }> = {
  MARKET: { label: "Market", dot: "#1d9d74" },
  "ON-CHAIN": { label: "On-chain", dot: "#2f7bc4" },
  RISK: { label: "Risk", dot: "#d05460" },
  SOCIAL: { label: "Social", dot: "#8f6fc2" },
};

export const chipStyles: Record<ChipKind, { bg: string; border: string }> = {
  MARKET: { bg: "rgba(191,255,234,0.8)", border: "#83b8c9" },
  "ON-CHAIN": { bg: "rgba(154,228,253,0.8)", border: "#2b6077" },
  RISK: { bg: "rgba(255,176,181,0.8)", border: "#ee6f78" },
  SOCIAL: { bg: "rgba(246,234,255,0.7)", border: "#ba95d6" },
};

export type SourceDetail =
  | {
      type: "chart";
      label: string;
      points: number[];
      delta: string;
      up: boolean;
      stats: { label: string; value: string }[];
    }
  | {
      type: "tweets";
      tweets: {
        name: string;
        handle: string;
        time: string;
        text: string;
        likes: string;
        reposts: string;
      }[];
    }
  | {
      type: "bars";
      label: string;
      bars: { label: string; value: number }[];
      note: string;
    }
  | {
      type: "gauge";
      label: string;
      /** 0–100 */
      score: number;
      level: string;
      factors: { label: string; value: string }[];
    };

export type InsightSource = { kind: ChipKind; text: string; detail?: SourceDetail };

export type Insight = {
  id: string;
  title: string;
  shortTitle: string;
  chips: { kind: ChipKind; count?: number }[];
  sources: InsightSource[];
};

export const insights: Insight[] = [
  {
    id: "stake-idle-eth",
    title: "Your 17 ETH sits idle — wstETH pays 3.2% with no lockup",
    shortTitle: "Stake idle ETH",
    chips: [{ kind: "ON-CHAIN" }, { kind: "MARKET" }, { kind: "SOCIAL" }],
    sources: [
      {
        kind: "ON-CHAIN",
        text: "wstETH has held within 5 bps of fair value for a year — same asset, plus a 3.2% drip, redeemable any time.",
        detail: {
          type: "bars",
          label: "wstETH/ETH deviation · 12m (bps)",
          bars: [
            { label: "J", value: 4 },
            { label: "F", value: 3 },
            { label: "M", value: 5 },
            { label: "A", value: 2 },
            { label: "M", value: 4 },
            { label: "J", value: 3 },
            { label: "J", value: 2 },
            { label: "A", value: 3 },
            { label: "S", value: 4 },
            { label: "O", value: 2 },
            { label: "N", value: 3 },
            { label: "D", value: 2 },
          ],
          note: "Within 5 bps of fair value all year",
        },
      },
      {
        kind: "MARKET",
        text: "Idle ETH has underperformed staked ETH in every market regime over the trailing three years.",
        detail: {
          type: "chart",
          label: "Staked vs idle ETH · 3y (indexed)",
          points: [100, 103, 107, 110, 114, 118, 123, 127, 131, 136, 140, 145],
          delta: "+3.2% APY",
          up: true,
          stats: [
            { label: "Your idle ETH", value: "$50K" },
            { label: "Lockup", value: "None" },
            { label: "Yearly drip", value: "~$1.6K" },
          ],
        },
      },
      {
        kind: "SOCIAL",
        text: "Lido remains the most integrated LST in DeFi; sentiment around wstETH collateral use keeps improving.",
        detail: {
          type: "tweets",
          tweets: [
            {
              name: "Lido",
              handle: "@LidoFinance",
              time: "1d",
              text: "wstETH is now live as collateral across 240+ integrations. The most composable LST keeps compounding.",
              likes: "1.1K",
              reposts: "260",
            },
            {
              name: "gas fee refugee",
              handle: "@gasfeerefugee",
              time: "3d",
              text: "holding raw ETH in 2026 is paying a 3.2% inconvenience fee to nobody. wrap it, forget it, check back in a year.",
              likes: "437",
              reposts: "81",
            },
          ],
        },
      },
    ],
  },
  {
    id: "park-stables",
    title: "Your $10K of stables earns nothing — Aave v3 pays 4.2%",
    shortTitle: "Park stables",
    chips: [{ kind: "ON-CHAIN" }, { kind: "MARKET" }, { kind: "SOCIAL" }],
    sources: [
      {
        kind: "ON-CHAIN",
        text: "Aave v3 stablecoin supply has held above 4% for 45 days with utilisation steady — boring in the best way.",
        detail: {
          type: "bars",
          label: "Stable supply APY · 45d (%)",
          bars: [
            { label: "W1", value: 4.1 },
            { label: "W2", value: 4.3 },
            { label: "W3", value: 4.2 },
            { label: "W4", value: 4.4 },
            { label: "W5", value: 4.3 },
            { label: "W6", value: 4.2 },
            { label: "W7", value: 4.2 },
          ],
          note: "Utilisation steady at 78%",
        },
      },
      {
        kind: "MARKET",
        text: "Idle cash quietly loses to everything. The deepest audited money market on mainnet fixes that in one click.",
        detail: {
          type: "chart",
          label: "Parked vs idle · 90d (%)",
          points: [0, 0.3, 0.7, 1.1, 1.4, 1.8, 2.2, 2.5, 2.9, 3.3, 3.6, 4.0],
          delta: "+4.2% APY",
          up: true,
          stats: [
            { label: "Your stables", value: "$10K" },
            { label: "Yearly drip", value: "~$420" },
            { label: "Withdrawal", value: "Any time" },
          ],
        },
      },
      {
        kind: "SOCIAL",
        text: "Aave's quarterly risk reviews came back clean again — no governance or security flags this cycle.",
        detail: {
          type: "tweets",
          tweets: [
            {
              name: "Aave",
              handle: "@aave",
              time: "2d",
              text: "Quarterly risk review complete. No governance or security flags across v3 markets. Steady as she goes.",
              likes: "2.2K",
              reposts: "410",
            },
            {
              name: "stable studies",
              handle: "@stablestudies",
              time: "1d",
              text: "ranked every stablecoin venue by audits, depth and time-without-incident again this quarter. Aave v3 is still the boring pick, and boring is the point.",
              likes: "512",
              reposts: "97",
            },
          ],
        },
      },
    ],
  },
  {
    id: "trim-hype",
    title: "Trim HYPE by 15% — it has grown to 44% of your book",
    shortTitle: "Trim HYPE",
    chips: [{ kind: "MARKET" }, { kind: "ON-CHAIN" }, { kind: "RISK" }],
    sources: [
      {
        kind: "MARKET",
        text: "HYPE is up 27% on your entry and now dominates the portfolio — a 15% trim locks the gain without leaving the trade.",
        detail: {
          type: "chart",
          label: "HYPE position vs entry · 90d ($K)",
          points: [303, 296, 310, 318, 312, 325, 334, 348, 341, 356, 371, 385],
          delta: "+27% unrealised",
          up: true,
          stats: [
            { label: "Position", value: "$385K" },
            { label: "Book share", value: "44%" },
            { label: "Trim frees", value: "$58K" },
          ],
        },
      },
      {
        kind: "ON-CHAIN",
        text: "HYPE order books are the deepest they have been in 60 days — a 15% trim clears without moving the price.",
        detail: {
          type: "bars",
          label: "HYPE exit depth · 7d ($M)",
          bars: [
            { label: "M", value: 3.1 },
            { label: "T", value: 3.4 },
            { label: "W", value: 3.9 },
            { label: "T", value: 4.2 },
            { label: "F", value: 4.8 },
            { label: "S", value: 5.3 },
            { label: "S", value: 5.6 },
          ],
          note: "Deepest books in 60 days",
        },
      },
      {
        kind: "RISK",
        text: "Concentration is the book's biggest open risk: HYPE plus kHYPE is 56% of everything you own.",
        detail: {
          type: "gauge",
          label: "Concentration risk",
          score: 68,
          level: "Elevated",
          factors: [
            { label: "HYPE share", value: "44%" },
            { label: "With kHYPE", value: "56%" },
            { label: "Suggested trim", value: "15%" },
          ],
        },
      },
    ],
  },
];

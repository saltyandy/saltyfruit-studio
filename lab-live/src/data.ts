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
  /** carried by the app's data — the portfolio card doesn't render these */
  action?: string;
  actionIcon?: string;
  tokenIcons?: string[];
  chips: { kind: ChipKind; count?: number }[];
  sources: InsightSource[];
};

export type Mood = "degen" | "balanced" | "saver";

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

export const moodInsights: Record<Mood, Insight[]> = {
  balanced: insights,
  degen: [
    {
      id: "press-hype",
      title: "Press the HYPE breakout — funding is still paying longs",
      shortTitle: "Press HYPE",
      action: "swap",
      actionIcon: "/assets/imgIcon2.svg",
      tokenIcons: ["/assets/tokens/hype.png"],
      chips: [{ kind: "MARKET" }, { kind: "ON-CHAIN" }, { kind: "RISK" }],
      sources: [
        {
          kind: "MARKET",
          text: "HYPE cleared its high on 2.4x volume and funding hasn't flipped — the crowd is not positioned for this yet.",
          detail: {
            type: "chart",
            label: "HYPE · 7d",
            points: [28, 29, 31, 30, 33, 35, 34, 37, 40, 43, 42, 46],
            delta: "+34% · ATH break",
            up: true,
            stats: [
              { label: "Funding", value: "Neutral" },
              { label: "Vol vs avg", value: "2.4x" },
              { label: "Crowding", value: "Low" },
            ],
          },
        },
        {
          kind: "ON-CHAIN",
          text: "Open interest is building while exchange balances drain — spot is being taken off the table under the move.",
          detail: {
            type: "bars",
            label: "HYPE open interest · 24h ($M)",
            bars: [
              { label: "00", value: 51 },
              { label: "04", value: 54 },
              { label: "08", value: 58 },
              { label: "12", value: 61 },
              { label: "16", value: 64 },
              { label: "20", value: 67 },
            ],
            note: "OI +31% · exchange outflows accelerating",
          },
        },
        {
          kind: "RISK",
          text: "You are already 44% HYPE — pressing takes the book past half. This is conviction sizing, not diversification.",
          detail: {
            type: "gauge",
            label: "Chase risk",
            score: 82,
            level: "High",
            factors: [
              { label: "Book share after", value: "52%" },
              { label: "Drawdown -19%", value: "Erases the gain" },
              { label: "Suggested stop", value: "-12%" },
            ],
          },
        },
      ],
    },
    {
      id: "loop-khype",
      title: "Loop your kHYPE to 3x — the spread clears 4.1% after borrow",
      shortTitle: "kHYPE loop",
      action: "stake",
      actionIcon: "/assets/imgIcon4.svg",
      tokenIcons: ["/assets/tokens/khype.png"],
      chips: [{ kind: "ON-CHAIN" }, { kind: "RISK" }, { kind: "SOCIAL" }],
      sources: [
        {
          kind: "ON-CHAIN",
          text: "The kHYPE staking-loop spread has widened for six straight weeks — 4.1% net of borrow at 3x.",
          detail: {
            type: "bars",
            label: "Loop spread after borrow · 8w (%)",
            bars: [
              { label: "W1", value: 2.2 },
              { label: "W2", value: 2.5 },
              { label: "W3", value: 2.4 },
              { label: "W4", value: 2.9 },
              { label: "W5", value: 3.2 },
              { label: "W6", value: 3.5 },
              { label: "W7", value: 3.9 },
              { label: "W8", value: 4.1 },
            ],
            note: "Widest spread since launch",
          },
        },
        {
          kind: "RISK",
          text: "The loop stacks HYPE-correlated risk on a book that is already 56% HYPE-correlated. Liquidation sits at -24%.",
          detail: {
            type: "gauge",
            label: "Loop risk · 3x",
            score: 84,
            level: "Extreme",
            factors: [
              { label: "Liquidation", value: "-24% HYPE" },
              { label: "Health factor", value: "1.22" },
              { label: "Correlates with", value: "56% of book" },
            ],
          },
        },
        {
          kind: "SOCIAL",
          text: "kHYPE season talk is everywhere on CT — early-loop wallets are being watched and copied.",
          detail: {
            type: "tweets",
            tweets: [
              {
                name: "Kinetiq",
                handle: "@kinetiq_xyz",
                time: "4h",
                text: "kHYPE TVL crossed $400M this week. The loop meta is just getting started — mind your health factors out there.",
                likes: "980",
                reposts: "214",
              },
              {
                name: "hyperliquid maxi",
                handle: "@hlmaxi",
                time: "1h",
                text: "every cycle has one carry trade everyone brags about at dinner. this cycle it's the kHYPE loop. 4% real spread while it lasts.",
                likes: "1.6K",
                reposts: "390",
              },
            ],
          },
        },
      ],
    },
    {
      id: "hype-sol-lp",
      title: "Seed a HYPE/SOL pool — fees are annualising at 96%",
      shortTitle: "HYPE/SOL LP",
      action: "liquidity",
      actionIcon: "/assets/imgIcon3.svg",
      tokenIcons: ["/assets/tokens/hype.png", "/assets/tokens/sol.png"],
      chips: [{ kind: "ON-CHAIN" }, { kind: "MARKET" }, { kind: "RISK" }],
      sources: [
        {
          kind: "ON-CHAIN",
          text: "Breakout volume is being paid straight to LPs: the pool's fee run-rate has tripled in a week.",
          detail: {
            type: "bars",
            label: "Pool fees annualised · 7d (%)",
            bars: [
              { label: "M", value: 31 },
              { label: "T", value: 38 },
              { label: "W", value: 52 },
              { label: "T", value: 61 },
              { label: "F", value: 74 },
              { label: "S", value: 89 },
              { label: "S", value: 96 },
            ],
            note: "Fee run-rate 3x in a week",
          },
        },
        {
          kind: "MARKET",
          text: "You hold both legs already — seeding the pool converts breakout churn into yield without buying anything.",
          detail: {
            type: "chart",
            label: "HYPE/SOL volume · 7d ($M)",
            points: [18, 21, 19, 24, 28, 27, 33, 38, 36, 44, 51, 58],
            delta: "+2.2x avg volume",
            up: true,
            stats: [
              { label: "You hold", value: "Both legs" },
              { label: "Buy needed", value: "None" },
              { label: "Suggested size", value: "$15K" },
            ],
          },
        },
        {
          kind: "RISK",
          text: "If HYPE keeps running, IL will eat part of the upside — this position trades moonshot for cash flow.",
          detail: {
            type: "gauge",
            label: "Degen LP risk",
            score: 76,
            level: "High",
            factors: [
              { label: "IL if HYPE +50%", value: "-8.2%" },
              { label: "Fresh liquidity", value: "38% < 7d" },
              { label: "Trade-off", value: "Upside → fees" },
            ],
          },
        },
      ],
    },
    {
      id: "btc-fart-flip",
      title: "Rotate the sleepy BTC stack into the FART flush",
      shortTitle: "BTC → FART",
      action: "rebalance",
      actionIcon: "/assets/imgIcon1.svg",
      tokenIcons: ["/assets/tokens/btc.png", "/assets/tokens/fart.png"],
      chips: [{ kind: "SOCIAL" }, { kind: "MARKET" }, { kind: "RISK" }],
      sources: [
        {
          kind: "SOCIAL",
          text: "FART flushed 18% into its unlock and the mention curve just turned back up — the crowd smells a bounce.",
          detail: {
            type: "tweets",
            tweets: [
              {
                name: "unlock watcher",
                handle: "@unlockwatcher",
                time: "2h",
                text: "FART unlock is fully absorbed. sellers done, mentions curling back up, funding reset to flat. textbook flush-and-reload if you believe in textbooks for memecoins.",
                likes: "870",
                reposts: "196",
              },
              {
                name: "trench radar",
                handle: "@trenchradar",
                time: "40m",
                text: "FART bottom callers are out in force. they're early or they're right, and on memes those are usually the same thing.",
                likes: "1.2K",
                reposts: "280",
              },
            ],
          },
        },
        {
          kind: "MARKET",
          text: "Your BTC has moved 1.2% in a month. In degen terms it is furniture — this trade puts it to work.",
          detail: {
            type: "chart",
            label: "FART · 14d",
            points: [31, 30, 29, 27, 25.5, 24, 23.2, 24.1, 23.8, 24.6, 25.2, 25.8],
            delta: "-18% flush, basing",
            up: false,
            stats: [
              { label: "Your BTC", value: "$30K" },
              { label: "BTC 30d move", value: "1.2%" },
              { label: "Unlock", value: "Absorbed" },
            ],
          },
        },
        {
          kind: "RISK",
          text: "This swaps the book's only boring asset for its most volatile one. Only size what can go to zero.",
          detail: {
            type: "gauge",
            label: "Rotation risk",
            score: 93,
            level: "Extreme",
            factors: [
              { label: "Meme half-life", value: "Days" },
              { label: "Book stability", value: "Loses its anchor" },
              { label: "Loss tolerance", value: "Total" },
            ],
          },
        },
      ],
    },
  ],
  saver: [
    {
      id: "park-stables",
      title: "Your $10K of stables earns nothing — Aave v3 pays 4.2%",
      shortTitle: "Park stables",
      action: "stake",
      actionIcon: "/assets/imgIcon4.svg",
      tokenIcons: ["/assets/tokens/usdc.png", "/assets/tokens/usdt.png"],
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
      id: "harvest-hype",
      title: "Harvest the HYPE run — move $40K of profit into USDC",
      shortTitle: "Harvest HYPE",
      action: "rebalance",
      actionIcon: "/assets/imgIcon1.svg",
      tokenIcons: ["/assets/tokens/hype.png", "/assets/tokens/usdc.png"],
      chips: [{ kind: "RISK" }, { kind: "MARKET" }, { kind: "ON-CHAIN" }],
      sources: [
        {
          kind: "RISK",
          text: "Nearly half the portfolio rides one token. Harvesting $40K banks most of the gain and cuts the swing.",
          detail: {
            type: "gauge",
            label: "Portfolio swing risk",
            score: 71,
            level: "Elevated",
            factors: [
              { label: "HYPE share", value: "44%" },
              { label: "Daily swing", value: "±$19K" },
              { label: "After harvest", value: "±$12K" },
            ],
          },
        },
        {
          kind: "MARKET",
          text: "HYPE is stretched 22% above its 30-day average — harvests into strength beat harvests into panic.",
          detail: {
            type: "chart",
            label: "HYPE vs 30d average (%)",
            points: [2, 4, 3, 6, 9, 8, 12, 15, 14, 18, 20, 22],
            delta: "+22% extended",
            up: true,
            stats: [
              { label: "Unrealised", value: "+$82K" },
              { label: "Harvest", value: "$40K" },
              { label: "Keeps riding", value: "$345K" },
            ],
          },
        },
        {
          kind: "ON-CHAIN",
          text: "The largest HYPE wallets have been quietly trimming into this strength for a week. Follow the smart exits.",
          detail: {
            type: "bars",
            label: "Top-100 wallet net flow · 7d ($M)",
            bars: [
              { label: "M", value: 1.8 },
              { label: "T", value: 2.4 },
              { label: "W", value: 2.1 },
              { label: "T", value: 3.0 },
              { label: "F", value: 3.6 },
              { label: "S", value: 4.1 },
              { label: "S", value: 4.4 },
            ],
            note: "Net distribution, 7 straight days",
          },
        },
      ],
    },
    {
      id: "jito-second-stack",
      title: "Put the second SOL stack to work — Jito nets 7.1% with MEV",
      shortTitle: "Stake SOL",
      action: "stake",
      actionIcon: "/assets/imgIcon4.svg",
      tokenIcons: ["/assets/tokens/sol.png"],
      chips: [{ kind: "ON-CHAIN" }, { kind: "MARKET" }, { kind: "SOCIAL" }],
      sources: [
        {
          kind: "ON-CHAIN",
          text: "Your $175K SOL stack earns nothing while Jito's MEV-boosted yield has climbed to 7.1% net.",
          detail: {
            type: "bars",
            label: "Jito net yield · 8w (%)",
            bars: [
              { label: "W1", value: 6.4 },
              { label: "W2", value: 6.5 },
              { label: "W3", value: 6.6 },
              { label: "W4", value: 6.8 },
              { label: "W5", value: 6.7 },
              { label: "W6", value: 6.9 },
              { label: "W7", value: 7.0 },
              { label: "W8", value: 7.1 },
            ],
            note: "MEV adds +0.8% over vanilla staking",
          },
        },
        {
          kind: "MARKET",
          text: "jitoSOL has stayed within 10 bps of peg for six months — the yield comes with exit liquidity intact.",
          detail: {
            type: "chart",
            label: "jitoSOL/SOL peg · 6m",
            points: [99.96, 99.98, 100.01, 99.97, 100.02, 99.99, 100.0, 99.98, 100.01, 100.0, 99.99, 100.02],
            delta: "±10 bps · 6m",
            up: true,
            stats: [
              { label: "Your stack", value: "$175K" },
              { label: "Yearly drip", value: "~$12.4K" },
              { label: "Liquidity", value: "Instant" },
            ],
          },
        },
        {
          kind: "SOCIAL",
          text: "Jito is still the default recommendation across validator and research communities — no flags this quarter.",
          detail: {
            type: "tweets",
            tweets: [
              {
                name: "Jito",
                handle: "@jito_sol",
                time: "8h",
                text: "MEV rewards hit another quarterly record. jitoSOL holders captured 0.8% over vanilla staking, fully liquid the whole way.",
                likes: "740",
                reposts: "132",
              },
              {
                name: "sol validator notes",
                handle: "@laine_sa",
                time: "1d",
                text: "If you're staking SOL and not capturing MEV you're leaving ~80bps on the table. Jito remains the default recommendation.",
                likes: "301",
                reposts: "45",
              },
            ],
          },
        },
      ],
    },
    {
      id: "fart-to-btc",
      title: "Sweep the FART bag into BTC before the meme tide turns",
      shortTitle: "FART → BTC",
      action: "swap",
      actionIcon: "/assets/imgIcon2.svg",
      tokenIcons: ["/assets/tokens/fart.png", "/assets/tokens/btc.png"],
      chips: [{ kind: "MARKET" }, { kind: "SOCIAL" }, { kind: "RISK" }],
      sources: [
        {
          kind: "MARKET",
          text: "FART against BTC is rolling over — the flyer did its job, and BTC is where finished trades go to rest.",
          detail: {
            type: "chart",
            label: "FART/BTC ratio · 30d",
            points: [1.0, 1.02, 0.99, 0.97, 0.98, 0.95, 0.93, 0.94, 0.91, 0.89, 0.9, 0.87],
            delta: "-13% vs BTC",
            up: false,
            stats: [
              { label: "Your FART", value: "$22.7K" },
              { label: "Realised if swept", value: "+$6.1K" },
              { label: "Destination", value: "BTC" },
            ],
          },
        },
        {
          kind: "SOCIAL",
          text: "Attention has moved on: FART mentions are half their peak and the accounts that pumped it are pumping elsewhere.",
          detail: {
            type: "tweets",
            tweets: [
              {
                name: "meme velocity",
                handle: "@memevelocity",
                time: "5h",
                text: "FART mentions -52% from the weekly peak. attention is rotating and the exit doors get smaller from here.",
                likes: "690",
                reposts: "150",
              },
              {
                name: "trench survivor",
                handle: "@trenchsurvivor",
                time: "9h",
                text: "you don't sell a meme because it's over. you sell because everyone else is about to realise it's over.",
                likes: "2.3K",
                reposts: "510",
              },
            ],
          },
        },
        {
          kind: "RISK",
          text: "After the sweep the book's most volatile position becomes its calmest — residual risk drops to Low.",
          detail: {
            type: "gauge",
            label: "Residual risk after sweep",
            score: 24,
            level: "Low",
            factors: [
              { label: "Volatility removed", value: "3.4x book avg" },
              { label: "BTC 30d vol", value: "0.4x book avg" },
              { label: "Regret risk", value: "If FART 2x's" },
            ],
          },
        },
      ],
    },
  ],
};

import { signalMeta, type ChipKind, type SourceDetail } from "./data";

/**
 * Dense evidence behind an expanded signal chip on a surfaced insight:
 * MARKET → sparkline + stat row, SOCIAL → demo tweets, ON-CHAIN → activity
 * bar graph, RISK → gauge with its factors. Instrument styling — mono
 * microtype, hairlines, jewel-tone accents from signalMeta.
 */

const GAIN = "#1d9d74";
const LOSS = "#d05460";

/** tiny colored disc with initials, stands in for a tweet avatar */
const avatarTones = ["#8f6fc2", "#2f7bc4", "#1d9d74", "#c4841d"];

function Sparkline({ points, up }: { points: number[]; up: boolean }) {
  const w = 312;
  const h = 56;
  const pad = 3;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const x = (i: number) => pad + (i / (points.length - 1)) * (w - pad * 2);
  const y = (v: number) => h - pad - ((v - min) / span) * (h - pad * 2);
  const line = points.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const color = up ? GAIN : LOSS;
  const gid = `spark-${up ? "up" : "down"}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* hairline baseline grid */}
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={pad} x2={w - pad} y1={h * f} y2={h * f} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
      ))}
      <polygon points={`${pad},${h - pad} ${line} ${w - pad},${h - pad}`} fill={`url(#${gid})`} />
      <polyline points={line} stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={x(points.length - 1)} cy={y(points[points.length - 1])} r="2.4" fill={color} />
    </svg>
  );
}

export default function SourceDetailView({
  kind,
  detail,
}: {
  kind: ChipKind;
  detail: SourceDetail;
}) {
  const accent = signalMeta[kind].dot;

  if (detail.type === "chart") {
    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-black/40">
            {detail.label}
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-[0.1em]"
            style={{ color: detail.up ? GAIN : LOSS }}
          >
            {detail.delta}
          </span>
        </div>
        <Sparkline points={detail.points} up={detail.up} />
        <div className="flex divide-x divide-black/10 rounded-[8px] border border-black/10 bg-white/50">
          {detail.stats.map((s) => (
            <div key={s.label} className="flex flex-1 flex-col gap-0.5 px-2 py-1.5">
              <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-black/35">
                {s.label}
              </span>
              <span className="text-[10px] leading-3 text-[#191b26]">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (detail.type === "tweets") {
    return (
      <div className="flex flex-col gap-1.5">
        {detail.tweets.map((t, i) => (
          <div key={t.handle} className="rounded-[10px] border border-black/10 bg-white/55 p-2">
            <div className="flex items-center gap-1.5">
              <span
                className="grid size-5 shrink-0 place-items-center rounded-full text-[8px] font-medium text-white"
                style={{ background: avatarTones[i % avatarTones.length] }}
              >
                {t.name.slice(0, 1).toUpperCase()}
              </span>
              <span className="truncate text-[10px] font-medium text-[#191b26]">{t.name}</span>
              <span className="truncate font-mono text-[8px] text-black/35">
                {t.handle} · {t.time}
              </span>
            </div>
            <p className="pt-1 text-[10.5px] leading-[14px] text-[#3f3f46]">{t.text}</p>
            <div className="flex gap-3 pt-1 font-mono text-[8px] text-black/35">
              <span>♥ {t.likes}</span>
              <span>⇄ {t.reposts}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (detail.type === "bars") {
    const values = detail.bars.map((b) => b.value);
    const max = Math.max(...values) || 1;
    const min = Math.min(...values);
    // scale from below the series floor so narrow bands still show shape
    const base = min - Math.max(max - min, max * 0.08);
    const norm = (v: number) => (v - base) / (max - base || 1);
    return (
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-black/40">
          {detail.label}
        </span>
        <div className="flex h-[52px] items-end gap-1">
          {detail.bars.map((b, i) => (
            <div key={b.label + i} className="flex flex-1 flex-col items-center gap-0.5">
              <div
                className="w-full rounded-t-[3px]"
                style={{
                  height: `${Math.max(6, norm(b.value) * 44)}px`,
                  background: accent,
                  opacity: 0.35 + 0.65 * norm(b.value),
                }}
              />
              <span className="font-mono text-[7px] uppercase text-black/35">{b.label}</span>
            </div>
          ))}
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-black/45">
          {detail.note}
        </span>
      </div>
    );
  }

  // gauge
  const pos = Math.min(100, Math.max(0, detail.score));
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-black/40">
          {detail.label}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: LOSS }}>
          {detail.level} · {detail.score}
        </span>
      </div>
      <div className="relative h-[6px] rounded-full" style={{
        background: `linear-gradient(90deg, ${GAIN} 0%, #c4841d 55%, ${LOSS} 100%)`,
        opacity: 0.85,
      }}>
        <span
          className="absolute top-1/2 size-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#191b26] shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
          style={{ left: `${pos}%` }}
        />
      </div>
      <div className="flex flex-col divide-y divide-black/[0.07] rounded-[8px] border border-black/10 bg-white/50 px-2">
        {detail.factors.map((f) => (
          <div key={f.label} className="flex items-center justify-between py-1">
            <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-black/40">
              {f.label}
            </span>
            <span className="text-[10px] text-[#191b26]">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

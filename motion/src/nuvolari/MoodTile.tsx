import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Orb} from './Orb';
import {
  S,
  FONT_STACK,
  FOREGROUND,
  BG_MOOD,
  MOUNTAIN_MASK,
  MOUNTAIN_GRADIENT,
  GRAIN_URL,
  glass,
  glassSubtle,
  tagStyle,
  TAG_COLORS,
  INSIGHTS,
} from './theme';
import './fonts';

export const TILE_DURATION_S = 10;

/* gsap "power3.out" is a cubic ease-out; "power3.in" its inverse —
   reproduced exactly with Remotion easings so renders are deterministic. */
const power3Out = Easing.out(Easing.cubic);
const power3In = Easing.in(Easing.cubic);

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/* gsap.from({y, opacity: 0, duration, delay, ease: power3.out}) plus a
   mirrored exit so the loop restarts cleanly (frame 0 and the last frames
   are both background-only). */
const useCardMotion = (enterDelay: number, exitStart: number) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const enter = interpolate(t, [enterDelay, enterDelay + 0.8], [0, 1], {...clamp, easing: power3Out});
  const exit = interpolate(t, [exitStart, exitStart + 0.6], [0, 1], {...clamp, easing: power3In});
  return {
    opacity: enter * (1 - exit),
    y: 40 * S * (1 - enter) + 40 * S * exit,
  };
};

const CARD_W = 500 * S;
const ORB_H = 208 * S; /* h-52 */
const ORB_W = CARD_W - 2 * 20 * S; /* card padding p-5 */

const OrbLabel: React.FC<{style: React.CSSProperties; text: string; value: string; valueColor: string}> = ({
  style,
  text,
  value,
  valueColor,
}) => (
  <div style={{position: 'absolute', fontSize: 11 * S, fontWeight: 500, opacity: 0.5, ...style}}>
    {text} <span style={{color: valueColor, fontWeight: 700}}>{value}</span>
  </div>
);

const PortfolioMoodCard: React.FC = () => {
  const {opacity, y} = useCardMotion(0.35, 9.1);
  return (
    <div
      style={{
        ...glass,
        borderRadius: 24 * S,
        padding: 20 * S,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div style={{fontSize: 12 * S, fontWeight: 500, opacity: 0.5, marginBottom: 8 * S}}>Portfolio Mood</div>
      <div style={{height: ORB_H, position: 'relative'}}>
        <Orb width={ORB_W} height={ORB_H} />
        <OrbLabel style={{top: 12 * S, right: 24 * S}} text="Balanced" value="46%" valueColor="#2563eb" />
        <OrbLabel style={{bottom: 24 * S, left: 16 * S}} text="Degen" value="10%" valueColor="#ef4444" />
        <OrbLabel style={{bottom: 24 * S, right: 16 * S}} text="Saver" value="24%" valueColor="#16a34a" />
      </div>
    </div>
  );
};

const DailyInsightsCard: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const {opacity, y} = useCardMotion(0.5, 9.0);

  return (
    <div
      style={{
        ...glass,
        borderRadius: 24 * S,
        padding: 20 * S,
        marginTop: 16 * S,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 * S}}>
        <span style={{fontSize: 12 * S, fontWeight: 500, opacity: 0.5}}>Daily Insights</span>
        <span
          style={{
            ...glassSubtle,
            fontSize: 10 * S,
            fontWeight: 500,
            padding: `${4 * S}px ${12 * S}px`,
            borderRadius: 999,
            opacity: 0.6,
          }}
        >
          Go to Insights
        </span>
      </div>

      <div>
        {INSIGHTS.map((insight, i) => {
          /* depth effect from DailyInsights.tsx */
          const depthOpacity = 1 - i * 0.15;
          const depthScale = 1 - i * 0.02;
          /* list entrance: gsap.from(children, {y: 20, opacity: 0, stagger: 0.08,
             duration: 0.5, ease: power3.out}) — the InsightsView reveal */
          const start = 0.9 + i * 0.08;
          const enter = interpolate(t, [start, start + 0.5], [0, 1], {...clamp, easing: power3Out});
          return (
            <div
              key={insight.id}
              style={{
                ...glassSubtle,
                borderRadius: 16 * S,
                padding: 12 * S,
                marginTop: i === 0 ? 0 : 8 * S,
                opacity: depthOpacity * enter,
                transform: `scale(${depthScale}) translateY(${20 * S * (1 - enter)}px)`,
                transformOrigin: 'top center',
              }}
            >
              <div style={{display: 'flex', alignItems: 'flex-start', gap: 12 * S}}>
                <span style={{fontSize: 18 * S, marginTop: 2 * S, flexShrink: 0, lineHeight: 1}}>{insight.icon}</span>
                <div style={{flex: 1, minWidth: 0}}>
                  <div style={{fontSize: 12 * S, fontWeight: 500, lineHeight: 1.375, marginBottom: 8 * S}}>
                    {insight.title}
                  </div>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 4 * S}}>
                    {insight.tags.map((tag) => (
                      <span key={tag} style={{...tagStyle, ...TAG_COLORS[tag]}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MoodTile: React.FC = () => {
  return (
    <AbsoluteFill style={{background: BG_MOOD, fontFamily: FONT_STACK, color: FOREGROUND, overflow: 'hidden'}}>
      {/* Background layers from page.tsx */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: MOUNTAIN_GRADIENT,
          maskImage: MOUNTAIN_MASK,
          WebkitMaskImage: MOUNTAIN_MASK,
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'linear-gradient(to bottom right, rgba(254,215,170,0.3), transparent)',
          filter: 'blur(64px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'linear-gradient(to top left, rgba(233,213,255,0.2), transparent)',
          filter: 'blur(64px)',
        }}
      />

      {/* Mood-tab right column, cropped to the tile like the app's scroll area */}
      <div style={{position: 'absolute', top: 40, left: (1080 - CARD_W) / 2, width: CARD_W}}>
        <PortfolioMoodCard />
        <DailyInsightsCard />
      </div>

      {/* Grain overlay */}
      <AbsoluteFill
        style={{
          backgroundImage: GRAIN_URL,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          opacity: 0.4,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

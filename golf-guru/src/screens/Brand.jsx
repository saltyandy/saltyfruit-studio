import GuruLogo from '../components/GuruLogo'
import { Chip, Slider, Dial } from '../components/ui'
import { useState } from 'react'

const palette = [
  { name: 'Guru Green', hex: '#143926', role: 'Primary brand', light: false },
  { name: 'Lake Ball', hex: '#266965', role: 'Secondary brand', light: false },
  { name: 'Sand Trap', hex: '#F5F4E1', role: 'Tertiary brand', light: true },
  { name: 'Dorian Cup', hex: '#FBF9F9', role: 'Text / light elements', light: true },
  { name: 'Fairway Green', hex: '#216C57', role: 'Hairlines & subtle backgrounds', light: false },
  { name: 'Twilight 9th', hex: '#0B1F23', role: 'Dark text / backgrounds', light: false },
]

const typeScale = [
  { label: 'Title / H1', size: 58, weight: 700, ls: '-0.02em', lh: '70px' },
  { label: 'Header 2', size: 38, weight: 700, ls: '-0.01em', lh: '46px' },
  { label: 'H3 / Subtitles', size: 24, weight: 600, lh: '30px' },
  { label: 'Body Large', size: 18, weight: 500, lh: '22px' },
  { label: 'Body Normal', size: 16, weight: 500, lh: '146%' },
  { label: 'Body Small', size: 12, weight: 400, lh: '16px' },
]

function Section({ kicker, title, children }) {
  return (
    <section style={{ marginTop: 96 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--fairway-green)',
          marginBottom: 10,
        }}
      >
        {kicker}
      </div>
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 36 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function Brand() {
  const [slider, setSlider] = useState(6)
  const [chips, setChips] = useState(['Calm', 'Focused'])
  const toggleChip = (c) =>
    setChips((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0B1F23',
        color: 'var(--dorian-cup)',
        fontFamily: 'var(--font)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '48px 24px 120px' }}>
        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <GuruLogo size={30} />
            <span style={{ fontWeight: 700 }}>Golf Guru</span>
            <span style={{ color: 'var(--sand-50)', fontSize: 13, marginLeft: 4 }}>Brand</span>
          </div>
          <a
            href="#/"
            style={{
              color: 'var(--sand-90)',
              fontSize: 13,
              textDecoration: 'none',
              border: '1px solid var(--hairline-soft)',
              padding: '8px 16px',
              borderRadius: 999,
            }}
          >
            ← Back to app demo
          </a>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginTop: 90 }}>
          <div
            className="floaty"
            style={{
              width: 148,
              height: 148,
              margin: '0 auto 36px',
              borderRadius: '50%',
              border: '1px solid var(--fairway-green)',
              background:
                'radial-gradient(80% 80% at 50% 30%, rgba(33,108,87,0.4), rgba(11,31,35,0.9))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 70px rgba(33,108,87,0.55)',
            }}
          >
            <GuruLogo size={84} />
          </div>
          <h1
            style={{
              fontSize: 'clamp(42px, 7vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Golf is a mind game.
          </h1>
          <p
            style={{
              fontSize: 18,
              color: 'var(--sand-70)',
              maxWidth: 520,
              margin: '20px auto 0',
              lineHeight: 1.5,
            }}
          >
            Golf Guru is a mental-game coach in your pocket — audio sessions, round tracking and a
            Mental Game Score that shows golfers what the scorecard can’t.
          </p>
        </div>

        {/* The mark */}
        <Section kicker="01 — The Mark" title="A guru at rest, clubs crossed.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
            {[
              { bg: '#0B1F23', color: '#F5F4E1', label: 'Sand Trap on Twilight 9th', border: true },
              { bg: '#143926', color: '#F5F4E1', label: 'On Guru Green' },
              { bg: '#F5F4E1', color: '#143926', label: 'Guru Green on Sand Trap' },
            ].map((v) => (
              <div
                key={v.label}
                style={{
                  background: v.bg,
                  border: v.border ? '1px solid var(--hairline-soft)' : 'none',
                  borderRadius: 16,
                  padding: '52px 20px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 40,
                }}
              >
                <GuruLogo size={74} color={v.color} />
                <span style={{ fontSize: 12, color: v.bg === '#F5F4E1' ? '#143926' : 'var(--sand-70)' }}>
                  {v.label}
                </span>
              </div>
            ))}
            <div
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                minHeight: 220,
                background: '#000',
              }}
            >
              <img
                src="img/guru-gold.png"
                alt="Gold guru render"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '36px 0 20px',
                  textAlign: 'center',
                  fontSize: 12,
                  color: 'var(--sand-90)',
                  background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.85))',
                }}
              >
                Gilded — celebration moments
              </span>
            </div>
          </div>
        </Section>

        {/* Palette */}
        <Section kicker="02 — Colour" title="Colours named after the course.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
            {palette.map((c) => (
              <div
                key={c.name}
                style={{
                  background: c.hex,
                  borderRadius: 16,
                  height: 170,
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  border: '1px solid rgba(33,108,87,0.35)',
                  color: c.light ? '#143926' : '#FBF9F9',
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 700 }}>{c.name}</div>
                <div style={{ fontSize: 12, opacity: 0.75, marginTop: 3 }}>
                  {c.hex} · {c.role}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section kicker="03 — Typography" title="Inter on a golden-ratio scale.">
          <p style={{ color: 'var(--sand-70)', fontSize: 14, marginBottom: 36, maxWidth: 560 }}>
            One family, six sizes. Every step in the scale — and every spacer in the layout system —
            is derived from φ (1.618), from a 58px title down to 12px captions.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {typeScale.map((t) => (
              <div
                key={t.label}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 28,
                  borderBottom: '1px solid rgba(33,108,87,0.3)',
                  paddingBottom: 22,
                }}
              >
                <span style={{ width: 120, flexShrink: 0, fontSize: 12, color: 'var(--sand-50)' }}>
                  {t.label}
                  <br />
                  {t.size}px / {t.weight}
                </span>
                <span
                  style={{
                    fontSize: t.size,
                    fontWeight: t.weight,
                    letterSpacing: t.ls || 0,
                    lineHeight: t.lh,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Golf is Great.
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Components */}
        <Section kicker="04 — Components" title="Quiet surfaces, one glowing green.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ fontSize: 12, color: 'var(--sand-50)' }}>Buttons</div>
              <button className="btn btn--contained">Submit your score</button>
              <button className="btn btn--outlined">See Mental Game Insights</button>
            </div>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ fontSize: 12, color: 'var(--sand-50)' }}>
                Golf-ball slider — drag it
              </div>
              <Slider value={slider} onChange={setSlider} />
              <div style={{ fontSize: 12, color: 'var(--sand-50)' }}>Choice chips</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Calm', 'Focused', 'Confident', 'Present'].map((c) => (
                  <Chip key={c} label={c} active={chips.includes(c)} onClick={() => toggleChip(c)} />
                ))}
              </div>
            </div>
            <div
              className="card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
            >
              <div style={{ textAlign: 'center' }}>
                <Dial value={62} color="#D8B75A" />
                <div style={{ fontSize: 11, color: 'var(--sand-50)', marginTop: 8 }}>Mental Game</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Dial value={78} color="#3BA787" />
                <div style={{ fontSize: 11, color: 'var(--sand-50)', marginTop: 8 }}>Round Score</div>
              </div>
            </div>
          </div>
        </Section>

        <footer
          style={{
            marginTop: 110,
            paddingTop: 28,
            borderTop: '1px solid rgba(33,108,87,0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 12,
            color: 'var(--sand-50)',
          }}
        >
          <span>Golf Guru — product & brand design</span>
          <span>Salty Fruit Studio</span>
        </footer>
      </div>
    </div>
  )
}

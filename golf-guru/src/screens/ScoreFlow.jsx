import { useState } from 'react'
import { emotions, teeQuestions } from '../data'
import GuruLogo from '../components/GuruLogo'
import { BackBtn, BottomNav, Slider, Chip, Dial, useCountUp } from '../components/ui'
import { Check, Close, Radio } from '../components/Icons'

const Spacer = ({ h = 20 }) => <div style={{ height: h }} />

function FlowShell({ children, onBack, go, nav = 'track' }) {
  return (
    <>
      <div className="screen">
        <div className="screen__pad">
          {onBack && <BackBtn onClick={onBack} />}
          {children}
        </div>
      </div>
      <BottomNav active={nav} go={go} />
    </>
  )
}

function Panel({ children, className, style }) {
  return (
    <div
      className={className}
      style={{
        border: '1px solid var(--hairline)',
        borderRadius: 12,
        padding: 16,
        background: 'rgba(20,57,38,0.08)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* Step 1 — Track A Recent Round */
function TrackRound({ next, answers, update }) {
  const toggleTag = (t) =>
    update({
      tags: answers.tags.includes(t)
        ? answers.tags.filter((x) => x !== t)
        : [...answers.tags, t],
    })

  return (
    <>
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: '28px 0 24px', letterSpacing: '-0.01em' }}>
        Track A Recent Round
      </h1>
      <Panel>
        <div className="field">
          <label>How many holes did you play?</label>
          <div className="segmented">
            {['9 Holes', '18 Holes'].map((h) => (
              <button
                key={h}
                className={answers.holes === h ? 'active' : ''}
                onClick={() => update({ holes: h })}
              >
                {answers.holes === h && <Check size={13} />}
                {h}
              </button>
            ))}
          </div>
          {answers.holes === '9 Holes' && (
            <div
              style={{
                display: 'inline-flex',
                gap: 22,
                marginTop: 12,
                marginLeft: 2,
                padding: '12px 18px',
                border: '1px solid var(--fairway-green)',
                borderRadius: 10,
              }}
            >
              {['Front 9', 'Back 9'].map((n) => (
                <button
                  key={n}
                  onClick={() => update({ nine: n })}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#fff',
                    fontSize: 14,
                  }}
                >
                  <Radio active={answers.nine === n} />
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="field">
          <label>Where did you play?</label>
          <div style={{ position: 'relative' }}>
            <input
              value={answers.course}
              onChange={(e) => update({ course: e.target.value })}
            />
            <Close
              size={16}
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--sand-70)',
              }}
            />
          </div>
        </div>

        <div className="field">
          <label>What was your tee time?</label>
          <input placeholder="08:40" />
        </div>

        <div className="field">
          <label>What did you shoot?</label>
          <input
            value={answers.shot}
            onChange={(e) => update({ shot: e.target.value.replace(/\D/g, '') })}
            inputMode="numeric"
          />
        </div>

        <div className="segmented" style={{ marginBottom: 16 }}>
          {['Carry', 'Trolley', 'Buggy'].map((c) => (
            <button
              key={c}
              className={answers.carry === c ? 'active' : ''}
              onClick={() => update({ carry: c })}
            >
              {answers.carry === c && <Check size={13} />}
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {['Match Play', 'Social', 'Practice', 'Competition'].map((t) => (
            <Chip key={t} label={t} active={answers.tags.includes(t)} onClick={() => toggleTag(t)} />
          ))}
        </div>
      </Panel>
      <Spacer h={28} />
      <button className="btn btn--contained" onClick={next}>
        Next
      </button>
    </>
  )
}

/* Step 2 — Before Your Round */
function BeforeRound({ next, answers, update }) {
  return (
    <>
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: '28px 0 24px', letterSpacing: '-0.01em' }}>
        Before Your Round
      </h1>
      <Panel>
        <div className="field">
          <label style={{ lineHeight: '140%' }}>
            If you have a recovery / sleep score from your wearable, what was it?
          </label>
          <input
            value={answers.sleep}
            onChange={(e) => update({ sleep: e.target.value.replace(/\D/g, '') })}
            inputMode="numeric"
          />
        </div>
        <div className="field">
          <label style={{ lineHeight: '140%' }}>Did you warm up your body before the round?</label>
          <Slider value={answers.body} onChange={(v) => update({ body: v })} />
        </div>
        <div className="field" style={{ marginBottom: 4 }}>
          <label style={{ lineHeight: '140%' }}>Did you warm up mentally before the round?</label>
          <Slider value={answers.mind} onChange={(v) => update({ mind: v })} />
        </div>
      </Panel>
      <Spacer h={28} />
      <button className="btn btn--contained" onClick={next}>
        Next
      </button>
    </>
  )
}

/* Step 3 — Emotions */
function Emotions({ next, answers, update }) {
  const toggle = (e) =>
    update({
      emotions: answers.emotions.includes(e)
        ? answers.emotions.filter((x) => x !== e)
        : answers.emotions.length < 5
          ? [...answers.emotions, e]
          : answers.emotions,
    })
  return (
    <>
      <div style={{ margin: '24px 0 0' }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{answers.course}</div>
        <div style={{ fontSize: 12, color: 'var(--sand-70)' }}>21st July 2026</div>
      </div>
      <h1 style={{ fontSize: 24, fontWeight: 700, margin: '32px 0 6px', lineHeight: '130%' }}>
        Did you feel any of the below as you played?
      </h1>
      <p style={{ fontSize: 13, color: 'var(--sand-70)', marginBottom: 20 }}>
        You can select a maximum of 5 from each section
      </p>
      <Panel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {emotions.map((e) => (
            <Chip key={e} label={e} active={answers.emotions.includes(e)} onClick={() => toggle(e)} />
          ))}
        </div>
      </Panel>
      <Spacer h={28} />
      <button className="btn btn--contained" onClick={next}>
        Next
      </button>
    </>
  )
}

/* Step 4 — Off The Tee sliders */
function OffTheTee({ next, answers, update }) {
  return (
    <>
      <div style={{ margin: '24px 0 0' }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{answers.course}</div>
        <div style={{ fontSize: 12, color: 'var(--sand-70)' }}>21st July 2026</div>
      </div>
      <Spacer h={24} />
      <Panel>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Off The Tee...</h2>
        {teeQuestions.map((q, i) => (
          <div className="field" key={q} style={{ marginBottom: i === 3 ? 4 : 24 }}>
            <label style={{ lineHeight: '140%', fontWeight: 500 }}>{q}</label>
            <Slider
              value={answers.tee[i]}
              onChange={(v) => update({ tee: answers.tee.map((x, j) => (j === i ? v : x)) })}
            />
          </div>
        ))}
      </Panel>
      <Spacer h={28} />
      <button className="btn btn--contained" onClick={next}>
        Next
      </button>
    </>
  )
}

/* Step 5 — Complete, with the round's actual results */
function Complete({ go, answers }) {
  const teeAvg = answers.tee.reduce((a, b) => a + b, 0) / answers.tee.length
  // Mental Game Performance: mental warm-up, tee-shot mindset and body prep, 0–100
  const mgp = Math.round(((answers.mind + answers.body + teeAvg * 2) / 4) * 10)
  const mgpColor = mgp >= 70 ? '#3BA787' : mgp >= 45 ? '#D8B75A' : '#C86A5A'
  const shot = useCountUp(Number(answers.shot) || 0, 1400)

  return (
    <div style={{ textAlign: 'center', paddingTop: 32 }}>
      <div
        className="floaty"
        style={{
          width: 124,
          height: 124,
          margin: '0 auto',
          borderRadius: '50%',
          border: '1px solid var(--fairway-green)',
          background:
            'radial-gradient(80% 80% at 50% 30%, rgba(33,108,87,0.35), rgba(11,31,35,0.9))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 40px rgba(33,108,87,0.5)',
        }}
      >
        <GuruLogo size={72} color="#D8B75A" />
      </div>
      <h1 className="rise" style={{ fontSize: 26, fontWeight: 700, margin: '24px 0 8px' }}>
        Congratulations Andy!
      </h1>
      <p className="rise" style={{ fontSize: 16, color: 'var(--sand-90)', '--d': '0.08s' }}>
        That’s your 4th round tracked!
      </p>
      <Spacer h={24} />

      {/* Round results */}
      <Panel className="rise" style={{ '--d': '0.16s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: '#D8B75A',
              color: '#0B1F23',
              fontSize: 12,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            P
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{answers.course}</div>
            <div style={{ fontSize: 12, color: 'var(--sand-70)' }}>
              21st July 2026 · {answers.holes}
              {answers.holes === '9 Holes' ? ` · ${answers.nine}` : ''}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '24px 0 8px',
          }}
        >
          <div>
            <Dial value={mgp} color={mgpColor} />
            <div style={{ fontSize: 12, color: 'var(--sand-70)', marginTop: 10 }}>
              Mental Game
            </div>
          </div>
          <div>
            <div
              style={{
                height: 96,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 46,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              {shot}
            </div>
            <div style={{ fontSize: 12, color: 'var(--sand-70)', marginTop: 10 }}>
              Gross Score
            </div>
          </div>
        </div>

        {answers.emotions.length > 0 && (
          <div
            style={{
              borderTop: '1px solid rgba(33,108,87,0.4)',
              marginTop: 14,
              paddingTop: 16,
            }}
          >
            <div style={{ fontSize: 12, color: 'var(--sand-70)', marginBottom: 10 }}>
              How it felt out there
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {answers.emotions.map((e) => (
                <span
                  key={e}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 999,
                    border: '1px solid var(--fairway-green)',
                    background: 'rgba(33,108,87,0.22)',
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        )}
      </Panel>

      <Spacer h={20} />
      <div className="rise" style={{ '--d': '0.26s' }}>
        <button className="btn btn--outlined" onClick={() => go('home')}>
          See Mental Game Insights
        </button>
        <Spacer h={14} />
        <button className="btn btn--contained" onClick={() => go('home')}>
          Review This Round
        </button>
      </div>
    </div>
  )
}

export default function ScoreFlow({ go }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    holes: '9 Holes',
    nine: 'Front 9',
    course: 'Royal Ashdown Forest',
    shot: '35',
    carry: 'Carry',
    tags: ['Social'],
    sleep: '82',
    body: 3,
    mind: 2,
    emotions: ['Focused', 'Calm'],
    tee: [2, 4, 3, 5],
  })
  const update = (patch) => setAnswers((a) => ({ ...a, ...patch }))
  const next = () => setStep((s) => s + 1)
  const back = step === 0 ? () => go('home') : () => setStep((s) => s - 1)

  const steps = [TrackRound, BeforeRound, Emotions, OffTheTee, Complete]
  const Step = steps[step]

  return (
    <FlowShell onBack={step < 4 ? back : null} go={go}>
      <div key={step} style={{ animation: 'screen-in 0.3s cubic-bezier(0.22,0.9,0.3,1)' }}>
        <Step next={next} go={go} answers={answers} update={update} />
      </div>
    </FlowShell>
  )
}

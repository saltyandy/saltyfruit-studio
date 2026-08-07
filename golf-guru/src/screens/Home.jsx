import { useEffect, useRef, useState } from 'react'
import { wheel, sessions, courses, featured, highlights, mgp, mantras } from '../data'
import { GuruBadge } from '../components/GuruLogo'
import GuruLogo from '../components/GuruLogo'
import {
  BottomNav,
  Dial,
  SessionCard,
  IconBtn,
  Reveal,
  PeekSheet,
  FocusRow,
  buzz,
} from '../components/ui'
import { Calendar, Bookmark, Chevron, Play } from '../components/Icons'

/* ---------------------------------------------------------------------------
   The wheel — a true pentagon on one orbit ring, guru at the centre.
   Now a physical object: drag anywhere on it to spin with momentum, and it
   settles onto the nearest notch. Tapping a circle launches a radial
   expansion into the destination screen. Tapping the guru gets you a mantra.
--------------------------------------------------------------------------- */
const WHEEL = 358 // container square
const ORBIT_R = 124 // ring radius — buttons centre on the ring
const BTN = 110 // circle button diameter
const CENTER = WHEEL / 2

const WHEEL_ANGLES = {
  prepare: 234, // top-left
  practice: 306, // top-right
  'pre-round': 18, // right
  play: 90, // bottom
  'post-round': 162, // left
}
const STAGGER_ORDER = ['prepare', 'practice', 'pre-round', 'play', 'post-round']

function wheelPos(id, rot) {
  const a = ((WHEEL_ANGLES[id] + rot) * Math.PI) / 180
  return {
    left: CENTER + ORBIT_R * Math.cos(a) - BTN / 2,
    top: CENTER + ORBIT_R * Math.sin(a) - BTN / 2,
  }
}

function WheelButton({ item, rot, onTap }) {
  const delay = 0.32 + STAGGER_ORDER.indexOf(item.id) * 0.09
  return (
    <button
      onClick={(e) => onTap(item, e)}
      className="wheel-btn"
      style={{
        position: 'absolute',
        ...wheelPos(item.id, rot),
        width: BTN,
        height: BTN,
        borderRadius: '50%',
        border: '1px solid var(--fairway-green)',
        filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.5))',
        padding: 0,
        '--d': `${delay}s`,
      }}
    >
      <div
        className="wheel-btn__face"
        style={{
          backgroundImage: `linear-gradient(rgba(11,31,35,0.18), rgba(11,31,35,0.5)), url(${item.img})`,
        }}
      >
        <span className="wheel-btn__label">{item.label}</span>
      </div>
    </button>
  )
}

function Wheel({ onLaunch }) {
  const [rot, setRot] = useState(0)
  const [mantra, setMantra] = useState(null)
  const wrapRef = useRef(null)
  const tiltRef = useRef(null)
  const drag = useRef(null)
  const spun = useRef(false) // suppresses taps that were really spins
  const anim = useRef(null)
  const mantraTimer = useRef(null)

  useEffect(() => () => {
    cancelAnimationFrame(anim.current)
    clearTimeout(mantraTimer.current)
  }, [])

  const pointerAngle = (e) => {
    const r = wrapRef.current.getBoundingClientRect()
    return (
      (Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) /
      Math.PI
    )
  }

  // Ease the wheel from its current angle onto the nearest pentagon notch,
  // carrying whatever momentum the flick had.
  const settle = (from, vel) => {
    const projected = from + vel * 14
    const to = Math.round(projected / 72) * 72
    const dur = Math.min(1100, 420 + Math.abs(to - from) * 2.2)
    const t0 = performance.now()
    const ease = (p) => 1 - Math.pow(1 - p, 3)
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setRot(from + (to - from) * ease(p))
      if (p < 1) anim.current = requestAnimationFrame(step)
    }
    anim.current = requestAnimationFrame(step)
  }

  const tilt = (e) => {
    const el = tiltRef.current
    if (!el || e.pointerType === 'touch') return
    const r = wrapRef.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--wx', `${(-py * 6).toFixed(2)}deg`)
    el.style.setProperty('--wy', `${(px * 6).toFixed(2)}deg`)
  }

  const untilt = () => {
    const el = tiltRef.current
    if (!el) return
    el.style.setProperty('--wx', '0deg')
    el.style.setProperty('--wy', '0deg')
  }

  const down = (e) => {
    cancelAnimationFrame(anim.current)
    drag.current = { last: pointerAngle(e), vel: 0, moved: 0, t: performance.now() }

    const move = (ev) => {
      const d = drag.current
      if (!d) return
      const a = pointerAngle(ev)
      let delta = a - d.last
      if (delta > 180) delta -= 360
      if (delta < -180) delta += 360
      const now = performance.now()
      d.vel = (delta / Math.max(1, now - d.t)) * 16 // deg per frame-ish
      d.t = now
      d.last = a
      d.moved += Math.abs(delta)
      if (d.moved > 2) setRot((r) => r + delta)
    }
    const up = () => {
      const d = drag.current
      drag.current = null
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      if (!d) return
      if (d.moved > 4) {
        spun.current = true
        setTimeout(() => (spun.current = false), 250)
        buzz(8)
        setRot((r) => {
          settle(r, d.vel)
          return r
        })
      }
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const tap = (item, e) => {
    if (spun.current) return
    onLaunch(item, e)
  }

  const whisper = () => {
    if (spun.current) return
    buzz(10)
    clearTimeout(mantraTimer.current)
    setMantra((m) => {
      let next = m
      while (next === m) next = mantras[Math.floor(Math.random() * mantras.length)]
      return next
    })
    mantraTimer.current = setTimeout(() => setMantra(null), 3000)
  }

  return (
    <div
      ref={wrapRef}
      className="wheel-enter wheel-wrap"
      onPointerDown={down}
      onPointerMove={(e) => !drag.current && tilt(e)}
      onPointerLeave={untilt}
      style={{ width: WHEEL, height: WHEEL, margin: '28px auto 0' }}
    >
      <div ref={tiltRef} className="wheel-tilt">
        {/* orbit ring draws itself in from the top */}
        <svg
          width={WHEEL}
          height={WHEEL}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        >
          <circle
            className="wheel-ring-path"
            cx={CENTER}
            cy={CENTER}
            r={ORBIT_R}
            pathLength="100"
            fill="none"
            stroke="rgba(33,108,87,0.75)"
            strokeWidth="1"
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
          />
        </svg>

        {/* a lone ball slowly orbiting — idle life */}
        <div className="wheel-satellite" style={{ '--orbit-offset': `${CENTER - ORBIT_R - 2.5}px` }} />

        {/* centre guru — tap for a whisper */}
        <button
          className="guru-center"
          onClick={whisper}
          style={{ left: CENTER - 27, top: CENTER - 27 }}
        >
          <GuruLogo size={30} />
        </button>

        {mantra && (
          <div key={mantra} className="mantra">
            {mantra}
          </div>
        )}

        {wheel.map((w) => (
          <WheelButton key={w.id} item={w} rot={rot} onTap={tap} />
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   MGP — flip between your last 3 rounds and the season; the dials re-count,
   deltas update, and a little sparkline redraws your trend.
--------------------------------------------------------------------------- */
function Spark({ points }) {
  const W = 250
  const H = 36
  const min = Math.min(...points)
  const max = Math.max(...points)
  const px = (i) => (i / (points.length - 1)) * (W - 8) + 4
  const py = (v) => H - 5 - ((v - min) / Math.max(1, max - min)) * (H - 10)
  const path = points.map((v, i) => `${i ? 'L' : 'M'}${px(i)},${py(v)}`).join(' ')
  const last = points[points.length - 1]
  return (
    <svg className="spark" viewBox={`0 0 ${W} ${H}`} width="100%" height={H}>
      <path
        d={`${path} L${px(points.length - 1)},${H} L4,${H} Z`}
        fill="url(#sparkFill)"
        stroke="none"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3BA787" stopOpacity="0.5" />
          <stop offset="1" stopColor="#3BA787" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="spark__line" d={path} pathLength="100" fill="none" stroke="#3BA787" strokeWidth="2" strokeLinecap="round" />
      <circle className="spark__dot" cx={px(points.length - 1)} cy={py(last)} r="3" fill="#F5F4E1" />
    </svg>
  )
}

function MgpCard() {
  const [mode, setMode] = useState('rounds')
  const m = mgp[mode]
  return (
    <div className="card" style={{ borderRadius: 16 }}>
      <div className="seg-mini">
        <span
          className="seg-mini__thumb"
          style={{ transform: `translateX(${mode === 'rounds' ? 0 : 100}%)` }}
        />
        <button
          className={mode === 'rounds' ? 'active' : ''}
          onClick={() => {
            buzz(8)
            setMode('rounds')
          }}
        >
          Last 3 Rounds
        </button>
        <button
          className={mode === 'season' ? 'active' : ''}
          onClick={() => {
            buzz(8)
            setMode('season')
          }}
        >
          Season
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '10px 0 12px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Dial value={m.mental} size={80} color="#D8B75A" />
          <div className="mgp-label">Mental Game</div>
          <span key={`m-${mode}`} className="delta-chip">
            {m.mentalDelta}
          </span>
        </div>
        <GuruBadge size={42} />
        <div style={{ textAlign: 'center' }}>
          <Dial value={m.round} size={80} color="#3BA787" />
          <div className="mgp-label">Round Score</div>
          <span key={`r-${mode}`} className="delta-chip">
            {m.roundDelta}
          </span>
        </div>
      </div>
      <div className="mgp-foot">
        <Spark key={mode} points={m.spark} />
        <div className="mgp-foot__label">{m.label}</div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   Shot highlights — a swipeable stack. Flick the top card away and the next
   round's highlight rises to meet you.
--------------------------------------------------------------------------- */
function HighlightStack() {
  const [top, setTop] = useState(0)
  const [dx, setDx] = useState(0)
  const [snapping, setSnapping] = useState(false)
  const [leaving, setLeaving] = useState(0) // -1 | 0 | 1
  const [touched, setTouched] = useState(false)
  const start = useRef(null)

  const depth = (i) => (i - top + highlights.length) % highlights.length

  const down = (e) => {
    if (leaving) return
    start.current = { x: e.clientX, id: e.pointerId }
    e.currentTarget.setPointerCapture(e.pointerId)
    setSnapping(false)
  }
  const move = (e) => {
    if (!start.current || leaving) return
    setDx(e.clientX - start.current.x)
  }
  const up = () => {
    if (!start.current || leaving) return
    start.current = null
    if (Math.abs(dx) > 80) {
      const dir = Math.sign(dx)
      setTouched(true)
      setLeaving(dir)
      buzz(12)
      setTimeout(() => {
        setLeaving(0)
        setDx(0)
        setTop((t) => (t + 1) % highlights.length)
      }, 300)
    } else {
      setSnapping(true)
      setDx(0)
    }
  }

  return (
    <div>
      <div className="hl-stack">
        {highlights.map((h, i) => {
          const d = depth(i)
          const isTop = d === 0
          const style = isTop
            ? {
                transform: leaving
                  ? `translateX(${leaving * 480}px) rotate(${leaving * 24}deg)`
                  : `translateX(${dx}px) rotate(${dx / 16}deg)`,
                opacity: leaving ? 0 : 1,
                transition: leaving
                  ? 'transform 0.32s ease-in, opacity 0.32s ease-in'
                  : snapping
                    ? 'transform 0.38s cubic-bezier(0.24, 1.4, 0.4, 1)'
                    : 'none',
                zIndex: 3,
              }
            : {
                transform: `translateY(${d * 9}px) scale(${1 - d * 0.045})`,
                opacity: 1 - d * 0.28,
                transition: 'transform 0.35s cubic-bezier(0.24, 1.1, 0.4, 1), opacity 0.35s',
                zIndex: 3 - d,
              }
          return (
            <div
              key={h.id}
              className="card hl-card"
              style={style}
              onPointerDown={isTop ? down : undefined}
              onPointerMove={isTop ? move : undefined}
              onPointerUp={isTop ? up : undefined}
              onPointerCancel={isTop ? up : undefined}
            >
              <div style={{ fontSize: 15, fontWeight: 700 }}>{h.course}</div>
              <div style={{ fontSize: 11, color: 'var(--sand-70)', margin: '2px 0 10px' }}>
                {h.date}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{h.stat}</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div className="hl-badge">{h.badge}</div>
                <p style={{ fontSize: 13, lineHeight: '150%', color: 'var(--sand-90)' }}>{h.text}</p>
              </div>
            </div>
          )
        })}
        {!touched && <div className="hl-hint">← swipe →</div>}
      </div>
      <div className="dots" style={{ marginTop: 12 }}>
        {highlights.map((h, i) => (
          <span key={h.id} className={`dot ${depth(i) === 0 ? 'dot--on' : ''}`} />
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   Reflections — tap to unfold the mood you tagged after the round.
--------------------------------------------------------------------------- */
function Reflection({ go }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`reflect ${open ? 'reflect--open' : ''}`}>
      <button
        className="reflect__head"
        onClick={() => {
          buzz(8)
          setOpen(!open)
        }}
      >
        <div className="reflect__avatar" style={{ backgroundImage: 'url(img/dr-joe.jpg)' }} />
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Sunday Medal — Front 9</div>
          <div style={{ fontSize: 11, color: 'var(--sand-70)' }}>21st July 2026</div>
        </div>
        <Chevron size={18} className="reflect__chev" />
      </button>
      <div className="reflect__body">
        <div className="reflect__inner">
          <div className="reflect__chips">
            {['Calm', 'Focused', 'Resilient'].map((c) => (
              <span key={c} className="reflect__chip">
                {c}
              </span>
            ))}
          </div>
          <p className="reflect__note">
            “Stayed patient after the bogey on 3. Pre-shot routine held up all the way to the turn.”
          </p>
          <button className="reflect__listen" onClick={() => go('library')}>
            <Play size={13} /> Listen back
          </button>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   Drive Time — a real coverflow. Swipe it, tap a side cover to bring it
   centre, tap the centre to dive into the episode.
--------------------------------------------------------------------------- */
const driveSlides = [
  {
    img: 'img/drive-time-1.jpg',
    title: 'Dr Will McConn (Front 9)',
    sub: 'Check out the first half of our interview with Dr Will McConn',
  },
  {
    img: 'img/drive-time-2.jpg',
    title: 'Dr Will McConn (Back 9)',
    sub: 'The second half — pressure, pre-shot routines and staying present',
  },
  {
    img: 'img/hero-misty.jpg',
    title: 'Dawn Rounds with Dr Joe',
    sub: 'Why an early tee time is a gift to your mental game',
  },
]

function DriveTime({ go }) {
  const [c, setC] = useState(1)
  const start = useRef(null)
  const slide = driveSlides[c]

  const shift = (dir) => {
    buzz(8)
    setC((v) => (v + dir + driveSlides.length) % driveSlides.length)
  }

  return (
    <div
      className="card"
      style={{ overflow: 'hidden', touchAction: 'pan-y' }}
      onPointerDown={(e) => (start.current = e.clientX)}
      onPointerUp={(e) => {
        if (start.current == null) return
        const d = e.clientX - start.current
        start.current = null
        if (Math.abs(d) > 40) shift(d < 0 ? 1 : -1)
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div key={c} className="fade-swap">
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--dorian-cup)' }}>
            {slide.title}
          </div>
          <p
            style={{
              fontSize: 11.5,
              color: 'var(--sand-70)',
              margin: '4px auto 10px',
              maxWidth: 210,
            }}
          >
            {slide.sub}
          </p>
        </div>
        <div className="dots" style={{ marginBottom: 14 }}>
          {driveSlides.map((s, i) => (
            <button
              key={s.img}
              className={`dot ${i === c ? 'dot--on' : ''}`}
              onClick={() => setC(i)}
              style={{ padding: 0 }}
            />
          ))}
        </div>
      </div>
      <div className="coverflow">
        {driveSlides.map((s, i) => {
          let off = i - c
          if (off > 1) off -= driveSlides.length
          if (off < -1) off += driveSlides.length
          const isC = off === 0
          return (
            <button
              key={s.img}
              className="coverflow__item"
              onClick={() =>
                isC ? go('preview', { session: featured }) : setC(i)
              }
              style={{
                transform: `translateX(${off * 98}px) scale(${isC ? 1 : 0.64})`,
                opacity: isC ? 1 : 0.55,
                zIndex: isC ? 2 : 1,
              }}
            >
              <img src={s.img} draggable="false" />
              {isC && (
                <span className="coverflow__play">
                  <Play size={16} />
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* --------------------------------------------------------------------------- */

function SectionHead({ title, onSeeAll }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      {onSeeAll ? (
        <button className="see-all" onClick={onSeeAll}>
          See All <Chevron size={13} style={{ transform: 'rotate(-90deg)' }} />
        </button>
      ) : (
        <GuruBadge size={34} />
      )}
    </div>
  )
}

export default function Home({ go }) {
  const screenRef = useRef(null)
  const [mini, setMini] = useState(false)
  const [peek, setPeek] = useState(null)
  const [launch, setLaunch] = useState(null)

  const hour = new Date().getHours()
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'
  const dateStr = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  // Radial launch: grow a circle out of the tapped wheel button, then go.
  const launchFrom = (item, e) => {
    const btn = e.currentTarget.getBoundingClientRect()
    const appEl = e.currentTarget.closest('.app')
    const app = appEl.getBoundingClientRect()
    const scale = app.width / appEl.offsetWidth || 1
    const x = (btn.left - app.left) / scale
    const y = (btn.top - app.top) / scale
    const size = btn.width / scale
    const cx = x + size / 2
    const cy = y + size / 2
    const W = appEl.offsetWidth
    const H = appEl.offsetHeight
    const maxDist = Math.max(
      Math.hypot(cx, cy),
      Math.hypot(W - cx, cy),
      Math.hypot(cx, H - cy),
      Math.hypot(W - cx, H - cy)
    )
    buzz(12)
    setLaunch({ x, y, size, img: item.img, grow: (2.2 * maxDist) / size })
    setTimeout(() => go(item.id === 'post-round' ? 'track' : 'library'), 430)
  }

  const onPeek = (session, meta) => setPeek({ session, meta })

  return (
    <>
      <div
        ref={screenRef}
        className="screen screen--fade"
        onScroll={() => setMini(screenRef.current.scrollTop > 430)}
      >
        <div className="screen__pad">
          {/* Top bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em' }}>
                {greet}, Andy
              </h1>
              <div style={{ fontSize: 12, color: 'var(--sand-70)', marginTop: 2 }}>{dateStr}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <IconBtn sm onClick={() => go('track')}>
                <Calendar size={16} />
              </IconBtn>
              <IconBtn sm onClick={() => go('library')}>
                <Bookmark size={16} />
              </IconBtn>
            </div>
          </div>

          <div className="hero-mist" aria-hidden="true" />

          <Wheel onLaunch={launchFrom} />

          {/* Your MGP */}
          <Reveal>
            <SectionHead title="Your MGP" />
            <MgpCard />
          </Reveal>

          {/* Shot highlights — swipeable stack */}
          <Reveal>
            <SectionHead title="Shot Highlights" />
            <HighlightStack />
          </Reveal>

          {/* Reflections */}
          <Reveal>
            <SectionHead title="Your Reflections" />
            <Reflection go={go} />
          </Reveal>

          {/* Drive Time */}
          <Reveal>
            <SectionHead title="‘Drive Time’" />
            <DriveTime go={go} />
          </Reveal>

          {/* New sessions */}
          <Reveal>
            <SectionHead title="New Sessions" onSeeAll={() => go('library')} />
            <FocusRow>
              {sessions.map((s) => (
                <SessionCard
                  key={s.id}
                  session={s}
                  meta={s.duration}
                  onPeek={onPeek}
                  onClick={() => go('preview', { session: { ...featured, ...s } })}
                />
              ))}
            </FocusRow>
          </Reveal>

          {/* Popular courses */}
          <Reveal>
            <SectionHead title="Popular Courses" onSeeAll={() => go('library')} />
            <FocusRow>
              {courses.map((c) => (
                <SessionCard
                  key={c.id}
                  session={{ ...c, avatar: 'img/dr-joe.jpg' }}
                  meta={c.sessions}
                  onPeek={onPeek}
                  onClick={() => go('library')}
                />
              ))}
            </FocusRow>
          </Reveal>
        </div>
      </div>

      {/* Condensed glass header once the wheel scrolls away */}
      <div className={`mini-head ${mini ? 'mini-head--show' : ''}`}>
        <GuruBadge size={28} />
        <span className="mini-head__name">{greet}, Andy</span>
        <button className="mini-head__pill" onClick={() => go('track')}>
          MGP <strong>62</strong>
        </button>
      </div>

      {/* Long-press peek sheet */}
      <PeekSheet
        peek={peek}
        onClose={() => setPeek(null)}
        onPlay={(s) => go('preview', { session: { ...featured, ...s } })}
      />

      {/* Radial screen transition */}
      {launch && (
        <div
          className="radial-launch"
          style={{
            left: launch.x,
            top: launch.y,
            width: launch.size,
            height: launch.size,
            backgroundImage: `linear-gradient(rgba(11,31,35,0.3), rgba(11,31,35,0.6)), url(${launch.img})`,
            '--grow': launch.grow,
          }}
        />
      )}

      <BottomNav active="home" go={go} />
    </>
  )
}

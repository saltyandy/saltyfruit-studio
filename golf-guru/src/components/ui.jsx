import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  Close,
  Home,
  Stats,
  Search,
  Profile,
  Clock,
  Check,
  Play,
  Bookmark,
} from './Icons'

// Best-effort haptic tick — a no-op on desktop, a real tap on Android/PWA.
export const buzz = (ms = 10) => navigator.vibrate?.(ms)

// Fades content up when it scrolls into view.
export function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}

// Eased count-up from 0 to target on mount / when target changes.
export function useCountUp(target, duration = 1200) {
  const [v, setV] = useState(0)
  useEffect(() => {
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setV(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return v
}

export function IconBtn({ children, onClick, dark, sm, style }) {
  return (
    <button
      className={`icon-btn pressable ${dark ? 'icon-btn--dark' : ''} ${sm ? 'icon-btn--sm' : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}

export function BackBtn({ onClick }) {
  return (
    <IconBtn onClick={onClick}>
      <ArrowLeft size={20} />
    </IconBtn>
  )
}

export function CloseBtn({ onClick }) {
  return (
    <IconBtn onClick={onClick} dark>
      <Close size={20} />
    </IconBtn>
  )
}

export function BottomNav({ active, go }) {
  const items = [
    { id: 'home', icon: Home },
    { id: 'track', icon: Stats },
    { id: 'library', icon: Search },
    { id: 'profile', icon: Profile },
  ]
  const idx = Math.max(
    0,
    items.findIndex((i) => i.id === active)
  )
  return (
    <nav className="bottom-nav">
      <span className="bottom-nav__pill" style={{ transform: `translateX(${idx * 100}%)` }} />
      {items.map(({ id, icon: I }) => (
        <button
          key={id}
          className={active === id ? 'active' : ''}
          onClick={() => {
            buzz(8)
            go(id)
          }}
        >
          <I size={26} />
        </button>
      ))}
    </nav>
  )
}

export function Slider({ value, onChange }) {
  return (
    <div className="gg-slider">
      <div className="gg-slider__ticks">
        {Array.from({ length: 11 }, (_, i) => (
          <span key={i} />
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

export function Chip({ label, active, onClick }) {
  return (
    <button className={`chip ${active ? 'chip--active' : ''}`} onClick={onClick}>
      {active && <Check size={14} />}
      {label}
    </button>
  )
}

export function Dial({ value, size = 96, color = '#3BA787', max = 100, showRing = true }) {
  const shown = useCountUp(value)
  const r = (size - 8) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="dial" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(33,108,87,0.35)"
          strokeWidth="4"
        />
        {showRing && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - Math.min(shown, max) / max)}
            style={{ transition: 'stroke-dashoffset 0.2s linear' }}
          />
        )}
      </svg>
      <span className="dial__value">{shown}</span>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   SessionCard — tilts toward the pointer with a moving glare, springs on
   press, and long-press opens a peek sheet (pass onPeek). Tap still plays.
--------------------------------------------------------------------------- */
export function SessionCard({ session, onClick, onPeek, meta = '20 mins', wide }) {
  const ref = useRef(null)
  const press = useRef({ timer: null, x: 0, y: 0, long: false })

  const tilt = (e) => {
    const el = ref.current
    if (!el || e.pointerType === 'touch') return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(px * 9).toFixed(2)}deg`)
    el.style.setProperty('--gx', `${((px + 0.5) * 100).toFixed(1)}%`)
    el.style.setProperty('--gy', `${((py + 0.5) * 100).toFixed(1)}%`)
  }

  const untilt = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  const cancelPress = () => {
    clearTimeout(press.current.timer)
    press.current.timer = null
  }

  const down = (e) => {
    press.current = {
      x: e.clientX,
      y: e.clientY,
      long: false,
      timer: onPeek
        ? setTimeout(() => {
            press.current.long = true
            buzz(14)
            onPeek(session, meta)
          }, 340)
        : null,
    }
  }

  const move = (e) => {
    tilt(e)
    if (
      press.current.timer &&
      Math.hypot(e.clientX - press.current.x, e.clientY - press.current.y) > 8
    ) {
      cancelPress()
    }
  }

  return (
    <button
      ref={ref}
      className="s-card"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={cancelPress}
      onPointerCancel={cancelPress}
      onPointerLeave={() => {
        cancelPress()
        untilt()
      }}
      onClick={() => {
        if (press.current.long) {
          press.current.long = false
          return
        }
        onClick?.()
      }}
      style={{ width: wide ? '100%' : 158 }}
    >
      <div className="s-card__thumb" style={{ backgroundImage: `url(${session.img})` }} />
      <div className="s-card__title">{session.title}</div>
      <div className="s-card__foot">
        <div className="s-card__avatar" style={{ backgroundImage: `url(${session.avatar})` }} />
        <div className="s-card__meta">
          <Clock size={13} style={{ color: '#C6C6C6' }} />
          {meta}
        </div>
      </div>
    </button>
  )
}

/* ---------------------------------------------------------------------------
   PeekSheet — the long-press preview. Backdrop tap dismisses; Play dives in.
--------------------------------------------------------------------------- */
export function PeekSheet({ peek, onClose, onPlay }) {
  const [saved, setSaved] = useState(false)
  useEffect(() => setSaved(false), [peek])
  if (!peek) return null
  const { session, meta } = peek
  return (
    <div className="peek-backdrop" onClick={onClose}>
      <div className="peek-card" onClick={(e) => e.stopPropagation()}>
        <div className="peek-card__img" style={{ backgroundImage: `url(${session.img})` }}>
          <span className="peek-card__duration">
            <Clock size={12} /> {meta}
          </span>
        </div>
        <div className="peek-card__body">
          <div className="peek-card__title">{session.title}</div>
          <div className="peek-card__author">
            <span
              className="peek-card__avatar"
              style={{ backgroundImage: `url(${session.avatar || 'img/dr-joe.jpg'})` }}
            />
            {session.author || 'Dr Joe Parent'}
          </div>
          <p className="peek-card__desc">
            {session.description ||
              'Settle in, slow your breathing, and let the guru walk you through it. Best with headphones, anywhere you can close your eyes for a few minutes.'}
          </p>
          <div className="peek-card__actions">
            <button className="btn btn--contained" onClick={() => onPlay(session)}>
              <Play size={16} /> Play now
            </button>
            <button
              className={`btn btn--outlined peek-card__save ${saved ? 'is-saved' : ''}`}
              onClick={() => {
                buzz(10)
                setSaved(!saved)
              }}
            >
              {saved ? <Check size={16} /> : <Bookmark size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   FocusRow — horizontal scroller where cards gently scale/dim as they leave
   the viewport, with snap points and soft edge fades.
--------------------------------------------------------------------------- */
export function FocusRow({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    let raf = null
    const update = () => {
      raf = null
      const r = el.getBoundingClientRect()
      for (const child of el.children) {
        const c = child.getBoundingClientRect()
        if (!c.width) continue
        const cutL = Math.max(0, r.left + 16 - c.left)
        const cutR = Math.max(0, c.right - (r.right - 16))
        const hidden = Math.min(1, Math.max(cutL, cutR) / c.width)
        child.style.setProperty('--row-scale', (1 - hidden * 0.07).toFixed(3))
        child.style.setProperty('--row-fade', (1 - hidden * 0.45).toFixed(3))
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div ref={ref} className="focus-row">
      {children}
    </div>
  )
}

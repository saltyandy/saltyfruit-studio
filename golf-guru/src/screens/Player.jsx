import { useEffect, useRef, useState } from 'react'
import { featured } from '../data'
import { BackBtn, CloseBtn } from '../components/ui'
import { Play, Pause, Skip, Bookmark, Download, Share } from '../components/Icons'

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

export default function Player({ go, session = featured }) {
  const total = session.durationSecs || 205
  const [t, setT] = useState(95)
  const [playing, setPlaying] = useState(true)
  const barRef = useRef(null)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setT((v) => Math.min(v + 1, total)), 1000)
    return () => clearInterval(id)
  }, [playing, total])

  const seek = (e) => {
    const rect = barRef.current.getBoundingClientRect()
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
    setT(Math.max(0, Math.min(total, (x / rect.width) * total)))
  }

  return (
    <div className="screen screen--fade" style={{ overflow: 'hidden' }}>
      {/* Full-bleed artwork with a slow drift while playing */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${session.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'kenburns 28s ease-in-out infinite alternate',
          animationPlayState: playing ? 'running' : 'paused',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,31,35,0.25) 40%, rgba(11,31,35,0.92) 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 64,
          left: 16,
          right: 16,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <BackBtn onClick={() => go('preview', { session })} />
        <CloseBtn onClick={() => go('home')} />
      </div>

      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 48 }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            lineHeight: '120%',
            letterSpacing: '-0.01em',
            marginBottom: 28,
          }}
        >
          {session.title}
        </h1>

        {/* Progress */}
        <div
          ref={barRef}
          onClick={seek}
          style={{ padding: '10px 0', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative', height: 6, borderRadius: 3, background: 'rgba(251,249,249,0.85)' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${(t / total) * 100}%`,
                borderRadius: 3,
                background: 'var(--lake-ball)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: `calc(${(t / total) * 100}% - 11px)`,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#3BA787',
                boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, marginBottom: 22 }}>
          <span>{fmt(t)}</span>
          <span>{fmt(total)}</span>
        </div>

        {/* Transport */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
          <button onClick={() => setT((v) => Math.max(0, v - 15))} style={{ color: '#fff' }}>
            <Skip size={52} />
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            style={{
              width: 112,
              height: 112,
              borderRadius: '50%',
              background: 'var(--lake-ball)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              animation: playing ? 'play-pulse 2.4s ease-in-out infinite' : 'none',
              transition: 'transform 0.15s',
            }}
          >
            {playing ? <Pause size={44} /> : <Play size={44} />}
          </button>
          <button onClick={() => setT((v) => Math.min(total, v + 15))} style={{ color: '#fff' }}>
            <Skip forward size={52} />
          </button>
        </div>

        {/* Secondary actions */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 30 }}>
          {[Bookmark, Download, Share].map((I, i) => (
            <button
              key={i}
              className="icon-btn"
              style={{ width: 44, height: 44, background: 'rgba(11,31,35,0.35)' }}
            >
              <I size={17} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

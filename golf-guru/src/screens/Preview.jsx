import { featured, sessions } from '../data'
import { BackBtn, CloseBtn, BottomNav, SessionCard, IconBtn } from '../components/ui'
import { Clock, Play, Bookmark, Download, Share } from '../components/Icons'

export default function Preview({ go, session = featured }) {
  return (
    <>
      <div className="screen">
        {/* Hero */}
        <div style={{ position: 'relative', height: 376 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${session.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(11,31,35,0.15) 55%, #0B1F23 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 56,
              left: 16,
              right: 16,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <BackBtn onClick={() => go('library')} />
            <CloseBtn onClick={() => go('home')} />
          </div>
        </div>

        <div style={{ padding: '4px 16px 140px' }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: '120%', letterSpacing: '-0.01em' }}>
            {session.title}
          </h1>
          <p style={{ fontSize: 13, lineHeight: '150%', color: 'var(--sand-90)', margin: '14px 0 10px' }}>
            {session.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '14px 0 20px' }}>
            <img
              src={session.avatar}
              style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ fontSize: 14, color: 'var(--sand-90)' }}>{session.author}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 16px',
                borderRadius: 10,
                border: '1px solid var(--fairway-green)',
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              <Clock size={16} />
              {session.duration}
              <span style={{ fontWeight: 400, color: 'var(--sand-70)', marginLeft: 6 }}>0 Balls</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <IconBtn onClick={() => {}}>
                <Bookmark size={18} />
              </IconBtn>
              <IconBtn onClick={() => {}}>
                <Download size={18} />
              </IconBtn>
              <IconBtn onClick={() => {}}>
                <Share size={18} />
              </IconBtn>
            </div>
          </div>

          <div style={{ margin: '20px 0' }}>
            <button className="btn btn--play" onClick={() => go('player', { session })}>
              <Play size={22} />
              Start
            </button>
          </div>

          <h2 className="section-title" style={{ margin: '10px 0 18px' }}>
            Similar Sessions:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {sessions.map((s) => (
              <SessionCard
                key={s.id}
                session={s}
                wide
                onClick={() => go('preview', { session: { ...featured, ...s } })}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="library" go={go} />
    </>
  )
}

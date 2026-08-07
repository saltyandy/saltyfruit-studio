import { useState } from 'react'
import { library, featured } from '../data'
import { BackBtn, BottomNav, IconBtn } from '../components/ui'
import { Filter, More, Check, Download, Bookmark } from '../components/Icons'

function ProgressPill({ progress }) {
  return (
    <div
      style={{
        flex: 1,
        maxWidth: 130,
        height: 10,
        borderRadius: 5,
        border: '1px solid rgba(245,244,225,0.7)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: '100%',
          borderRadius: 5,
          background: 'var(--lake-ball)',
        }}
      />
    </div>
  )
}

function Row({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        padding: '18px 0',
        borderBottom: '1px solid rgba(33,108,87,0.5)',
        textAlign: 'left',
      }}
    >
      <img
        src={item.img}
        style={{ width: 60, height: 60, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 700, lineHeight: '138%', color: '#fff' }}>
          {item.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <span style={{ fontSize: 11, color: 'var(--sand-70)' }}>{item.time}</span>
          <Download size={13} style={{ color: 'var(--sand-70)' }} />
          <ProgressPill progress={item.progress} />
        </div>
      </div>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#C6C6C6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0B1F23',
          flexShrink: 0,
          marginTop: 4,
        }}
      >
        <Check size={12} />
      </div>
      <More size={20} style={{ color: 'var(--sand-70)', marginTop: 5, flexShrink: 0 }} />
    </button>
  )
}

export default function Library({ go }) {
  const [tab, setTab] = useState('Saved')
  const tabs = ['Saved', 'Downloads', 'History']
  return (
    <>
      <div className="screen">
        <div className="screen__pad">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <BackBtn onClick={() => go('home')} />
            <IconBtn onClick={() => {}}>
              <Filter size={20} />
            </IconBtn>
          </div>

          <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.01em', margin: '28px 0 18px' }}>
            My Library
          </h1>

          <div style={{ display: 'flex', gap: 28, borderBottom: '1px solid rgba(33,108,87,0.6)' }}>
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '6px 0 12px',
                  color: tab === t ? '#fff' : 'rgba(251,249,249,0.5)',
                  borderBottom: tab === t ? '2px solid var(--sand-trap)' : '2px solid transparent',
                  marginBottom: -1,
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 8 }}>
            {library.map((item) => (
              <Row
                key={item.id}
                item={item}
                onClick={() =>
                  go('preview', {
                    session: { ...featured, title: item.title, img: item.img },
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="library" go={go} />
    </>
  )
}

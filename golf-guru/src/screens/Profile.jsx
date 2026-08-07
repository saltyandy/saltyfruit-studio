import { BottomNav, Dial } from '../components/ui'
import { GuruBadge } from '../components/GuruLogo'

const Stat = ({ label, value }) => (
  <div style={{ textAlign: 'center', flex: 1 }}>
    <div style={{ fontSize: 24, fontWeight: 700 }}>{value}</div>
    <div style={{ fontSize: 11, color: 'var(--sand-70)', marginTop: 4 }}>{label}</div>
  </div>
)

export default function Profile({ go }) {
  return (
    <>
      <div className="screen">
        <div className="screen__pad">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundImage: 'url(img/dr-joe.jpg)',
                backgroundSize: 'cover',
                border: '1px solid var(--fairway-green)',
              }}
            />
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700 }}>Andy</h1>
              <div style={{ fontSize: 12, color: 'var(--sand-70)' }}>Member since 2023</div>
            </div>
          </div>

          <div className="card" style={{ display: 'flex', margin: '28px 0 20px', padding: '20px 8px' }}>
            <Stat label="Rounds Tracked" value="4" />
            <Stat label="Sessions Played" value="12" />
            <Stat label="Streak" value="3 wks" />
          </div>

          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Dial value={62} size={80} color="#D8B75A" />
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Mental Game Score</div>
              <p style={{ fontSize: 13, color: 'var(--sand-90)', lineHeight: '146%', marginTop: 4 }}>
                Trending up 6 points over your last 3 rounds. Keep the pre-round routine going.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <GuruBadge size={56} />
          </div>
        </div>
      </div>
      <BottomNav active="profile" go={go} />
    </>
  )
}

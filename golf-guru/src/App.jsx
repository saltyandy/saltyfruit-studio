import { useEffect, useState } from 'react'
import Home from './screens/Home'
import Library from './screens/Library'
import Preview from './screens/Preview'
import Player from './screens/Player'
import ScoreFlow from './screens/ScoreFlow'
import Profile from './screens/Profile'
import Brand from './screens/Brand'

// Tiny hash router: '#/brand' renders the standalone branding showcase,
// everything else renders the app inside the phone frame.
function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const fn = () => setHash(window.location.hash)
    window.addEventListener('hashchange', fn)
    return () => window.removeEventListener('hashchange', fn)
  }, [])
  return hash
}

function PhoneApp() {
  // screen: { name, props } — a tiny in-app stack so back buttons feel native
  const [screen, setScreen] = useState({ name: 'home' })

  const go = (name, props = {}) => setScreen({ name, props, key: Date.now() })

  const screens = {
    home: Home,
    library: Library,
    preview: Preview,
    player: Player,
    track: ScoreFlow,
    profile: Profile,
  }
  const Current = screens[screen.name] || Home

  return (
    <div className="app">
      <Current key={screen.key} go={go} {...screen.props} />
    </div>
  )
}

export default function App() {
  const hash = useHash()
  const onBrand = hash.startsWith('#/brand')

  if (onBrand) return <Brand />

  return (
    <div className="demo-stage">
      <div className="phone">
        <div className="phone__screen">
          <div className="phone__island" />
          <PhoneApp />
          <div className="phone__home-bar" />
        </div>
      </div>
    </div>
  )
}

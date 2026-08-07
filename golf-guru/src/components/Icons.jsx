// Compact stroke icon set matching the app's line-icon style.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Icon = ({ children, size = 24, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...base} {...rest}>
    {children}
  </svg>
)

export const ArrowLeft = (p) => (
  <Icon {...p}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </Icon>
)

export const Close = (p) => (
  <Icon {...p}>
    <path d="M18 6L6 18M6 6l12 12" />
  </Icon>
)

export const Home = (p) => (
  <Icon {...p}>
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
  </Icon>
)

export const Stats = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 16v-5M12 16V8M16 16v-3" />
  </Icon>
)

export const Search = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </Icon>
)

export const Profile = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.2 18.4a7 7 0 0 1 11.6 0" />
  </Icon>
)

export const Clock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 3.5" />
  </Icon>
)

export const Play = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 24} height={p.size || 24} fill="currentColor">
    <path d="M8 5.5v13a1 1 0 0 0 1.52.86l10.5-6.5a1 1 0 0 0 0-1.72L9.52 4.64A1 1 0 0 0 8 5.5z" />
  </svg>
)

export const Pause = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 24} height={p.size || 24} fill="currentColor">
    <rect x="6" y="4" width="4" height="16" rx="1.4" />
    <rect x="14" y="4" width="4" height="16" rx="1.4" />
  </svg>
)

export const Skip = ({ forward = false, size = 44 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...base}
    strokeWidth={1.6}
    style={{ transform: forward ? 'scaleX(-1)' : 'none' }}
  >
    <path d="M4.5 8.5A9 9 0 1 1 3.5 14" />
    <path d="M4.5 3.5v5h5" />
    <text
      x="12"
      y="15.5"
      textAnchor="middle"
      fontSize="7.5"
      fontWeight="700"
      fill="currentColor"
      stroke="none"
      style={{ transform: forward ? 'scaleX(-1)' : 'none', transformOrigin: 'center' }}
    >
      15
    </text>
  </svg>
)

export const Bookmark = (p) => (
  <Icon {...p}>
    <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z" />
  </Icon>
)

export const Download = (p) => (
  <Icon {...p}>
    <path d="M12 4v11M7 10l5 5 5-5" />
    <path d="M5 19h14" />
  </Icon>
)

export const Share = (p) => (
  <Icon {...p}>
    <path d="M12 15V4M8 7l4-3.5L16 7" />
    <path d="M6 12v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7" />
  </Icon>
)

export const Check = (p) => (
  <Icon {...p} strokeWidth={2.5}>
    <path d="M4.5 12.5l5 5 10-11" />
  </Icon>
)

export const Filter = (p) => (
  <Icon {...p}>
    <path d="M4 7h16M7 12h10M10 17h4" />
  </Icon>
)

export const More = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="currentColor">
    <circle cx="12" cy="5" r="1.8" />
    <circle cx="12" cy="12" r="1.8" />
    <circle cx="12" cy="19" r="1.8" />
  </svg>
)

export const Calendar = (p) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Icon>
)

export const Chevron = ({ size = 18, ...p }) => (
  <Icon {...p} size={size}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
)

export const Radio = ({ active, size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
    {active && <circle cx="12" cy="12" r="4.5" fill="var(--fairway-green)" />}
  </svg>
)

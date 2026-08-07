const img = (name) => `img/${name}`

export const featured = {
  id: 'calming-meditation',
  title: 'Dr Joe Parent’s Calming Meditation.',
  description:
    'Dr Joe Parent takes you to the chill zone in this 20 minute meditation, you’ll never have felt so relaxed about your golf.',
  author: 'Dr Joe Parent',
  avatar: img('dr-joe.jpg'),
  img: img('hero-misty.jpg'),
  duration: '20 mins',
  durationSecs: 205, // demo track length 3:25
}

export const sessions = [
  {
    id: 's1',
    title: 'Tournament Warm up: First Tee Nerves.',
    author: 'Dr Joe Parent',
    avatar: img('dr-joe.jpg'),
    img: img('session-beach.jpg'),
    duration: '20 mins',
  },
  {
    id: 's2',
    title: 'Front 9 Focus with Dr Will McConn.',
    author: 'Dr Will McConn',
    avatar: img('dr-joe.jpg'),
    img: img('drive-time-1.jpg'),
    duration: '14 mins',
  },
  {
    id: 's3',
    title: 'Letting Go of the Last Shot.',
    author: 'Dr Joe Parent',
    avatar: img('dr-joe.jpg'),
    img: img('wheel-play.jpg'),
    duration: '12 mins',
  },
  {
    id: 's4',
    title: 'Visualise the Perfect Round.',
    author: 'Dr Will McConn',
    avatar: img('dr-joe.jpg'),
    img: img('drive-time-2.jpg'),
    duration: '18 mins',
  },
]

export const courses = [
  { id: 'c1', title: 'The Mental Game Foundations.', img: img('wheel-prepare.jpg'), sessions: '20 Sessions' },
  { id: 'c2', title: 'Pressure-Proof Your Putting.', img: img('wheel-practice.jpg'), sessions: '12 Sessions' },
  { id: 'c3', title: 'Confidence Off the Tee.', img: img('wheel-pre-round.jpg'), sessions: '16 Sessions' },
  { id: 'c4', title: 'Post-Round Reflection Rituals.', img: img('wheel-post-round.jpg'), sessions: '8 Sessions' },
]

export const library = [
  { id: 'l1', title: 'Dr Joe Parent’s Calming Meditation.', img: img('hero-misty.jpg'), progress: 0.55, time: '1:35' },
  { id: 'l2', title: 'Tournament Warm up: First Tee Nerves.', img: img('session-beach.jpg'), progress: 0.8, time: '16:00' },
  { id: 'l3', title: 'Affirmations.', img: img('drive-time-1.jpg'), progress: 0.65, time: '9:45' },
  { id: 'l4', title: 'Letting Go of the Last Shot.', img: img('wheel-play.jpg'), progress: 0.5, time: '6:00' },
  { id: 'l5', title: 'Visualise the Perfect Round.', img: img('drive-time-2.jpg'), progress: 0.55, time: '10:12' },
]

export const wheel = [
  { id: 'prepare', label: 'Prepare', img: img('wheel-prepare.jpg') },
  { id: 'practice', label: 'Practice', img: img('wheel-practice.jpg') },
  { id: 'post-round', label: 'Post-Round', img: img('wheel-post-round.jpg') },
  { id: 'pre-round', label: 'Pre-Round', img: img('wheel-pre-round.jpg') },
  { id: 'play', label: 'Play', img: img('wheel-play.jpg') },
]

// Swipeable shot-highlight stack on Home
export const highlights = [
  {
    id: 'h1',
    course: 'Royal Ashdown Forest',
    date: '21st July 2026',
    stat: 'Your Best Putt:',
    badge: '2',
    text:
      '“A 22-footer on the 14th to save par. Positive recall is a big part of building a strong mental game — replay it before your next round.”',
  },
  {
    id: 'h2',
    course: 'Piltdown Golf Club',
    date: '14th July 2026',
    stat: 'Your Best Drive:',
    badge: '1',
    text:
      '“285 yards, dead centre on the 9th after a double bogey. Bouncing back with a committed swing — that’s resilience in action.”',
  },
  {
    id: 'h3',
    course: 'Royal Ashdown Forest',
    date: '7th July 2026',
    stat: 'Your Best Save:',
    badge: '4',
    text:
      '“Up-and-down from the greenside bunker on 17. You stayed present, picked your spot, and trusted it. Bottle that feeling.”',
  },
]

// MGP dial states — last 3 rounds vs season to date
export const mgp = {
  rounds: {
    label: 'My last 3 Rounds',
    mental: 62,
    round: 78,
    mentalDelta: '+4',
    roundDelta: '+2',
    spark: [44, 52, 47, 58, 55, 62],
  },
  season: {
    label: 'Season to date',
    mental: 68,
    round: 74,
    mentalDelta: '+11',
    roundDelta: '+6',
    spark: [38, 42, 51, 49, 57, 61, 64, 68],
  },
}

// One-line whispers from the guru — tap the centre of the wheel
export const mantras = [
  'One shot at a time.',
  'Breathe before you swing.',
  'The last shot is gone. This one is everything.',
  'Commit, then let go.',
  'Calm is a club in your bag.',
  'Play the course, not your fear.',
]

export const emotions = [
  'Positive', 'Fearless', 'Confident', 'Focused', 'Grateful', 'Joyful', 'Calm',
  'Determined', 'Present', 'Accepting', 'Happy', 'Committed', 'Optimistic',
  'Process-Oriented', 'Resilient',
]

export const teeQuestions = [
  'How confident were you off the tee today?',
  'How focused did you feel?',
  'How calm were you during your tee shots?',
  'How committed were you on tee shots?',
]

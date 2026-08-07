# Golf Guru — App Demo & Brand Showcase

Interactive rebuild of the Golf Guru mobile app (from the Paper design file) for the
Salty Fruit Studio portfolio. React + Vite, no other dependencies.

## Routes

- `/` — the app demo inside an iPhone frame (drops the frame and goes full-screen on real phones)
- `/#/brand` — standalone brand showcase page (logo, palette, type scale, components)

## Flows built

1. **Home** — wheel hub (Prepare / Practice / Play / Pre-Round / Post-Round), MGP dials,
   Shot Highlight, Reflections, Drive Time, session carousels
2. **Audio** — My Library → session preview → full-screen player (simulated playback,
   ±15s skip, pause/resume, seekable bar)
3. **Mental game score** — Track A Recent Round → Before Your Round → Emotions →
   Off The Tee sliders → Congratulations

## Commands

```bash
npm install
npm run dev        # local dev
npm run build      # static build → dist/
```

## Embedding in the portfolio

The build uses relative paths (`base: './'`), so `dist/` can be copied or symlinked
anywhere in the static site, e.g. serve it at `/golf-guru/` and iframe or link it:

```html
<a href="golf-guru/">Launch the Golf Guru demo</a>
<a href="golf-guru/#/brand">Golf Guru brand showcase</a>
```

## Design source

Paper file: “Golf Guru” (app.paper.design/file/01KY9QJFP71T7XXG0XWRJAGPDK).
Brand palette: Guru Green `#143926`, Lake Ball `#266965`, Sand Trap `#F5F4E1`,
Dorian Cup `#FBF9F9`, Fairway Green `#216C57`, Twilight 9th `#0B1F23`.
Type: Inter on a golden-ratio (1.618) scale — 58/38/24/18/16/12.
Photography and the guru mascot vectors are extracted from the design file
(`public/img/`, `src/components/GuruLogo.jsx`).

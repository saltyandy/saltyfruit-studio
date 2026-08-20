// PERQ hero film — the landing with its GSAP intro, live TVL ticker and a
// slow scroll tour, recorded for the case hero + the landing-page tile.
// Usage: node lab/perq-capture/record-hero.mjs   (demo on :5173 first)
import { createRequire } from 'node:module'
import { mkdirSync, renameSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('/Users/andy/GV Design System/node_modules/playwright')

const OUT = join(dirname(fileURLToPath(import.meta.url)), 'out')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ headless: true })
const ctx = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  recordVideo: { dir: OUT, size: { width: 1920, height: 1080 } },
})
const page = await ctx.newPage()

await page.goto('http://localhost:5173/')
await page.waitForLoadState('networkidle')
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(5200) // GSAP intro + TVL counter settle

// eased scroll the way a hand would do it — rAF, cubic in-out
const glideTo = (y, ms) =>
  page.evaluate(
    ([toY, dur]) =>
      new Promise((done) => {
        const fromY = window.scrollY
        const t0 = performance.now()
        const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
        const step = (now) => {
          const t = Math.min(1, (now - t0) / dur)
          window.scrollTo(0, fromY + (toY - fromY) * ease(t))
          if (t < 1) requestAnimationFrame(step)
          else done()
        }
        requestAnimationFrame(step)
      }),
    [y, ms]
  )

await page.waitForTimeout(2400) // hold the hero, ticker breathing

await glideTo(1050, 2600) // down through the marquee into the pools
await page.waitForTimeout(3600) // section reveals play out

await glideTo(2050, 2400) // deeper — the dark closing band
await page.waitForTimeout(3000)

await glideTo(0, 2800) // back up to the hero
await page.waitForTimeout(4200) // settle for the loop seam

const video = page.video()
await ctx.close()
renameSync(await video.path(), join(OUT, 'perq-hero-raw.webm'))
await browser.close()
console.log('recorded: out/perq-hero-raw.webm')

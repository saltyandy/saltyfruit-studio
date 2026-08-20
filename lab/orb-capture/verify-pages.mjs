// Final sweep: landing entrance beats, perq hero, project mood tile + hero.
import { createRequire } from 'node:module'
import { mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('/Users/andy/GV Design System/node_modules/playwright')

const OUT = join(dirname(fileURLToPath(import.meta.url)), 'out')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  args: ['--use-angle=metal', '--enable-gpu'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('pageerror', (e) => console.log('pageerror:', e.message))

// landing entrance: early (text only just arriving), mid, settled
await page.goto('http://localhost:8899/index.html')
await page.waitForTimeout(500)
await page.screenshot({ path: join(OUT, 'v-index-early.png') })
await page.waitForTimeout(1200)
await page.screenshot({ path: join(OUT, 'v-index-mid.png') })
await page.waitForTimeout(2500)
await page.screenshot({ path: join(OUT, 'v-index-settled.png') })

// perq hero film
await page.goto('http://localhost:8899/perq.html')
await page.waitForTimeout(2500)
await page.screenshot({ path: join(OUT, 'v-perq-hero.png') })

// project: hero video top, then the mood tile
await page.goto('http://localhost:8899/project.html')
await page.waitForTimeout(2000)
await page.screenshot({ path: join(OUT, 'v-project-top.png') })
const tile = page.locator('#mood-live-root')
await tile.scrollIntoViewIfNeeded()
await page.waitForTimeout(5500)
await page.screenshot({ path: join(OUT, 'v-project-mood.png') })

// bottom of project: the re-recorded orb hero loop
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(1500)
await page.screenshot({ path: join(OUT, 'v-project-bottom.png') })

console.log('sweep done')
await browser.close()

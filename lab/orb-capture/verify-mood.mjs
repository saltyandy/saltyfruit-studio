// Drive the live mood tile on project.html: scroll it into view, wait for
// the hello-glide + first cards, drag the thumb to degen, screenshot each.
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
page.on('console', (m) => { if (m.type() === 'error') console.log('console:', m.text()) })
page.on('pageerror', (e) => console.log('pageerror:', e.message))

await page.goto('http://localhost:8899/project.html')
await page.waitForTimeout(1500)

const tile = page.locator('#mood-live-root')
await tile.scrollIntoViewIfNeeded()
await page.waitForTimeout(6000) // hello-glide to balanced + first card

const box = await tile.boundingBox()
await page.screenshot({ path: join(OUT, 'mood-tile-balanced.png'), clip: box })

// drag the thumb up the arc to degen
const R = box.height * 0.47
const A = (72 * Math.PI) / 180
const sx = box.x + box.width / 2 + R * Math.sin(A)
const sy = box.y + box.height / 2 - R * Math.cos(A)
await page.mouse.move(sx, sy)
await page.mouse.down()
await page.mouse.move(sx, sy - 160, { steps: 24 })
await page.mouse.up()
await page.waitForTimeout(5500) // glide + re-brief + card

await page.screenshot({ path: join(OUT, 'mood-tile-degen.png'), clip: box })
console.log('shots: mood-tile-balanced.png, mood-tile-degen.png')
await browser.close()

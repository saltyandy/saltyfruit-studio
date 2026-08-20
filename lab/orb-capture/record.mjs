// Orb hero re-record — the lab stage cycling degen → balanced → saver,
// the room re-lighting with each move. Output: out/orb-hero-raw.webm.
// Usage: node lab/orb-capture/record.mjs   (dev server on :5299 first)
import { createRequire } from 'node:module'
import { mkdirSync, renameSync } from 'node:fs'
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
const ctx = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  recordVideo: { dir: OUT, size: { width: 1920, height: 1080 } },
})
const page = await ctx.newPage()

await page.goto('http://localhost:5299/?lab&nointro')
await page.waitForTimeout(1200) // shaders compile

// open on degen so the hero leads with fire; 2s spare for the loop trim
await page.keyboard.press('1')
await page.waitForTimeout(8000) // glide + re-brief + two cards

await page.keyboard.press('2') // room re-lights blue
await page.waitForTimeout(8000)

await page.keyboard.press('3') // green and chill
await page.waitForTimeout(8000)

await page.keyboard.press('1') // glide home for the loop seam
await page.waitForTimeout(4000)

const video = page.video()
await ctx.close()
renameSync(await video.path(), join(OUT, 'orb-hero-raw.webm'))
await browser.close()
console.log('recorded: out/orb-hero-raw.webm')

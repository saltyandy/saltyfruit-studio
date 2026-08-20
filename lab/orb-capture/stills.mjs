// Orb lab stills at each mood — for judging screen brightness.
// Playwright lives in "GV Design System" (matches cached chromium).
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
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })

await page.goto('http://localhost:5299/?lab&nointro')
await page.waitForTimeout(3000) // shaders warm up, first card lands

for (const [key, name] of [['3', 'saver'], ['2', 'balanced'], ['1', 'degen']]) {
  await page.keyboard.press(key)
  await page.waitForTimeout(3500) // easedValue glide + re-brief settles
  await page.screenshot({ path: join(OUT, `mood-${name}.png`) })
  console.log(`still: ${name}`)
}

await browser.close()

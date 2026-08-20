// Perq case-study artifact capture — stills + deposit-flow recording.
// Playwright lives in "GV Design System" (1.58.2, matches cached chromium-1208).
// Usage: node lab/perq-capture/capture.mjs [stills|video|all]
import { createRequire } from 'node:module'
import { mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('/Users/andy/GV Design System/node_modules/playwright')

const BASE = 'http://localhost:5173'
const OUT = join(dirname(fileURLToPath(import.meta.url)), 'out')
mkdirSync(OUT, { recursive: true })

const mode = process.argv[2] ?? 'all'

// One Polymarket position on top of the seeded board — mirrors the demo narrative
const SEED_DEPOSIT = JSON.stringify([
  {
    id: 'dep-1-3', pool: 'Polymarket', asset: 'WETH', letter: 'P',
    avatar: 'var(--color-blue-200)', amount: '3', boost: '+40% AMBER',
    rewards: '12,360 $POLY', status: 'BREWING',
  },
])

const settle = async (page, ms = 4200) => {
  await page.waitForLoadState('networkidle')
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(ms) // GSAP intro + TVL counter
}

const browser = await chromium.launch({ headless: true })

if (mode === 'stills' || mode === 'all') {
  const ctx = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2,
  })
  await ctx.addInitScript(
    (seed) => localStorage.setItem('perq-deposits', seed),
    SEED_DEPOSIT,
  )
  const page = await ctx.newPage()

  const shots = [
    { name: 'home', url: `${BASE}/` },
    { name: 'pool', url: `${BASE}/#/pool/polymarket` },
    { name: 'myperq', url: `${BASE}/#/my-perq` },
  ]
  for (const { name, url } of shots) {
    await page.goto(url)
    await page.reload() // hash routes need a real load after goto
    await settle(page)
    await page.screenshot({ path: join(OUT, `perq-${name}.png`) })
    await page.screenshot({ path: join(OUT, `perq-${name}-full.png`), fullPage: true })
    console.log(`still: ${name}`)
  }

  // Bonus: the deposit modal open over the pool page
  await page.goto(`${BASE}/#/pool/polymarket`)
  await page.reload()
  await settle(page)
  await page.click('.detail-deposit-btn')
  await page.waitForTimeout(900) // modal entrance
  await page.screenshot({ path: join(OUT, 'perq-modal.png') })
  console.log('still: modal')

  await ctx.close()
}

if (mode === 'video' || mode === 'all') {
  const ctx = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2,
    recordVideo: { dir: OUT, size: { width: 1600, height: 1000 } },
  })
  const page = await ctx.newPage()

  await page.goto(`${BASE}/#/pool/polymarket`)
  await page.reload()
  await settle(page)

  await page.click('.detail-deposit-btn')
  await page.waitForTimeout(1600) // modal entrance, read the numbers

  await page.click('.max-btn')
  await page.waitForTimeout(1400) // rewards re-count

  await page.click('.modal-cta') // Deposit 4.35 WETH → brewing
  await page.waitForTimeout(3800) // roaster brews (3.2s) + success entrance

  await page.click('.bean-claim-btn')
  await page.waitForTimeout(2200) // Claimed ✓, hold the success card

  const video = page.video()
  await ctx.close()
  const path = await video.path()
  console.log(`video: ${path}`)
}

await browser.close()

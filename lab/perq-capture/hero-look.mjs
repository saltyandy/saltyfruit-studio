// Quick look at the demo landing for hero planning.
import { createRequire } from 'node:module'
import { mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('/Users/andy/GV Design System/node_modules/playwright')

const OUT = join(dirname(fileURLToPath(import.meta.url)), 'out')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
await page.goto('http://localhost:5173/')
await page.waitForLoadState('networkidle')
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(4500)
await page.screenshot({ path: join(OUT, 'landing-1080.png') })
console.log('shot: landing-1080.png')
await browser.close()

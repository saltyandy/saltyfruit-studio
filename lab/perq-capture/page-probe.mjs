// Probe the landing's full height and sections.
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
await page.waitForTimeout(4500)
const h = await page.evaluate(() => document.body.scrollHeight)
console.log('page height:', h)
await page.screenshot({ path: join(OUT, 'landing-full.png'), fullPage: true })
console.log('shot: landing-full.png')
await browser.close()

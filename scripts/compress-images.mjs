import sharp from '/home/parth/apps/dolly/portfolio/node_modules/sharp/lib/index.js'
import { readdirSync, statSync, renameSync } from 'fs'
import { join, extname, basename } from 'path'

const imageDir = '/home/parth/apps/dolly/portfolio/public/images'
const QUALITY = 85

async function processDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      await processDir(fullPath)
    } else if (extname(entry.name).toLowerCase() === '.png') {
      const webpPath = fullPath.replace(/\.png$/i, '.webp')
      const origKB = Math.round(statSync(fullPath).size / 1024)
      await sharp(fullPath).webp({ quality: QUALITY }).toFile(webpPath)
      const newKB = Math.round(statSync(webpPath).size / 1024)
      const pct = Math.round((1 - newKB / origKB) * 100)
      console.log(`  ${entry.name}: ${origKB}KB → ${newKB}KB (${pct}% smaller)`)
    }
  }
}

console.log('Compressing images to WebP...\n')
await processDir(imageDir)
console.log('\nDone! Update image references from .png → .webp in source files.')

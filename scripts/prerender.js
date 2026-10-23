import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const indexPath = `${root}dist/index.html`
const ssrDir = `${root}dist-ssr`

const { render } = await import(`${ssrDir}/entry-server.js`)
const template = readFileSync(indexPath, 'utf-8')
const placeholder = '<div id="root"></div>'

if (!template.includes(placeholder)) {
  throw new Error(`Prerender : « ${placeholder} » introuvable dans dist/index.html`)
}

writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`))
rmSync(ssrDir, { recursive: true, force: true })

console.log('Prerender : dist/index.html généré')

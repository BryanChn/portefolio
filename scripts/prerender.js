import { createHash } from 'node:crypto'
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

const vercelConfig = JSON.parse(readFileSync(`${root}vercel.json`, 'utf-8'))
const csp = vercelConfig.headers
  .flatMap((rule) => rule.headers)
  .find((header) => header.key === 'Content-Security-Policy').value

const inlineScripts = template.matchAll(
  /<script(?![^>]*\b(?:src|type="application\/ld\+json"))[^>]*>([\s\S]*?)<\/script>/g,
)
for (const [, content] of inlineScripts) {
  const hash = `sha256-${createHash('sha256').update(content).digest('base64')}`
  if (!csp.includes(`'${hash}'`)) {
    throw new Error(
      `CSP : script inline non autorisé, ajouter '${hash}' à script-src dans vercel.json`,
    )
  }
}

writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`))
rmSync(ssrDir, { recursive: true, force: true })

console.log('Prerender : dist/index.html généré')

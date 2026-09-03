/**
 * Static export for third-party hosting (CanSpace / any cPanel account).
 *
 *   bun run export:static
 *
 * Produces ./dist-static — plain HTML + assets + quote.php that can be
 * uploaded straight into public_html. Every route is pre-rendered to a real
 * HTML file, so no Node server is required on the host.
 */
import { spawnSync } from 'node:child_process'
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'dist-static')

// Routes to pre-render (add new pages here when you add new routes).
// Where the media library is fetched from while exporting (Lovable preview URL).
const ASSET_BASE =
  process.env.ASSET_BASE || 'https://id-preview--5de82f1e-e367-465b-9ecf-45eb99f38dda.lovable.app'

const ROUTES = ['/', '/about', '/specifications', '/gallery', '/aquaponic', '/hydroponic']

function run(cmd, args, env) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

console.log('\n▸ Building (quote form pointed at /quote.php)…')
run('npx', ['vite', 'build'], { VITE_QUOTE_ENDPOINT: '/quote.php' })

const serverEntry = path.join(ROOT, 'dist', 'server', 'index.mjs')
if (!existsSync(serverEntry)) {
  console.error('\u2717 dist/server/index.mjs not found \u2014 build output changed?')
  process.exit(1)
}

console.log('\u25b8 Loading built server to snapshot pages\u2026')
const mod = await import(pathToFileURL(serverEntry).href)
const handler = mod.default?.fetch ? mod.default : mod
const ctx = { waitUntil() {}, passThroughOnException() {} }
const render = async (route) => {
  const res = await handler.fetch(new Request(`http://localhost${route}`), {}, ctx)
  if (!res.ok) throw new Error(`${route} returned ${res.status}`)
  return await res.text()
}

  await rm(OUT, { recursive: true, force: true })
  await mkdir(OUT, { recursive: true })

  console.log('▸ Copying assets…')
  for (const entry of await readdir(path.join(ROOT, 'dist', 'client'))) {
    if (entry === '_headers' || entry === 'favicon.ico') continue
    await cp(path.join(ROOT, 'dist', 'client', entry), path.join(OUT, entry), { recursive: true })
  }

  console.log('▸ Downloading media assets…')
  const manifests = []
  const walk = async (dir) => {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) await walk(full)
      else if (e.name.endsWith('.asset.json')) manifests.push(full)
    }
  }
  const assetsDir = path.join(ROOT, 'src', 'assets')
  if (existsSync(assetsDir)) await walk(assetsDir)

  let done = 0
  const queue = [...manifests]
  const workers = Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const file = queue.shift()
      const { url } = JSON.parse(await readFile(file, 'utf8'))
      if (!url) continue
      const dest = path.join(OUT, url.replace(/^\//, ''))
      if (existsSync(dest)) continue
      const res = await fetch(ASSET_BASE.replace(/\/$/, '') + url)
      if (!res.ok) throw new Error(`asset ${url} -> ${res.status}`)
      await mkdir(path.dirname(dest), { recursive: true })
      await writeFile(dest, Buffer.from(await res.arrayBuffer()))
      done++
    }
  })
  await Promise.all(workers)
  console.log(`   ${done} files`)

  console.log('▸ Pre-rendering pages…')
  for (const route of ROUTES) {
    const html = await render(route)
    const file =
      route === '/' ? path.join(OUT, 'index.html') : path.join(OUT, route.replace(/^\//, ''), 'index.html')
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, html, 'utf8')
    // also emit /about.html so both /about and /about.html resolve on cPanel
    if (route !== '/') await writeFile(path.join(OUT, `${route.replace(/^\//, '')}.html`), html, 'utf8')
    console.log(`   ${route}`)
  }

  // 404 fallback = home page shell (client router takes over)
  await cp(path.join(OUT, 'index.html'), path.join(OUT, '404.html'))

  console.log('▸ Writing .htaccess…')
  await writeFile(
    path.join(OUT, '.htaccess'),
    `# Vertical Oxygen — CanSpace / Apache config
Options -MultiViews
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # force https
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

  # let real files, folders and the PHP handler through
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # /about -> /about/index.html
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.+?)/?$ /$1/index.html [L]

  # anything else -> home shell (client-side router)
  RewriteRule ^ /index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
`,
    'utf8'
  )

  await writeFile(
    path.join(OUT, 'READ-ME-FIRST.txt'),
    [
      'VERTICAL OXYGEN - static site for CanSpace',
      '',
      '1) Upload EVERYTHING in this folder (including .htaccess and quote.php)',
      '   into public_html on your CanSpace account.',
      '',
      '2) In cPanel > Email Accounts, create: quotes@verticaloxygen.com',
      '   Then open quote.php and check the two settings at the top:',
      '     $TO_EMAIL   = where quote requests are delivered',
      '     $FROM_EMAIL = the mailbox you just created',
      '',
      '3) Test the form on the live site. The lead lands in your inbox with the',
      '   customer photos attached, and the customer gets a confirmation email.',
      '',
      'To regenerate this folder after site changes: npm run export:static',
    ].join('\n'),
    'utf8'
  )

  console.log(`\n✔ Static site ready in dist-static/ — upload its contents to public_html.\n`)

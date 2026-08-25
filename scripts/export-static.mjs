/**
 * Static export for third-party hosting (CanSpace / any cPanel account).
 *
 *   bun run export:static
 *
 * Produces ./dist-static — plain HTML + assets + quote.php that can be
 * uploaded straight into public_html. Every route is pre-rendered to a real
 * HTML file, so no Node server is required on the host.
 */
import { spawn, spawnSync } from 'node:child_process'
import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'dist-static')
const PORT = 3123

// Routes to pre-render (add new pages here when you add new routes).
const ROUTES = ['/', '/about', '/specifications']

function run(cmd, args, env) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

console.log('\n▸ Building (node preset, quote form pointed at /quote.php)…')
run('npx', ['vite', 'build'], {
  NITRO_PRESET: 'node-server',
  VITE_QUOTE_ENDPOINT: '/quote.php',
})

const serverEntry = path.join(ROOT, 'dist', 'server', 'index.mjs')
if (!existsSync(serverEntry)) {
  console.error('✗ dist/server/index.mjs not found — build output changed?')
  process.exit(1)
}

console.log('▸ Starting temporary server to snapshot pages…')
const server = spawn('node', [serverEntry], {
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env, PORT: String(PORT), NODE_ENV: 'production' },
})
server.stdout.on('data', () => {})
server.stderr.on('data', (d) => process.stderr.write(d))

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/`)
      if (res.ok) return
    } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error('server did not start')
}

try {
  await waitForServer()

  await rm(OUT, { recursive: true, force: true })
  await mkdir(OUT, { recursive: true })

  console.log('▸ Copying assets…')
  for (const entry of await readdir(path.join(ROOT, 'dist', 'client'))) {
    if (entry === '_headers') continue
    await cp(path.join(ROOT, 'dist', 'client', entry), path.join(OUT, entry), { recursive: true })
  }

  console.log('▸ Pre-rendering pages…')
  for (const route of ROUTES) {
    const res = await fetch(`http://127.0.0.1:${PORT}${route}`)
    if (!res.ok) throw new Error(`${route} returned ${res.status}`)
    const html = await res.text()
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

  console.log(`\n✔ Static site ready in dist-static/ — upload its contents to public_html.\n`)
} finally {
  server.kill('SIGKILL')
}

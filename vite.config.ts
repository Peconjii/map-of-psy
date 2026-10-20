import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import genreData from './src/data/genres.json'
import festivals from './src/data/festivals.json'
import labels from './src/data/labels.json'
import artists from './src/data/artists.json'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Search engines see a canvas and nothing else, so the HTML gets the map's content as text:
 * structured data for Google, and an intro with every genre inside #root that React replaces on mount.
 */
function seo(siteUrl: string): Plugin {
  const { families, genres } = genreData
  const names = genres.map((g) => g.name)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Map of Psy',
        alternateName: ['MapOfPsy', 'Map of Psytrance', 'Psytrance map'],
        url: `${siteUrl}/`,
      },
      {
        '@type': 'WebApplication',
        name: 'Map of Psy',
        url: `${siteUrl}/`,
        image: `${siteUrl}/og-image.png`,
        applicationCategory: 'MusicApplication',
        operatingSystem: 'Any (web browser)',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description:
          `Interactive map of psytrance: ${genres.length} genres from Goa trance to psycore as a star galaxy, with artists, key tracks, festivals, record labels, guided tours and a guess-the-genre quiz.`,
        about: names.map((name) => ({ '@type': 'Thing', name })),
      },
    ],
  }
  const byFamily = Object.entries(families)
    .map(([id, f]) => {
      const list = genres.filter((g) => g.family === id).map((g) => `<li>${esc(g.name)}</li>`).join('')
      return `<h3>${esc(f.name)}</h3><ul>${list}</ul>`
    })
    .join('')
  const intro = `
      <main class="seo-intro">
        <h1>Map of Psy</h1>
        <p class="seo-lead">Interactive galaxy of psytrance. Loading the map…</p>
        <p>Map of Psy is an interactive map of psytrance music: ${genres.length} genres from Goa trance, full-on and progressive psy to dark psy, forest, hi-tech and psycore, drawn as star systems and connected by the routes they evolved along. Play key tracks, read about ${Object.keys(artists).length} artists, ${festivals.length} festivals and ${Object.keys(labels).length} record labels, take guided tours through psytrance history and test your ears in the guess-the-genre quiz.</p>
        <h2>Psytrance genres on the map</h2>
        ${byFamily}
        <h2>Festivals</h2>
        <p>${festivals.map((f) => esc(f.name)).join(', ')}</p>
        <h2>Record labels</h2>
        <p>${Object.keys(labels).map(esc).join(', ')}</p>
      </main>
    `
  return {
    name: 'map-of-psy-seo',
    transformIndexHtml(html) {
      return html
        .replace('</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${intro}</div>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const siteUrl = loadEnv(mode, '.', 'VITE_').VITE_SITE_URL ?? 'https://map-of-psy.vercel.app'
  return {
    plugins: [react(), seo(siteUrl)],
    // pixi.js alone is ~400 kB; one bundle is fine for this app
    build: { chunkSizeWarningLimit: 800 },
  }
})

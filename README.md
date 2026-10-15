# Map of Psy

An interactive galaxy of psytrance, inspired by Map of Metal. 34 genres from the roots (psychedelic rock, EBM, acid house…)
to psycore are star systems; artists orbit them as satellites, festivals are stations and record labels are markers.

## Features
- Star map with influence routes, a year slider (1965 → today) and a time machine that plays history forward
- Genre HUD: description, how it sounds, producer corner (with printable cheat sheet), key tracks, artists, labels, festivals
- Artist profiles: country, albums, tracks, festival sets ("Played at"), labels, and a "Check the facts" block with links to MusicBrainz, Discogs and Last.fm
- Mini YouTube player with playlist (saved in the browser), auto-advance and ⏮ ⏭
- Guided tours, a guess-the-genre quiz, 🎲 Surprise, compare two genres
- Festival stations and record labels on the map, each switchable on/off in the legend
- Search across genres, artists, labels, festivals and tracks; shareable links (`?genre=forest&artist=Derango`, `?festival=ozora`, `?label=Iboga%20Records`)

## Running locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Deploying (Vercel)
1. Push this folder to a GitHub repository.
2. On vercel.com: **Add New → Project → Import** the repository. Vercel detects Vite automatically
   (build command `npm run build`, output folder `dist`).
3. Link previews need the public address of the site. It is set in `.env`:
   `VITE_SITE_URL=https://map-of-psy.vercel.app`. If Vercel gives you a different domain, change it there
   (or add `VITE_SITE_URL` under Project → Settings → Environment Variables) and redeploy.

## Data
All content lives in `src/data/` as JSON, so it can be edited without touching code:

| File | Content |
|---|---|
| `genres.json` | genres, scenes (colors), influence links, star positions, key tracks, artists, labels |
| `artists.json` | artist profiles (country, active since, albums) |
| `appearances.json` | festival sets per artist (YouTube evidence or published line-up) |
| `festivals.json` | festival stations: country, first edition, hosted genres, position |
| `labels.json` | record labels: country, founded, artists, marker position |
| `sources.json` | per-artist links (MusicBrainz, Discogs, Last.fm), public genre tags and placement check |
| `tours.json` | guided tours: stops with text and a track |
| `producer.json` | producer corner notes per genre |

How the data was checked (MusicBrainz, Discogs, YouTube, Last.fm and web sources) is described in
[`verification-report.md`](verification-report.md).

## Code structure
- `src/galaxy/Galaxy.tsx` – PixiJS scene: nebulae, BPM-pulsing stars, routes, satellites, stations, label markers, camera
- `src/components/Panel.tsx` – HUD: genre, artist, festival and label views
- `src/components/Player.tsx` – YouTube IFrame API player (queue, auto-advance, quiz mode)
- `src/components/` – Search, Tours, Quiz, Compare, Playlist, LabelsMenu, ProducerCorner
- `src/hooks/usePlaylist.ts` – saved tracks in localStorage
- `src/App.tsx` – layout and app state, shareable URL sync

Stack: Vite, React 18, TypeScript, pixi.js 8, pixi-viewport 6.

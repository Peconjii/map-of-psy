import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // pixi.js alone is ~400 kB; one bundle is fine for this app
  build: { chunkSizeWarningLimit: 800 },
})

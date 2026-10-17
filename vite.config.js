import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// Plugin to generate static fallback files (dist/smartpond/index.html & dist/404.html)
function spaStaticFallbacks() {
  return {
    name: 'spa-static-fallbacks',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist')
      const indexHtmlPath = path.join(distDir, 'index.html')

      if (fs.existsSync(indexHtmlPath)) {
        // 1. Generate dist/smartpond/index.html so /smartpond exists as a physical directory on any web server
        const smartpondDir = path.join(distDir, 'smartpond')
        if (!fs.existsSync(smartpondDir)) {
          fs.mkdirSync(smartpondDir, { recursive: true })
        }
        fs.copyFileSync(indexHtmlPath, path.join(smartpondDir, 'index.html'))

        // 2. Generate dist/404.html for GitHub Pages / static hosting 404 fallback
        fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaStaticFallbacks(),
  ],
})

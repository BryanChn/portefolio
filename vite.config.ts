import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { FontaineTransform } from 'fontaine'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    FontaineTransform.vite({
      fallbacks: ['Arial', 'Helvetica Neue', 'Roboto', 'Segoe UI'],
      resolvePath: (id) => new URL(id, import.meta.url),
    }),
  ],
})

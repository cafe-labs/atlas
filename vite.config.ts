import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-plugin-tsconfig-paths'

export default defineConfig({ plugins: [react(), tailwindcss(), tsConfigPaths()] })

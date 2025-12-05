import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/337cb149-c3c0-45e7-8d71-42f26fa529a0/preview/',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5239,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5239,
    },
  },
})

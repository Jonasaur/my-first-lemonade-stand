import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-first-lemonade-stand/', 
  plugins: [react()],
  server: {
    host: true, // Allows Docker to "see" the server
    port: 5173,
    watch: {
      usePolling: true, // Essential for Windows file syncing
    },
  },
})
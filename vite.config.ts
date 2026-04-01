import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'moolacore.ddin.rw',
    port: 6006,
    strictPort: false,
  },
  preview: {
    host: 'moolacore.ddin.rw',
    port: 6006,
    strictPort: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 50000,
  },

})
  
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";

console.log("ROOT:", process.cwd())
console.log("WATCHING SRC:", "./src exists?")

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr()
  ],
  base: '/',
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  logLevel: 'info',
})

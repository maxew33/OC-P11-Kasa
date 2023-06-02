/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OC-P11-Kasa/',
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    // speed up since tests don't rely on css
    // https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts#L14-L16
		css: false,
    // silent: false,
    coverage: {
      provider: 'istanbul' // or 'c8'
    },
  },
  define: {
    'process.env.BASE_URL': JSON.stringify('/OC-P11-Kasa/')
  }
})

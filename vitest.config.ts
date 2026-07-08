import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/tests/**/*.spec.ts'],
    exclude: ['src/tests/e2e/**'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})

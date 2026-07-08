import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './src/tests/e2e',
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:10001',
    viewport: { width: 1920, height: 1080 },
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:10001',
    reuseExistingServer: !process.env.CI,
  },
})

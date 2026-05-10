// @ts-check
/**
 * Video recording config — generates a slow-motion HTML report.
 *
 * Usage:
 *   npx playwright test --config=playwright.video.config.js
 *   npx playwright show-report
 */
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test/playwright',
  testMatch: ['**/*.spec.js'],
  fullyParallel: false,
  retries: 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:8000',
    headless: true,
    launchOptions: {
      slowMo: 300,
    },
    video: 'on',
    trace: 'on',
    viewport: { width: 1280, height: 800 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { open: 'always' }]
  ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: false, // 👈 important for learning

    screenshot: 'on',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 10000,

    navigationTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // 🔥 Run only chromium for now (faster debugging)
    // Uncomment later for cross-browser

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});

import { test, expect } from '@playwright/test';

test('validate title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
// await expect(page).toHaveURL(/playwright/);
await expect(page).toHaveURL(/playwright/);
});
test('abc', async ({ page }) => {
    console.log('hello')
    console.log("PAPA")
    console.log("sry")
})
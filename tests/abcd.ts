import { test, expect } from '@playwright/test';
test('mysite', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('div.container');
});




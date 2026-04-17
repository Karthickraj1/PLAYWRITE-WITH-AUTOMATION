import { test } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('storage state', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        { waitUntil: 'domcontentloaded', timeout: 60000 } // ✅ Fix
    );

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL('**/dashboard/index');

    // Save state
    await page.context().storageState({ path: 'state.json' });
});
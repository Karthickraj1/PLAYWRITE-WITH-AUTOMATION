import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
   
});

test('Verify Dashboard', async ({ page }) => {
    await expect(page.locator('h6')).toHaveText('Dashboard');
});

test('Verify PIM Page', async ({ page }) => {
    await page.click('a[href*="pim"]');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    await page.click("button:has-text('Add')");
    await page.fill('input[name="firstName"]', 'hazzle');
    await page.fill('input[name="lastName"]', 'Raj');
    await page.click('button[type="submit"]');  
 await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/pim/);
    
});
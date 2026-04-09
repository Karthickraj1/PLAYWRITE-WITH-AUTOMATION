import { test, expect } from '@playwright/test';
test('login test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
    await page.fill("//input[@name='username']","Admin");
    await page.fill("//input[@type='password']","admin123");
    await page.click("//button[text()=' Login ']");
    //using and //input[@class='oxd-input oxd-input--active' and @name='username']
    //using or //input[@class='oxd-input oxd-input--active' or @name='username']
    await expect(page).toHaveURL(/dashboard/);

    await page.locator('');
   
    



})


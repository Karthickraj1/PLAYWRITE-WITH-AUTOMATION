import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginbutton = page.locator('button[type="submit"]');
    }

    async gotoLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();

       
        await this.page.waitForURL(/dashboard/);
        await expect(this.page).toHaveScreenshot('dashboard.png', { fullPage: true });
    }
}

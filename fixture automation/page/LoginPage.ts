import { Page } from '@playwright/test';

export class LoginPage {
    readonly username;
    readonly password;
    readonly loginBtn;

    constructor(private page: Page) {
        this.username = this.page.locator('input[name="username"]');
        this.password = this.page.locator('input[name="password"]');
        this.loginBtn = this.page.locator('button[type="submit"]');
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }
}
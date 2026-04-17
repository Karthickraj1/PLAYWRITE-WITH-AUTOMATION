import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {
    readonly page: Page;
    readonly pimMenu: Locator;
    readonly addEmployeeBtn: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly saveBtn: Locator;

    constructor(page: Page) {
        this.page = page;

      
        this.pimMenu = page.locator('span:has-text("PIM")');

        this.addEmployeeBtn = page.locator('a:has-text("Add Employee")');

        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');

        this.saveBtn = page.locator('button[type="submit"]');
    }

    async gotoPIMPage() {
    
    await this.page.locator('h6:has-text("Dashboard")').waitFor();

    await expect(this.pimMenu).toBeVisible();

    
    await this.pimMenu.click();

   
    await this.page.waitForURL(/pim/);
}
   
    async clickAddEmployee() {
        await expect(this.addEmployeeBtn).toBeVisible();

        await this.addEmployeeBtn.click();

        await this.page.waitForURL(/addEmployee/);
    }

    async addEmployee(firstName: string, lastName: string) {
        await expect(this.firstName).toBeVisible();

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.saveBtn.click();

        await this.page.waitForURL(/viewPersonalDetails/);
    }
}



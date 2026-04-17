import { Page, expect } from '@playwright/test';

export class PIMPage {
    pimMenu: any;
    addEmployeeBtn: any;
    firstName: any;
    lastName: any;
    employeeId: any;
    saveBtn: any;
    successMsg: any;

    constructor(private page: Page) {
        this.pimMenu = this.page.locator('a[href*="pim"]');
        this.addEmployeeBtn = this.page.locator('a:has-text("Add Employee")');
        this.firstName = this.page.locator('input[name="firstName"]');
        this.lastName = this.page.locator('input[name="lastName"]');
        this.employeeId = this.page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.saveBtn = this.page.locator('button:has-text("Save")');
        this.successMsg = this.page.locator('text=Successfully Saved');
    }

   async gotoPIM() {
    await this.pimMenu.waitFor({ state: 'visible', timeout: 15000 });
    await this.pimMenu.click(); 
}

    async clickAddEmployee() {
        await this.addEmployeeBtn.click();
    }

    async addEmployee(first: string, last: string, id: string) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);

        await this.employeeId.fill('');
        await this.employeeId.fill(id);

        await this.saveBtn.click();
    }

    async verifyEmployeeAdded() {
        await expect(this.successMsg).toBeVisible();
    }
}
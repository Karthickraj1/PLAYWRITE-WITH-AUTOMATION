import { Page, expect } from '@playwright/test';

export class DashboardPage {
    readonly dashboardHeader;

    constructor(private page: Page) {
        this.dashboardHeader = this.page.locator('h6:has-text("Dashboard")');
    }

   async verifyDashboard() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.dashboardHeader.waitFor({ state: 'visible' });
}
}
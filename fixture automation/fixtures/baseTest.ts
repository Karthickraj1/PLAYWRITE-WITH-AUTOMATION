import { test as base } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';
import { DashboardPage } from '../page/DashboardPage';
import { PIMPage } from '../page/PIMPage';
import { testData } from '../utils/testData';

// Custom fixtures type
type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    pimPage: PIMPage;
};

// Extend Playwright test
export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(testData.username, testData.password);

        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboard = new DashboardPage(page);
        await dashboard.verifyDashboard();
        await use(dashboard);
    },

   pimPage: async ({ page }, use) => {
    const pim = new PIMPage(page);
    await use(pim);
}

});


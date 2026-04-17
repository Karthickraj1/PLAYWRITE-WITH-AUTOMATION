import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/Loginpage';
import { PIMPage } from '../page/PIMPage';

test('OrangeHRM Add Employee Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const pimPage = new PIMPage(page);

  
    await loginPage.gotoLoginPage();
    await loginPage.login('Admin', 'admin123');

  
    await expect(page).toHaveURL(/dashboard/);

    
    await pimPage.gotoPIMPage();

    
    await pimPage.clickAddEmployee();
    await pimPage.addEmployee('hazzle', 'karthick');

    await expect(page).toHaveURL(/view EmployeeList/);

    
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
});
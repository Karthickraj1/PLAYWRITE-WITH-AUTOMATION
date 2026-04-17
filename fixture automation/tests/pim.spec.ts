import { test } from '../fixtures/baseTest';
import { expect } from '@playwright/test';
import { testData } from '../utils/testData';

test('Add Employee in PIM', async ({ pimPage }) => {

    await pimPage.gotoPIM();   

    await pimPage.clickAddEmployee();

    await pimPage.addEmployee(
        testData.firstName,
        testData.lastName,
        testData.empId
    );

    await pimPage.verifyEmployeeAdded();
});
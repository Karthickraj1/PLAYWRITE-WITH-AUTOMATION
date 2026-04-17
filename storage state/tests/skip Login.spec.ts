import test from "@playwright/test";
test('skip login',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


})
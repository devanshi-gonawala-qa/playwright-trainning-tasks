import {test, expect} from '@playwright/test';

test("Two context have seprate sessions" , async({browser}) => {
    //context 1: logged in
    const userContext = await browser.newContext();
    const userPage = await userContext.newPage();
    await userPage.goto("https://www.saucedemo.com/");
    await userPage.locator('#user-name').fill("standard_user");
    await userPage.locator('#password').fill("secret_sauce");
    await userPage.locator("#login-button").click();
    await expect(userPage).toHaveURL(/inventory/);
    // await userPage.waitForTimeout(2000);
    
    // Context 2 :brand new, Not logged in
    const guestContext = await browser.newContext();
    const guestPage = await guestContext.newPage();
    await guestPage.goto("https://www.saucedemo.com/inventory.html");
    await expect(guestPage.locator('[data-test = "error"]')).toBeVisible();
    //  await guestPage.waitForTimeout(2000);

    await userContext.close();
})
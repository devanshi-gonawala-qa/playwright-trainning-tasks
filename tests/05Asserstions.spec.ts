import {expect, test} from '@playwright/test'
// test("Understanding the asserstions" , async({page}) => {
//     await page.goto("https://demowebshop.tricentis.com");
//     await page.getByText("Log in").click();
//     await page.getByLabel("Email").fill("111Test@test.com");
//     await page.getByLabel("Password").fill("111Test@test");
//     await page.getByRole("button" , {name : 'Log in'}).click();
//     // await expect(page.getByText('Log out', {exact: true})).toBeVisible(); 
//     // or
//     // await expect(getByRole('link', { name: 'Log out' })).toBeVisible()
//     await expect(page.getByRole("link", {name: '111Test@test.com'})).toBeVisible();
// });

test ("wrong password enter and logged in", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com");
    await page.getByText("Log in").click();
    await page.getByLabel("Email").fill("111Test@test.com");
    await page.getByLabel("Password").fill("111dvdfvdfvfdvd");
    await page.getByRole("button" , {name : 'Log in'}).click();
    await expect (page.locator("div[class ='message-error']"))
    .toHaveText("Login was unsuccessful. Please correct the errors and try again.\nThe credentials provided are incorrect")
    // or
    //  await expect(
    //     page.locator("div.validation-summary-errors")
    // ).toContainText("The credentials provided are incorrect");
});

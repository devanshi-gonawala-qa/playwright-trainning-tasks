import {test, expect} from '@playwright/test';
test.describe("Home page" , () => {
// this will not get executed as it is skipped. 
   test.skip("1. title is correct", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page).toHaveTitle("Demo Web Shop")
   })

// this will only excuted this. 
   /*test.only('2. search box is visible ', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.locator('#small-searchterms')).toBeVisible();
  });*/

//this will get executed but marked as failed in the report.
test.fail('3. login link is visible', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  });
//this will not executed but marked as fixme in the report.
   test.fixme('4.Understanding tags property', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  });

test('5.Understanding slow annotations', async ({ page }) => {
    test.slow() // marks the test as slow 
    await page.goto('https://demowebshop.tricentis.com/');
    console.log("Test Timeout : " , test.info().timeout);
    page.getByRole('link', {name : "Log in123"}).click();
    // await expect(page.getByRole('link', { name: 'Log in123' })).toBeVisible();
});
});
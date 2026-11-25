import {test, expect} from '@playwright/test';

/* ----------------------------------------------------------------
 * GROUP 1: Home page  (all tests are about the same feature)
 * - You can put any number of tests inside one group
 * - Tests run in the order written (top to bottom)
 * ---------------------------------------------------------------- */

test.describe('Home page', () => {

    test('1. Title is correct', async({page}) => {
        await page.goto("https://demowebshop.tricentis.com/")
        console.log("Page Title is :" , await page.title())
        await expect(page).toHaveTitle("Demo Web Shop");
    });

    test('2. Search box is visible', async({page}) => {
        await page.goto("https://demowebshop.tricentis.com/")
        await expect(page.locator("input[id = 'small-searchterms']")).toBeVisible();
    });

    test("Login link is visible", async({page}) => {
        await page.goto("https://demowebshop.tricentis.com/")
        await expect(page.getByRole("link" , {name : 'Log in'})).toBeVisible()
    })
});

// RUNNING ONLY ONE GROUP:  test.describe.only()

 /*test.describe.only('Only this group runs', () => {
  test('runs alone', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
   await expect(page).toHaveTitle('Demo Web Shop');
  });
 }); */

// RUNNING ONLY ONE GROUP:  test.describe.only()

 test.describe.skip('skip group', () => {
  test('runs alone', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
   await expect(page).toHaveTitle('Demo Web Shop');
  });
 }); 
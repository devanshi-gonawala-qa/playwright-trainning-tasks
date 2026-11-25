import {test, expect, Page} from '@playwright/test'
test.describe("Parallel : Product Search" , () => {
    test.describe.configure({mode : "parallel"})
    // Hooks and tests

    test.beforeAll(async({}, workerInfo) => {
        console.log(`Worker #${workerInfo.workerIndex} started`);
    })
    test.beforeEach(async({page}) => {
        await page.goto("/");
    })
  test.afterEach(async ({}, testInfo) => {
    console.log(`"${testInfo.title}" -> ${testInfo.status}`);
  });
 
  test('home page has the correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Demo Web Shop');
  });
 
  test('search for "laptop"', async ({ page }) => {
    await page.locator('#small-searchterms').fill('laptop');
    await page.locator('input[value="Search"]').click();
    await expect(page.locator('.product-title').first()).toContainText('Laptop');
  });
 
  test('search for "computing"', async ({ page }) => {
    await page.locator('#small-searchterms').fill('computing');
    await page.locator('input[value="Search"]').click();
    await expect(page.locator('.product-title').first()).toContainText('Computing');
  });
});
 
 
test.describe.serial('Serial: cart flow', () => {
  let page: Page;                                     // shared by all tests below
 
  test.beforeAll(async ({ browser }) => {             // runs ONCE
    page = await browser.newPage();
    await page.goto('https://demowebshop.tricentis.com/');
  });
 
  test.afterAll(async () => {                         // runs ONCE at the end
    await page.close();
  });
 
  test('step 1: add a book to the cart', async () => {
    await page.goto('https://demowebshop.tricentis.com/computing-and-internet');
    await page.locator('add-to-cart-button-13').click();
    await expect(page.locator('#bar-notification')).toContainText('added to your shopping cart');
    await expect(page.locator('.cart-qty')).toHaveText('(1)');
  });
 
  test('step 2: item is in the cart (needs step 1)', async () => {
    await page.goto('https://demowebshop.tricentis.com/cart');
    await expect(page.locator('.cart-item-row')).toHaveCount(1);
    await expect(page.locator('.product-name')).toContainText('Computing and Internet');
  });
 
  test('step 3: remove the item (needs step 2)', async () => {
    await page.locator('input[name="removefromcart"]').check();
    await page.locator('input[name="updatecart"]').click();
    await expect(page.locator('.order-summary-content')).toContainText('Your Shopping Cart is empty');
  });
});
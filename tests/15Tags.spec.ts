import {test, expect} from '@playwright/test';
test.describe('Home page' , () => {
    test ("1. title is correct @smoke @E2E" , async({page}) => {
        await page.goto("https://demowebshop.tricentis.com/")
        await expect (page).toHaveTitle('Demo Web Shop');
    })

    test('2. search box is visible @E2E', async({page}) => {
        await page.goto("https://demowebshop.tricentis.com/")
        await expect (page.locator('#small-searchterms')).toBeVisible();
    })
    test('3. login link is visible @smoke', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
        await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
    });
//new version of playwright supports tags property in test function. This is a new feature in playwright 1.40.0
    test('4.Understanding tags property', {tag : '@smoke'}, async({page}) => {
        await page.goto('https://demowebshop.tricentis.com/');
        await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
    })
    test('5.Understanding tags property with multiple tags' , {tag:['@smoke', '@E2E']}, async({page}) => {
        await page.goto("https://demowebshop.tricentis.com/")
        await expect(page.getByRole("link" , {name : "Log in"})).toBeVisible();
    })
});
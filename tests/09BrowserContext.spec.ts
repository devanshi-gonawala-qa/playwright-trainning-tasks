import { test,expect } from "@playwright/test";
test("Opening new tab", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
//storing the context of page
    const currentPage = page.context()
    const newPage = await currentPage.newPage()
    await newPage.goto("https://the-internet.herokuapp.com/horizontal_slider")
    await page.waitForTimeout(4000)
    await expect(page).toHaveTitle("Demo Web Shop")
    await expect(newPage).toHaveTitle("The Internet")
//know to the length of the pages how many pages open
    let s = currentPage.pages().length
    console.log("Total opened pages are: " + s)
});

// same page new link open in new tab
test("Handle Facebook link using BrowserContext", async({page,context}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    const newTabPromise = context.waitForEvent('page')
    await page.getByText("Facebook").first().click()
    const newTab = await newTabPromise
 //wait till page gets fully loaded
    await newTab.waitForLoadState('domcontentloaded')
    await newTab.getByText("Create new account").click();
    await page.waitForTimeout(4000)
});


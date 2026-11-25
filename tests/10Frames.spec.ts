import {test} from '@playwright/test';
test("Handle iframe", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/iframe")
// this will not work as it is inside the iframe
    // await page.locator("body[id= 'tinymce']").fill("I am learning playwrght")
//This will work because we have located frame and then the element
await page.frameLocator("iframe[id = 'mce_0_ifr']").locator("body[id='tinymce']").fill("I am learning playwrght")
await page.waitForTimeout(2000)
})
test("Handle nested frames", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    await page.frameLocator("frame[src = '/frame_top']").frameLocator("frame[src = '/frame_left']").getByText("LEFT").click();
    await page.waitForTimeout(2000)
})
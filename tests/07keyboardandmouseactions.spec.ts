import { expect, test } from "@playwright/test";

// test("Understanding keyboard actions", async ({ page }) => {
//     await page.goto("https://demowebshop.tricentis.com/");
//     await page.locator("input[id='newsletter-email']").fill("Mobile");
//     await page.waitForTimeout(3000);
//     await page.press("input[id='newsletter-email']", "Backspace");
//     await page.waitForTimeout(3000);
// });

// test("Understanding the mouse actions", async({page}) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     // hover
//     await page.getByRole("link" , {name: 'Computers'}).first().hover()
//     await page.waitForTimeout(2000)
//     //rightclick
//     await page.locator("input[id ='newsletter-email']").click({button : 'right'})
//     await page.waitForTimeout(2000)
//     // await page.keyboard.press('Escape') //ask this question to ma'am why its not work

//     //scroll page by javascript
//     await page.evaluate(() =>
//     {
//         window.scroll(0,400);
//     })
//     await page.waitForTimeout(2000)

//     //type script scroll by mouse wheel
//     await page.mouse.wheel(0,300);
// });
test("Drag and Drop", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    const source = page.getByText("Digital downloads").first();
    const target = page.locator("input[id ='newsletter-email']");
    source.dragTo(target)
    // another way to write in one line

    // page.getByText("Digital downloads").first().dragTo(page.locator("input[id ='newsletter-email']"))
    await page.waitForTimeout(3000)
})

// Slider
test("Slider", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider")
    const slider = page.locator("input[type= 'range']")
    // Focus the slider
    await slider.focus()
    await page.keyboard.press('ArrowRight');
    // await page.waitForTimeout(3000)
    for (let i = 0; i < 6; i++){
        await page.keyboard.press('ArrowRight');
    }
    await page.waitForTimeout(3000)
})
import {test, expect} from '@playwright/test';

// this will not get executed as it is skipped. 
test("CheckingScreenshot" , async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
//this will return you name of the test
console.log(test.info().title)
await page.screenshot(
    {
        // path : `screenshot/smoke/${test.info().title}.png`, 
        // other folder if want to create
        path: `screenshot/release/${test.info().title}.png`,
        fullPage : true
    }
)
await expect(page).toHaveTitle('Demo Web Shop');
})
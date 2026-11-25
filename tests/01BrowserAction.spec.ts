import {test} from '@playwright/test'
test("Browser control", async({page}) =>
{
    //open website in the chrome browser
await page.goto("https://sauce-demo.myshopify.com/");
//it returns URL of the page
let u = page.url();
//Returns the title of the page
let t = await page.title();
console.log("URL :" + u);
console.log("Title "+ t);
//default methods to remember
await page.goBack();
await page.goForward();
await page.reload();
//HW
// minimize the website
await page.setViewportSize({width : 800, height : 600})

// page.maximize();
//browser close 
await page.close();
// await browser.close()

}); 


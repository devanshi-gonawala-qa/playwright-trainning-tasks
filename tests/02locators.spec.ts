import {test} from '@playwright/test'
test("Understanding the loctors", async({page}) =>
{
//     //open website in the chrome browser
await page.goto("https://demowebshop.tricentis.com/");
// select radio button

await page.getByLabel("Good").check()
// await page.getByLabel("Good").uncheck(); you can not use uncheck in the radio button because there is only one should be option select so if you select another one so only write check for other option

// await page.getByLabel("Excellent").click() - only for practice not check and click both together
const c1 = await page.getByLabel("Excellent").isEnabled() // to check this radio button is there or not
if (c1 === true){
    await page.getByLabel("Excellent").check();
}else{
    console.log("Radio button is disable");
}
const s = await page.getByLabel("Excellent").isChecked()
console.log(s)
console.log("Excute next steps...")
// // you are using getByRole locator and this will return you web element
// // page.getByRole('link', {name:'Check Out'})

// //You are using getbyrolr
// await page.getByRole('link', {name:'Check Out'}).click() //button type first parameter and then name

//getbyplaceholder
page.getByPlaceholder("Search store")
//locators get by text
await page.getByText("Log in").click()
await page.waitForTimeout(3000)
// await page.getByRole("link", {name:"Log in"}).click()
// Locators is get by labl
// await page.getByLabel("Email: ").fill("ITest@test.com")
// locator get by role
await page.getByRole("textbox", {name:"Email"}).fill("ITest@test.com")
// await page.waitForTimeout(3000) 
// locatorgetbyrole
await page.getByLabel("Password:").fill("ITest@test")
await page.waitForTimeout(3000) 
await page.getByRole("button", {name:'Log in'}).click();
//Identify element with getbytestid locator - demo id this is not in the website
// page.getByTestId("xyz").fill("testing123") // for demo
//yopu can use both get by role and getby lable to click the element 
// await page.getByLabel("Books").first().click() 
await page.getByRole("link", {name: "Books"}).first().click()
 //it will click on the 2nd ADD to cart button on the page
await page.getByRole("button", {name: "Add to Cart"}).nth(2).click();

//  //absolute xpath
// await page.locator("xpath=/html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[3]/div[1]/div/div[2]/div[3]/div[2]/input").click();
//pass xpath as parameter to the page.locator()
await page.locator("//input[contains(@onclick, 'catalog/13')]").click()

//pass css as parameter to the page.locator()
// await page.locator("input[onclick*='catalog/45/1/1']").click()
}
);

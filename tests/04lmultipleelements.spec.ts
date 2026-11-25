import {test} from '@playwright/test'
test("Understanding multiple locators with page.$$" , async({page}) => {
     await page.goto("https://demowebshop.tricentis.com")
     const polloptions = await page.locator("li[class = 'answer']").all() //this retrun you array of locator
     console.log("Total options = " + polloptions.length)
     for (let i = 0 ; i < polloptions.length ; i ++){
        console.log(await polloptions[i].allInnerTexts());
        polloptions[i].getByRole("radio").click()
        await page.waitForTimeout(2000)
     }
});

test ("Understanding multiple locators with page$$" , async({page}) => {
   await page.goto("https://demowebshop.tricentis.com")
   const options = await page.$$("li[class = 'answer']") //its showing html element with index
   console.log("Total options = " + options.length)
   for (let i = 0; i < options.length ; i ++){
      console.log("Opetions " + i + await options[i].innerText());
   }
   // polloptions[i].getByRole("radio").click()
   // Cannot use getbyrole because option[i] is not storing the locator it is storing element handle 
   // and we can not click because in this $$ we can not click on the element because its not take locator in this method
})
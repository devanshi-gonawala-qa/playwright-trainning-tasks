import {test} from '@playwright/test'
test ("Understanding action on textbox" , async({page}) => {
    //All textbox methods
    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByText("Log in").click()
    await page.getByRole("textbox", {name:"Email"}).fill("ITest@test.com")
    await page.getByLabel("Password").fill("ITest@test")
    await page.getByLabel("Password").clear();
    await page.getByLabel("Password").type("ITest@test")
    const s = await page.getByLabel("Password").inputValue();
    console.log("Value in the password textbox " + s)
})

//radio button
test("Understanding action on radio button" , async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    // All radio methods
    console.log("Radio button is checked? " + await page.getByLabel("Poor").isEnabled());
    await page.getByLabel("Poor").check()
    console.log("Radio button is checked? " + await page.getByLabel("Excellent").isEnabled()); //only ask for other in[ut to check false]
})

// Checkbox 
test("Understanding action on checkbox", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByText("Log in").click()
    await page.getByLabel("Remember me?").check()
    console.log("Check box is checked?" + await page.getByLabel("Remember me?").isChecked());
    await page.getByLabel("Remember me?").uncheck()
    console.log("Check box is checked?" + await page.getByLabel("Remember me?").isChecked());   
    // await page.waitForTimeout(2000);
})
// Dropdown 
test("Understanding action on dropdown", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByText("Books").first().click();
    // await page.getByRole("combobox", {name: 'products-orderby'}).selectOption({label: 'Price: High to Low'})
    console.log(await page.locator("select[name = 'products-orderby']").selectOption({label: 'Price: High to Low'}))
        // console.log(await page.locator("select[name = 'products-orderby']").nth(3).

    await page.waitForTimeout(2000)
    // await page.getByRole("combobox", {name: 'products-orderby'}).selectOption("https://demowebshop.tricentis.com/books?orderby=6")
})
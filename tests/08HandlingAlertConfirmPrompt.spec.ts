import {expect, test} from '@playwright/test'
test ("Handle JavaScript Alert" , async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async(Dialogue) =>{
        const s = Dialogue.message();
        console.log("Text is: " + s); 
        await Dialogue.accept() //accept the dialogue means clicking on the dialogue
    })
    await page.locator("button[onclick = 'jsAlert()']").click();
    // await page.waitForTimeout(2000)
    await expect(page.locator("p[id= 'result']")).toHaveText("You successfully clicked an alert");
    // await page.waitForTimeout(2000)
})
// Handle the javascript confirm
test("Handle JavaScript Confirm", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async(Dialogue2) => {
        const s1 = Dialogue2.message();
        console.log("Text is: " + s1)
        await Dialogue2.dismiss();
        // await page.waitForTimeout(2000)
    })
    await page.locator("button[onclick= 'jsConfirm()']").click()
    await expect(page.locator("p[id = 'result']")).toHaveText("You clicked: Cancel")
    // await page.waitForTimeout(2000)
})

//Handle JavaScript Prompt
test('Handle JavaScript Prompt', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   page.on('dialog',async (dialog) =>
    {
        const s2 = dialog.message();
        console.log("Text is "+s2)
        await dialog.accept("testing")
    });
 
   page.locator("button[onclick='jsPrompt()']").click()
   await expect(page.locator("p[id='result']")).toHaveText("You entered: testing");
})
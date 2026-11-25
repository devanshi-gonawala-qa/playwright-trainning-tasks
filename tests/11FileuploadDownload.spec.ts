import {test} from '@playwright/test';
test("File Upload", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    //uploading a single file
    await page.locator("input[id='file-upload']").setInputFiles("C:/playwright/image.jpg");
    // this is the method when multiple image can download in this only one image support
    // await page.locator("input[id='file-upload']").setInputFiles(["C:/playwright/image.jpg" , "C:/playwright/image.jpg"])
});
test("File download" , async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    const downloadPromise = page.waitForEvent("download")
    await page.getByText("checkup-1793595897-r3fh.txt").click();
    const download = await downloadPromise;
    await download.saveAs("C:/playwright/checkup.txt")
    console.log("Suggested file path is: " + download.suggestedFilename())
    console.log("File path is: " + download.path())
}); 


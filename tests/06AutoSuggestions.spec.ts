import { test, expect } from '@playwright/test';

test("Verify Google search Auto-Suggestions", async ({ page }) => {
    await page.goto("https://www.google.com/");

    const searchbox = page.getByRole('combobox', { name: 'Search' });
    await searchbox.fill("Playwright automation");

    const suggestions = page.locator("ul[role='listbox']");

    // Check if the first matching listbox is visible
    await expect(suggestions.first()).toBeVisible();

    // Check if at least one matching listbox is visible
    // await expect(suggestions).toBeVisible();
    const suggestionElements = await suggestions.all()
    for(const s of suggestionElements){
        console.log(await s.innerText())
    }
    //testing if there are 10 suggestions
    await page.waitForTimeout(6000)
    expect(suggestionElements.length).toEqual(2)
});
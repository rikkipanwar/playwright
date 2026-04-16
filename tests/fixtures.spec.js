import {test} from "@playwright/test";
test.skip("fixtures", async({page})=> {
    await page.goto("https://www.amazon.in/")
})

test("fixtures1", async({browserName, browser})=> {
    console.log(browserName);
    
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.amazon.in/")
})
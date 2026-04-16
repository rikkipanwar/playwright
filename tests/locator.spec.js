import {test} from "@playwright/test";
// test("locators using ccs selector", async({page}) => {
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     //username textfield
//     await page.locator("input#username").fill("student")
//     //password textfield
//     await page.locator("input#password").fill("Password123")
//     //submit button
//     await page.locator('[class="btn"]').click()
// })

test("locators using xpath", async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //username textfield
    await page.locator('//input[@id="username"]').fill("student")
    //password textfield
    await page.locator('//input[@name="password"]').fill("Password123")
    //submit button
    await page.locator('//button[.="Submit"]').click()
})
import {test} from '@playwright/test';
//to set default timeout for all the test blocks
test.use({actionTimeout:5000})


test("check", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator('//input[@id="attended"]').check()
})

test("fill 1", async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("student")
    await page.locator('//button[@class="btn"]').click({timeout:1000})
})

test("fill 2", async({page}) => {
    page.setDefaultTimeout(3000) //set default timeout to 3 seconds intead of 30 seconds
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("student")
})
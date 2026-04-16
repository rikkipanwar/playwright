import {test, expect} from '@playwright/test';
test("radio button", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    // await page.locator('//input[@value="Upi"]').click()
    await page.locator('//input[@value="Upi"]').check()
    await page.waitForTimeout(2000)
    //verify
    console.log(await page.locator('//input[@value="Upi"]').isChecked());
    //assertion
    //await expect(await page.locator('//input[@value="Upi"]')).toBeChecked()

    //negative assertion (if checkbox is not to be checked)
    await expect(await page.locator('//input[@value="Upi"]').isChecked()).toBeFalsy()
})

test.only("checkbox", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator('input#domain_b').check()
    await page.waitForTimeout(2000)
    //verify checkbox is checked using assertion
    await expect(await page.locator('input#domain_b')).toBeChecked()

    await page.locator('input#domain_b').uncheck()
    await page.waitForTimeout(2000)
    //verify checkbox is unchecked using assertion
    await expect(await page.locator('input#domain_b')).not.toBeChecked()
})
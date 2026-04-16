import {test} from '@playwright/test';
test.skip("keyboard actions", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // //fill()
    // await page.locator('#name').fill("rikki")

    // //type()
    // await page.locator('#name').type("rikki")

    // await page.type("#name","rikki")

    // await page.locator('#name').click()
    // await page.keyboard.type("rikki")

    //insertText()
    await page.locator('#name').click()
    await page.keyboard.insertText("rikki")

    //down() and up()
    await page.keyboard.down('Space')
    await page.keyboard.up('Space')
    await page.keyboard.down('R')
    await page.keyboard.up('R')
    await page.waitForTimeout(2000)

    //press()
    await page.keyboard.press('Tab')
    await page.keyboard.type('rikki@gmail.com')
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)
})

test("scrolling using keyboard actions", async({page}) => {
    await page.goto("https://www.amazon.in/")
    for (let index = 1; index < 50; index++) {
        await page.keyboard.press('ArrowDown')
        await page.waitForTimeout(50)
    }
    await page.waitForTimeout(2000)
    for (let index = 1; index < 25; index++) {
        await page.keyboard.press('ArrowUp')
    }
    await page.waitForTimeout(2000)
})

//type("string") 
//insertText("string")
//press("a+b+c") or press("<key>")
//down("<key>") and up("<key>")
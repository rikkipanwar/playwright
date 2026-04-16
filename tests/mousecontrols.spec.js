import {test} from '@playwright/test';
test.skip("basic mouse actions", async({page}) => {
    //click---------------------------------
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator("//button[text()='Yes']").click()  //left click
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Yes']").click({modifiers:['Shift']}) //shift+click

    //right click---------------------------------
    await page.locator('//a[text()="Right Click"]').click()
    await page.locator('//button[@id="btn_a"]').click({button:"right"})  //right click
    await page.waitForTimeout(2000)

    //double click---------------------------------
    await page.locator('//a[text()="Double Click"]').click()
    //await page.locator('#btn_a').dblclick()  //double click
    await page.locator('#btn_a').click({clickCount:2}) //double click using clickcount of click()
    await page.waitForTimeout(2000)

    //down and up--------------------------------------
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    await page.locator("#circle").hover()
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await page.mouse.up()
    await page.waitForTimeout(2000)

    //disabled or hidden buttons-------------------------------------
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    //await page.locator('//input[@id="submit"]').click({force:true})
    await page.locator('//input[@id="submit"]').dispatchEvent('Click')
    await page.waitForTimeout(4000)

    //mouse hover-------------------------------------
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    await page.waitForTimeout(2000)

    //move--------------------------------
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    await page.waitForTimeout(2000)
    await page.mouse.move(100,200)
    await page.waitForTimeout(2000)
})

test.skip("vertical scrolling", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0,1000) //scroll down by 1000 pixels
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0,-1000) //scroll up by 1000 pixels
    await page.waitForTimeout(2000)
})

test.skip("horizontal scrolling", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(1000,0) //scroll right by 1000 pixels
    await page.waitForTimeout(2000)
    await page.mouse.wheel(-1000,0) //scroll left by 1000 pixels
    await page.waitForTimeout(2000)
})

test.skip("scroll to element", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded() //manually scroll to element (use if only needed to scroll to the element)
    await page.waitForTimeout(2000)
    await page.locator('//input[@type="checkbox"]').click()  //it scrolls to the element automatically and then clicks
})

test.skip("drag and drop the element using mouse actions", async({page}) => {
    //moving the element or dragging and dropping the element using mouse actions
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.waitForTimeout(2000)
    await page.locator('//div[text()="Drag Me"]').hover()
    await page.mouse.down()
    await page.mouse.move(200,500)
    await page.mouse.up()
    await page.waitForTimeout(2000)
})

test.skip("drag and drop to target using mouse actions", async({page}) => {
    //drag and drop to target
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
    await page.locator('//div[text()="Mobile Charger"]').hover()
    await page.mouse.down()
    await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]').hover()
    await page.mouse.up()
    await page.waitForTimeout(2000)
})

test.skip("drag and drop by taking the element location", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
    await page.locator('//div[text()="Mobile Charger"]').hover()
    await page.mouse.down()
    let box = await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]').boundingBox()
    await page.mouse.move(box.x,box.y)
    await page.mouse.up()
    await page.waitForTimeout(2000)
})

test("drag and drop using dropto()", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
    let source = await page.locator('//div[text()="Mobile Charger"]')
    let target = await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]')
    await source.dragTo(target)
    await page.waitForTimeout(2000)
})
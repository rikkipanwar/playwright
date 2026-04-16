import {chromium, firefox, test} from "@playwright/test";
test("browser controls", async({page}) => {
    await page.goto("https://www.amazon.com/")
    //get size of browser---------------
    const size = page.viewportSize()
    console.log(size);
    //set size of browser----------------
    await page.setViewportSize({width:1920, height:1080})
    const size1 = page.viewportSize()
    console.log(size1);
    //get title-------------------
    const title = await page.title()
    console.log(title);
    //get current page url-------------------
    const url = await page.url()
    console.log(url);
})

// test("browser controls", async({browser}) => {
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     await page.goto("https://www.google.com/")
    
//     //context.cookies() - retrieve all cookies from current page URl-------------------
//     const cookies = await context.cookies()
//     console.log(cookies);
// })

// test("instance", async() => {
//     let browser = await  firefox.launch()
//     //browser.newContext() - creates new browser context(like a fresh browser profile)-------------------
//     let context = await browser.newContext()
//     //context.newPage() - opens a new tab/page in the browser context-------------------
//     let page = await context.newPage()
//     //browser.close() - if we have multiple browser context/tabs, it closes the browser-------------------
//     await browser.close()
//     //page.goto() - navigates to a given url-------------------
//     await page.goto("https://www.google.com/")
// }) 

// test("screenshot", async({page}) => {
//     await page.goto("https://www.google.com/")
//     //page.screenshot({path:'example.png'}) - takes screenshot of current page-------------------
//     await page.screenshot({path:"screenshot/ss.png"})
//     //take multiple screenshot-------------------
//     let time = new Date().getTime()
//     await page.screenshot({path:`screenshot/sspage-${time}.png`})
// })
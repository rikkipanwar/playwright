import { test } from "@playwright/test";
import { time } from "node:console";
// test("wait for text", async({page}) => {
//     await page.goto("https://www.amazon.in/")
//     await page.locator("input#twotabsearchtextbox").fill("shoes")
//     //await page.locator('//div[@role="row"]',{hasText:"For Woman"}).first().waitFor() //get error here as it is locating two elements
//     // so have to use first() method to get the first element

//     await page.locator('//div[@role="row"]',{hasText:"rack"}).waitFor({timeout:5000})
//     let autosugg = await page.locator('//div[@role="row"]').allTextContents()
//     console.log(autosugg)
// })

// test("wait for timeout", async({page}) => {
//     await page.goto("https://www.amazon.in/")
//     await page.locator("input#twotabsearchtextbox").waitFor({timeout:3000})
//     await page.locator("input#twotabsearchtextbox").fill("shoes")

//     await page.locator('//div[@role="row"]',{hasText:"rack"}).waitFor()
//     let autosugg = await page.locator('//div[@role="row"]').allTextContents()
//     console.log(autosugg)
// })

// test("wait for element state", async({page}) => {
//     await page.goto("https://www.amazon.in/")

//     await page.locator("input#twotabsearchtextbox").waitFor({state:"visible"})
//     await page.locator("input#twotabsearchtextbox").fill("shoes")

//     await page.locator('//div[@role="row"]',{hasText:"rack"}).waitFor({timeout:5000})
//     let autosugg = await page.locator('//div[@role="row"]').allTextContents()
//     console.log(autosugg)
// })

// test("wait for selector", async({page}) => {
//     await page.goto("https://www.amazon.in/")

//     await page.waitForSelector("input#twotabsearchtextbox",{state:'attached'})
//     await page.locator("input#twotabsearchtextbox").fill("shoes")

//     await page.locator('//div[@role="row"]',{hasText:"rack"}).waitFor()
//     let autosugg = await page.locator('//div[@role="row"]').allTextContents()
//     console.log(autosugg)
// })

test("wait for navigation", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await Promise.all([
    page.waitForNavigation(),  // this method is not used or is deprecated because the next method click has autowait feature
    page.click("#nav-cart-count-container")
  ]);
});

test("wait for loadstate", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.click("#nav-cart-count-container")
  await page.waitForLoadState("networkidle",{timeout:5000}) 
});

test("wait for event", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
  await page.fill('#writeArea', "I am downloading the file")
  let [downloadfile] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadButton')
  ])
  console.log(await downloadfile.path());
});

test("custom waits", async({page}) => {
  await page.goto("https://www.amazon.in/")
  await page.locator("input#twotabsearchtextbox").fill("HP laptop")
  await page.waitForFunction(() => {
    let ele = document.querySelectorAll('.s-suggestion-container')
    return ele.length>1
  })
  let autosugg = await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
  console.log(autosugg);
  
})

test("custom waits for fully page loaded", async({page}) => {
  await page.goto("https://www.amazon.in/")
  await page.waitForFunction(() => {
    return document.readyState==='complete'
  })
  await page.locator("input#twotabsearchtextbox").fill("HP laptop")
})


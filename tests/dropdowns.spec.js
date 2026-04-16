import {test} from '@playwright/test';
test("single select dropdown", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")

    //selectOption()
    await page.waitForTimeout(2000)
    // await page.locator('#select3').selectOption({value:'India'}) //select by value
    await page.locator('#select3').selectOption('India')

    await page.waitForTimeout(2000)
    // await page.locator('#select5').selectOption({label:'Uttar Pradesh'}) //select by label/ visible text
    await page.locator('#select5').selectOption('Uttar Pradesh')

    await page.waitForTimeout(2000)
    await page.locator('//label[text()="City"]/parent::div/child::select').selectOption({index:50}) //select by index
    await page.waitForTimeout(2000)
})

test("multiple select dropdown", async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.waitForTimeout(2000)
    // await page.locator('#select-multiple-native').selectOption([{value:'Mens Cotton Jacket'},
    //     {value:'Solid Gold Petite Micropave '},
    //     {value:'Mens Casual Slim Fit'}])

    // await page.locator('#select-multiple-native').selectOption(['Mens Cotton Jacket','Solid Gold Petite Micropave ','Mens Casual Slim Fit'])

    await page.locator('#select-multiple-native').selectOption([{index:1},{index:2},{index:3}])
    await page.locator('//button[text()="Add"]').click()
    await page.waitForTimeout(2000)
})

test("custom dropdown", async({page}) => {
    await page.goto("https://www.amazon.in/s?k=shoes&crid=3389BNYU90LZA&sprefix=shoes%2Caps%2C552&ref=nb_sb_noss_2")
    await page.locator('#s-result-sort-select').click({force:true})
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    let options =await page.locator('//a[@class="a-dropdown-link"]').all()
    for(let option of options){
        let text = await option.textContent()
        if(text.includes("Best ")){
            await option.click()
        }
        await page.waitForTimeout(3000)
    }
})

test("custom dropdown by writing xpath (hardcoded)", async({page}) => {
    await page.goto("https://www.amazon.in/s?k=shoes&crid=3389BNYU90LZA&sprefix=shoes%2Caps%2C552&ref=nb_sb_noss_2")
    await page.locator('#s-result-sort-select').click({force:true})
    await page.locator('#s-result-sort-select_1').click()
    await page.waitForTimeout(3000)
})

test("custom dropdown by writing dynamic xpath", async({page}) => {
    //vaiable attached to xpath for text
    await page.goto("https://www.amazon.in/s?k=shoes&crid=3389BNYU90LZA&sprefix=shoes%2Caps%2C552&ref=nb_sb_noss_2")
    await page.locator('#s-result-sort-select').click({force:true})
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    let text = "Price: High to Low"
    await page.locator(`//a[@class="a-dropdown-link" and text()='${text}']`).click()
    await page.waitForTimeout(3000)
})

test("autosuggestions dropdown using for loop", async({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    // await page.waitForTimeout(2000)
    await page.waitForSelector('(//div[@class="s-suggestion-container"])[1]')
    let autosugg = await page.locator('//div[@class="s-suggestion-container"]').all()
    for(let option of autosugg){
        let text = await option.textContent()
        if(text.includes(" for woman")){
            await option.click()
            break;
        }
        await page.waitForTimeout(3000)
    }
})

test.only("autosuggestions dropdown using down arrow", async({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    // await page.waitForTimeout(2000)
    await page.waitForSelector('(//div[@class="s-suggestion-container"])[1]')
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
})
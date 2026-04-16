import {test} from '@playwright/test';
test("elements control", async({page}) => {
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator('#name').fill("Rikki")
    // await page.locator('#email').type("panwar.rikki@gmail.com")

    // let email = await page.locator('#email').inputValue() //get the value of email field 
    // console.log(email);

    // await page.locator("//button[text()='Register']").click()
    // //await page.pause(3000) //pause for 3 seconds and opens the 

    // await page.locator("//section[@class='poppins text-[14px]' and text()='Radio Button']").click()

    // let text = await page.locator("//section[@class='poppins text-[14px]' and text()='Radio Button']").innerText()
    // let text1 = await page.locator("//section[@class='poppins text-[14px]' and text()='Radio Button']").textContent()
    // console.log(text);
    // console.log(text1);

    // //allTextContents() - returns all the text content of the elements in an array
    // let arr = await page.locator("//section[@class='poppins text-[14px]']").allTextContents()
    // console.log(arr);
    
    //element.getAttribute("attributeName") - returns the value of the attribute
    //page.locator('selector').getAttribute("attributeName")
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // let value = await page.locator("//input[@id='male']").getAttribute('value')
    // let value1 = await page.locator("//input[@id='male']").getAttribute('type')
    // console.log(value);
    // console.log(value1);

    // await page.goto("https://www.flipkart.com/")
    // //element.all() - returns all the elements in an array
    // let arr = await page.locator('//div[@class="css-g5y9jx r-1awozwy r-1777fci r-6gpygo r-iphfwy r-13zlsnc"]').all()
    // console.log(arr);
    // let firstElement = await page.locator('//div[@class="css-g5y9jx r-1awozwy r-1777fci r-6gpygo r-iphfwy r-13zlsnc"]').first()
    // console.log(firstElement);
    // let secondElement = await page.locator('//div[@class="css-g5y9jx r-1awozwy r-1777fci r-6gpygo r-iphfwy r-13zlsnc"]').nth(1)
    // console.log(secondElement);
    // let lastElement = await page.locator('//div[@class="css-g5y9jx r-1awozwy r-1777fci r-6gpygo r-iphfwy r-13zlsnc"]').last()
    // console.log(lastElement);

    // //element.all() method doesn't have autowait. it does not wait for the element to load. hence we use waitFor() method
    // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator('//section[@class="poppins text-[14px]"]').first().waitFor()
    // let a = await page.locator('//section[@class="poppins text-[14px]"]').all()
    // console.log(a);

    //isVisible() - returns true if the element is visible
    //page.locator('selector').isVisible()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('//input[@id="phone"]').waitFor()
    // let v = await page.locator('//input[@id="phone"]').isVisible()
    // console.log(v);

    // // isEnabled() - returns true if the element is enabled
    // //page.locator('selector').isEnabled()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('//input[@id="phone"]').waitFor()
    // let v = await page.locator('//input[@id="phone"]').isEnabled()
    // console.log(v);
    // let v1 = await page.locator('//input[@id="phone"]').isDisabled()
    // console.log(v1);

    //isEditable() - returns true if the element is editable
    //page.locator('selector').isEditable()
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('//input[@id="phone"]').waitFor()
    // let v2 = await page.locator('//input[@id="phone"]').isEditable()
    // console.log(v2);

    //isChecked() - returns true if the element is checked
    //page.locator('selector').isChecked()
    // await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    // await page.locator('//input[@id="domain_a"]').click()
    // let v3 = await page.locator('//input[@id="domain_a"]').isChecked()
    // console.log(v3);

    //waitFor() - waits for the element to load
    //page.locator('selector').waitFor({options})
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator('//input[@id="domain_a"]').waitFor({state:"visible", timeout:3000})
})
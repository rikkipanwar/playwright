import {test} from '@playwright/test';
test("get by methods", async({page}) => {
    // await page.goto("https://demo.nopcommerce.com/login")
    // //---------label------------
    // await page.getByLabel("Email:").fill("aa@gmail.com")
    // //await page.getByLabel("Email:",{exact:true}).fill("aa@gmail.com")
    // //await page.getByLabel("Email",{exact:false}).fill("aa@gmail.com")

    // //---------placeholder--------------
    // //await page.getByPlaceholder("Search store").fill("computers")
    // //----------text---------------
    // await page.getByText("Electronics").click()
    // //----------altText---------------
    // //await page.getByAltText("nopCommerce demo store",{exact:true}).click()
    // //-----------title------------------------
    // //await page.getByTitle("Show products in category Camera & photo").first().click()
    // //-------------Role-------------------------
    // await page.getByRole("link", {name: " Camera & photo "}).first().click()
    //--------------TestId------------------------
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("password").fill("secret_sauce")

})
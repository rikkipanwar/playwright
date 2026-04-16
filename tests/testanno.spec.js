import {test} from '@playwright/test';
test("test annotation", async({page})=> {
    console.log("test1");
})
test("test 2", async({page})=> {
    test.slow()
    console.log("test2");
})
test("test 3", async({browserName})=> {
   // test.skip(browserName==="chromium")
    console.log("test3");
})
test.fixme("test 4", async({page})=> {
    console.log("test4");
})
test.skip("test 5", async({page})=> {
    console.log("test5");
})
test.fail("test 6", async({page})=> {
    await page.goto("ffrgdfgdgdf")
    console.log("test6");
})

test.describe("login", async()=> {
    test("valid cred", async({page})=> {
        test.setTimeout(5000)
        console.log("test7");
    })
    test("invalid cred", async({page})=> {
        console.log("test8");
    })
})  
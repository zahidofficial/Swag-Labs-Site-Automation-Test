const account = require('../pages/account');
const menu = require('../pages/menu');

const userName = "standard_user";
const password = "secret_sauce";


describe("Standard user Login",()=>{
    it("Logged in with standard user",async()=>{
        await account.Login(userName, password);
        await browser.pause(2000);
        await menu.clickResetAppState();
    })
})


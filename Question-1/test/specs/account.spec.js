const account = require("../pages/account");
const accountLocator = require("../locators/accountLocator");


const userName = "locked_out_user";
const password = "secret_sauce";

describe("Locked out user Login",()=>{
    it("Should display error message for locked_out_user",async()=>{

         await account.Login(userName, password);

         await browser.pause(2000);

        const errorText = await accountLocator.errorMessage.getText();

        console.log("Error Text: ", errorText);
    })
})
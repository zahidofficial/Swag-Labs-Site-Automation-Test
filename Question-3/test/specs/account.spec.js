const accountLocator = require("../locators/accountLocator");
const account = require("../pages/account");
const menu = require("../../../Question-2/test/pages/menu");
const product = require("../pages/product");

const userName = "performance_glitch_user";
const password = "secret_sauce";

describe("Performance Glitch user Login",()=>{
    it("Logged in with performance Glitch User and reset app state",async()=>{
        await account.Login(userName, password);
        await browser.pause(2000);
        await menu.clickResetAppState();
    })

    it("Should sort Z to A and add first product to cart", async()=>{
        await product.sortByNameZtoA();
        await product.addFirstProductToCart();

    })  
    
})
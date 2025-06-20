const account = require("../pages/account");
const menu = require("../pages/menu");
const product = require("../pages/product");
const checkout = require("../pages/checkout");


describe("E2E Checkout Flow", () => {
    it("should complete checkout process", async () => {
        //await account.Login(userName, password);
        //await browser.pause(2000);
        //await menu.clickResetAppState();
        await product.addItemsToCart();
        await browser.pause(2000);
        ///////////////////////////////////////
        await checkout.proceedToCheckout();
        await browser.pause(2000);
        await checkout.fillCheckoutForm("Zahidul", "Islam", "1900");
        await browser.pause(2000);
        await checkout.verifyProductsAndTotalPrice();
        await checkout.finishCheckout();
        await browser.pause(2000);
        //////
        await menu.clickResetAppState();
        await menu.logout();
    });
});
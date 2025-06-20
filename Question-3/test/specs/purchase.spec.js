const checkout = require("../../../Question-2/test/pages/checkout");
const menu = require("../../../Question-2/test/pages/menu");
const account = require("../pages/account");


describe("Performance glitch checkout process",()=>{
    it("Should complete checkout process ", async()=>{
        await checkout.proceedToCheckout();
        await checkout.fillCheckoutForm("Zahidul", "Islam", 1900);

        await checkout.verifyProductsAndTotalPrice();
        await checkout.finishCheckout();

        await menu.clickResetAppState();
        await menu.logout(); 
    }) 
    
})
const checkoutLocator = require("../locators/checkoutLocator");
class checkout{
    async proceedToCheckout(){
        await checkoutLocator.cartIcon.click();
        await checkoutLocator.checkoutBtn.click();;
    }

    async fillCheckoutForm(firstName, lastName, zip){
        await checkoutLocator.firstNameInput.setValue(firstName);
        await checkoutLocator.lastNameInput.setValue(lastName);
        await checkoutLocator.zipCodeInput.setValue(zip);
        await checkoutLocator.continueBtn.click();
    }
    
    async verifyProductsAndTotalPrice(){
        const names = await checkoutLocator.productNames;
        for(let i=0;i<names.length;i++){
            const text = await names[i].getText();
            console.log(`Product ${i + 1}: ${text}`);
        }
        const total = await checkoutLocator.totalPrice.getText();
        console.log(`Total Price: ${total}`);
    }

    async finishCheckout(){
        await checkoutLocator.finishBtn.click();
        const message = await checkoutLocator.successMsg.getText();
        console.log(`Success Message: ${message}`);
    }

}
module.exports = new checkout();
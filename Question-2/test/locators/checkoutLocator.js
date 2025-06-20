class checkoutLocator{
    get cartIcon(){
        return $("//a[@class='shopping_cart_link']");
    }
    get checkoutBtn(){
        return $("//button[@id='checkout']");
    }
    get firstNameInput(){
        return $("//input[@id='first-name']");
    }
    get lastNameInput(){
        return $("//input[@id='last-name']");
    }
    get zipCodeInput(){
        return $("//input[@id='postal-code']");
    }
    get continueBtn(){
        return $("//input[@id='continue']");
    }
    get productNames(){
        return $("//div[@class='inventory_item_name']");
    }
    get totalPrice(){
        return $("//div[@class='summary_total_label']");
    }
    get finishBtn(){
        return $("//button[@id='finish']");
    }
    get successMsg(){
        return $("//h2[@class='complete-header']");
    }

}
module.exports = new checkoutLocator();
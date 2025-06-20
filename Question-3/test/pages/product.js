const productLocator = require("../locators/productLocator");

class product{
    async sortByNameZtoA(){
        await productLocator.sortDropDown.selectByVisibleText("Name (Z to A)");

    }
    async addFirstProductToCart(){
        await productLocator.firstAddToCartBtn.click();
    }
}
module.exports = new product();
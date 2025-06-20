const productLocator = require("../locators/productLocator");

class product{
    async addItemsToCart() {
        await productLocator.addBackpack.click();
        await productLocator.addBikeLight.click();
        await productLocator.addBoltTShirt.click();
    }
}
module.exports = new product();
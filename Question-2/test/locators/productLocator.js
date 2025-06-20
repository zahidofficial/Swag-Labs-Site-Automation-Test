class productLocator{
    get addBackpack() {
        return $("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    }
    get addBikeLight() {
        return $("//button[@data-test='add-to-cart-sauce-labs-bike-light']");
    }
    get addBoltTShirt() {
        return $("//button[@data-test='add-to-cart-sauce-labs-bolt-t-shirt']");
    }

}
module.exports = new productLocator();
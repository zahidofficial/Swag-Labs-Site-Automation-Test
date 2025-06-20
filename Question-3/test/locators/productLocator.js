class productLocator{
    get sortDropDown(){
        return $("//select[@data-test='product-sort-container']");
    }
    get firstAddToCartBtn(){
        return $("(//button[contains(text(),'Add to cart')])[1]");
    }

}
module.exports = new productLocator();
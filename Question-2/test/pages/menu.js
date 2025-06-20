const menuLocator = require("../locators/menuLocator");
class menu{
    async clickHamburgerIcon(){
        await menuLocator.hamburgerMenu.click();
    }
    async clickResetAppState(){
        await this.clickHamburgerIcon();
        await browser.pause(2000);
        await menuLocator.resetAppState.click();
        await this.closeMenu();
    }
    async closeMenu(){
        await menuLocator.closeMenuBtn.click();
    }
    async logout() {
    await this.clickHamburgerIcon();
    await browser.pause(1000);
    await menuLocator.logoutBtn.click();
    }

}
module.exports = new menu();
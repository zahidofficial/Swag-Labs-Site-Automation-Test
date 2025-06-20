const accountLocator = require("../locators/accountLocator");
class account{
    async enterUsername(userName){
        await accountLocator.userName.setValue(userName);
    }
    async enterPassword(password){
        await accountLocator.password.setValue(password);
    }
    async clickLoginBtn(){
        await accountLocator.loginBtn.click();
    }
    async Login(userName, password){
        await this.enterUsername(userName);
        await this.enterPassword(password);
        await this.clickLoginBtn();;
    }

}
module.exports = new account();
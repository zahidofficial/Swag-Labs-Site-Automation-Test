const accountLocator = require("../locators/accountLocator");
class account{
    async enterUsername(userName){
        await accountLocator.userName.setValue(userName);
    }
    async enterPassword(password){
        await accountLocator.password.setValue(password);
    }
    async clickLoginInBtn(){
        await accountLocator.buttonLogin.click();
    }
    async Login(userName,pass){
        await this.enterUsername(userName);
        await this.enterPassword(pass);
        await this.clickLoginInBtn();
    }

}

module.exports = new account();
class accountLocator{
    get userName(){
        return $("//input[@name='user-name']");
    }
    get password(){
        return $("//input[@name='password']");
    }
    get loginBtn(){
        return $("//input[@id='login-button']");
    }

}
module.exports = new accountLocator();
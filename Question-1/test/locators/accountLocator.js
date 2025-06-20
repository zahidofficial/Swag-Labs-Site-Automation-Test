class accountLocator{
    get userName(){
        return $("//input[@name='user-name']");
    }
    get password(){
        return $("//input[@name='password']");
    }
    get buttonLogin(){
        return $("//input[@id='login-button']");
    }
    get errorMessage(){
        return $("//h3[@data-test='error']");
    }

}
module.exports = new accountLocator();
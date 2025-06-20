class menuLocator{
    get hamburgerMenu(){
        return $("//button[@id='react-burger-menu-btn']");
    }
    get resetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get closeMenuBtn(){
        return $("//button[@id='react-burger-cross-btn']");
    }
    get logoutBtn() {
    return $("//a[@id='logout_sidebar_link']");
    }

}
module.exports = new menuLocator();
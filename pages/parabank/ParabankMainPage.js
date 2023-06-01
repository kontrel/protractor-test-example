class ParabankMainPage {

    constructor() {
        
        let username = element(by.name('username'));
        let password = element(by.name('password'));
        let loginBtn = element(by.css('[type="submit"]'));
        let logoutBtn = element(by.xpath('//a[@href="/parabank/logout.htm"]'));

        this.login = async function(usernameValue, passwordValue) {
            username.sendKeys(usernameValue);
            password.sendKeys(passwordValue);
            loginBtn.click();
        };

        this.verifyLoggedIn = async function() {
               await logoutBtn.getText('value').then(function(actual) {
                    expect('Log Out').toBe(actual)
                })
           
        };

    }
}
module.exports = new ParabankMainPage();
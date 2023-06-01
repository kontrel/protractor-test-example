describe('google search test', function() {

    let parabankMainPage = require('../pages/parabank/ParabankMainPage');

    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('https://parabank.parasoft.com/');
    });
  
    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should log in to parabank', function() {
        
        parabankMainPage.login('john', 'demo');
        parabankMainPage.verifyLoggedIn();
    })

});
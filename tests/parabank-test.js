let parabankMainPage = require('../pages/parabank/ParabankMainPage');

describe('Parabank tests', function() {

    let parabankMainPageObj;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('https://parabank.parasoft.com/');
        parabankMainPageObj = new parabankMainPage();
    });
  
    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should log in to parabank', function() {
        parabankMainPageObj.login('john', 'demo');
        parabankMainPageObj.verifyLoggedIn();
    })

});
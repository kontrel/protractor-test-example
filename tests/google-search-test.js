describe('google search test', function() {

    let mainPage = require('../pages/google-pages/MainPage')
    let searchResultPage = require('../pages/google-pages/SearchResultPage')

    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('https://google.com/');
    });
  
    afterEach(function() {
      browser.close()
    });

  it('should search protractor from google', function() {
    
    mainPage.acceptConsents();
    mainPage.search('protractor');
    searchResultPage.validateResultMessage('Protractor - end-to-end testing for AngularJS')
      
  });

  it('should search selenium from google', function() {
    
    mainPage.acceptConsents();
    mainPage.search('selenium');
    searchResultPage.validateResultMessage('Selenium')

  });

});
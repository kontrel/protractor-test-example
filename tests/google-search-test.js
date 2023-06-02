let mainPage = require('../pages/google-pages/MainPage')
let searchResultPage = require('../pages/google-pages/SearchResultPage')

describe('google search test', function() {

  let mainPageObj;
  let searchResultPageObj;

    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('https://google.com/');
      mainPageObj = new mainPage();
      searchResultPageObj = new searchResultPage();
    });
  
    afterEach(function() {
      browser.executeScript('window.sessionStorage.clear();');
      browser.executeScript('window.localStorage.clear();');
    });

  it('should search protractor from google', function() {
    
    mainPageObj.acceptConsents();
    mainPageObj.search('protractor');
    searchResultPageObj.validateResultMessage('Protractor - end-to-end testing for AngularJS')
      
  });

  it('should search selenium from google', function() {
    
    mainPageObj.acceptConsents();
    mainPageObj.search('selenium');
    searchResultPageObj.validateResultMessage('Selenium')

  });

});
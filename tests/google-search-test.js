describe('google search test', function() {

    it('should search from google', function() {
      browser.ignoreSynchronization = true;
      browser.get('https://google.com/');
      
      element(by.id('L2AGLb')).click();
      element(by.name('q')).sendKeys('protractor');
      
      element(by.xpath('(//input[@name="btnK"])[2]')).click();
      let searchResult = element(by.xpath('(//a[@jsname="qOiK6e"]/h3)[1]'))
  

      searchResult.getText('value').then(function (actual) {
        expect('Protractor - end-to-end testing for AngularJS').toEqual(actual);
    });

  
    });

  });
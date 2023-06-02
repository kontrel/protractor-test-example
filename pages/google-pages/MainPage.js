class MainPage {

    constructor() {

        let searchInput = element(by.name('q'));
        let searchButton = element(by.xpath('(//input[@name="btnK"])[2]'));
        let acceptConsents = element(by.id('L2AGLb'));

        this.acceptConsents = async function () {
            if(await acceptConsents.isPresent()) {
                acceptConsents.click();
            }
        };

        this.search = function (searchValue) {
            searchInput.sendKeys(searchValue);
            searchButton.click();
        };

    }
}
module.exports = MainPage;
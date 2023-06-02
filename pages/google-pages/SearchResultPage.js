class SearchResultPage {
    
    constructor() {

        let searchResult = element(by.xpath('(//a[@jsname="qOiK6e"]/h3)[1]'));

        this.validateResultMessage = async function (message) {
            if(await searchResult.isPresent()) {
                searchResult.getText('value').then((actual) => {
                    expect(message).toEqual(actual);
                });
            };
        };
    }
}
module.exports = SearchResultPage;
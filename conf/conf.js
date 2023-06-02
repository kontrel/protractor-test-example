exports.config = {

    multiCapabilities: [ 
      {
        'browserName': 'chrome',
        chromeOptions: {
          args: [
                   'start-maximized'
                ]
        }
      },
    ],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    maxSessions: 1,
    
    specs: [
      '../tests/google-search-test.js',
      '../tests/parabank-test.js'
    ]
  };
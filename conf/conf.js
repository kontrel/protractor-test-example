exports.config = {

    multiCapabilities: [ 
      {
        'browserName': 'chrome'
      },
    ],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    SELENIUM_PROMISE_MANAGER: false,

    maxSessions: 1,
    
    specs: [
      // '../tests/test1.js',
      // '../tests/test2.js',
      '../tests/google-search-test.js'
    ]
  };
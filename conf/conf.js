exports.config = {

  multiCapabilities: [ 
    {
      'browserName': 'chrome'
    },
    ],

    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    specs: [
      // '../tests/test1.js',
      '../tests/google-search-test.js'
    ]
  };
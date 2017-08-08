process.env.NODE_ENV = 'test';

var Browser = require('zombie');
var server = require('../../server/server');

Browser.localhost('localhost', 6840);

describe('User visits create listing page', function() {

  var browser = new Browser();

  before(function(done) {
    browser.visit('/listings/new', done);
  });

  before(function(done) {
        browser
          .fill('name',    'tester')
          .fill('description', 'its a very nice space')
          .pressButton('Submit', done);
      });

  describe('submits form', function() {
    it('should be successful', function() {
      browser.assert.success();
      browser.assert.text('body', 'Hello World!');
    });
  });
});

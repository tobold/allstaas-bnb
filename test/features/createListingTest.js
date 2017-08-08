process.env.NODE_ENV = 'test';
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');

describe('contact page', function() {
  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  before(function(done) {
        browser
          .fill('name',    'tester')
          .fill('description', 'its a very nice space')
          .pressButton('Submit', done);
      });

  describe('submits form', function() {
    it('should be successful', function() {
      this.browser.assert.success();
      this.browser.assert.text('body', 'Hello World!');
    });
  });
});

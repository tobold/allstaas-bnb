process.env.NODE_ENV = 'test';
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('listings page', function() {
  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/listings/new', done);
  });

  before(function(done) {
        this.browser
          .fill('name',    'tester')
          .fill('description', 'it is a very nice space')
          .pressButton('Submit', done);
      });

  describe('submits form', function() {
    it('should be successful', function() {
      this.browser.assert.success();
      expect(this.browser.text('body')).to.include('tester')
      expect(this.browser.text('body')).to.include('it is a very nice space')
    });
  });

  after(function() {
    this.server.close();
  });
});

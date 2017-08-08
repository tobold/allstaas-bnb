process.env.NODE_ENV = 'test';
var app = require('../../server/server.js');
console.log(app);
var Browser = require('zombie');
var assert = require('chai').assert;
var http = require('http');

describe('create listings page', function() {
  before(function() {
    this.server = http.createServer(app);
    this.browser = new Browser({ site: 'http://localhost:6840' });
  });
  before(function(done) {
    this.browser.visit('/listings/new', done);
  });

  it('should show an entry form', function() {
    assert.isOk(this.browser.success);
    assert.equal(this.browser.text('h1'), 'New Listing');
    assert.equal(this.browser.text('form label'), 'NameDescriptionPriceAvailable fromAvailable until');
  });
  it('')
});

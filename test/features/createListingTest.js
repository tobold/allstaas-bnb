process.env.NODE_ENV = 'test';
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var models = require('../../server/models')

describe('listings page', function() {

  before(function (done) {
        models.Listing.sync({force: true})
            .then(function () {
                done();
            });
    });

  before(function (done) {
        models.User.sync({force: true})
            .then(function () {
                done();
            });
    });

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/listings/new', done);
  });

  describe('not logged in', function() {
    it('should redirect to login', function() {
      this.browser.assert.url({pathname: '/sessions/new'})
    });
  });

  describe('logged in', function() {
    before(function(done) {
      this.browser.visit('/users/new', done);
    });
    before(function(done) {
      this.browser
      .fill('first_name',    'Dave')
      .fill('last_name', 'Davis')
      .fill('email', 'dave@dave.org')
      .fill('password', 'goodpassword')
      .pressButton('Sign up').then(done)
    });

    before(function(done) {
      this.browser.visit('/listings/new', done);
    });
    it('test test', function() {
      this.browser
        .fill('name',    'tester')
        .fill('description', 'it is a very nice space')
        .fill('price', 20)
        .fill('listFrom', '2017-10-01')
        .fill('listTill', '2017-10-02')
        .pressButton('Submit').then(function() {
          expect(this.browser.text('body')).to.include('tester')
          expect(this.browser.text('body')).to.include('it is a very nice space')
        });
    });
  });

  after(function() {
    this.server.close();
  });
});

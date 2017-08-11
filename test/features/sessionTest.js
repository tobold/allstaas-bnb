process.env.NODE_ENV = 'test';
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var models = require('../../server/models')

describe('user can log in', function() {

  before(function (done) {
        models.User.sync({force: true})
            .then(function () {
                done();
            });
    });

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
    models.User.create({first_name: "Dave", last_name: "Davis", email: "dave@dave.org", password: "goodpassword"})
  });

  beforeEach(function(done) {
    this.browser.visit('/sessions/new', done);
  });

  describe('correct submission', function() {
    it('user is logged in', function(done) {
      var browser = this.browser;
      browser
      .fill('email', 'dave@dave.org')
      .fill('password', 'goodpassword')
      .pressButton('Log in').then(function(){
        browser.assert.url({pathname: '/'})
      }).then(done, done);
    });
  });

  describe('incorrect submission', function() {
    it('user does not exist', function(done) {
      var browser = this.browser;
      browser
      .fill('email', 'chris@dave.org')
      .fill('password', 'goodpassword')
      .pressButton('Log in').then(function(){
        browser.assert.url({pathname: '/sessions/new'})
      }).then(done, done);
    });

    it('incorrect password', function(done) {
      var browser = this.browser;
      browser
      .fill('email', 'dave@dave.org')
      .fill('password', 'badpassword')
      .pressButton('Log in').then(function(){
        browser.assert.url({pathname: '/sessions/new'})
      }).then(done, done);
    });
  });

  after(function() {
    this.server.close();
  });
});

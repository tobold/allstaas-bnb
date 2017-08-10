process.env.NODE_ENV = 'test';
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var models = require('../../server/models')

describe('user sign up page', function() {

  beforeEach(function (done) {
        models.User.sync({force: true})
            .then(function () {
                done();
            });
    });

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

    beforeEach(function(done) {
      this.browser.visit('/users/new', done);
    });

    it('creates a new user', function(done) {
      var browser = this.browser;
      browser
      .fill('first_name',    'Dave')
      .fill('last_name', 'Davis')
      .fill('email', 'dave@dave.org')
      .fill('password', 'goodpassword')
      .pressButton('Sign up').then(function(){
        browser.assert.url({pathname: '/listings'})
        models.User.findAll().then(function(users) {
          expect(users.length).to.equal(1)
        });
      }).then(done, done);
    });

    it('last name cannot be empty', function(done) {
      var browser = this.browser;
      browser
      .fill('first_name',    'Dave')
      .fill('email', 'dave@dave.org')
      .fill('password', 'goodpassword')
      .pressButton('Sign up').then(function() {
        browser.assert.url({pathname: '/users/new'})
      }).then(done, done);
    });

  after(function() {
    this.server.close();
  });
});

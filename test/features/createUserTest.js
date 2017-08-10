process.env.NODE_ENV = 'test';
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var models = require('../../server/models')

console.log(models);

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

  before(function(done) {
    this.browser.visit('/users/new', done);
  });

  before(function(done) {
    this.browser
      .fill('first_name',    'Dave')
      .fill('last_name', 'Davis')
      .fill('email', 'dave@dave.org')
      .fill('password', 'goodpassword')
      .fill('password_confirmation', 'goodpassword')
      .pressButton('Sign up', done);
  });

  it('creates a new user', function() {
    this.browser.assert.success();
    models.User.findAll().then(function(users) {
      expect(users.count()).to.equal(1)
    });
  });

  after(function() {
    this.server.close();
  });
});

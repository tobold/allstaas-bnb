// process.env.NODE_ENV = 'test';
// var app = require('../../app');
// var Browser = require('zombie');
// var http = require('http');
// var chai = require('chai');
// var assert = chai.assert;
// var expect = chai.expect;
// var models = require('../../server/models')
//
// describe('user sign up page', function() {
//
//   beforeEach(function (done) {
//         models.User.sync({force: true})
//             .then(function () {
//                 done();
//             });
//     });
//
//   before(function() {
//     this.server = http.createServer(app).listen(3000);
//     this.browser = new Browser({ site: 'http://localhost:3000' });
//   });
//
//   describe('empty fields', function() {
//
//     before(function(done) {
//       this.browser.visit('/users/new', done);
//     });
//
//     it('first name cannot be empty', function(done) {
//       this.browser
//       .fill('last_name', 'Davis')
//       .fill('email', 'dave@dave.org')
//       .fill('password', 'goodpassword')
//       .pressButton('Sign up', done);
//       this.browser.assert.url({pathname: '/users/new'})
//       models.User.findAll().then(function(result) {
//         expect(result.length.to.equal(0))
//         done();
//       });
//     });
  //
  //   it('last name cannot be empty', function() {
  //     this.browser
  //     .fill('first_name',    'Dave')
  //     .fill('email', 'dave@dave.org')
  //     .fill('password', 'goodpassword')
  //     .pressButton('Sign up', done);
  //   });
  //
  //   it('email cannot be empty', function() {
  //     this.browser
  //     .fill('first_name',    'Dave')
  //     .fill('last_name', 'Davis')
  //     .fill('password', 'goodpassword')
  //     .pressButton('Sign up', done);
  //   });
  //
  //   it('password cannot be empty', function() {
  //     this.browser
  //     .fill('first_name',    'Dave')
  //     .fill('last_name', 'Davis')
  //     .fill('email', 'dave@dave.org')
  //     .pressButton('Sign up', done);
  //   });

//   });
//
//
//   after(function() {
//     this.server.close();
//   });
// });

var express = require('express');
var router = express.Router();
var models = require('../server/models');
var session = require('express-session');

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/');
    } else {
        next();
    }
};

router.route('/')
  .get(sessionChecker, (req, res) => {
    console.log('Hi')
    res.redirect('/sessions/new');
  })

  .post((req, res) => {
          var email = req.body.email,
              password = req.body.password;

         models.User.findOne({ where: { email: email } }).then(function (user) {
              if (!user) {
                console.log('user:' + user)
                console.log('1')
                  res.redirect('/sessions/new');
              } else if (!user.validPassword(password)) {
                console.log('2')
                  res.redirect('/sessions/new');
              } else {
                console.log('3')
                  req.session.user = user.dataValues;
                  res.redirect('/');
              }
          });
      })

  .delete((req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      console.log(req.session.user)
      console.log("I got here")
      res.clearCookie('user_sid');
    }
    res.redirect('/')
  });

router.get('/new', function(req, res, next) {
  res.render('sessions-new', { title: "Hello" });
});

// router.get('/logout', function(req, res) {
//   req.session.reset;
//   console.log(req.session.user)
//   res.redirect('/');
// });


module.exports = router;

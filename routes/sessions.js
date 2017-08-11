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
    res.redirect('/sessions/new');
  })

  .post((req, res) => {
          var email = req.body.email,
              password = req.body.password;

         models.User.findOne({ where: { email: email } }).then(function (user) {
              if (!user) {
                  res.redirect('/sessions/new');
              } else if (!user.validPassword(password)) {
                  res.redirect('/sessions/new');
              } else {
                  req.session.user = user.dataValues;
                  res.redirect('/');
              }
          });
      })

    .delete((req, res) => {
      if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
      }
      res.redirect('/')
    });

  router.get('/new', function(req, res, next) {
    res.render('sessions-new', { title: "Hello" });
  });



module.exports = router;

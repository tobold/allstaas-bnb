var express = require('express');
var router = express.Router();
var models = require('../server/models');

/* GET users listing. */
router.post('/', function(req, res, next) {
  models.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then(function(user) {
      req.session.user = user.dataValues;
      res.redirect('/listings');
    })
    .catch(function(error) {
      res.redirect('/users/new');
    });

});

router.get('/new', function(req, res, next) {
  res.render('users-new');
});

module.exports = router;

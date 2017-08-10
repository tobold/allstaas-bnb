var express = require('express');
var router = express.Router();
var models = require('../server/models');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  models.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  }).then(function() {
        res.redirect('/listings');
      });

});

router.get('/new', function(req, res, next) {
  res.render('users-new', { title: "Hello" });
});

module.exports = router;

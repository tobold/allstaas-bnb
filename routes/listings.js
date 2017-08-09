var express = require('express');
var router = express.Router();
var models = require('../server/models');

/* GET users listing. */
router.get('/', function(req, res) {
  models.Listing.findAll().then(function(listings) {
    res.render('showListings', {
      title: "Allstaas Bnb",
      listings: listings
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('listings-new', { title: "New Listing"});
});

router.post('/', function(req, res) {
  models.Listing.create({ name: req.body.name, description: req.body.description }).then(function() {
    res.redirect('/listings');
  });
});

module.exports = router;

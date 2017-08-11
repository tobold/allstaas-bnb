var express = require('express');
var router = express.Router();
var models = require('../server/models');

var sessionChecker = (req, res, next) => {
    if (!req.session.user || !req.cookies.user_sid ) {
        res.redirect('/sessions/new');
    } else {
        next();
    }
};

router.get('/', function(req, res) {
  models.Listing.findAll().then(function(listings) {
    res.render('showListings', {
      title: "Allstaas Bnb",
      listings: listings

    });
  });
});

router.route('/new')
  .get(sessionChecker, (req, res) => {
    res.render('listings-new');
});

router.get('/:id', function(req, res) {
  models.Listing.findById(req.params.id).then(function(listing) {
    res.render('showListing', {
      title: ("Listing number: " + req.params.id),
      listing: listing
    });
  });
});

router.route('/:id/booking')
  .get(sessionChecker, (req, res) => {
    models.Listing.findById(req.params.id).then(function(listing) {
      res.render('bookings-new', {
        title: "New Booking",
        listing: listing
      });
    });
  });

router.post('/', function(req, res) {
  var listing = models.Listing.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    listFrom: req.body.listFrom,
    listTill: req.body.listTill,
    UserId: req.session.user.id
  }).then(function() {
    res.redirect('/listings');
  });
});

module.exports = router;

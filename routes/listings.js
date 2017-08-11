var express = require('express');
var router = express.Router();
var models = require('../server/models');

var sessionChecker = (req, res, next) => {
  console.log(req.session )
    if (!req.session.user || !req.cookies.user_sid ) {
        res.redirect('/sessions/new');
    } else {
        next();
    }
};

/* GET users listing. */
router.get('/', function(req, res) {
  models.Listing.findAll().then(function(listings) {
    res.render('showListings', {
      title: "Allstaas Bnb",
      listings: listings
    });
  });
});

// router.route('/new')
//   .get(sessionChecker, (req, res) => {
//     res.render('listings-new');
// });

router.get('/new', function(req, res) {
  res.render('listings-new');
})

router.get('/:id', function(req, res) {
  models.Listing.findById(req.params.id).then(function(listing) {
    res.render('showListing', {
      title: ("Listing number: " + req.params.id),
      listing: listing
    });
  });
});

// router.route('/:id/booking')
//   .get(sessionChecker, (req, res) => {
//     models.Listing.findById(req.params.id).then(function(listing) {
//       res.render('bookings-new', {
//         title: "New Booking",
//         listing: listing
//       });
//     });
//   });

router.get('/:id/booking', function(req, res) {
    models.Listing.findById(req.params.id).then(function(listing) {
      res.render('bookings-new', {
        title: "New Booking",
        listing: listing
      });
    });
  });

router.post('/', function(req, res) {
  models.Listing.create({ name: req.body.name, description: req.body.description, price: req.body.price, listFrom: req.body.listFrom, listTill: req.body.listTill }).then(function() {
    res.redirect('/listings');
  });
});

module.exports = router;

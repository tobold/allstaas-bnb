var express = require('express');
var router = express.Router();
var models = require('../server/models');

router.get('/new', function(req, res) {
  res.render('bookings-new', { title: "New Booking"});
});

router.post('/', function(req,res) {
  models.Booking.create({bookFrom: req.body.bookFrom, bookTill: req.body.bookTill, status: "pending", ListingId: req.body.listingId}).then(function() {
    res.redirect('/bookings')
  });
});

router.get('/', function(req, res) {
  models.Booking.findAll().then(function(bookings) {
    res.render('bookings', {
      title: "Bookings",
      bookings: bookings
      });
    });
});

module.exports = router;

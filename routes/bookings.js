var express = require('express');
var router = express.Router();
var models = require('../server/models');

var sessionChecker = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/sessions/new');
    } else {
        next();
    }
};

router.post('/', function(req,res) {
  models.Booking.create({bookFrom: req.body.bookFrom, bookTill: req.body.bookTill, status: "pending", listingId: req.body.listingId}).then(function() {
    res.redirect('/bookings')
  });
});

router.get('/', function(req, res) {
  models.Booking.findAll().then(function(bookings) {
    res.render('bookings', { bookings: bookings });
    });
});

module.exports = router;

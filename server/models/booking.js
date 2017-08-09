'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define('Booking', {
    bookFrom: DataTypes.STRING,
    bookTill: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Booking;
};
var models = require('../../server/models')

'use strict';

module.exports = function(sequelize, DataTypes) {
  const Booking = sequelize.define('Booking', {
    bookFrom: DataTypes.STRING,
    bookTill: DataTypes.STRING,
    status: DataTypes.STRING
  });
  Booking.associate = function (models) {
    Booking.belongsTo(models.Listing);
    Booking.belongsTo(models.User);
  };
    return Booking;
};

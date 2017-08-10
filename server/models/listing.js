var models = require('../../server/models')

'use strict';

module.exports = function(sequelize, DataTypes) {
  const Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  Listing.associate = function (models) {
  Listing.hasMany(models.Booking)
  };
    return Listing;
};

var models = require('../../server/models')

'use strict';

module.exports = function(sequelize, DataTypes) {
  const Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    listFrom: DataTypes.DATEONLY,
    listTill: DataTypes.DATEONLY
  });
  Listing.associate = function (models) {
  Listing.hasMany(models.Booking)
  };
    return Listing;
};

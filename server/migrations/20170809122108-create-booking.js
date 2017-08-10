'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookFrom: {
        type: Sequelize.DATEONLY
      },
      bookTill: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ListingId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    console.log('FAILED');
    return queryInterface.dropTable('Bookings');
  }
};

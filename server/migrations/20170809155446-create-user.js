'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      last_name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};

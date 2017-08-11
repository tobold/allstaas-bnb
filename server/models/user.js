'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
   const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Listing);
    User.hasMany(models.Booking);
  };

  User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
  }

  return User;
};

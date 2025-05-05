const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  email: {
    type : DataTypes.STRING,
    allowNull : false
  },
  password: {
    type : DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps:true,
});



module.exports = User;
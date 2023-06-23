// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {}

// User fields and rules
User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
},
{
    sequelize,
    modelName: 'user'
});

module.exports = User;
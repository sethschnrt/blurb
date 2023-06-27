// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Tag fields and rules
Tag.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
},
{
    sequelize,
    modelName: 'tag'
});

module.exports = Tag;
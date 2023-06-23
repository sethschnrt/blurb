// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Post model (table) by extending off Sequelize's Model class
class Post extends Model {}

// Post fields and rules
Post.init({
    content: DataTypes.STRING,
    timestamp: DataTypes.DATE,
},
{
    sequelize,
    modelName: 'post'
});

module.exports = Post;
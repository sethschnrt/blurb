const User = require('./User');
const Post = require('./post');


User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: "CASCADE"
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
module.exports = { User };
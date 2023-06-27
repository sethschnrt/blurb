const User = require('user');
const Tag = require('tag');
const Post = require('post');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.belongsToMany(Tag, {
    through: 'post_tags',
    foreignKey: 'post_id'
});

Tag.belongsToMany(Post, {
    through: 'post_tags',
    foreignKey: 'tag_id'
});

module.exports = { User, Tag, Post };

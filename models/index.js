// import all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Pet = require('./Pet');

// User associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
User.hasMany(Pet, {
  foreignKey: 'user_id'
});

// Post associations
Post.belongsTo(User, {
  foreignKey: 'user_id',
});
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
Post.belongsTo(Pet, {
  foreignKey: 'pet_id'
});

// Comment associations
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// Pet associations
Pet.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Post, Comment, Pet };

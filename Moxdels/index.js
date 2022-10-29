// Import all Models
const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// Establish relationships between all Models
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE"
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = {
  Comment,
  Post,
  User,
};

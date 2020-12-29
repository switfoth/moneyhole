'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comments', {
    projectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Project, {foreignKey:"projectId"})
    Comment.belongsTo(models.User, {foreignKey:"userId"})
  };
  return Comment;
};

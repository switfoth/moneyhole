'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    fundingGoal: DataTypes.INTEGER,
    twitter: DataTypes.STRING,
    facebook: DataTypes.STRING,
    email: DataTypes.STRING,
    endDate: DataTypes.DATE
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User, {foreignKey:"userId"})
  };
  return Project;
};

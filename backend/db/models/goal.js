'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    name: DataTypes.STRING,
    fundingAmount: DataTypes.INTEGER,
    goalDesc: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  Goal.associate = function(models) {
    Goal.belongsTo(models.Project, {foreignKey:"projectId"})
  };
  return Goal;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reward = sequelize.define('Rewards', {
    projectId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
    remainingNumber: DataTypes.INTEGER
  }, {});
  Reward.associate = function(models) {
    Reward.belongsTo(models.Project, {foreignKey:"projectId"})
  };
  return Reward;
};

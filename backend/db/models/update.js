'use strict';
module.exports = (sequelize, DataTypes) => {
  const Update = sequelize.define('Update', {
    projectId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  Update.associate = function(models) {
    Update.belongsTo(models.Project, {foreignKey:"projectId"})
  };
  return Update;
};

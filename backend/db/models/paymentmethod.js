'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    methodName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  PaymentMethod.associate = function(models) {
    PaymentMethod.belongsTo(models.User, {foreignKey:"userId"})
  };
  return PaymentMethod;
};

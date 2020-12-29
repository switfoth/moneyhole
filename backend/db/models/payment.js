'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    methodId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  Payment.associate = function(models) {
    Payment.belongsTo(models.Project, {foreignKey:"projectId"}),
    Payment.belongsTo(models.User, {foreignKey:"userId"}),
    Payment.belongsTo(models.PaymentMethod, {foreignKey:"methodId"})
  };
  return Payment;
};

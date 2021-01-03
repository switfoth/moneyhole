'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users", key: "id" }
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Projects", key: "id" }
      },
      methodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "PaymentMethods", key: "id" }
      },
      amount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payments');
  }
};

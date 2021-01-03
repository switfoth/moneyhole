'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Projects", key: "id" }
      },
      name: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      remainingNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    return queryInterface.dropTable('Rewards');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Payments', [
        {
        userId: 0,
        projectId: 0,
        methodId: 0,
        amount: 100,
      },
        {
        userId: 0,
        projectId: 1,
        methodId: 1,
        amount: 100,
      },
        {
        userId: 0,
        projectId: 2,
        methodId: 2,
        amount: 100,
      },
        {
        userId: 0,
        projectId: 3,
        methodId: 3,
        amount: 100,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Payments', null, {});
  }
};

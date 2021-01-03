'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Payments', [
        {
        userId: 1,
        projectId: 1,
        methodId: 1,
        amount: 100,
      },
        {
        userId: 1,
        projectId: 1,
        methodId: 2,
        amount: 100,
      },
        {
        userId: 1,
        projectId: 2,
        methodId: 3,
        amount: 100,
      },
        {
        userId: 1,
        projectId: 3,
        methodId: 4,
        amount: 100,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Payments', null, {});
  }
};

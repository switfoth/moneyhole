'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Rewards', [
        {
        projectId: 0,
        name: 'Our thanks!',
        value: 1,
        remainingNumber: null,
      },
      {
        projectId: 1,
        name: 'Our thanks!',
        value: 1,
        remainingNumber: null,
      },
      {
        projectId: 2,
        name: 'Our thanks!',
        value: 1,
        remainingNumber: null,
      },
      {
        projectId: 3,
        name: 'Our thanks!',
        value: 1,
        remainingNumber: null,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Rewards', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [
        {
        projectId: 0,
        userId: 0,
        comment: "I can't wait for this to be completed!"
      },
        {
        projectId: 1,
        userId: 0,
        comment: "I can't wait for this to be completed!"
      },
        {
        projectId: 2,
        userId: 0,
        comment: "I can't wait for this to be completed!"
      },
        {
        projectId: 3,
        userId: 0,
        comment: "I can't wait for this to be completed!"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};

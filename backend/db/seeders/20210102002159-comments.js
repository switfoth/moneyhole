'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [
        {
        projectId: 1,
        userId: 1,
        comment: "I can't wait for this to be completed!"
      },
        {
        projectId: 1,
        userId: 1,
        comment: "I can't wait for this to be completed!"
      },
        {
        projectId: 2,
        userId: 1,
        comment: "I can't wait for this to be completed!"
      },
        {
        projectId: 3,
        userId: 1,
        comment: "I can't wait for this to be completed!"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};

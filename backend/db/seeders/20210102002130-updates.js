'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Updates', [
        {
        projectId: 1,
        title: "Sorry",
        body: "It's gonna take longer than we thought...",
      },
        {
        projectId: 1,
        title: "Sorry",
        body: "It's gonna take longer than we thought...",
      },
        {
        projectId: 2,
        title: "Sorry",
        body: "It's gonna take longer than we thought...",
      },
        {
        projectId: 3,
        title: "Sorry",
        body: "It's gonna take longer than we thought...",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Updates', null, {});
  }
};

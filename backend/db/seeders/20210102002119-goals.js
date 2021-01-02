'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Goals', [
        {
        name: "Demo",
        fundingAmount: 100000,
        goalDesc: "We can make a demo with this amount!",
        projectId: 0,
      },
      {
        name: "Full Voice Acting",
        fundingAmount: 101000,
        goalDesc: "With this goal we can hire full voice talent!",
        projectId: 0,
      },
      {
        name: "Map",
        fundingAmount: 500000,
        goalDesc: "We will include a map with physical copies of the game if we hit this goal!",
        projectId: 0,
      },
      {
        name: "Full Color Comic",
        fundingAmount: 25000,
        goalDesc: "At this level we can afford full color.",
        projectId: 1,
      },
      {
        name: "Add Tomato",
        fundingAmount: 6,
        goalDesc: "If I get an extra buck I can add a tomato.",
        projectId: 2,
      },
      {
        name: "Please",
        fundingAmount: 3000,
        goalDesc: "With this much I can at least get the printed version done - please help I hate my job.",
        projectId: 3,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Goals', null, {});
  }
};

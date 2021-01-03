'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [{
        name: 'Ambitious RPG',
        userId: 1,
        fundingGoal: 100000,
        twitter: "@BigRpg",
        facebook: "FreeRoamRPG",
        email: "bigrpggame@gmail.com",
        endDate: new Date(),
      },
      {
        name: 'Old Pro making a solo project',
        userId: 1,
        fundingGoal: 5000,
        twitter: "@OldPro",
        facebook: "OldPro",
        email: "OldPro@gmail.com",
        endDate: new Date(),
      },
      {
        name: 'Making a Sandwich',
        userId: 1,
        fundingGoal: 5,
        twitter: "@hungryperson",
        facebook: "steve",
        email: "hungrysteve@gmail.com",
        endDate: new Date(),
      },
      {
        name: 'Super Original Webcomic!',
        userId: 1,
        fundingGoal: 5000,
        twitter: "@thoseunknowable",
        facebook: "thoseunknowable",
        email: "thoseunknowable@gmail.com",
        endDate: new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
  }
};

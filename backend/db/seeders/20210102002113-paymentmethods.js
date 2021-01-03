'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PaymentMethods', [{
        methodName: 'Crapital One',
        userId: 1,
      },
      {
        methodName: 'Swells Farblows',
        userId: 1,
      },
      {
        methodName: 'Bank of the Worst',
        userId: 1,
      },
      {
        methodName: 'Paypal',
        userId: 1,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PaymentMethods', null, {});
  }
};

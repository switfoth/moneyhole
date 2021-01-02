'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PaymentMethods', [{
        methodName: 'Crapital One',
        userId: 0,
      },
      {
        methodName: 'Swells Farblows',
        userId: 0,
      },
      {
        methodName: 'Bank of the Worst',
        userId: 0,
      },
      {
        methodName: 'Paypal',
        userId: 0,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PaymentMethods', null, {});
  }
};

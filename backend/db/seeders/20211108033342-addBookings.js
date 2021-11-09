'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bookings', [
        {
          listingId:1,
          userId: 2,
          rentDate:'2021-12-12'
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Bookings', null, {});

  }
};

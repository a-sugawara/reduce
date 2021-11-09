'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          listingId: 1,
          userId:2,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 5,
        },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};

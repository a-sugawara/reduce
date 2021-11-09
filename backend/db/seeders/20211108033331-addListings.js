'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Listings', [
        {
          userId:1,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Listings', null, {});

  }
};

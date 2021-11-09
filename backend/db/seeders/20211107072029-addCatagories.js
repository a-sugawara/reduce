'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Catagories', [
        {catagory: "Music"},
        {catagory: "Photography"},
        {catagory: "Art"},
        {catagory: "Film"},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Catagories', null, {});
  }
};

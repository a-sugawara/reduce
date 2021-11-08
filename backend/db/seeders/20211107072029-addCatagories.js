'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Catagories', [
        {catagory: "Music", createdAt: '2019-04-12', updatedAt: '2019-04-12'},
        {catagory: "Photography", createdAt: '2019-04-12', updatedAt: '2019-04-12'},
        {catagory: "Art", createdAt: '2019-04-12', updatedAt: '2019-04-12'},
        {catagory: "Film", createdAt: '2019-04-12', updatedAt: '2019-04-12'},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Catagories', null, {});
  }
};

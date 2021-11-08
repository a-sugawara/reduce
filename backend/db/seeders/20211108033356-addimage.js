'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Images', [
        {
          listingId: 1,
          url:"https://sharetribe.imgix.net/5a9e7045-72ca-4e03-9731-4e78dad28dd9%2F5ffca3ad-ec3a-4948-8b20-6b19fd65e8b7?auto=format&fit=clip&h=2400&ixlib=java-1.1.1&w=2400&s=b76d9a9e3bbf69a9d07d2d1843f0f3d0"
        },
        {
          listingId: 1,
          url:"https://sharetribe.imgix.net/5a9e7045-72ca-4e03-9731-4e78dad28dd9%2F5ffca3bc-9a40-4ea0-9cf3-df5afc13fca3?auto=format&fit=clip&h=2400&ixlib=java-1.1.1&w=2400&s=843782dfbb44b4f08e1fcdf2c787751e"
        },
        {
          listingId: 1,
          url:"https://sharetribe.imgix.net/5a9e7045-72ca-4e03-9731-4e78dad28dd9%2F5ffca3c4-1e21-4f63-87c5-f0ddb7b024e2?auto=format&fit=clip&h=2400&ixlib=java-1.1.1&w=2400&s=a1ece971a472b65a6fe49b59c25aed3f"
        },
        {
          listingId: 1,
          url:"https://sharetribe.imgix.net/5a9e7045-72ca-4e03-9731-4e78dad28dd9%2F5ffca3cb-e5fc-4aa6-b572-ddf8d6da9828?auto=format&fit=clip&h=2400&ixlib=java-1.1.1&w=2400&s=70fcb9e160b5b1965618f838e35ac10b"
        },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});

  }
};

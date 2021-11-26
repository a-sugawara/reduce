'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          listingId: 1,
          userId:2,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 3,
        },
        {
          listingId: 2,
          userId:3,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 4,
        },
        {
          listingId: 3,
          userId:4,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 5,
        },
        {
          listingId: 4,
          userId:5,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 1,
        },
        {
          listingId: 5,
          userId:5,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 2,
        },
        {
          listingId: 6,
          userId:6,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 1,
        },
        {
          listingId: 7,
          userId:7,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 5,
        },
        {
          listingId: 8,
          userId:8,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 2,
        },
        {
          listingId: 9,
          userId:9,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 3,
        },
        {
          listingId: 10,
          userId:10,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 4,
        },
        {
          listingId: 11,
          userId:1,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 3,
        },
        {
          listingId: 12,
          userId:2,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 4,
        },
        {
          listingId: 13,
          userId:2,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 5,
        },
        {
          listingId: 14,
          userId:3,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 1,
        },
        {
          listingId: 15,
          userId:4,
          review: "Pat was very professional and genuine to work with. Showed me everything I needed in the studio and the experience was nothing but flawless. Definitely will be coming back when I come back to east coast. 5 stars!",
          rating: 2,
        },
        

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};

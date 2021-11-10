'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Listings', [
        {
          userId:1,
          city:"New York",
          address:"80 Downer St",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:80,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:2,
          city:"New York",
          address:"1000 Video St",
          state:"New York",
          country:"USA",
          catagoryId:4,
          name:"GamerFilmz",
          price:60,
          description:"Our Filming Studio is made for streaming and gaming, with our highest rated internet connection to air conditioned rooms, we are the premiere place to be if you wanna film high quality streams"
        },
        {
          userId:3,
          city:"New York",
          address:"436 struvstat ave",
          state:"New York",
          country:"USA",
          catagoryId:2,
          name:"Photobooth",
          price:60,
          description:"Amazing Fully Lit Film & Photo Studio with White Cyclorama Wall - Lights Included!"
        },
        {
          userId:4,
          city:"Kansas City",
          address:"15 RoadHome drive",
          state:"Kansas",
          country:"USA",
          catagoryId:1,
          name:"The Old RoadHome",
          price:40,
          description:"Built in early 1900, our home offers a genuine antique feel. We have art supplies in the back"
        },
        {
          userId:5,
          city:"Las Vegas",
          address:"15 Walter Ave",
          state:"Nevada",
          country:"USA",
          catagoryId:1,
          name:"BackYard Studios",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:1,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Harlem)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Harlem, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:6,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:7,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:8,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:9,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:10,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
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
        {
          userId:2,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:3,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:4,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:5,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
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
        {
          userId:6,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:7,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:8,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:9,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"TKStudioz(Brooklyn)",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:10,
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

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
          address:"32 Grand place",
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
          name:"The Nest Studio",
          price:60,
          description:"Inspiring studio with lots of vintage synth and drum machine and wide variety of gear. The studio is on the second floor of a duplex studio, has a window, sofa, acoustic treatment, etc. The studio has been used by some of the top artists in the electronic music industry and it's perfect for mix down sessions, recording, jamming, etc. It's super comfortable and has the magic creative environment. We use the PMC result 6 monitors for the perfect result of mix down along with the Midas Venice F24 mixer."
        },
        {
          userId:7,
          city:"Los Santos",
          address:"88 Haven Rd",
          state:"California",
          country:"USA",
          catagoryId:4,
          name:"Desert Land Space",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:8,
          city:"Hollywood",
          address:"1000 Villa Road",
          state:"California",
          country:"USA",
          catagoryId:3,
          name:"Sunset Hollywood Villa",
          price:500,
          description:"Mid-Century Modernism 60’s Villa, is a true original vintage architectural beauty and captures the 60’s Movies era accurate. The SunsetHollywoodVilla served as a backdrop set for several action & drama 60's movies such as Ocean's 11 w. Frank Sinatra and Bond movies w. Sean Connery."
        },
        {
          userId:9,
          city:"Greenvile",
          address:"32 Ralph place",
          state:"Arizona",
          country:"USA",
          catagoryId:2,
          name:"Just Deserts",
          price:80,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:10,
          city:"Dayton",
          address:"98 Whitesmith pl",
          state:"Ohio",
          country:"USA",
          catagoryId:3,
          name:"The Base",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:1,
          city:"New York",
          address:"27 New Edge rd",
          state:"New York",
          country:"USA",
          catagoryId:1,
          name:"School of Rock",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:2,
          city:"New York",
          address:"65 Dugong Cr",
          state:"New York",
          country:"USA",
          catagoryId:3,
          name:"The Road",
          price:40,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:3,
          city:"New York",
          address:"32 Ralph place",
          state:"New York",
          country:"USA",
          catagoryId:4,
          name:"HouseFilms",
          price:30,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },
        {
          userId:4,
          city:"New York",
          address:"345 Palace dr",
          state:"New York",
          country:"USA",
          catagoryId:3,
          name:"Zen Arts",
          price:70,
          description:"Welcome to our one of a kind luxury music studio in the heart of Brooklyn, NY. Step into this state of the art space and fulfill all of your music oriented dreams. Our elegant space comes equipped with the greatest top notch amenities available."
        },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Listings', null, {});

  }
};

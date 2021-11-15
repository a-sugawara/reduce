# Air-Time #

Snack Overflow, a Stack Overflow clone, is an application that allows users to publicly ask questions and answers that can be viewed and liked by other users.

<h4> Link to Live Application: <a href="https://air-time.herokuapp.com/">AirTime</a></h4>
<h4> Documentation: <a href="https://github.com/a-sugawara/reduce/wiki">AirTime Wiki</a></h4>

Splash Page
![image_2021-10-23_104417](https://cdn.discordapp.com/attachments/906471684683493386/909738725179797514/unknown.png)

* Sign-up and login with credentials
* Dynamic features(listings, bookings, reviews)
* Easy to use interface
* Logged in user post/edit/delete their listings
* Logged in user add/edit/delete their reviews
* Logged in user add/delete their bookings




### Technical Details ###
* One challenge I faced was trying to manipulate multiple reducers at once from various "slices of state" reducers

```
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case POST_LIST:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      newState.user.Listings = newState.user.Listings.concat(action.listing)
      return newState;
    case UPDATE_LIST:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      const listingidx = newState.user.Listings.findIndex(listin => listin.id ===action.data.id)
      newState.user.Listings[listingidx] = action.data
      return newState
    case POST_REVIEW:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      newState.user.Reviews = newState.user.Reviews.concat(action.review)
      return newState;
    case UPDATE_REVIEW:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      const reviewidx = newState.user.Reviews.findIndex(review => review.id === action.data.updated.id)
      newState.user.Reviews[reviewidx] = action.data.updated
      return newState
    case ADD_BOOKING:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      newState.user.Bookings.push(action.booking)
      newState.user.Bookings = newState.user.Bookings.slice()
      return newState;
    case UNBOOK:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      const idx = newState.user.Bookings.findIndex(Booking => Booking.id ===action.booking.id)
      newState.user.Bookings.splice(idx, 1);
      newState.user.Bookings = newState.user.Bookings.slice()
      return newState
    case DELETE_LIST:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      const listingIdx = newState.user.Listings.findIndex(listing => listing.id ===action.id)
      newState.user.Listings.splice(listingIdx, 1);
      newState.user.Listings = newState.user.Listings.slice()
      return newState
    case DELETE_REVIEW:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      const reviewIdx = newState.user.Reviews.findIndex(listing => listing.id ===action.id)
      newState.user.Reviews.splice(reviewIdx, 1);
      newState.user.Reviews = newState.user.Reviews.slice()
      return newState
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};
```

import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const UNBOOK = "/booking/delete"
const ADD_BOOKING = "/booking/post"
const UPDATE_LIST = 'listing/update'
const POST_LIST = 'listing/postListing'
const DELETE_LIST = 'listing/delete'
const POST_REVIEW = 'review/postListing'
const DELETE_REVIEW = 'review/delete'

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password
    }),
  });
  const data = await response.json();

  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};
//state.session= {user:null}
//state = {session: {user:null}}
//newState= {user:null}
const initialState = { user: null };

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
    case POST_REVIEW:
      newState = Object.assign({}, state);
      newState.user = Object.assign({},state.user)
      newState.user.Reviews = newState.user.Reviews.concat(action.review)
      return newState;
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

export default sessionReducer;

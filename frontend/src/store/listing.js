import { csrfFetch } from './csrf';

const POST_LIST = 'listing/postListing'
const LOAD_LIST = 'listing/load'



const postListing = (listing) => {
    return {
      type: POST_LIST,
      payload: listing,
    };
};

const loadListings = (payload)=>{
  return{
    type:LOAD_LIST,
    payload
  }
}



export const lister = listing => async (dispatch) => {
    const {
        userId,
        address,
        city,
        state,
        country,
        catagoryId,
        name,
        price
    } = listing;
    console.log(catagoryId)
    const response = await csrfFetch("/api/listings", {
      method: "POST",
      body: JSON.stringify({
        userId,
        address,
        city,
        state,
        country,
        catagoryId,
        name,
        price
      }),
    });
    const data = await response.json();
    dispatch(postListing(data.listing));
    return response;
};

export const listed = () => async (dispatch) => {
  const response = await csrfFetch('/api/listings')
  const data = await response.json()
  dispatch(loadListings(data.listings))
  return response
}

const initialState = { isLoaded:false };

const listingReducer = (state = initialState, action) => {
let newState;
switch (action.type) {
  case LOAD_LIST:
    newState = Object.assign({}, state);
    action.payload.forEach(listing=> {
      newState[listing.id] = listing
    })
    newState.isLoaded=true
    return newState;
    case POST_LIST:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
}
};

  export default listingReducer;

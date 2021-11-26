import { csrfFetch } from './csrf';

const POST_LIST = 'listing/postListing'
const LOAD_LIST = 'listing/load'
const DELETE_LIST = 'listing/delete'
const UPDATE_LIST = 'listing/update'
const UPDATE_REVIEW = 'review/update'
const POST_REVIEW = 'review/postListing'
const POST_IMAGE  = 'image/postImage'

const postImage = (image) => {
    return {
      type: POST_IMAGE,
      image,
    };
};
const postListing = (listing) => {
    return {
      type: POST_LIST,
      listing,
    };
};

const loadListings = (payload)=>{
  return{
    type:LOAD_LIST,
    payload
  }
}
const removeListing=(id)=>{
  return{
    type:DELETE_LIST,
    id
  }
}
const updateList = (data)=>{
  return{
    type:UPDATE_LIST,
    data
  }
}


export const imager = img => async (dispatch) => {
    const {
      listingId,
      url
    } = img;

    const response = await csrfFetch("/api/image", {
      method: "POST",
      body: JSON.stringify({
        listingId,
        url
      }),
    });
    const data = await response.json();
    // console.log(data,"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    dispatch(postImage(data.image));
    return data;
};
export const lister = listing => async (dispatch) => {
    const {
        userId,
        address,
        city,
        state,
        country,
        catagoryId,
        name,
        price,
        description
    } = listing;

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
        price,
        description
      }),
    });
    const data = await response.json();
    // console.log(data,"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    dispatch(postListing(data.listing));
    return data;
};

export const listed = () => async (dispatch) => {
  const response = await csrfFetch('/api/listings')
  const data = await response.json()
  dispatch(loadListings(data.listing))
  return response
}

export const unlisted = (id) => async (dispatch)=>{
  await csrfFetch(`/api/listings/${id}`,{
    method: 'DELETE',
  })
  dispatch(removeListing(id))
}

export const updateListing = (listing) => async dispatch =>{
  const {
    id,
    userId,
    address,
    city,
    state,
    country,
    catagoryId,
    name,
    price,
    description
  } = listing;
  const res = await csrfFetch(`/api/listings/${id}`,{
    method: 'PUT',
    body: JSON.stringify({
      userId,
      address,
      city,
      state,
      country,
      catagoryId,
      name,
      price,
      description
    }),
  })
  const data = await res.json()
  // console.log(data.updated,"XXXXXXXXX")
  dispatch(updateList(data.updated))
  return data
}

const initialState = {};

const listingReducer = (state = initialState, action) => {
let newState;
switch (action.type) {
    case LOAD_LIST:
      newState = Object.assign({}, state);
      action.payload.forEach(listing=> {
        newState[listing.id] = listing
      })
    return newState;
    case POST_LIST:
      newState = Object.assign({}, state); //newstate= {..state}
      newState[action.listing.id] = action.listing;
      return newState;
    case POST_REVIEW:
      const {review} = action
      newState = Object.assign({}, state)
      newState[review.listingId] = Object.assign({}, newState[review.listingId]); //newstate= {..state}
      newState[review.listingId].Reviews = newState[review.listingId].Reviews.concat(review)
      return newState;
    case POST_IMAGE:
      const {image} = action
      newState = Object.assign({}, state)
      newState[image.listingId] = Object.assign({}, newState[image.listingId]); //newstate= {..state}
      newState[image.listingId].Images = newState[image.listingId].Images.concat(image)
      return newState;
    case DELETE_LIST:
      newState = Object.assign({}, state);
      delete newState[action.id]
      return newState;
    case UPDATE_LIST:
      newState = Object.assign({}, state); //newstate= {..state}
      newState.listing = Object.assign({}, newState.listing)
      newState[action.data.id]= {...newState[action.data.id],...action.data}
      return newState;
    case UPDATE_REVIEW:
      newState = Object.assign({}, state); //newstate= {..state}
      newState.listing = Object.assign({}, newState.listing)
      console.log("action.dataXXXXXXXXXXXXXXXXX",action.data)
      const reviewidx = newState[action.data.updated.listingId].Reviews.findIndex(review => review.id === action.data.updated.id)
      newState[action.data.updated.listingId].Reviews[reviewidx]= action.data.updated
      return newState;
      // newState[action.data.id].address = action.data.address;
      // newState[action.data.id].city = action.data.city;
      // newState[action.data.id].state = action.data.state;
      // newState[action.data.id].country = action.data.country;
      // newState[action.data.id].name = action.data.name;
      // newState[action.data.id].price = action.data.price;
      // newState[action.data.id].description = action.data.description;
      // newState[action.data.id].catagory = action.data.catagory;
    default:
      return state;
}
};

  export default listingReducer;

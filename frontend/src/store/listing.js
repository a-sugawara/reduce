import { csrfFetch } from './csrf';

const POST_LIST = 'listing/postListing'
const LOAD_LIST = 'listing/load'
const DELETE_LIST = 'listing/delete'
const UPDATE_LIST = 'listing/update'



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
        price,
        description
      }),
    });
    const data = await response.json();
    dispatch(postListing(data.listing));
    return response;
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
  const data = res.json()
  dispatch(updateList(data))
  return res
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
      //newstate = {1:{id:1,userId:1,title:'how do i center a div?'}}
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_LIST:
      newState = Object.assign({}, state); //newstate= {..state}
      //newstate = {1:{id:1,userId:1,title:'how do i center a div?'}}
      newState[action.id] = null
      return newState;
    case UPDATE_LIST:
      newState = Object.assign({}, state); //newstate= {..state}
      //newstate = {1:{id:1,userId:1,title:'how do i center a div?'}}
      newState[action.data.id] = action.payload;
      return newState;
    default:
      return state;
}
};

  export default listingReducer;

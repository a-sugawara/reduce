import { csrfFetch } from './csrf';

const POST_REVIEW = 'review/postListing'
const LOAD_REVIEW = 'review/load'
const DELETE_REVIEW = 'review/delete'
const UPDATE_REVIEW = 'review/update'



const postReview = (review) => {
    return {
      type: POST_REVIEW,
      review
    };
};

const loadReview = (payload)=>{
  return{
    type:LOAD_REVIEW,
    payload
  }
}
const removeReview=(id)=>{
  return{
    type:DELETE_REVIEW,
    id
  }
}
const updateReview = (data)=>{
  return{
    type:UPDATE_REVIEW,
    data
  }
}


export const reviewer = listing => async (dispatch) => {
    const {
        listingId,
        userId,
        review,
        rating
    } = listing;
    const response = await csrfFetch("/api/review", {
      method: "POST",
      body: JSON.stringify({
        listingId,
        userId,
        review,
        rating
      }),
    });
    const data = await response.json();
    dispatch(postReview(data.newReview));
    return response;
};

export const listed = () => async (dispatch) => {
  const response = await csrfFetch('/api/listings')
  const data = await response.json()
  dispatch(loadReview(data.listing))
  return response
}

export const unlisted = (id) => async (dispatch)=>{
  await csrfFetch(`/api/review/${id}`,{
    method: 'DELETE',
  })
  dispatch(removeReview(id))
}

export const updateRev = (listing) => async dispatch =>{
  const {
    id,
    userId,
    listingId,
    review,
    rating
  } = listing;
  const res = await csrfFetch(`/api/review/${id}`,{
    method: 'PUT',
    body: JSON.stringify({
      userId,
      listingId,
      review,
      rating
    }),
  })
  const data = await res.json()
  dispatch(updateReview(data))
  return res
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
let newState;
switch (action.type) {
    case LOAD_REVIEW:
      newState = Object.assign({}, state);
      action.payload.forEach(listing=> {
        newState[listing.id] = listing
      })
    return newState;
    case POST_REVIEW:
      newState = Object.assign({}, state);
      newState[action.review.id] = action.review;
      return newState;
    case DELETE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.id]
      return newState;
    case UPDATE_REVIEW:
      newState = Object.assign({}, state);
      
      newState[action.data.updated.id] = action.data.updated;
      return newState;
    default:
      return state;
}
};

  export default reviewReducer;

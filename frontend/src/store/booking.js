import { csrfFetch } from './csrf';

const BOOK = "/booking/post"

const postBooking = (booking) =>{
    return{
        type:BOOK,
        booking
    }
}


export const book = listing => async (dispatch) => {
    const {
        userId,
        listingId,
        startTime,
        endTime
    } = listing;
    
    const response = await csrfFetch("/api/booking", {
      method: "POST",
      body: JSON.stringify({
        userId,
        listingId,
        startTime,
        endTime
      }),
    });
    const data = await response.json();
    dispatch(postBooking(data.booking));
    return response;
};

const bookingReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case BOOK:
        newState = Object.assign({}, state);
        newState[action.booking.id]=action.booking
        return newState;
        default:
        return state;
    }
    };

      export default bookingReducer;

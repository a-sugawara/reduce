import { csrfFetch } from './csrf';

const BOOK = "/booking/post"
const UNBOOK = "/booking/delete"

const postBooking = (booking) =>{
    return{
        type:BOOK,
        booking
    }
}
const deleteBooking = (booking) =>{
    return{
        type:UNBOOK,
        booking
    }
}


export const unbook = id => async (dispatch) => {


    const response = await csrfFetch(`/api/booking/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    dispatch(deleteBooking(data));
    return response;
};
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

const bookingReducer = (state = { switch:false }, action, ) => {
    let newState;
    switch (action.type) {
        case BOOK:
        newState = Object.assign({}, state);
        newState[action.booking.id]=action.booking
        return newState;
        case UNBOOK:
        newState = Object.assign({}, state);
        newState.switch = !newState.switch
        return newState
        default:
        return state;
    }
    };

      export default bookingReducer;

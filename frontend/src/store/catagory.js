
import { csrfFetch } from './csrf';

const LOAD_CATEGORY = 'listing/loadCategory'

const loadCategory = (catagories) =>{
    return{
        type:LOAD_CATEGORY,
        payload:catagories
    }
}

export const getCatagories = listing => async (dispatch) => {

    const response = await csrfFetch("/api/listings/catagories");
    const data = await response.json();
    console.log("data",data)
    dispatch(loadCategory(data));

    return response;
};

const initialState = {catagories:null};

const catagoryReducer = (state = initialState, action) => {
let newState;
switch (action.type) {
    case LOAD_CATEGORY:
    newState = Object.assign({}, state);
    const list = [];
    action.payload.forEach(catagory => list.push([catagory.id,catagory.catagory]));
    newState.catagories = list;
    // action.payload.forEach(catagory => {
    //     newState[catagory.id] = catagory;

    //   });
    return newState;
    default:
    return state;
}
};

  export default catagoryReducer;

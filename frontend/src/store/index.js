import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import listingReducer from "./listing";
import catagoryReducer from "./catagory";
import bookingReducer from "./booking";
import reviewReducer from "./review";


const rootReducer = combineReducers({
  session: sessionReducer,
  listing: listingReducer,
  catagory: catagoryReducer,
  booking: bookingReducer,
  review: reviewReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

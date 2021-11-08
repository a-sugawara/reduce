import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Route, Switch, NavLink } from 'react-router-dom';
import SearchBar from "./components/SearchBar"
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import CatagoryButton from "./components/CatagoryButton";
import ListingForm from "./components/ListingForm";
import Listings from "./components/Listings";
import * as listingActions from "./store/listing";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(listingActions.listed())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const listings = Object.entries(useSelector(state => state.listing)).map(listing => listing[1])
  console.log('listings',(listings))

  // {listings.forEach( listing => <div>{listing[1].name}</div> )}
  // listings.forEach( listing => console.log(listing[1].name) )
  return isLoaded && (
    <div>
      <Navigation isLoaded={isLoaded} />
      <div className="wrapper">
        <div className="sidebar"></div>
        <div className="mainbar">
            <Switch>
              <Route exact path="/">
                <SearchBar/>
                <div className="btn-holder">
                  <div className="btn-group">
                    <CatagoryButton/>
                    <div className="btn-text">
                      <p>Catagory</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/906600089638817802/AirTimeMusic.png"}/>
                    <div className="btn-text">
                      <p>Catagory</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <CatagoryButton/>
                    <div className="btn-text">
                      <p>Catagory</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <CatagoryButton/>
                    <div className="btn-text">
                      <p>Catagory</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                </div>
                <div>
                {listings.map(listing => <div>{listing.name}</div>)}
                </div>
              </Route>
              <Route path="/login">
                <h1>Login</h1>
                <LoginFormPage />
              </Route>
              <Route path="/signup">
                <SignupFormPage />
              </Route>
              <Route path="/listingpost">
                <ListingForm/>
              </Route>
              <Route path="/listings">
                <Listings/>
              </Route>
            </Switch>
        </div>
        <div className="sidebar"></div>
      </div>
    </div>
  );
}

export default App;

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
import CatagoryListings from "./components/CatagoryListings";
import SingleListing from"./components/SingleListing"
import ProfilePage from "./components/ProfilePage"
import * as listingActions from "./store/listing";
import BubbleDivs from "./components/BubbleDivs"



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const listings = Object.values(useSelector(state => state.listing))
  useEffect(() => {
    dispatch(listingActions.listed())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch, Listings,ProfilePage]);






  return isLoaded && (
    <div>
      <Navigation isLoaded={isLoaded} />
      <div className="wrapper">
        <div className="sidebar"></div>
        <div className="mainbar">
            <Switch>
              <Route exact path="/">
              <BubbleDivs color1={"black"} color3={"black"} side={"left"}  size={"thin"}/>
                <SearchBar/>
              <BubbleDivs color1={"black"} color2={"black"} color3={"yellow"} side={"left"}  size={"thin"}/>
              <BubbleDivs color1={"yellow"} color2={"black"} color3={"white"} side={"right"}  size={"thin"}/>
              <BubbleDivs color1={"white"} color2={"yellow"} color3={"white"} side={"left"}  size={"thin"}/>
                <div className="btn-holder">
                  <div className="btn-group">
                    <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/907148713351348264/PhotoIcon.png"}/>
                    <div className="btn-text">
                      <p>Photo</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/906600089638817802/AirTimeMusic.png"}/>
                    <div className="btn-text">
                      <p>Music</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/907151909612294164/FilmIcon.png"}/>
                    <div className="btn-text">
                      <p>Film</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/907155200572264518/artIcon.png"}/>
                    <div className="btn-text">
                      <p>Art</p>
                      <a>Open slots</a>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <NavLink to="/listings">
                    <CatagoryButton/>
                  </NavLink>
                  <div className="btn-text">
                    <p>View All Listings</p>
                  </div>
                </div>
                  {/* <Listings listings={listings}/> */}
                {/* {listings.map(listing => <div>{listing.name}</div>)} */}
              <BubbleDivs color1={"white"} color3={"orange"} side={"left"}  size={"thin"}/>
              <BubbleDivs color1={"orange"} color3={"grey"} side={"right"}  size={"thin"}/>
              <BubbleDivs color1={"grey"} color2 = {"orange"} color3={"grey"} side={"left"}  size={"thin"}/>
              {/* <BubbleDivs color1={"orange"} color3={"white"} side={"left"} />
              <BubbleDivs color1={"white"} color2={"orange"} color3={"copper"} side={"right"}/>
              <BubbleDivs color1={"copper"} color2={"white"} color3={"yellow"} side={"left"}/>
              <BubbleDivs color1={"yellow"} color2={"copper"} side={"right"}/> */}
              </Route>
              <Route path="/login">
                <h1>Login</h1>
                <LoginFormPage />
              </Route>
              <Route path="/signup">
                <SignupFormPage />
              </Route>
              <Route path="/listingpost">
                <BubbleDivs color1={"copper"} color3={"white"} side={"left"}  size={"thin"}/>
                <ListingForm/>
                <BubbleDivs color1={"white"} color3={"grey"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"grey"} color3={"black"} side={"right"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"grey"} color3={"black"} side={"left"}  size={"thin"}/>
              </Route>
              <Route exact path="/listings">
                <BubbleDivs color1={"copper"} color3={"white"} side={"left"}  size={"thin"}/>
                <Listings/>
                <BubbleDivs color1={"white"} color3={"yellow"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"yellow"} color3={"black"} side={"right"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"yellow"} color3={"black"} side={"left"}  size={"thin"}/>
              </Route>
              <Route path="/listings/:id">
                <BubbleDivs color1={"orange"} color3={"white"} side={"right"}  size={"thin"}/>
                <SingleListing/>
                <BubbleDivs color1={"white"} color3={"copper"} side={"right"}  size={"thin"}/>
                <BubbleDivs color1={"copper"} color3={"black"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"copper"} color3={"black"} side={"right"}  size={"thin"}/>
              </Route>
              <Route path="/submission">
                <h2>Your Studio is under Review</h2>
                <NavLink to="/listings/"><h2>Check Back To Listings</h2></NavLink>
                <BubbleDivs color1={"white"} color3={"copper"} side={"right"}  size={"thin"}/>
                <BubbleDivs color1={"copper"} color3={"black"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"copper"} color3={"black"} side={"right"}  size={"thin"}/>
              </Route>
              <Route path="/booked">
                <h2>Nice! You're Booked! We've sent you an email</h2>
                <NavLink to="/listings/"><h2>Check Back To Listings</h2></NavLink>
                <BubbleDivs color1={"white"} color3={"copper"} side={"right"}  size={"thin"}/>
                <BubbleDivs color1={"copper"} color3={"black"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"copper"} color3={"black"} side={"right"}  size={"thin"}/>
              </Route>
              <Route path="/reviewed">
                <h2>Thank you! Your feedback is very important to us! </h2>
                <NavLink to="/listings/"><h2>Check Back To Listings</h2></NavLink>
                <BubbleDivs color1={"white"} color3={"copper"} side={"right"}  size={"thin"}/>
                <BubbleDivs color1={"copper"} color3={"black"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"copper"} color3={"black"} side={"right"}  size={"thin"}/>
              </Route>
              <Route path="/profile">
                <BubbleDivs color1={"grey"} color2={"white"} color3={"white"} side={"left"} size={"thin"}/>
                <ProfilePage/>
                <NavLink to="/listings/"><h2>Check Back To Listings</h2></NavLink>
                <BubbleDivs color1={"white"} color3={"copper"} side={"right"} size={"thin"}/>
                <BubbleDivs color1={"copper"} color3={"black"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"copper"} color3={"black"} side={"right"}  size={"thin"}/>
              </Route>
              <Route path="/catagory/:catId">
                <BubbleDivs color1={"grey"} color2={"white"} color3={"white"} side={"left"} size={"thin"}/>
                <CatagoryListings />
                <NavLink to="/listings/"><h2>Check Back To Listings</h2></NavLink>
                <BubbleDivs color1={"white"} color3={"copper"} side={"right"} size={"thin"}/>
                <BubbleDivs color1={"copper"} color3={"black"} side={"left"}  size={"thin"}/>
                <BubbleDivs color1={"black"} color2 = {"copper"} color3={"black"} side={"right"}  size={"thin"}/>
              </Route>
            </Switch>
            {}
        </div>
        <div className="sidebar"></div>
      </div>
    </div>
  );
}

export default App;

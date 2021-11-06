import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SearchBar from "./components/SearchBar"
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import CatagoryButton from "./components/CatagoryButton";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <div>
      <Navigation isLoaded={isLoaded} />
      <div className="wrapper">
        <div className="sidebar"></div>
        <div className="mainbar">
            <Switch>
              <Route exact path="/">
                <SearchBar/>
                <h2>Home</h2>
                <div className="btn-holder">
                  <CatagoryButton/>
                  <CatagoryButton/>
                  <CatagoryButton/>
                  <CatagoryButton/>
                </div>
              </Route>
              <Route path="/login">
                <h1>Login</h1>
                <LoginFormPage />
              </Route>
              <Route path="/signup">
                <SignupFormPage />
              </Route>
            </Switch>
        </div>
        <div className="sidebar"></div>
      </div>
    </div>
  );
}

export default App;

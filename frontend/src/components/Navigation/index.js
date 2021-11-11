import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import * as sessionActions from '../../store/session'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  let sessionLinks;
  let producerButton;
  const handleDemo =() =>{
    dispatch(sessionActions.login({ credential:"Demo", password:"password" }))
  }
  if (sessionUser) {
    producerButton =(
    <NavLink to ="/listingpost">
      <div className="nav-btns">
        <div className="pro-btn">
          Become a Producer
        </div>
      </div>
    </NavLink>)
    sessionLinks = (
      <div className="nav-btns">
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    producerButton=(null)
    sessionLinks = (
        <div className="nav-btns">
          <LoginFormModal />
          <SignUpFormModal/>
          <button onClick={handleDemo}>Demo</button>
        </div>
    );
  }

  return (
    <div className="nav">
      <NavLink exact to="/">
        <img
          className="logo-img"
          src="https://cdn.discordapp.com/attachments/906471684683493386/906471724965593119/AirTimeLogo.png"/>
      </NavLink>
      {isLoaded && producerButton}
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;

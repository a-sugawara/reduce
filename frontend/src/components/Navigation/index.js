import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  let producerButton;
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
          <div></div>
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

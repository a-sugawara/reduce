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
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-btns">
          <LoginFormModal />
          <SignUpFormModal/>
        </div>
      </>
    );
  }

  return (
    <div className="nav">
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;

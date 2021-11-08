import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="pro-container">
      <details className="details">
          <summary>
          <div className="pro-btn">
            {user.username}
          </div>
        </summary>
        {/* {showMenu && ( */}
          <details-menu class="profile-dropdown">
            <div>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
            <button
              className="logout-btn"
              onClick={logout}>
                Log Out
            </button>
          </details-menu>
        {/* )} */}
      </details>
    </div>
  );
}

export default ProfileButton;

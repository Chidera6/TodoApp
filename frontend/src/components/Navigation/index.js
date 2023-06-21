import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const User = useSelector(state => state.user.user);

  let Links;
  if (User) {
    Links = (
      <ProfileButton user={User} />
    );
  } else {
    Links = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && Links}
      </li>
    </ul>
  );
}

export default Navigation;

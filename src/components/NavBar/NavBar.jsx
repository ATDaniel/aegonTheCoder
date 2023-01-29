import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {

  return(
    <div className='navBar'>
      <NavLink to='/'>
        <img src={require('../../assets/logoThin.png')} alt='logo' id='nav-logo'/>
      </NavLink>
      <NavLink to='/links' className={({ isActive }) => 'navBar-link' + (isActive ? ' selected' : '')}>
        Links
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => 'navBar-link' + (isActive ? ' selected' : '')}>
        About
      </NavLink>
      <NavLink to='/setup' className={({ isActive }) => 'navBar-link' + (isActive ? ' selected' : '')}>
        Setup
      </NavLink>
    </div>
  )
}

export default NavBar;
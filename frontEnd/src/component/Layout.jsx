// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

import {LoggedInStatus} from '../api/Auth.js';

import '../css/Layout.css';

function Layout() {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
        <header className='narbar'>
          <div id='logo_container'>
              <img id="logo" src={logo}></img>
          </div>
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
          </ul>
          <ol>
            <NavLink to='/about'>About</NavLink>
            {LoggedInStatus() ? <a href='#' onClick={handleLogOut}>Logout</a> : <NavLink to='/login'>&#128682;Login</NavLink>}
          </ol>
        </header>
        <Outlet />
    </>
  )
}

export default Layout
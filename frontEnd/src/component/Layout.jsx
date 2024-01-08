// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

import '../css/Layout.css';

function Layout() {
  return (
    <>
        <header className='narbar'>
          <div id='logo_container'>
              <img id="logo" src={logo}></img>
          </div>
          <ul>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/shop'>shop</NavLink>
          </ul>
          <ol>
            <NavLink to='/login'>&#128682;login</NavLink>
            <NavLink to='/about'>about</NavLink>
          </ol>
        </header>
        <Outlet />
    </>
  )
}

export default Layout
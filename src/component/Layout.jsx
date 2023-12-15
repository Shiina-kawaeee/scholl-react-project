// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';

import '../css/Layout.css';

function Layout() {
  return (
    <>
        <header className='narbar'>
            <div className='logo'>
            <h1><a href=''>logo</a></h1>
            </div>
            <ul className='left'>
            <li><a href='#'>home</a></li>
            <li><a href='#'>shop</a></li>
            <li><a href='#'>about</a></li>
            </ul>
            <ol>
            <li><a href='#'>&#128682; login</a></li>
            <li><a href='#'>about</a></li>
            </ol>
        </header>
        <Outlet />
    </>
  )
}

export default Layout
import React from 'react'
import '../css/login.css'
import {  Link } from 'react-router-dom'

function Login() {
  return (
    
    <div className='grid-container'> 
      <div className='grid-box'> 
        <h1>login</h1>
      </div>
      <div className='grid-box'>
      <label htmlFor="">username:</label>
        <input type="email" name="" id="" /> 
      </div>
      <br />
      <div className='grid-box'>
      <label htmlFor="">password:</label>
        <input type="password" name="" id="" />
      </div>
      <br />
      <div className='grid-box'>
        <Link to="/Register">register</Link>
        {/* <input type="button" value="register" /> */}
      </div>
      <br />
      <div>
      <input type="button" value="login" />
      </div>
    </div>
  )
}

export default Login
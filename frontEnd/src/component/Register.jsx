import React from 'react'
import '../css/login.css'
import {  Link } from 'react-router-dom'

function Register() {
  return (
    <div className='grid-container'> 
      <div className='grid-box'> 
        <h1>Register</h1>
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
      <div>
        <br />
      <input type="button" value="submit" />
      </div>
    </div>
  )
  
}

export default Register

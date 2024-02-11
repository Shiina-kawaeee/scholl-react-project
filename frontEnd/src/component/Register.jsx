import axios from 'axios';
import React, {useState } from 'react'
import {Link} from 'react-router-dom';

import '../css/login.css';

function Register() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();


  const url = 'http://localhost/nompang/phpApi/register.php';

  const sendUserDataRegister = () => {
    axios.post(
      url, 
      {email: email, password: password, name: name, username: username, contact : contact},
      {
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }}
    ).then((res) => {
      const processStatus = res.data.process.process;
      console.log(res);

      //if logged in
      if(processStatus == 200){
        localStorage.setItem('loggedInUser', username)
        localStorage.setItem('loggedInStatus', 0)

        window.location.href = '/';
      }
    })
  }

  return (
    <div className='grid-container'> 
    <div className='grid-box'> 
      <h1>register</h1>
    </div>
    <div className='grid-box'>
        <label>Name : </label>
        <input type="name" name="name" id="name" 
          onChange={(e) => {setName(e.target.value)}}/> 
      </div>
      <div className='grid-box'>
      <label>Username : </label>
        <input type="username" name="username" id="username" 
          onChange={(e) => {setUsername(e.target.value)}}/> 
      </div>
      <div className='grid-box'>
      <label>Password : </label>
        <input type="password" name="password" id="password" 
          onChange={(e) => {setPassword(e.target.value)}}/> 
      </div>
      <div className='grid-box'>
      <label>Email : </label>
        <input type="email" name="email" id="email" 
          onChange={(e) => {setEmail(e.target.value)}}/> 
      </div>
      <div className='grid-box'>
      <label>Contact : </label>
        <input type="contact" name="contact" id="contact" 
          onChange={(e) => {setContact(e.target.value)}}/> 
      </div>
      <div>
      <input type="button" value="register" onClick={sendUserDataRegister}/>
      </div>
  </div>
  )
}

export default Register
import axios from 'axios';
import React, {useState } from 'react'
import {Link} from 'react-router-dom';

import '../css/login.css';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const url = 'http://localhost/nompang/phpApi/login.php';

  
  const sendUserDataLogin = () => {
    axios.post(
      url, 
      {email: email, password: password},
      {
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }}
    ).then((res) => {
      const processStatus = res.data.process.process;
      // console.log(res);

      //if logged in
      if(processStatus == 200){
        const username = res.data.username.username;
        const userStatus = res.data.userStatus.userStatus;

        localStorage.setItem('loggedInUser', username)
        localStorage.setItem('loggedInStatus', userStatus)

        window.location.href = '/';
      }
    })
  }

  return (
    <div className='grid-container'> 
    <div className='grid-box'> 
      <h1>login</h1>
    </div>
      <div className='grid-box'>
        <label>Email : </label>
        <input type="email" name="email" id="email" 
          onChange={(e) => {setEmail(e.target.value)}}/> 
      </div>
      <div className='grid-box'>
        <label>Password : </label>
        <input type="password" name="password" id="password" 
          onChange={(e) => {setPassword(e.target.value)}}/>
      </div>
      <div className='grid-box'>
        <Link to="/register">register</Link>
      </div>
      <div>
      <input type="button" value="login" onClick={sendUserDataLogin}/>
      </div>
  </div>
  )
}

export default Login
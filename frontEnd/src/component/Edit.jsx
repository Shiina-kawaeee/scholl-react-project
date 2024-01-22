import React, { useState } from 'react';

import '../css/edit.css';
import axios from 'axios';

function Edit() {
    const url = 'http://localhost/nompang/phpApi/edit_member.php';

    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const handleUpdate = () => {
        axios.post(url, {name:name, contact: contact, username:username, password:password, email:email},
            {
              headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }})
        .then((res) => {
            window.alert(res.data);

            // window.location.replace('/shop');
        })
    }

  return (
    <>
        <div id='edit-header-container'>
            <h1 id='edit-header'>แก้ไขข้อมูลลูกค้า</h1>
        </div>
        <div id='edit-form-container'>
            <p>ชื่อลูกค้า : </p>
            <input type="text" onChange={(e) => {setName(e.target.value)}} />
            <p>ช่องทางติดต่อ : </p>
            <input type="text" onChange={(e) => {setContact(e.target.value)}} />
            <p>Username : </p>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}} />
            <p>Password : </p>
            <input type="text" onChange={(e) => {setPassword(e.target.value)}} />
            <p>Email : </p>
            <input type="text" onChange={(e) => {setEmail(e.target.value)}} />
        </div>
        <div id='edit-form-button-container'>
            <button id='edit-form-button-update' onClick={handleUpdate}>Update</button>
            <button id='edit-form-button-cancel' onClick={ () => {window.location.replace('/shop')}}>Cancel</button>
        </div>
    </>
  )
}

export default Edit

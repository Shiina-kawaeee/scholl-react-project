import React, { useEffect, useState } from 'react';

import '../css/edit.css';
import axios from 'axios';
import { LoggedInStatus } from '../api/Auth';

function Edit() {
    const url = 'http://localhost/nompang/phpApi/add_product.php';

    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState('');
    const [tot, setTot] = useState('');
    const [type, setType] = useState('');
    const [pic, setPic] = useState(null);

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('des', des);
        formData.append('detail', detail);
        formData.append('price', price);
        formData.append('tot', tot);
        formData.append('type', type);
        formData.append('file', pic);

        axios.post(url, formData,
            {
              headers: {
              'Content-Type': 'multipart/form-data'
            }})
        .then((res) => {
            console.log(res);

            if(res.data.process.process == 200){
                window.alert('Add SUCCESS FULLY');
                window.location.replace('/shop');
            } else {
                window.alert(res.data.error.error);
            }
        })
    }

    useEffect(() => {
        if(LoggedInStatus()){
            localStorage.getItem('loggedInStatus') == 1 ? '' : window.location.href = '/';
        } else {
            window.location.href = '/'
        }
    }, [])

  return (
        <>
            <div id='edit-header-container'>
                <h1 id='edit-header'>เพิ่มข้อมูล</h1>
            </div>
            <div id='edit-form-container'>
                <p>ชื่อสินค้า : </p>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                <p>คำอธิบายสั้นๆ : </p>
                <input type="text" value={des} onChange={(e) => {setDes(e.target.value)}} />
                <p>รายละเอียด : </p>
                <input type="text" value={detail} onChange={(e) => {setDetail(e.target.value)}} />
                <p>ราคา : </p>
                <input type="number" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                <p>จำนวน : </p>
                <input type="number" value={tot} onChange={(e) => {setTot(e.target.value)}} />
                <p>type (1-5) : </p>
                <input type="number" value={type} onChange={(e) => {setType(e.target.value)}} />
                <p>pic : </p>
                <input type="file" onChange={(e) => {setPic(e.target.files[0])}} />
            </div>
            <div id='edit-form-button-container'>
                <button id='edit-form-button-update' onClick={handleUpdate}>Add</button>
                <button id='edit-form-button-cancel' onClick={ () => {window.location.replace('/shop')}}>Cancel</button>
            </div>
        </>
  )
}

export default Edit

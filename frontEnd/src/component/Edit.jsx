import React, { useEffect, useState } from 'react';

import '../css/edit.css';
import axios from 'axios';
import { LoggedInStatus } from '../api/Auth';
import { useParams } from 'react-router-dom';

function Edit() {
    const {id} = useParams();

    const url = 'http://localhost/nompang/phpApi/edit_product.php';

    const [name, setName] = useState();
    const [des, setDes] = useState();
    const [detail, setDetail] = useState();
    const [price, setPrice] = useState();
    const [tot, setTot] = useState();
    const [src, setSrc] = useState();

    const handleUpdate = () => {
        axios.post(url, {id: id, name:name, des: des, detail:detail, price:price, tot:tot, src:src},
            {
              headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }})
        .then((res) => {
            if(res.data.process.process == 200){
                window.alert('UPDATE SUCCESS FULLY');
                window.location.replace('/shop');
            }
        })
    }

    useEffect(() => {
        if(LoggedInStatus()){
            localStorage.getItem('loggedInStatus') == 1 ? '' : window.location.href = '/';
        } else {
            window.location.href = '/'
        }

        axios.post('http://localhost/nompang/phpApi/getEditData.php', {id: id},
            {
              headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }})
        .then((res) => {
            if(res.data.process.process == 200){
                setName(res.data.data.result.Pro_name);
                setDes(res.data.data.result.Pro_des);
                setDetail(res.data.data.result.Pro_detail);
                setPrice(res.data.data.result.Pro_price);
                setTot(res.data.data.result.Pro_tot);
                setSrc(res.data.data.result.Pro_src);
            } else {
                window.alert(res.data.error.error);
            }
        })
    }, [])

  return (
    name ? 
        <>
            <div id='edit-header-container'>
                <h1 id='edit-header'>แก้ไขข้อมูล {name}</h1>
            </div>
            <div id='edit-form-container'>
                <p>ชื่อสินค้า : </p>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                <p>คำอธิบายสั้นๆ : </p>
                <input type="text" value={des} onChange={(e) => {setDes(e.target.value)}} />
                <p>รายละเอียด : </p>
                <input type="text" value={detail} onChange={(e) => {setDetail(e.target.value)}} />
                <p>ราคา : </p>
                <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                <p>จำนวน : </p>
                <input type="text" value={tot} onChange={(e) => {setTot(e.target.value)}} />
                <p>src : </p>
                <input type="text" value={src} onChange={(e) => {setSrc(e.target.value)}} />
            </div>
            <div id='edit-form-button-container'>
                <button id='edit-form-button-update' onClick={handleUpdate}>Update</button>
                <button id='edit-form-button-cancel' onClick={ () => {window.location.replace('/shop')}}>Cancel</button>
            </div>
        </> : ''
  )
}

export default Edit

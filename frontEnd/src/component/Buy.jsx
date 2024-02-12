import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '../css/Buy.css';

function Buy() {
    const [data, setData] = useState();
    const {id} = useParams();

    const ImgfetchServer = 'http://localhost/nompang/assets';

    useEffect(() => {
        axios.post('http://localhost/nompang/phpApi/buy.php', {id: id},
            {
              headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }})
        .then((res) => {
            if(res.data.process.process == 200){
                setData(res.data.data.result)
                console.log(res.data.data.result);
            } else {
                window.alert(res.data.error.error);
            }
        })
    }, [])

  return (
    data ? 
      <div id='Buy-container'>
        <div id='Buy-image-container'>
          <img id='Buy-image'
            src={`${ImgfetchServer}/shop/${data.Pro_src}`}alt="" />
        </div>
        <div id='Buy-text-container'>
          <p id='Buy-text-head'>{data.Pro_name}</p>
          <p id='Buy-text'>{data.Pro_detail}</p>
          <div id='Buy-text-detail-container'>
            <p id='Buy-text-price'>Price : {data.Pro_price}</p>
            <p id='Buy-text-quantity'>Quantity : {data.Pro_tot}</p>
            <a id='Button-buy'
              href='#'
              className='Button-buy-buy'
              key={'buyButton'}
              onClick={() => {window.alert('Buy successfully'), window.location.href = '/shop'}}>Buy</a>
          </div>
        </div>
      </div>
      : ''
  )
}

export default Buy

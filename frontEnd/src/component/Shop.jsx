import React, {useEffect, useState} from 'react';
import '../css/shop.css';
import axios from 'axios';

function Shop() {
  const [dbInfo, setDbInfo] = useState(null);

  useEffect(() => {

    const url = 'http://localhost/phpApi/getData.php';

    axios.post(url, {collectionName : "nompang_products" } ,
    {
      headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }})
    .then((result) => {
      console.log(result.data.data.result);

      setDbInfo(result.data.data.result);
    }).catch((error) => {
      console.log('An Error is occupied: ', error);
    })

  }, []);

  return (
    <div className='grid-contrainer'>
      <div className='grid-item'>
          <p>{dbInfo ? dbInfo[0].Pro_name : "Waiting for data"}</p>
          <img src="" alt="" />
      </div>
      <div className='grid-item'>
        <img src="" alt="" />
      </div>
      <div className='grid-item'>
        <img src="" alt="" />
      </div>
      <div className='grid-item'>
        <img src="" alt="" />
      </div>
      
    </div>
  )
}

export default Shop
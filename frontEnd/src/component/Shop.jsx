import React, {useEffect} from 'react';
import '../css/shop.css';
import axios from 'axios';

function Shop() {

  useEffect(() => {
    const url = 'http://localhost/backEnd/getData.php';

    axios.post(url, {collectionName : "nompang_products"})
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log('An Error is occupied: ', error);
    })

  }, []);

  return (
    <div className='grid-contrainer'>
      <div className='grid-item'>
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
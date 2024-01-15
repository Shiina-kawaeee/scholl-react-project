import React, {useEffect, useState, memo} from 'react';
import '../css/shop.css';
import axios from 'axios';

function Shop() {
  const [dbInfo, setDbInfo] = useState(null);
  const ImgfetchServer = 'http://localhost/nompang/assets';

  useEffect(() => {

    const url = 'http://localhost/nompang/phpApi/getData.php';

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
      {dbInfo ? dbInfo.map((value) => {

        return (     
          <div className='grid-item'
            key={value.Pro_name}>
            <p>{value.Pro_name}</p>
            <img src={`${ImgfetchServer}/shop/${value.Pro_src}`} alt={value.Pro_name} />
          </div>
        )

      }) : "Waiting for data"}
    </div>
  )
}

export default memo(Shop)
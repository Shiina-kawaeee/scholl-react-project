import React, {useEffect} from 'react';
import '../css/shop.css';
import axios from 'axios';

function Shop() {

  useEffect(() => {
    
    const url = 'http://localhost/phpApi/getData.php';

    axios.post(url, {collectionName : "nompang_products"})
    .then((result) => {
      console.log(result.data);
    }).catch((error) => {
      console.log('An Error is occupied: ', error);
    })

  }, []);

  return (
    <section className='grid-contrainer'>
      <article className='grid-item'>
          <img src="" alt="" />
      </article>
      <article className='grid-item'>
        <img src="" alt="" />
      </article>
      <article className='grid-item'>
        <img src="" alt="" />
      </article>
      <article className='grid-item'>
        <img src="" alt="" />
      </article>
      
    </section>
  )
}

export default Shop
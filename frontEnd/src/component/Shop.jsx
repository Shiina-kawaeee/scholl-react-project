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
    <>
      <section >
          <div className='grid-contrainer'>
              <article className='grid-item'>
                  <img src="https://shop.farmhouse.co.th/media/catalog/product/cache/09ad5326b5f9b030d858c3959bbb1f0b/s/l/slicedbread480g480g_2020-no-layer-_-_-10-oct-2020.png"className='img' alt="" />
                  <div className='btn-area'>
                    <a href='#' className='btn-shop'>กด</a>
                  </div>
              </article>
              <article className='grid-item'>
              <img src="https://shop.farmhouse.co.th/media/catalog/product/cache/09ad5326b5f9b030d858c3959bbb1f0b/s/l/slicedbread480g480g_2020-no-layer-_-_-10-oct-2020.png"className='img' alt="" />
                <div className='btn-area'>
                  <a href='#' className='btn-shop'>กด</a>
                  </div>
              </article>
              <article className='grid-item'>
              <img src="https://shop.farmhouse.co.th/media/catalog/product/cache/09ad5326b5f9b030d858c3959bbb1f0b/s/l/slicedbread480g480g_2020-no-layer-_-_-10-oct-2020.png"className='img' alt="" />
                <div className='btn-area'>
                  <a href='#' className='btn-shop'>กด</a>
                  </div>
              </article>
              <article className='grid-item'>
              <img src="https://shop.farmhouse.co.th/media/catalog/product/cache/09ad5326b5f9b030d858c3959bbb1f0b/s/l/slicedbread480g480g_2020-no-layer-_-_-10-oct-2020.png"className='img' alt="" />
                <div className='btn-area'>
                 <a href='#' className='btn-shop'>กด</a>
                  </div>
              </article>
              <article className='grid-item'>
              <img src="https://shop.farmhouse.co.th/media/catalog/product/cache/09ad5326b5f9b030d858c3959bbb1f0b/s/l/slicedbread480g480g_2020-no-layer-_-_-10-oct-2020.png"className='img' alt="" />
                <div className='btn-area'>
                 <a href='#' className='btn-shop'>กด</a>
                  </div>
              </article>
          </div> 
        
      </section>
      
    </>
  )
}

export default Shop
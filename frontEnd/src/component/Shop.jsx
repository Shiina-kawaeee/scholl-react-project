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
      setDbInfo(result.data.data.result);
    }).catch((error) => {
      console.log('An Error is occupied: ', error);
    })

  }, []);

  const handleDelete = (Pro_code, Pro_name) => {
      if(window.confirm('Are you sure to delete ' + Pro_name)){
        axios.post('http://localhost/nompang/phpApi/delete_product.php', {id: Pro_code},
        {
          headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }})
        .then((res) => {
            if(res.data.process.process == 200){
              window.alert('delete success fully');
              window.location.reload()

            } else {
              window.alert(res.data.error.error);
            }
        })
    }
  }


  return (
    <div className='grid-top-container'>
      {localStorage.getItem('loggedInStatus') == 1 ? <a href="/add" id='Button-add' 
        key={'addButton'}>ADD</a> : ''}
      <div className='grid-contrainer'
        key={'grid-container'}>
        {dbInfo ? dbInfo.map((value) => {

          return (    
            <div className='grid-card'
              key={'card' + value.Pro_name + value.Pro_code}>
              <div className='grid-item'
                key={'contain' + value.Pro_name}>
                <p className='cakeLabel' 
                  key={value.Pro_name}>{value.Pro_name}</p>
                <img className='img' 
                  src={`${ImgfetchServer}/shop/${value.Pro_src}`} alt={value.Pro_name} 
                  key={value.Pro_src}/>
              </div>
              <div className='grid-button'
                key={'contain-button-' + value.Pro_name}>
                  {localStorage.getItem('loggedInStatus') == 1 ? <>
                    <a id='Button-edit'
                      key={'Edit-button-' + value.Pro_name}
                      href={'/edit/' + value.Pro_code}>Edit</a>
                    <a id='Button-delete'
                      key={'Delete-button-' + value.Pro_name}
                      onClick={() => {handleDelete(value.Pro_code, value.Pro_name)}}>Delete</a></>: ''}
                  <a href={'/buy/' + value.Pro_code} className='Button-buy'
                    key={'butButton'}>Buy</a>
                </div>
            </div>
          )

        }) : "Waiting for data"}
      </div>
    </div>
  )
}

export default memo(Shop)
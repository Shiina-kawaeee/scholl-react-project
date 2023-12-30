import React from 'react'
import '../css/shop.css'
import logo from '../assets/logo.png';

function Shop() {
  return (
    <div className='grid-contrainer'>
      <div className='grid-item'>
        <img src={logo} alt="" id='shop-img' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos culpa quo temporibus esse sit, quas repellat perspiciatis, sapiente dolor laborum voluptatum velit natus! Consequatur quas illum exercitationem assumenda sit!</p>
      </div>
      <div className='grid-item'>
        <img src={logo} alt="" id='shop-img' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos culpa quo temporibus esse sit, quas repellat perspiciatis, sapiente dolor laborum voluptatum velit natus! Consequatur quas illum exercitationem assumenda sit!</p>
      </div>
      <div className='grid-item'>
        <img src={logo} alt="" id='shop-img' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos culpa quo temporibus esse sit, quas repellat perspiciatis, sapiente dolor laborum voluptatum velit natus! Consequatur quas illum exercitationem assumenda sit!</p>
      </div>
      <div className='grid-item'>
        <img src={logo} alt="" id='shop-img' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos culpa quo temporibus esse sit, quas repellat perspiciatis, sapiente dolor laborum voluptatum velit natus! Consequatur quas illum exercitationem assumenda sit!</p>
      </div>
      
    </div>
  )
}

export default Shop
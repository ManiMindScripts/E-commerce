import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offer'>
    <div className='offer-eft'>
    <h1>Exclusive</h1>
    <h1>Offers For You</h1>
    <p>ONLY ON BEST SELLER PRODUCTS</p>
    <button>Check Now</button>

    </div>
 <div className='offer-right'>
<img src={exclusive_image} alt='error'/>
 </div>
    </div>
  )
}

export default Offers
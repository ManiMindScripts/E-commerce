import React from 'react'
import './Bread.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Bread = (props) => {
    const {product} = props
  return (
    <div className='bread'>
    Home <img src={arrow_icon} alt='error'/> Shop <img src={arrow_icon} alt='error'/> {product.category} <img src={arrow_icon} alt='error'/> {product.name}

    </div>
  )
}

export default Bread
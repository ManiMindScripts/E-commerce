import React from 'react'
import './Pop.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Pop = () => {
  return (
    <div className='popu'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='pop-item'>
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}

      </div>
    </div>
  )
}

export default Pop
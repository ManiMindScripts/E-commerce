import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Bread from '../Components/Bread/Bread'
import ProductDis from '../Components/ProductDis/ProductDis'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'


const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId}= useParams()
  const product = all_products.find((e)=>
   e.id === Number(productId)
  )

  return (
    <div>
      <Bread product={product}/>
      <ProductDis product={product}/>
      <DescriptionBox/>
      
    </div>
  )
}

export default Product
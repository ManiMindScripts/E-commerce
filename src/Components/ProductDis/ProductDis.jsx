import React from 'react'
import './ProductDis.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDis = (props) => {
    const { product } = props;
    return (
        <div className='product-dis'>
            <div className='productdispay-left'>
                <div className='productdisplay-img'>
                    <img src={product.image} alt='error' />
                    <img src={product.image} alt='error' />
                    <img src={product.image} alt='error' />
                    <img src={product.image} alt='error' />
                </div>
                <div className='product-img'>
                    <img className='product-main-img' src={product.image} alt='error' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='product-right-star'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-prices-old'>${product.old_price}</div>
                    <div className='product-right-prices-new'>${product.new_price}</div>
                </div>
                <div className='product-desc'>
                    A leightweight, pullover Shirt, close-fiiting.
                </div>
                <div className='product-size'><h1>Select Size</h1>
                    <div className='product-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='product-right-category'><span>Category:</span>Women , T-shirt , Crop Top </p>
                <p className='product-right-category'><span>Tags:</span>Modren , Latest </p>
               
            </div>

        </div>
    )
}

export default ProductDis
import React from 'react'
import './News.css'

const News = () => {
  return (
    <div className='news'>
    <h1>Get Exclusive Offers On Your Email</h1>
    <p>Subscribe to our newsletter and Stay Updated</p>
    <div>
        <input type='email' placeholder='Your Email Id'/>
        <button>Subscribe</button>
    </div>

    </div>
  )
}

export default News
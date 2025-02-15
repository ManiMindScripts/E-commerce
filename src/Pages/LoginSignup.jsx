import React from 'react'
import './Css/Signup.css'

const LoginSignup = () => {
  return (
    <div className='signup'>
      <div className='signup-container'>
        <h1>Sign Up</h1>
        <div className='signup-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email Id' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='sign'>Already have an account? <span>login Here</span></p>
        <div className='signup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By Continuing, i agree the terms of use & Policy </p>

        </div>
      </div>
    </div>
  )
}

export default LoginSignup
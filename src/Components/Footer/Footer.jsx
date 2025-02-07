import React from 'react'
import './Footer.css'
import Footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-logo'>
    <img src={Footer_logo} alt='error'/>
    <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
    <li>Company</li>
    <li>Products</li>
    <li>Services</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    <div className='footer-icons'>
    <div className='footer-container'>
    <img src={instagram_icon} alt='error'/>
    </div>
    <div className='footer-container'>
    <img src={pintester_icon} alt='error'/>
    </div>
    <div className='footer-container'>
    <img src={whatsapp_icon} alt='error'/>
    </div>
    </div>
    <div className='footer-copy'>
    <hr/>
    <p>Copy @ 2025 - All Right Preserved BY AI.</p>

    </div>
    </div>
  )
}

export default Footer
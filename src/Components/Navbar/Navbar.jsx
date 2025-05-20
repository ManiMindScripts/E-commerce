import React, {useState}from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

    
  return (
    <>
    <div className='navbar'>
    <div className='nav-logo'>
     <img  src={logo} alt='error'/>
     <p>SHOPPER</p>
    </div>
    <div className='nav-hamburger' onClick={toggleMenu}>
        <FontAwesomeIcon icon={showMobileMenu ? faXmark : faBars} size='lg' />
      </div>
    <ul className={`nav-menu ${showMobileMenu ? 'show-menu' : ''} `}>
    <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link>{menu==="shop"?<hr/>: null}</li>
    <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: "none"}} to='/mens'>mens</Link>{menu==="mens"?<hr/>:null} </li>
    <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: "none"}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:null}</li>
    <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: "none"}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:null}</li>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>   
        <Link to='/cart'><img src={cart_icon} alt='error'/></Link>   
           <div className='nav-cart-count'>0</div>

    </div>

    </div>
    </>
  )
}

export default Navbar
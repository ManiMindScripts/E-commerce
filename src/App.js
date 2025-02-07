import React from 'react'
// import HomePage from './HomePage'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Card from './Pages/Card'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <>
      {/* <HomePage/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory category="men"/>}/>
            <Route path='/womens' element={<ShopCategory category="women"/>}/>
            <Route path='/kids' element={<ShopCategory category="kid"/>}/>
            <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/card' element={<Card/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

import React from 'react'
import Navbar from '../components/Navbar';
import CategoreyMenu from '../components/CategoreyMenu';
import Fooditem from '../components/Fooditem';
import Cart from '../components/Cart';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <CategoreyMenu/>
        <Fooditem/>
        <Cart/>
    </div>
  )
}

export default  Home;
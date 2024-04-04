import React, { useState } from 'react'
import Navbar from './compounds/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
// import placeOrder from './pages/placeOrder/placeOrder'

import Footer from './compounds/Footer/Footer'
import LoginpopUp from './compounds/LoginpopUp/LoginpopUp'
import Placeorder from './pages/placeOrder/Placeorder'
// import PlaceOrderr from './pages/placeOrder/placeOrder'
 
const App = () => {
   
   const [showlogin,setshowlogin]=useState(false)

  return (
    <>
    {showlogin?<LoginpopUp setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
      
        <Route path='/' Component={Home}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/order' Component={Placeorder}/>

      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App;

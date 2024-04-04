import React, { useState } from 'react'
import './Home.css'
import Header from '../../compounds/Navbar/Header/Header'
import ExploreMenu from '../../compounds/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../compounds/FoodDisplay/FoodDisplay'
import AppDownload from '../../compounds/AppDownload/AppDownload'

const Home = () => {

  const [category,setcategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home

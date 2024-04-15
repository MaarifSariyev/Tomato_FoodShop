import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../components/foodDisplay/Fooddisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category ,setCategory] = useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <Fooddisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
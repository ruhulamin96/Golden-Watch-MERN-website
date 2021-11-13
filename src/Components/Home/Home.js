import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Accessories from './Accessories/Accessories'
import Footer from './Footer/Footer'
import Banner from './Header/Banner/Banner'
import NavigationBar from './Header/NavigationBar/NavigationBar'
import Products from './Products/Products'
import Review from './Review/Review'

function Home() {
    return (
        <div>
          <NavigationBar></NavigationBar>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Products></Products>
          <Accessories></Accessories>
          <Review></Review>
          <Footer></Footer>
        </div>
    )
}

export default Home

import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/foods.jpg'
import '../styles/Home.css'

function Home () {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Fast Food Duke </h1>
        <p> ...choose according to your preference... </p>
        <Link to="/menu">
           <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home 
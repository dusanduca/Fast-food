import React from 'react'
import Aboutpic from '../assets/aboutpic.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
        <div className='aboutTop' style={{ backgroundImage: `url(${Aboutpic})` }}></div>
        <div className='aboutBottom'> 
           <h1> About Us </h1>
           <p>
              Fast Food Duke started working in 2018 with the desire
             to become a recognizable brand in the catering world. 
             Very quickly we gained popularity and reputation primarily 
             thanks to the quality of service and unique business concept.
             We have earned your trust with the highest quality, fresh,
              carefully selected ingredients, original recipe and pleasant atmosphere.

             In addition to burgers and pizzas, 
             users of our services can also enjoy excellent sandwiches.
             Whether you order at your workplace, in your apartment or to organize a celebration,
             we are sure that our specialties will provide you with an unforgettable
             experience that you will remember for a long time.

             Check why we have acquired thousands of regular
             clients for so many years of successful business
             because our recommendation is exactly your satisfaction.
           </p>
        </div>
    </div>
  )
}

export default About
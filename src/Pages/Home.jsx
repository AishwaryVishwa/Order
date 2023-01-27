import React from 'react'
import Header from '../Components/Header'
import Typewriter from 'typewriter-effect';
import "./Home.css"
import RestaurantsList from '../Components/RestaurantsList';
import TypoEffect from '../Components/TypoEffect';

const restaurants=[
  {
    'name':"Rataquilla",
     'desc':"One of the best restaurants.",
     'img':'Dish_img.jpg'
  },
  {
    'name':"Rataquilla",
     'desc':"One of the best restaurants.",
     'img':'Dish_img.jpg'
  },
  {
    'name':"Rataquilla",
     'desc':"One of the best restaurants.",
     'img':'Dish_img.jpg'
  },
  {
    'name':"Rataquilla",
     'desc':"One of the best restaurants.",
     'img':'Dish_img.jpg'
  },
  {
    'name':"Rataquilla",
     'desc':"One of the best restaurants.",
     'img':'Dish_img.jpg'
  }
  
]
function Home() {
  return (
    <>
      <Header />

      <div className="design" >
        <div className='typo-effect'>
          <TypoEffect/>
        </div>

        <div className="image">
        </div>
      </div>
         
      
      <RestaurantsList List={restaurants}/>
    </>
  )
}

export default Home
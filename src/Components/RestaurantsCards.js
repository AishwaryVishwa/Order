import React from 'react'
import './RestaurantsCards.css'
import { NavLink } from 'react-router-dom'
function RestaurantsCards({img,resName,des}) {
  return (
    <>
    <div className="card">
            <div className="card-img" style={{'backGroundImage':{img}}}>   
            </div>

            <div className="desc">
                <h3>{resName}</h3>
                <h4>{des}</h4>
            </div>
           
           <NavLink to={'Menu'}>
             <button className="view-restau">View</button>
           </NavLink>
           
           
        </div>
    </>
  )
}

export default RestaurantsCards
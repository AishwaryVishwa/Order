import React from 'react'
import RestaurantsCards from './RestaurantsCards'
import './RestaurantsList.css'
const RestaurantsList = ({List}) => {
    return (
        <>

            <div className="main">

                <div className="heading">
                    <h1>Restaurants</h1>
                </div>
                <br />
                <hr />

                <div className="container-flex">
                   

                     {List.map((val,id)=>{
                        return(
                            
                            <RestaurantsCards 
                            key={id}
                            img={'Dish_img.jpg'} 
                            resName={'Rataquilla'}
                            des={'A very good restaurant.'}
                            />
                        )
                     })}

                    
                </div>

            </div>

        </>
    )
}

export default RestaurantsList;
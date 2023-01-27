import React from 'react'
import Header from '../Components/Header'
import Dish from '../Components/Dish'
import "./Menu.css"
import {Cartcontext} from '../Components/CartContext'
import { useContext } from 'react'
function Menu() {
    const {cartState:{products,cart},dispatch}=useContext(Cartcontext)
    return (
        <>
            <Header />

            <div className="menu-body">

                <div className="resDes">
                    <div className="resImg">

                    </div>
                    <span className="descrp">
                        Name of restaurants
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, nam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, nam.
                    </span>
                </div>
                
                <div className="menu-container">

                    {products.map((val,id) => {
                        return (
                            

                                <div key={id} className="menu">

                                    <Dish DishObj={val} dispatchFunc={dispatch} />

                                </div>
                            
                        )
                    })}

                </div>

            </div>

        </>
    )
}

export default Menu
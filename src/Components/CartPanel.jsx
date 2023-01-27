import React,{useEffect, useState,useContext} from 'react'
import CartItem from './CartItem'
import './CartPanel.css'
import {Cartcontext} from './CartContext';
function CartPanel() {
   const {cartState:{cart}}=useContext(Cartcontext)
   const [total,setTotal]=useState(0);
   console.log(cart);

  useEffect(() => {
   
    setTotal(cart.reduce((acc,curr)=>{
      acc=acc+curr.qty*curr.rate;
      return acc
    },0))

  })
  
  return (
   <>
      
        
           <h1>My Order</h1>
            
           <div className="items-list">

           {cart.map((val,id)=>{
            
             return <CartItem key={id} cartItems={val} />
           })}
           </div>
           <div className="totalPanel">
           
             <div className="sub-total">
                <h3>Subtotal</h3>
                <h3>{total}</h3>  
             </div>
               <button className='pay-btn'>Payment</button>
           </div>

      
   </>
  )
}

export default CartPanel
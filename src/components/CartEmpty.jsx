import React from 'react'
import { cart } from '../assets/assets';
import './stylesComp/CartEmpty.css'
import { useNavigate } from 'react-router-dom';


function CartEmpty() {
    const navigate = useNavigate()    
    function toShop() {
        navigate('/shop')
    }
  return (
    <div className='CartIsEmpty' onClick={toShop}>
        <img src={cart} alt="cart_Image" />
        <h1>Cart is Empty</h1>
        <button onClick={toShop}>Return to Shop</button>
    </div>
  )
}

export default CartEmpty
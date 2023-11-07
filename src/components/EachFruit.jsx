import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContextMade } from '../Context/MyContext';

function EachFruit(props) {
  const {cartItems, AddItem} = useContextMade()
    const navigate = useNavigate();
    const {id, name, price, image} = props.data;


  return (
    <div id='div-each-f' key={id}>
      <div onClick={() => navigate(`/products/${id}`)} id='shop-scale-div'>
        <img src={image} alt="imageFruit" />
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
        <button id='btn-each-f' onClick={() => AddItem(id)} >Add To Cart {cartItems[id] > 0 && ` (${cartItems[id]})`}</button>
    </div>
  )
}

export default EachFruit
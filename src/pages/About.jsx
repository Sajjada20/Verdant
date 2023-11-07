import React, { useEffect, useState } from 'react'
import { useContextMade } from '../Context/MyContext'
import './stylesPage/CheckOut.css';
import CartEmpty from '../components/CartEmpty';

const HowManyColor = [
  '#e11d48',
  '#db2777',
  '#c026d3',
  '#9333ea',
  '#7c3aed',
  '#4f46e5',
  '#2563eb',
  '#0284c7',
  '#0891b2',
  '#0d9488',
  '#059669',
  '#16a34a',
  '#65a30d',
  '#ca8a04',
  '#d97706',
  '#ea580c',
  '#dc2626',
  '#475569'
];




function About() {
  const { AddItem, Cancel, RemoveItem, GetTotalAmount, CheckOut} = useContextMade();
  const checkoutItems = CheckOut();
  const [randomColor, setRandomColor] = useState(GetRandomColor())
  const backGroun_Color = {backgroundColor: randomColor}

function GetRandomColor() {
  const randomIndex = Math.floor(Math.random() * HowManyColor.length)
  const RandomColor = HowManyColor[randomIndex]
  return RandomColor
}


  useEffect(() => {
    setRandomColor(GetRandomColor())
  }, [Cancel, RemoveItem, AddItem])

  const Total = GetTotalAmount() /* total */
  const btw = (.09 * Total).toFixed(2) /* btw cost */
  const allCost = (1.04 * Total).toFixed(2) /* all cost 9% - 5% = 4% */
  const discount = (.05 * Total).toFixed(2)

  

if (Total <= 0) {  /* cart is empty if total < 0 or = 0 */
  return <CartEmpty/>
}

  return (
    <div className='checkOut-div-1'>
      <div className='checkOut-div-2'>
        {Object.keys(checkoutItems).map((itemId) => {
          const currentItem = checkoutItems[itemId];
          const name = currentItem.item.name;
          const Currentimage = currentItem.item.image;
          const quantity = currentItem.quantity;
          const totalCostProduct = currentItem.totalCost.toFixed(2);
          const id = currentItem.item.id;

          return (
            <div className='checkOut-div-3'>
              <img src={Currentimage} id='image-check' />
              <div key={itemId} className='checkOut-div-4' >
                <p id='checkOut-name'>{name}</p>
                <p id='checkOut-quantity'>Quantity: {quantity}</p>
                <p id='checkOut-totalcost'>Total Cost: ${totalCostProduct}</p>
                <div className='checkOut-button'>
                <button id='check-out-btn' onClick={() => RemoveItem(id)}>Remove</button>
                <button id='check-out-btn' onClick={() => AddItem(id)}>Add</button>
                </div>
              </div>
            </div>
        )})}
      </div>

      <div className='checkOut-div-5'>
        <h2 style={{marginBottom: '1rem'}} >Checkout</h2>
        <div className='checkOut-div-child'>
          <h3>Total</h3>
          <h3>{Total}</h3>
        </div>
        <div className='checkOut-div-child'>
          <h3>Btw</h3>
          <h3>{btw}</h3>
        </div>
        <div className='checkOut-div-child'>
          <h3>Discount</h3>
          <h3>-{discount}</h3>
        </div>
        <div className='checkOut-div-child'>
          <h3>TotalCost</h3>
          <h3>{allCost}</h3>
        </div>
        <div className='checkout-div-button-check'>
            <button id='check-out-btn' style={{marginTop: '1rem'}}>Pay With Credit</button>
            <button id='check-out-btn' onClick={Cancel} style={backGroun_Color} >Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default About
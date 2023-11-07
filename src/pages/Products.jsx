import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { EachItemSection, HomeInfo, ShopInfo } from './data'
import './stylesPage/product.css'
import './stylesPage/home.css'
import Section from '../components/Section'
import EachFruit from '../components/EachFruit'
import { useContextMade } from '../Context/MyContext'

const LowerThird = HomeInfo?.LowerSection?.third;


const generateNumber = (min, max, items) => {
  let MyArray = [];
  while (MyArray.length < items) {
    const random = Math.floor(Math.random() * (max + 1)) + min;

    if (!MyArray.includes(random)) {
      MyArray.unshift(random);
    }
  }
  return MyArray;
}



function Product() {
  const {cartItems, AddItem, RemoveItem, GetTotalAmount} = useContextMade()
  const {id} = useParams()
  const CurrentItem = ShopInfo[id]
  const NewItems = ShopInfo.filter((item, index) => ShopInfo[index] !== CurrentItem);
  const [MyRandomList, setMyRandomList] = useState([]);

  useEffect(() => {
    const randomList = generateNumber(0, 8, 3);
    setMyRandomList(randomList); 
  }, []); 


  const {name, price, image, description} = CurrentItem;
  return (
    <div className='product-hoofd-div'>
      <div className='DerdeSection-div' style={{marginTop: '3rem'}}>
        <img src={image} alt="" id='image-section-home' />
        <div className="info-sectionDrie-div">
          <h1>{name}</h1>
          <h3>€{price}</h3>
          <p>{description}</p>
          <div className='sectionDrie-section'>
            {EachItemSection[id].map((item, index) => {
              return (<Section data={item} idx={index} />)
            })}
          </div>
          <div id='prodcut-shop-button-id'>

          <button id='btn-each-f' onClick={() => AddItem(id)} >Add To Cart</button>
          <h5 style={{display: 'inline-block', margin: "0 1rem",}}>{cartItems[id] > 0 && ` (${cartItems[id]})`}</h5>
          <button id='btn-each-f' onClick={() => RemoveItem(id)} style={{backgroundColor: "#e11d48", color: '#f1f5f9'}} >Remove from Cart</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='products-item-display'>
      {MyRandomList.map((number, index) => {
          const relatedItem = NewItems.find((item) => item.id === number);
          if (relatedItem) {
            return (
                <EachFruit data={relatedItem} />
            );
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default Product
import React from 'react'
import { ShopInfo, ShopTitle } from './data'
import EachFruit from '../components/EachFruit'
import './stylesPage/Shop.css'


function Shop() {
  return (
    <div>
      <div className='shop-upper-div'>
        <div className='shop-upper-in-div'>

        <div id='shop-upper-child-frist-div'>
          <h1>{ShopTitle?.title}</h1>
          <p>{ShopTitle?.paragraaf}</p>
        </div>
        <div className='shop-item-buiten'>
          {ShopTitle?.items.map((item, index) => {
            const {title, paragraaf} = item
            const count = index +1
            return (
              <div className='shop-item' key={index}>
                <h1>{count}</h1>
                <div className='shop-item-child-div'>
                  <h3>{title}</h3>
                  <p>{paragraaf}</p>
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
      <div className="Home-EachFruit-div">
        {ShopInfo.map((item, index) => {
          return <EachFruit data={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default Shop
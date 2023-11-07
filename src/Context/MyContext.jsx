import React, { createContext, useContext, useState } from 'react'
import { ShopInfo } from '../pages/data'


const CartContext = createContext() /* context Api */


/* custom hook */
export const useContextMade = () => {
    return useContext(CartContext)
}



const GetHowManyItem = () => {
    let Count = {};
    for (const i in ShopInfo) {
        Count[i] = 0;
    }
    return Count
}


function MyContext({children}) {
    const [cartItems, setCartItems] = useState(GetHowManyItem())

    const AddItem = (id) => {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const RemoveItem = (id) => {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    };

    const RemoveAll = (id) => {
      setCartItems((prev) => ({ ...prev, [id]: 0 }));
    };
    const Cancel = () => {
      setCartItems(GetHowManyItem())
    }



    /* console.log(cartItems) */

    const GetTotalAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = ShopInfo.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      // Format the total to two decimal places
      return totalAmount.toFixed(2);;
    };

    const CheckOut = () => {
      let NewCartItem = {};
    
      for (const i in cartItems) {
        if (cartItems[i] > 0) {
          let itemInfo = ShopInfo.find((product) => product.id === Number(i));
          NewCartItem[i] = {
            item: itemInfo,
            quantity: cartItems[i],
            totalCost: cartItems[i] * itemInfo.price
          };
        }
      }
    
      return NewCartItem;
    }


    
    
    const MyValueReturn = {cartItems, AddItem, RemoveItem,RemoveAll, GetTotalAmount, CheckOut, Cancel}
  return (
    <CartContext.Provider value={MyValueReturn}>
      {children}
    </CartContext.Provider>
  )
}

export default MyContext
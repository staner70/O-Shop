import React, { useState, useEffect } from "react";
import ShoppingCartItem from '../../containers/ShoppingCartItem';
import ShoppingCartTotal from '../ShoppingCart/ShoppingCartTotal';

import PaymentModal from '../PaymentModal';

const ShoppingCart = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    console.log(items);
    console.log(price);
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    })
    
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (

    <div className="w-full tracking-wider">
      
      <div className="flex align-justify bg-bgred rounded-lg m-4">
        <div className="w-1/4 ">Produit</div>
        <div className="w-1/4">Prix</div>
        <div className="w-1/4">Quantité</div>
        <div className="w-1/4"></div>
      </div>
      
      {cart.map((item) => (
        <ShoppingCartItem 
          key={item.id}
          item={item}
        />
      ))}
 {cart.forEach((item) => {
      console.log((item.price)*(item.qty));
      <ShoppingCartTotal
          item={item} />
    })}
        
     
        
        TOTAL: {totalPrice} € TTC / ({totalItems} Articles)
        <div className="flex items-center">
          <PaymentModal />
        </div>
        

      </div>
  

  )
  
      
        
      
}
  export default ShoppingCart; 
   


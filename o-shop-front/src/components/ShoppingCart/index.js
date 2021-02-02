import React, { useState, useEffect } from "react";
import ShoppingCartItem from '../../containers/ShoppingCartItem';

import PaymentModal from '../PaymentModal';

const ShoppingCart = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    })
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (

    <div className="w-2/5	 tracking-wider ">
      
      <div className="flex align-justify bg-bgred rounded-lg m-4">
        <div className="w-2/6 ">Produit</div>
        <div className="w-1/6">Prix</div>
        <div className="w-1/4">Quantité</div>
        <div className="w-1/6">Sous-total</div>
        <div className="w-1/6"></div>

      </div>
      
      {cart.map((item) => (
        <ShoppingCartItem 
          key={item.id}
          item={item}
        />
      ))}  
            <div className="flex flex-col bg-bgred rounded-lg m4 h-28 m-auto items-center">

      <div className="flex bg-bgred rounded-lg m4 h-28 m-auto items-center">
        
        TOTAL: {totalPrice} € TTC / ({totalItems} Articles)
        </div>
        <div className="flex justify-items-center">
          <div className="w-1/3 flex m-auto justify-center">
          <PaymentModal />
          </div>
          <div className="w-1/3 flex m-auto justify-center">
          <PaymentModal />
          </div>
          <div className="w-1/3 flex m-auto justify-center">
          <PaymentModal />
          </div>
        </div>
      </div>
      </div>
      


  

  )
  
      
        
      
}
  export default ShoppingCart; 
   


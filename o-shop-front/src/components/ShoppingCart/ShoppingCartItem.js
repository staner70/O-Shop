import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const ShoppingCartItem = ({ item, adjustQty, removeFromCart }) => {

  const onChangeHandler = (e) => {
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className=" flex inline-block flex m-4" >
          <div className=" w-2/6 lg:w-1/2">{item.name}</div>
          <div className="w-1/6 lg:w-1/5">{item.price}€</div>

          <div className="w-1/4 lg:w-1/5">
                <input 
                    className="text-center w-10 b-3 rounded-lg"
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    value={item.qty}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="w-1/6 lg:invisible lg:w-0">{item.price*item.qty} €</div>

            
          <div className="w-1/6 lg:w-1/12"> 
            <FontAwesomeIcon 
                icon={faTrashAlt} 
                onClick={() => removeFromCart(item.id)}
                /></div>          
      </div>
  );
};

export default ShoppingCartItem; 


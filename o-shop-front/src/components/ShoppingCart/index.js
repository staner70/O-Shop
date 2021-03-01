import React, { useState, useEffect } from "react";
import ShoppingCartItem from '../../containers/ShoppingCartItem';
import { useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';


const ShoppingCart = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const dispatch= useDispatch();


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
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="tracking-wider h-4/5 bg-gray-100 h-screen">
        <div className="bg-white p-2 flex align-justify bg-cart rounded-b-xl mx-4 text-gray-500">
          <div className="w-2/6 lg:w-1/2 ">Produit</div>
          <div className="w-1/6 lg:w-1/5">Prix</div>
          <div className="w-1/4 lg:w-1/5">Quantité</div>
          <div className="lg:invisible sm:invisible md:invisible xl:visible lg:w-0 xl:w-1/6">Sous-total</div>
          <div className="w-1/6 lg:w-1/12"></div>

        </div>
        <div className="h-full bg-gray-100">

          <div className="h-5/6 bg-gray-100 overscroll-contain ">
            {cart.map((item) => (
              <ShoppingCartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className="bg-white flex flex-col bg-cart rounded-lg h-64 mx-4 pt-2 items-center sticky bottom-0 right-0 w-full">
          <div className="flex flex-col justify-around bg-cart rounded-lg m-4 p-4 h-20 items-center w-full ">
            <div className="flex justify-around bg-cart rounded-lg h-10 items-center w-full">
              <div className="w-1/2 font-semibold text-green-500 flex justify-center">Dont TVA (20%):</div>
              <div className="w-1/2 flex justify-center font-semibold text-green-500 ">{((totalPrice) * (0.2)).toFixed(2)} € TTC </div>
            </div>
            <div className=" flex justify-around bg-cart rounded-lg h-10 items-center w-full ">
              <div className="flex text-center font-semibold text-blue-400">Total:</div>
              <div className="flex font-semibold text-blue-400">{totalPrice} € TTC </div>
            </div>
          </div>
          <div className="flex">({totalItems} Articles)</div>
          <div className="flex flex-col justify-items-center  w-full">

            <div className="w-5/6  my-4 flex m-auto justify-center">
              <button
                className="bg-blue-400 w-full text-white active:bg-pink-600 font-normal uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => dispatch({ type: 'SEND_PAYMENT_TO_API' })}
              >
                <FontAwesomeIcon icon={faCreditCard} className="mx-4" />
                valider Paiement
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  )   
};


  export default ShoppingCart; 
   


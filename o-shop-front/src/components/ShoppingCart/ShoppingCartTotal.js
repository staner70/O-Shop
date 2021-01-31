import React from "react";

const ShoppingCartTotal = ({ total }) => {

  return (
    <div className="bg-bgred rounded-lg m4 content-end h-28">
               <div className="w-1/4">{total} € TTC</div>

                </div>
  );
};

export default ShoppingCartTotal; 


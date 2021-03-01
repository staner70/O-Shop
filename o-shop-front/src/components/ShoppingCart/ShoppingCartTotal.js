import React from "react";
import PropTypes from 'prop-types';

const ShoppingCartTotal = ({ total }) => {

  return (
    <div className="bg-bgred rounded-lg m4 content-end h-28">
               <div className="w-1/4">{total} € TTC</div>

                </div>
  );
};

ShoppingCartTotal.propTypes = {
  total: PropTypes.number,}
  
export default ShoppingCartTotal; 


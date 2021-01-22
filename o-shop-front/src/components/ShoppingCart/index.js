import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
const ShoppingCart = () => (

  
  <div className="w-full tracking-wider">
    
    
    
    
      
      <div className="flex align-justify bg-bgred rounded-lg m-4">
        <div className="w-1/5 ">Produit</div>
        <div className="w-1/5">Prix</div>
        <div className="w-1/5">Quantité</div>
        <div className="w-1/5">Total</div>
        <div classNaùe="w-1/5"></div>
      </div>
      



      
      <div className=" flex inline-block flex m-4 " >
          <div className=" w-1/5 ">NameProduct</div>
          <div className="w-1/5">€59.99 </div>
          <div className="w-1/5">
            <a href="#" className="m-1"><FontAwesomeIcon icon={faMinusSquare} /></a>
            <input type="numeric" value="3" className="text-center w-10 b-3 rounded-lg	"/>
            <a href="#" className="m-1 "><FontAwesomeIcon icon={faPlusSquare} /></a></div>
          <div className="w-1/5"> €182.95   </div> 
          <div className="w-1/5"> <FontAwesomeIcon icon={faTrashAlt} /></div>          
      </div>

      

     
    
     
    
    

      <div className="bg-bgred rounded-lg m4 content-end h-28">TOTAL</div>




  </div>
      
        
      
) 
  export default ShoppingCart; 
   


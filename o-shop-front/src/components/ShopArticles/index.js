import React, { useEffect } from 'react';
import Article from './Article';
import SearchBar from '../../containers/SearchBar';

const ShopArticles = ({changeSearchField, searchInputValue, products, getProducts}) => {
    
    useEffect(() => {
        getProducts();
    },[]);

    return  (
    
    <div className="bg-white flex flex-wrap h-screen">
    <SearchBar 
    onChange={changeSearchField} // sera appelé avec value + name
    searchInputValue={searchInputValue}/>
    <div className="flex p-1 flex-wrap overflow-auto h-full">

    {products.map((product) => (
        <>
         <div className="mx-auto flex justify-evenly">
         <div
           className="rounded-lg shadow-lg p-4 flex flex-col items-center"
         >
           <img
             className="object-cover object-center rounded-lg w-48 h-40"
             src={product.image}
             alt=""
           />
           <div className="my-4 flex justify-between items-center">
             <div className="flex items-center">
             
             </div>
             <div className="flex font-bold text-3xl text-center px-4 h-full">
             
               <p>{product.price}</p>
               <p className="text-sm self-start">€</p>
             </div>
           </div>
           <button
             className="uppercase hover:text-white focus:ring-blue-300 hover:bg-blue-500 undefined bg-blue-300 ring-2 focus:ring-offset-2 ring-transparent transform duration-300 ease-in-out focus:outline-none text-white p-4 w-full rounded-lg font-semibold"
           >
             {product.name}
           </button>
         </div>
       </div>
        </>
    ))}
    </div>
</div>

)
    
};


export default ShopArticles;

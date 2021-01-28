import React from "react";

const Article = ({ article, addToCart }) => {
  return (
    <>
         <div className="mx-auto flex justify-evenly">
         <div
           className="rounded-lg shadow-lg p-4 flex flex-col items-center"
         >        

           <img
             className="object-cover object-center rounded-lg w-48 h-40"
             src={article.image}
             alt={article.name}
           />
           <div className="my-4 flex justify-between items-center">
             <div className="flex items-center">
             
             </div>
             <div className="flex font-bold text-3xl text-center px-4 h-full">
             
               <p>{article.price}</p>
               <p className="text-sm self-start">€</p>
             </div>
             <div className="flex font-bold text-3xl text-center px-4 h-full">
             <p className="text-xs self-start">Stock:</p>

               <p className="text-xs">{article.quantity}</p>
             </div>
           </div>
           <button
             className="uppercase hover:text-white focus:ring-blue-300 hover:bg-blue-500 undefined bg-blue-300 ring-2 focus:ring-offset-2 ring-transparent transform duration-300 ease-in-out focus:outline-none text-white p-4 w-full rounded-lg font-semibold"
             id={article.id}
             onClick={() => addToCart(article.id)}
            
           >
             {article.name}
           </button>
         </div>
       </div>
        </>
  );
};


export default Article;

import React from "react";

const Article = ({ article, addToCart }) => {
  return (
    <>
         <div className="mx-auto flex justify-evenly">
         <div
           className="rounded-lg shadow-lg p-2 flex flex-col items-center h-72 m-2	"
         >        

           <img
             className="object-cover object-center rounded-lg w-60 h-40 	"
             src={article.image}
             alt={article.name}
           />
           <div className="my-4 flex justify-between items-center">
             <div className="flex items-center">
             
             </div>
             <div className="flex text-m font-bold text-center px-4 h-full">
             
               <p>{article.price}</p>
               <p className="text-sm self-start">€</p>
             </div>
             <div className="flex font-bold text-3xl text-center px-4 h-full">
             <p className="text-xs self-start">Stock:</p>

               <p className="text-xs">{article.quantity}</p>
             </div>
           </div>
           <span
             className="uppercase hover:text-white focus:ring-blue-300 hover:bg-blue-500 undefined bg-blue-300 ring-2 focus:ring-offset-2 ring-transparent transform duration-300 ease-in-out focus:outline-none text-white p-2 w-full rounded-lg font-semibold"
             id={article.id}
             onClick={() => addToCart(article.id)}
            
           >
             {article.name}
           </span>
         </div>
       </div>
        </>
  );
};


export default Article;

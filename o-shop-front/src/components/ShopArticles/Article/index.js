import React from 'react';


const Article = () => (
    <div className="mx-auto flex justify-evenly">
    <div
      className="rounded-lg shadow-lg p-4 flex flex-col items-center"
    >
      <img
        className="object-cover object-center rounded-lg w-48 h-40"
        src="https://images.unsplash.com/photo-1556228852-80b6e5eeff06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
        alt=""
      />
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center">
        
        </div>
        <div className="flex font-bold text-3xl text-center px-4 h-full">
        
          <p>99</p>
          <p className="text-sm self-start">€</p>
        </div>
      </div>
      <button
        className="uppercase hover:text-white focus:ring-blue-300 hover:bg-blue-500 undefined bg-blue-300 ring-2 focus:ring-offset-2 ring-transparent transform duration-300 ease-in-out focus:outline-none text-white p-4 w-full rounded-lg font-semibold"
      >
        Ajouter au Panier
      </button>
    </div>
  </div>
);


export default Article;

import React, { useState } from 'react';
import AdminField from './AdminField';
import FileField from './AdminField/FileField';

import PropTypes from 'prop-types';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductModal = ({
    handleProduct, //handleLogin
    changeProductField, // changeField
    name, description, price, quantity,
    image, shop, category, categories,
    
}) => {
    const [showModal, setShowModal] = useState();
    const handleProductFormSubmit = (evt) => {
        evt.preventDefault();
        handleProduct();
    };
    
    return (
        <>

            <button
                className="bg-blue-400 text-white active:bg-pink-600 font-normal uppercase text-sm p-6 rounded shadow hover:shadow-lg outline-none focus:outline-none m-4"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
            >
                Ajouter un Produit
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
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
                            
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Ajouter un Produit               </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() =>setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleProductFormSubmit}>
                                        <AdminField
                                            name="name"
                                            type="text"
                                            placeholder="Nom du Produit"
                                            onChange={changeProductField} // sera appelé avec value + name
                                            value={name}
                                        />

                                        <select className="box-content p-4 border-4 m-2 outline-none rounded-md bg-white"  value={category} onChange={(event)=>{changeProductField(event.target.value, "category");}} >
                                            
                                            <option value="" >---- choisissez une categorie----</option>
                                            {categories.map((category)=>(
                                                <option value={category.name} >{category.name}</option>
                                            ))}
                                        </select>
                                        
                                        <AdminField
                                            name="price"
                                            type="number"
                                            min="1"
                                            placeholder="Prix"
                                            onChange={changeProductField} // sera appelé avec value + name
                                            value={price}
                                        />

                                        <AdminField
                                            name="description"
                                            type="text"
                                            placeholder="Description"
                                            onChange={changeProductField} // sera appelé avec value + name
                                            value={description}
                                        />

                                        <AdminField
                                            name="quantity"
                                            type="number"
                                            placeholder="Quantite en stock"
                                            onChange={changeProductField} // sera appelé avec value + name
                                            value={quantity}
                                        />
                                        
                                        <AdminField
                                            name="image"
                                            type="text"
                                            placeholder="Lien de l'image"
                                            onChange={changeProductField} // sera appelé avec value + name
                                            value={image}
                                        />

                                        <AdminField
                                            name="shop"
                                            type="text"
                                            placeholder="Magasin"
                                            onChange={changeProductField} // sera appelé avec value + name
                                            value={shop}
                                        />
                                            <button 
                                                type="submit"
                                                className="box-content	px-12 py-3 border-4 rounded-md bg-blue-400 text-white shadow hover:shadow-lg "
                                            >
                                                OK
                                            </button>
                                    </form>
                                </div>
                                
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="items-center mx-4 px-6 h-10 hover:bg-gray-100 hover:text-gray-400 bg-blue-400 focus:ring-gray-200 text-white ring ring-transparent text-xl rounded-md uppercase font-normal focus:outline-none"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};
ProductModal.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    changeProductField: PropTypes.func.isRequired,
    handleProduct: PropTypes.func.isRequired,

};

ProductModal.defaultProps  = {  
    image: "https://i.ibb.co/fSNffyY/logo.png"};

export default ProductModal;
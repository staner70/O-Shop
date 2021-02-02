import React, { useEffect, useState } from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import ProductModal from '../../containers/ProductModal';
import Field from './Field';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProducts = ({products, 
    getProducts, 
    deleteProduct, 
    editProduct,
    handleProductEdit, //handleLogin
    changeAdminProductField, // changeField
    fieldName, 
    editDescription, 
    editPrice, 
    editQuantity, 
    editShop, 
    editCategory, 
    editImage
}) => {
    
        useEffect(() => {
        getProducts();
        
    },[]);

    const handleProductEditFormSubmit = (evt) => {
        evt.preventDefault();
        handleProductEdit();
        console.log(handleProductEdit);
    };
    const isAdmin = localStorage.getItem('isAdmin');
    const [showModal, setShowModal] = useState();


    if(isAdmin == "true"){
        return(
            <>
                < Header />
                < NavAdmin />
               
                <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className=" flex shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="w-5/6 divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nom
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Prix (€)
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Magasin
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Quantité
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
        
                            {products.map((product) => (
                                <tr className="text-left">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {product.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {product.describe}    
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {product.price}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-gray-900">
                                            <img className=" " src={""} alt={product.name} />
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Chez momo
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {product.quantite}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button id={product.id} 
                                        onClick={() => {editProduct(product.id);
                                            setShowModal(true) }}
                                        
                                        className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button id={product.id}
                                        onClick={() => deleteProduct(product.id)} 
                                        className=" text-indigo-600 hover:text-indigo-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                        </table>
                        <div>
                            <ProductModal />
                            <>

            <button
                className="bg-bgred invisible text-white active:bg-pink-600 font-bold uppercase text-sm p-6 rounded shadow hover:shadow-lg outline-none focus:outline-none m-4"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
            >
                Modifier Produit
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
                                        Modifier le Produit               </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleProductEditFormSubmit}>
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Nom du Produit"
                                            onChange={changeAdminProductField} // sera appelé avec value + name
                                            value={fieldName}
                                        />

                                        <Field
                                            name="image"
                                            type="text"
                                            placeholder="Image"
                                            onChange={changeAdminProductField} // sera appelé avec value + name
                                            value={editImage}
                                        />      

                                        <Field
                                            name="category"
                                            type="text"
                                            placeholder="Categorie"
                                            onChange={changeAdminProductField} // sera appelé avec value + name
                                            value={editCategory}
                                        />
                                        
                                        <Field
                                            name="price"
                                            type="number"
                                            min="1"
                                            placeholder="Prix"
                                            onChange={changeAdminProductField} // sera appelé avec value + name
                                            value={editPrice}
                                        />
                                        <Field
                                            name="description"
                                            type="text"
                                            placeholder="Description"
                                            onChange={changeAdminProductField} // sera appelé avec value + name
                                            value={editDescription}
                                        />

                                        <Field
                                            name="quantity"
                                            type="number"
                                            placeholder="Quantite en stock"
                                            onChange={changeAdminProductField} // sera appelé avec value + name
                                            value={editQuantity}
                                        />
                                        
                                        <Field
                                            name="shop"
                                            type="text"
                                            placeholder="Magasin"
                                            onChange={changeAdminProductField} // sera appelé avec value + name
                                            value={editShop}
                                        />
                                            <button 
                                                type="submit"
                                                className="box-content	px-12 py-3 border-4 rounded-md bg-bgred "
                                            >
                                                OK
                                            </button>
                                    </form>
                                </div>
                                
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
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
                        </div>
                    </div>
                    </div>
                </div>
                </div>
          
            </>
        )}
        return (<AccessForbidden />)
                            };

    

export default AdminProducts;
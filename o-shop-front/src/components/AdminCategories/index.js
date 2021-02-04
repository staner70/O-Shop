import React, { useEffect, useState } from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import CategoryModal from '../../containers/CategoryModal';
import Field from './Field';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminCategories = ({
    categories, 
    getCategories, 

    deleteCategory,

    editCategory, 

    handleCategoryEdit,
    changeAdminCategoryField,

    editCategoryName,
    editCategoryColor,


}) => {
    useEffect(() => {
        getCategories();
    },[]);

    const handleCategoryEditFormSubmit = (evt) => {
        evt.preventDefault();
        handleCategoryEdit();
        console.log(handleCategoryEdit);
    };
    const [showModal, setShowModal] = useState();
    const isAdmin = localStorage.getItem('isAdmin');

    if(isAdmin == "true"){
        return(
        <>
            < Header />
            < NavAdmin />
        
            <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className=" flex shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="w-2/4 divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nom
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Couleur
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

                        {categories.map((category) =>(
                            <tr className="text-left">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {category.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full w-6 h-6"
                                     style={{backgroundColor: category.color}}></div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button id={category.id} 
                                        onClick={() => {editCategory(category.id);
                                        setShowModal(true) }}
                                        className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button id={category.id}
                                    onClick={() => deleteCategory(category.id)} 
                                    className="text-indigo-600 hover:text-indigo-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    </table>
                    <div>
                        <CategoryModal />

                        {/* Modale pour edition du produit */}
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
                                    <form onSubmit={handleCategoryEditFormSubmit}>
                                        <Field
                                            name="editCategoryName"
                                            type="text"
                                            placeholder="Nom de la categorie"
                                            onChange={changeAdminCategoryField} 
                                            value={editCategoryName}
                                        />

                                        <Field
                                            name="editCategoryColor"
                                            type="color"
                                            placeholder="Color"
                                            onChange={changeAdminCategoryField}
                                            value={editCategoryColor}
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

        {/* Fin de la modale Edit */}
                    </div>
                </div>
                </div>
            </div>
            </div>
    
        </>
    )} return (<AccessForbidden />)
}

export default AdminCategories;



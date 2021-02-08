import React, { useEffect, useState } from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import CategoryModal from '../../containers/CategoryModal';
import Field from './Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import SizeForbidden from '../SizeForbidden';
import { useConfirmationDialog } from 'material-ui-confirmation';
import Spinner from '../Spinner';


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

    showSpinner,
}) => {
    const { getConfirmation } = useConfirmationDialog();

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
        <SizeForbidden />
            < Header />
            < NavAdmin />
            {showSpinner && <Spinner />}

            <div className="w-full	">
                <div className= "flex">
                    <div className="w-4/5 h-screen">
                                <div className="flex align-justify bg-gray-50 ">
                                    
                                    <div className="w-1/4 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider font-bold">
                                        Nom
                                    </div>
                                    <div className="w-1/4 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider font-bold">
                                        Couleur
                                    </div>
                                    
                                    <div className="w-1/4 px-6 py-3 text-xs font-medium">
                                        <span className="sr-only">Edit</span>
                                    </div>
                                    <div className="w-1/4 px-6 py-3 text-xs font-medium">
                                        <span className="sr-only">Delete</span>
                                    </div>
                                    
                                </div>
                               
                              <div className="bg-white divide-y divide-gray-200">

                            {categories.map((category) =>(
                                <div className="w-full flex align-justify ">
                                    
                                    <div className="w-1/4 px-6 py-3  text-xs font-medium text-gray-800 uppercase tracking-wider">
                                        {category.name.toUpperCase()}
                                    </div>
                                
                                    <div className="w-1/4 px-6 py-4 ">
                                        <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full w-6 h-6"
                                     style={{backgroundColor: category.color}}></div>
                                </div>
                                <div className="w-1/4 px-6 py-4   text-sm font-medium">
                                    <button
                                        className="text-indigo-600 hover:text-indigo-900"
                                        id={category.id} 
                                        onClick={() => {editCategory(category.id);
                                        setShowModal(true) }}
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </div>
                                <div className="w-1/4 px-6 py-4   text-sm font-medium">
                                <button
                                                onClick={() => {
                                                    getConfirmation({
                                                        title: 'Voulez-vous supprimer cette categorie ?',
                                                        body: 'Aucun produit ne doit appartenir a cette categorie pour etre supprime',
                                                        onAccept: () => {
                                                            deleteCategory(category.id);
                                                        },

                                                        dialogProps: {
                                                            disableBackdropClick: true,
                                                        },
                                                        acceptButtonProps: {
                                                            autoFocus: false,
                                                            variant: 'contained',
                                                        },
                                                    });
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                    {/* <button 
                                        id={category.id}
                                        onClick={() => deleteCategory(category.id)} 
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button> */}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>    
                    <div className="w-1/5" >
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

        {/* Fin de la modale Edit */}
                    </div>
                </div>
                
            </div>
            
    
        </>
    )} return (<AccessForbidden />)
}

export default AdminCategories;



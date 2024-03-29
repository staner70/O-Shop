import React, { useEffect, useState } from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import ProductModal from '../../containers/ProductModal';
import Field from './Field';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import SizeForbidden from '../SizeForbidden';
import { useConfirmationDialog } from 'material-ui-confirmation';
// import { getCategoriesFromApi } from '../../store/actions';
import Spinner from '../Spinner';



const AdminProducts = ({
    products, getProducts,
    deleteProduct,
    categories,getCategories,

    handleProductEdit, //handleLogin
    changeAdminProductField, // changeField

    fieldName,
    editProduct,
    editDescription,
    editPrice,
    editQuantity,
    editShop,
    editCategory,
    editImage,

    showSpinner,
}) => {
    const { getConfirmation } = useConfirmationDialog();

    useEffect(() => {

        getProducts();
        getCategories();
    }, []);

    const handleProductEditFormSubmit = (evt) => {
        evt.preventDefault();
        handleProductEdit();
    };
    const isAdmin = localStorage.getItem('isAdmin');
    const [showModal, setShowModal] = useState();

    if (isAdmin == "true") {
        return (
            <>
                <SizeForbidden />
                < Header />
                < NavAdmin />
                {showSpinner && <Spinner />}

                <div className="w-full ">
                    <div className="flex">
                        <div className=" w-5/6 h-screen">
                            <div className=" flex align-justify bg-gray-50">
                                <div className="w-4/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider font-bold">
                                    Nom
                                </div>
                                <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider font-bold">
                                    Prix (€)
                                </div>
                                <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider font-bold">
                                    Magasin
                                </div>
                                <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider font-bold">
                                    Quantité
                                </div>
                                <div className="w-1/12 px-6 py-3 text-xs font-medium">
                                    <span className="sr-only">Edit</span>
                                </div>
                                <div className="w-1/12 px-6 py-3 text-xs font-medium">
                                    <span className="sr-only">Delete</span>
                                </div>
                            </div>
                            <div className="bg-white divide-y divide-gray-200 overflow-hidden overflow-y-auto h-3/4">
                                {products.map((product) => (
                                    <div className="w-full flex alig-justify	">
                                        <div className="w-4/12 px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {product.name.toUpperCase()}
                                        </div>
                                        <div className="w-2/12 px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {product.price}
                                        </div>
                                        <div className="w-2/12 px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            O'Shop
                                        </div>
                                        <div className="w-2/12 px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {product.quantity}
                                        </div>
                                        <div className="w-1/12 px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            <button
                                                className="text-indigo-600 hover:text-indigo-900"
                                                id={product.id}
                                                onClick={() => {
                                                    editProduct(product.id);
                                                    setShowModal(true)
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                        </div>
                                        <div className="w-1/12 px-6 py-4 whitespace-nowrap text-sm">
                                            <button
                                                onClick={() => {
                                                    getConfirmation({
                                                        title: 'Voulez-vous supprimer ce produit ?',
                                                        onAccept: () => {
                                                            deleteProduct(product.id);
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
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/6">
                            <ProductModal categories={categories} />
                            <>
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
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                                                        <h3 className="text-3xl font-semibold">Modifier le Produit</h3>
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
                                                                name="editName"
                                                                type="text"
                                                                placeholder="Nom du Produit"
                                                                onChange={changeAdminProductField}
                                                                value={fieldName}
                                                            />

                                                            <Field
                                                                name="editPrice"
                                                                type="number"
                                                                min="1"
                                                                placeholder="Prix"
                                                                onChange={changeAdminProductField}
                                                                value={editPrice}
                                                            />
                                                            
                                                            <select className="box-content p-4 border-4 m-2 outline-none rounded-md bg-white w-5/6"  value={editCategory} onChange={(event)=>{changeAdminProductField(event.target.value, "editCategory");}} >
                                            
                                                                {categories.map((category)=>(
                                                                    <option value={category.name} >{category.name}</option>
                                                                ))}
                                                            </select>

                                                            <Field
                                                                name="editDescription"
                                                                type="text"
                                                                placeholder="Description"
                                                                onChange={changeAdminProductField}
                                                                value={editDescription}
                                                            />

                                                            <Field
                                                                name="editQuantity"
                                                                type="number"
                                                                placeholder="Quantite en stock"
                                                                onChange={changeAdminProductField}
                                                                value={editQuantity}
                                                            />
                                                            
                                                            <Field
                                                                name="editImage"
                                                                type="text"
                                                                placeholder="Image"
                                                                onChange={changeAdminProductField}
                                                                value={editImage}
                                                            />

                                                            <Field
                                                                name="shop"
                                                                type="text"
                                                                placeholder="Magasin"
                                                                onChange={changeAdminProductField}
                                                                value={editShop}
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
                            {/* Fin de la modale Edit */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (<AccessForbidden />)
};


export default AdminProducts;
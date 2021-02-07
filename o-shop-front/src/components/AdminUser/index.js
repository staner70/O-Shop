import React, {useEffect, useState} from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import UserModal from '../../containers/UserModal';
import Field from './Field';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import SizeForbidden from '../SizeForbidden';
import { useConfirmationDialog } from 'material-ui-confirmation';
// import { getRoleFromApi } from '../../store/actions';
import Spinner from '../Spinner';


const AdminUser = ({
    users, getUsers, 
    deleteUser,
    roles, getRoles,

    handleUserEdit, //handleLogin
    changeAdminUserField, // changeField

    editUser,
    editLastName,
    editFirstName,
    editUserName,
    editPassword,
    editRole,
    editShop,
    showSpinner,
}) => {
    const { getConfirmation } = useConfirmationDialog();

    useEffect(()=>{
        getUsers();
        getRoles();
    },[]);

    const handleUserEditFormSubmit = (evt) => {
        evt.preventDefault();
        handleUserEdit();
        console.log(handleUserEdit);
    };
    const isAdmin = localStorage.getItem('isAdmin');
    const [showModal, setShowModal] = useState();

    if(isAdmin == "true"){
        return (
            <>
                <SizeForbidden />
                < Header />
                < NavAdmin />
                {showSpinner && <Spinner />}

                <div className="w-full">
                    <div className= "flex">
                        <div className= "w-5/6">
                            <div className="flex align-justify bg-gray-50">
                                <div  className="w-1/6 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Prénom
                                </div>
                                <div  className="w-1/6 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nom
                                </div>
                                <div className="w-1/6 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Utilisateur
                                </div>
                                <div  className="w-1/6 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Permission
                                </div>
                                <div className="w-1/6 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Magasin
                                </div>
                                <div className="w-1/6 px-6 py-3">
                                    Edit
                                </div>
                                <div  className="w-1/6 px-6 py-3">
                                    Delete
                                </div>
                            </div>
                                
                            <div className="  bg-white divide-y divide-gray-200">
                                
                                {users.map((user) => (
                                    <div className="w-full flex align-justify">
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap">
                                            
                                                {user.first_name}
                                            
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap">
                                            {user.last_name}
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.username}
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap">
                            
                                            {user.role}
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            O'Shop
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button
                                                id={user.id}
                                                onClick={() => {
                                                    editUser(user.id);
                                                    setShowModal(true)
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                            <button
                                                onClick={() => {
                                                    getConfirmation({
                                                        title: 'Voulez-vous supprimer cet utilisateur ?',
                                                        onAccept: () => {
                                                            deleteUser(user.id);
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
                                            
                                            {/* <button  id={user.id}
                                            onClick={() => deleteUser(user.id)}  
                                            className="text-gray-400 hover:text-indigo-900"><FontAwesomeIcon icon={faTrashAlt} /></button> */}
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                        <div className="w-1/6">
                            <UserModal roles={roles} />
                            <>
                                {/* Modale pour edition du produit */}
                                <button
                                    className="bg-bgred invisible text-white active:bg-pink-600 font-bold uppercase text-sm p-6 rounded shadow hover:shadow-lg outline-none focus:outline-none m-4"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                    onClick={() => setShowModal(true)}
                                >
                                    Modifier Utilisateur
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
                                                        <h3 className="text-3xl font-semibold">Modifier l'utilisateur</h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                                        </button>
                                                    </div>

                                                    {/*body*/}
                                                    <div className="relative p-6 flex-auto">
                                                        <form onSubmit={handleUserEditFormSubmit}>
                                                            <Field
                                                                name="editUserName"
                                                                type="text"
                                                                placeholder="Username"
                                                                onChange={changeAdminUserField}
                                                                value={editUserName}
                                                            />

                                                            <Field
                                                                name="editFirstName"
                                                                type="text"
                                                                placeholder="Prénom"
                                                                onChange={changeAdminUserField}
                                                                value={editFirstName}
                                                            />

                                                            <Field
                                                                name="editLastName"
                                                                type="text"
                                                                placeholder="Nom"
                                                                onChange={changeAdminUserField}
                                                                value={editLastName}
                                                            />

                                                            {/* <Field
                                                                name="password"
                                                                type="password"
                                                                placeholder="Mot de passe"
                                                                onChange={changeAdminUserField}
                                                                value={editPassword}
                                                            /> */}
                                                            <select  value={editRole} onChange={(event)=>{changeAdminUserField(event.target.value, "editRole");}} >
                                                                {roles.map((role)=>(
                                                                    <option value={role.name} >{role.name}</option>
                                                                ))}
                                                            </select>
                                                            {/* <Field
                                                                name="editRole"
                                                                type="text"
                                                                placeholder="Role"
                                                                onChange={changeAdminUserField}
                                                                value={editRole}
                                                            /> */}

                                                            <Field
                                                                name="editShop"
                                                                type="text"
                                                                placeholder="Magasin"
                                                                onChange={changeAdminUserField}
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
                            {/* Fin de la modale Edit */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (<AccessForbidden />)
};

export default AdminUser;
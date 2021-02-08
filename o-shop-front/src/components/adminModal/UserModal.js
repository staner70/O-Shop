import React, { useState } from 'react';
import AdminField from './AdminField';
import PropTypes from 'prop-types';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UserModal = ({
    handleUser, //handleLogin
    changeUserField, // changeField
    username,
    first_name,
    last_name,
    password,
    role,
    shop,
    isDone,
    roles

}) => {
    const [showModal, setShowModal] = useState();
    const handleUserFormSubmit = (evt) => {
        evt.preventDefault();
        handleUser();
        console.log(handleUser);
    };

    return (
        <>
            <button
                className="bg-blue-400 text-white active:bg-pink-600 font-normal uppercase text-sm p-6 rounded shadow hover:shadow-lg outline-none focus:outline-none m-4 "
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
            >
                Ajouter Utilisateur
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
                                    <h3 className="text-3xl font-semibold">Ajouter Utilisateur</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleUserFormSubmit}>
                                        <AdminField
                                            name="username"
                                            type="text"
                                            placeholder="Username"
                                            onChange={changeUserField} // sera appelé avec value + name
                                            value={username}
                                        />

                                        <AdminField
                                            name="first_name"
                                            type="text"
                                            placeholder="Prénom"
                                            onChange={changeUserField} // sera appelé avec value + name
                                            value={first_name}
                                        />

                                        <AdminField
                                            name="last_name"
                                            type="text"
                                            placeholder="Nom"
                                            onChange={changeUserField} // sera appelé avec value + name
                                            value={last_name}
                                        />

                                        <AdminField
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            onChange={changeUserField} // sera appelé avec value + name
                                            value={password}
                                        />

                                        <select className="box-content p-4 border-4 m-2 outline-none rounded-md bg-white"  value={role} onChange={(event)=>{changeUserField(event.target.value, "role");}} >
                                            
                                            <option value="" >---- choisissez une rôle----</option>
                                            {roles.map((role)=>(
                                                <option value={role.name} >{role.name}</option>
                                            ))}
                                        </select>
                                        
                                        <AdminField
                                            name="shop"
                                            type="text"
                                            placeholder="Magasin"
                                            onChange={changeUserField} // sera appelé avec value + name
                                            value={shop}
                                        />
                                        
                                            <button type="submit"
                                                className="box-content	px-12 py-3 border-4 rounded-md bg-blue-400 text-white shadow hover:shadow-lg ">
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
UserModal.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    shop: PropTypes.string.isRequired,
    changeUserField: PropTypes.func.isRequired,
    handleUser: PropTypes.func.isRequired,
  };

  
  

export default UserModal;
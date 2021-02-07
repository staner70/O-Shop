import React, {useEffect} from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import UserModal from '../../containers/UserModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import SizeForbidden from '../SizeForbidden';

const AdminUser = ({users, getUsers, deleteUser,roles, getRoles}) => {
    useEffect(()=>{
        getUsers();
        getRoles();
    },[]);
    const isAdmin = localStorage.getItem('isAdmin');
    if(isAdmin == "true"){
        return (
            <>
                      <SizeForbidden />

                < Header />
                < NavAdmin />
            
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
                                            
                                                {user.last_name}
                                            
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap">
                                            {user.first_name}
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
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900"><FontAwesomeIcon icon={faEdit} /></a>
                                        </div>
                                        <div className="w-1/6 px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                            <button  id={user.id}
                                            onClick={() => deleteUser(user.id)}  
                                            className="text-gray-400 hover:text-indigo-900"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                        <div className="w-1/6">
                            <UserModal roles={roles} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (<AccessForbidden />)
};

export default AdminUser;
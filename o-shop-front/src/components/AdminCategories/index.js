import React, { useEffect } from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import CategoryModal from '../../containers/CategoryModal';

const AdminCategories = ({categories, getCategories, deleteCategory}) => {
    useEffect(() => {
        getCategories();
    },[]);

    const isAdmin = localStorage.getItem('isAdmin');

    if(isAdmin == "true"){
        return(
        <>
            < Header />
            < NavAdmin />
        
            <div className="w-full	">
                    <div className="w-4/5">
                   
                        <div className=" w-full flex align-justify bg-gray-50 rounded-lg ">
                            
                            <div className="w-1/4 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nom
                            </div>
                            <div className="w-1/4 px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Couleur
                            </div>
                            
                            <div className="w-1/4 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Edit
                            </div>
                            <div className="w-1/4 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Delete
                            </div>
                            
                        </div>


                      
                                    
                              <div className="bg-white divide-y divide-gray-200">

                            {categories.map((category) =>(
                                <div className="w-full flex align-justify bg-gray-50 rounded-lg ">
                                    
                                        <div className="w-1/4 px-6 py-3  text-xs font-medium text-gray-900 uppercase tracking-wider">
                                            {category.name}
                                        </div>
                                    
                                    <div className="w-1/4 px-6 py-4 ">
                                        <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full w-6 h-6"
                                     style={{backgroundColor: category.color}}></div>
                                    </div>
                                    <div className="w-1/4 px-6 py-4   text-sm font-medium">
                                        <button 
                                        className="w-1/4 text-indigo-600 hover:text-indigo-900">Edit</button>
                                    </div>
                                    <div className="w-1/4 px-6 py-4   text-sm font-medium">
                                        <button id={category.id}
                                        onClick={() => deleteCategory(category.id)} 
                                        className="text-indigo-600 hover:text-indigo-900">Delete</button>
                                    </div>
                                </div>
                            ))}


                    <div>
                        <CategoryModal />
                    </div>
                </div>
                </div>
            </div>
            
    
        </>
    )} return (<AccessForbidden />)
}

export default AdminCategories;



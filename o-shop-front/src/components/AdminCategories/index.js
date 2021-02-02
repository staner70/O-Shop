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
                                    <button 
                                    className="text-indigo-600 hover:text-indigo-900">Edit</button>
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
                    </div>
                </div>
                </div>
            </div>
            </div>
    
        </>
    )} return (<AccessForbidden />)
}

export default AdminCategories;



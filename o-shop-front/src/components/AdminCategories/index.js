import React from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';

const AdminCategories = () => (
    <>
        < Header />
        < NavAdmin />
       
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class=" flex shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="w-2/4 divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nom
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Couleur
                    </th>
                    
                    <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Delete</span>
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr className="text-left">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">
                            Cooper
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">bleu </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
                    </td>
                    </tr>

                    {/* <!-- More items... --> */}
                    
                </tbody>
                </table>
                <div>
                    <button className="m-4 font-bold text-white shadow-md p-4 bg-bgred rounded-md">nouvel utilisateur</button>
                </div>
            </div>
            </div>
        </div>
        </div>
  
    </>
);

export default AdminCategories;
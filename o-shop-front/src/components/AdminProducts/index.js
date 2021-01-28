import React, { useEffect } from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';

const AdminProducts = ({products, getProducts, deleteProduct }) => {
    useEffect(() => {
        getProducts();
        
    },[]);
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
                    <th  scope="col" className  ="relative px-6 py-3">
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
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit{product.id}</a>
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
                    <button className="m-4 font-bold text-white shadow-md p-4 bg-bgred rounded-md">nouveau produit</button>
                </div>
            </div>
            </div>
        </div>
        </div>
  
    </>
)};

export default AdminProducts;
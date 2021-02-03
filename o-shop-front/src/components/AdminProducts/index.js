import React, { useEffect } from 'react';
import Header from '../Header';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';
import ProductModal from '../../containers/ProductModal';

const AdminProducts = ({products, getProducts, deleteProduct, EditProduct }) => {
    useEffect(() => {
        getProducts();
        
    },[]);
    const isAdmin = localStorage.getItem('isAdmin');


    if(isAdmin == "true"){
        return(
            <>
                < Header />
                < NavAdmin />
               
                
                    <div className="w-full ">
                        <div2 className=" w-full">
                                <div className=" flex   align-justify 	 bg-gray-50 rounded-lg ">
                                    
                                    <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider">
                                        Nom
                                    </div>
                                    <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider">
                                        Description
                                    </div>
                                    <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider">
                                        Prix (€)
                                    </div>
                                    <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider">
                                        Image
                                    </div>
                                    <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider">
                                        Magasin
                                    </div>
                                    <div className="w-2/12 px-6 py-3  text-xs font-medium text-gray-500 uppercase divacking-wider">
                                        Quantité
                                    </div>
                                    <div className="w-2/12 px-6 py-3 text-xs font-medium">
                                        Edit
                                    </div>
                                    <div className="w-2/12 px-6 py-3 text-xs font-medium">
                                        Delete
                                    </div>
                                    
                                </div>
                        <div1 className="bg-white divide-y divide-gray-200">
        
                                {products.map((product) => (
                                    <div className="w-full flex alig-justify	2">
                                       
                                            <div className="w-2/12">
                                                {product.name}
                                            </div>
                                       
                                        
                                            <div className=" w-2/12">
                                                {product.describe}    
                                        
                                        </div>
                                        <div className="w-2/12">
                                            {product.price}
                                        </div>
                                        <div className="w-2/12">
                                            <div className="">
                                                <img className=" " src={""} alt={product.name} />
                                            </div>
                                        </div>
                                        <div className="w-2/12">
                                            Chez momo
                                        </div>
                                        <div className="w-2/12">
                                            {product.quantite}
                                        </div>
                                        <div className="w-2/12">
                                            <button id={product.id} 
                                            onClick={() => EditProduct(product.id)}
                                            className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                        </div>
                                        <div className="w-2/12">
                                            <button id={product.id}
                                            onClick={() => deleteProduct(product.id)} 
                                            className=" ">Delete</button>
                                        </div>
                                    </div>
                                ))}
                            
                        </div1>
              </div2>
                        <div>
                            <ProductModal />
                        </div>
                    </div>
                 
          
            </>
        )}
        return (<AccessForbidden />)
                            };

    

export default AdminProducts;
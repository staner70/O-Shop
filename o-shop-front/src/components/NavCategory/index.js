import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ categories, getCategories }) => {
    useEffect(() => {
        getCategories();
    },[]);


    return (

        <nav className="flex bg-bgred flex-row flex-wrap p-2 w-full">
            <ul className="flex justify-start h-16 w-full overflow-x-auto overflow-y-hidden overflow-hidden">
                <li>
                    <button
                        className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                    >
                        ALL
        </button>
                </li>
                {categories.map((category) =>(

                <li>
                    <button
                        className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                    >
                        {category.name}
                        </button>
                </li>
                ))}

            </ul>
        </nav>
    )
}


export default Category;
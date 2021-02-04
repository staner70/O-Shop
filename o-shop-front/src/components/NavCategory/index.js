import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ categories, getCategories, getProducts}) => {
    useEffect(() => {
        getCategories();
    }, []);

    return (

        <nav className="flex bg-primary flex-row flex-wrap p-2 w-full">
            <ul className="flex  items-center	justify-start h-10 w-full overflow-x-auto overflow-y-hidden overflow-hidden">
            
                {categories.map((category) => (

                    <li>
                        <NavLink
                            activeClassName="focus:ring-blue-400 ring ring-transparent"
                            exact
                            onClick = {getProducts()}
                            to={`/home/category/${ category.name }`}
                            className="mx-2 m-4 py-2 px-4 h-14 hover:text-blue-400 bg-white focus:ring-gray-200 text-gray-500 ring ring-transparent text-l rounded-md uppercase font-normal focus:outline-none"
                        >
                            {category.name}
                        </NavLink>
                    </li>
                ))}

            </ul>
        </nav>
    )
}


export default Category;
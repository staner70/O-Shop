import React from 'react';
import { NavLink } from 'react-router-dom';

const NavAdmin = () => (
    <nav>
        <ul className=" flex flex-row flex-wrap m-1 bg-primary">
            <li className="m-4">
                <NavLink
                    activeClassName="focus:ring-blue-400 ring ring-transparent"
                    exact
                    to="/admin/user"
                    className="shadow-md p-2 bg-white rounded-md text-gray-400"
                >
                    Utilisateurs
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink
                    activeClassName="focus:ring-blue-400 ring ring-transparent"
                    exact
                    to="/admin/categories"
                    className="shadow-md p-2 bg-white rounded-md text-gray-400"
                >
                    Catégories
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink
                    activeClassName="focus:ring-blue-400 ring ring-transparent"
                    exact
                    to="/admin/products"
                    className="shadow-md p-2 bg-white rounded-md text-gray-400"
                >
                    Produits
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavAdmin;
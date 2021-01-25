import React from 'react';
import { NavLink } from 'react-router-dom';

const NavAdmin = () => (
    <nav>
        <ul className=" flex flex-row flex-wrap m-1 bg-bgred">
            <li className="m-4">
                <NavLink
                    activeClassName="focus:ring-gray-600 ring ring-transparent"
                    exact
                    to="/admin"
                    className="shadow-md p-2 bg-white rounded-md"
                >
                    Accueil
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink
                    activeClassName="focus:ring-gray-600 ring ring-transparent"
                    exact
                    to="/admin/user"
                    className="shadow-md p-2 bg-white rounded-md"
                >
                    Utilisateurs
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink
                    activeClassName="ring-gray-600 "
                    exact
                    to="/admin/categories"
                    className="shadow-md p-2 bg-white rounded-md"
                >
                    Catégories
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink
                    activeClassName="ring-gray-600 "
                    exact
                    to="/admin/products"
                    className="shadow-md p-2 bg-white rounded-md"
                >
                    Produits
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavAdmin;
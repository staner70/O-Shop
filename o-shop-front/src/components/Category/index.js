import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = (Categor) => (
    <nav className="flex bg-bgred flex-row flex-wrap p-2 w-full">
        <ul className="flex justify-start h-16 w-full overflow-x-auto overflow-y-hidden overflow-hidden">
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category
                </NavLink>
            </li>
            { }
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category2
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category3
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category4
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category5
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category6
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category7
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="border-black"
                    exact
                    to="/home"
                    className="mx-2 px-6 h-10 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none"
                >
                    Category8
                </NavLink>
            </li>

        </ul>
    </nav>
);


export default Category;
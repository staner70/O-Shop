import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfilModal from '../../containers/ProfilModal';



const Header = () => (
    <div className="flex bg-white flex-row flex-wrap p-1 w-full">
        <div className="flex justify-start items-center w-6/12">
            <NavLink
                exact
                to="/home/category/Accesoires"
                activeClassName="bg-gray-600 text-white focus:ring-blue-200"
                className="flex items-center mx-4 px-6 h-10 hover:bg-gray-100 hover:text-gray-400 bg-blue-400 focus:ring-gray-200 text-white ring ring-transparent text-xl rounded-md uppercase font-normal focus:outline-none">
                Caisse
            </NavLink>
            <NavLink
                exact
                to="/admin/user"
                activeClassName="bg-gray-600 text-white focus:ring-blue-200"
                className="flex items-center mx-4 px-6 h-10 hover:bg-gray-100 hover:text-gray-400 bg-blue-400 focus:ring-gray-200 text-white ring ring-transparent text-xl rounded-md uppercase font-normal focus:outline-none">
                Admin
            </NavLink>
        </div>

        <div className="flex justify-end w-6/12	 p-2">
            <ProfilModal />        
        </div>
    </div>
);


export default Header;

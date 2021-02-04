import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from 'react-live-clock';

import ProfilModal from '../../containers/ProfilModal';
import WeatherModal from '../WeatherModal';


const Header = () => (
    <div className="flex bg-white flex-row flex-wrap p-1 w-full">
        <div className="flex justify-start items-center w-4/12">
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
        <div className="flex justify-center w-4/12	 p-2">
        <Clock className="text-gray-400" format={'HH:mm'} ticking={true} timezone={'Europe/Paris'} />

        </div>
        <div className="flex justify-end w-4/12	 p-2">
            <WeatherModal />
            <ProfilModal />        
        </div>
    </div>
);


export default Header;

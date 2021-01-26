import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal';
import PaymentModal from '../PaymentModal';
import UserModal from '../../containers/UserModal';
import { NavLink } from 'react-router-dom';



const Header = () => (
    <div className="flex bg-gray-200 flex-row flex-wrap p-1 w-full">
        <div className="flex justify-start w-6/12">
            <NavLink
                exact
                to="/home"
                className="mx-4 px-6 h-12 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none">
                Caisse
            </NavLink>
            <NavLink
                exact
                to="/admin"
                className="px-6 h-12 hover:bg-gray-100 bg-white focus:ring-gray-200 text-gray-900 ring ring-transparent text-xl shadow-md rounded-md uppercase font-semibold focus:outline-none">
                Admin
            </NavLink>
        </div>

        <div className="flex justify-end w-6/12	 p-2">
        <UserModal />

            <PaymentModal />
            <Modal />        
        </div>
    </div>
);


export default Header;

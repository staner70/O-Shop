import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import LastSales from '../Admin/LastSales';
import MonthlySales from './MonthlySales';
import DailySales from './DailySales';
import NavAdmin from '../NavAdmin';
import AccessForbidden from '../AccessForbidden';


const Admin = () => {
  const isAdmin = localStorage.getItem('isAdmin');

if(isAdmin == "true"){
  return (
    <>
         <div>
              < Header />
              < NavAdmin />
             <div className="min-w-screen w-full  min-h-1/3 bg-gray-200 flex items-center justify-center px-5 py-5 -mx-2">
              <DailySales />
              <MonthlySales />
            </div>
              <LastSales />
            </div>)
    </>
  );
}
  return (<AccessForbidden />)
}

export default Admin;


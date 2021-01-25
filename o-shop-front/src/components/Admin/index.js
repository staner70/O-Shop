import React from 'react';
import Header from '../Header';
import LastSales from '../Admin/LastSales';
import MonthlySales from './MonthlySales';
import DailySales from './DailySales';
import NavAdmin from '../NavAdmin';


const Admin = () => (
  <>
  < Header />
  < NavAdmin />
    <div className="min-w-screen w-full  min-h-1/3 bg-gray-200 flex items-center justify-center px-5 py-5 -mx-2">
      <DailySales />
      <MonthlySales />
    </div>
    <LastSales />
  </>
);

export default Admin;


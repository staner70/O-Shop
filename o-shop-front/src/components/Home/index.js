import React from 'react';
import Header from '../Header';
import ShopArticles from '../../containers/ShopArticles';
import Category from '../../containers/NavCategory';
import ShoppingCart from '../../containers/ShoppingCart';

const Home = () => (
  <>
  < Header />
    <div className="flex">
      <div className="flex flex-col xl:w-3/5 lg:w-full md:w-full sm:w-full">
        <div className="bg-red-600">
          <Category />
     </div>
          <ShopArticles />
      </div>
      
        < ShoppingCart/>
      
    </div>
  </>
);

export default Home;
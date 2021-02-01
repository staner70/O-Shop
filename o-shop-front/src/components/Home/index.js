import React from 'react';
import HomeForbidden from '../HomeForbidden';
import Header from '../Header';
import ShopArticles from '../../containers/ShopArticles';
import Category from '../../containers/NavCategory';
import ShoppingCart from '../../containers/ShoppingCart';

const Home = () => {
  //Je regarde si mon parametre isAdmin existe en localstorage
  const isAdmin = localStorage.getItem('isAdmin');
  if(isAdmin == "true" || isAdmin == "false" ){
      return (
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
        </>)}
 return (<HomeForbidden />);

}

export default Home;
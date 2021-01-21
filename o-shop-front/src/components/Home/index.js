import React from 'react';
import Header from '../Header';
import ShopArticles from '../ShopArticles';


const Home = () => (
    <>
    < Header />
      <div className="flex">
        <div className="flex flex-col xl:w-3/5 lg:w-full md:w-full sm:w-full">
          <div className="bg-red-600">Menu
       </div>
          <div className="bg-white">
            <ShopArticles />
          </div>
        </div>
        <div className="bg-yellow-600 xl:w-2/5 xl:visible	lg:invisible md:invisible sm:invisible">2</div>
      </div>
    </>
);

export default Home;
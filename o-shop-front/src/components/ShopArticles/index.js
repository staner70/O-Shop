import React from 'react';
import Article from '../../containers/Article';
import Spinner from '../Spinner';

const ShopArticles = ({articles,  showSpinner}) => {
  
    return  (
    
    <div className="bg-primary flex h-screen ">
      <div className="flex p-1 flex-wrap overflow-hidden overflow-y-auto h-5/6 justify-center">
        {showSpinner && <Spinner />}

        {articles.map((article) => (
          <Article key={article.id} article={article} />  
        ))}
      </div>
    </div>

)
    }


export default ShopArticles;

import React from 'react';
import Article from '../../containers/Article';

const ShopArticles = ({articles}) => {
  
    return  (
    
    <div className="bg-primary flex ">
    
    <div className="flex p-1 flex-wrap overflow-auto h-screen justify-center">

    {articles.map((article) => (
      <Article key={article.id} article={article} />  
    ))}
    </div>
</div>

)
    }


export default ShopArticles;

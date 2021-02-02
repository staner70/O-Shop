import React from 'react';
import SearchBar from '../../containers/SearchBar';
import Article from '../../containers/Article';

const ShopArticles = ({changeSearchField, searchInputValue, articles}) => {
  
    return  (
    
    <div className="bg-white flex flex-wrap h-screen">
    <SearchBar />
    
    <div className="flex p-1 flex-wrap overflow-auto h-full">

    {articles.map((article) => (
      <Article key={article.id} article={article} />  
    ))}
    </div>
</div>

)
    }


export default ShopArticles;

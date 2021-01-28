import React, { useEffect } from 'react';
import SearchBar from '../../containers/SearchBar';
import Article from '../../containers/Article';

const ShopArticles = ({changeSearchField, searchInputValue, articles, getProducts}) => {
    
    useEffect(() => {
        getProducts();
    },[]);
      

    return  (
    
    <div className="bg-white flex flex-wrap h-screen">
    <SearchBar 
    onChange={changeSearchField} // sera appelé avec value + name
    searchInputValue={searchInputValue}/>
    <div className="flex p-1 flex-wrap overflow-auto h-full">

    {articles.map((article) => (
      <Article key={article.id} article={article} />  
    ))}
    </div>
</div>

)
    }


export default ShopArticles;

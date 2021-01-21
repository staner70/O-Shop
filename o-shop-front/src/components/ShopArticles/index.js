import React from 'react';
import Article from './Article';
import SearchBar from '../../containers/SearchBar';

const ShopArticles = ({changeSearchField, searchInputValue}) => (
    
    <div className="bg-white flex flex-wrap h-screen">
        <SearchBar 
        onChange={changeSearchField} // sera appelé avec value + name
        searchInputValue={searchInputValue}/>
        <div className="flex p-1 flex-wrap overflow-auto h-full">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    </div>
    );


export default ShopArticles;

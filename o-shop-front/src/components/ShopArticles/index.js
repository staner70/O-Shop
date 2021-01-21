import React from 'react';
import Article from './Article';
import SearchBar from '../../containers/SearchBar';

const ShopArticles = ({changeSearchField, searchInputValue}) => (
    <div className="flex flex-wrap h-screen">
        <SearchBar 
        onChange={changeSearchField} // sera appelé avec value + name
        searchInputValue={searchInputValue}/>
        <div className="flex flex-wrap overflow-auto h-90">
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

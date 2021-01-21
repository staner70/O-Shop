import React from 'react';
import propTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({
  searchInputValue, 
  onInputChange,
  search
}) => {
  const onChangeSearchInput = (evt) => {
    onInputChange(evt.target.value, search);
    console.log('oninputchange vaut :',onInputChange);
    console.log('Dans SearchBar')
    
  };
  return(
    <div
    className="flex mx-4 m-2 w-full focus:border-blue-500 p-1 bg-white ring-transparent border transition-colors duration-300 ease-in-out rounded-md focus:outline-none"
  >
    <input
      className="px-4 w-full focus:outline-none"
      type="text"
      name={search}
      placeholder="Rechercher un article"
      id=""
      value = {searchInputValue}
      onChange ={onChangeSearchInput}
    />
    {/* <button
      className="rounded-md justify-end bg-bgred h-full  text-white w-24 h-auto uppercase focus:outline-none"
    >
              <FontAwesomeIcon size="x" icon={faSearch} />        

    </button> */}
  </div>
  )
    };

SearchBar.propTypes = {
    searchInputValue: propTypes.string.isRequired,
    onChangeSearchInput: propTypes.func.isRequired,

    
};

export default SearchBar;
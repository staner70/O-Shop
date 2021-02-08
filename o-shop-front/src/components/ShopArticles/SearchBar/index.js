import React from 'react';
import propTypes from 'prop-types';
import AdminField from '../../adminModal/AdminField';

const SearchBar = ({
  inputValue, 
  onInputChange,
}) => {
  return(
    <div
    className="flex mx-4 m-2 w-full focus:border-blue-500 p-1 bg-white ring-transparent border transition-colors duration-300 ease-in-out rounded-md focus:outline-none"
  >

    <input
      className="px-4 w-full focus:outline-none"
      type="text"
      placeholder="Rechercher un article"
      id="recherche"
      name="search"
      value = {inputValue}
      onChange ={(event) => {
        onInputChange(event.target.value)
      }}
    />
  </div>
  )
    };

SearchBar.propTypes = {
    inputValue: propTypes.string.isRequired,
    onInputChange: propTypes.func.isRequired,

    
};

export default SearchBar;
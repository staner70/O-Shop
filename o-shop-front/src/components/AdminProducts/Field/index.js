// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleAdminChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="box-content	p-4 border-4 m-2 outline-none	 rounded-md bg-white">
      <input
        // React - state
        value={value}
        onChange={handleAdminChange}
        // infos de base
        id={inputId}
        type={type}
        className="outline-none"
        placeholder={placeholder}
        name={name}
        min="1"
        required
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
};

// == Export
export default Field;

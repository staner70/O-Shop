// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant
const UserField = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleUserChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="box-content	p-4 border-4 m-2 outline-none	 rounded-md bg-white">
      <input
        // React - state
        value={value}
        onChange={handleUserChange}
        // infos de base
        id={inputId}
        type={type}
        className="outline-none"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

UserField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
UserField.defaultProps = {
  value: '',
};

// == Export
export default UserField;

import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Logo from './logo.png';


const LoginForm = ({
  username,
  password,
  changeField,//done
  handleLogin,//done
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="flex flex-col justify-center sm:py-12  ">
      <img src={Logo} className="object-none" alt="Logo" />
      <form autoComplete="off" className="flex flex-col  items-center justify-center" onSubmit={handleSubmit}>
        <Field
          name="username"
          placeholder="identifiant"
          onChange={changeField} // sera appelé avec value + name
          value={username}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField} // sera appelé avec value + name
          value={password}
        />
        <button
          type="submit"
          className="box-content	px-12 py-3 border-4 rounded-md bg-bgred "
        >
          OK
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};


export default LoginForm;
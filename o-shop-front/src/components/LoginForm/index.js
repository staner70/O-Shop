import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Logo from './logo.png';
import Spinner from '../Spinner2';


const LoginForm = ({
  username,
  password,
  changeField,//done
  handleLogin,
  showSpinner//done
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
<>
{showSpinner && <Spinner />}


    <div className="flex flex-col bg-primary justify-center sm:py-12 h-screen w-screen ">
      <div className="flex flex-col m-auto bg-white rounded-lg p-4">

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
          className="box-content	px-12 py-3 m-2 text-white rounded-md bg-blue-400 "
        >
          OK
        </button>
      </form>
      </div>
    </div>
</>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};


export default LoginForm;
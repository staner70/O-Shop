import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { changeAuthField } from '../store/actions.js';

// cablage des données
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// cablage des actions
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // action creator : on appele une fonction qui fabrique l'action
    // le retour de cette fonction, est donné a dispatch
    dispatch(changeAuthField(value, name));
  },
  handleLogin: () => {
    // ici, on va envoyer une action pour faire la requete LOGIN
    // cette action va être attrapée par le middleware
    // qui fera la requete
    dispatch({ type: 'LOGIN' });
  },
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

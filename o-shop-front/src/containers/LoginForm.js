import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { changeAuthField } from '../store/actions.js';

// cablage des données
const mapStateToProps = (state) => ({
  username: state.auth.username,
  password: state.auth.password,
  isAdmin: state.auth.logged,
  showSpinner:state.adminuser.showSpinner,
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

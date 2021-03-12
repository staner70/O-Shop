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
    dispatch(changeAuthField(value, name));
  },
  handleLogin: () => {
    dispatch({ type: 'LOGIN' });
  },
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

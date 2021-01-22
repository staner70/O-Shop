import { connect } from 'react-redux';

import UserModal from '../components/UserModal';
import { changeAddUserField } from '../store/actions.js'; //A mettre dans actions

// cablage des données
const mapStateToProps = (state) => ({
  username: state.adminuser.username,
  firstname: state.adminuser.firstname,
  lastname: state.adminuser.lastname,
  password: state.adminuser.password,
  role_id: state.adminuser.role,
});

// cablage des actions
const mapDispatchToProps = (dispatch) => ({
  changeUserField: (value, name) => {
    // action creator : on appele une fonction qui fabrique l'action
    // le retour de cette fonction, est donné a dispatch
    dispatch(changeAddUserField(value, name));
  },
  handleUser: () => {
    // ici, on va envoyer une action pour faire la requete LOGIN
    // cette action va être attrapée par le middleware
    // qui fera la requete
    dispatch({ type: 'SUBMIT_USER' });
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);

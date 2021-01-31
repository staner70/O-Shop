import { connect } from 'react-redux';

import ProfilModal from '../components/ProfilModal';
import { logout } from '../store/actions.js';


// cablage des actions
const mapDispatchToProps = (dispatch) => ({
  onLogoutClick: () => {
    // action creator : on appele une fonction qui fabrique l'action
    // le retour de cette fonction, est donné a dispatch
    dispatch({type: 'LOGOUT'});
  },
 
});

export default connect(null, mapDispatchToProps)(ProfilModal);

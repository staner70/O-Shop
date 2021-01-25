import { connect } from 'react-redux';

import CategoryModal from '../components/adminModal/CategoryModal';
import { changeAddCategoryField } from '../store/actions.js'; //A mettre dans actions

// cablage des données
const mapStateToProps = (state) => ({
  name: state.admincategory.name,
  color: state.admincategory.color,
  isDone: state.admincategory.done,

});

// cablage des actions
const mapDispatchToProps = (dispatch) => ({
  changeCategoryField: (value, name) => {
    // action creator : on appele une fonction qui fabrique l'action
    // le retour de cette fonction, est donné a dispatch
    dispatch(changeAddCategoryField(value, name));
  },
  handleCategory: () => {
    // ici, on va envoyer une action pour faire la requete LOGIN
    // cette action va être attrapée par le middleware
    // qui fera la requete
    dispatch({ type: 'SUBMIT_CATEGORY' });
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);

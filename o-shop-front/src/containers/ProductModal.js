import { connect } from 'react-redux';

import ProductModal from '../components/adminModal/ProductModal';
import { changeAddProductField } from '../store/actions.js'; //A mettre dans actions

// cablage des données
const mapStateToProps = (state) => ({
  name: state.adminproduct.name,
  description: state.adminproduct.description,
  price: state.adminproduct.price,
  quantity: state.adminproduct.quantity,
  image:state.adminproduct.image,
  shop:state.adminproduct.shop,
  isDone: state.adminproduct.done,
  category: state.adminproduct.category,

  
});

// cablage des actions
const mapDispatchToProps = (dispatch) => ({
  changeProductField: (value, name) => {
    // action creator : on appele une fonction qui fabrique l'action
    // le retour de cette fonction, est donné a dispatch
    dispatch(changeAddProductField(value, name));
  },
  handleProduct: () => {
    // ici, on va envoyer une action pour faire la requete LOGIN
    // cette action va être attrapée par le middleware
    // qui fera la requete
    dispatch({ type: 'SUBMIT_PRODUCT' });
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);

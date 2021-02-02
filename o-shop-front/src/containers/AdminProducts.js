import { connect } from 'react-redux';
import AdminProducts from '../components/AdminProducts';

import { getProductsFromApi, deleteProductById ,changeEditProductField, editProductById } from '../store/actions';

const mapStateToProps = (state) => ({
    products: state.adminproduct.list,
    editName: state.adminproduct.editName,
    editCategory: state.adminproduct.editCategory,
    editPrice: state.adminproduct.editPrice,
    editDescription: state.adminproduct.editDescription,
    editShop: state.adminproduct.editShop,
    editQuantity:state.adminproduct.editQuantity,
    editImage:state.adminproduct.editImage,

  });

  const mapDispatchToProps = (dispatch) => ({
    getProducts: () => {
      dispatch(getProductsFromApi());
    },
    deleteProduct: (idProduct) => {
      dispatch(deleteProductById(idProduct));
      
    },
    editProduct: (idProduct) => {
      dispatch(editProductById(idProduct));
    },
    changeProductField: (value, name) => {
      // action creator : on appele une fonction qui fabrique l'action
      // le retour de cette fonction, est donné a dispatch
      dispatch(changeEditProductField(value, name));
    },
    handleProductEdit: () => {
      // ici, on va envoyer une action pour faire la requete LOGIN
      // cette action va être attrapée par le middleware
      // qui fera la requete
      dispatch({ type: 'SUBMIT_EDIT_PRODUCT' });
    },
  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
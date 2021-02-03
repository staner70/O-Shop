import { connect } from 'react-redux';
import AdminProducts from '../components/AdminProducts';

import { getProductsFromApi, deleteProductById ,changeEditProductField, editProductById } from '../store/actions';

const mapStateToProps = (state) => ({
    products: state.adminproduct.list,
    fieldName: state.adminproduct.editName,
    editCategory: state.adminproduct.editCategory,
    editPrice: state.adminproduct.editPrice,
    editDescription: state.adminproduct.editDescription,
    description: state.adminproduct.editDescription,
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
    changeAdminProductField: (value, name) => {
      dispatch(changeEditProductField(value, name));
    },
    handleProductEdit: () => {
      dispatch({ type: 'SUBMIT_EDIT_PRODUCT' });
    },
  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
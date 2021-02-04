import { connect } from 'react-redux';
import AdminProducts from '../components/AdminProducts';

import { getProductsFromApi, deleteProductById, getCategoriesFromApi, changeEditProductField, editProductById } from '../store/actions';

const mapStateToProps = (state) => ({
    products: state.adminproduct.list,
    categories: state.admincategory.list,
    fieldName: state.adminproduct.editName,
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
    getCategories: () => {
      dispatch(getCategoriesFromApi());
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
import { connect } from 'react-redux';
import AdminProducts from '../components/AdminProducts'

import { getProductsFromApi, deleteProductById,getCategoriesFromApi } from '../store/actions';

const mapStateToProps = (state) => ({
    products: state.adminproduct.list,
    categories: state.admincategory.list
  });

  const mapDispatchToProps = (dispatch) => ({
    getProducts: () => {
      dispatch(getProductsFromApi());
      
    },
    deleteProduct: (idProduct) => {
      dispatch(deleteProductById(idProduct));
      
    },
    getCategories: () => {
      dispatch(getCategoriesFromApi());
    }
   
  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
import { connect } from 'react-redux';
import AdminProducts from '../components/AdminProducts'

import { getProductsFromApi, deleteProductById } from '../store/actions';

const mapStateToProps = (state) => ({
    products: state.adminproduct.list,
  });

  const mapDispatchToProps = (dispatch) => ({
    getProducts: () => {
      dispatch(getProductsFromApi());
      
    },
    deleteProduct: (idProduct) => {
      dispatch(deleteProductById(idProduct));
      
    },
   
  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
import { connect } from 'react-redux';
import AdminProducts from '../components/AdminProducts'

import { getProductsFromApi } from '../store/actions';

const mapStateToProps = (state) => ({
    products: state.adminproduct.list,
  });

  const mapDispatchToProps = (dispatch) => ({
    getProducts: () => {
      dispatch(getProductsFromApi());
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
import { connect } from 'react-redux';
import AdminCategories from '../components/AdminCategories'

import { getCategoriesFromApi } from '../store/actions';

const mapStateToProps = (state) => ({
    categories: state.admincategory.list,
  });

  const mapDispatchToProps = (dispatch) => ({
    getCategories: () => {
      dispatch(getCategoriesFromApi());
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories);
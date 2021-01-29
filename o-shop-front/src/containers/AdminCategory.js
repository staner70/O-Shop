import { connect } from 'react-redux';
import AdminCategories from '../components/AdminCategories'

import { getCategoriesFromApi, deleteCategoryById } from '../store/actions';

const mapStateToProps = (state) => ({
    categories: state.admincategory.list,
  });

  const mapDispatchToProps = (dispatch) => ({
    getCategories: () => {
      dispatch(getCategoriesFromApi());
    },
    deleteCategory: (idCategory) => {
      dispatch(deleteCategoryById(idCategory));
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories);
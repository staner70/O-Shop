import { connect } from 'react-redux';
import AdminCategories from '../components/AdminCategories'

import { getCategoriesFromApi, deleteCategoryById, changeEditCategoryField, editCategoryById } from '../store/actions';

const mapStateToProps = (state) => ({
    categories: state.admincategory.list,
    editCategoryName: state.admincategory.editCategoryName,
    editCategoryColor: state.admincategory.editCategoryColor,
    showSpinner:state.adminuser.showSpinner,

  });

  const mapDispatchToProps = (dispatch) => ({
    getCategories: () => {
      dispatch(getCategoriesFromApi());
    },
    deleteCategory: (idCategory) => {
      dispatch(deleteCategoryById(idCategory));
    },
    editCategory: (idCategory) => {
      dispatch(editCategoryById(idCategory));
    },
    changeAdminCategoryField: (value, name) => {
      dispatch(changeEditCategoryField(value, name));
    },
    handleCategoryEdit: () => {
      dispatch({ type: 'SUBMIT_EDIT_CATEGORY' });
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories);
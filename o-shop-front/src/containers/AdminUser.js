import { connect } from 'react-redux';
import AdminUser from '../components/AdminUser'

import { getUsersFromApi, deleteUserById, getRolesFromApi, changeEditUserField, editUserById } from '../store/actions';

const mapStateToProps = (state) => ({
    users: state.adminuser.list,
    roles: state.adminrole.list,
    editLastName: state.adminuser.editLastName,
    editFirstName: state.adminuser.editFirstName,
    editUserName: state.adminuser.editUserName,
    // editPassword: state.adminuser.editPassword,
    editRole: state.adminuser.editRole,
    editShop: state.adminuser.editShop,
    showSpinner:state.adminuser.showSpinner,

  });

  const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
      dispatch(getUsersFromApi());
    },
    deleteUser: (idUser) => {
      dispatch(deleteUserById(idUser));
    },
    getRoles: () => {
      dispatch(getRolesFromApi());
    },
    editUser: (idUser) => {
      dispatch(editUserById(idUser));
    },
    changeAdminUserField: (value, name) => {
      dispatch(changeEditUserField(value, name));
    },
    handleUserEdit: () => {
      dispatch({ type: 'SUBMIT_EDIT_USER' });
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
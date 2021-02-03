import { connect } from 'react-redux';
import AdminUser from '../components/AdminUser'

import { getUsersFromApi, deleteUserById, getRolesFromApi } from '../store/actions';

const mapStateToProps = (state) => ({
    users: state.adminuser.list,
    roles: state.adminrole.list
  });

  const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
      dispatch(getUsersFromApi());
    },
    deleteUser: (idUser) => {
      console.log(idUser);
      dispatch(deleteUserById(idUser));
    },
    getRoles: () => {
      dispatch(getRolesFromApi());
    }
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
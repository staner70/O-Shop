import { connect } from 'react-redux';
import AdminUser from '../components/AdminUser'

import { getUsersFromApi, deleteUserById } from '../store/actions';

const mapStateToProps = (state) => ({
    users: state.adminuser.list,
  });

  const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
      dispatch(getUsersFromApi());
    },
    deleteUser: (idUser) => {
      console.log(idUser);
      dispatch(deleteUserById(idUser));
      
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
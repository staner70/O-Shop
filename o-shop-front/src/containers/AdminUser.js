import { connect } from 'react-redux';
import AdminUser from '../components/AdminUser'

import { getUsersFromApi } from '../store/actions';

const mapStateToProps = (state) => ({
    users: state.adminuser.list,
  });

  const mapDispatchToProps = (dispatch) => ({
    getUsers: () => {
      dispatch(getUsersFromApi());
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
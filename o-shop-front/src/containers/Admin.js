import { connect } from 'react-redux';
import Admin from '../components/Admin';

const mapStateToProps = (state) => ({
    isAdmin: state.auth.isAdmin,
    showSpinner:state.adminuser.showSpinner,
    
  });

  export default connect(mapStateToProps)(Admin);
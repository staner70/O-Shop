import { connect } from 'react-redux';
import Admin from '../components/Admin';

const mapStateToProps = (state) => ({
    isAdmin: state.auth.isAdmin,
    
  });

  export default connect(mapStateToProps)(Admin);
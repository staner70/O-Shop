import { connect } from 'react-redux';
import App from '../App.js'

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    isLogged: state.auth.logged,
    
  });

  export default connect(mapStateToProps)(App);
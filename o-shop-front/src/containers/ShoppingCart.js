import { connect } from "react-redux";
import ShoppingCart from '../components/ShoppingCart';


const mapStateToProps = (state) => {
  return {
    cart: state.adminproduct.cart,
    total: state.adminproduct.cart.total,
  };
};

export default connect(mapStateToProps)(ShoppingCart);

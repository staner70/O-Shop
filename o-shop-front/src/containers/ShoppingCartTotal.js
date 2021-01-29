import { connect } from "react-redux";
import ShoppingCartTotal from '../components/ShoppingCart/ShoppingCartTotal';


const mapStateToProps = (state) => ({
    total : state.adminproduct.cart.total,
});

export default connect(mapStateToProps)(ShoppingCartTotal);

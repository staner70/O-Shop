import { connect } from "react-redux";
import ShoppingCartItem from '../components/ShoppingCart/ShoppingCartItem';

import {
  adjustItemQty,
  removeFromCart,
} from '../store/actions';

const mapDispatchToProps = (dispatch) => {
    return {
      adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(ShoppingCartItem);
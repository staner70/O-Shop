import Article from '../components/ShopArticles/Article';

import { connect } from "react-redux";
import {
  addToCart,
} from '../store/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Article);
